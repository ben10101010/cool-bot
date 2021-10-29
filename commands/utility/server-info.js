const Discord = require('discord.js');
module.exports={
    name: 'server-info',
    description: "Tells you name of the server",
    guildOnly: true,
    execute(message, args){
      let servericon = message.guild.iconURL();
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name}`)
      .setColor("RANDOM")
      .setDescription(`\`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\``)
      .setThumbnail(servericon)
      .setTimestamp();
      //message.channel.send(`Server name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
      message.channel.send(embed);
    }
  }