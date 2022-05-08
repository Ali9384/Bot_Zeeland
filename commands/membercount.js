const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setColor("#41eb2a")
    .addField("MemberCount", message.guild.memberCount.toString())

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "membercount"
}