const Discord = require('discord.js');
module.exports={
    name: 'snekmode',
    description: "activates snek mode",
    async execute(message, args){
      let msg = await message.channel.send("ACTIVATING SNEK MODE!");
      setTimeout(()=>{msg.edit("Error snek mode malfunctioning!")}, 5000);

    }
  }