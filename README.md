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

> {tip} All commands can be used by mentioning Ava first, followed by the command you want to run, for example `@AvaIre ping` will run the ping command, or `@AvaIre poke @Senither` will run the poke command for Senither.

## Table of Contents

- [Help Commands](#help)
- [General Commands](#administration)
- [Other Commands](#fun)
- [Interaction](#interaction)
- [Music](#music)
- [Search](#search)
- [Utility](#utility)

<a name="help"></a>
## Help Command

| Command           | Short Description      |
| ----------------- |:---------------------- |
| [tw/help](/docs/{{version}}/commands#HelpCommand)  | Lists All Available Commands  |
| [!help [category]](/docs/{{version}}/commands#HelpCommand)  | Displays ツ Ticket Bot ツ's About Info (Developer ect)  |
| [!help [command]](/docs/{{version}}/commands#HelpCommand)  | Displays information about the provided command  |

> You can display all the commands in a category by just typing the first letters of the category, so displaying all the commands in the `administration` category can be done by just typing `!help ad`

<a name="administration"></a>
## Administration

| Command | Short Description |
| ------- |:----------------- |
{{#commands.administration.short}}
| [{{{command.trigger}}}](/docs/{{version}}/commands#{{commandName}}) | {{{command.shortDescription}}} |
{{/commands.administration.short}}

<a name="fun"></a>
## Fun

| Command | Short Description |
| ------- |:----------------- |
{{#commands.fun.short}}
| [{{{command.trigger}}}](/docs/{{version}}/commands#{{commandName}}) | {{{command.shortDescription}}} |
{{/commands.fun.short}}

<a name="interaction"></a>
## Interaction

| Command | Short Description |
| ------- |:----------------- |
{{#commands.interaction.short}}
| [{{{command.trigger}}}](/docs/{{version}}/commands#{{commandName}}) | {{{command.shortDescription}}} |
{{/commands.interaction.short}}

<a name="music"></a>
## Music

| Command | Short Description |
| ------- |:----------------- |
{{#commands.music.short}}
| [{{{command.trigger}}}](/docs/{{version}}/commands#{{commandName}}) | {{{command.shortDescription}}} |
{{/commands.music.short}}

<a name="search"></a>
## Search

| Command | Short Description |
| ------- |:----------------- |
{{#commands.search.short}}
| [{{{command.trigger}}}](/docs/{{version}}/commands#{{commandName}}) | {{{command.shortDescription}}} |
{{/commands.search.short}}

<a name="utility"></a>
## Utility

| Command | Short Description |
| ------- |:----------------- |
{{#commands.utility.short}}
| [{{{command.trigger}}}](/docs/{{version}}/commands#{{commandName}}) | {{{command.shortDescription}}} |
{{/commands.utility.short}}
