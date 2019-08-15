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
     .setTitle(`How To Add A Member To A Ticket`)
    .setColor(0x00AE86)
    .setDescription(`To use this correctly please make sure you \`@\` the user you want to add  \`YOU DO NOT\` have to mention/tag them but you do need to add their discord \`#\` tag`)
      .addField(`Please Note`, `These commands have to be used inside a ticket channel`)
      .addField(`Add A Member`, `${prefix}add @User#1234\nExample ${prefix}add @Tyler. H#9393`)
      .addField(`Remve A Member`, `${prefix}remove @User#1234\nExample ${prefix}remove @Tyler. H#9393`)
    message.channel.send({ embed: embed });
    }