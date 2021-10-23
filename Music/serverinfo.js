const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "serverinfo",
  aliases: ["server"],
  cooldown: 5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setColor("#FF0000")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setTimestamp()
    .setAuthor(`${message.guild.name}`,message.guild.iconURL({ dynamic: true }))
    .addField('🆔 Server ID :',`\`${message.guild.id}\``,true)
    .addField('<a:sahat:827565115083718668> Created On :',message.guild.createdAt.toLocaleString())
    .addField('<a:tangsor:840818995079020565> Owner Server :',`<@${message.guild.ownerID}>`,true)
    .addField('<a:emoji_19:818845027438166026> Members :',`\`${message.guild.memberCount}\``,true)
    .addField('<:emoji_30:832942399096487956> Channels :',`\`${message.guild.channels.cache.size}\``,true)
    .addField('<a:emoji_47:837420935975141477> Region :',`\`${message.guild.region}\``,true)
    .addField('<a:emoji_48:837422969453936640> Roles :', `\`${message.guild.roles.cache.size}\``, true)
    .addField('<a:boost:839407622436028426> Total Boost :',`\`${message.guild.premiumSubscriptionCount} Boost\``,true)
    .addField('<a:emoji_20:818845772878446632> Emojis :',`\`${message.guild.emojis.cache.size}\``,true)
   helpEmbed
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
