const Discord = require('discord.js');
module.exports={
    name: 'say',
    description: "Repeats what you just said",
    args: true,
    execute(message, args){
       const sayEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("RANDOM")

    message.channel.send(sayEmbed)
  }
  
}