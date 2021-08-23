const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");

module.exports = {
  name: "jump",
  description: "jump to any song you like!",
  execute (client, message, args) {
    
     let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("sumimasen senpai, you need to be in a voice channel first :3")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("gomen'nasai! there is nothing playing that i could loop ;-;")
      return message.channel.send(embed);
    }
     if(!args[0]) {
      embed.setAuthor(`gimme the song number bro`)
      return message.channel.send(embed)
    }
    
      if(isNaN(args[0])) {
      embed.setAuthor("senpai! please use numerical values only")
      return message.channel.send(embed)
    }
    
  if(serverQueue.songs.length < args[0]) {
    embed.setAuthor("sumimasen! I was unable to find this song in the queue")
    return message.channel.send(embed)  
                                         }
    serverQueue.songs.splice(0, Math.floor(args[0] - 1))
    serverQueue.connection.dispatcher.end()
    
    embed.setDescription(`skipped to the song successfully!  - ${args[0]}`)
    message.channel.send(embed)
    
  }
}