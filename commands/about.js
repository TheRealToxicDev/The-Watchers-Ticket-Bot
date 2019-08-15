//This is the bots required node modules, certain aspects of the code will not work without this.
const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone : true,
  fetchAllMembers : true
});
 
const config = require("../data/config.json");
const fs = require("fs");
const snekfetch = require('snekfetch');

//This SHOULD allow us to use the "client, message & args" async functions.(Example: message.author.id)
exports.run = async (client, message, args) => {
 
//This is your Command or Discord Rich Embed code Line followed by the end of the command. OR close "}" bracket
    const embed = new Discord.RichEmbed()
    .setTitle(`About ツ Ticket Bot ツ`)
    .setColor(0x00AE86)
    .setDescription(`Hello! I'm ツ Ticket Bot ツ. the Discord bot for super cool support tickets, i was originally created as a custom suppoort ticket bot for ツThe Watchers Bot Devsツ coded in the \`discord.js library\` If you are interested in inviting me to your server use the command tw/help`)
        .addField(`Command List`, `[tw/commands]`)
   .setFooter(`ツ Ticket Bot ツ v1.00`, `http://i.imgur.com/bt9OsRs.jpg`)
   .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.channel.send({ embed: embed });
  }
