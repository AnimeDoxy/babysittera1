const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");
module.exports = {
  name: "volume",
  description: "Manage the volume of the song",
  execute(client, message, args) {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed to change the volume of the music")
    }
    

    
    let embed = new MessageEmbed().setColor(COLOR);

    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("sumimasen senpai, you need to be in a voice channel first :3")
      return message.channel.send(embed);
    }
    
     const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("i am not playing anything rn ;-;")
      return message.channel.send(embed);
    }
    
    if(!args[0]) {
      embed.setAuthor(`The Current Volume is ${serverQueue.volume}`)
      return message.channel.send(embed)
    }
    
    if(isNaN(args[0])) {
      embed.setAuthor("gomen'nasai senpai! please use numerical values only! :3")
      return message.channel.send(embed)
    }
    
    if(args[0] > 200) {
      embed.setAuthor("ahh you'll earrape now!!")
      return message.channel.send(embed)
    }
    
    serverQueue.volume = args[0]
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100)
    embed.setDescription(`Set Volume to ${args[0]} nice`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
  }
};