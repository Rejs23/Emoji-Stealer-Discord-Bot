const Discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "🌏 | General",
  description: "Check bot ping",
  run: async (bot, message, args) => {
    let pingWs = Math.round(bot.ws.ping) 
    let pingLa = m.createdTimestamp - message.createdTimestamp
    const m = await message.channel.send("Ping Pong...");
    await m.edit(
      `🏓Latency is ` +
        "`" +
        `${pingLa}ms` +
        "`" +
        ` | API Latency is ` +
        "`" +
        `${pingWs}ms` +
        "`" +
        ``
    );
  }
};
