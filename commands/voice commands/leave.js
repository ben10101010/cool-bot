const Discord = require('discord.js');
const ytdl = require('ytdl-core-discord');
module.exports={
    name: 'leave',
    description: "makes the bot leave the voice channel",
    guildOnly: true,
    async execute(message, args){
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.leave();
    } else {
      message.channel.send("You need to be in a voice channel to run this command!");
          
    }
  } 
}