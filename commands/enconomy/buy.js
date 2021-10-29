const db = require('quick.db');
const Discord = require('discord.js')
const disbut = require('discord-buttons')
module.exports={
    name: 'buy',
    description: "Buys an item from the shop",
    guildOnly: true,
    execute(message, args){
      let author = db.fetch(`money_${message.author.id}`)
        const user = message.member
        const amount = 700
        const bal = db.fetch(`money_${user.id}`)
      if(args[0].toLowerCase() === 'shoe'){

        if(bal <amount){
          return message.reply(`You don't have enough money(\`$700\`)`)
        }else{
          const embed = new Discord.MessageEmbed()
          .setAuthor(`${user.user.username} Purchased`, user.user.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor('RANDOM')
          .setDescription(`${user.user.username} Successfully Purchased **1** *Shoe* for \`$700\``)
          .setFooter('Shop');
          message.channel.send(embed)
          db.add(`shoe_${user.id}`, 1)
          db.subtract(`money_${user.id}`, amount)
        }
      }else if(args[0].toLowerCase() === 'laptop'){

        if(bal <800){
          return message.reply(`You don't have enough money(\`$800\`)`)
        }else{
          const embed = new Discord.MessageEmbed()
          .setAuthor(`${user.user.username} Purchased`, user.user.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor('RANDOM')
          .setDescription(`${user.user.username} Successfully Purchased **1** *Laptop* for \`$700\``)
          .setFooter('Shop');
          message.channel.send(embed)
          db.add(`laptop_${user.id}`, 1)
          db.subtract(`money_${user.id}`, amount)
        }
      }else if(args[0].toLowerCase() === 'axe'){

        if(bal <1800){
          return message.reply(`You don't have enough money(\`$1800\`)`)
        }else{
          const embed = new Discord.MessageEmbed()
          .setAuthor(`${user.user.username} Purchased`, user.user.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor('RANDOM')
          .setDescription(`${user.user.username} Successfully Purchased **1** *Axe* for \`$1800\``)
          .setFooter('Shop');
          message.channel.send(embed)
          db.add(`axe_${user.id}`, 1)
          db.subtract(`money_${user.id}`, amount)
        }
      }
    }
}