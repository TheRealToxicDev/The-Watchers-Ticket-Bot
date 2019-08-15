// EVERYTHING BELOW THIS LINE IS REQUIRED DO NOT CHANGE ANY OF THIS UNLESS YOU KNOW WHAT YOU ARE DOING
// THESE ARE REQUIRED TO HELP THE BOT FUNCTION PROPERLY.
const Discord = require("discord.js");
const Music = require('discord.js-musicbot-addon');
const Enmap = require("enmap");
const fs = require("fs");
const snekfetch = require('snekfetch');
const talkedRecently = new Set();
const token = process.env.BOT_TOKEN;
const client = new Discord.Client();
const config = require('./data/config.json');
const PREFIX = process.env.PREFIX;
client.config = config;

// BELOW THIS LINE IS THE BOTS CONSOLE LOG READY MESSAGE, PLAY STATUS (NOW STREAMING) AND THE MESSAGE THAT IS SENT WHEN INVITED TO A NEW SERVER!!!
// YOU CAN CHANGE, DELETE OR EDIT THIS AS YOU WOULD LIKE BUT IT DOES GIVE THE BOT A NICE CLEAN LOOK 
client.on("ready",  async () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
 client.user.setGame(`tw/help in ${client.guilds.size} Servers`, `https://www.twitch.tv/monstercat`);
});

lient.on("guildCreate", (guild) => {
 client.user.setGame(`tw/help in ${client.guilds.size} Servers`, `https://www.twitch.tv/monstercat`);
const embed = new Discord.RichEmbed()
    .setTitle(`ツ Ticket Bot ツ`)
    .setColor(0x00AE86)
    .setDescription(`Hello!, Thanks for adding me to your guild!`)
	.addField(`About ツ Ticket Bot ツ`, `[${prefix}about] > Tells you everything you need to know about me`)
        .addField(`Help & Support`, `[${prefix}help] > Shows you my Help/Support message`)
        .addField(`Commands List`, `[${prefix}commands] > Shows my commands list and usage`)
        .addField(`Support Server`, `[Join Our Discord](https://discord.gg/Hg8jyzQ)`)
    .setFooter(`ツ Ticket Bot ツ v1.00`, `http://i.imgur.com/bt9OsRs.jpg`)
    .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    guild.owner.user.send({ embed: embed });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
 client.user.setGame(`tw/help in ${client.guilds.size} Servers`, `https://www.twitch.tv/monstercat`);
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

client.on('message', message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : '!';

});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

Music.start(client, {
  youtubeKey: "AIzaSyDu_YZn7ivq66a3baryXztxK8rFrERAKvA",
  prefix: config.prefix, // Prefix for the commands.
  global: true,            // Non-server-specific queues.
  maxQueueSize: 60,        // Maximum queue size of 25.
  clearInvoker: true,      // If permissions applicable, allow the bot to delete the messages that invoke it.
  helpCmd: 'musichelp',        // Sets the name for the help command.
  playCmd: 'play',        // Sets the name for the 'play' command.
  volumeCmd: 'volume',     // Sets the name for the 'volume' command.
  leaveCmd: 'begone',      // Sets the name for the 'leave' command.
  disableLoop: false        // Disable the loop command.
  });

// THE CLIENT LOGIN PROCESS (BOT READS THE TOKEN FROM HERE)
// ADDITIONALLY YOU COULD ADD YOUR OWNERID INSTEAD 
client.login(process.env.BOT_TOKEN);
