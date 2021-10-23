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
    message.react("<:emoji_81:881156629742096394>");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#FF55FF").setTitle("").setDescription("<a:zeko:837426841408110653> **[Click Here](https://discord.com/api/oauth2/authorize?client_id=881148979373555763&permissions=261724045121&scope=bot) to invite the bot.**")
    .setFooter(""));
  }
}
