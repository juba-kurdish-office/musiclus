const Discord = module.require("discord.js");

module.exports = {
   name: "bans",
   aliases: [],
   cooldown: 5,
  memberPermissions: [ "EMBED_LINKS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
   description: "Say",
   async execute(message, args) {

   if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(new Discord.MessageEmbed().setColor("#FF0000").setDescription(`Server Ban List: **${bans.size}**`)))
      .catch(console.error);
  }
}
