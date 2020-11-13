const Discord = require("discord.js");
const {colorE} = require("././config.json");
module.exports = {
  name: "avatar",
  category: "🌏 | General",
  usage: "avatar <mention user>",
  aliases: ["av"],
  description: "Show user avatar",
  run: async (bot, message, args,) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(userArgs[0]) ||
      message.guild.members.cache.find(
        x =>
          x.user.username.toLowerCase() === userArgs.slice(0).join(" ") ||
          x.user.username === userArgs[0]
      ) ||
      message.member;
    let tag = member.user.tag;
    let av = member.user.displayAvatarURL({ format: "png", dynamic: true })
    let avGede = member.user.displayAvatarURL({ format: "png", dynamic: true, size: 256 })

    const avatarEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Avatar")
      .setFooter(`Thanks for using ${bot.user.username}`)
      .setAuthor(tag, av)
      .setImage(avGede);
    message.channel.send(avatarEmbed);
    message.delete({ timeout: 15000 }); //angkanya bebas
  }
};
