const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
// kirimprib(hasillrndy
const kirimprib =async(text,id) => { await semar.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    // 2 OKTOBER 2022
    // FITUR HOST

case 'menucreate' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu2 =`  =====DAFTAR CREATE AKUN=====
        
==MENU CREATE CPANEL==
${prefix}createcp1 (Membuat Akun cPanel Mini)
${prefix}createcp2 (membuat Akun cPanel Medium)
${prefix}createcp3 (membuat Akun cPanel Extra)

==MENU CREATE WHM==
${prefix}createwhm1 (Membuat Akun Whm Mini)
${prefix}createwhm2 (membuat Akun Whm Medium)
${prefix}createwhm3 (membuat Akun Whm Extra)

==MENU CREATE MWHM==
${prefix}createmwhm1 (membuat Akun Mwhm Mini)
${prefix}createmwhm2 (membuat Akun Mwhm Medium)
${prefix}createmwhm3 (membuat Akun Mwhm Extra)

==MENU CREATE ADHOST==
${prefix}createadhost (membuat Akun Admin) (Khusus Owner)

==MENU CREATE CEO==
${prefix}createceo (membuat Akun Ceo) (Khusus Owner)

*CARA BUAT AKUN*
Ketik .createwhm1 username | password
contoh : .createwhm1 cristian | @@server@@

=======BOT HOSTING=======`
reply(menu2)

        }else{
            reply("ini group siapa bangsat!")
        }
        break

case 'menu' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu3=`ketik .menuhost untuk lihat fitur yang ada`
reply(menu3)

        }else{
            reply("ini group siapa bangsat!")
        }
        break

     case 'tamaganteng' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menuhost =`  ┏━━⊱ LIST MENU 
┏━━⊱ 「 Group Menu 」⬣
┣❏➥ あ ${prefix}grup
┣❏➥ あ ${prefix}promote
┣❏➥ あ ${prefix}demote
┣❏➥ あ ${prefix}add
┣❏➥ あ ${prefix}kick
┣❏➥ あ ${prefix}delete
┣❏➥ あ ${prefix}restart
┣❏➥ あ ${prefix}shutdown
┗━━⊱

┏━━⊱「 MENU HOST 」⬣
┣❏➥ あ ${prefix}cekdefault
┣❏➥ あ ${prefix}termintdefault
┣❏➥ あ ${prefix}termintakun 
┣❏➥ あ ${prefix}cekuser
┣❏➥ あ ${prefix}addpack
┣❏➥ あ ${prefix}ceksmtp
┗━━⊱
	
┏━━⊱「 MENU CREATE 」⬣
┣❏➥ あ ${prefix}listwebp
┣❏➥ あ ${prefix}webp 1/2/3/4/5/6/7/8/9
┣❏➥ あ ${prefix}createcp 1/2/3
┣❏➥ あ ${prefix}createwhm 1/2/3
┣❏➥ あ ${prefix}createmwhm 1/2/3
┣❏➥ あ ${prefix}createadhost (khusus Owner)
┣❏➥ あ ${prefix}createceo (Khusus Owner)
┗━━⊱

┏━━⊱「 MENU DEVELOPER/OWNER 」⬣
┣❏➥ あ ${prefix}infobot
┣❏➥ あ ${prefix}update
┣❏➥ あ ${prefix}listgrup
┣❏➥ あ ${prefix}cekidgrup
┗━━⊱
©𝘼𝙄𝙍𝘼`
reply(tamaganteng)

        }else{
            reply("ini gruop siapa bangsat")
        }
        break
      
        case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `SILAHKAN DI SIMAK
jika ingin update url server ketik *${prefix}${command}* url | xnxx.com
             
jika ingin update username server ketik *${prefix}${command}* username | rndytech
             
jika ingin update password server ketik *${prefix}${command}* password | @@##rndytech##@@
             
jika ingin update ipaddress server ketik *${prefix}${command}* ip | 1.1.1.1
             
jika ingin tambah grup ketik *${prefix}${command}* grup | 120363024065162195@g.us
            `
            reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
            
            `
            reply(info)
                }
                
            }
            
            break
            
            case 'infobot' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            id = msg.key.remoteJid
        
            info = `INFO SETINGAN BOT HOST
            
-- DETAIL AKUN ROOT--
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
            
            `
            reply(info);
            
            break
            
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST GRUP VIP :\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            
            
            break    
            case 'cekidgrup':
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
          

    await semar.sendMessage(pengirim,{text: `HALO ${nama} \n\n ${id} \n\n`},{quoted:msg})

            break 
            
// CASE CREATE CPANEL //
case 'createcp1' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        domain = parse[0]
        user = parse[1]
        pass = "@@server" +makeid(5) + "@@"
        pkg = "cPanel Mini"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createcp1 domain | username | password")
    // console.log(parse)
}
        break
case 'createcp2' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        domain = parse[0]
        user = parse[1]
        pass = parse[3]
        pkg = "cPanel Medium"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createcp2 domain | username | password")
    // console.log(parse)
}
        break
case 'createcp3' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = "@@server" + makeid(5) + "@@"
        domain = parse[1]
        pkg = "cPanel Extra"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createcp3 username | domain")
    
    // console.log(parse)
}
        break

// CASE CREATE WHM //

case 'createwhm1' :
     reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Whm Mini"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createwhm1 username | password")
    // console.log(parse)
}
        break
case 'createwhm2' :
     reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Whm Medium"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createwhm2 username | password")
    // console.log(parse)
}
        break
case 'createwhm3' :
     reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Whm Extra"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createwhm3 username | password")
    
    // console.log(parse)
}
        break

// CASE CREATE MWHM //
case 'createmwhm1' :
     reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Mwhm Mini"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createmwhm1 username | password")
    // console.log(parse)
}
        break
case 'createmwhm2' :
     reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Mwhm Medium"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createmwhm2 username | password")
    // console.log(parse)
}
        break
case 'createmwhm3' :
     reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Mwhm Extra"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createmwhm3 username | password")
    
    // console.log(parse)
}
        break

// CASE CREATE ADHOST //
case 'createadhost' :
    reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Admin"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createwhm1 username | password")
    // console.log(parse)
}
        break

// CASE CREATE CEO //
case 'createceo' :
    reply("sedang membuat...")
    if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = "Ceo"
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".fv"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    }else{
    reply("ketik .createceo username | password")
    // console.log(parse)
}
        break

// CEK SMTP SERVER //
case 'ceksmtp' :
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
    var inputt = {
        
        server: host,
        uroot: uroot,
              proot: proot,
          }
          
          request.post({
              url: 'https://yogax.my.id/smtp.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
 
        break

case 'cekdefault' :
 
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
 var inputt = {
     
              server: host,
              uroot: uroot,
              proot: proot,
            }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/cekdefault.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
        break
        case 'termintdefault' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/termintdefault.php',
              form: inputt
            }, function(error, response, body){
                reply(body)
            })
            
            break
        case 'cekuser' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/cekuser.php',
              form: inputt
            }, function(error, response, body){
                reply(body)
            })
            
            break
        case 'termintakun' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/termint.php',
              form: inputt
            }, function(error, response, body){
                reply(body)
            })
            
            break
            case 'addpack' :
                if(args != ""){
                parse = dn.split(" | ")
                    user = parse[0]
                    pkg = parse[1]
 host = server[0].url
 uroot = server[0].username
 proot = server[0].password
 var inputt = {

     server: host,
              uroot: uroot,
              proot: proot,
              user: user,
              pkg: pkg,
          }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/addpack.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
}else{
    reply("ketik .addpack username | package")
}
        break
//CASE HOST


case 'listwebp' :
    listweb = `▬▭▬▭▬▭▬▭▬▭▬▭▬▭

┏━━⊱ LIST WEB P
┣❏➥ webp1: RUSAK/ERORR
┣❏➥ webp2: Mediafire FILE
┣❏➥ webp3: Simontok
┣❏➥ webp4: Mobile Legends 
┣❏➥ webp5: Groupwa V1 
┣❏➥ webp6: Codashop
┣❏➥ webp7: Pubg Mobie
┣❏➥ webp8: Stumble
┣❏➥ webp9: Free Firee Spin
┗━━⊱
BOT BY:AIRA
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
Ketik: webp2
Untuk web Mediafire FILE
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
©Aira`
reply(listweb)
break
                  case 'webp1' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire" + makeid(7) + "." + "terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sedang Membuat !!! Harap Tunggu Ya  kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apii.mnz.biz.id/mediafire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire",
                    path: pathh,
                }

                request.post({
                    url: 'https://apii.mnz.biz.id/mediafire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    hasillrndy = `*『⫹⫺INFO WEB P ⫹⫺』*
┏━━━━ INFORMATION ━━━━━\n┣ *Web* : ${pendek}\n┣ Web Setting : ${domain}/vhsfhqpdhdsih6/host.php\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n┗━━━━━━━━━━━━━━━━━━━`


                    reply(`Hallo Kontol ! ${namamu} Web Nya dah gw krm ye kontol`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break

case 'webp2' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire" + makeid(7) + "." + "terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apii.mnz.biz.id/mediafire2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire",
                    path: pathh,
                }

                request.post({
                    url: 'https://apii.mnz.biz.id/mediafire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    hasillrndy = `*『⫹⫺INFO WEB P ⫹⫺』*
┏━━━━ INFORMATION ━━━━━\n┣ *Web* : ${pendek}\n┣ Web Setting : ${domain}/vhsfhqpdhdsih6/host.php\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n┗━━━━━━━━━━━━━━━━━━━`


                    reply(`Hallo Kontol ! ${namamu} Web Nya dah gw krm ye kontol`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break

case 'webp3' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "Simontok" + makeid(7) + "." + "terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apii.mnz.biz.id/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mediafire",
                    path: pathh,
                }

                request.post({
                    url: 'https://apii.mnz.biz.id/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    hasillrndy = `*『⫹⫺INFO WEB P ⫹⫺』*
┏━━━━ INFORMATION ━━━━━\n┣ *Web* : ${pendek}\n┣ Web Setting : ${domain}/vhsfhqpdhdsih6/host.php\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n┗━━━━━━━━━━━━━━━━━━━`


                    reply(`Hallo Kontol ! ${namamu} Web Nya dah gw krm ye kontol`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break

case 'webp4' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mlbb" + makeid(7) + "." + "terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apii.mnz.biz.id/mlbb/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apii.mnz.biz.id/mlbb/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    hasillrndy = `*『⫹⫺INFO WEB P ⫹⫺』*
┏━━━━ INFORMATION ━━━━━\n┣ *Web* : ${pendek}\n┣ Web Setting : ${domain}/vhsfhqpdhdsih6/host.php\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n┗━━━━━━━━━━━━━━━━━━━`


                    reply(`Hallo Kontol ! ${namamu} Web Nya dah gw krm ye kontol`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break

case 'webp5' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "groupwa1" + makeid(7) + "." + "terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apii.mnz.biz.id/groupwa/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "groupwa1",
                    path: pathh,
                }

                request.post({
                    url: 'https://apii.mnz.biz.id/groupwa/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    hasillrndy = `*『⫹⫺INFO WEB P ⫹⫺』*
┏━━━━ INFORMATION ━━━━━\n┣ *Web* : ${pendek}\n┣ Web Setting : ${domain}/vhsfhqpdhdsih6/host.php\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n┗━━━━━━━━━━━━━━━━━━━`


                    reply(`Hallo Kontol ! ${namamu} Web Nya dah gw krm ye kontol`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break

case 'webp6' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "groupwa2" + makeid(7) + "." + "terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apii.mnz.biz.id/codashop/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "groupwa2",
                    path: pathh,
                }

                request.post({
                    url: 'https://apii.mnz.biz.id/codashop/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    hasillrndy = `*『⫹⫺INFO WEB P ⫹⫺』*
┏━━━━ INFORMATION ━━━━━\n┣ *Web* : ${pendek}\n┣ Web Setting : ${domain}/vhsfhqpdhdsih6/host.php\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n┗━━━━━━━━━━━━━━━━━━━`


                    reply(`Hallo Kontol ! ${namamu} Web Nya dah gw krm ye kontol`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break

case 'webp7' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "codashop" + makeid(7) + "." + "terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apii.mnz.biz.id/pubg/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "codashop",
                    path: pathh,
                }

                request.post({
                    url: 'https://apii.mnz.biz.id//pubg/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    hasillrndy = `*『⫹⫺INFO WEB P ⫹⫺』*
┏━━━━ INFORMATION ━━━━━\n┣ *Web* : ${pendek}\n┣ Web Setting : ${domain}/vhsfhqpdhdsih6/host.php\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n┗━━━━━━━━━━━━━━━━━━━`


                    reply(`Hallo Kontol ! ${namamu} Web Nya dah gw krm ye kontol`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break

case 'webp8' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "youtube" + makeid(7) + "." + "terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apii.mnz.biz.id/stumblee/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "youtube",
                    path: pathh,
                }

                request.post({
                    url: 'https://apii.mnz.biz.id/stumblee/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    hasillrndy = `*『⫹⫺INFO WEB P ⫹⫺』*
┏━━━━ INFORMATION ━━━━━\n┣ *Web* : ${pendek}\n┣ Web Setting : ${domain}/vhsfhqpdhdsih6/host.php\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n┗━━━━━━━━━━━━━━━━━━━`


                    reply(`Hallo Kontol ! ${namamu} Web Nya dah gw krm ye kontol`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break

case 'webp9' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire" + makeid(7) + "." + "terbaru.my.id"


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("_Sedang Membuat !!! Harap Tunggu Ya kontoll sekitar 2 menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apii.mnz.biz.id/ff/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Mini")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Wait, Currently creating a domain on yo's server")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "freefire",
                    path: pathh,
                }

                request.post({
                    url: 'https://apii.mnz.biz.id/ff/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply("_*BERHASIL!*, Data Segera di Kirim Ke chat Pribadi, Jika Belum masuk silahkan buat kembali (jangan spam)_") // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply("_Berhasil ✓ Data Segera di kirim chat pribadi lu , makasih_")
                    }


                    hasillrndy = `*『⫹⫺INFO WEB P ⫹⫺』*
┏━━━━ INFORMATION ━━━━━\n┣ *Web* : ${pendek}\n┣ Web Setting : ${domain}/vhsfhqpdhdsih6/host.php\n┣ NOTE:\n *dilarang jual webp di bawah 10k atau akan saya benned*\n┗━━━━━━━━━━━━━━━━━━━`


                    reply(`Hallo Kontol ! ${namamu} Web Nya dah gw krm ye kontol`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("*『 MINIMAL NYEWA LAH YA !! CUMAN 35K  』*")
        }
break


   
            // 2 OKTOBER 2022








case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih grup open/close")
if (args[0] === 'open'){ await semar.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await semar.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart index`, (error, stdout, stderr) => {
    reply("BERHASIL RESTART ULANG")
    reply(stdout)
})
break

case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}