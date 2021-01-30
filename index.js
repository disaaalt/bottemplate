// Main imports & bot creating
const Discord = require('discord.js')
const bot     = new Discord.Client()
const fs      = require('fs')
const chalk   = require('chalk')

// Config requiring
const config  = require('./config.json')
const token   = config.TOKEN
// Defines prefix from config
const prefix  = config.PREFIX

// Bot is ready event.
bot.on('ready', () => {
	console.log(chalk.blue.bold("Successfully logged in. Prefix is " + prefix))
})

// Bot recieves message event.
bot.on('message', async (message) => {
	// Check if message author is bot, if so dont reply
	if (message.author.bot) return;
	// Check if message starts with prefix
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    // Gets the content of the message and joins them together, then slices off the prefix
    const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

    // Gets the command
    const command = args.shift().toLowerCase();

    // First command - ping
    if(command === 'ping') {
    	message.channel.send('Pong!')
    }
})

// Login
bot.login(token)

