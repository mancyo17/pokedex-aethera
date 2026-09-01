/* ============================================================
   AMANOME ELEVEN — volti
   Ritratti disegnati in SVG dal gioco stesso: nessuna immagine da
   scaricare, nessun disegno di altri. Ogni personaggio è una
   combinazione di taglio, colori, occhi, bocca e un dettaglio.
   ============================================================ */
(function () {
'use strict';
var IE = window.IE = window.IE || {};

IE.pelli = {
  chiara:  '#f6d9c2', media: '#e8bd9a', ambra: '#d29a6e',
  bruna:   '#a9714a', scura: '#7c4d31', pallida: '#f7e3d6'
};
IE.capelliCol = {
  nero:'#241f2b', corvino:'#101018', castano:'#5a3a24', cioccolato:'#3d2a1c',
  rame:'#a8471f', rosso:'#c0392b', biondo:'#d9b45a', cenere:'#b9bcc4',
  bianco:'#e6e9ef', verde:'#2f7a52', blu:'#2c4f8a', viola:'#5c3f86', rosa:'#c0658a'
};

IE.tagli = ['corti','punte','caschetto','lunghi','coda','mossi','rasati','ciuffo','raccolti','radi','treccine','ricci'];
IE.occhiTipi = ['normali','decisi','grandi','stanchi','felici','severi','chiusi'];
IE.bocche = ['neutra','sorriso','sorrisone','seria','aperta','piccola'];
IE.dettagli = ['niente','fascia','occhiali','visiera','cerotto','lentiggini','berretto','bandana'];

function scuro(hex, q) {
  var n = parseInt(hex.slice(1), 16);
  var r = Math.round(((n >> 16) & 255) * q), g = Math.round(((n >> 8) & 255) * q), b = Math.round((n & 255) * q);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

/* ---------- capelli: strato dietro la testa ---------- */
function dietro(t, c) {
  var s = scuro(c, .82);
  switch (t) {
    case 'lunghi':
      return '<path d="M20 44 q0 34 -3 44 h66 q-3 -10 -3 -44 z" fill="' + s + '"/>';
    case 'coda':
      return '<path d="M22 42 q-2 26 -4 34 h12 q-2 -18 0 -34 z" fill="' + s + '"/>' +
             '<path d="M74 34 q16 6 14 26 q-2 16 -12 20 q6 -22 -6 -36 z" fill="' + s + '"/>';
    case 'mossi':
      return '<path d="M20 42 q-2 24 2 32 q6 -6 4 -18 z M80 42 q2 24 -2 32 q-6 -6 -4 -18 z" fill="' + s + '"/>';
    case 'caschetto':
      return '<path d="M21 40 q-1 22 1 30 h56 q2 -8 1 -30 z" fill="' + s + '"/>';
    case 'treccine':
      return '<path d="M22 44 q-4 24 -2 34 h10 q-4 -18 -1 -34 z M78 44 q4 24 2 34 h-10 q4 -18 1 -34 z" fill="' + s + '"/>';
    case 'ricci':
      return '<circle cx="26" cy="34" r="12" fill="' + s + '"/><circle cx="74" cy="34" r="12" fill="' + s + '"/>' +
             '<circle cx="50" cy="24" r="14" fill="' + s + '"/>';
    case 'raccolti':
      return '<circle cx="50" cy="15" r="9" fill="' + s + '"/>';
    default: return '';
  }
}

/* ---------- capelli: strato davanti ---------- */
function davanti(t, c) {
  var l = scuro(c, 1.12);
  switch (t) {
    case 'corti':
      return '<path d="M24 44 q0 -26 26 -26 q26 0 26 26 q-4 -14 -26 -14 q-22 0 -26 14 z" fill="' + c + '"/>';
    case 'punte':
      return '<path d="M24 46 q-1 -24 26 -26 q27 2 26 26 l-5 -12 l-4 8 l-5 -13 l-5 10 l-6 -14 l-5 12 l-5 -9 l-5 12 l-4 -8 z" fill="' + c + '"/>';
    case 'caschetto':
      return '<path d="M22 46 q0 -28 28 -28 q28 0 28 28 q-6 -16 -18 -16 q-4 12 -22 10 q-10 -1 -16 6 z" fill="' + c + '"/>';
    case 'lunghi':
      return '<path d="M22 48 q0 -30 28 -30 q28 0 28 30 q-4 -18 -14 -20 q-10 8 -26 6 q-12 -1 -16 14 z" fill="' + c + '"/>';
    case 'coda':
      return '<path d="M23 44 q1 -26 27 -26 q26 0 27 26 q-6 -16 -20 -17 q-12 6 -22 5 q-8 0 -12 12 z" fill="' + c + '"/>';
    case 'mossi':
      return '<path d="M23 46 q0 -28 27 -28 q27 0 27 28 q-5 -10 -11 -6 q-5 -9 -12 -4 q-6 -8 -13 -2 q-6 -4 -9 6 z" fill="' + c + '"/>';
    case 'rasati':
      return '<path d="M26 40 q1 -21 24 -21 q23 0 24 21 q-7 -7 -24 -7 q-17 0 -24 7 z" fill="' + c + '" opacity=".85"/>' +
             '<path d="M28 34 q22 -8 44 0" stroke="' + l + '" stroke-width="1.2" fill="none" opacity=".45"/>';
    case 'ciuffo':
      return '<path d="M23 46 q0 -28 27 -28 q27 0 27 28 q-4 -15 -19 -17 q-17 -2 -25 9 q-5 7 -10 8 z" fill="' + c + '"/>' +
             '<path d="M60 20 q16 5 17 25 l-6 1 q3 -15 -11 -21 z" fill="' + c + '"/>' +
             '<path d="M44 20 q20 2 24 13 q-5 17 -21 23 q9 -19 -3 -36 z" fill="' + l + '" opacity=".95"/>';
    case 'raccolti':
      return '<path d="M24 42 q1 -24 26 -24 q25 0 26 24 q-8 -12 -26 -12 q-18 0 -26 12 z" fill="' + c + '"/>';
    case 'radi':
      return '<path d="M25 44 q2 -12 10 -16 q-3 8 -2 14 z M75 44 q-2 -12 -10 -16 q3 8 2 14 z" fill="' + c + '"/>';
    case 'treccine':
      return '<path d="M24 44 q0 -26 26 -26 q26 0 26 26 q-6 -14 -26 -14 q-20 0 -26 14 z" fill="' + c + '"/>' +
             '<path d="M32 22 v10 M42 19 v11 M50 18 v12 M58 19 v11 M68 22 v10" stroke="' + l + '" stroke-width="1.6" opacity=".7"/>';
    case 'ricci':
      return '<path d="M25 44 q0 -24 25 -24 q25 0 25 24 q-8 -12 -25 -12 q-17 0 -25 12 z" fill="' + c + '"/>';
    default:
      return '<path d="M24 44 q0 -26 26 -26 q26 0 26 26 q-4 -14 -26 -14 q-22 0 -26 14 z" fill="' + c + '"/>';
  }
}

/* ---------- occhi ---------- */
function occhi(t) {
  var b = '#241f2b';
  function o(x, r, ry) { return '<ellipse cx="' + x + '" cy="47" rx="' + r + '" ry="' + ry + '" fill="#fff"/>' +
    '<circle cx="' + x + '" cy="47.5" r="' + (r * .62) + '" fill="' + b + '"/>' +
    '<circle cx="' + (x + r * .3) + '" cy="46" r="' + (r * .22) + '" fill="#fff" opacity=".9"/>'; }
  switch (t) {
    case 'grandi':  return o(39, 6, 6.4) + o(61, 6, 6.4);
    case 'decisi':  return o(39, 5, 3.6) + o(61, 5, 3.6) +
      '<path d="M33 41 l12 3 M67 41 l-12 3" stroke="' + b + '" stroke-width="2.6" stroke-linecap="round"/>';
    case 'stanchi': return o(39, 4.6, 3.4) + o(61, 4.6, 3.4) +
      '<path d="M34 52 q5 2 10 0 M56 52 q5 2 10 0" stroke="#b98d86" stroke-width="1.4" fill="none" opacity=".8"/>';
    case 'felici':  return '<path d="M34 49 q5 -8 10 0 M56 49 q5 -8 10 0" stroke="' + b + '" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
    case 'chiusi':  return '<path d="M34 47 q5 4 10 0 M56 47 q5 4 10 0" stroke="' + b + '" stroke-width="2.4" fill="none" stroke-linecap="round"/>';
    case 'severi':  return o(39, 5, 3) + o(61, 5, 3) +
      '<path d="M33 42 h12 M55 42 h12" stroke="' + b + '" stroke-width="2.8" stroke-linecap="round"/>';
    default:        return o(39, 5.2, 4.6) + o(61, 5.2, 4.6);
  }
}

/* ---------- sopracciglia ---------- */
function ciglia(t, c) {
  var s = scuro(c, .7);
  var d = {
    normali: 'M33 37 q6 -3 12 -1 M67 37 q-6 -3 -12 -1',
    decisi:  'M33 35 q6 1 12 3 M67 35 q-6 1 -12 3',
    grandi:  'M33 36 q6 -4 12 -1 M67 36 q-6 -4 -12 -1',
    stanchi: 'M33 36 q6 2 12 3 M67 36 q-6 2 -12 3',
    felici:  'M33 36 q6 -4 12 -1 M67 36 q-6 -4 -12 -1',
    severi:  'M32 34 q7 2 13 4 M68 34 q-7 2 -13 4',
    chiusi:  'M33 37 q6 -2 12 -1 M67 37 q-6 -2 -12 -1'
  }[t] || 'M33 37 q6 -3 12 -1 M67 37 q-6 -3 -12 -1';
  return '<path d="' + d + '" stroke="' + s + '" stroke-width="2.4" fill="none" stroke-linecap="round"/>';
}

/* ---------- bocca ---------- */
function bocca(t) {
  var b = '#8c4a4a';
  switch (t) {
    case 'sorriso':   return '<path d="M43 58 q7 6 14 0" stroke="' + b + '" stroke-width="2" fill="none" stroke-linecap="round"/>';
    case 'sorrisone': return '<path d="M41 57 q9 10 18 0 z" fill="#7a3540"/><path d="M42 58 q8 2 16 0" stroke="#fff" stroke-width="2" fill="none"/>';
    case 'seria':     return '<path d="M43 59 h14" stroke="' + b + '" stroke-width="2.2" stroke-linecap="round"/>';
    case 'aperta':    return '<ellipse cx="50" cy="59" rx="5" ry="4" fill="#7a3540"/>';
    case 'piccola':   return '<path d="M47 59 h6" stroke="' + b + '" stroke-width="2.2" stroke-linecap="round"/>';
    default:          return '<path d="M45 59 q5 3 10 0" stroke="' + b + '" stroke-width="2" fill="none" stroke-linecap="round"/>';
  }
}

/* ---------- dettaglio ---------- */
function dettaglio(t, col) {
  switch (t) {
    case 'fascia':    return '<path d="M23 33 q27 -10 54 0 v7 q-27 -9 -54 0 z" fill="' + (col || '#e8703a') + '"/>' +
      '<path d="M23 36 h54" stroke="rgba(0,0,0,.18)" stroke-width="1.2"/>';
    case 'occhiali':  return '<g fill="none" stroke="#2b3450" stroke-width="2.2">' +
      '<rect x="30" y="41" width="18" height="12" rx="3"/><rect x="52" y="41" width="18" height="12" rx="3"/>' +
      '<path d="M48 47 h4 M30 46 l-6 1 M70 46 l6 1"/></g>' +
      '<rect x="30" y="41" width="18" height="12" rx="3" fill="#9fd0ff" opacity=".22"/>' +
      '<rect x="52" y="41" width="18" height="12" rx="3" fill="#9fd0ff" opacity=".22"/>';
    case 'visiera':   return '<path d="M24 40 h52 v11 h-52 z" fill="#1d2740" opacity=".92"/>' +
      '<path d="M27 43 h18 v5 h-18 z M55 43 h18 v5 h-18 z" fill="#7fc7ff" opacity=".55"/>' +
      '<path d="M24 40 h52" stroke="#e8c14a" stroke-width="2"/>';
    case 'cerotto':   return '<g transform="rotate(-18 66 40)"><rect x="59" y="36" width="15" height="6" rx="2" fill="#f3e2c8"/>' +
      '<path d="M63 37.5 v3 M67 37.5 v3 M71 37.5 v3" stroke="#d9c3a1" stroke-width="1"/></g>';
    case 'lentiggini':return '<g fill="#c98a63" opacity=".8"><circle cx="36" cy="53" r="1"/><circle cx="40" cy="55" r="1"/>' +
      '<circle cx="44" cy="53" r="1"/><circle cx="56" cy="53" r="1"/><circle cx="60" cy="55" r="1"/><circle cx="64" cy="53" r="1"/></g>';
    case 'berretto':  return '<path d="M21 31 q29 -23 58 0 z" fill="' + (col || '#3a4a66') + '"/>' +
      '<path d="M19 30 q31 7 62 0 v5 q-31 7 -62 0 z" fill="' + scuro(col || '#3a4a66', .75) + '"/>' +
      '<path d="M19 33 q31 12 62 0 v3 q-31 11 -62 0 z" fill="' + scuro(col || '#3a4a66', .55) + '" opacity=".85"/>';
    case 'bandana':   return '<path d="M22 34 q28 -12 56 0 v6 q-28 -10 -56 0 z" fill="' + (col || '#5f9a7a') + '"/>' +
      '<path d="M76 37 l12 6 l-11 2 z" fill="' + scuro(col || '#5f9a7a', .8) + '"/>';
    default: return '';
  }
}

/* ============================================================
   IE.volto(v) → SVG
   v: { pelle, capelli, taglio, occhi, bocca, extra, extraCol, maglia }
   ============================================================ */
IE.volto = function (v, opz) {
  v = v || {};
  opz = opz || {};
  var pelle = IE.pelli[v.pelle] || v.pelle || IE.pelli.media;
  var cap = IE.capelliCol[v.capelli] || v.capelli || IE.capelliCol.nero;
  var taglio = v.taglio || 'corti';
  var occ = v.occhi || 'normali';
  var boc = v.bocca || 'neutra';
  var maglia = v.maglia || opz.maglia || '#2f9e63';
  var sfondo = opz.sfondo;

  return '<svg class="volto" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    (sfondo ? '<rect width="100" height="100" rx="22" fill="' + sfondo + '"/>' : '') +
    '<circle cx="50" cy="46" r="34" fill="rgba(0,0,0,.16)"/>' +
    /* spalle e maglia */
    '<path d="M6 100 q2 -19 24 -25 l40 0 q22 6 24 25 z" fill="' + maglia + '"/>' +
    '<path d="M42 72 h16 l-8 12 z" fill="' + scuro(maglia, .7) + '"/>' +
    /* collo */
    '<path d="M42 62 h16 v11 q-8 5 -16 0 z" fill="' + scuro(pelle, .86) + '"/>' +
    dietro(taglio, cap) +
    /* orecchie e testa */
    '<ellipse cx="24" cy="48" rx="4.5" ry="6" fill="' + pelle + '"/>' +
    '<ellipse cx="76" cy="48" rx="4.5" ry="6" fill="' + pelle + '"/>' +
    '<ellipse cx="50" cy="45" rx="26" ry="30" fill="' + pelle + '"/>' +
    davanti(taglio, cap) +
    ciglia(occ, cap) +
    occhi(occ) +
    '<path d="M50 49 v6 q-2 1 -3 1" stroke="' + scuro(pelle, .74) + '" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
    bocca(boc) +
    dettaglio(v.extra, v.extraCol) +
    '</svg>';
};

/* ---------- volto casuale ---------- */
IE.voltoCasuale = function () {
  function s(a) { return a[Math.floor(Math.random() * a.length)]; }
  return {
    pelle: s(Object.keys(IE.pelli)), capelli: s(Object.keys(IE.capelliCol)),
    taglio: s(IE.tagli), occhi: s(IE.occhiTipi), bocca: s(IE.bocche),
    extra: Math.random() < .35 ? s(IE.dettagli) : 'niente'
  };
};

/* ============================================================
   VOLTI DEI PERSONAGGI
   ============================================================ */
IE.volti = {
  tu:      { pelle:'media',   capelli:'castano',   taglio:'punte',     occhi:'decisi',  bocca:'sorriso',   extra:'niente' },
  rei:     { pelle:'chiara',  capelli:'cioccolato',taglio:'corti',     occhi:'felici',  bocca:'sorrisone', extra:'niente' },
  goro:    { pelle:'ambra',   capelli:'nero',      taglio:'rasati',    occhi:'severi',  bocca:'seria',     extra:'niente' },
  hina:    { pelle:'chiara',  capelli:'corvino',   taglio:'coda',      occhi:'severi',  bocca:'seria',     extra:'niente' },
  zero:    { pelle:'pallida', capelli:'biondo',    taglio:'ciuffo',    occhi:'stanchi', bocca:'seria',     extra:'niente' },
  minoru:  { pelle:'chiara',  capelli:'rame',      taglio:'punte',     occhi:'grandi',  bocca:'aperta',    extra:'lentiggini' },
  kenta:   { pelle:'chiara',  capelli:'castano',   taglio:'caschetto', occhi:'normali', bocca:'piccola',   extra:'occhiali' },
  yuki:    { pelle:'media',   capelli:'verde',     taglio:'mossi',     occhi:'felici',  bocca:'sorriso',   extra:'niente' },
  aoi:     { pelle:'media',   capelli:'blu',       taglio:'mossi',     occhi:'normali', bocca:'piccola',   extra:'niente' },
  shinobu: { pelle:'chiara',  capelli:'rame',      taglio:'mossi',     occhi:'felici',  bocca:'sorrisone', extra:'niente' },
  rikuto:  { pelle:'bruna',   capelli:'castano',   taglio:'lunghi',    occhi:'stanchi', bocca:'seria',     extra:'cerotto' },
  benkei:  { pelle:'media',   capelli:'nero',      taglio:'corti',     occhi:'chiusi',  bocca:'sorrisone', extra:'niente' },
  daichi:  { pelle:'ambra',   capelli:'nero',      taglio:'punte',     occhi:'severi',  bocca:'seria',     extra:'niente' },
  nao:     { pelle:'chiara',  capelli:'cioccolato',taglio:'caschetto', occhi:'decisi',  bocca:'sorriso',   extra:'niente' },

  amagai:  { pelle:'bruna',   capelli:'bianco',    taglio:'radi',      occhi:'severi',  bocca:'seria',     extra:'berretto', extraCol:'#3a4a66', maglia:'#4a5468' },
  ayase:   { pelle:'chiara',  capelli:'castano',   taglio:'raccolti',  occhi:'normali', bocca:'sorriso',   extra:'niente',   maglia:'#7ec8e0' },
  sindaco: { pelle:'ambra',   capelli:'cenere',    taglio:'corti',     occhi:'severi',  bocca:'seria',     extra:'niente',   maglia:'#4b4438' },
  preside: { pelle:'chiara',  capelli:'bianco',    taglio:'radi',      occhi:'stanchi', bocca:'seria',     extra:'occhiali', maglia:'#3a3f4c' },
  tonda:   { pelle:'ambra',   capelli:'nero',      taglio:'corti',     occhi:'decisi',  bocca:'sorrisone', extra:'berretto', extraCol:'#c9b03f', maglia:'#e0d06f' },
  cronista:{ pelle:'chiara',  capelli:'cenere',    taglio:'corti',     occhi:'felici',  bocca:'aperta',    extra:'occhiali', maglia:'#5b6b8c' },

  anzai:   { pelle:'pallida', capelli:'bianco',    taglio:'raccolti',  occhi:'chiusi',  bocca:'sorriso',   extra:'occhiali', maglia:'#8f7f95' },
  ishizuka:{ pelle:'ambra',   capelli:'nero',      taglio:'rasati',    occhi:'severi',  bocca:'seria',     extra:'bandana',  extraCol:'#7a5a3a', maglia:'#6b5540' },
  kurihara:{ pelle:'pallida', capelli:'bianco',    taglio:'raccolti',  occhi:'felici',  bocca:'sorriso',   extra:'niente',   maglia:'#9a8aa8' },
  okubo:   { pelle:'media',   capelli:'castano',   taglio:'caschetto', occhi:'grandi',  bocca:'sorriso',   extra:'niente',   maglia:'#8fa8c8' },
  kuz:     { pelle:'chiara',  capelli:'corvino',   taglio:'punte',     occhi:'decisi',  bocca:'seria',     extra:'niente',   maglia:'#4f7fd0' },
  higashi_all:{ pelle:'ambra',capelli:'cenere',    taglio:'corti',     occhi:'stanchi', bocca:'seria',     extra:'niente',   maglia:'#3f6fc0' },
  reize:   { pelle:'chiara',  capelli:'verde',     taglio:'coda',      occhi:'severi',  bocca:'seria',     extra:'niente',   maglia:'#5f4f8f' },
  gran:    { pelle:'chiara',  capelli:'rosso',     taglio:'punte',     occhi:'severi',  bocca:'seria',     extra:'niente',   maglia:'#6f5fa8' },
  burn:    { pelle:'media',   capelli:'rosso',     taglio:'punte',     occhi:'decisi',  bocca:'sorriso',   extra:'niente',   maglia:'#a83f1f' },
  gazel:   { pelle:'pallida', capelli:'bianco',    taglio:'ciuffo',    occhi:'severi',  bocca:'seria',     extra:'niente',   maglia:'#5f8fb0' },
  hillman: { pelle:'ambra',   capelli:'cenere',    taglio:'radi',      occhi:'severi',  bocca:'seria',     extra:'berretto', extraCol:'#8f3f18', maglia:'#8f9aa8' },
  shawn:   { pelle:'pallida', capelli:'cenere',    taglio:'mossi',     occhi:'normali', bocca:'sorriso',   extra:'niente',   maglia:'#e8703a' },
  scotty:  { pelle:'chiara',  capelli:'castano',   taglio:'caschetto', occhi:'chiusi',  bocca:'sorrisone', extra:'niente',   maglia:'#e8703a' },
  hurley:  { pelle:'bruna',   capelli:'rosa',      taglio:'punte',     occhi:'felici',  bocca:'sorrisone', extra:'niente',   maglia:'#e8703a' },
  byron:   { pelle:'chiara',  capelli:'biondo',    taglio:'lunghi',    occhi:'severi',  bocca:'seria',     extra:'niente',   maglia:'#ffe8a0' },
  desarm:  { pelle:'media',   capelli:'verde',     taglio:'punte',     occhi:'severi',  bocca:'seria',     extra:'niente',   maglia:'#2f7a6a' },
  dark:    { pelle:'pallida', capelli:'corvino',   taglio:'lunghi',    occhi:'severi',  bocca:'seria',     extra:'occhiali', maglia:'#3a3a44' },
  sakuma:  { pelle:'chiara',  capelli:'cenere',    taglio:'coda',      occhi:'decisi',  bocca:'sorriso',   extra:'cerotto',  maglia:'#e8d27a' },
  genda:   { pelle:'ambra',   capelli:'castano',   taglio:'punte',     occhi:'decisi',  bocca:'seria',     extra:'niente',   maglia:'#e8d27a' },
  mark:    { pelle:'media',   capelli:'castano',   taglio:'punte',     occhi:'felici',  bocca:'sorrisone', extra:'fascia',   extraCol:'#e8703a', maglia:'#e8703a' },
  axel:    { pelle:'media',   capelli:'bianco',    taglio:'punte',     occhi:'decisi',  bocca:'seria',     extra:'niente',   maglia:'#e8703a' },
  jude:    { pelle:'chiara',  capelli:'corvino',   taglio:'treccine',  occhi:'severi',  bocca:'seria',     extra:'visiera',  maglia:'#e8703a' },
  nelly:   { pelle:'chiara',  capelli:'rame',      taglio:'lunghi',    occhi:'decisi',  bocca:'sorriso',   extra:'niente',   maglia:'#e8a0b0' }
};

/* volti delle squadre avversarie: generati stabilmente dal nome */
function seme(t) { var s = 0; for (var i = 0; i < t.length; i++) s = (s * 31 + t.charCodeAt(i)) >>> 0; return s; }
IE.voltoDi = function (g) {
  if (g.volto) return g.volto;
  if (IE.volti[g.id]) return IE.volti[g.id];
  var s = seme(g.id + g.nome), r = function (n) { s = (s * 1664525 + 1013904223) >>> 0; return s % n; };
  var pel = Object.keys(IE.pelli), cap = ['nero','corvino','castano','cioccolato','rame','cenere','biondo','bruna'];
  var v = {
    pelle: pel[r(pel.length)],
    capelli: ['nero','corvino','castano','cioccolato','rame','cenere','biondo'][r(7)],
    taglio: IE.tagli[r(IE.tagli.length)],
    occhi: ['normali','decisi','severi','grandi','felici'][r(5)],
    bocca: ['neutra','seria','sorriso','piccola'][r(4)],
    extra: r(5) === 0 ? ['cerotto','occhiali','lentiggini','bandana'][r(4)] : 'niente',
    maglia: g.col
  };
  g.volto = v;
  return v;
};

})();
