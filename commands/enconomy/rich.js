const db = require('quick.db');
const Discord = require('discord.js')
const disbut = require('discord-buttons')
module.exports={
    name: 'rich',
    description: "Shows you the leaderboard",
    guildOnly: true,
    execute(message, args){
      let guildID = message.guild
      const members = guildID.members.cache.map(member => member.id);
      let money = db.has(`money_${members.id}`, { sort: '.data'})
      let content = "";

      for(let i = 0; i < money.length; i++){
        let users = bot.users.get(money[i].id.split('_')[2]).username
        
        content += `${i+1}. ${users} ~ $${money[i].data}\n`
      }

      const embed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name} - LeaderBoard!`, message.guild.iconURL())
      .setDescription(content)
      .setColor(0x51267);

      message.channel.send(embed)
    }
}