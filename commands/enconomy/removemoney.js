const db = require('quick.db');
const Discord = require('discord.js')
const disbut = require('discord-buttons')
module.exports={
    name: 'removemoney',
    description: "Adds money to your balance (Owner Only)",
    guildOnly: true,
    ownerOnly: true,
    async execute(message, args){

    if (!args[0]) return message.reply('Please specify an amount to remove.')
    if (isNaN(args[0])) return message.reply('That was not a valid number!')
    let user = message.mentions.users.first() || message.author
    let bal = await db.fetch(`money_${user.id}`);
    if (args[0] > bal) return message.reply("That's more than they have in their balance!")


    let button1 = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('Cancel')
      .setID('No')

    let button2 = new disbut.MessageButton()
      .setStyle('green')
      .setLabel('Confirm')
      .setID('Yes')

    
    let row = new disbut.MessageActionRow()
      .addComponents(button2, button1);
    
  
      let number = args[0];
      
    let updated = bal
    updated -= args[0]
      
     let embed = new Discord.MessageEmbed()
      .setAuthor(`Removing Money!`, message.author.displayAvatarURL())
      .addField(`Amount`, `$${number}`)
      .addField(`Balance Updated`, `$${updated}`)
      .setColor("RED")
      .setTimestamp();
    let msg = await message.channel.send(embed, row)
    let collector = msg.createButtonCollector((b) => b, { time: 60000 });

collector.on('collect', async (button) => {

  if(button.clicker.user.id != '717500798317101086') return;
  if(button.id === 'No'){
    button.channel.send("Cancelled.")
    button.reply.defer();
  }else if(button.id === 'Yes'){
    db.subtract(`money_${user.id}`, args[0])
    button.channel.send(`Removed $${args[0]} from ${user.tag}`)
    button.reply.defer();
  }

})
      
  }
}