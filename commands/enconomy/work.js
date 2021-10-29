const db = require('quick.db');
const ms = require('ms')
const Discord = require('discord.js')
module.exports={
    name: 'work',
    description: "Makes you work for money",
    guildOnly: true,
    execute(message, args){
      let user = message.author

      const worktime = db.fetch(`worktime_${user.id}`)

      const timeout = 3600000
      if(!args[0]){
        let embed = new Discord.MessageEmbed()
        .setDescription(`**Work List**: \n**Gamer**\n**constructor**\n**programmer**`)
        .setColor("RANDOM")
        message.channel.send(embed)
      }else if(args[0].toLowerCase() == 'list'){
        let embed = new Discord.MessageEmbed()
        .setDescription(`**Work List**: \n**Gamer**\n**constructor**\n**programmer**`)
        .setColor("RANDOM")
        message.channel.send(embed)
      }else if(worktime !== null && timeout - (Date.now() - worktime) > 0) { // CoolDown
            const timeleft = ms(timeout - (Date.now() - worktime))

            const embedd = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} Worked`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM')
            .setDescription(`
Already Worked, Work Again In **${timeleft} Minutes**
Default CoolDown Is **1 Hour** 
            `)
            message.channel.send(embedd)
        
      }else if (args[0].toLowerCase() == 'gamer') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a gamer & got payed $${amount} for playing Minecraft!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
        db.set(`worktime_${user.id}`, Date.now())
    } else if(args[0].toLowerCase() == 'constructor') {
        let amount = Math.floor(Math.random() * 800) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed $${amount} for rebuilding the empire state building.`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
        db.set(`worktime_${user.id}`, Date.now())
    } else if(args[0].toLowerCase() == 'programmer') {
        let amount = Math.floor(Math.random() * 900) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned $${amount}!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
        db.set(`worktime_${user.id}`, Date.now())
    }
  }
}