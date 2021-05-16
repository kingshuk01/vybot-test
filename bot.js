
require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
    if (msg.content === 'cow?') {
      msg.reply('piyush?');
    }
  });
client.on('message', msg => {
    if (msg.content === 'anshuman?') {
      msg.reply('woof woof!');
    }
  });

client.login(process.env.BOT_TOKEN);