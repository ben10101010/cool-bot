const Discord = require('discord.js');
module.exports={
    name: 'help',
    description: "bots help page",
    guildOnly: true,
    execute(message, args){
      /*const embed = new Discord.MessageEmbed()
        .setTitle('Cool Bot Commands')
        .setColor("RANDOM")
        .setDescription(`Commands: \`$help\`, \`$invite\`, \`$kick\`, \`$ban\`, \`$ping\`, \`$8ball\`, \`$server-info\`, \`$user-info\`, \`$join\`, \`$leave\`, \`$bal\`, \`$buy\`, \`$pay\`, \`$rich\`, \`$rob\`, \`$shop\`, \`$work\` `)
        .setTimestamp()
      .setAuthor(`Ben_10___#6378`)*/

      

     if(!args[0]){
      const embed2 = new Discord.MessageEmbed()
      .setTitle('Cool Bot Commands')
      .setColor("RANDOM")
      .setDescription(`**Currency**\n$help currency\n**Utility**\n$help utility\n**Moderation**\n$help moderation\n**Fun**\n$help fun\n**VoiceChat**\n$help voice `)
      
     // message.channel.send(embed);
     message.channel.send(embed2);
     }else if(args[0].toLowerCase() == 'currency'){
       const currencyBed = new Discord.MessageEmbed()
      .setTitle('Currency')
      .setColor("RANDOM")
      .setDescription(`\`$bal\`, \`$buy\`, \`$pay\`, \`$rich\`, \`$rob\`, \`$shop\`, \`$work\`, \`$sell\` `)
      .setTimestamp();
      message.channel.send(currencyBed)
     }else if(args[0].toLowerCase() == 'moderation'){
       const moderationBed = new Discord.MessageEmbed()
       .setTitle('Moderation')
       .setColor("RANDOM")
       .setDescription(`\`$ban\`, \`$unban\`, \`$kick\`, \`$purge (100 max)\` `)
       message.channel.send(moderationBed)
     }else if(args[0].toLowerCase() == 'utility'){
       const utilityBed = new Discord.MessageEmbed()
       .setTitle('Utility')
       .setColor("RANDOM")
       .setDescription(`\`$help\`, \`$invite\`, \`$server-info\`, \`$user-info\`, \`$afk\` `)
       message.channel.send(utilityBed)
     }else if(args[0].toLowerCase() == 'fun'){
       const funBed = new Discord.MessageEmbed()
       .setTitle('Fun')
       .setColor("RANDOM")
       .setDescription(`\`$8ball\`, \`$ping\`, \`$say\`, \`$kill\` `)
       message.channel.send(funBed)
     }else if(args[0].toLowerCase() == 'voice'){
       const voiceBed = new Discord.MessageEmbed()
       .setTitle('Voice Chat')
       .setColor("RANDOM")
       .setDescription(`\`$join\`, \`$leave\` `)
       message.channel.send(voiceBed)
     }
    }
  }