const { create } = require('@open-wa/wa-automate');

create({
    sessionId: "johnny-session",
    multiDevice: true,
    qrTimeout: 0,
    authTimeout: 60,
    headless: true,
    logConsole: true,
    devtools: false,
    popup: false,
    useChrome: false, // ALTERADO de true para false
    disableSpins: true,
    disableWelcome: true,
    cacheEnabled: false,
    executablePath: '/usr/bin/chromium-browser', // ADICIONADO
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // ADICIONADO
}).then(client => start(client));

function start(client) {
    console.log("Bot iniciado com sucesso.");
    client.onMessage(async message => {
        if (message.body.toLowerCase() === 'oi') {
            await client.sendText(message.from, 'Olá! Como posso te ajudar hoje?');
        }
    });
}
