const Discord = require('discord.js');
module.exports={
    name: 'kick',
    description: "kicks players from the guild",
    args: true,
    execute(message, args){
      const target = message.mentions.users.first();
      if(!message.member.hasPermission("KICK_MEMBERS")){
            message.channel.send("You do not have permission to do that!")
        }else if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }
    
  }