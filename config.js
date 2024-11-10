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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05WamFjR0hURTQzNUlnVkszZUU5N0QrWWJxU0VxRFpIUGRyeHJoeElFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjIxb3R4aXo4MDkxb3RETlpYcE9LbTM0RmFMeGZTeTNKRUN2eDJqTE1Cdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQWkzY1piMURQRkdsQThLL0xpUUpxMlJqN3Q3S3gySUZhblppM2tMWEh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlN3V2Qzc2YUhmOVRuaVFxQmR1RXVHSzVUMG40cWs0RDE3eGQrVTY2Qlc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLSlJEdmpwc04wbUxlVjhqTkxqUEVoa3M4WlltVU1OVW1aU3BwOFV6MnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx4d0pXbXNaSEkyRmw3SlpvVG5YT3RnWWx6MmJER3VBNEF4MWt1eEJuUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0k2clV2SDgrc2ZuaSs0ODE2WmpEclJZNFFEVjBYZ2pnM25RUVUvMHEyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhTVDduZUl3UVEvUEFyeDR3bUprcXRHSnlDSTFMNTdaV2d1dkdKTy9rVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpETEJoRDRvcUx3bUZZOUloQ1VBZ1hIRnFyeGhQcTdIeWJwbnFhSkl1dSswK0cxeFN2bWxqK21RcVRvNmxlS0tGUnQ1N0xZUE5FU2RjcVhzNUVBQURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJsY2lodXA4YVJrUHN0bEJKREJUNEsvRVFaTzNBdXZYRUdKSTJOWTBmTk5nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyRWFncmtGUVE5aW5CUkZ1RFA1TWp3IiwicGhvbmVJZCI6ImYzMjZjN2M3LTk3MmUtNDM4OS1hOTVjLWMwOTY5MTI1Y2YyZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNTBWWURlQXp6UUZmS2FqNzhCNDUrWklEVXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFFIMjFtaGs3aXIvcXN4emJhOTZVRCt2YW44PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5IU0hEV1NOIiwibWUiOnsiaWQiOiIyMzM1NTgyMDEyMTA6NzBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tiZXVPc0NFT3pMd3JrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRMcXlkV0JFejlIVXRMOHZINk4rTWMyeUR2WHBpVS9kVzVITWZvdkhSREE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdEV2ZMQkJDTzNxcW9YYzFYc0QyS3JCK1JvTllHYmRqcjlRVGR5TG84a0VMcW9wdGdmSXNzR2F5bnpRdDlXVWliWWlnQ2tsMXk2elBIb201OUlCcURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxUUFCN2JOdC9wcUhzNnBaV3dhVXVvZDV3VXhlUFZPUmJsL1FxU3FuYjF4eGo0Qk9FRlo5OHlvQStMTFZOQkt0UE9xTTVITUpnTmdMYkdNM1A3T1BCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU1ODIwMTIxMDo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJReTZzblZnUk0vUjFMUy9MeCtqZmpITnNnNzE2WWxQM1Z1UnpINkx4MFF3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMjQxNDY1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVTcyJ9" // session id here
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
