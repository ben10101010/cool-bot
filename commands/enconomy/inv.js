const db = require('quick.db');
const Discord = require('discord.js')
const disbut = require('discord-buttons')
module.exports={
    name: 'inv',
    description: "Shows your inv",
    guildOnly: true,
    execute(message, args){
      let shoe = db.fetch(`shoe_${message.author.id}`)
      let laptop = db.fetch(`laptop_${message.author.id}`)     
      let axe = db.fetch(`axe_${message.author.id}`) 
      if(shoe === null) shoe = 0;
      if(laptop === null) laptop = 0;
      if(axe === null) axe = 0;
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}\'s inv`)
        .setDescription(`**Shoes**: ${shoe}\n**laptops**: ${laptop}\n**axe**: ${axe}`)
        .setColor("RANDOM")
        message.channel.send(embed)
      
    }
}