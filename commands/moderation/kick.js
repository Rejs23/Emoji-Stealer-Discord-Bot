const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "kick",
  usage: "say <@user>",
  category: "👮‍♂️ | Moderation",
  description: "Kick user",
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("You can't use that!");
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.channel.send("I don't have the right permissions.");

    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!args[0]) return message.channel.send("Please specify a user");

    if (!member)
      return message.channel.send(
        "Can't seem to find this user. Sorry 'bout that :/"
      );
    if (!member.kickable)
      return message.channel.send(
        "This user can't be kicked. It is either because they are a mod/admin, or their highest role is higher than mine"
      );

    if (member.id === message.author.id)
      return message.channel.send("You can't kick yourself!");

    let reason = args.slice(1).join(" ");

    if (!reason) reason = "Unspecified";

    member.kick(reason).catch(err => {
      if (err) return message.channel.send("Something went wrong");
    });

    const kickembed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Member Kicked")
      .setThumbnail(
        member.user.displayAvatarURL({ format: "png", dynamic: true })
      )
      .addField("User Kicked", member)
      .addField("Kicked by", message.author)
      .addField("Reason", reason)
      .setFooter("Time kicked", bot.user.displayAvatarURL())
      .setTimestamp();

    message.channel.send(kickembed);
  }
};