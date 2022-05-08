const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Server Info")
    .setDescription("Hier vind je alle informatie over de server!")
    .setColor("#0099ff")
    .addFields(
        {name: "Bot Naam", value: client.user.username },
        {name: "Je bent de server gejoined op", value: message.member.joinedAt.toString() },
        {name: "Totaal members", value: message.guild.memberCount.toString() }
    );

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "serverinfo"
}