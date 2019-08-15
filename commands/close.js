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
let Tembed = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle(":no_entry: Error :no_entry:")
      .setDescription(`<@${message.author.id}>` + " You can't use this command outside of a ticket channel :shrug: please re-try the command in the ticket you are trying to close");
      message.delete().catch();
  
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(Tembed);

 let Cembed = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle("Close A Ticket")
      .setDescription(`<@${message.author.id}>` + " Are you sure? Once confirmed, you cannot reverse this action! This will time out in 60 seconds and be cancelled.")
      .addField("How To Confirm", "Type ``-confirm``");
     message.delete().catch();
	  
    message.channel.send(Cembed)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-confirm', {
        max: 1,
        time: 60000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });

  }