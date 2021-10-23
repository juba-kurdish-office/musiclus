const { MessageEmbed } = require('discord.js');
const { BOT_OWNER_ID,BOT_ID,SERVER_INVITE,EMOJI_DONE,EMOJI_ERROR} = require("../config.json");
module.exports = {
    name: "userinfo",
    aliases: ["user", "u", "U"],
    cooldown: 5,
    category: "extra",
    async execute(message, args) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:729181184193462285> online";
                break;
            case "dnd":
                status = "<:dnd:729181212530442311> dnd";
                break;
            case "idle":
                status = "<:idle:729181121933475931> idle";
                break;
            case "offline":
                status = "<:offline:729181162182017051> offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username}`)
            .setColor(`#FF0000`)
            .setTimestamp()
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "<a:tangsor:840818995079020565> Name : ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID : ",
                    value: user.user.id,
                },
                
                {
                    name: "<a:emoji_45:837418957110509598> Activity : ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `User isn't playing a game!`,
                    inline: true
                },
                {
                    name: '<a:zeko:837426841408110653> Avatar link : ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: '<a:sahat:827565115083718668> Creation Date : ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '<a:emoji_19:818845027438166026> Joined Date : ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: '<a:tangsor:840818995079020565> User Roles : ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.channel.send(embed)
    }
}
