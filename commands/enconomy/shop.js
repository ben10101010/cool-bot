const db = require('quick.db');
const Discord = require('discord.js')
module.exports={
    name: 'shop',
    description: "Opens the shop",
    guildOnly: true,
    execute(message, args){
      let embed = new Discord.MessageEmbed()
      .setTitle(`\*\*Shop\*\*`)
      .addField(`Shoe`, `**$700**\nGives you a shoe`)
      .addField(`Axe`, `**$1800**\nUse this to cut down trees`)
      .addField(`Laptop`, `**800**\nUse this to post memes`)
      .setColor("RANDOM")

      message.channel.send(embed)
    }
}