// const Telebot = require('telebot');

// const TOKEN = '1514743464:AAE9HyMUcCOqIIecwnX_IqPDtUb3notNQkk'

// bot = new Telebot(TOKEN);

TELEGRAM_BOT_TOKEN = '1514743464:AAE9HyMUcCOqIIecwnX_IqPDtUb3notNQkk'

const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);

// bot.on('text', (msg) => msg.reply.text(msg.text  + ' /n sdkfjsksssssssssssssssssssssssssss'));



bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));

bot.on(['/farid'], (msg) => msg.reply.text('FARID - Arabcha  \nYakka, yolg‘iz, yagona, tengsiz, bebaho, betakror, tanho yoki pardali bo‘lib tug‘ilgan bola. \nShakllari: Faridbek, Dadafarid, Faridxon'));


bot.on(['/farid', 'text'], (msg) => msg.reply.text('https://www.pinterest.ru/search/pins/?q=' + msg.text + '&rs=typed&term_meta[]=salom%7Ctyped'));





bot.start();


// const ran = Math.floor(Math.random()*1000000000000000000)