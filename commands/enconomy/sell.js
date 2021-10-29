const db = require('quick.db');
const Discord = require('discord.js')
module.exports={
    name: 'sell',
    description: "Sells your items",
    guildOnly: true,
    args: true,
    async execute(message, args){
      let user = message.author;
      if(args[0].toLowerCase() == 'shoe'){
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:x: You don't have a Shoe to sell`);
        let shoes = await db.fetch(`shoe_${user.id}`)

        if (shoes < 0) return message.channel.send(Embed2)
       
        db.fetch(`shoe_${user.id}`)
        db.subtract(`shoe_${user.id}`, 1)
        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Sold 1 Shoe's For $700 leaving you with ${shoes} shoes`);

        db.add(`money_${user.id}`, 700)

       message.channel.send(Embed3)

      }else if(args[0].toLowerCase() == 'laptop'){
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:x: You don't have a Laptop to sell`);

        let pc = await db.fetch(`laptop_${user.id}`)

        if (pc < 0) return message.channel.send(Embed2)
       
        db.fetch(`laptop_${user.id}`)
        db.subtract(`laptop_${user.id}`, 1)
        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Sold a Laptop For $800 leaving you with ${pc} laptops`);

        db.add(`money_${user.id}`, 700)
        message.channel.send(Embed3)
      }else if(args[0].toLowerCase() == 'axe'){
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:x: You don't have a Axe to sell`);

        let axes = await db.fetch(`axe_${user.id}`)

        if (axes < 0) return message.channel.send(Embed2)
       
        db.fetch(`axe_${user.id}`)
        db.subtract(`axe_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Sold an Axe For $1800 leaving you with ${axes} axes`);

        db.add(`money_${user.id}`, 700)
        message.channel.send(Embed3)
      }
    }
}