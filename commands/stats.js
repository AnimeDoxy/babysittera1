const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");



module.exports = {
  name: "info",
  description: "Get the detailed information of bot",
  execute(client, message, args) {
    
    let embed = new MessageEmbed()
    .setColor(COLOR)
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`stats and info`, client.user.displayAvatarURL())
    .setDescription(`I am a ${client.user.username}. I detect the pintuboy amongus`)
    .addField("SERVERS", client.guilds.cache.size, true)
    .addField("UPTIME", client.uptime, true)
    .addField("STATUS", client.user.presence.status, true)
    .addField("TOTAL MEMBERS", client.users.cache.size)
 console.log(client.user.presence)
    message.channel.send(embed)
  }
};