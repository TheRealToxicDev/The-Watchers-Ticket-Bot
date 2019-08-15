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
let Tembed2 = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle(":no_entry: Error :no_entry:")
      .setDescription(`<@${message.author.id}>` + " There wasn't a tickets category so i created one! :thumbsup: Please execute the command again to open your ticket");
      message.delete().catch();
	  
 let Tembed3 = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle(":no_entry: Error :no_entry:")
      .setDescription(`<@${message.author.id}>` + " This server doesn't have a ``Support Team`` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.");
      message.delete().catch();
	  
let Tembed4 = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle(":no_entry: Error :no_entry:")
      .setDescription(`<@${message.author.id}>` + " You already have a ticket open. :shrug:");
      message.delete().catch();
	  
    const reason = message.content.split(" ").slice(1).join(" ");
     if (!message.guild.channels.exists("name", "★★★★★★tickets★★★★★★", "category")) return message.channel.send(Tembed2) .then(message.guild.createChannel("★★★★★★tickets★★★★★★", "category"))
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(Tembed3);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(Tembed4);
       message.guild.createChannel(`ticket-${message.author.id}`, "text",).then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        let category = message.guild.channels.find(c => c.name == "★★★★★★tickets★★★★★★" && c.type == "category");
        c.setParent(category);
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
	       
  let Tembed5 = new Discord.RichEmbed()
      .setColor(53380)
      .setTitle(":white_check_mark: Success :white_check_mark:")
      .setDescription(`<@${message.author.id}>` + "Your ticket has been created")
      .addField(`Your Ticket Channel`, `#${c.name}.`);  
      message.delete().catch();
	       
        message.channel.send(Tembed5)

        const embed = new Discord.RichEmbed()
	.setTitle("Support Ticket")
        .setColor(0x00AE86)
	.setDescription(`Hey <@${message.author.id}>`)
        .addField("Please try to explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.")
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}