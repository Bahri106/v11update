let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [6285853570297]
│ •  [6285853570297]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler