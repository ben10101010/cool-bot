const { MessageEmbed } = require("discord.js");

module.exports = {
        name: "user-info",
        description: "Returns user information",
        args: true,
        guildOnly: true,

    async execute(message, args){
        let member = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
      
        if(!member)
        return message.channel.send("**Enter A Valid User!**");

        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => r.name).join(", ") || 'none';

        const embed = new MessageEmbed()
            .setTitle("User Info")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
            .setColor("GREEN")
            .addField("**User information**", `\`\`\`${member.displayName}\`\`\``)
            .addField("**ID**", `\`\`\`${member.user.id}\`\`\``)
            .addField("**Username**",`\`\`\`${member.user.username}\`\`\``)
            .addField("**Tag**", `\`\`\`${member.user.tag}\`\`\``)
            .addField("**Created at**", `\`\`\`${member.user.createdAt}\`\`\``)
            .addField("**Joined at**", `\`\`\`${member.joinedAt}\`\`\``)
            .addField("**Roles**", `\`\`\`${roles}\`\`\``, true)
            .setTimestamp()

            member.presence.activities.forEach((activity) => {
        if (activity.type === 'PLAYING') {
            embed.addField('Currently playing',`\n**${activity.name}**`)
        }
            })

        message.channel.send(embed);
    }
}