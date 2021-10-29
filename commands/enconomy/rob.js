const db = require('quick.db');
const ms = require('ms')
const Discord = require('discord.js')
module.exports={
    name: 'rob',
    description: "Let's you rob other users",
    guildOnly: true,
    async execute(message, args){

      const random = (min, max) => {
            return Math.floor(Math.random() * (max - min) ) + min
      }
      let user = message.mentions.members.first()
      let targetuser = await db.fetch(`money_${user.id}`)
      let author = await db.fetch(`money_${message.author.id}`)

      if(!user){
        return message.channel.send('Sorry, you forgot to mention somebody.')
      }
      if(author<500){
        return message.channel.send(`:x: You need at least $500 to rob somebody.`)
      }
      if(targetuser<500){
        return message.channel.send(`:x: ${user.user.username} does not even have $500. It's not worth it...`)
      }
      if(user.id == message.author.id){
        return message.channel.send(`You can\'t rob yourself!!!`)
      }
      const timeout = 60000
      let options = [
            'Success',
            'Failed'
        ]
        let robbed = random(0, parseInt(options.length))
        let final = options[robbed]
        const robtime = db.fetch(`robtime_${user.id}`)

      

      if(robtime !== null && timeout - (Date.now() - robtime) > 0) { // CoolDown
            const timeleft = ms(timeout - (Date.now() - robtime))

            const embedd = new Discord.MessageEmbed()
            .setAuthor(`${user.user.username} Robbed`, user.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM')
            .setDescription(`
Already Robbed, Rob Again In **${timeleft} Seconds**
Default CoolDown Is **1 Minutes**
            `)
            message.channel.send(embedd)
        
      }else if(final === 'Success'){
        const targetuserRemove = targetuser/2

      const amount = Math.floor(Math.random() * targetuserRemove) + 100
      if (amount > targetuser){
        amount = 500
      }
      let embed = new Discord.MessageEmbed()
      .setAuthor(`${user.user.username} Robbed`, user.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`${message.author} you robbed ${user} and got away with ${amount}`)
      .setColor("GREEN")
      .setTimestamp();
      db.subtract(`money_${user.id}`, amount)
      db.add(`money_${message.author.id}`, amount)

      message.channel.send(embed)
      db.set(`robtime_${user.id}`, Date.now())
    }else if(final === 'Failed'){
       const targetuserRemove = targetuser/2
      let amount2 = Math.floor(Math.random() * targetuserRemove) + 100;
      if (amount2 > author){
        amount2 = 500;
      }
      let embed2 = new Discord.MessageEmbed()
      .setAuthor(`${user.user.username} Robbed`, user.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`${message.author} you got caught robbing ${user} and had to pay them ${amount2}`)
      .setColor("RED")
      .setTimestamp();
      db.add(`money_${user.id}`, amount2)
      db.subtract(`money_${message.author.id}`, amount2)

      message.channel.send(embed2)
      db.set(`robtime_${user.id}`, Date.now())
    }
    
  }
}