var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"Bo",
"Bot ",
"Bot by",
"Bot by A",
"Bot by Ar",
"Bot by Ara",
"Bot by Arat",
"Bot by Arata",
"Bot by Arata ",
"Bot by Arata -",
"Bot by Arata - ",
"Bot by Arata - T",
"Bot by Arata - Te",
"Bot by Arata - Tel",
"Bot by Arata - Tele",
"Bot by Arata - Teleg",
"Bot by Arata - Telegr",
"Bot by Arata - Telegra",
"Bot by Arata - Telegram",
"Bot by Arata - Telegram ",
"Bot by Arata - Telegram @",
"Bot by Arata - Telegram @N",
"Bot by Arata - Telegram @No",
"Bot by Arata - Telegram @Nov",
"Bot by Arata - Telegram @Nove",
"Bot by Arata - Telegram @Novem",
"Bot by Arata - Telegram @Novemb",
"Bot by Arata - Telegram @Novembe",
"Bot by Arata - Telegram @November",
"Bot by Arata - Telegram @November2",
"Bot by Arata - Telegram @November2k",
"Bot by Arata - Telegram @November2",
"Bot by Arata - Telegram @November",
"Bot by Arata - Telegram @Novemb",
"Bot by Arata - Telegram @Novem",
"Bot by Arata - Telegram @Nove",
"Bot by Arata - Telegram @Nov",
"Bot by Arata - Telegram @No",
"Bot by Arata - Telegram @N",
"Bot by Arata - Telegram @",
"Bot by Arata - Telegram ",
"Bot by Arata - Telegram",
"Bot by Arata - Telegra",
"Bot by Arata - Telegr",
"Bot by Arata - Teleg",
"Bot by Arata - Tele",
"Bot by Arata - Tel",
"Bot by Arata - Te",
"Bot by Arata - T",
"Bot by Arata - ",
"Bot by Arata -",
"Bot by Arata ",
"Bot by Arata",
"Bot by Arat",
"Bot by Ara",
"Bot by Ar",
"Bot by A",
"Bot by ",
"Bot by",
"Bot ",
"Bo",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}
