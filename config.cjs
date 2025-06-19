// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9wckNnOFZSNFlXYzBsN1dXelpob1owVnhERzIwR0VMdnlTWkpRbHMwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUdGTTZjaDlzdWs4MGZTWUZ6YlE2aU5lMGNyVHRQa1NjTmI2ZXZWOC9EUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQjd5VGNFOWhlNGlmNE8wQW1BRjVLUG5mR01za2FLeWRhTjBDQ3BYOUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3MEtzSm8wcXpHRDhIeTZBZktYVVg5amVQTFVUM2gzK2t1b05OWDAzcUFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVJLzBtcUtGV0hnOW52TkFvdk05Q1dhQ0VraUNwOVR5MXVGVmF5azcxSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGS0twZk1aSE9aNWREOVRla2RZR2hGcXFpS2VxR2lqS3pYT0F0SzBBWGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUo0ZTU5UnZYMUZha3JHZUZybkluaUVEMi80YzF5TnROYk44ZnQvdXpVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnF3Z2tNVjJYL2RHSnVtRldCR2hwczlGZjQ4QkQxZm1XWThLUmFZaG9GZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZtcEc3OHJhbGtMOFBWcGcrUUdGK1hVbEFrWjg3TmxyOTdES29IUGJyc3pLZlNKUGJ3cWpvTTRIVVVSblpuN0J1Mmc1NktlWWhPcDRuZS9YTjByRUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ4LCJhZHZTZWNyZXRLZXkiOiJqWWdad3U3K1lrb1RDN1lZeHFwTEFJOVE0VU9WbE13Y05EZnMwYWpBQ05vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5MTMyNzI3NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0OThCMzk4NTE5RUVDQTJGNTZDODhCODJDMDIzRjY2MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwMjk2NzY5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTUkpoYmJKUVFEZTJOV09TeUZCOFp3IiwicGhvbmVJZCI6ImE4OTYxMTc3LTcwNzAtNDVjNC05MTJkLTJlNjM3YWMzM2M0OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzcEozZUtlVlZPeTZFTWlvK05kNGF5dkpMQzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGNIVUZyYWQwS0xScXh4THd6WUtRemV0TkdZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNBUktBUk1EIiwibWUiOnsiaWQiOiI5MjMxOTEzMjcyNzU6MTJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNDMzNjYwOTIyMzA2Njg6MTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNObVFydFVERUxuUnpjSUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNK2duVk0rVHVJbTdtYXRxYWFIVUQxd2MxTHZ0VG1LdDMyOEVvUTNmc25RPSIsImFjY291bnRTaWduYXR1cmUiOiJ5aE1oRGRaYW9KUFZIVmVaelA4aVJuVG5COFVRUjBJMnZCMkRIa1ZJL2lpOVBDL3lkb3JrTkR4NWJDb0ZRaVJOREZiRUVTVitadCtYSzgzR3pubWlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK3o0eFg3Ym50MXB5OTgwNytVQnU0N3ltM3RUMlordlhNdjdvekd5VlN5b1NYNWxsNnlDVExINnR5ajRlL0NTdlJBQkhKUUxaTERTU2hoUFZyVjZpQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxOTEzMjcyNzU6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFBvSjFUUGs3aUp1NW1yYW1taDFBOWNITlM3N1U1aXJkOXZCS0VOMzdKMCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMjk2NzY0LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURFWiJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : true,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : true,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : true,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "𝐓𝐇𝐄 𝐋𝐄𝐆𝐄𝐍𝐃 𝐍𝐀𝐖𝐀𝐁",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923191327275",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
