require("dotenv").config();
const {Client,Intents, Message, MessageEmbed} = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fetch = require('node-fetch');
const randomURL = "https://uselessfacts.jsph.pl/random.txt?language=en";
const todayURL = "https://uselessfacts.jsph.pl/today.txt?language=en";

client.on("ready", ()=>{
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Ready to give useless facts!');
});

async function gotCommand(msg){
  var reply;
  if (msg.author.bot){return};
  if(msg.content == '!help'){
    msg.channel.send('Use <!random> to get a random fact or <!today> to get the fact of the day!')
  }
  else if (msg.content == "!random"){
    await fetch(randomURL).then(response => response.text()).then(textString => {reply = textString;});
    reply = reply.split('\n')[0];
    msg.channel.send(reply); 
  }
  else if (msg.content == "!today"){
    await fetch(todayURL).then(response => response.text()).then(textString => {reply = textString;});
    reply = reply.split('\n')[0];
    msg.channel.send(reply);
  };
};


client.on("messageCreate", gotCommand);

client.login(process.env.BOT_TOKEN);