const db = require('quick.db');
const Discord = require('discord.js')
const ms = require('ms')
const disbut = require('discord-buttons')
module.exports={
    name: 'kill',
    description: "Kill's whoever you ping",
    guildOnly: true,
    args: true,
    async execute(message, args){
      let mention = message.mentions.members.first();
      let user = mention.user.username
      let author = message.author.username;
      if (message.author.id === mention.id) return message.channel.send("You can not kill you're-self");
      const array = [`${user} was struck by lightning!`, `${user} died because they stole ${author}'s hammer`, `Satan stole ${user}'s soul`, `${user} decided to rob the bank but was shot by the police officer ${author} and ended up dying`]

      message.channel.send(array[Math.floor(Math.random() * array.length)])
    }
}