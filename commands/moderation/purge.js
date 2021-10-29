const db = require('quick.db');
const Discord = require('discord.js')
const ms = require('ms')
module.exports={
    name: 'purge',
    description: "Bulk deletes a number of messages",
    async execute(message, args){
      if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("You need message deleting perms for that!")
      if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I need perms to delete messages for that!")
      const purgetime = db.fetch(`purgetime_${message.author.id}`)

      const timeout = 6000
      
      if(isNaN(args[0])){
        message.channel.send("That's not a valid number! (max 100)");
      }else if(purgetime !== null && timeout - (Date.now() - purgetime) > 0) {
        const timeleft = ms(timeout - (Date.now() - purgetime))
        
        message.reply(`Please wait ${timeleft} to use this command again!`).then(i => i.delete({timeout: 4000}));
      }else{
        message.channel.bulkDelete(args[0], true)
        db.set(`purgetime_${message.author.id}`, Date.now())
      }
    }
}