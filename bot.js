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
  client.user.setGame(`Ninja Gen`, `https://www.twitch.tv/monstercat`);
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

client.on("message", (message) => {
  if (message.guild.id !== serverStats.guildID) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

// BELOW THIS LINE IS THE BOTS COMMANDS EDIT, REPLACE AND ADD TO THESE AS NEEDED IF YOU ARE WANTING TO EMBED THE COMMAND YOU CAN USE ONE OF THE BOTS PRE EXISTING COMMANDS AS A TEMPLATE
// MAKE SURE WHEN YOU ARE ADDING COMMANDS YOU FOLLOW THE PATH AND ROUTINE THAT I HAVE LISTED BELOW.
  if (message.content.toLowerCase().startsWith(prefix + ` invite`)){

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
   
});

// THE CLIENT LOGIN PROCESS (BOT READS THE TOKEN FROM HERE)
// ADDITIONALLY YOU COULD ADD YOUR OWNERID INSTEAD 
client.login(process.env.BOT_TOKEN);
//////////////////////////////////////////////////////////////////////////////////////// COPYRIGHT INFORMATION DO NOT TOUCH THIS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////// Created By: Tyler. H#9393 | ツ The Watchers Bot Devs ツ /////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////// Support Server: https://discord.gg/Hg8jyzQ  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
