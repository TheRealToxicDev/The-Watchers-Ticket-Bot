module.exports = (client, message) => {
    if (message.author.bot) return;

    if (message.content.indexOf(client.config.prefix) !== 0) return;

    client.message = message;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    //console.log(args);
    const command = args.shift().toLowerCase();
    //console.log(command);
    const cmd = client.commands.get(command);
    //console.log(cmd);
    if (!cmd) return;
    //console.log(cmd);
    cmd.run(client, message, args);
};
