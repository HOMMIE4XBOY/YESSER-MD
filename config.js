const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "yesseryassin678@gmail.com";
global.location = "dar es salaam.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Yassin994/YESSER-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakA1mu35fM18opH1s30";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakA1mu35fM18opH1s30";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/JgAR7WJ.jpg";
global.devs = "255621995482";
global.sudo = process.env.SUDO || "ANONIMUS";
global.owner = process.env.OWNER_NUMBER || "50936874939";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://zax-md-beae6ed77007.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUEwV0JsOERxSlhNUVBwK1dCZXdFNmZjQU5EaEtWSEdTSTNPMXBKMi8wYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1N3Q2szOWNGcE9RQWRoWFNsL0JrSlUvVUdpL2pOSCsvc0tOWFNWY0dFYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RU4vU1ltSmtYUnRjL3IxMjdYM3V0Mk5sYSswemptOUVQT2FTb3RwQ2w4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1bUQ1L1U4ODM5WUdTNTZBY1ZDTTZIQUZ3OXhiR0VxQ3Z0NmVOc2hxK1VzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBT2F3T3RRTVVTOTdJeVd2bUJIODhRWUJQSGtEcGVCM3Q1dFFVWXdyRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii80Y3pKSmdGeVBEeGlkVW5qaUNHdjZaNmp1T1pVVUFIbngwK0ZjWGtPeXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0Z3Q2dKdUR2THI3U3ZoUlc1azdnemg2dzIxd2l2R2lyc1NlZVFuZ0hWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialdETlkyb0gxZFQ2TUpIZVo0QUlZd2t6VDV4ZWFhVE8xWnFoUFlJTTZWST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDWjcwMXNhZ3lWNEppWnVuWE1BT25mNVF1UldjdGtYTzQrZCtabGVpVWg5MGF2OGg0NUtkYTJOSkRsanIvRmdoeHRGMXRZT0ppWHR1ZWw3UCtWOWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6IkZ4NVhwTS9ZblZId2dTMEI3aEwvWXFEbnVIdjduaTJuYWxhMUE4emhEM0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik04MHNMbjZiUklhUnEyMXRTQm53aFEiLCJwaG9uZUlkIjoiMmZlODZhNDUtNzU4OS00ZjU2LTlhYzYtNzUxYjAxNWExZTUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU2blFjWjVWNXJZTU9iWFpLR2QwNUFDQ3A1TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiSlNNYjBJUGQ0d0JJOS94OUNRc3BDUzg2Q3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNE5WNzRQVFoiLCJtZSI6eyJpZCI6IjUwOTM2ODc0OTM5OjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ056Q2hTQVFuN2FrdXdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJ0dlRMNDZCSUhCdk5FTUJGdFdFeXJ5TW1wS0l4aXE1amU3dEVpazBpaTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkxhR0RMdjVFSFFIdk5EUm9rZmdkNENKeXIwa3lyc0RYbVBEdlFwckZ6bnZZd21HK1FobTg4b002UzY0RGxDSGVOWXhYZitUQ1M5eU9EYjJ2emdKeUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBc0NuMjVZM01ueUpSbG9JVExNU1NLMmxlaUhrYmFQbkYyUEoyemg5THBWRmhxYmhHZ2NNN29jUDVRbC9QZGMwRkR5bWxQWm5hS0V5eVp4eFhNKzFoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTM2ODc0OTM5OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWJiMHkrT2dTQndielJEQVJiVmhNcThqSnFTaU1ZcXVZM3U3UklwTklvdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDk0MTQ4Nn0=
  process.env.SESSION_ID ||
  "";

module.exports = {
  menu: process.env.MENU || "menu1",
  HANDLERS: process.env.PREFIX || "'",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©yessermd",
  author: process.env.PACK_AUTHER || "yesser-ᴍᴅ",
  packname: process.env.PACK_NAME || "yesser-bot",
  botname: process.env.BOT_NAME || "ANONIMUS ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ANONIMUS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "yesser").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
