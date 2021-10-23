const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "start",
  description: "Create a simple giveaway",
  cooldown: 1.5,
  usage: "<time> <winner> <prize>",
  category: "fun",
  async execute(message, args) {
    if (!args[0]) return message.channel.send(`You did not specify your time!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `You did not use the correct formatting for the time!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
    return message.channel.send(
        `I could not find that channel in the guild!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);
    message.channel.send(`🎉**|Giveaway created in** ${channel}`);
    let Embed = new MessageEmbed()
      .setTitle(`<a:faram:837417046077472829> New giveaway!`)
      .setDescription(
        `**${prize}**
React with 🎉 to enter!
Hosted by: ${message.author}`)
      .setTimestamp()
      .setFooter(`Ends at`)
      .setColor(`#FF0000`);
    //delete the Command
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Not enough people reacted for me to start draw a winner!`
        );
      }
 
      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `**The winner of the giveaway for**
#️⃣|**${prize}**
🏆|${winner}`
      );
    }, ms(args[0]));
  },
};
