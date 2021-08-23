const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");


module.exports = {
  name: "skip",
  description: "Skip the song!",
  async execute(client, message, args) {
   
    
    
    
let embed = new MessageEmbed()
.setColor(COLOR);


    const { channel } = message.member.voice;

       
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("sumimasen senpai, you need to be in a voice channel first :3")
      return message.channel.send(embed);
    }
    const serverQueue = message.client.queue.get(message.guild.id);
const vote = message.client.vote.get(message.guild.id)
    if (!serverQueue) {
      embed.setAuthor("There is nothing playing that i could skip ;-;")
      return message.channel.send(embed);
    }
    
    const vcvote = Math.floor(message.guild.me.voice.channel.members.size / 2)
    const okie = Math.floor(message.guild.me.voice.channel.members.size / 2 - 1)
    console.log(message.guild.me.voice.channel.members.size)
     if(!message.member.hasPermission("ADMINISTRATOR")) {
       if(vote.vote > okie) {
         serverQueue.connection.dispatcher.end();
    embed.setDescription("VOTE - SKIP | Skipping The Song")
    embed.setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed);
       }
       
       if(vote.voters.includes(message.author.id)) {
         return message.channel.send("You already voted to skip tho")
       }
       
       if(vcvote === 2) {
          serverQueue.connection.dispatcher.end();
    embed.setDescription("✔ | Skipping The Song")
    embed.setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed);
       }
       
       
       
vote.vote++
       vote.voters.push(message.author.id)
       return message.channel.send(`You Voted to skip the song btw we currently need ${Math.floor(vcvote - vote.vote)} votes`)
    
     
     
     
     }

    serverQueue.connection.dispatcher.end();
    embed.setDescription("✔ | Skipping The Song ;-;")
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed);
  }
};