const db = require('quick.db');
const Discord = require('discord.js')
const disbut = require('discord-buttons')
module.exports={
    name: 'pay',
    description: "gives people your money",
    guildOnly: true,
    async execute(message, args){
      let user = message.mentions.members.first()
      let member = db.fetch(`money_${message.author.id}`)


      if(isNaN(args[0])){
        return message.channel.send("That is not a number!")
      }
      if(!user){
        return message.channel.send('you forgot to mention somebody.')
      }
      if(!args[0]){
        return message.channel.send('Please specify an amount.')
      }
      if(message.content.includes('-')){
        return message.channel.send('Negative money can not be paid.')
      }
      if(member < args[0]){
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
      }

      let button1 = new disbut.MessageButton()
      .setStyle('green')
      .setLabel('Yes')
      .setID('button_yes')

    let button2 = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('No')
      .setID('button_no')

    let row = new disbut.MessageActionRow()
      .addComponents(button1, button2);

    let embed = new Discord.MessageEmbed()
        .setAuthor(`Paying ${user.user.username}`, message.author.displayAvatarURL())
        .setDescription(`Are you sure you want to pay ${user.user.username} ${args[0]}?`)

    let msg = await message.channel.send(embed, row)
    let collector = msg.createButtonCollector((b) => b, { time: 20000 });

collector.on('collect', async (button) => {

      if(button.clicker.user.id != message.author.id) return;
  if(button.id === 'button_yes'){
      button.channel.send(`${message.author.tag}, You successfully paid ${user.user.username} $${args[0]}.`)
      db.add(`money_${user.id}`, args[0])
      db.subtract(`money_${message.author.id}`, args[0])
      button.reply.defer();
}else if(button.id === 'button_no'){
    button.channel.send('Cancelled')
    button.reply.defer();
  }

})
    }
}