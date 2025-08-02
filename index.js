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
    useChrome: false, // ⚠️ ISSO É O MAIS IMPORTANTE
    disableSpins: true,
    disableWelcome: true,
    cacheEnabled: false
}).then(client => start(client));

function start(client) {
    console.log("Bot iniciado com sucesso.");
    client.onMessage(async message => {
        if (message.body.toLowerCase().includes("oi")) {
            await client.sendText(message.from, 'Olá! Como posso te ajudar hoje?');
        }
    });
}
