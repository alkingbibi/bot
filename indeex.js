const TelegramBot = require('node-telegram-bot-api');
const token = '8395419099:AAE3eGdaSyhmH7h2DyMG28JZLr_jY0gEL9g'; // التوكن الصحيح
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'مرحباً! أنا بوتك الجديد 🎉');
});

console.log('البوت يعمل...');