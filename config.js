const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94761167172" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94761167172";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_04_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA5NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA3LFxuICAgICAgICAyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgODksXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI0LFxuICAgICAgICA3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidlpFOGI2bkRIbXRSVll3UnVFbnRNNmI4WG16bkZFaU5FN1VzcnVEbHFoZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibS05NWJzaEhSWHFzOXBaMmY5X2U1QVwiLFxuICBcInBob25lSWRcIjogXCIzYmE2YTA2MC1lNmMyLTQ4NjUtYmYwNy03ZWJjYjk2MDk5ZWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMTQ4LFxuICAgICAgMCxcbiAgICAgIDI0MCxcbiAgICAgIDE0LFxuICAgICAgOCxcbiAgICAgIDIyNyxcbiAgICAgIDE4MSxcbiAgICAgIDE4MCxcbiAgICAgIDk2LFxuICAgICAgMjM4LFxuICAgICAgMjI0LFxuICAgICAgMTIyLFxuICAgICAgMjIxLFxuICAgICAgMTQ1LFxuICAgICAgMTM4LFxuICAgICAgMTU0LFxuICAgICAgMTA4LFxuICAgICAgMTIwLFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgNjMsXG4gICAgICAyMzcsXG4gICAgICAyMzQsXG4gICAgICA1MixcbiAgICAgIDIyNSxcbiAgICAgIDE5NyxcbiAgICAgIDI1MyxcbiAgICAgIDcyLFxuICAgICAgMTM4LFxuICAgICAgNTYsXG4gICAgICAxODgsXG4gICAgICAxOTQsXG4gICAgICA4MSxcbiAgICAgIDEzLFxuICAgICAgMTIsXG4gICAgICAyMTAsXG4gICAgICAzLFxuICAgICAgMjExLFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZKR0RKVzZFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MTE2NzE3Mjo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIi5cXG5cXG5cXG7wnZemXFxuXFxuXFxu8J2Xm1xcblxcblxcbvCdl5RcXG5cXG5cXG7wnZefXFxuXFxuXFxu8J2XnCBcXG5cXG5cXG5cXG7wnZecIPCdl67wnZe6IPCdl6bwnZeb8J2XlPCdl5/wnZecXCIsXG4gICAgXCJsaWRcIjogXCIxODY3NjcxMzk0MjYzOTQ6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0NwaE9NR0VMSER1N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBcS9NQmFVOFhCV1NCS3hvUUNnK2YxVkZnYW1EYUdLcFJxOXdjOTZPQ2hRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZHR0h2M1NndDhSTFJJT0UzZHRJbGI2MUZzaDJXNHp6Z2g0TmcwUUdyQjZCajFLaXFFUG1Fc081RVhPOHVhcEVDTmVxMEhhUFMxdGNOMmZYbjBiR0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRQRjdVamd0a3JhZHkreDNSRTRuRVVDcFlvZHMrdGRmenYzbFRYY3R4UzJab2RuNS91N1hPUHA1WHpROGF3R1ByRDF0SnVxY29EcXZFdk45Q1RkQURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYxMTY3MTcyOjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzM3MDc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjQ3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaS094aHQ2Z2xEUWdxNkRReXh4a2xYbkM3UWRXa0xuSm1LUy9iOVJ2dXRFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MTgzMDE1OTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3MzY4NzQ0ODFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "shali",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "shali",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "shali",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "shali",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public ",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
