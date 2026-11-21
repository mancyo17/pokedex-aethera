/* Service worker di Aethera Pokérole.
   Vive solo nella cartella pokerole/: non tocca il Pokédex di Aethera né Amanome Eleven,
   e quando si aggiorna cancella soltanto le proprie copie vecchie.
   Pagina e dati: prima la rete (così gli aggiornamenti arrivano subito), senza rete la copia salvata.
   Immagini: prima la copia salvata. Non salva mai risposte fallite.
   I salvataggi dei giocatori vivono in localStorage e da qui non vengono mai toccati. */
const VERSION = '1';
const CACHE = 'aethera-pokerole-' + VERSION;
const CORE = ["./", "./index.html", "./data.json", "./manifest.json", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png", "./favicon-64.png"];
const IMGS = ["./img/001_Roogby.webp", "./img/002_Kangrivine.webp", "./img/003_Trunkscrum.webp", "./img/004_Embala.webp", "./img/005_Koaboom.webp", "./img/006_Euxplosion.webp", "./img/007_Daulphin.webp", "./img/008_Porprince.webp", "./img/009_Coroyal.webp", "./img/010_Bloomidae.webp", "./img/011_Comlidae.webp", "./img/012_Nectreal.webp", "./img/013_Kindillo.webp", "./img/014_Blazedillo.webp", "./img/015_Armurillo.webp", "./img/016_Ottarina.webp", "./img/017_Otturene.webp", "./img/018_Lomirene.webp", "./img/019_Rombat.webp", "./img/020_Rockeroll.webp", "./img/021_Suglary.webp", "./img/022_Impungent.webp", "./img/023_Kindlet.webp", "./img/024_Pyrethon.webp", "./img/025_Enkipaku.webp", "./img/026_Pygmodo.webp", "./img/027_Garguana.webp", "./img/028_Pugglix.webp", "./img/029_Pestypux.webp", "./img/030_Ekans-forma-regionale.webp", "./img/031_Arbok-forma-regionale.webp", "./img/032_Tangela-forma-regionale.webp", "./img/033_Tangrel.webp", "./img/034_Lickitung-forma-regionale.webp", "./img/035_Lickilicky-forma-regionale.webp", "./img/036_Shockam.webp", "./img/037_Dromerator.webp", "./img/038_Cygmess.webp", "./img/039_Swagooze.webp", "./img/040_Foalit.webp", "./img/041_Burroferno.webp", "./img/042_Lizeuna.webp", "./img/043_Diggid.webp", "./img/044_Magold.webp", "./img/045_Toxifry.webp", "./img/046_Electring.webp", "./img/047_Corrosopod.webp", "./img/048_Helioptile-forma-regionale.webp", "./img/049_Heliolisk-forma-regionale.webp", "./img/050_Meowth-forma-regionale.webp", "./img/051_Perrsona.webp", "./img/052_Spirtina.webp", "./img/053_Spectezzo.webp", "./img/054_Phantaestro.webp", "./img/055_Mantyke-forma-regionale.webp", "./img/056_Mantine-forma-regionale.webp", "./img/057_Doduo-forma-regionale.webp", "./img/058_Dodrio-forma-regionale.webp", "./img/059_Onix-forma-regionale.webp", "./img/060_Steelix-forma-regionale.webp", "./img/061_Jellycle.webp", "./img/062_Tundregal.webp", "./img/063_Hopple.webp", "./img/064_Rabbrute.webp", "./img/065_Purrloin-forma-regionale.webp", "./img/066_Liepard-forma-regionale.webp", "./img/067_Glixie.webp", "./img/068_Leadlite.webp", "./img/069_Budew-forma-regionale.webp", "./img/070_Roselia-forma-regionale.webp", "./img/071_Oleade.webp", "./img/072_Veilarva.webp", "./img/073_Solacoon.webp", "./img/074_Scarasol.webp", "./img/075_Pyefern.webp", "./img/076_Coralarc.webp", "./img/077_Thresharc.webp", "./img/078_Steelarc.webp", "./img/079_Flofiny.webp", "./img/080_Duscyx.webp", "./img/081_Dustryl.webp", "./img/082_Prairyote.webp", "./img/083_Froshorn.webp", "./img/084_Glacielk.webp", "./img/086_Meleeon.webp", "./img/087_Toxieon.webp", "./img/088_Sandeon.webp", "./img/089_Kireon.webp", "./img/090_Insecteon.webp", "./img/091_Gusteon.webp", "./img/092_Magneon.webp", "./img/093_Oreon.webp", "./img/094_Normeon.webp", "./img/095_Specteon.webp", "./img/097_Lyrebird-Fortissimo.webp", "./img/097_Lyrebird-Pianissimo.webp", "./img/098_Darcomy.webp", "./img/099_Nectrant.webp", "./img/100_Nectreen.webp", "./img/101_Ullowl.webp", "./img/102_Omenowl.webp", "./img/103_Puffun.webp", "./img/104_Inveleton-Guscio-di-Tartaruga.webp", "./img/104_Inveleton-Teschio-di-Cervo.webp", "./img/104_Inveleton-Teschio-di-Uccello.webp", "./img/104_Inveleton.webp", "./img/105_Reveream.webp", "./img/106_Wispur.webp", "./img/107_Furmanence.webp", "./img/108_Squabadore.webp", "./img/109_Chirpunk.webp", "./img/110_Komatross.webp", "./img/111_Lotad-forma-regionale.webp", "./img/112_Lombre-forma-regionale.webp", "./img/113_Ludighouli.webp", "./img/114_Fweeble.webp", "./img/115_Fwobble.webp", "./img/116_Fwuuna.webp", "./img/117_Hoothoot-forma-regionale.webp", "./img/118_Noctremor.webp", "./img/119_Paras-forma-regionale.webp", "./img/120_Parascare.webp", "./img/121_Jellantern.webp", "./img/122_Flumiairy.webp", "./img/123_Tonozumi.webp", "./img/124_Magiskipper.webp", "./img/125_Gyaradune.webp", "./img/126_Buneary-forma-regionale.webp", "./img/127_Lopunny-forma-regionale.webp", "./img/128_Meeno.webp", "./img/129_Masquergeon.webp", "./img/130_Amoramur.webp", "./img/131_Torkoal-forma-regionale.webp", "./img/132_Tortower.webp", "./img/133_Teaphant.webp", "./img/134_Ivoregal.webp", "./img/135_Scrapeep.webp", "./img/136_Aerigami.webp", "./img/137_Frostot.webp", "./img/138_Frostwirl.webp", "./img/139_Bambabii.webp", "./img/140_Matriarbor.webp", "./img/141_Seedread.webp", "./img/142_Hatenna-forma-regionale.webp", "./img/143_Hattrem-forma-regionale.webp", "./img/144_Hexerene.webp", "./img/145_Cuddlin.webp", "./img/146_Rafflin.webp", "./img/147_Sympholin.webp", "./img/148_Misdreavus-forma-regionale.webp", "./img/149_Mismarvelus.webp", "./img/150_Regiseer.webp", "./img/151_Regighoul.webp", "./img/152_Rainboa.webp", "./img/153_Prizmrow.webp"];

function good(res) { return res && res.ok && res.status === 200 && (res.type === 'basic' || res.type === 'default'); }
function keep(req, res) { if (!good(res)) return; const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); }

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(CORE.concat(IMGS).map(u =>
    fetch(u, { cache: 'reload' }).then(r => { if (good(r)) return c.put(u, r); })
  ))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('aethera-pokerole-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.registration.scope)) return;
  const url = new URL(req.url);
  if (url.pathname.includes('/img/')) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => { keep(req, res); return res; })));
    return;
  }
  e.respondWith(fetch(req).then(res => { keep(req, res); return res; }).catch(() =>
    caches.match(req, { ignoreSearch: true }).then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
