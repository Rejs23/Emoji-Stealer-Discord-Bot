const Discord = require("discord.js");

module.exports = {
  name: "vote",
  category: "🌏 | General",
  description: "Get Kaguya invite link",
  run: async (bot, message, args) => {
    
    const botEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Vote Kaguya")
      .addField("Every 10 hours", `[Astro](https://botlists.com/bot/725432896533299200/vote)`)
      .setFooter(`Thanks for your support!`)
    message.channel.send(botEmbed);
    console.log(`> ${message.author.tag}_USE_VOTE_COMMANDS`)
  }
};
