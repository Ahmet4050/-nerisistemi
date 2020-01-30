const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

	   if (!message.member.hasPermission('MANAGE_GUILD')) return  message.channel.send(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için `Sunucuyu yönet` iznine sahip olmalısın!!'))
  if(args[0] === "0" || args[0] === "sıfırla") {
 await db.delete(`önerikanal_${message.guild.id}`)
    message.reply(new Discord.RichEmbed().setDescriptio('Başarıyla öneri kanal sıfırlandı!'))
    return
  }
    const kanal = message.mentions.channels.first() || args.slice(0).join('')
    
if(!kanal) return   message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bir kanal belirtmelisin!! \nÖrnek: **!öneri-kanal #önerikanal**`))

    db.set(`önerikanal_${message.guild.id}`, `${kanal.id}`)
  
       message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Öneri kanalı başarıyla ${kanal} olarak ayarlandı!`));
 
}

exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 2,	
aliases: [],
}

exports.help = {
name : 'öneri-kanal',
description: 'Öneri kanalı ayarlarsınız.',	
usage : 'öneri-kanal #önerikanal'
}
