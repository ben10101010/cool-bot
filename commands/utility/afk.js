const Discord = require('discord.js');
const db = require('quick.db')
module.exports={
    name: 'afk',
    description: "Makes your status afk",
    async execute(message, args){
      const content = args.join(" ")
          await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
          const specialEmbed = new Discord.MessageEmbed()
          .setDescription(`You have been set to afk\n**Reason :** ${content}`)
          .setColor("GREEN")
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
          //message.channel.send(embed) 

          let mentioned = message.mentions.members.first();
    if(db.has(`afk-${mentioned.id}+${message.guild.id}`)){
  let status = await db.fetch(`afk-${message.author.id}+${message.guild.id}`)

  if(status){
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`This user (${mentioned.user.tag}) is AFK: \*\*${status}\*\*`)
    message.channel.send(embed).then(i => i .delete({timeout: 5000}));
  }

}

        let filter = m => m.author.id === message.author.id
    message.channel.send(specialEmbed).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 864000000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message) {
            let hasAFk = db.has(`afk-${message.author.id}+${message.guild.id}`)
        if(hasAFk){
          const embed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setDescription(`You are no longer afk!`)
        message.channel.send(embed).then(i => i.delete({timeout: 5000}));
        db.delete(`afk-${message.author.id}+${message.guild.id}`)
        }
          }
        })
    })
  }
}