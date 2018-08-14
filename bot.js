const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Scrpit By ┃ ArabSupport`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Bot By TEAM ArabSupport ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` Edit FoxBot `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

client.login("NDE0NDc3NDM4ODY5ODMxNjgy.DlRVlw.S8pOCgWKUgcvEVdKafSptF-y4-w");
