
const { create } = require('@open-wa/wa-automate');

create({
    sessionId: "johnny-session",
    multiDevice: true, // true for MD
    qrTimeout: 0, // show QR until scanned
    authTimeout: 60,
    headless: true,
    logConsole: true,
    devtools: false,
    popup: true,
    useChrome: true,
    disableSpins: false,
    disableWelcome: true,
    cacheEnabled: false
}).then(client => start(client));

function start(client) {
    console.log("Bot iniciado com sucesso.");
    client.onMessage(async message => {
        if (message.body === 'Oi') {
            await client.sendText(message.from, 'Olá! Como posso te ajudar hoje?');
        }
    });
}
