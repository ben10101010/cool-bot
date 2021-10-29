const Discord = require('discord.js');
module.exports={
    name: 'ban',
    description: "bans users from the guild",
    args: true,
    async execute(message, args){
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do  not have permission to ban someone!")
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I do not have permission to ban someone!")

      let reason = args.slice(1).join(" ")
      const mentionedMember = message.mentions.members.first();

      if(!reason) reason = 'No reason given.';
      //if(!mentionedMember) return message.channel.send("Please mention an actual person...")
      if(!mentionedMember.bannable) return message.channel.send("I cannot ban that member.")


      const banEmbed = new Discord.MessageEmbed()
        .setTitle(`You have been banned from ${message.guild.name}`)
        .setDescription(`Reason: ${reason}`)
        .setTimestamp()
        .setColor("RANDOM")

      await mentionedMember.send(banEmbed).catch(err => console.log(err))
      await mentionedMember.ban({
        days: 7,
        reason: reason
      }).catch(err => console.log(err)).then(() => message.channel.send("Succesfully banned " + mentionedMember.user.tag))
  }
}