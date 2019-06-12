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
	 .addField(`Support Server`, `Join Our Discord: https://discord.gg/Hg8jyzQ`)
    guild.owner.user.send({ embed: embed });
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: ツ Ticket Bot ツ Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm ツ Ticket Bot ツ, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
    .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
    .addField(`Other`, `[${prefix}help]() > Shows you this help menu your reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about ツ The Watchers ツ`)
    message.channel.send({ embed: embed });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `about`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: ツ Ticket Bot ツ, About`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm ツ Ticket Bot ツ, the Discord bot for super cool support tickets`)
        .addField(`My Creator/Developer`, `@Tyler. H#9393`)
        .addField(`My Creator/Developers Website`, `https://the-watchers.webnode.com`)
	.addField(`My Support Server`, `https://discord.gg/Hg8jyzQ `)
	.addField(`Invite Me To Your Server`, `https://discordapp.com/api/oauth2/authorize?client_id=585966981576917014&permissions=8&scope=bot`)
	.addField(`My Server Count`, `${client.guilds.size} Servers`)
    message.channel.send({ embed: embed });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, we made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}

 if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
     if (!message.guild.channels.exists("name", "★★★★★★tickets★★★★★★", "category")) return message.channel.send("There wasn't a tickets category so i created one! Please execute the command again to open your ticket") .then(message.guild.createChannel("★★★★★★tickets★★★★★★", "category"))
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
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
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
	  if (message.content.toLowerCase().startsWith(prefix + `add`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed4 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Ticket Bot`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed4 });
    return
    }
    addedmember = message.mentions.members.first();
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed5 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Ticket Bot`, '**' + addedmember + `** has been added to the ticket. Remove with [${prefix}remove]().`)
    message.channel.send({ embed: embed5 });

  }

  if (message.content.toLowerCase().startsWith(prefix + `remove`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed6 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Ticket Bot`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed6 });
    return
    }
    removedmember = message.mentions.members.first();
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed7 = new Discord.RichEmbed()
    .setColor(embedColor)
    .addField(`Ticket Bot`, '**' + removedmember + '** has been removed from the ticket.')
    message.channel.send({ embed: embed7 });
  }

if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
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

client.login(process.env.BOT_TOKEN);

