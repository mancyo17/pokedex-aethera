/* Costruisce la versione «da portare via»: un file HTML unico con dentro
   tutto il gioco, che si apre con un doppio clic e funziona senza rete.
   Uso:  node strumenti/costruisci-unico.js            */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..');
const uscita = path.join(dir, 'amanome-eleven.html');

let html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

/* niente manifest: da file:// non serve e darebbe errore */
html = html.replace(/\s*<link rel="manifest"[^>]*>\s*/g, '\n');

/* un'icona per la scheda del browser, dentro il file */
const icona = fs.readFileSync(path.join(dir, 'icona-192.png')).toString('base64');
html = html.replace('</head>',
  '  <link rel="icon" href="data:image/png;base64,' + icona + '">\n</head>');

/* i cinque script diventano uno solo, in ordine */
const file = ['ie-volti.js', 'ie-dati.js', 'ie-storia.js', 'ie-partita.js', 'ie-gioco.js'];
let dentro = '<script>\n/* Amanome Eleven — versione da portare via, generata da strumenti/costruisci-unico.js */\n';
dentro += 'window.AMANOME_UNICO = true;\n';
for (const f of file) {
  const testo = fs.readFileSync(path.join(dir, f), 'utf8');
  if (testo.includes('</script')) throw new Error('Il file ' + f + ' contiene </script>: va sistemato prima.');
  dentro += '\n/* ===== ' + f + ' ===== */\n' + testo + '\n';
}
dentro += '</script>';

const primo = html.indexOf('<script src="./ie-volti.js"></script>');
const ultimo = html.indexOf('<script src="./ie-gioco.js"></script>') + '<script src="./ie-gioco.js"></script>'.length;
if (primo < 0 || ultimo < primo) throw new Error('Non trovo i tag <script> nell\'index.');
html = html.slice(0, primo) + dentro + html.slice(ultimo);

fs.writeFileSync(uscita, html);
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log('scritto ' + path.relative(dir, uscita) + ' — ' + kb + ' KB');
