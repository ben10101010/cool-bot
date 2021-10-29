const Discord = require('discord.js');
module.exports={
    name: 'unban',
    description: "unbans users from the guild",
    args: true,
    async execute(message, args){
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do  not have permission to ban someone!")
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I do not have permission to ban someone!")

      let reason = args.slice(1).join(" ")
      const userID = args[0]

      if(!reason) reason = 'No reason given.';
      //if(!isNaN(userID)) return message.channel.send("The ID stated is not a number.")

      message.guild.fetchBans().then(async bans => {
        if(bans.size == 0) return message.channel.send("This server does not have any bans")
        let bUser = bans.find(b => b.user.id == userID)
        if(!bUser) return message.channel.send("User is not not banned")
        await message.guild.members.unban(bUser.user, reason).catch(err =>{
          consoe.log(err)
          return message.channel.send("Something went wrong...")
        }).then(() =>{
          message.channel.send(`Successfully unbanned ${args[0]}`)
        })
      })


  }
}