/* Service worker di Amanome Eleven.
   Serve a una cosa sola: far funzionare il gioco senza rete.
   Non salva mai risposte fallite (è l'errore che aveva rotto la prima
   versione del Pokédex) e in caso di dubbio lascia passare la rete. */
var CACHE = 'amanome-v2';
var FILE = [
  './', './index.html', './ie-volti.js', './ie-dati.js', './ie-storia.js', './ie-partita.js',
  './ie-gioco.js', './manifest.json', './icona-192.png', './icona-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(FILE.map(function (f) {
      return fetch(f, { cache: 'reload' })
        .then(function (r) { if (r && r.ok) return c.put(f, r); })
        .catch(function () {});
    }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) {
    return Promise.all(k.map(function (n) { if (n !== CACHE) return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  if (new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r).then(function (risp) {
      if (risp && risp.ok && risp.type === 'basic') {
        var copia = risp.clone();
        caches.open(CACHE).then(function (c) { c.put(r, copia); }).catch(function () {});
      }
      return risp;
    }).catch(function () {
      return caches.match(r).then(function (c) {
        return c || caches.match('./index.html');
      });
    })
  );
});
