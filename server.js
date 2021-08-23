const { token, prefix } = require("./config.json")

const discord = require('discord.js'); 
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] }); 
const { readdirSync } = require("fs");
const { join } = require("path");

client.once('ready', () => { 
	console.log('I am ready to go!'); 
  client.user.setActivity(`with memories`)
})

client.on("ready", () => {
  console.log('Ready |Bot created by DeanKrate')
})
client.on("warn", info => console.log(info));

client.on("error", console.error)

client.commands = new discord.Collection()
client.prefix = prefix
client.queue = new Map();
client.vote = new Map();

const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
}



client.on("message", message => { 
  if(message.content === `${prefix}simprate`) { 
    return message.channel.send(`1% simp. cuz i am more of a simp than u `) 
  }
})

client.on("message", message => { 
  if(message.content === `karraklo`) { 
    return message.channel.send(`torraklo`) 
  }
})
client.on("message", message => { 
  if(message.content === `gotigoti`) { 
    return message.channel.send(`ae nw bro gotugotu`) 
  }
})

client.on("message", message => { 
  if(message.content === `pat kore`) { 
    return message.channel.send(`https://cdn.discordapp.com/emojis/767455350516875286.png?v=1`) 
  }
})
client.on("message", message => { 
  if(message.content === `tui gay`) { 
    return message.channel.send(`na be o pussuk kore, tui gay bhak. nw bro i gotchu ekdom <:wink1:873291229478141982> <:wink1:873291229478141982> <:wink1:873291229478141982>`) 
  }
})

client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(prefix)) { 
    
    const args = message.content.slice(prefix.length).trim().split(/ +/) 
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { 
      client.commands.get(command).execute(client, message, args)
    
    console.log(`${message.guild.name}: ${message.author.tag} Used ${client.commands.get(command).name} in #${message.channel.name}`)
    } catch (err) { 
      console.log(err)
      message.reply("everythings fine bro, try k!simprate")
    }
    
  }
  
  
});

client.login(token)