const Discord = require("discord.js")
module.exports = {
  name: "say-e",
  usage: "say-e <text>",
  aliases: ["say-embed"],
  category: "👮‍♂️ | Moderation",
  description: "Say the embed message",
run: async (bot, message, args) => { 
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.reply("Missing Permission\nYou must have permission \`Manage Messages\`").then(m => m.delete(5000));}
    let text = args.join(" ");
    if (!text) return message.reply("Please give me some text to say! :)");
    const sayEmbed = new Discord.MessageEmbed()
    .setDescription(text)
    .setFooter(`Message by ${message.author}`)
    .setColor("BLUE")
    .setTimestamp();
    message.delete();
    message.channel.send(sayEmbed);
    console.log(`> ${message.author.tag}_USE_SAY_EMBED_COMMANDS`)
  }
}