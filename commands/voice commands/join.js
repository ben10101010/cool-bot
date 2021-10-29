const Discord = require('discord.js');
const ytdl = require('ytdl-core-discord');
module.exports={
    name: 'join',
    description: "makes the bot join the voice channel",
    guildOnly: true,
    async execute(message, args){
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.channel.send("You need to be in a voice channel to run this command!");
          
    }
  } 
}