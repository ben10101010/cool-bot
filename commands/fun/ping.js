const Discord = require('discord.js');
module.exports={
    name: 'ping',
    description: "ping command",
    execute(message, args){
      message.reply('pong!');
    }
}