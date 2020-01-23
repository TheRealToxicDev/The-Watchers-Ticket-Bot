// EVERYTHING BELOW THIS LINE IS REQUIRED DO NOT CHANGE ANY OF THIS UNLESS YOU KNOW WHAT YOU ARE DOING
// THESE ARE REQUIRED TO HELP THE BOT FUNCTION PROPERLY.
const Discord = require("discord.js");
const PREFIX = process.env.PREFIX;
const client = new Discord.Client();
const antispam = require("discord-anti-spam");
/*const discordantispam = new antispam({
  warnThreshold: 4, // Amount of messages sent in a row that will cause a warning.
  banThreshold: 7, // Amount of messages sent in a row that will cause a ban
  maxInterval: 3000, // Amount of time (in ms) in which messages are cosidered spam.
  warnMessage: "{@user}, Keep spamming in this server and I will dead your ass hoe", // Message will be sent in chat upon warning.
  banMessage: "**{user_tag}** has been banned for spamming.", // Message will be sent in chat upon banning.
  maxDuplicatesWarning: 4, // Amount of same messages sent that will be considered as duplicates that will cause a warning.
  maxDuplicatesBan: 7, // Amount of same messages sent that will be considered as duplicates that will cause a ban.
  deleteMessagesAfterBanForPastDays: 7, // Amount of days in which old messages will be deleted. (1-7)
  exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"], // Bypass users with at least one of these permissions
  ignoreBots: false, // Ignore bot messages
  verbose: true, // Extended Logs from module
  ignoredUsers: [], // Array of string user IDs that are ignored
  ignoredRoles: ['Administrator', 'Admin', 'Moderator', 'Mod'], // Array of string role IDs or role name that are ignored
  ignoredGuilds: [], // Array of string Guild IDs that are ignored
  ignoredChannels: ['💬generator-chat', 'generator-chat', 'generator', 'premium-members'] // Array of string channels IDs that are ignored
});*/

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
var embedColor = require('./config');

// BELOW THIS LINE IS THE BOTS CONSOLE LOG READY MESSAGE, PLAY STATUS (NOW STREAMING) AND THE MESSAGE THAT IS SENT WHEN INVITED TO A NEW SERVER!!!
// YOU CAN CHANGE, DELETE OR EDIT THIS AS YOU WOULD LIKE BUT IT DOES GIVE THE BOT A NICE CLEAN LOOK 
client.on("ready", () => {
  console.log("ツ The Watchers ツ | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`-stats | Gen Status`, `https://www.twitch.tv/monstercat`);
});

const serverStats = {
  guildID: '648353322452910080',
  totalUsersID: '652417178095845376',
  memberCountID: '652417207577477152',
  botCountID: '652417305304760330'
}

client.on("guildCreate", guild => {

const owner = client.users.get("510065483693817867");

const dmLog = new Discord.RichEmbed()
    .setTitle("Decoy Invites")
    .setColor("0xff0000")
    .setDescription("I have been invited to" + ` ${guild.name}` + `(${guild.id})`)
    .setFooter("© Ninja Gen")
  owner.send(dmLog)
});

 
client.on('guildMemberAdd', member => {
  if (member.guild.id !== serverStats.guildID) return;
  client.channels.get(serverStats.totalUsersID).setName(`Total: ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Users: ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bots: ${member.guild.members.filter(m => m.user.bot).size}`);
});

client.on('guildMemberRemove', member => {
  if (member.guild.id !== serverStats.guildID) return;
  client.channels.get(serverStats.totalUsersID).setName(`Total: ${member.guild.memberCount}`);
  client.channels.get(serverStats.memberCountID).setName(`Users: ${member.guild.members.filter(m => !m.user.bot).size}`);
  client.channels.get(serverStats.botCountID).setName(`Bots: ${member.guild.members.filter(m => m.user.bot).size}`);
});

client.on('message', (message) => { //whenever a message is sent
  if (message.guild.id === serverStats.guildID) {
  if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
  if (message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete() //delete the message
      .then(message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**'))
   }
  }
})

client.on('message', (message) => { //whenever a message is sent
  if (message.guild.id === serverStats.guildID) {
  if (message.content.includes('youtu.be'||'youtube.com')) { //if it contains an invite link
  if (message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete() //delete the message
      .then(message.channel.send('Link Deleted:\n**Youtube/Self Advertisement links are not permitted on this server**')) 
   }
  }
})

client.on('message', (message) => {
  if (message.guild.id === serverStats.guildID) {
  if (message.content.includes('anonfile.com' || 'https://anonfile.com')) {
    message.delete()
    .then(message.channel.send('Link Deleted:\n**AnonFile Links are known to contain viruses and RATs for the safety of our members these links have been Blacklisted and CAN NOT be posted by Members or Staff**'))
   }
  }
})

client.on('message', (message) => { //whenever a message is sent
  if (message.guild.id === serverStats.guildID) {
  if (message.content.includes('@everyone'||'@here')) { //if it contains an invite link
  if (message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete() //delete the message
      .then(message.channel.send('Message Deleted:\n**Sorry I cant let you do that. No Mass Mentions!!**'))
   }
  }
})

client.on('message', (message) => { //whenever a message is sent
  if (message.guild.id === serverStats.guildID) {
  if (message.content.includes('Nigger'||'Niggar' || 'nigger' || 'niggar')) { //if it contains an invite link
  if (message.member.hasPermission("ADMINISTRATOR")) return;
    message.delete() //delete the message
      .then(message.channel.send('Message Deleted:\n**Racism is not permitted on this server**'))
   }
  }
})


/*client.on('message', (message) => {

	if (message.channel.type.toLowerCase() == 'dm' || message.channel.type.toLowerCase() == 'group' && message.member.hasPermission("MANAGE_MEMBERS")) {
		var embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setDescription(message.content)
			.setTimestamp(new Date())
			.setColor('#C735D4');
	}
	if (message.author.bot) return;
 
	if (message.content.includes(`<@510065483693817867>`)) {
                message.delete().catch()
                let userEmbed = new Discord.RichEmbed()
			.setTitle("Mention Detected")
                        .setDescription(`<@${message.author.id}>` + " My Developer **☣ Fҽʂƚιʋҽ Tσxιƈ Dҽʋ ☣** is currently busy Developing Ninja Gen, Sleeping or Enjoying his life, I have let him know you Pinged. He will get back to you as soon as possible!!")
			.setTimestamp()
		message.channel.send(userEmbed).then(msg => {msg.delete(23000)});
		let ownerEmbed = new Discord.RichEmbed()
			.setTitle("Mention Detected")
			.addField("Username:", `${message.author.username}#${message.author.discriminator}`, true)
			.addField("User's ID:", message.author.id, true)
                        .addField("Message", `${message.content}`)
			.addField("Server:", message.guild.name, true)
			.setTimestamp()
		client.users.get("510065483693817867").send(ownerEmbed);
	}
});*/

client.on('message', async (message) => {
        if (message.channel.type.toLowerCase() == 'dm' || message.channel.type.toLowerCase() == 'group' && message.member.hasPermission("MANAGE_MEMBERS")) {
		var embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setDescription(message.content)
			.setTimestamp(new Date())
			.setColor('#C735D4');
	}
	if (message.author.bot) return;
 
	if (message.content.startsWith(`-stats`)) {
                message.delete().catch()
                let botStats = new Discord.RichEmbed()
			.setTitle("Ninja Gen Status")
                        .setDescription("Below is the Current Status for Ninja Gen and all its Dependencies")
                        .addField("Ninja Gen Website", "**Online** - :white_check_mark:", true)
			.addField("Ninja Gen Host", "**Online** - :white_check_mark:", true)
			.addField("Ninja Gen Bot", "**Online** - :white_check_mark:", true)
                        .addField("API Response", "**Online** - :warning: > May Be Slow", true)
                        .addField("Auto Checker", "**Online** - :x: (__**WIP**__)", true)
			.addField("Blacklist", "**Online** - :white_check_mark:", true)
                        .addField("Database #1 (Ninja Gen)", "**Online** - :white_check_mark:", true)
                        .addField("Database #2 (Accounts)", "**Online** - :white_check_mark:", true)
                        .addField("Status Updates", "API is experiencing some minor issues bot may be slow to gen")
			.setTimestamp()
                        .setFooter("Last Check:")
		await message.channel.send(botStats).then(msg => {msg.delete(25000)});
               //message.channel.send("** DEV UPDATE |**" + ` <@${message.author.id}>` + " As we continue working round the clock to get Ninja Gens downtime resolved as soon as possible. We would like to update that the downtime is expected to last **UP TO** 48 Hours as the bot gives us extreme grief on attempts to resolve the errors 🤦🏻‍♂️\n\n Sorry For The Inconvenience\n - Ninja Gen Developers ☣️").then(msg => {msg.delete(35000)});
    }

});	
          
client.on('message', (message) => {
        if (message.channel.type.toLowerCase() == 'dm' || message.channel.type.toLowerCase() == 'group' && message.member.hasPermission("MANAGE_MEMBERS")) {
		var embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setDescription(message.content)
			.setTimestamp(new Date())
			.setColor('#C735D4');
	}
	if (message.author.bot) return;
 
	if (message.content.includes(`<@&648378789994299404>`)) {
                message.delete().catch()
                let userEmbed = new Discord.RichEmbed()
			.setTitle("Dev Role Mention Detected")
                        .setDescription(`<@${message.author.id}>` + " Mass Mentioning and Pinging this role or the Members in it is a bannable Offense **Final Warning**")
			.setTimestamp()
		message.channel.send(userEmbed).then(msg => {msg.delete(23000)});
		let ownerEmbed = new Discord.RichEmbed()
			.setTitle("Dev Role Mention Detected")
			.addField("Username:", `${message.author.username}#${message.author.discriminator}`, true)
			.addField("User's ID:", message.author.id, true)
                        .addField("Message", `${message.content}`)
			.addField("Server:", message.guild.name, true)
			.setTimestamp()
		client.users.get("510065483693817867").send(ownerEmbed)
    }

});

client.on("message", (message) => {

// Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if (message.guild.id !== serverStats.guildID) return;
  if (message.author.bot) return;

// BELOW THIS LINE IS THE BOTS COMMANDS EDIT, REPLACE AND ADD TO THESE AS NEEDED IF YOU ARE WANTING TO EMBED THE COMMAND YOU CAN USE ONE OF THE BOTS PRE EXISTING COMMANDS AS A TEMPLATE
// MAKE SURE WHEN YOU ARE ADDING COMMANDS YOU FOLLOW THE PATH AND ROUTINE THAT I HAVE LISTED BELOW.
  if (message.content.toLowerCase().startsWith(prefix + `invite`)){

  let error = new Discord.RichEmbed()
      .setColor("0xff0000")
      .setTitle(":no_entry: Error :no_entry:")
      .setDescription(`<@${message.author.id}>` + " Please open a ticket before running this command");
      message.delete().catch();

let myRole = message.guild.roles.get("648354653091790862");
 
if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(error);

if(message.member.roles.has(myRole.id)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`Ninja Gen Invite`)
    .setColor(0x00AE86)
    .setDescription(`Redistributing this link without permission will result in a Blacklist from the bot`)
    .addField(`Ninja Gen`, `[Invite Link Here](https://discordapp.com/api/oauth2/authorize?client_id=648267102528077824&permissions=2147483127&scope=bot)`)
    .setFooter(`Ninja Gen Protection`, `https://cdn.discordapp.com/avatars/648267102528077824/abb9723ce26116219804047f4979a6cf.png?size=2048?size=1024`)
    .setThumbnail(`https://cdn.discordapp.com/avatars/648267102528077824/abb9723ce26116219804047f4979a6cf.png?size=2048?size=1024`)
    message.delete().catch();
    message.channel.send({ embed: embed });
  } else { 
    return message.channel.send("Please wait for a Staff Member")
    }
  }

if (command === "say") {
    message.delete().catch()
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    // And we get the bot to say the thing: 
    const sayEmbed = new Discord.RichEmbed()
    sayEmbed.setColor("#FF00FF")
    sayEmbed.setDescription(`${sayMessage}`)
    message.channel.send(sayEmbed);
  }
 
client.on("message", (msg) => {
  discordantispam.message(msg);
});
   
});

// THE CLIENT LOGIN PROCESS (BOT READS THE TOKEN FROM HERE)
// ADDITIONALLY YOU COULD ADD YOUR OWNERID INSTEAD 
client.login(process.env.BOT_TOKEN);
//////////////////////////////////////////////////////////////////////////////////////// COPYRIGHT INFORMATION DO NOT TOUCH THIS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////// Created By: Tyler. H#9393 | ツ The Watchers Bot Devs ツ /////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////// Support Server: https://discord.gg/Hg8jyzQ  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
