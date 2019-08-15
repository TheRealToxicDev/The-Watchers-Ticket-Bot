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
    .setTitle(`Invite ツ Ticket Bot ツ To Your Server`)
    .setColor(0x00AE86)
    .setDescription(`Interested in inviting me to your server? Use the link below`)
       .addField(`My Invite Link`, `[Invite Me Here](https://discordapp.com/api/oauth2/authorize?client_id=585966981576917014&permissions=8&scope=bot)`) 
    .setFooter(`ツ Ticket Bot ツ v1.00`, `http://i.imgur.com/bt9OsRs.jpg`)
    .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.channel.send({ embed: embed });
  }