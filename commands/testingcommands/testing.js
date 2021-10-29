const db = require('quick.db');
const Discord = require('discord.js')
const ms = require('ms')
const disbut = require('discord-buttons')
module.exports={
    name: 'gamewat',
    description: "no",
    guildOnly: true,
    args: true,
    async execute(message, args){
      let array = [`${args[0]}`]
      console.log(array[Math.floor(Math.random() * array.length)])
      let numbers = []
      let number1 = args[0]
      if (args[0].length >= 4){
        numbers.push(args[0].split("").reverse().join(""))
      }
      let number2 = numbers[Math.floor(Math.random() * numbers.length)]
      let final = number1 - number2
      message.channel.send(final)
      console.log(final)
      numbers.pop(args[0])
      array.pop(args[0])
      array.push(final)
      numbers.push(final.split("").reverse().join(""))
      console.log(array)
      console.log(numbers)
    }
}