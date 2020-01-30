const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {
 const öneri = args.join(' ');
  if(!öneri) return message.channel.send(new Discord.RichEmbed().setDescription('Bir şey yazmalısın!!'));

let önerikanal = db.get(`önerikanal_${message.guild.id}`)
  const oneri_kanal = client.channels.get(önerikanal);
    oneri_kanal.send(
  new Discord.RichEmbed()  	
.setColor('RED')
.setTitle('Yeni bir öneri var')
.setTimestamp()
 .setThumbnail(message.author.avatarURL)
.setDescription('Öneri: ' +öneri+'\n Öneren: ' +message.author.tag+'\nKomut kullandığı sunucu  : '+message.guild.name)
)
message.channel.send(new Discord.RichEmbed().setDescription('**Öneriniz iletildi!**'));
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,	
aliases: [],
}

exports.help = {
name : 'öneri',
description: 'Öneri Yaparsınız',
usage : 'öneri <mesajınız>'
}
