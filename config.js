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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_16_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgyLFxuICAgICAgICA5OCxcbiAgICAgICAgODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBuMnk5TjhybTF3MU80dFdnbGtwTzNVOWJGeGFGaW9iKzdTcTF5RlErZXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpxZjVUTHNaU2R1MndpejdFU25Ya0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWRmYWQxNGYtNWIwMS00YmU4LThmMWUtMGE0OTEwN2FjYTFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDI5LFxuICAgICAgMjYsXG4gICAgICAxMjksXG4gICAgICAxNTIsXG4gICAgICAxNTQsXG4gICAgICA0NCxcbiAgICAgIDEwMCxcbiAgICAgIDkzLFxuICAgICAgMTkwLFxuICAgICAgMTgyLFxuICAgICAgMjEzLFxuICAgICAgMjMsXG4gICAgICAyMDUsXG4gICAgICA5MyxcbiAgICAgIDQ3LFxuICAgICAgOTUsXG4gICAgICA2NCxcbiAgICAgIDEwMCxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICAxMDcsXG4gICAgICAyMzcsXG4gICAgICAyNDksXG4gICAgICAxNzQsXG4gICAgICAyOSxcbiAgICAgIDIxMyxcbiAgICAgIDI0OSxcbiAgICAgIDcyLFxuICAgICAgMjQ4LFxuICAgICAgMjI4LFxuICAgICAgMjU0LFxuICAgICAgMTI2LFxuICAgICAgMTU3LFxuICAgICAgMjAsXG4gICAgICAxNTcsXG4gICAgICAxNjAsXG4gICAgICA1OCxcbiAgICAgIDIsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVlKOFpBVkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA1NDIzMDAyMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODQxNTU2MzE1NTg2NzM6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKMk8zczRGRUp5NXZiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVubkRNdG5nakRhdWpid2xwWHB2VHNGdmxhdXJrSlFmekg3L0RiK041VEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnB1UW1WU1cwWlRjZ1pJWTJrWEJVYTJpZ0RHWWpXRUIzaTNheTRPbHorRlYzSUhLMGZ0NmV6ZEo4RGc5SWtUM1pZc253alZlb3RyeE9yV2tNWTlDQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiODhCWkxZRVNybkNFRDYzQjcrWDRVcVMxa2dOOWRra1N2dllBQkVBY1R5NmF6Mm8vOWIyZDVQWjZMU3pVZkNiT3E5YjhtZHJKNG9ra2k4UXZVMjhvQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDU0MjMwMDIxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY3MTM5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY3Y1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjdjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaW9CUjlwMzF2MC9KMHpFSkJLZ01GR0dXTXM0VUlZL0RpQ1drUHJqQ3hQdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA3Mjk3MDUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNjY3OTI5MjYxXCJ9Igp9"  // PUT your SESSION_ID 


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
