const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");

module.exports = {
  name: "loop",
  description: "Loop Your Queue and enjoy the song!",
  execute (client, message, args) {
    let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("senpai, you need to be in a voice channel first :3")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("there is nothing playing that i could loop ;-;")
      return message.channel.send(embed);
    }
    
    //OOOOF
    serverQueue.loop = !serverQueue.loop
    
    
    embed.setDescription(`Loop is now **${serverQueue.loop ? "Enabled!" : "Disabled!"}**`)
    embed.setThumbnail(client.user.displayAvatarURL())
    message.channel.send(embed)
    
    
    
    
  }
}