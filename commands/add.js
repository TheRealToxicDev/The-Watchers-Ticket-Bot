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
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(`:shrug: Whoops That's Not Right :shrug:`, `You can't use this command outside of a ticket channel.`)
    message.channel.send({ embed: embed });
    return
    }
    addedmember = message.mentions.members.first();
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('**' + addedmember + `** has been added to the ticket. Remove with [${prefix}remove]`)
    message.channel.send({ embed: embed });

  }