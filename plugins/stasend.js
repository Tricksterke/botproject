const {Function} = require("../lib/");
Function({pattern: '# ?(.*)', fromMe: true, desc: 'status saver', type: 'misc'}, async (m, text, client) => {
if(!m.quoted) return await m.reply("_reply to a status_",{quoted: message.data});
return await client.forwardMessage(m.client.user.jid,m.quoted.data)});
