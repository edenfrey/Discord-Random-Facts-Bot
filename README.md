# Discord-Random-Facts-Bot (v1.1.0)

### Created by Amir Adrian Amir Hamzah (2021)

### !UPDATE! v1.1.0

I have decided to use Heroku to host the bot online (though its only active for 500 hours a month). Invite the bot by going to my [website](https://edenfrey.github.io/discord-random-facts-bot-website/).
## Techonologies

1. Node.js
1. Heroku (Bot Hosting)
    1. Environment Variables
## Description

A Discord bot that provides random facts simply by typing a few commands to show-of to your friends on how knowledgeable you are (eventhough deep down you know you are not).


My very first Discord bot project to test out my coding abilities in JavaScript. This is a Discord bot that sends a random fact fetched by API upon command. If you wish to run the bot locally, the bot's source code can be forked/downloaded for your own use (credits are much appreciated). check out the full [setup guide](#setup-guide) for assistance on how to use the code.

## Enviromental Variables

### BOT_TOKEN

This is the token found in your Discord Application. Store it in a .env file to keep it a secret. If you are hosting it on the web (ex. Heroku), put it in the built-in environmental variables storage.

## Setup Guide (For local running)

FORK THE ENTIRE REPO FIRST! If you run into an issue feel free to contact me by joining my [Discord](http://bit.ly/edenfreydiscord).

### Prerequisites

To do this you will need to download node.js and install it on your computer (preferably with the commands being able to run in your terminal). Download a zip version of my code and extract it to your desired location (We will use the Desktop C:/user/Desktop)

### Creating and Inviting Your Bot

Firstly, you would need to access Discord's Developer Portal and create your application and bot ([tutorial](https://discordpy.readthedocs.io/en/stable/discord.html)) with the necessary permissions and invite the bot to your server.

I recommened NOT making this a public bot and leaving 'Require OAuth2 Code Grant' unchecked. Since you are probably going to run this bot locally, I can recommend giving your bot Administrator privileges so it can read all text channels.

### Creating a .env File and Storing Your Bot Token

In the same directory as the 'main.js' file, create a file simply named '.env' (Without quotation marks, obviously). Make sure it is a .env file format.

Open it using your favorite text editor (Notepad works just fine) and copy your bot's secret code from the application (Note: It is in the Bot tab) and put it in like so (with quotation marks):

BOT_TOKEN = 'your bot token'

and save.

### Running the Bot

Open up a terminal and make sure its working directory is in the bot folder (so, C:/user/Desktop/Discord-Random-Facts-Bot). In the terminal type 'node main.js' and press enter. If everything is done well, you should get a confirmation in your terminal 'Logged in as (your bot name#tag)!' and your bot has come online and is ready to be used.

## Usage Instructions

If you have set up the bot as I have instructed (i.e. no changes to code and the bot has come online). Type in any text channel in your server either '!random' to get a random fact or '!today' to get the fact of today.

Type '!help' if you need a refresher.
