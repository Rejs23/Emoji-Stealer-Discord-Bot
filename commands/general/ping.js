const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ping",
  category: "🌏 | General",
  description: "Check bot ping",
  run: async (bot, message, args) => {
    let pingWs = Math.round(bot.ws.ping) 
    let pingLa = m.createdTimestamp - message.createdTimestamp
    
    let embed = new MessageEmbed()
    .setAuthor()
    .setTitle(`${bot.user.username}'s ping`)
    .setColor("BLUE")
    .addField(`🏓 Latency`, `\`${pingLa}\`ms`, true)
    .addField(`🏓 API Latency`, `\`${pingWs}\`ms`, true)
    .setTimestamp()
    const m = await message.channel.send("Ping Pong...");
    await m.edit(embed);
    console.log(`> ${message.author.tag}_USE_PING_COMMANDS`)
      ////`🏓Latency is ` +
      ////  "`" +
      ////  `${pingLa}ms` +
      ////  "`" +
      ////  ` | API Latency is ` +
      ////  "`" +
      ////  `${pingWs}ms` +
      ////  "`" +
      ////  ``
    
  }
};
