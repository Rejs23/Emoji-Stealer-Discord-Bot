const Discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "🌏 | General",
  description: "Get Kaguya invite link",
  run: async (bot, message, args) => {
    
    const botEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .addField("Add Kaguya", `[Click here](https://discord.com/api/oauth2/authorize?client_id=725432896533299200&permissions=8&redirect_uri=https%3A%2F%2Fkaguya-bot-web.glitch.me%2F&response_type=code&scope=guilds%20bot)`)
      .addField("Bot Website", `[Click here](https://kaguya-website.glitch.me/)`)
      .addField("Support Us", `[Click here](https://saweria.co/donate/Saekyo)`)
    message.channel.send(botEmbed);
    console.log(`> ${message.author.tag}_USE_INVITE_COMMANDS`)
  }
};
