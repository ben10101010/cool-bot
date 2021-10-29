//made by Ben_10___
const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')
const config = require('./config.json');
const client = new Discord.Client({ disableMentions: 'everyone' });
require('discord-buttons')(client);
const disbut = require('discord-buttons')
const prefix = '$';

const fs = require('fs');



client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

var http = require('http');

http.createServer(function (req, res) {
  res.write("To be or not to be is the question.");
  res.end();
}).listen(8080);

client.once('ready', () => {
  console.log('Ready!');
  const guilds = client.guilds.cache.map(guild => guild.id);
  console.log(guilds);
  

  setInterval(() => {
     let stuff = ["The years go by fast. » $help", "leave feedback! » $help", `${client.guilds.cache.size} servers » $help`];
    client.user.setActivity(stuff[Math.floor(Math.random() * 3)]);
  }, 5000);

});

client.on("guildCreate", guild => {
  
let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})

  const joinEmbed = new Discord.MessageEmbed()
  .setDescription(`\`Thank you for letting me join this server! I have many features which you can all find with $help. Most commands are not listed in the help section as they might be private commands. I am now officaly in ${client.guilds.cache.size} servers. This number changes every time I join or leave a server. You can also see my prefix and how much servers I'm in by looking at my status.\``)
  .setTimestamp()
  .setColor("RANDOM")
  .setAuthor("Cool Bot", client.user.displayAvatarURL({ dynmaic: true }))
defaultChannel.send(joinEmbed)
    
   
});


client.on('message', message => {
  let blacklisted = "";

  if(message.author == blacklisted) return message.channel.send("You are blacklisted from using this bot!")

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!client.commands.has(commandName)) return;

  if (command.args && !args.length) {
    return message.channel.send(`You didn't provide any arguments!`);
  }

  if (command.guildOnly && message.channel.type === 'dm') {
    return message.reply('I can\'t execute that command inside DMs!');
  }
  if(command.ownerOnly && message.author != "717500798317101086"){
    return message.channel.send("Only the owner of the bot can execute this command!")
  }
  let devs = "717500798317101086"
  if(command.botDevs && message.author != devs){
    return message.channel.send("This command is for bot devs only!")
  }

  try {
    client.commands.get(commandName).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }


  /*
   if (command === 'train pic') {
     message.channel.send('https://tenor.com/view/steam-train-im-coming-gif-7189638');
  }else if (command === 'rabbit pic') {
     message.channel.send('https://tenor.com/view/snowball-look-snowball-the-secret-life-of-pets-cute-rabbit-gif-16670303');
  }else if (command === 'snake pic') {
     message.channel.send('https://tenor.com/view/animal-wild-snake-phyton-gif-17893332');
  }else if (command === 'who pinged me?') {
     message.channel.send('https://tenor.com/view/who-pinged-me-ping-discord-up-opening-door-gif-20065356');
  }else if (command === 'ghost ping') {
     message.channel.send('https://tenor.com/view/ghost-ping-when-i-get-a-ghost-gif-21411945');
  }else if (command === 'invite') {
     message.channel.send('https://discord.gg/q3AFBZkg53');
  }else if (command === 'drumroll please!') {
     message.channel.send('https://tenor.com/view/excited-so-drums-gif-11982656');
  }*/

});

let staffApps = false;

client.on('message', async message => {
 const DMC = client.channels.cache.get('868953615803498506'); 
  if(message.author.bot) return;
  if(staffApps === false){
if(message.channel.type == "dm"){
      const dmEmbed = new Discord.MessageEmbed()
    .setTitle('New DM')
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(`\*\*User:\*\* \`\`\`${message.author.tag}\`\`\`\n\*\*User ID:\*\* \`\`\`${message.author.id}\`\`\`\n**At:** \`\`\`${new Date()}\`\`\`\n\*\*Content:\*\* \`\`\`${message.content}\`\`\``)

    
    DMC.send(dmEmbed);
  }
}

  if(message.content.startsWith("$sdm") && DMC){
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const msg = message.content.slice(args.length + 1).trim().split(/ +/);
      const [user, ...restArgs] = msg;
      const text = restArgs.join(' ');
      const embed = new Discord.MessageEmbed()
      .setTitle("New message!")
      .setColor("RANDOM")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
      .setDescription(`${text}`)
    let userID = args[1]
    if(!args[1]) return message.channel.send("You need to send a message!");
    client.users.fetch(`${userID}`).then(dm => {
    dm.send(embed)
})
  }

  if(staffApps === true){
      let count;
      
      let counting;
      count = true;
      let number = 1;
      if(number == 1){
        counting = "IGN"
        setTimeout(counting = "", 2000)
        count = 2;
      }else if(number == 2){
        counting = "DN"
        counting = ""
        count = 3;
      }

      let messages;
      if(counting == "IGN"){
        messages = "[IGN] " + message.content
        counting = "DN"
      }else if(counting == "DN"){
        messages = "[DN] " + message.content
        counting = "Age"
      }else if(counting == "Age"){
        messages = "[Age] " + message.content
        counting = "TimeZ"
      }else if(counting == "TimeZ"){
        messages = "[TimeZ] " + message.content
        counting = "Reason"
      }else if(counting == "Reason"){
        messages = "[Reason] " + message.content
        counting = "IGN"
      }
      const dmEmbed2 = new Discord.MessageEmbed()
    .setTitle('New Staff Application')
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(`\*\*User:\*\* \`\`\`${message.author.tag}\`\`\`\n\*\*User ID:\*\* \`\`\`${message.author.id}\`\`\`\n**At:** \`\`\`${new Date()}\`\`\`\n\*\*Content:\*\* \`\`\`${messages}\`\`\``)
const filter = m => (m.content.includes('discord') && m.author.id != client.user.id);
    const channel = message.channel;
    const collector = channel.createMessageCollector(filter, { time: 10000 });
    collector.on('collect', m => console.log("Wat"));
    collector.on('end', collected => DMC.send(dmEmbed2));
    

  

      
  }
});



let userApplications = {}

const questions = [
  "What's your IGN?",
  "Whats you discord username?",
  "How old are you?",
  "What time zone do you reside in?",
  "Why do you want to be staff?"
];

const applying = [];

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm"){

  if (message.content.toLowerCase() === "staffapply") {
    if (applying.includes(message.author.id)) return;
    staffApps = true

    try {
      console.log(`${message.author.tag} began applying.`);

      applying.push(message.author.id);
      await message.channel.send(":pencil: **Application started!** Type `#cancel` to exit.");

      for (let i = 0, cancel = false; i < questions.length && cancel === false; i++) {
        await message.channel.send(questions[i]);
        await message.channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 300000, errors: ["time"] })
          .then(collected => {
            if (collected.first().content.toLowerCase() === "#cancel") {
              message.channel.send(":x: **Application cancelled.**");
              applying.splice(applying.indexOf(message.author.id), 1);
              cancel = true;

              console.log(`${message.author.tag} cancelled their application.`);
            }
          }).catch(() => {
            message.channel.send(":hourglass: **Application timed out.**");
            applying.splice(applying.indexOf(message.author.id), 1);
            cancel = true;
            
            console.log(`${message.author.tag} let their application time out.`);
          });
      }

      await message.channel.send(":thumbsup: **You're all done!**");

      console.log(`${message.author.tag} finished applying.`);
      staffApps = false;
    } catch (err) {
      console.error(err);
    }
  }

  }

});



client.login(process.env.token);
