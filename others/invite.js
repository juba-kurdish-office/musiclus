const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("<:emoji_55:900461622185828492>");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#FF55FF").setTitle("").setDescription("<:emoji_55:900461622185828492> **[Click Here](https://discord.com/api/oauth2/authorize?client_id=900455193081155595&permissions=536601952193&scope=bot) to invite the bot.**")
    .setFooter(""));
  }
}
