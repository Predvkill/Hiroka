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
ti={}  
spee={};

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
   if(message.author.id !== "480540559233122324") return message.reply('**:x: SORRY MATE THIS COMMANDS ONLY FOR BOT OWNER :x:**');
   message.channel.send('**:beginner: [❖══ ● JARVIS SYSTEM BOT ● ══❖] :beginner: **');
   const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setTitle(`**:arrow_right: :x: THIS COMMANDS ONLY FOR BOT OWNER/CREATOR :x:**`)
     message.channel.sendEmbed(embed);
	   
       }
   });

  client.on('ready', function(){
  client.user.setStatus("dnd");
    var ms = 10000 ;
    var setActivity = ['★ TDN | System ★','The DamNation™ | Server ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setActivity.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setActivity[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);
});


client.on("ready", async  => {
client.setInterval(async function(){
client.channels.get("546680636123906059").setName(`W`);
client.channels.get("546680636123906059").setName(`WE`);
client.channels.get("546680636123906059").setName(`WEL`);
client.channels.get("546680636123906059").setName(`WELC`);
client.channels.get("546680636123906059").setName(`WELCO`);
client.channels.get("546680636123906059").setName(`WELCOM`);
client.channels.get("546680636123906059").setName(`WELCOME`);
client.channels.get("546680636123906059").setName(`T`);
client.channels.get("546680636123906059").setName(`TO`);
client.channels.get("546680636123906059").setName(`D`);
client.channels.get("546680636123906059").setName(`DA`);
client.channels.get("546680636123906059").setName(`DAM`);
client.channels.get("546680636123906059").setName(`DAMN`);
client.channels.get("546680636123906059").setName(`DAMNA`);
client.channels.get("546680636123906059").setName(`DAMNAT`);
client.channels.get("546680636123906059").setName(`DAMNATI`);
client.channels.get("546680636123906059").setName(`DAPMNTIO`);
client.channels.get("546680636123906059").setName(`DAMNATION`);
client.channels.get("546680636123906059").setName(`DAMNATION™`);
client.channels.get("546680636123906059").setName(`T`);
client.channels.get("546680636123906059").setName(`HE`);
client.channels.get("546680636123906059").setName(`TDN™`);
client.channels.get("546680636123906059").setName(`THE DAMNATION™`);
	

  }, 20000);
});

client.on('message', message => {
  var prefix ="/";
if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply('** :x: This command Only For Servers :x:**');
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});

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
var version = '1.9';
client.on('message', message => {
    if (message.content.startsWith(prefix + "stats")) {
    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``JARVIS STATS`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField('``Node``' , `[${process.version} ]` , true)
                  .addField('``My Prefix``' , `/` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | TheRareRanger')
    })
}
});

client.on('message', message => {

  if (message.author.bot) return;
 if (!message.channel.guild) return;
 if (message.content.startsWith(prefix + 'members')) {
 if(message.author.id !== "480540559233122324") return message.reply('**:x: SORRY MATE THIS COMMANDS ONLY FOR BOT OWNER :x:**');
     if (!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)

     .setDescription(`**:battery: MEMBER STATS**
 
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

     message.channel.send()

     message.channel.sendEmbed(embed)
 }
});


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

      message.channel.send("**:link: Invite Linke Sent In DM Successfully**")
    }
  });



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

 client.on('message', message => {
if(message.content.startsWith(prefix +'news')) {
if(!message.channel.guild) return message.channel.send('**This Command Only For Servers **').then(m => m.delete(5000));
      const A8tra7Room = message.guild.channels.find(x => x.name === "announcements✍")
      if(!message.channel.guild) return message.reply(`This Command Only For Servers :x:`);
   let a8tra7 = message.content.split(' ').slice(1).join(' ')
   var m8tr7 = message.author.id
if(!message.guild.channels.find(x => x.name === "announcements✍")) return message.channel.send('i cant find `announcements✍` room!')
   var ThxForSug = new Discord.RichEmbed()
      .setColor('WHITE')
   .setTitle(`:white_check_mark: Success!`)
   .setTimestamp()
   .setDescription(`Thanks For Your Announcements✍ ! :sparkles: `)
.setDescription(`**Announcements✍** : ${a8tra7}`)
   var Sure = new Discord.RichEmbed()
   .setTimestamp()
      .setColor('WHITE')
   .setTitle(`Are you sure you send the proposal? You have a minute before canceling.`)               
.setDescription(`bot-status-logs : **${a8tra7}**`)
		 .setFooter('TDN - Announcements✍' , client.user.avatarURL)
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
   .setTitle(`Announcements :bell:`)
   .setDescription(`From : __<@${m8tr7}>__\n\nAnnouncements: **${a8tra7}**`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`)
   A8tra7Room.send(ala8tra7)
   message.channel.sendEmbed(ThxForSug).then(message => {message.delete(6000)})
msg.delete();

})
No.on("collect", r => {
message.channel.send('Announcements✍ canceled :white_check_mark:').then(message => {message.delete(6000)})
msg.delete();
})
})
}			     
});                        
  

client.on('message', message => {
    if (message.channel.id == "529659667421462548") {
        message.react("👍");
        message.react("👎");
        console.log("Questions For Stuff is Ready ☑");

    }
});


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
 .setColor('#9F81F7')
 .setDescription(EmbedRep)
 
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



//report
  client.on("message", message => {
    let args = message.content.split(" ").slice(1);
  if (message.content.startsWith('/report')) {
      message.author.send(`**🔰• Thank You For Making TDN™ The Best Place, (We Will Check Your Report As Soon Possible) •🔰**`)
        let user = message.mentions.users.first();
        let reason = args.slice(1).join(' ');
        let modlog = client.channels.find(x => x.name === 'report⚠');
        if (!reason) return message.reply('**:x: You Must Montion The Member To Be Reported and The Reason :x:**');
        if (message.mentions.users.size < 1) return message.reply('**You must Montion The Member To Be Reported**').catch(console.error);
         

    if (!modlog) return message.reply('**Report Room is Not available**');
    const embed = new Discord.RichEmbed()
      .setColor(0x8600AE)
      .setTimestamp()
      .addField('🔰• Message Type :', '⛔ Report ⛔')
      .addField('🔰• Member Reported :', `${user.username}#${user.discriminator} (${user.id}`)
      .addField('🔰• Report owner :', `${message.author.username}#${message.author.discriminator}`)
      .addField('🔰• Reason :', reason);
      message.delete()
      return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
      
  }
  });


//move
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

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" **How Can I Help You With ?** ");
    }
});


client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find(x => x.name === '☆welcome☆');
  let memberavatar = member.user.avatarURL
    if (!channel) return;
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('• 🔰|Name » ',`${member}`)
      .addField('• 🌹|Welcome User » ' , `💎・。・゜★・。・。☆・゜・。・゜。・。・゜★・💎 
Welcome ${member} To **The DamNation™ - Official  Server** , Please be sure to take a look at the rules in **#server-rules☑**  additional details can be found in **#announcements✍** . Our Support team is here and happy to help you if you have any questions regarding **TheDamNation™**, Enjoy Your stay.
💎・。・゜★・。・。☆・゜・。・゜。・。・゜★・💎`)
      .addField('• 🆔| User ID » ', "**[" + `${member.id}` + "]**" )
              .addField('➡| You Are Number » ', "**[" + `${member.guild.memberCount}` + "]**")                     
                                   .addField('• 🔮|Server Name » ', `${member.guild.name}`,true)
  .addField('• 🕣|Time Create » ', member.user.createdAt.toLocaleString(), true)

                                     
   .setFooter("|•♥•| The DamNation™ |•♥•|")
      .setTimestamp()
 
    channel.sendEmbed(embed);
});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**💎 Welcome ${member} To 🔰• ${member.guild.name} Server •🔰 - Please Read Our **#server-rules☑** Before Do Something Else And Respect The Other Members Within The Community ! . Enjoy ♥ [ And You Are Number : "${member.guild.memberCount}" ] 💎**`)
}).catch(console.error)
})


client.on('message', msg => {

  if (msg.content === 'hi') {

    msg.reply('**Hi How Are You :hearts: **');

  }

});


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


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find(x => x.name === "log")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
     

client.on("message", (message) => {
if (message.content.startsWith("/ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("⚠ | ** You Don`t Have Permission `MANAGE_CHANNELS`**");
        let args = message.content.split(" ").slice(1);
if(!args.join(" ")) return message.reply(`**${prefix}ct <Name Channel>**`).then(msg => msg.delete(5000)); // By : Zodo,
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage(`The Text Room Was Created \`${args.join(' ')}\``)

}
});


client.on("message", (message) => {
if (message.content.startsWith("/cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("⚠ | ** You Don`t Have Permission `MANAGE_CHANNELS`**");
        let args = message.content.split(" ").slice(1);
if(!args.join(" ")) return message.reply(`**${prefix}cv <Name Channel>**`).then(msg => msg.delete(5000)); // By : Zodo,
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage(`The Voice Room Was Created \`${args.join(' ')}\``)
    
}
});



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
   .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
   .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
   .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   message.channel.send({
     embed : kickembed
   })
 }
 });


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


client.on("message", (message) => {
    if (message.content.startsWith('/delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find(x => x.name === args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});


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


 client.on('ready', () => {
 	console.log('I am Ready !'); 
   });



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "say") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


  client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "480540559233122324") return message.reply('**❎ | You aren\'t The Bot Owner !**');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: Jarvis Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: Jarvis Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] Jarvis Has Restarted Successfully.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('process.env.BOT_TOKEN');
        },3000);
    }
});
  

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


    client.on('voiceStateUpdate', (old, now) => {
    const channel = client.channels.get('530640160166117386');
    const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
    const size = channel.name.match(/\[\s(\d+)\s\]/);
    if (!size) return channel.setName(`Voice Online : [${currentSize}]`);
    if (currentSize !== size) channel.setName(`Voice Online : [${currentSize}]`);
});



client.on('message', async message => {
  if(message.content.startsWith(prefix + "wr")) {
  if(message.author.id !== "529659996129198089") return message.reply('** :x: You Aren\'t The Bot Owner ! :x:**');
  await  message.channel.send(`** :x: Now Write Something To Send :x:**`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content
              message.channel.send(`**:white_check_mark: Message Has Been Sent !**`)
                client.channels.get("541627590637518853").send(`**${message.author.username} Said => ${text}**`)

              })
            }
          })

client.on('ready', () => {
    client.user.setStatus("dnd");
 
 });

client.login(process.env.BOT_TOKEN);
