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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923054230021";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_30_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDYwLFxuICAgICAgICA5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICA5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwici9oMmJidWI0TnR5SC8zUGFZemcwNWhpazhaVjZGdlNTQ0VnZ0l6VVY1ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNTQyMzAwMjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZBMUI0NzgzOTlDNDZCN0RBMUMzOEJGRjIwRTQzQjEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDYzNjIyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMWHZiMncwWVN4eVlNdzR2MmtGQ1R3XCIsXG4gIFwicGhvbmVJZFwiOiBcImY3M2U1NGQ0LWFlOTMtNDhhZS04YzA1LTAxMzM0NTMxYmI2OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxOTUsXG4gICAgICAxNzQsXG4gICAgICAyMCxcbiAgICAgIDI1MixcbiAgICAgIDEzNSxcbiAgICAgIDEzMyxcbiAgICAgIDI0NSxcbiAgICAgIDI0NSxcbiAgICAgIDg0LFxuICAgICAgMjE4LFxuICAgICAgMjU0LFxuICAgICAgNzgsXG4gICAgICA5OSxcbiAgICAgIDE0NixcbiAgICAgIDI1LFxuICAgICAgMjIzLFxuICAgICAgMTU0LFxuICAgICAgMTQ0LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTAyLFxuICAgICAgODIsXG4gICAgICAyNTIsXG4gICAgICAyMjQsXG4gICAgICAyMTUsXG4gICAgICA5MCxcbiAgICAgIDM0LFxuICAgICAgNjIsXG4gICAgICA4NyxcbiAgICAgIDE3OSxcbiAgICAgIDIsXG4gICAgICAwLFxuICAgICAgMjM3LFxuICAgICAgMjMsXG4gICAgICAxMjYsXG4gICAgICAxMzQsXG4gICAgICAxOTEsXG4gICAgICA3MCxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0Sk5LTjVRQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDU0MjMwMDIxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NDE1NTYzMTU1ODY3MzoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlVzbWFuXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnlPM3M0RkVMS211N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1bm5ETXRuZ2pEYXVqYndscFhwdlRzRnZsYXVya0pRZnpINy9EYitONVRBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImExcklGRjY4cEliWlZra2YvVHRidEtxMDNPZ2M5RzN1OG9mOWdIMXJWTlFjRXVtRnJPemlEZElmWFJEWjdkZUZIY25JS2t4dFRNa2JqdEdUQWVYbUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpjOWJVYWJkTUtJdC81THlObkxSZ0hkRU5zLzVIRXdDMG03Q1JRNE5WVktwUk9sMlJGZmltbXUzTUNjVWljajdPT0JOQkVHYUhNM1BweWVEWHhGTUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA1NDIzMDAyMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MzYyMTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGN2JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUY3Yi5qc29uIjogIntcImtleURhdGFcIjpcIjZFanU2TW1TZXkzTHlWNzUzWTV2cDNsSmJOOTJMdXJxV2wwVEovcWx5RHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwNzI5NzA1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjM2MjIxOTYyXCJ9Igp9"  // PUT your SESSION_ID 


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

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
