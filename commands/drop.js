const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");
module.exports = {
  name: "remove",
  description: "Yeet The Song From Queue",
  execute(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setAuthor("senpai, you are not in a voice channel");
      return message.channe.send(embed);
    }

    const serverQueue = client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("the Queue is empty!");
      return message.channel.send(embed);
    }
    
     if(isNaN(args[0])) {
      embed.setAuthor("sumimasen! please use numerical alues only")
      return message.channel.send(embed)
    }
   
    if(args[0] > serverQueue.songs.length) {
      embed.setAuthor("gomen'nasai! i was unable to find this song")
      return message.channel.send(embed)
    }
    
    
    serverQueue.songs.splice(args[0] - 1, 1)
    embed.setDescription("yeeted the song from the queue succesfully!")
    embed.setThumbnail(client.user.displayAvatarURL())
    return message.channel.send(embed)
  }
};