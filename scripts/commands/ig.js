/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🐰🍒শী্ঁত্ঁ শী্ঁত্ঁ ভা্ঁব্ঁ কি্ঁসে্ঁর্ঁ জা্ঁনি্ঁ এ্ঁক্ঁটা্ঁ অ্ঁভা্ঁব্ঁ_🙊🙈\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷) ",
" === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===\n  --❖-- 𝐈𝐭'𝐬 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n--ღღ🦋🖤✨-\n\n--𝐋𝐨𝐯𝐞 𝐢'𝐬 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 __☺️🦋✨\n\n--𝐥𝐟 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞𝐝 𝐨𝐧𝐞 𝐢𝐬 𝐫𝐢𝐠𝐡𝐭..!🦋🍁💫\n\n-ভালোবাসা সুন্দর ___,🖤🦋\n\n- যদি প্রিয় মানুষটি সঠিক হয়....!☺️🖤🙂✨🌼\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷) ",
"___=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n❥◎⃝! শূন্যতায় ভাসি🙃 \n\n❥কখনো হাসি -😁💚_আবার কাঁদি!-😅\n\n❥বেলা শেষে 🌌শূন্যতায় জড়িয়ে ও পূর্ণতা খুঁজি😊❤\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱 (✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--𝐈𝐭'𝐬 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n ❥»̶̶͓͓͓̽̽̽⑅⃝✺❥᭄❥\n\n___💚__পৃথিবীটা আজ...\n\nমিথ্যে মায়াতে ভরা...!💚🌺\n\n____🥀_তাই তো পৃথীবীর মানুষ আজ....!\n\nঅভিনয়ের সেরা...👎🥀\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n💜🔐🌈 ___\n\n- 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲-!! 😽🧡✨\n\n🍁_সবাই তো খুশি চায়_আর আমি প্রতিটা খুশিতে তোমাকে চাই⚜️— -!!-) 😊🖤\n\n___💜🔐🌈\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n>🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\n\n___চোখের দেখায় নয়,মনের দেখায় ভালবাসি!!😇✨\n\n- কাছে থাকো কিংবা দূরে,তোমাকে ভেবেই হাসি!!🖤🐰\n\n💖🦋\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:༅༎💙🦋\n༆𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_⚠︎🙅🏻‍♂️✨\n\n😽︵۵মানুষ! হচ্ছে!বৃষ্টির!মতো!Life a ! অনেক মানুষ !আসবে!অনেক মানুষ !যাবে!💔🥰\n\n:༅༎💙🦋 সঠিক!মানুষটা!ঠিকই!ছায়া!হয়ে!পাশে!থাকবে -/ ఌ︵💚🌻\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:(-𝙄 𝙖𝙢 𝘼𝙙𝙙𝙞𝙘𝙩𝙚𝙙 𝙏𝙤👀🙈\n\n_')𝙈𝙮 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙋𝙚𝙧𝙨𝙤𝙣..!\n\n🐰🦋 -(^আমি আমার প্রিয় মানুষটার প্রতি আসক্ত >!💖🔐🍭)😇\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷)",

"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-!!🦋🐭\n\n🐰' —'পারফেক্ট' কাউকে পাবার থেকে'কাউকে' পারফেক্ট' বানিয়ে নিতে পারাটা' বড় অর্জন'--)🌼💜\n\n___🍒🖇️✨___\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷)",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐈𝐭'𝐬 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n°🐹💙🍒\n\n_𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n°\n\n__!!☁️✨🌺আপনাকে পাওয়ার দাবি!আমি মৃত্যুর পরও ছাড়বো না,,🔐💚 🙂\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷)",

"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖-- 𝐑𝐚𝐡𝐚𝐝(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n__𝗥𝗶𝗴𝗵𝘁 𝗽𝗲𝗼𝗽𝗹𝗲 𝗮𝗿𝗲 𝗮𝗹𝘄𝗮𝘆𝗲𝘀 𝗮𝗻𝗴𝗿𝘆 𝗯𝗲𝗰𝗮𝘂𝘀𝗲 𝘁𝗵𝗲𝘆 𝗰𝗮𝗻'𝘁 𝘀𝘁𝗮𝗻𝗱 𝘆𝗼𝘂 𝘄𝗶𝘁𝗵 𝗼𝘁𝗵𝗲𝗿𝘀🌸✨\n\n___সঠিক মানুষ সব সময়ই রাগি হয়'\n\nকারণ তারা অন্যের সাথে তোমাকে সহ্য করতে পারবে নাহ্!😌🫶🖤\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱(✷‿✷)"
 ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/GdW6OYn.jpg",
"https://i.imgur.com/UsAYKD5.jpg",
"https://i.imgur.com/G6DysxM.jpg",
"https://i.imgur.com/637pUB5.jpg",
"https://i.imgur.com/Kbl9SW9.jpg",
"https://i.imgur.com/4Iqydzj.jpg",
"https://i.imgur.com/LoNuWSK.jpg",
"https://i.imgur.com/bGdqOJq.jpg",
"https://i.imgur.com/wxUshib.jpg",
"https://i.imgur.com/jCNFEka.jpg",
"https://i.imgur.com/SaeL75Q.jpg",
"https://i.imgur.com/cwTHcXI.jpg",
"https://i.imgur.com/8kXEK7t.jpg",
"https://i.imgur.com/0FPDgzP.jpg",
"https://i.imgur.com/af3GpqK.jpg",
"https://i.imgur.com/717yLGr.jpg",
"https://i.imgur.com/mce4XfF.jpg",
"https://i.imgur.com/2YYFjUA.jpg",
"https://i.imgur.com/NDQgQLa.jpg",
"https://i.imgur.com/nxHA5Om.jpg",
"https://i.imgur.com/7wwdqUg.jpg",
"https://i.imgur.com/7E926sj.jpg",
"https://i.imgur.com/3g2HDAF.jpg",
"https://i.imgur.com/ZiRbOxp.jpg",
"https://i.imgur.com/4MoMIpu.jpg",
"https://i.imgur.com/2ketnbi.jpg",
"https://i.imgur.com/BdL1ubr.jpg",
"https://i.imgur.com/RSMtQFs.jpg"
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
