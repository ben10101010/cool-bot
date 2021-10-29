const db = require('quick.db');
const Discord = require('discord.js')
const disbut = require('discord-buttons')
module.exports={
    name: 'bal',
    description: "Checks your balance",
    guildOnly: true,
   async execute(message, args){
      let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
      let username = user.user.username
      let userID = user.id
    
    
    let bal = db.fetch(`money_${user.user.id}`)

    if (bal === null) bal = 0;
    if (bal <= -1) return bal = 0;

    const embed = new Discord.MessageEmbed()
    .setTitle(`${user.user.username}'s Balance `)
    .setDescription('**Bal**: ⏣ ' + bal)
    .setColor("BLACK")
    .setTimestamp();

      //message.channel.send('You have a balance of `' + bal + '`')
      message.channel.send(embed)
    
    }
}