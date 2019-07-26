// EVERYTHING BELOW THIS LINE IS REQUIRED DO NOT CHANGE ANY OF THIS UNLESS YOU KNOW WHAT YOU ARE DOING
// THESE ARE REQUIRED TO HELP THE BOT FUNCTION PROPERLY.
const Discord = require("discord.js");
const PREFIX = process.env.PREFIX;
const client = new Discord.Client();

// BELOW THIS LINE IS THE CLEAN FUNCTION DO NOT TOUCH THIS UNLESS YOU KNOW WHAT YOU ARE DOING!!!
// FUNCTIONS ARE REQUIRED TO EXECUTE ARGS AND STRINGS 
function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

// BELOW THIS LINE ARE THE BOTS "CONFIG VARS/VARIABLES" THEY ARE REQUIRED TO HELP IT RUN CORRECTLY ONLY REPLACE THESE WITH YOUR INFORMATION DO NOT DELETE THEM AS IT MAY CAUSE ISSUES OR BREAK THE BOT 
// MAKE SURE YOU ENTER THE CORRECT INFORMATION PROVIDING THE WRONG DISCORD ID COULD GIVE SOMEONE ELSE ACCESS TO THE BOTS OWNER ONLY COMMANDS (OWNER ONLY COMMANDS COMING SOON)
var prefix = process.env.PREFIX; // Replace "process.env.PREFIX" with prefix of your choice if self hosting (Not Auto Deployed) Currrnt Prefix: (`tb/`) make sure you include the "(``)"
var token = process.env.BOT_TOKEN; // Replace "process.env.BOT_TOKE" with your bot token if self hosting (Not Auto Deployed) Example: (`Nakdndyak13816akd.odb`) make sure you include the "(``)"

// BELOW THIS LINE IS THE BOTS CONSOLE LOG READY MESSAGE, PLAY STATUS (NOW STREAMING) AND THE MESSAGE THAT IS SENT WHEN INVITED TO A NEW SERVER!!!
// YOU CAN CHANGE, DELETE OR EDIT THIS AS YOU WOULD LIKE BUT IT DOES GIVE THE BOT A NICE CLEAN LOOK 
client.on("ready", () => {
  console.log("ツ The Watchers ツ | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`${prefix}help in ${client.guilds.size} Servers`, `https://www.twitch.tv/monstercat`);
});

client.on("guildCreate", (guild) => {
 client.user.setGame(`${prefix}help in ${client.guilds.size} Servers`);
const embed = new Discord.RichEmbed()
    .setTitle(`ツ Ticket Bot ツ`)
    .setColor(0x00AE86)
    .setDescription(`Hello!, Thanks for adding me to your guild!`)
	.addField(`About ツ Ticket Bot ツ`, `[${prefix}about] > Tells you everything you need to know about me`)
        .addField(`Help & Support`, `[${prefix}help] > Shows you my Help/Support message`)
        .addField(`Commands List`, `[${prefix}commands] > Shows my commands list and usage`)
        .addField(`Support Server`, `[Join Our Discord](https://discord.gg/Hg8jyzQ)`)
    .setFooter(`ツ Ticket Bot ツ v1.02`, `http://i.imgur.com/bt9OsRs.jpg`)
    .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    guild.owner.user.send({ embed: embed });
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

// BELOW THIS LINE IS THE BOTS COMMANDS EDIT, REPLACE AND ADD TO THESE AS NEEDED IF YOU ARE WANTING TO EMBED THE COMMAND YOU CAN USE ONE OF THE BOTS PRE EXISTING COMMANDS AS A TEMPLATE
// MAKE SURE WHEN YOU ARE ADDING COMMANDS YOU FOLLOW THE PATH AND ROUTINE THAT I HAVE LISTED BELOW.
  if (message.content.toLowerCase().startsWith(prefix + `help`)){
    const embed = new Discord.RichEmbed()
    .setTitle(`ツ Ticket Bot ツ Help`)
    .setColor(0x00AE86)
    .setDescription(`Everything you need to know about me, Useful Links & Support can be found below`)
        .addField(`Commands List`, `${prefix}commands`)
        .addField(`My Creator/Developer`, `Tyler. H#9393`)
        .addField(`My Creator/Developers Website`, `[The Watchers Bot Devs](https://the-watchers.webnode.com)`)
	.addField(`My Support Server`, `[My Support Server](https://discord.gg/Hg8jyzQ)`)
	.addField(`Invite Me To Your Server`, `[Invite Me Here](https://discordapp.com/api/oauth2/authorize?client_id=585966981576917014&permissions=8&scope=bot)`)
	.addField(`My Server Count`, `${client.guilds.size} Servers`)
    .setFooter(`ツ Ticket Bot ツ v1.02`, `http://i.imgur.com/bt9OsRs.jpg`)
    .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.delete().catch();
    message.channel.send({ embed: embed });
  }
   if (message.content.toLowerCase().startsWith(prefix + `invite`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`Invite ツ Ticket Bot ツ To Your Server`)
    .setColor(0x00AE86)
    .setDescription(`Interested in inviting me to your server? Use the link below`)
       .addField(`My Invite Link`, `[Invite Me Here](https://discordapp.com/api/oauth2/authorize?client_id=585966981576917014&permissions=8&scope=bot)`) 
    .setFooter(`ツ Ticket Bot ツ v1.02`, `http://i.imgur.com/bt9OsRs.jpg`)
    .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.delete().catch();
    message.channel.send({ embed: embed });
  }
   if (message.content.toLowerCase().startsWith(prefix + `commands`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:page_with_curl: ツ Ticket Bot ツ Commands List`)
    .setColor(0x00AE86)
    .setDescription(`Here is a list of all available commands`)
        .addField(`Help & Support Command`, `[${prefix}help] > Displays my help and support message\n[${prefix}ticket help] > Displays my how to add and remove a member from a ticket message`)
        .addField(`Commands List Command`, `[${prefix}commands] > Displays this command list`)
	.addField(`Ping Command`, `[${prefix}ping] > Pings the bot to see how long it takes to react`)
        .addField(`About ツ Ticket Bot ツ`, `[${prefix}about] > Tells you everything you need to know about me`)
	.addField(`Open A Ticket Command`, `[${prefix}open] > Opens a new Support Ticket and tags the Support Team`)
        .addField(`Close A Ticket Command`, `[${prefix}close] > Closes the current Support Ticket`)
	.addField(`Add A Member Command`, `[${prefix}add @User#1234] > Adds the mentioned user to the current Support Ticket\nExample: [${prefix}add @Tyler. H#9393]`)
	.addField(`Remove A Member Command`, `[${prefix}remove @User#1234] > Removes the mentioned user from the current Support Ticket\nExample: [${prefix}remove @Tyler. H#9393]`)
	.addField(`Invite Command`, `[${prefix}invite] > Generates an invite link`) 
        .addField(`Server Info Command`, `[${prefix}serverinfo] > Displays information about the current server`)
        .addField(`Version Command`, `[${prefix}version] > Displays information about the current ツ Ticket Bot ツ version`)
        .addField(`ChangeLog Command`, `[${prefix}] > Displays information about changes made to ツ Ticket Bot ツ`)
        .addField(`Command List Link`, `[Commands List](https://ticket-bot.webnode.com/commands-list/)`) 
    .setFooter(`ツ Ticket Bot ツ v1.02`, `http://i.imgur.com/bt9OsRs.jpg`)
    .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.delete().catch();
    message.channel.send({ embed: embed });
  }
  if (message.content.toLowerCase().startsWith(prefix + `about`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`About ツ Ticket Bot ツ`)
    .setColor(0x00AE86)
    .setDescription(`Hello! I'm ツ Ticket Bot ツ. the Discord bot for super cool support tickets, i was originally created as a custom suppoort ticket bot for ツThe Watchers Bot Devsツ coded in the \`discord.js library\` If you are interested in inviting me to your server use the command ${prefix}help`)
        .addField(`Command List`, `[${prefix}commands]`)
   .setFooter(`ツ Ticket Bot ツ v1.02`, `http://i.imgur.com/bt9OsRs.jpg`)
   .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.delete().catch();
    message.channel.send({ embed: embed });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hold On!!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`)
    });
}

 if (message.content.toLowerCase().startsWith(prefix + `open`)) {
    message.delete().catch();	 
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
	
if (message.content.toLowerCase().startsWith(prefix + `add`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(`:shrug: Whoops That's Not Right :shrug:`, `You can't use this command outside of a ticket channel.`)
    message.delete().catch();
    message.channel.send({ embed: embed });
    return
    }
    addedmember = message.mentions.members.first();
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('**' + addedmember + `** has been added to the ticket. Remove with [${prefix}remove]`)
    message.delete().catch();
    message.channel.send({ embed: embed });

  }
if (message.content.toLowerCase().startsWith(prefix + `ticket help`)) {
    const embed = new Discord.RichEmbed()
     .setTitle(`How To Add A Member To A Ticket`)
    .setColor(0x00AE86)
    .setDescription(`To use this correctly please make sure you \`@\` the user you want to add  \`YOU DO NOT\` have to mention/tag them but you do need to add their discord \`#\` tag`)
      .addField(`Please Note`, `These commands have to be used inside a ticket channel`)
      .addField(`Add A Member`, `${prefix}add @User#1234\nExample ${prefix}add @Tyler. H#9393`)
      .addField(`Remve A Member`, `${prefix}remove @User#1234\nExample ${prefix}remove @Tyler. H#9393`)
    message.delete().catch(); 
    message.channel.send({ embed: embed });
    }

  if (message.content.toLowerCase().startsWith(prefix + `remove`)) {
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(`:shrug: Whoops That's Not Right :shrug:`, `You can't use this command outside of a ticket channel.`)
    message.delete().catch();  
    message.channel.send({ embed: embed });
    return
    }
    removedmember = message.mentions.members.first();
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('**' + removedmember + '** has been removed from the ticket.')
    message.delete().catch();   
    message.channel.send({ embed: embed });
  }
	
  if (message.content.toLowerCase().startsWith(prefix + `serverinfo`)) {
      message.delete().catch();
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Information`, message.guild.iconURL)
    .setDescription("Server Information")
    .setColor("0x00AE86")
    .setThumbnail(sicon)
    .addField("Server Owner", message.guild.owner, true)
    .addField("Server Name", message.guild.name, true)
    .addField('Server region', message.guild.region, true)
    .addField("Created On", message.guild.createdAt, true)
    .addField("You Joined", message.member.joinedAt, true)
    .addField('Channel count', message.guild.channels.size, true)
    .addField('Total member count', message.guild.memberCount)
    .addField('Verification level', message.guild.verificationLevel, true)
    .setFooter('Guild created at:')
    .setTimestamp(message.guild.createdAt);

    message.channel.send(serverembed);
    }

if (message.content.toLowerCase().startsWith(prefix + `version`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`ツ Ticket Bot ツ Version`)
    .setColor(0x00AE86)
    .setDescription(`All of my version information can be found below`)
        .addField(`Current Version`, `v1.02`)
        .addField(`Previous Version`, `v1.01`)
        .addField(`Version Check`, `[Ticket Bot Releases](https://github.com/GrimDesignsFiveM/The-Watchers-Ticket-Bot/releases)`)
   .setFooter(`ツ Ticket Bot ツ v1.02`, `http://i.imgur.com/bt9OsRs.jpg`)
   .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.delete().catch();
    message.channel.send({ embed: embed });
  }
 if (message.content.toLowerCase().startsWith(prefix + `changelog`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`ツ Ticket Bot ツ ChangeLog`)
    .setColor(0x00AE86)
    .setDescription(`All of my update changes can be found below`)
        .addField(`Added Server Info Command`, `Displays info about the current server [${prefix}serverinfo]`)
        .addField(`Added Version Command`, `Displays ツ Ticket Bot ツs current version [${prefix}version]`)
        .addField(`Self Host & Auto Deploy Options`, `Removed Self Host & Auto Deploy Support & Methods`)
        .addField(`Discord Bot List Status`, `Added and approved on the Discord Bot List at [Discord Bot List](https://discordbots.org/bot/585966981576917014)`)
   .setFooter(`ツ Ticket Bot ツ v1.02`, `http://i.imgur.com/bt9OsRs.jpg`)
   .setThumbnail(`http://i.imgur.com/bt9OsRs.jpg`)
    message.delete().catch();
    message.channel.send({ embed: embed });
  }
	
  if (message.content.toLowerCase().startsWith(prefix + `close`)) {
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

    const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(`Leaving So Soon?`, `Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
    message.delete().catch();
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
  })
  if (message.content.toLowerCase().startsWith(prefix + `say`)) {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  })
}

});
// THE CLIENT LOGIN PROCESS (BOT READS THE TOKEN FROM HERE)
// ADDITIONALLY YOU COULD ADD YOUR OWNERID INSTEAD 
client.login(process.env.BOT_TOKEN);
//////////////////////////////////////////////////////////////////////////////////////// COPYRIGHT INFORMATION DO NOT TOUCH THIS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////// Created By: Tyler. H#9393 | ツ The Watchers Bot Devs ツ /////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////// Support Server: https://discord.gg/Hg8jyzQ  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
