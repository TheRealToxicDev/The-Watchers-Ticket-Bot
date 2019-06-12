### ツ Ticket Bot ツ
Hello! I'm ツ Ticket Bot ツ, the Discord bot for super cool support ticket stuff and more! 
Here are my commands:

**Tickets**

tw/new > Opens up a new ticket and tags the Support Team

tw/close > Closes a ticket that has been resolved or been opened by accident


**Other**

tw/help > Shows you this help menu your reading

tw/ping > Pings the bot to see how long it takes to react

tw/about > Tells you all about ツ The Watchers ツ

**Self Hosting (Auto Deploy)**

You can host your inw version of this on Heroku, just click this **Deploy** button below **(CUSTOM NAME COMING SOON)** :


<a href="https://heroku.com/deploy?template=https://github.com/GrimDesignsFiveM/The-Watchers-Ticket-Bot">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>


1. Input your **Bot Token**, and Input your Bot **Prefixes**. Get your Bot's Token in your App Settings.
2. After *Deployed*, Go to **Overview** Tabs >  **Configure Dynos** > Enable **worker** Dynos > Click **Confirm**
and you Ready to Go!


# Command List

Below you'll find a list of all **{{ statistics.commands }}** commands that Ava has, along with a short description of what each command does. If you'd like to know more about the command, like what permissions or roles are required to run the command, different aliases or anything similar you can click on the command links and you'll be taken to a more descriptive version of the command, or use the help command for the given command in a Discord server.

> {tip} ツ Ticket Bot ツ Requires a **Support Team** role before it can **Open** and **Close** tickets **IF** No **Support Team** Role is found he will display a **Error/Warning** telling you to create one.

> {tip} ツ Ticket Bot ツ Will Set-Up a **Tickets** Category for you when a user opens a ticket.

## Table of Contents

- [Help Commands](#help)
- [General Commands](#generalcommands)
- [Other Commands](#othercommands)
- [Host Your Own Ticket Bot](#hostyourown)


<a name="help"></a>
## Help Command

| Command           | Short Description      |
| ----------------- |:---------------------- |
| [tw/help]  | **Lists All Available Commands**  |
| [tw/about] | **Displays ツ Ticket Bot ツ's About Info (Creator/Developer, Website ect)**  |

> You can display all the commands in a category by just typing the first letters of the category, so displaying all the commands in the `administration` category can be done by just typing `!help ad`

<a name="generalcommands"></a>
## General Commands

| Command | Short Description |
| ------- |:----------------- |
{{#commands.administration.short}}
| [{{{command.trigger}}}](/docs/{{version}}/commands#{{commandName}}) | {{{command.shortDescription}}} |
{{/commands.administration.short}}

<a name="othercommands"></a>
## Other Commands

| Command | Short Description |
| ------- |:----------------- |
{{#commands.fun.short}}
| [{{{command.trigger}}}](/docs/{{version}}/commands#{{commandName}}) | {{{command.shortDescription}}} |
{{/commands.fun.short}}

<a name="hostyourown"></a>
## Host Your Own ツ Ticket Bot ツ

| Command | Short Description |
| ------- |:----------------- |
{{#commands.interaction.short}}
| [{{{command.trigger}}}](/docs/{{version}}/commands#{{commandName}}) | {{{command.shortDescription}}} |
{{/commands.interaction.short}}
