// ==================================================================

 // THIS BOT [JARVIS] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================

const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const canvas = require('canvas-prebuilt');
const jimp = require('jimp');
const ytdl = require('ytdl-core');
const request = require('request');
const dateFormat = require('dateformat');
const google = require('google-it');
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const moment = require('moment');
const pretty = require('pretty-ms'); 
const zalgo = require('zalgolize');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const client = new Discord.Client();
const prefix = '/'
let cooldown = new Set();
let cdseconds = 5;
ti={}  
spee={};

// ================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '3.0';
client.on('message', message => {
    if(message.content.startsWith(prefix + "JARVIS IS BACK ONLINE NOW")) {
    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**🚀 [C.L.U] IS BACK ONLINE NOW & [UPDATED] 🚀** ')
	    .addField('``Bot Version :``' , `[ v3.0 ]` , true)
	    .addField('``Bot Name :``' , `★ JARVIS - 2077 ★` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ], true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TG - Servers :``', [ client.guilds.size ] , true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]`, true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ FOR ADMINS ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()
	          .setDescription(`**:robot: ● Attention [THE TDN™] Users 
[JARVIS] Has Returned From The Darkness Aka Back Online
It Must Be Your Lucky Day ! ● ** `)

    })
}
});

// ================================================================

client.on('ready', function(){
	
client.channels.get("529660118934224896").send("/JARVIS IS BACK ONLINE NOW").then(m => m.delete(500));
		   
 });

// ================================================================

client.on("message", async message => {
	
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
	
    const command = args.shift().toLowerCase();
	
    if(message.author.id != "480540559233122324") return;
	
    if(message.author.bot) return;
	
    if (command == "leaveserver") {
	    
        if(!args[0] || args[1]) return message.reply(`| Type : **${prefix}leaveserver & <guild_id>** | :x:`);
	    	  
        let GuildId = client.guilds.get(args[0])
	
        if(!GuildId) return message.reply(`**:x: | Guild "ID" Is Not Detected | :x:**`);
	    
        GuildId.leave().then(m => message.channel.send("Done | I Have Left : **["+GuildId.name+"]** Server | ✅"))
    }     
})

// ================================================================

 client.on('message', message => {
    if(message.content === prefix + "shutdown") {
	    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));    
            client.channels.get("552138170012008469").send({
	    embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('dc322f')
	    .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	    .setTimestamp()
            .setTitle('**● :robot: [JARVIS] IS SHUTDOWN NOW BY THE OWNERS !**')
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		    });
            console.log(`${message.author.tag} [ ${message.author.id} ] Jarvis Has ShutDown Successfully.`);
            setTimeout(() => {
            client.destroy();
            },3000);
}
});    

// ==================================================================

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setColor('RANDOM')
    .setDescription(`:heart: **شكراً لك لإضافه البوت الى سيرفرك** :heart:`)
    .addField('**● Bot Version** :robot: :' , `**[ v3.0 ]**`)
    .addField('**● Bot CMD** 🔮 :' , `**Use /help For Bot Commands**`)
    .addField('**● Bot Owner** 👑 :' , `**[<@480540559233122324>]**`)
    .addField('**● Bot Name** 🔰 :' , `**[ ${client.user.tag} ]**`)
    .setFooter('🔰 [ THE TDN™ - OFFICIAL ] 🔰')
    .setTimestamp()
        guild.owner.send(embed)
  });

// ================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
   if(message.author.id !== "480540559233122324") return message.reply('**:x: SORRY MATE THIS COMMANDS ONLY FOR BOT OWNER :x:**').then(m => m.delete(60000));
   message.channel.send('**:beginner: [❖══ ● JARVIS SYSTEM BOT V3.0 - 2019© ● ══❖] :beginner: **').then(m => m.delete(60000));
   const embed = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setTitle(`**:beginner: [❖══ ● C.L.U SYSTEM BOT ● ══❖] :beginner:**`)
  .setFooter('❖══ ● 🔰 [ THE TDN™ - OFFICIAL ] 🔰 ● ══❖')
  .setDescription(`** 
  :tools: ● /STATS - /SERVER - /RESTART - /SHUTDOWN - /MEMBERS - /ID - /USERINFO - /NEWS - /BC - /BAN - /LOCK - /CLEAR - /WR  - /VKICK ● :tools:**`)
  .setTimestamp()
  .addField('**● BOT - VERSION** :robot: :' , `**[ 3.0 ]**`)
  .addField('**● BOT - OWNER** 👑 :' , `**[ <@480540559233122324> ]**`)
     message.channel.sendEmbed(embed);
	   
       }
   });

// ==================================================================

client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 10000 ;
    var setGame = [`★ TDN™ | SYSTEM ★`,`★ TDN™ USERS : [${client.users.size}] ★`,`★ /invite ★`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);

});

// ==================================================================

client.on('message', message => {
  var prefix ="/";
if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply('** :x: This command Only For Servers :x:**').then(m => m.delete(5000));
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setThumbnail(client.user.avatarURL)
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID :**", message.guild.id,true)
.addField("**📅 Created On :**", message.guild.createdAt.toLocaleString(),true)
.addField("**👥 Members :**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels :**',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Server Region :**" , message.guild.region,true)
.addField("** 🔐 Roles :**",`**[${message.guild.roles.size}]** Role `,true)
.setColor('RANDOM')
.setFooter('❖══ ● 🔰 [ THE TDN™ - OFFICIAL ] 🔰 ● ══❖')
.addField('**:robot: BOT - VERSION :**' , `**[ 3.0 ]**`)
.addField('**👑 BOT - OWNER :**' , `**[ <@480540559233122324> ]**`)
.setTimestamp()
message.channel.sendEmbed(embed)

}
});

// ==================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '3.0';
client.on('message', message => {
    if(message.content.startsWith(prefix + "stats")) {
    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(5000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**[JARVIS] STATS** ')
	    .addField('``Bot Version :``' , `[ v3.0 ]` , true)
	    .addField('``Bot Name :``' , `★ JARVIS - 2077 ★` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ] , true)
            .addField('``Bot Ping :``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TG - Servers :``', [ client.guilds.size ] , true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ / ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
	          .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()

    })
}
});

// ==================================================================

    client.on("message", msg => {
             var prefix = "/";
    if(msg.content.startsWith (prefix + "id")) {
      if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط :x:**').then(m => m.delete(5000));
        const embed = new Discord.RichEmbed();
    embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
            .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
            .setColor("RANDOM")
            .setFooter(msg.author.username , msg.author.avatarURL)
	    .setFooter('❖══ ● 🔰 [ THE TDN™ - OFFICIAL ] 🔰 ● ══❖')
            .setThumbnail(`${msg.author.avatarURL}`)
            .setTimestamp()
            .setURL(`${msg.author.avatarURL}`)
            .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
            .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
            .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
            .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
        msg.channel.send({embed: embed})
        }
  });


// ==================================================================


client.on('message' , message => {
    var prefix = "/";
if(message.content.startsWith(prefix+"userinfo")) {
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'لا يلعب حاليا.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'لم يرسل رسالة. ';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = ':black_heart:';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**name:** ${user.username}#${user.discriminator}\n**JoinedDiscord:** ${joineddiscord}\n**LastMessage:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Roles:`, message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .setFooter('🔰 [ THE TDN™ - OFFICIAL ] 🔰')
  .addField('DiscordInfo:', `**Discriminator:** #${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`معلومات ${user.username}`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})
  .catch(e => logger.error(e));
}
 });

// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
 if (!message.channel.guild) return;
 if (message.content.startsWith(prefix + 'members')) {
 if(message.author.id !== "480540559233122324") return message.reply('**:x: SORRY MATE THIS COMMANDS ONLY FOR BOT OWNER :x:**').then(m => m.delete(6000));
     if (!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)

     .setDescription(`**:battery: MEMBER STATS :**
 
**:green_heart: Online :**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle :**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND :**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline :** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
.setFooter('🔰 [ THE TDN™ - OFFICIAL ] 🔰')
.setTimestamp()
     message.channel.send()

     message.channel.sendEmbed(embed)
 }
});

// ==================================================================

  client.on('message', message => {
    if (message.content.startsWith("link")) {
      if(!message.guild.member(client.user).hasPermission("CREATE_INSTANT_INVITE")) return message.reply("**I Don't Have `CREATE_INSTANT_INVITE` Permission**").then(msg => msg.delete(6000))
        message.channel.createInvite({
          thing: true,
          maxUses: 5,
          maxAge: 86400,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
      message.author.send(`** :link: TIME FOR THE LINK : " 1DAY " :link:**`)

      message.channel.send("**:link: Invite Linke Sent In DM Successfully**").then(m => m.delete(6000));
    }
  });


// ==================================================================

  const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
	  var prefix = "/";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('**You must provide some text to emojify!**');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

// ==================================================================

client.on('message', message => { 
    var prefix = "/";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyCncxr7q-96yc3uRT0Ib2L3aBlSHA9F0_A');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});

// ==================================================================

 client.on('message', message => {
if(message.content.startsWith(prefix +'news')) {
if(!message.channel.guild) return message.channel.send('**This Command Only For Servers **').then(m => m.delete(5000));
      const A8tra7Room = message.guild.channels.find(x => x.name === "change-log")
      if(!message.channel.guild) return message.reply(`This Command Only For Servers :x:`).then(m => m.delete(5000));
   let a8tra7 = message.content.split(' ').slice(1).join(' ')
   var m8tr7 = message.author.id
if(!message.guild.channels.find(x => x.name === "change-log")) return message.channel.send('i cant find `change-log` Room!')
   var ThxForSug = new Discord.RichEmbed()
      .setColor('WHITE')
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`Thank For your Change Log For The C.L.U ! :sparkles: `)
.setDescription(`**Bot Change Log** : ${a8tra7}`)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
      .setColor('WHITE')
   .setTitle(`Are you sure you send the proposal? You have a minute before canceling.`)               
.setDescription(`Bot Change Log : **${a8tra7}**`)
		 .setFooter('Change-Log' , client.user.avatarURL)
message.channel.sendEmbed(Sure).then(msg => {
    msg.react('❎')
.then(() => msg.react('✅'))

let YesFilter = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
let NoFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

let Yes = msg.createReactionCollector(YesFilter, { time: 60000 });
let No = msg.createReactionCollector(NoFilter, { time: 60000 });

Yes.on("collect", r => {
   var ala8tra7 = new Discord.RichEmbed()
   .setTimestamp()
   .setColor('GOLD')
   .setThumbnail(message.author.avatarURL)
   .setTitle(`New Bot Change Log :bell:`)
   .setDescription(`From : __<@${m8tr7}>__\n\nBot Change Log : **${a8tra7}**`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   A8tra7Room.send(ala8tra7)
   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(6000)})
msg.delete();

})
No.on("collect", r => {
message.channel.send('Bot Change Log canceled :white_check_mark: ').then(message => {message.delete(6000)})
msg.delete();
})
})
}			     
});                        
  
// ==================================================================

client.on('message', message => {
    if (message.channel.id == "529659667421462548") {
        message.react("👍");
        message.react("👎");
	    
         }
   });


// ==================================================================

const seender = 'Brodcast + Sender -> {sender}.';
const server = 'Brodcast + server -> {server}.';
const user = 'Brodcast + @user -> {user}.';
client.on('message', message => {
    if(!message.channel.guild) return;
     var success = new Discord.RichEmbed()
     .setDescription(`**Done**.`)
     .setColor('#9F81F7')
 if(message.content.startsWith(prefix + 'bc')) {
 if(!message.channel.guild) return message.channel.send('**This Command Just For Servers**').then(m => m.delete(5000));
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**Youd Dont Have Prem** `ADMINISTRATOR`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setDescription(`**▶ 📝 To Send Embed Brodcast Press \n ▶ ✏ To Send Normal Brodcast Press \n ★ ${user} \n ★ ${server} \n ★ ${seender}**`)
 if (!args) return message.reply('**You should write a word or phrase To send The Brodcast**');message.channel.send(BcList).then(msg => {
 msg.react('📝')
 .then(() => msg.react('✏'))
 .then(() =>msg.react('📝'))
 
 let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
 let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
 EmbedBc.on("collect", r => {
 
 message.channel.send(success);
 message.guild.members.forEach(m => {
 let EmbedRep = args.replace('{server}' ,message.guild.name).replace('{user}', m).replace('{sender}', `${message.author}`)
 var bc = new
 Discord.RichEmbed()
 .setColor('RANDOM')
 .setFooter('📢|TDN™ - BroadCast|📢')
 .addField('🔰السيرفر🔰', message.guild.name)
 .addField('🚩المرسل🚩', message.author.username)
 .setDescription(EmbedRep)
 .setFooter('🔰 [ THE TDN™ - OFFICIAL ] 🔰')
 .setTimestamp()
 
 m.send({ embed: bc })
 msg.delete();
 })
 })
 NormalBc.on("collect", r => {
   message.channel.send(success);
 message.guild.members.forEach(m => {
    let NormalRep = args.replace('{server}' ,message.guild.name).replace('{user}', m).replace('{sender}', `${message.author}`)
 m.send(NormalRep);
 msg.delete();
 })
 })
 })
 }
 });

// ==================================================================

  client.on("message", message => {
    let args = message.content.split(" ").slice(1);
  if (message.content.startsWith('/report')) {
      message.author.send(`**🔰 • Thank You For Making Grid The Best Place ❤, (We Will Check Your Report As Soon Possible) • 🔰**`)
        let user = message.mentions.users.first();
        let reason = args.slice(1).join(' ');
        let modlog = client.channels.find(x => x.name === 'report⚠');
        if (!reason) return message.reply('**:x: You Must Montion The Member To Be Reported and The Reason :x:**').then(m => m.delete(60000));
        if (message.mentions.users.size < 1) return message.reply('**You must Montion The Member To Be Reported**').catch(console.error);
         

    if (!modlog) return message.reply('**Report Room is Not Available**').then(m => m.delete(60000));
    const embed = new Discord.RichEmbed()
      .setColor('dc322f')
      .setTimestamp()
      .setFooter('🔰 [ THE TDN™ - OFFICIAL ] 🔰')
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField('🔰 • User ID :',`${message.author.id}`)
      .addField('🔰 • Message Type :', '**⛔ Report ⛔**')
      .addField('🔰 • Member Reported :', `${user.username}#${user.discriminator} (${user.id}`)
      .addField('🔰 • Report Owner :', `${message.author.username}#${message.author.discriminator}`)
      .addField('🔰 • Reason :', reason);  
      message.delete()
      return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
      
  }
  });

// ==================================================================

client.on("message", message => {
    let args = message.content.split(" ").slice(1);
  if (message.content.startsWith('/feedback')) {
      message.author.send(`**🔰 • Thank You For Making Grid The Best Place ❤, (We Will Check Your Feedback As Soon Possible) • 🔰**`)

        let user = message.mentions.users.first();
        let reason = args.slice(1).join(' ');
        let modlog = client.channels.find(x => x.name === 'feedback');
        if (!reason) return message.reply('**:x: You Must Montion Yourself and Type Your Message To feedback :x:**').then(m => m.delete(60000));
        if (message.mentions.users.size < 1) return message.reply('**:x: You Must Montion Yourself To feedback :x:**').catch(console.error);
   
    if (!modlog) return message.reply('**:x: Feedback Room is Not Available :x:**');
    const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()  
      .setFooter('🔰 [ THE TDN™ - OFFICIAL ] 🔰')
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField('🔰 • User ID :',`${message.author.id}`)
      .addField('🔰 • Message Type :', '**❤ Feedback ❤**')
      .addField('🔰 • Author Name :', `${message.author.username}#${message.author.discriminator}`)
      .addField('🔰 • Feedback Message :', reason);
      message.delete()
      return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);

  }
  });

// ==================================================================

client.on('message',message => {
if(!message.channel.guild) return;
    var prefix1 = "/";
if (!message.content.startsWith(prefix1)) return;
    var command = message.content.split(" ")[0];
     command = command.slice(prefix1.length);
    if (command == "move") {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("**:x: Invalid User **")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannelname = message.member.voiceChannel.name;
 var authorchannel = message.member.voiceChannelID;
 var userid = message.mentions.members.first().id;
 
 message.guild.members.get(userid).setVoiceChannel(authorchannel).then(m => message.channel.send(`:white_check_mark: **<@${userid}> moved to \`\`${authorchannelname}\`\`**`))
     
} else {
message.channel.send("**:x:  User must be in voice channel **")
}
} else {
 message.channel.send("**:x:  You must be in voice channel!**")
}
} else {
message.react("❌")
 }}})

// ==================================================================

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" **How Can I Help You With ?** ").then(m => m.delete(60000));
    }
});

// ==================================================================

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find(x => x.name === '☆welcome☆');
  let memberavatar = member.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(member.guild.name, member.guild.iconURL)
      .setThumbnail(memberavatar)
      .addField('• 🔰 | User Name » ',`${member}`)
      .addField('• 👥 | Welcome User » ' , `💎・。・゜★・。・。☆・゜・。・゜。・。・゜★・💎 
Welcome ${member} To **THE DAMNATION™ - OFFICIAL**  Server , Please Be Sure To take a look At The Rules in **#server-rules☑** Additional Details Can Be Found In **#announcements** . Our Support Team Is Here And Happy To Help You If You Have Any **Questions Regarding The TDN™**, Enjoy Your Stay ♥.
💎・。・゜★・。・。☆・゜・。・゜。・。・゜★・💎`)
      .addField('• 🆔 | User ID » ', "**[" + `${member.id}` + "]**" )
              .addField('• ➡ | You Are Number » ', "**[" + `${member.guild.memberCount}` + "]**")                     
                                   .addField('• 🔮 | Server Name » ', `**${member.guild.name}**` ,true)
  .addField('• 🕣 | Time Create » ', **member.user.createdAt.toLocaleString()**, true)

                                     
   .setFooter("❖══ ● 🔰 [ THE TDN™ - OFFICIAL ] 🔰 ● ══❖")
      .setTimestamp()
 
    channel.sendEmbed(embed);
});

// ==================================================================

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`** 💎 Welcome ${member} To 🔰 • ${member.guild.name} Server • 🔰 - Please Read Our [Rules] Before Do Something Else And Respect The Other Members Within The Community ! , Enjoy ♥ [ And You Are Number : "${member.guild.memberCount}" ] 💎**`)
}).catch(console.error)
})

// ==================================================================

client.on('message', msg => {

  if (msg.content === 'hi') {

    msg.reply('**Hi How Are You :hearts: **');

  }

});

// ==================================================================

client.on('message', msg => {
 	var prefix = "/";
   if (msg.author.bot) return;
   if (!msg.content.startsWith(prefix)) return;
   let command = msg.content.split(" ")[0];
   command = command.slice(prefix.length);
   let args = msg.content.split(" ").slice(1);
 
     if(command === "clr") {
         const emoji = client.emojis.find(x => x.name === "wastebasket")
     let textxt = args.slice(0).join("");
     if(msg.member.hasPermission("MANAGE_MESSAGES")) {
     if (textxt == "") {
         msg.delete().then
     msg.channel.send("**```Supply A Number```**").then(m => m.delete(3000));
 } else {
     msg.delete().then
     msg.delete().then
     msg.channel.bulkDelete(textxt);
         msg.channel.send("```Cleard: " + textxt + " Messages```").then(m => m.delete(3000));
         }    
     }
 }
 });

// ==================================================================

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "creators-dashboard")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***``ضع عدد الرسائل التي تريد مسحها 👌``***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("``php\nعدد الرسائل التي تم مسحها: " + textxt + "\n``").then(m => m.delete(3000));
        }    
    }
}
});
     
// ==================================================================

client.on("message", (message) => {
if (message.content.startsWith("/ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("⚠ | ** You Don`t Have Permission `MANAGE_CHANNELS`**");
        let args = message.content.split(" ").slice(1);
if(!args.join(" ")) return message.reply(`**${prefix}ct <Name Channel>**`).then(msg => msg.delete(5000)); // By : Zodo,
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage(`The Text Room Was Created \`${args.join(' ')}\``)

}
});

// ==================================================================

client.on("message", (message) => {
if (message.content.startsWith("/cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("⚠ | ** You Don`t Have Permission `MANAGE_CHANNELS`**");
        let args = message.content.split(" ").slice(1);
if(!args.join(" ")) return message.reply(`**${prefix}cv <Name Channel>**`).then(msg => msg.delete(5000)); // By : Zodo,
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage(`The Voice Room Was Created \`${args.join(' ')}\``)
    
}
});

// ==================================================================

client.on('message', message => {
 var prefix = "/";
        if(message.content === prefix + "mutechannel") {
                            if(!message.channel.guild) return message.reply('** This command only for servers**');
 
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | ** You Don`t Have Permission `MANAGE_MESSAGES`**');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: false
 
               }).then(() => {
                   message.reply("**:white_check_mark: Success Has Been Locked Channel**")
               });
                 }
     if(message.content === prefix + "unmutechannel") {
                         if(!message.channel.guild) return message.reply('** This command only for servers**');
 
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | ** You Don`t Have Permission `MANAGE_MESSAGES`**');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: true
 
               }).then(() => {
                   message.reply("**:white_check_mark: Success Has Been UnLocked Channel**")
               });
     }
        
 });

// ==================================================================

client.on('message', async message =>{
  var prefix = "/";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**Mention someone first**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**Sorry ,But I Dont Have Permissiom** `MANAGE_MESSAGEES`');
    let muterole = message.guild.roles.find(x => x.name === "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**Mute Time ??**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **Done, Mute time is** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **Unmuted !**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
	
// ==================================================================

if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**@User**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**This User is not muted !**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**Done User has been Unmuted !**:white_check_mark:");
 
  return;
 
  }
 
});

// ==================================================================

client.on('message', message => {
	var command = message.content.toLowerCase().split(" ")[0];
	var args = message.content.toLowerCase().split(" ");
if(null == message.guild || !message.guild) return;
	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
	var logChannel = message.guild.channels.find(c => c.name === 'log');
	var prefix = '/';
	
	if(command == prefix + 'ban') {
	if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
        if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
		if(!userM) return message.channel.send(`**Mention SomeOne**`);
		if(userM.user.id === message.author.id) return message.channel.send(':no_entry: | Why you want ban **Your Self** ?');
		if(userM.user.id === message.guild.owner.id) return message.channel.send(':no_entry: | Nice try dude \:D');
		if(message.guild.member(userM.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`:no_entry: | You cant give **${userM.user.username}** Ban beacuse him role highest then your role!`);
		if(message.guild.member(userM.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I cant give **${userM.user.username}** Ban beacuse him role highest then my role!`);
		if(!message.guild.member(userM.user).bannable) return message.channel.send(`:no_entry: | I cant give **${userM.user.username}** Ban.`);
		var time = message.content.split(" ")[2];
		if(!time) time = '1d';

		if(!ms(time)) {
			var reason = message.content.split(' ')[2];
		}else {
			var reason = message.content.split(' ')[3];
		}
		
		if(!reason) reason = 'No reason provided.';
		
		userM.user.send(`:no_entry: | You have \`\`BANNED\`\` From the server **${message.guild.name}**, By: **${message.author.tag}**, Reason: \`\`${reason}\`\`, Time: **${time}**`).catch();
        message.guild.member(userM.user).ban({ reason: reason });
        message.channel.send(`:white_check_mark: | Successfully \`\`BANNED\`\` ${userM.user.username} from the server! :airplane: \`\`${reason}\`\``);
		
		let banInfo = new Discord.RichEmbed()
		.setTitle('**[BANNED]**')
		.setThumbnail(message.author.avatarURL)
		.setColor('GREEN')
		.setDescription(`**\n:airplane: Successfully \`\`BANNED\`\` **${userM.user.username}** From the server!\n\n**User:** <@${userM.user.id}> (ID: ${userM.user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})\n**Reason:** \`\`${reason}\`\`\n**Time:** ${time}`)
		.setTimestamp()
		.setFooter(userM.user.tag, userM.user.avatarURL)
		
		if(logChannel) {
			logChannel.send(banInfo);
		}
		
		setTimeout(function() {
			message.guild.fetchBans().then(bans => {
				var Found = bans.find(m => m.id === userM.user.id);
				if(!Found) return;
				
				message.guild.unban(userM.user);
			
				let unbanInfo = new Discord.RichEmbed()
				.setTitle('**[UNBANNED]**')
				.setThumbnail(message.guild.iconURL)
				.setColor('GREEN')
				.setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` **${userM.user.username}** From the server!\n\n**User:** <@${userM.user.id}> (ID: ${userM.user.id})\n**Reason:** \`\`Time Ended.\`\``)
				.setTimestamp()
				.setFooter(userM.user.tag, userM.user.avatarURL)
				
				if(logChannel) {
					logChannel.send(banInfo);
				}
			})
		}, ms(time))
	}
	
// ==================================================================

	if(command == prefix + 'unban') {
		
		 if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
		if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
		if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
		if(!args[1]) return  message.channel.send('**:no_entry: | Please type the ID of user**');
		if(args[1].length < 16) return message.reply('**:no_entry: | This ID is not id user!**');
		message.guild.fetchBans().then(bans => {
			var Found = bans.find(m => m.id === args[1]);
			if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
			message.guild.unban(args[1]);
			message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);
			
			let banInfo = new Discord.RichEmbed()
			.setTitle('**[UNBANNED]**')
			.setThumbnail(message.author.avatarURL)
			.setColor('GREEN')
			.setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
			.setTimestamp()
			.setFooter(userM.user.tag, userM.user.avatarURL)
			
			if(logChannel) {
				logChannel.send(banInfo);
			}
		})
	}
});

// ==================================================================

client.on('message', message => {
 	var prefix = "/"
   if (message.author.x5bz) return;
   if (!message.content.startsWith(prefix)) return;
 
   let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
   if (command == "kick") {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
          
   if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
   if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
   let user = message.mentions.users.first();
   let reason = message.content.split(" ").slice(2).join(" ");
   if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
   if(!reason) return message.reply ("**Write A Reason**");
   if (!message.guild.member(user)
   .kickable) return message.reply("**I Cant Kick SomeOne High Than My Rank**");
 
   message.guild.member(user).kick();
 
   const kickembed = new Discord.RichEmbed()
   .setAuthor(`KICKED!`, user.displayAvatarURL)
   .setColor("RANDOM")
   .setTimestamp()
    .setFooter('🔰 [ THE TDN™ - OFFICIAL ] 🔰')
   .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
   .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
   .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   message.channel.send({
     embed : kickembed
   })
 }
 });

// ==================================================================

client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + 'vkick')) {
    try {
    if(!men) {
      message.channel.send("**Mention A Person**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("The Person Not In A VoiceChannel");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("You Dont Have Permissions To Kick This Person")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("The Bot Not Have Permissions To Kick This Person");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I Dont Have Permissions To Create VoiceChannel")

    message.guild.createChannel("vKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**Has Been Kicked From The VoiceChannel \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("I Cant Do This For Permissions Or Something :/");
}
  }
});

// ==================================================================

client.on("message", (message) => {
    if (message.content.startsWith('/delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find(x => x.name === args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});

// ==================================================================


client.on('message', message => {


if (message.content === prefix + "lock") {
if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | I dont have **MANAGE_MESSAGES** Permission!');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: false

           }).then(() => {
               message.reply("Channel Locked ✅ ")
           });
}
  if (message.content === prefix + "unlock") {
if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | I dont have **MANAGE_MESSAGES** Permission!');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnLocked ✅ ")
           });
}
  

});

// ==================================================================

////////////////// [ 🔰 CONSOL JARVIS LOGS 🔰 ] //////////////////

client.on('warn', console.warn);

client.on('error', console.error);

client.on('disconnect', () => console.log('🔰 I Just Disconnected, Making SureYyou Know, I Will Reconnect Now... 🔰'));

client.on('reconnecting', () => console.log('🔰 I Am Reconnecting Now ! 🔰'));

client.on('ready', function() {

    console.log(`🔰 [ ${client.user.username} ] : IS READY TO FIGHT NOW 🔰`);

});

// ==================================================================


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
	
  
 // ==================================================================


if (command == "say") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

// ==================================================================

client.on('message', message => {
    if(message.content === prefix + "restart") {
	     if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
          client.channels.get("529660118934224896").send({
	     embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('YELLOW')
	    .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	    .setTimestamp()
            .setTitle('**● :robot: [JARVIS] IS OFFLINE NOW !** ')
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		 });
	    console.log(`${message.author.tag} [ ${message.author.id} ] JARVIS Has Restarted Successfully.`);
            console.log(`JARVIS Is Restarting Now..`);
            setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
            },3000);

}
});
  
// ==================================================================

client.on('message', eyad => {
  if (eyad.content.startsWith('/vb')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**You dont have prem** :rage: | ❎ ");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`@user `');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
You have been banned To join the rooms 
by : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
You have been banned To join the rooms 
by : <@${eyad.author.id}> `)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
    }
})

// ==================================================================

client.on('message', eyad => {
  if (eyad.content.startsWith('/unvb')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**You dont have prem** :rage: | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`@user `');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
You have been unbanned To join the rooms 
by : <@${eyad.author.id}> **`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
You have been unbanned To join the rooms 
by : <@${eyad.author.id}>
`)
.setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(15000)})
    }
})

// ==================================================================


client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "invite-clu") {
      if(!message.content.startsWith(prefix)) return;
         if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }          
   if(!message.channel.guild) return message.reply(':no_entry: | This Command For Owners Only!').then(m => m.delete(60000));
   message.channel.send('** :beginner:  [❖══ ● C.L.U SYSYTEM BOT ● ══❖] :beginner:  **').then(m => m.delete(60000));
   const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username,client.user.avatarURL)
  .setColor('RANDOM')
  .setThumbnail(client.user.avatarURL)
  .setTimestamp() 
  .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
  .addField('● C.L.U - VERSION :robot: :' , `**[ v3.0 ]**`)
  .addField('● C.L.U - CMD :keyboard: :' , `**/help**`) 
  .addField('● BOT - OWNER 👑 :' , `**[ <@480540559233122324> ]**`)
  .setTitle(`**:beginner: :link: Click Here To Invite C.L.U System Bot :link: :beginner:**`)
  .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=&permissions=8&scope=bot`)
     message.channel.sendEmbed(embed);
	   
       }
	
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	
   });

// ==================================================================

    client.on('voiceStateUpdate', (old, now) => {
    const channel = client.channels.get('530640160166117386');
    const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
    const size = channel.name.match(/\[\s(\d+)\s\]/);
    if (!size) return channel.setName(`Voice Online : 「${currentSize}」`);
    if (currentSize !== size) channel.setName(`Voice Online : 「${currentSize}」`);
});

// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "invite-quorra") {
      if(!message.content.startsWith(prefix)) return;
         if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }    
   message.channel.send('**:one: : :rainbow: [❖══ ● QUORRA RIANBOW BOT ● ══❖] :rainbow: **').then(m => m.delete(60000));
   const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username,client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setColor('RANDOM')
  .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰') 
  .addField('● QUORRA - VERSION :robot: :' , `**[ v2.0 ]**`)
  .addField('● QUORRA - CMD :keyboard: :' , `**$help**`)
  .addField('● BOT - OWNER 👑 :' , `**[ <@480540559233122324> ]**`)
  .setTimestamp()
  .setTitle(`**:arrow_right: :link: Click Here To Invite Quorra RainBow Bot :link: :arrow_left:**`)
  .setURL(`https://discord.gg/6gmwSgx`)
     message.channel.sendEmbed(embed)
	   
     }
	
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)   
	   
      
   });

// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "invite-rinzler") {
      if(!message.content.startsWith(prefix)) return;
         if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }    
   message.channel.send('**:two: : :headphones: [❖══ ● RINZLER MUSIC BOT ● ══❖] :headphones: **').then(m => m.delete(60000));
   const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username,client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
  .addField('● RINZLER - VERSION :robot: :' , `**[ v1.2 ]**`)
  .addField('● RINZLER - CMD :keyboard: :' , `**-help**`)
  .addField('● BOT - OWNER 👑 :' , `**[ <@480540559233122324> ]**`)
  .setTitle(`**:arrow_right: :link: Click Here To Invite Rinzler Music Bot :link: :arrow_left:**`)
  .setURL(`https://discord.gg/6gmwSgx`)
     message.channel.sendEmbed(embed)
   
       }
	
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	
   });

// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "invite") {
      if(!message.content.startsWith(prefix)) return;
         if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }     
   message.channel.send('**:white_check_mark: ● Done , تــــم ارســالك في الخــاص ● :e_mail:**').then(m => m.delete(60000));
   const embed = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setAuthor(client.user.username,client.user.avatarURL)
  .setColor('RANDOM')
  .setFooter('🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰')
  .addField('● QUORRA - VERSION :robot: :' , `**[ v2.0 ]**`)
  .addField('● RINZLER - VERSION :robot: :' , `**[ v1.2 ]**`)
  .addField('● BOT - OWNER 👑 :' , `**[ <@480540559233122324> ]**`)
  .setTimestamp()
  .setDescription(`**
:fire: [❖════ ● THE TDN™ [BOTS INVITES] ● ════❖] :fire:   
  
❖═════════════════════════════════════❖  

● :one: - :rainbow: : /invite-quorra :arrow_right: To Invite [Quorra] RainBow Bot

● :two: - :headphones: : /invite-rinzler :arrow_right: To Invite [Rinzler] Music Bot

● :books: : سيرفر دعم :arrow_right: https://discord.gg/PzbDJwx

❖═════════════════════════════════════❖  

:hearts: [❖═════ ● المزيد قريبا ان شاء الله! ● ═══════❖] :hearts:**`);

message.author.sendEmbed(embed)

    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	   
  }
	
});

// ==================================================================

client.on('message', async message => {
  if(message.content.startsWith(prefix + "wr")) {
  if(message.author.id !== "480540559233122324") return message.reply('** :x: You Aren\'t The Bot Owner ! :x:**');
  await  message.channel.send(`** :x: Now Write Something To Send :x:**`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content
              message.channel.send(`**:white_check_mark: Message Has Been Sent !**`)
                client.channels.get("529660172587499546").send(`**${message.author.username} Said => ${text}**`)

              })
            }
          })

client.on('ready', () => {
    client.user.setStatus("dnd");
 
 });

// ==================================================================

client.login(process.env.BOT_TOKEN);

// ==================================================================

 // THIS BOT [JARVIS] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================
