const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**Music Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setImage(`https://media.discordapp.net/attachments/875408935581016114/883070197790036028/7d20.gif`)

    .setAuthor(`made by Moon Light`, `https://images-ext-1.discordapp.net/external/Vw0bhHeHikuB7_OBgYMCSqwarPQ_jcKFKkKmRUZdaLs/https/media.discordapp.net/attachments/875408935581016114/883070197790036028/7d20.gif`)
    .setDescription(`

<:emoji_54:900460681130819624>┃ **User Commands**
> \`invite . support . about . ping . prefix . uptime . avatar . se . invites . embed . serverinfo . userinfo(user) . servericon(icon)\`

<:emoji_52:900457267432927262>┃ **Music Commands**
> \`play . skip . skipto . stop . volume . nowplaying . shuffle . search . resume . remove . queue . filter . loop . lyrics . radio\`

<:emoji_53:900459656265228368>┃ **Fun Commands**
> \`lock(l) . unlock(ul) . ban . unban . slowmode . giveaway . cv . mute . unmute . say . bans . clear\`

<:emoji_55:900461622185828492>┃ **Links**
[support](https://discord.gg/U9x7w2aky6)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=900455193081155595&permissions=536601952193&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FF55FF");
   message.react("<a:like:813847731285393439>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
