const Discord = require("discord.js");
const PREFIX = process.env.PREFIX;
const client = new Discord.Client();

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

var prefix = process.env.PREFIX;
var token = process.env.BOT_TOKEN;
var name = process.env.BOT_NAME;
var ownerid = process.env.BOT_OWNER;

client.on("ready", () => {
  console.log("ツ The Watchers ツ | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`${prefix}help in ${client.guilds.size} Servers`, `https://www.twitch.tv/monstercat`);
});

client.on("guildCreate", (guild) => {
client.user.setGame(`${prefix}help in ${client.guilds.size} Servers`, `https://www.twitch.tv/monstercat`);
const embed = new Discord.RichEmbed()
    .setTitle(`ツ Ticket Bot ツ`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm!ツ Ticket Bot ツ, Thanks for adding me to your guild!`)
        .addField(`Commands`, `[${prefix}help]() > Shows my help message and command usage`)
        .addField(`Ping`, `[${prefix}ping]() > Pings the bot and checks latency and response time`)
        .addField(`Support Server`, `[Join Our Discord](https://discord.gg/Hg8jyzQ)`)
    .setFooter(`ツ Ticket Bot ツ Beta v1.00`, `http://i.imgur.com/bt9OsRs.jpg`)
    .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    guild.owner.user.send({ embed: embed });
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`ツ Ticket Bot ツ Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm ツ Ticket Bot ツ, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
        .addField(`Tickets`, `${prefix}new > Opens up a new ticket and tags the Support Team\n${prefix}close > Closes a ticket that has been resolved or been opened by accident\n${prefix}add > Adds the mentioned user to a ticket.\n${prefix}remove > Removes the mentioned user from a ticket.`)
        .addField(`Other`, `${prefix}help > Shows you this help menu your reading\n${prefix}ping > Pings the bot to see how long it takes to react\n${prefix}about > Tells you all about ツ Ticket Bot ツ`)
    .setFooter(`ツ Ticket Bot ツ Beta v1.00`, `http://i.imgur.com/bt9OsRs.jpg`)
    .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.channel.send({ embed: embed });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `about`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`About ツ Ticket Bot ツ`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm ツ Ticket Bot ツ. the Discord bot for super cool support tickets`)
        .addField(`My Creator/Developer`, `Tyler. H#9393`)
        .addField(`My Creator/Developers Website`, `[The Watchers Bot Devs](https://the-watchers.webnode.com)`)
	.addField(`My Support Server`, `[My Support Server](https://discord.gg/Hg8jyzQ)`)
	.addField(`Invite Me To Your Server`, `[Invite Me Here](https://discordapp.com/api/oauth2/authorize?client_id=585966981576917014&permissions=8&scope=bot)`)
	.addField(`My Server Count`, `${client.guilds.size} Servers`)
        .addField(`My Current Uptime`, `${client.uptime}`)
   .setFooter(`ツ Ticket Bot ツ Beta v1.00`, `http://i.imgur.com/bt9OsRs.jpg`)
   .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.channel.send({ embed: embed });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hold On!!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`)
    });
}

   if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) {
    const embed = new Discord.RichEmbed()
    .setColor(0xCF40FA)
    .addField(`Uh-Oh Somethings Not Right`, `This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`)
    message.channel.send({ embed: embed });
    return
    }
    if (message.guild.channels.exists("name", "ticket-" + message.author.username)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xCF40FA)
    .addField(`Umm, One At A Time`, `You already have a ticket open.`)
    message.channel.send({ embed: embed });
    return
    }
    if (!message.guild.channels.exists("name", "★★★★★★tickets★★★★★★", "category")){
    const embed = new Discord.RichEmbed()
    .setColor(0xCF40FA)
    .addField(`Uh-Oh Somethings Not Right`, `There wasn't a tickets category so i created one! Please execute the command again to open your ticket`)
    message.channel.send({ embed: embed });
    return
    }
    message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        let category = message.guild.channels.find(c => c.name == "★★★★★★tickets★★★★★★" && c.type == "category");
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
        const embed = new Discord.RichEmbed()
        .setColor(embedColor)
        .addField(`WooHoo, Success`, `Your ticket has been created in ` + c.toString())
        .setTimestamp();
        message.channel.send({ embed: embed });

        const embed1 = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Our **Support Team** will be with you shortly. Please explain your reason for opening the ticket in as much detail as possible.`)
        .setTimestamp();
        c.send({ embed: embed1 });
    }).catch(console.error);
  }
	
  if (message.content.toLowerCase().startsWith(prefix + `add`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xCF40FA)
    .addField(`Whoops That's Not Right`, `You can't use this command outside of a ticket channel.`)
    message.channel.send({ embed: embed });
    return
    }
    addedmember = message.mentions.members.first();
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed = new Discord.RichEmbed()
    .setColor(0xCF40FA)
    .addField('**' + addedmember + `** has been added to the ticket. Remove with [${prefix}remove]().`)
    message.channel.send({ embed: embed });

  }

  if (message.content.toLowerCase().startsWith(prefix + `remove`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0xCF40FA)
    .addField(`Whoops That's Not Right`, `You can't use this command outside of a ticket channel.`)
    message.channel.send({ embed: embed });
    return
    }
    removedmember = message.mentions.members.first();
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed = new Discord.RichEmbed()
    .setColor(0xCF40FA)
    .addField('**' + removedmember + '** has been removed from the ticket.')
    message.channel.send({ embed: embed });
  }

  if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: ツ Ticket Bot ツ Ticket Help`)
    .setColor(0xCF40FA)
    .addField(`Whoops That's Not Right`, `You can't use this command outside of a ticket channel.`)
    message.channel.send({ embed: embed });
    return
    }   

    const embed = new Discord.RichEmbed()
    .setColor(0xCF40FA)
    .addField(`Leaving So Soon?`, `Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
    message.channel.send({ embed: embed })
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-confirm', {
        max: 1,
        time: 10000,
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

});

function response(c) {
  while (true) {
    client.on("message", (message) => {
      if(message.channel == c) {
        return message.content;
      }
function client.uptime(seconds) {
         let totalSeconds = (client.uptime / 1000);
         let days = Math.floor(totalSeconds / 86400);
         let hours = Math.floor(totalSeconds / 3600);
         totalSeconds %= 3600;
         let minutes = Math.floor(totalSeconds / 60);
         let seconds = totalSeconds % 60;
         let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
      }
    });
  }
};

client.login(process.env.BOT_TOKEN);

