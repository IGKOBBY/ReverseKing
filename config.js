//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/ReverseKing";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/QXbR0M0/IMG-2996.jpg";
global.devs = "233257514504";
global.sudo = process.env.SUDO || "233257514504";
global.owner = process.env.OWNER_NUMBER || "233558201210";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/p3Mb4qL.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "233257514504";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZoYmQ2YlB0dUZpMkp6UGVaSWt2SVZEcUJPMzREU0hwanlCdmp1WmZWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielRUM1hBSk0rTktJdnB6anRZUU9Wa0NhYm0wUmdLNm45YU92QmsrY2NScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSFl1THJQbUF5ZGFLSUI4ODk3czIrYmJKbUJLVE81VkNJKzhNTWJMbVVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6elBZUStiUk5qMkI0UENnWm9pTDdhVTBGamh2SHNvQlk5UnRwR2N3blJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFCT01TUjdtZ0I4Wjl4OCs4dzJUQ1NoV1UyWURONHdFMnljZkc2dHRBRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBUQ1BaaFZEQXRsY2lsYTcvalNsWlBQd2VVRjdNS1lXZ0c2MFZScTdxaVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUE4elJaNUlFbHNYb2lGa1dKSnBkOC96UW5KZ3J4R2dSRlJ2TGFScjRIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEZpVForZGRYYTYvcjhuM2pzSG1BMkRHNW40STc5N2hjaGFKU2JPMERYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY0N2ZEamREbzlLVU5FMVlYdTg0aWFVNUpoZ2xLQ1FqZEZnTVIrMkttb2pEc3FUcTBBYk9wWXZxUUNjS0ozdUFibm56dFZ4OXNYNi91a2FsUXQ5WmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJnVFBWSkt3ZVVXZVpIRDNCaERvQ2VRVENQQ1VPOStqVWovWXc3VksvVzVNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMzU1ODIwMTIxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NTM0NkVEMDVGRTM2NzMxNDJGMzc4RTJFOEZGM0QzMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwOTEwODgyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFdk03SWZrcFRjbTNDb00tcWkzajBnIiwicGhvbmVJZCI6ImMzZGQ2NjA1LWM4MzQtNDMwMS05ZTQ1LTNmYzYxMGU0MTU1MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXN0RjL0RvT2FtRDcxeTdDc0UwVUk3bjRYKzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUV0WTF2SktrY3pZbllrMW5rUjNDaFhhRUEwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhFNk5ONlkxIiwibWUiOnsiaWQiOiIyMzM1NTgyMDEyMTA6NjdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tQZXVPc0NFSkMxcnJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRMcXlkV0JFejlIVXRMOHZINk4rTWMyeUR2WHBpVS9kVzVITWZvdkhSREE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkI0SWtZeDJnMVZVRHNsdWxTTCt0cXo1TTJVNTJ6bTFsdk9uTlFNdmVCQ3p0Qi9DdWZiaTlTbUhNUjU3dFhXYVk0QmlKZm1qbjhiQTNmSHh2Q0JSMEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIVlUrSjBVdTBhbVJVMjhwQllXSkFGdFgzR2hwK05Wa0xUSVp6MzVoUDBXOU1oTTNGZWtQckovOFVmVjdrMjBLTnBUa2d2SFhXelovZ1FyQVI3WGFqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU1ODIwMTIxMDo2N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJReTZzblZnUk0vUjFMUy9MeCtqZmpITnNnNzE2WWxQM1Z1UnpINkx4MFF3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwOTEwODc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVTbyJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSEKING",
  packname: process.env.PACK_NAME || "REVERSEKING",
  botname: process.env.BOT_NAME || "ReverseKing",
  ownername: process.env.OWNER_NAME || "REVERSEKING",
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
  LANG: (process.env.THEME || "R E V E R S E K I N G").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
