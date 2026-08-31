/* ============================================================
   AMANOME ELEVEN — applicazione
   Creazione del personaggio, storia, spogliatoio, allenamenti,
   interfaccia della partita, salvataggi.
   ============================================================ */
(function () {
'use strict';
var IE = window.IE;
var CHIAVE = 'amanome11.salvataggio';
var G = window.G = {};
var S = null;                 /* stato della partita salvata */
var P = null;                 /* partita in corso */
var $ = function (s) { return document.querySelector(s); };
var schermo, barra;

function esc(t) {
  return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}
function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; }

/* ============================================================
   STATO
   ============================================================ */
function nuovoStato() {
  return {
    ver: 1, vista: 'titolo',
    io: null, nomeSquadra: 'Amanome Eleven', sigla: 'AMA', stemma: '⚡',
    rosa: [], titolari: [], formazione: '4-4-2', spirito: 0,
    cap: 1, scena: null, riga: 0, flag: {}, obiettivo: '',
    scout: 0, battute: [], incontrate: [], storico: [], luoghiFatti: {},
    partitaPendente: null, sblocchi: {},
    opz: { interazione: 'normale' }
  };
}
function metodi(s) {
  s.ha = function (id) { return s.rosa.some(function (g) { return g.id === id; }); };
  s.gioc = function (id) { return s.rosa.filter(function (g) { return g.id === id; })[0]; };
  return s;
}

/* Rimette in riga i salvataggi vecchi e i giocatori appena arrivati. */
function normalizzaRosa() {
  if (!S || !S.rosa) return;
  S.risvegli = S.risvegli || {};
  S.battute = S.battute || [];
  if (typeof S.scout !== 'number') S.scout = 0;
  S.rosa.forEach(function (g) {
    if (typeof g.fat !== 'number') g.fat = 100;
    if (!g.tec) g.tec = [];
    if (!g.eq || !g.eq.length) equipaggiaAuto(g);
    else g.eq = g.eq.filter(function (id) { return IE.tec(id) && g.tec.indexOf(id) >= 0; }).slice(0, SLOT);
    if (!g.eq.length) equipaggiaAuto(g);
  });
}
function salva() {
  try {
    var c = {}; for (var k in S) if (typeof S[k] !== 'function') c[k] = S[k];
    localStorage.setItem(CHIAVE, JSON.stringify(c));
  } catch (e) { /* spazio pieno o navigazione privata: si gioca lo stesso */ }
}
function carica() {
  try {
    var t = localStorage.getItem(CHIAVE);
    if (!t) return null;
    var s = JSON.parse(t);
    if (!s || !s.ver) return null;
    var base = nuovoStato();
    for (var k in base) if (!(k in s)) s[k] = base[k];
    metodi(s);
    var prec = S; S = s; normalizzaRosa(); S = prec;
    return s;
  } catch (e) { return null; }
}

/* ============================================================
   PROTAGONISTA
   ============================================================ */
var BASE_TU = { tir: 22, fis: 22, ctr: 22, dif: 22, vel: 22, res: 24, gri: 26, par: 8 };
var BONUS_RUOLO = {
  PT: { par: 30, dif: 6, gri: 4 }, DF: { dif: 14, fis: 7 },
  CC: { ctr: 12, res: 6 }, AT: { tir: 14, vel: 6 }
};
IE.milestoneTu = {
  PT: [{ lv: 5, t: 'pugno_teso' }, { lv: 10, t: 'cancello_chiuso' }, { lv: 16, t: 'presa_falco' }, { lv: 22, t: 'muro_infinito' }],
  DF: [{ lv: 5, t: 'sbarramento' }, { lv: 10, t: 'muro_di_terra' }, { lv: 16, t: 'cancello_pietra' }, { lv: 22, t: 'marcatura' }],
  CC: [{ lv: 5, t: 'folata' }, { lv: 10, t: 'lettura' }, { lv: 16, t: 'illusione' }, { lv: 22, t: 'undici_nomi' }],
  AT: [{ lv: 5, t: 'bordata' }, { lv: 10, t: 'cannonata' }, { lv: 16, t: 'tuono_valle' }, { lv: 22, t: 'undici_nomi' }]
};

function creaTu(dati) {
  var org = IE.origini.filter(function (o) { return o.id === dati.origine; })[0];
  var base = {};
  IE.ordineStat.forEach(function (k) {
    base[k] = BASE_TU[k] + ((BONUS_RUOLO[dati.ruolo] || {})[k] || 0) + ((org.bonus || {})[k] || 0);
  });
  var tecRuolo = dati.tecnica;
  var tipo = dati.ruolo === 'PT' ? 'parata' : dati.ruolo === 'DF' ? 'blocco' : dati.ruolo === 'AT' ? 'tiro' : 'drib';
  var tecEl = IE.tecnicaElemento[dati.el][tipo];
  var tec = [tecRuolo];
  if (tecEl && tec.indexOf(tecEl) < 0) tec.push(tecEl);
  return {
    id: 'tu', nome: dati.nome, corto: dati.nome.split(' ')[0], ruolo: dati.ruolo, el: dati.el,
    col: '#ffd23f', prof: org.profilo, pot: 1.3, base: base, allen: {}, lv: 1, exp: 0,
    tec: tec, numero: dati.numero, am: 100, origine: dati.origine, capitano: true,
    volto: Object.assign({ maglia: '#2f9e63' }, dati.volto || {}),
    fat: 100
  };
}

/* ============================================================
   ESPERIENZA E CRESCITA
   ============================================================ */
function expNec(lv) { return 90 + lv * 40; }
function daiExp(g, n) {
  var salito = [], imparate = [];
  g.exp = (g.exp || 0) + n;
  while (g.exp >= expNec(g.lv) && g.lv < 60) {
    g.exp -= expNec(g.lv); g.lv++; salito.push(g.lv);
    if (g.id === 'tu') {
      (IE.milestoneTu[g.ruolo] || []).forEach(function (m) {
        if (m.lv === g.lv && g.tec.indexOf(m.t) < 0) { g.tec.push(m.t); imparate.push(m.t); }
      });
    }
  }
  return { salito: salito, imparate: imparate };
}
function cresciAffiatamento(g, n) {
  g.am = Math.min(100, (g.am || 0) + n);
  var imparate = [];
  (IE.crescitaTecniche[g.id] || []).forEach(function (m) {
    if (m.tec && g.am >= m.am && g.tec.indexOf(m.tec) < 0) { g.tec.push(m.tec); imparate.push(m.tec); }
  });
  return imparate;
}

/* ============================================================
   EFFETTI DELLE SCENE
   ============================================================ */
function applica(effs) {
  if (!effs) return;
  effs.forEach(function (e) {
    if (e.recluta) reclutaGiocatore(e.recluta);
    if (e.flag) S.flag[e.flag] = true;
    if (typeof e.spirito === 'number') S.spirito = Math.max(0, Math.min(100, S.spirito + e.spirito));
    if (e.obiettivo) S.obiettivo = e.obiettivo;
    if (e.sblocca) S.sblocchi[e.sblocca] = true;
    if (typeof e.exp === 'number') S.rosa.forEach(function (g) { daiExp(g, e.exp); });
  });
}
function reclutaGiocatore(id) {
  if (S.ha(id)) return;
  var g = IE.creaGiocatore(id, Math.max(1, mediaLv() - 1));
  if (!g) return;
  g.am = 20;
  g.fat = 100;
  g.numero = prossimoNumero();
  equipaggiaAuto(g);
  S.rosa.push(g);
  aggiornaTitolari();
}

/* ---------- tecniche equipaggiate: quattro slot ---------- */
var SLOT = 4;
function equipaggiaAuto(g) {
  var ordine = { PT: ['parata', 'blocco', 'drib', 'tiro'], DF: ['blocco', 'drib', 'tiro', 'parata'],
                 CC: ['drib', 'blocco', 'tiro', 'parata'], AT: ['tiro', 'drib', 'blocco', 'parata'] }[g.ruolo] || ['drib', 'tiro', 'blocco', 'parata'];
  var pool = (g.tec || []).map(IE.tec).filter(Boolean).filter(function (t) {
    return !t.soloDi || t.soloDi === g.id;
  });
  pool.sort(function (a, b) {
    var pa = ordine.indexOf(a.tipo), pb = ordine.indexOf(b.tipo);
    if (pa !== pb) return pa - pb;
    return b.pot - a.pot;
  });
  var scelte = [], visti = {};
  /* prima una per tipo, seguendo la priorità del ruolo */
  ordine.forEach(function (tp) {
    var t = pool.filter(function (x) { return x.tipo === tp && !visti[x.id]; })[0];
    if (t && scelte.length < SLOT) { scelte.push(t.id); visti[t.id] = 1; }
  });
  /* poi si riempie con le più potenti che restano */
  pool.forEach(function (t) { if (scelte.length < SLOT && !visti[t.id]) { scelte.push(t.id); visti[t.id] = 1; } });
  g.eq = scelte;
  return scelte;
}
function fatica(g) { return typeof g.fat === 'number' ? g.fat : (g.fat = 100); }
function riposoCompleto() { S.rosa.forEach(function (g) { g.fat = 100; g.parlato = false; }); }
function faticaMedia() {
  if (!S.rosa.length) return 100;
  var t = 0; S.rosa.forEach(function (g) { t += fatica(g); });
  return Math.round(t / S.rosa.length);
}
function livelloMedio() {
  var tit = S.titolari.map(function (id) { return S.gioc(id); }).filter(Boolean);
  if (!tit.length) return 1;
  var t = 0; tit.forEach(function (g) { t += g.lv; });
  return Math.round(t / tit.length);
}
function mediaLv() {
  if (!S.rosa.length) return 1;
  var t = 0; S.rosa.forEach(function (g) { t += g.lv; });
  return Math.round(t / S.rosa.length);
}
function prossimoNumero() {
  var usati = {}; S.rosa.forEach(function (g) { usati[g.numero] = 1; });
  for (var i = 1; i < 40; i++) if (!usati[i]) return i;
  return S.rosa.length + 1;
}

/* Sceglie automaticamente gli undici, rispettando la formazione. */
function aggiornaTitolari() {
  var f = IE.formazioni[S.formazione] || IE.formazioni['4-4-2'];
  var voluti = f.linee, scelti = [], usati = {};
  var manuale = (S.titolari || []).filter(function (id) { return S.ha(id); });
  /* conserva le scelte manuali valide */
  var conta = { PT: 0, DF: 0, CC: 0, AT: 0 };
  manuale.forEach(function (id) {
    var g = S.gioc(id);
    if (conta[g.ruolo] < voluti[g.ruolo]) { scelti.push(id); usati[id] = 1; conta[g.ruolo]++; }
  });
  ['PT', 'DF', 'CC', 'AT'].forEach(function (r) {
    var pool = S.rosa.filter(function (g) { return g.ruolo === r && !usati[g.id]; })
      .sort(function (a, b) { return IE.valutazione(b) - IE.valutazione(a); });
    while (conta[r] < voluti[r] && pool.length) { var g = pool.shift(); scelti.push(g.id); usati[g.id] = 1; conta[r]++; }
  });
  /* se mancano ancora giocatori, riempi con chiunque */
  if (scelti.length < 11) {
    S.rosa.filter(function (g) { return !usati[g.id]; })
      .sort(function (a, b) { return IE.valutazione(b) - IE.valutazione(a); })
      .forEach(function (g) { if (scelti.length < 11) { scelti.push(g.id); usati[g.id] = 1; } });
  }
  S.titolari = scelti.slice(0, 11);
}

/* ============================================================
   NAVIGAZIONE
   ============================================================ */
G.vai = function (v) { S.vista = v; salva(); render(); };

function capitolo() {
  return IE.capitoli.filter(function (c) { return c.n === S.cap; })[0] || IE.capitoli[IE.capitoli.length - 1];
}

function iniziaCapitolo(n) {
  S.cap = n;
  var c = capitolo();
  S.obiettivo = c.obiettivo || '';
  S.luoghiFatti = {};
  if (c.apertura) apriScena(c.apertura); else G.vai('hub');
}

function apriScena(id) {
  var sc = IE.storia.scene[id];
  if (!sc) { G.vai('hub'); return; }
  S.scena = id; S.riga = 0; S.vista = 'storia';
  salva(); render();
}

function finiScena() {
  var sc = IE.storia.scene[S.scena];
  applica(sc.eff);
  var poi = sc.poi;
  S.scena = null;
  if (!poi) { G.vai('hub'); return; }
  if (typeof poi === 'string') { apriScena(poi); return; }
  if (poi.capitolo) { salva(); iniziaCapitolo(poi.capitolo); return; }
  if (poi.partita) { avviaPartita(poi.partita); return; }
  G.vai('hub');
}

/* ============================================================
   RENDER — instradamento
   ============================================================ */
function render() {
  schermo = $('#schermo'); barra = $('#barra');
  var v = S ? S.vista : 'titolo';
  if (v === 'titolo' || v === 'creazione') barra.classList.add('nascosta');
  else { barra.classList.remove('nascosta'); disegnaBarra(); }
  var f = ({
    titolo: vistaTitolo, creazione: vistaCreazione, storia: vistaStoria, hub: vistaHub,
    squadra: vistaSquadra, giocatore: vistaGiocatore, formazione: vistaFormazione,
    allenamento: vistaAllenamento, spogliatoio: vistaSpogliatoio, partita: vistaPartita,
    finepartita: vistaFinePartita, opzioni: vistaOpzioni, amichevoli: vistaAmichevoli,
    risveglio: vistaRisveglio, contatti: vistaContatti, prepartita: vistaPrePartita
  })[v] || vistaHub;
  schermo.innerHTML = '';
  f();
  window.scrollTo(0, 0);
}
G.render = render;

function disegnaBarra() {
  var c = capitolo();
  $('#barra-stemma').textContent = S.stemma || '⚡';
  $('#barra-tit').innerHTML = esc(S.nomeSquadra) + '<small>Cap. ' + c.n + ' · ' + esc(c.titolo) + ' · ' + esc(c.periodo || '') + '</small>';
  $('#barra-ris').innerHTML =
    '<span class="gettone">👥 <b>' + S.rosa.length + '</b></span>' +
    '<span class="gettone">💚 <b>' + S.spirito + '</b></span>' +
    (S.sblocchi.allenamento ? '<span class="gettone">🫱 <b>' + (S.scout || 0) + '</b></span>' : '');
}

/* ============================================================
   SCHERMATA DEL TITOLO
   ============================================================ */
function vistaTitolo() {
  var salvato = localStorage.getItem(CHIAVE);
  var h = el('<div class="centro" style="padding-top:34px"></div>');
  h.innerHTML =
    '<div class="fulmine">⚡</div>' +
    '<div class="titolone">AMANOME ELEVEN</div>' +
    '<div class="tenue" style="margin-bottom:4px">Undici nomi</div>' +
    '<p class="picc fioco" style="max-width:420px;margin:14px auto 22px">' +
    'Un paese di quattrocentododici abitanti. Una scuola con trentotto studenti.<br>' +
    'Dietro la palestra, un prato con due porte arrugginite.<br>Il resto lo devi fare tu.</p>';
  schermo.appendChild(h);
  var box = el('<div class="pannello"></div>');
  if (salvato) {
    box.appendChild(bt('Continua', 'Riprendi dal punto in cui eri.', function () {
      S = carica(); if (!S) { alert('Salvataggio illeggibile.'); return; }
      if (!S.vista || S.vista === 'titolo') S.vista = 'hub';
      if (S.partitaPendente) { var c = S.partitaPendente; S.vista = 'hub'; avviaPartita(c); return; }
      if (S.vista === 'partita') S.vista = 'hub';
      render();
    }, 'primario'));
  }
  box.appendChild(bt(salvato ? 'Nuova storia' : 'Comincia', salvato ? 'Cancella il salvataggio e ricomincia da aprile.' : 'Aprile. Primo lunedì.', function () {
    if (salvato && !confirm('Cancello il salvataggio e ricomincio da capo?')) return;
    S = metodi(nuovoStato()); S.vista = 'creazione'; G.crea = { passo: 0 }; render();
  }, salvato ? '' : 'primario'));
  box.appendChild(bt('Come si gioca', 'Regole, duelli, elementi.', function () { mostraAiuto(); }, 'piatta'));
  schermo.appendChild(box);
  schermo.appendChild(el('<p class="nota centro">Gioco di fan, non ufficiale, ispirato all\'universo dei primi tre Inazuma Eleven.<br>Funziona senza rete: i salvataggi restano su questo dispositivo.</p>'));
}

function bt(testo, sotto, fn, cls) {
  var b = document.createElement('button');
  b.className = 'bt' + (cls ? ' ' + cls : '');
  b.innerHTML = esc(testo) + (sotto ? '<small>' + esc(sotto) + '</small>' : '');
  b.onclick = fn;
  return b;
}

function velo(html, dopo) {
  var v = el('<div class="velo"><div class="box">' + html + '</div></div>');
  v.onclick = function (e) { if (e.target === v) { v.remove(); if (dopo) dopo(); } };
  document.body.appendChild(v);
  return v;
}
function mostraAiuto() {
  velo('<h2>Come si gioca</h2>' +
    '<p class="picc"><b>La partita</b> è una catena di duelli. Chi ha la palla sceglie: dribbling, passaggio o tiro. ' +
    'Chi difende sceglie come fermarlo. Vince chi somma di più fra statistiche, tecnica speciale, elemento e fortuna.</p>' +
    '<p class="picc"><b>Le zone</b> sono quattro: difesa, centrocampo, trequarti, area. Ogni duello vinto ti sposta avanti di una zona. Si tira dalla trequarti (male) o dall\'area (bene).</p>' +
    '<p class="picc"><b>Le tecniche</b> costano PT. Finiti i PT si gioca normale. Il fiato (PE) cala a ogni contrasto e abbassa tutte le statistiche.</p>' +
    '<p class="picc"><b>Gli elementi</b>: 🔥 Fuoco batte 🌲 Bosco batte 🌀 Aria batte ⛰️ Terra batte 🔥 Fuoco. Il vantaggio vale circa il 15%.</p>' +
    '<p class="picc"><b>Fra una partita e l\'altra</b> hai un certo numero di giorni: allenamenti (statistiche) e chiacchiere nello spogliatoio (affiatamento, che sblocca le tecniche combinate).</p>' +
    '<button class="bt primario" onclick="this.closest(\'.velo\').remove()">Ho capito</button>');
}

/* ============================================================
   CREAZIONE DEL PERSONAGGIO
   ============================================================ */
G.crea = { passo: 0 };
function vistaCreazione() {
  var c = G.crea;
  c.dati = c.dati || {
    nome: '', ruolo: 'CC', el: 'aria', origine: 'tribuna', numero: 10, squadra: 'Amanome Eleven',
    volto: { pelle: 'media', capelli: 'castano', taglio: 'punte', occhi: 'decisi', bocca: 'sorriso', extra: 'niente' }
  };
  var passi = ['Chi sei', 'Che faccia hai', 'Il ruolo', 'L\'elemento', 'Da dove vieni', 'La prima tecnica', 'La squadra', 'Pronto'];
  schermo.appendChild(el('<div class="centro" style="margin-bottom:12px">' +
    '<div class="etichetta">Passo ' + (c.passo + 1) + ' di ' + passi.length + '</div>' +
    '<h1>' + esc(passi[c.passo]) + '</h1></div>'));
  var box = el('<div class="pannello"></div>');
  schermo.appendChild(box);

  /* ---- 0. nome ---- */
  if (c.passo === 0) {
    box.appendChild(el('<p class="picc tenue">Aprile, primo lunedì. Sei in seconda media alla scuola di Amanome: quattrocentododici abitanti, tre ore di corriera dalla città.</p>'));
    box.appendChild(el('<div class="etichetta">Il tuo nome</div>'));
    var inp = el('<input type="text" maxlength="24" placeholder="Nome e cognome">');
    inp.value = c.dati.nome; box.appendChild(inp);
    inp.oninput = function () { c.dati.nome = inp.value; };
    box.appendChild(el('<div style="height:12px"></div>'));
    box.appendChild(bt('Avanti', null, function () {
      c.dati.nome = (inp.value || '').trim();
      if (c.dati.nome.length < 2) { alert('Serve un nome.'); return; }
      c.passo++; render();
    }, 'primario'));
  }

  /* ---- 1. aspetto ---- */
  else if (c.passo === 1) {
    var v = c.dati.volto;
    box.appendChild(el('<div class="centro" style="margin-bottom:12px">' +
      '<div class="volto-grande" style="margin:0 auto">' + IE.volto(v, { maglia: '#2f9e63' }) + '</div>' +
      '<div class="picc tenue" style="margin-top:6px">' + esc(c.dati.nome) + '</div></div>'));

    function chips(etichetta, campo, valori, nomi) {
      box.appendChild(el('<div class="etichetta">' + etichetta + '</div>'));
      var r = el('<div class="chip-riga"></div>');
      valori.forEach(function (val, i) {
        var b = el('<button class="mini' + (v[campo] === val ? ' on' : '') + '">' + esc((nomi && nomi[i]) || val) + '</button>');
        b.onclick = function () { v[campo] = val; render(); };
        r.appendChild(b);
      });
      box.appendChild(r);
    }
    function colori(etichetta, campo, tavola) {
      box.appendChild(el('<div class="etichetta">' + etichetta + '</div>'));
      var r = el('<div class="chip-riga"></div>');
      Object.keys(tavola).forEach(function (k) {
        var b = el('<button class="pastiglia' + (v[campo] === k ? ' on' : '') + '" style="background:' + tavola[k] + '" title="' + k + '"></button>');
        b.onclick = function () { v[campo] = k; render(); };
        r.appendChild(b);
      });
      box.appendChild(r);
    }

    chips('Taglio', 'taglio', IE.tagli,
      ['corti', 'a punte', 'caschetto', 'lunghi', 'coda', 'mossi', 'rasati', 'ciuffo', 'raccolti', 'radi', 'treccine', 'ricci']);
    colori('Colore dei capelli', 'capelli', IE.capelliCol);
    colori('Incarnato', 'pelle', IE.pelli);
    chips('Sguardo', 'occhi', IE.occhiTipi);
    chips('Bocca', 'bocca', IE.bocche);
    chips('Dettaglio', 'extra', IE.dettagli);

    var fila = el('<div class="btfila" style="margin-top:6px"></div>');
    fila.appendChild(bt('🎲  Sorteggia', null, function () {
      var n = IE.voltoCasuale();
      for (var k in n) v[k] = n[k];
      render();
    }, 'piatta'));
    fila.appendChild(bt('Avanti', null, function () { c.passo++; render(); }, 'primario'));
    box.appendChild(fila);
  }

  /* ---- 2. ruolo ---- */
  else if (c.passo === 2) {
    box.appendChild(el('<p class="picc tenue">Dove ti metti in campo. Cambia come cresci e che tecniche impari.</p>'));
    ['PT', 'DF', 'CC', 'AT'].forEach(function (r) {
      box.appendChild(bt(IE.ruoli[r].nome, IE.ruoli[r].desc,
        function () { c.dati.ruolo = r; c.passo++; render(); }, c.dati.ruolo === r ? 'primario' : ''));
    });
  }

  /* ---- 3. elemento ---- */
  else if (c.passo === 3) {
    box.appendChild(el('<p class="picc tenue">Fuoco batte Bosco, Bosco batte Aria, Aria batte Terra, Terra batte Fuoco.</p>'));
    IE.listaElementi.forEach(function (e) {
      var dd = IE.elementi[e];
      box.appendChild(bt(dd.icona + '  ' + dd.nome, 'Batte ' + IE.elementi[dd.batte].nome + '. Le tue tecniche partono da qui.',
        function () { c.dati.el = e; c.passo++; render(); }, c.dati.el === e ? 'primario' : ''));
    });
  }

  /* ---- 4. origine ---- */
  else if (c.passo === 4) {
    box.appendChild(el('<p class="picc tenue">Perché sei ad Amanome, e cosa ti porti dietro.</p>'));
    IE.origini.forEach(function (o) {
      var b = Object.keys(o.bonus).map(function (k) { return IE.stat[k].nome + ' +' + o.bonus[k]; }).join(', ');
      box.appendChild(bt(o.nome, o.desc + '  ·  ' + b,
        function () { c.dati.origine = o.id; c.passo++; render(); }, c.dati.origine === o.id ? 'primario' : ''));
    });
  }

  /* ---- 5. prima tecnica ---- */
  else if (c.passo === 5) {
    var lista = IE.tecnicheIniziali[c.dati.ruolo];
    var tipo = c.dati.ruolo === 'PT' ? 'parata' : c.dati.ruolo === 'DF' ? 'blocco' : c.dati.ruolo === 'AT' ? 'tiro' : 'drib';
    var extra = IE.tecnicaElemento[c.dati.el][tipo];
    box.appendChild(el('<p class="picc tenue">Ne scegli una. La seconda te la dà il tuo elemento: <b>' +
      esc(IE.tec(extra).nome) + '</b>.</p>'));
    lista.forEach(function (id) {
      var t = IE.tec(id);
      box.appendChild(bt(t.nome, t.desc + '  ·  potenza ' + t.pot + ', costo ' + t.tp + ' PT',
        function () { c.dati.tecnica = id; c.passo++; render(); }, c.dati.tecnica === id ? 'primario' : ''));
    });
  }

  /* ---- 6. squadra ---- */
  else if (c.passo === 6) {
    box.appendChild(el('<p class="picc tenue">Il club non esiste ancora. Ma un nome ce l\'ha già, nella tua testa, da un pezzo.</p>'));
    box.appendChild(el('<div class="etichetta">Nome della squadra</div>'));
    var i2 = el('<input type="text" maxlength="28">'); i2.value = c.dati.squadra; box.appendChild(i2);
    box.appendChild(el('<div style="height:10px"></div>'));
    box.appendChild(el('<div class="etichetta">Numero di maglia</div>'));
    var i3 = el('<input type="text" maxlength="2" inputmode="numeric">'); i3.value = c.dati.numero; box.appendChild(i3);
    box.appendChild(el('<div style="height:12px"></div>'));
    box.appendChild(bt('Avanti', null, function () {
      c.dati.squadra = (i2.value || 'Amanome Eleven').trim();
      var num = parseInt(i3.value, 10); c.dati.numero = (num >= 1 && num <= 99) ? num : 10;
      c.passo++; render();
    }, 'primario'));
  }

  /* ---- 7. riepilogo ---- */
  else {
    var g = creaTu(c.dati);
    var st = IE.tutteStat(g);
    box.appendChild(el('<div class="riga" style="gap:12px;margin-bottom:12px">' +
      ritrattoHtml(g, 'gr') +
      '<div><div style="font-weight:bold;font-size:19px">' + esc(g.nome) + '</div>' +
      '<div class="picc tenue"><span class="ruolo r-' + g.ruolo + '">' + g.ruolo + '</span>' +
      IE.elementi[g.el].icona + ' ' + IE.elementi[g.el].nome + ' · maglia n. ' + g.numero + '</div></div></div>'));
    box.appendChild(el('<div>' + statHtml(st, g.ruolo) + '</div>'));
    box.appendChild(el('<div class="etichetta" style="margin-top:10px">Tecniche</div>'));
    g.tec.forEach(function (id) {
      var t = IE.tec(id);
      box.appendChild(el('<div class="picc" style="margin-bottom:4px">' + IE.elementi[t.el].icona + ' <b>' + esc(t.nome) +
        '</b> <span class="tenue">· ' + esc(t.desc) + '</span></div>'));
    });
    box.appendChild(el('<hr>'));
    box.appendChild(bt('Comincia', 'Primo lunedì di aprile.', function () {
      S.io = g; S.nomeSquadra = c.dati.squadra;
      S.sigla = (c.dati.squadra.replace(/[^A-Za-zÀ-ÿ]/g, '').slice(0, 3) || 'AMA').toUpperCase();
      S.rosa = [g]; normalizzaRosa(); aggiornaTitolari();
      iniziaCapitolo(1);
    }, 'primario'));
  }

  if (c.passo > 0 && c.passo < 7) schermo.appendChild(bt('◀ Indietro', null, function () { c.passo--; render(); }, 'piatta'));
}


/* ============================================================
   PEZZI RIUSABILI
   ============================================================ */
function ritrattoHtml(g, cls) {
  var el2 = g.el ? '<span class="el">' + IE.elementi[g.el].icona + '</span>' : '';
  var v = IE.voltoDi(g);
  var faccia = IE.volto(v, { maglia: v.maglia || g.col });
  var anello = g.el && IE.elementi[g.el] ? IE.elementi[g.el].col : 'transparent';
  return '<div class="ritratto ' + (cls || '') + '" style="--anello:' + anello +
    ';background:linear-gradient(150deg,' + (g.col || '#888') + ',' + ombra(g.col || '#888') + ')">' +
    faccia + el2 + '</div>';
}
function ombra(hex) {
  try {
    var n = parseInt(hex.slice(1), 16);
    var r = Math.round(((n >> 16) & 255) * 0.55), gg = Math.round(((n >> 8) & 255) * 0.55), b = Math.round((n & 255) * 0.55);
    return 'rgb(' + r + ',' + gg + ',' + b + ')';
  } catch (e) { return '#333'; }
}
function statHtml(st, ruolo) {
  return IE.ordineStat.filter(function (k) { return k !== 'par' || ruolo === 'PT'; }).map(function (k) {
    var v = st[k], p = Math.min(100, v / 1.3);
    return '<div class="stat"><span class="n">' + IE.stat[k].nome + '</span>' +
      '<span class="barra"><i style="width:' + p + '%;background:' + IE.stat[k].col + '"></i></span>' +
      '<span class="v">' + v + '</span></div>';
  }).join('');
}
function schedaGiocatore(g, dx, fn) {
  var b = document.createElement('button');
  b.className = 'scheda';
  b.innerHTML = ritrattoHtml(g) +
    '<div class="info"><div class="nome">' + esc(g.nome) + (g.capitano ? ' <span class="tenue">(C)</span>' : '') + '</div>' +
    '<div class="sotto"><span class="ruolo r-' + g.ruolo + '">' + g.ruolo + '</span>n. ' + g.numero + ' · Lv ' + g.lv +
    ' · val. ' + IE.valutazione(g) + '</div></div>' +
    '<div class="dx">' + (dx || '') + '</div>';
  if (fn) b.onclick = fn; else b.style.cursor = 'default';
  return b;
}

/* ============================================================
   STORIA (chat)
   ============================================================ */
function vistaStoria() {
  var sc = IE.storia.scene[S.scena];
  if (!sc) { G.vai('hub'); return; }
  schermo.appendChild(el('<div class="luogo">' + esc(sc.luogo || '') + '</div>'));
  var chat = el('<div id="chat"></div>');
  schermo.appendChild(chat);
  var fine = S.riga >= sc.righe.length;
  for (var i = 0; i < Math.min(S.riga + 1, sc.righe.length); i++) chat.appendChild(battutaHtml(sc.righe[i]));

  var piede = el('<div id="avanti"></div>');
  schermo.appendChild(piede);
  if (S.riga < sc.righe.length - 1) {
    piede.appendChild(bt('Avanti ▸', null, function () { S.riga++; salva(); render(); ancoraGiu(); }, 'primario'));
    var salta = bt('Salta la scena', null, function () {
      S.riga = sc.righe.length - 1; salva(); render(); ancoraGiu();
    }, 'piatta');
    salta.style.marginTop = '4px';
    piede.appendChild(salta);
  } else {
    if (sc.scelte && sc.scelte.length) {
      var d = el('<div class="scelte"><div class="etichetta">Cosa dici</div></div>');
      sc.scelte.forEach(function (s) {
        d.appendChild(bt(s.t, null, function () {
          applica(sc.eff); applica(s.eff);
          S.scena = null;
          if (s.vai) apriScena(s.vai); else G.vai('hub');
        }));
      });
      piede.appendChild(d);
    } else {
      piede.appendChild(bt('Continua ▸', null, function () { finiScena(); }, 'primario'));
    }
  }
  ancoraGiu();
}
function ancoraGiu() {
  setTimeout(function () { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }, 30);
}
function testoScena(t) {
  if (t.indexOf('{') < 0) return t;
  var sc = IE.storia.scene[S.scena] || {};
  var nuovi = 0;
  (sc.eff || []).forEach(function (e) { if (e.recluta && !S.ha(e.recluta)) nuovi++; });
  return t.replace(/\{N\}/g, S.rosa.length + nuovi)
          .replace(/\{SQ\}/g, S.nomeSquadra)
          .replace(/\{IO\}/g, S.io ? S.io.nome : 'tu');
}
function battutaHtml(r) {
  r = { chi: r.chi, t: testoScena(r.t), cls: r.cls };
  if (r.chi === 'narr') return el('<div class="battuta narr ' + (r.cls || '') + '"><div class="bolla">' + esc(r.t) + '</div></div>');
  var p, io = false;
  if (r.chi === 'tu') { p = S.io || { nome: 'Tu', corto: 'Tu', col: '#ffd23f' }; io = true; }
  else p = IE.personaggi[r.chi] || { nome: r.chi, corto: r.chi, col: '#888' };
  return el('<div class="battuta ' + (io ? 'io ' : '') + (r.cls || '') + '">' +
    ritrattoHtml(p, 'pc') +
    '<div class="corpo"><div class="chi">' + esc(p.nome) + '</div>' +
    '<div class="bolla">' + esc(r.t) + '</div></div></div>');
}

/* ============================================================
   HUB
   ============================================================ */
function vistaHub() {
  var c = capitolo();
  schermo.appendChild(el('<div class="pannello stretto"><div class="etichetta">Capitolo ' + c.n + ' · ' + esc(c.periodo || '') + '</div>' +
    '<h2>' + esc(c.titolo) + '</h2>' +
    '<div class="picc tenue">' + esc(S.obiettivo || c.obiettivo || '') + '</div></div>'));

  if (S.partitaPendente) {
    var pp = IE.squadre[S.partitaPendente.avv];
    var rip = el('<div class="pannello"></div>');
    rip.appendChild(bt('⚽  Torna alla partita', 'Ti stanno aspettando: ' + esc(pp ? pp.nome : ''), function () {
      var cfg = S.partitaPendente; S.partitaPendente = null; avviaPartita(cfg);
    }, 'verde'));
    schermo.appendChild(rip);
  }

  /* luoghi della storia */
  var luoghi = (c.luoghi || []);
  var vis = luoghi.filter(function (l) { return !S.luoghiFatti[l.id] && (!l.se || l.se(S)); });
  var bloccati = luoghi.filter(function (l) { return !S.luoghiFatti[l.id] && l.se && !l.se(S) && l.bloccoTxt; });

  if (vis.length) {
    var box = el('<div class="pannello"><div class="etichetta">Dove vai</div></div>');
    vis.forEach(function (l) {
      box.appendChild(bt(l.icona + '  ' + l.nome, l.principale ? 'Fa avanzare la storia.' : null, function () {
        S.luoghiFatti[l.id] = true;
        applica(l.eff);
        apriScena(l.scena);
      }, l.principale ? 'verde' : ''));
    });
    schermo.appendChild(box);
  }
  if (bloccati.length) {
    var bb = el('<div class="pannello stretto"><div class="etichetta">Non ancora</div></div>');
    bloccati.forEach(function (l) {
      bb.appendChild(el('<div class="picc tenue" style="margin-bottom:5px">' + l.icona + ' <b>' + esc(l.nome) + '</b> — ' + esc(l.bloccoTxt) + '</div>'));
    });
    schermo.appendChild(bb);
  }

  /* attività */
  var att = el('<div class="pannello"><div class="etichetta">Il club</div></div>');
  if (S.sblocchi.allenamento) {
    var fm = faticaMedia();
    var ba = bt('🏃  Allenamento', fm > 25 ? 'Fiato della squadra: ' + fm + ' su 100.' : 'Sono a pezzi: serve una partita per rifiatare.',
      function () { G.vai('allenamento'); });
    var parlabili = S.rosa.filter(function (g) { return g.id !== 'tu' && !g.parlato; }).length;
    var bs = bt('💬  Spogliatoio', parlabili ? parlabili + ' con cui non hai ancora parlato.' : 'Hai già parlato con tutti.',
      function () { G.vai('spogliatoio'); });
    if (!parlabili) bs.classList.add('disab');
    att.appendChild(ba); att.appendChild(bs);
    if (S.battute.length) att.appendChild(bt('🫱  Contatti', 'Chiama in squadra chi hai già battuto. Hai ' + (S.scout || 0) + ' contatti.',
      function () { G.vai('contatti'); }));
  }
  att.appendChild(bt('👥  Rosa', S.rosa.length + ' tesserati.', function () { G.vai('squadra'); }));
  att.appendChild(bt('📋  Formazione', S.formazione + ' · ' + (IE.formazioni[S.formazione] || {}).nome, function () { G.vai('formazione'); }));
  if (S.sblocchi.amichevoli) att.appendChild(bt('⚽  Amichevoli', 'Rigioca contro chiunque tu abbia incontrato.', function () { G.vai('amichevoli'); }));
  att.appendChild(bt('⚙️  Salvataggio e opzioni', null, function () { G.vai('opzioni'); }, 'piatta'));
  schermo.appendChild(att);

  if (S.storico.length) {
    var st = el('<div class="pannello stretto"><div class="etichetta">Risultati</div></div>');
    S.storico.slice(-6).reverse().forEach(function (r) {
      var cls = r.esito === 'vittoria' ? 'buono' : r.esito === 'sconfitta' ? 'male' : '';
      st.appendChild(el('<div class="picc" style="margin-bottom:4px"><b class="' + (cls === 'buono' ? 'gol' : '') + '">' +
        r.gol + '-' + r.sub + '</b> <span class="tenue">contro ' + esc(r.avv) + '</span></div>'));
    });
    schermo.appendChild(st);
  }
}

/* ============================================================
   ROSA E SCHEDA
   ============================================================ */
function vistaSquadra() {
  schermo.appendChild(el('<h2>Rosa — ' + esc(S.nomeSquadra) + '</h2>'));
  var tit = el('<div class="pannello"><div class="etichetta">In campo (' + S.titolari.length + '/11)</div></div>');
  S.titolari.forEach(function (id) {
    var g = S.gioc(id); if (!g) return;
    tit.appendChild(schedaGiocatore(g, 'Lv ' + g.lv + '<br><span class="fioco">fiato ' + fatica(g) + '</span>', function () { S.selez = id; G.vai('giocatore'); }));
  });
  schermo.appendChild(tit);
  var pan = S.rosa.filter(function (g) { return S.titolari.indexOf(g.id) < 0; });
  if (pan.length) {
    var pb = el('<div class="pannello"><div class="etichetta">Panchina</div></div>');
    pan.forEach(function (g) { pb.appendChild(schedaGiocatore(g, 'Lv ' + g.lv + '<br><span class="fioco">fiato ' + fatica(g) + '</span>', function () { S.selez = g.id; G.vai('giocatore'); })); });
    schermo.appendChild(pb);
  }
  schermo.appendChild(bt('◀ Torna', null, function () { G.vai('hub'); }, 'piatta'));
}

function vistaGiocatore() {
  var g = S.gioc(S.selez);
  if (!g) { G.vai('squadra'); return; }
  var m = IE.personaggi[g.id] || {};
  var st = IE.tutteStat(g);
  var box = el('<div class="pannello"></div>');
  box.appendChild(el('<div class="riga" style="gap:12px;margin-bottom:10px">' + ritrattoHtml(g, 'gr') +
    '<div style="flex:1"><div style="font-weight:bold;font-size:19px">' + esc(g.nome) + '</div>' +
    '<div class="picc tenue"><span class="ruolo r-' + g.ruolo + '">' + g.ruolo + '</span>n. ' + g.numero +
    ' · ' + IE.elementi[g.el].icona + ' ' + IE.elementi[g.el].nome + '</div>' +
    '<div class="picc tenue">Livello ' + g.lv + ' · ' + g.exp + '/' + expNec(g.lv) + ' esperienza</div></div>' +
    '<div class="centro"><div style="font-size:26px;font-weight:bold">' + IE.valutazione(g) + '</div><div class="picc fioco">val.</div></div></div>'));
  box.appendChild(el('<div class="stat"><span class="n">Affiatamento</span><span class="barra"><i style="width:' +
    (g.am || 0) + '%;background:#ff8fb0"></i></span><span class="v">' + (g.am || 0) + '</span></div>'));
  var fq = fatica(g);
  box.appendChild(el('<div class="stat"><span class="n">Fiato</span><span class="barra"><i style="width:' + fq +
    '%;background:' + (fq > 60 ? '#3fd07a' : fq > 30 ? '#ffd23f' : '#ff5468') + '"></i></span><span class="v">' + fq + '</span></div>'));
  box.appendChild(el('<hr>'));
  box.appendChild(el(statHtml(st, g.ruolo)));
  box.appendChild(el('<div class="picc tenue" style="margin-top:8px">PT ' + IE.tpMax(g) + ' · PE ' + IE.fpMax(g) + '</div>'));
  schermo.appendChild(box);

  if (m.bio) schermo.appendChild(el('<div class="pannello stretto"><div class="etichetta">Chi è</div><p class="picc" style="margin:0">' + esc(m.bio) + '</p></div>'));

  if (!g.eq || !g.eq.length) equipaggiaAuto(g);
  var tipi = { tiro: 'Tiro', drib: 'Dribbling', blocco: 'Blocco', parata: 'Parata' };
  var tb = el('<div class="pannello"><div class="etichetta">Tecniche in campo — ' + g.eq.length + ' su ' + SLOT + '</div>' +
    '<div class="picc fioco" style="margin:-4px 0 8px">In partita può usare solo queste quattro. Tocca una tecnica per metterla dentro o toglierla.</div></div>');
  if (!g.tec.length) tb.appendChild(el('<div class="picc tenue">Nessuna. Ancora.</div>'));

  var ordinate = g.tec.map(IE.tec).filter(Boolean).sort(function (a, b) {
    var ea = g.eq.indexOf(a.id) >= 0, eb = g.eq.indexOf(b.id) >= 0;
    if (ea !== eb) return ea ? -1 : 1;
    if (a.tipo !== b.tipo) return a.tipo.localeCompare(b.tipo);
    return b.pot - a.pot;
  });
  ordinate.forEach(function (t) {
    var dentro = g.eq.indexOf(t.id) >= 0;
    var firma = !!t.soloDi;
    var b = document.createElement('button');
    b.className = 'bt' + (dentro ? ' primario' : '');
    b.style.textAlign = 'left';
    b.innerHTML = '<div class="riga tra"><span>' + (dentro ? '● ' : '○ ') + IE.elementi[t.el].icona + ' <b>' + esc(t.nome) + '</b>' +
      (firma ? ' <span class="picc">— firma</span>' : '') + '</span><span class="picc">' + t.tp + ' PT</span></div>' +
      '<small>' + tipi[t.tipo] + ' · potenza ' + t.pot +
      (t.com && t.com.length ? ' · con ' + t.com.map(function (c) { return esc((IE.personaggi[c] || {}).corto || c); }).join(' e ') : '') +
      (t.sePerde ? ' · +' + t.sePerde + ' se siete sotto' : '') +
      (t.seSubito ? ' · +' + t.seSubito + ' dopo aver preso gol' : '') +
      (t.seFresco ? ' · +' + t.seFresco + ' con il fiato pieno' : '') +
      '<br>' + esc(t.desc) + '</small>';
    b.onclick = function () {
      var i = g.eq.indexOf(t.id);
      if (i >= 0) g.eq.splice(i, 1);
      else if (g.eq.length >= SLOT) { alert('Quattro sono il massimo: togline una.'); return; }
      else g.eq.push(t.id);
      salva(); render();
    };
    tb.appendChild(b);
  });
  schermo.appendChild(tb);

  var pross = (IE.crescitaTecniche[g.id] || []).filter(function (x) { return x.tec && g.tec.indexOf(x.tec) < 0; })[0];
  if (pross) schermo.appendChild(el('<div class="avviso picc">Con affiatamento ' + pross.am + ' imparerà <b>' + esc(IE.tec(pross.tec).nome) + '</b>.</div>'));

  var fi = IE.firme[g.id];
  if (fi && !(S.risvegli || {})[g.id]) {
    var manca = g.lv < fi.lv;
    schermo.appendChild(el('<div class="avviso picc"><b>Ha una tecnica sua</b> che non ha ancora tirato fuori. ' +
      esc(fi.nota) + (manca ? ' Gli serve almeno il livello ' + fi.lv + ' (ora ' + g.lv + ').' : ' È pronto: può succedere da un momento all\'altro.') + '</div>'));
  }

  schermo.appendChild(bt('◀ Torna alla rosa', null, function () { G.vai('squadra'); }, 'piatta'));
}

/* ============================================================
   FORMAZIONE
   ============================================================ */
function vistaFormazione() {
  schermo.appendChild(el('<h2>Formazione</h2>'));
  var box = el('<div class="pannello"><div class="etichetta">Schema</div></div>');
  Object.keys(IE.formazioni).forEach(function (k) {
    var f = IE.formazioni[k];
    box.appendChild(bt(f.nome, f.desc + '  ·  difesa ×' + f.dif.toFixed(2) + ', attacco ×' + f.att.toFixed(2),
      function () { S.formazione = k; aggiornaTitolari(); salva(); render(); }, S.formazione === k ? 'primario' : ''));
  });
  schermo.appendChild(box);

  var f = IE.formazioni[S.formazione];
  var conta = { PT: 0, DF: 0, CC: 0, AT: 0 };
  S.titolari.forEach(function (id) { var g = S.gioc(id); if (g) conta[g.ruolo]++; });
  var ok = ['PT', 'DF', 'CC', 'AT'].every(function (r) { return conta[r] === f.linee[r]; });
  schermo.appendChild(el('<div class="' + (ok ? 'avviso buono' : 'avviso') + ' picc">Titolari: ' +
    ['PT', 'DF', 'CC', 'AT'].map(function (r) { return r + ' ' + conta[r] + '/' + f.linee[r]; }).join(' · ') +
    (ok ? ' — a posto.' : ' — non corrisponde allo schema: le statistiche di reparto ne risentono.') + '</div>'));

  var g11 = el('<div class="pannello"><div class="etichetta">Tocca un titolare per farlo uscire, uno in panchina per farlo entrare</div></div>');
  S.titolari.forEach(function (id) {
    var g = S.gioc(id); if (!g) return;
    g11.appendChild(schedaGiocatore(g, '▼ esce', function () {
      if (S.titolari.length <= 1) return;
      S.titolari = S.titolari.filter(function (x) { return x !== id; });
      salva(); render();
    }));
  });
  schermo.appendChild(g11);
  var pan = S.rosa.filter(function (g) { return S.titolari.indexOf(g.id) < 0; });
  var pb = el('<div class="pannello"><div class="etichetta">Panchina</div></div>');
  if (!pan.length) pb.appendChild(el('<div class="picc tenue">Nessuno. Siete esattamente undici.</div>'));
  pan.forEach(function (g) {
    pb.appendChild(schedaGiocatore(g, '▲ entra', function () {
      if (S.titolari.length >= 11) { alert('Sono già undici: fai uscire qualcuno.'); return; }
      S.titolari.push(g.id); salva(); render();
    }));
  });
  schermo.appendChild(pb);
  schermo.appendChild(bt('Riempi automaticamente', null, function () { S.titolari = []; aggiornaTitolari(); salva(); render(); }, 'piatta'));
  schermo.appendChild(bt('◀ Torna', null, function () { G.vai('hub'); }, 'piatta'));
}

/* ============================================================
   ALLENAMENTO
   ============================================================ */
function vistaAllenamento() {
  schermo.appendChild(el('<h2>Allenamento</h2>'));
  schermo.appendChild(el('<div class="picc tenue" style="margin-bottom:4px">Sei e mezza del mattino. Non c\'è nessun calendario: ci si allena finché si regge in piedi, e in partita si entra comunque con il fiato pieno.</div>'));
  schermo.appendChild(barraFatica());

  var box = el('<div class="pannello"></div>');
  IE.allenamenti.forEach(function (a) {
    var chi = chiSiAllena(a);
    var pronti = chi.filter(function (g) { return fatica(g) >= a.fat; });
    var testo = a.desc + '  ·  ' + a.su.map(function (k) { return IE.stat[k].nome + ' +' + a.q; }).join(', ') +
      '  ·  costa ' + a.fat + " di fiato a testa";
    var b = bt(a.icona + '  ' + a.nome, testo + '  ·  ' + pronti.length + ' su ' + chi.length + ' in grado di farlo',
      function () { faiAllenamento(a); });
    if (!pronti.length) b.classList.add('disab');
    box.appendChild(b);
  });
  schermo.appendChild(box);

  var stanchi = S.rosa.filter(function (g) { return fatica(g) < 25; });
  if (stanchi.length) schermo.appendChild(el('<div class="avviso picc">' +
    (stanchi.length === S.rosa.length ? 'Sono tutti a pezzi.' : '<b>' + stanchi.map(function (g) { return esc(g.corto || g.nome); }).join(', ') + '</b> non reggono un altro esercizio.') +
    ' Il fiato torna al massimo dopo la prossima partita.</div>'));

  schermo.appendChild(bt('◀ Torna', null, function () { G.vai('hub'); }, 'piatta'));
}

function barraFatica() {
  var m = faticaMedia();
  var col = m > 60 ? '#3fd07a' : m > 30 ? '#ffd23f' : '#ff5468';
  return el('<div class="pannello stretto"><div class="stat" style="margin:0">' +
    '<span class="n">Fiato</span><span class="barra"><i style="width:' + m + '%;background:' + col + '"></i></span>' +
    '<span class="v">' + m + '</span></div>' +
    '<div class="picc fioco" style="margin-top:6px">Ogni esercizio consuma fiato. Si recupera tutto giocando una partita.</div></div>');
}

function chiSiAllena(a) {
  if (a.tutti) return S.rosa.slice();
  return S.rosa.filter(function (g) { return (a.ruoli || []).indexOf(g.ruolo) >= 0; });
}

function faiAllenamento(a) {
  var chi = chiSiAllena(a).filter(function (g) { return fatica(g) >= a.fat; });
  if (!chi.length) return;
  var righe = [], nuoveTec = [];
  chi.forEach(function (g) {
    g.fat = Math.max(0, fatica(g) - a.fat);
    g.allen = g.allen || {};
    a.su.forEach(function (k) {
      if (k === 'par' && g.ruolo !== 'PT') return;
      g.allen[k] = (g.allen[k] || 0) + a.q;
    });
    var r = daiExp(g, a.exp || 150);
    if (r.salito.length) righe.push(esc(g.nome) + ' sale al livello ' + g.lv + '.');
    r.imparate.forEach(function (t) { righe.push('<b>' + esc(g.nome) + ' impara ' + esc(IE.tec(t).nome) + '</b>'); });
  });
  /* qualcuno, ogni tanto, si porta a casa una tecnica nuova */
  if (Math.random() < 0.45) {
    var g2 = chi[Math.floor(Math.random() * chi.length)];
    var t2 = tecnicaNuovaPer(g2, a);
    if (t2) { g2.tec.push(t2); nuoveTec.push(esc(g2.nome) + ' ha imparato <b>' + esc(IE.tec(t2).nome) + '</b>'); }
  }
  if (a.spirito) S.spirito = Math.min(100, S.spirito + a.spirito);
  salva();

  var risveglio = cercaRisveglio('allenamento', a.id);
  velo('<h2>' + a.icona + ' ' + esc(a.nome) + '</h2>' +
    '<p class="picc">' + esc(a.desc) + '</p>' +
    '<p class="picc tenue">Hanno lavorato in ' + chi.length + '. ' +
    a.su.map(function (k) { return IE.stat[k].nome + ' +' + a.q; }).join(', ') + '. Fiato −' + a.fat + '.</p>' +
    (nuoveTec.length ? '<div class="avviso picc">' + nuoveTec.join('<br>') + '</div>' : '') +
    (righe.length ? '<div class="avviso buono picc">' + righe.join('<br>') + '</div>' : '') +
    '<button class="bt primario" id="chiudiAll">Chiudi</button>');
  document.getElementById('chiudiAll').onclick = function () {
    var v = document.querySelector('.velo'); if (v) v.remove();
    if (risveglio) mostraRisveglio(risveglio.scena, risveglio.g); else render();
  };
}

/* Una tecnica comune che quel giocatore non ha ancora e che c\'entra con l\'esercizio. */
function tecnicaNuovaPer(g, a) {
  var tipi = [];
  if (a.su.indexOf('tir') >= 0) tipi.push('tiro');
  if (a.su.indexOf('par') >= 0 && g.ruolo === 'PT') tipi.push('parata');
  if (a.su.indexOf('dif') >= 0 || a.su.indexOf('fis') >= 0) tipi.push('blocco');
  if (a.su.indexOf('ctr') >= 0 || a.su.indexOf('vel') >= 0) tipi.push('drib');
  if (!tipi.length) tipi = g.ruolo === 'PT' ? ['parata'] : ['drib'];
  if (g.ruolo === 'PT') tipi = tipi.filter(function (t) { return t === 'parata' || t === 'blocco'; });
  if (!tipi.length) return null;
  var tipo = tipi[Math.floor(Math.random() * tipi.length)];
  var pool = (IE.imparabili[tipo] || []).filter(function (id) {
    var t = IE.tec(id);
    return t && g.tec.indexOf(id) < 0 && t.pot <= 24 + g.lv * 2.2;
  });
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

/* ============================================================
   SPOGLIATOIO
   ============================================================ */
function vistaSpogliatoio() {
  schermo.appendChild(el('<h2>Spogliatoio</h2>'));
  schermo.appendChild(el('<div class="picc tenue" style="margin-bottom:10px">Una chiacchiera a testa, poi bisogna giocare. ' +
    'L\'affiatamento sblocca le tecniche combinate.</div>'));
  var box = el('<div class="pannello"></div>');
  var rimasti = 0;
  S.rosa.forEach(function (g) {
    if (g.id === 'tu') return;
    var fatto = !!g.parlato;
    if (!fatto) rimasti++;
    var sg = schedaGiocatore(g, fatto ? '✔' : 'Aff. ' + (g.am || 0) + ' ▸', function () { parlaCon(g); });
    if (fatto) sg.classList.add('disab');
    box.appendChild(sg);
  });
  schermo.appendChild(box);
  if (!rimasti) schermo.appendChild(el('<div class="avviso picc">Hai già parlato con tutti. Dopo la prossima partita ci sarà altro da dirsi.</div>'));
  schermo.appendChild(bt('◀ Torna', null, function () { G.vai('hub'); }, 'piatta'));
}

function parlaCon(g) {
  if (g.parlato) return;
  g.parlato = true;
  var frasi = IE.chiacchiere[g.id] || ['...'];
  var f = frasi[Math.floor(Math.random() * frasi.length)];
  var imparate = cresciAffiatamento(g, 12);
  S.rosa.forEach(function (x) { if (x !== g && x.id !== 'tu') cresciAffiatamento(x, 2); });
  S.spirito = Math.min(100, S.spirito + 1);
  salva();
  velo('<div class="riga" style="gap:10px;margin-bottom:10px">' + ritrattoHtml(g, 'gr') +
    '<div><div style="font-weight:bold">' + esc(g.nome) + '</div><div class="picc tenue">Affiatamento ' + g.am + '</div></div></div>' +
    '<div class="bolla" style="margin-bottom:10px">' + esc(f) + '</div>' +
    (imparate.length ? '<div class="avviso buono picc"><b>' + esc(g.nome) + ' impara ' +
      imparate.map(function (t) { return esc(IE.tec(t).nome); }).join(' e ') + '!</b></div>' : '') +
    '<button class="bt primario" onclick="this.closest(\'.velo\').remove();G.render()">Chiudi</button>');
}


/* ============================================================
   I RISVEGLI
   Ogni ragazzo ha una tecnica sua. Non la impara: gli succede.
   ============================================================ */
function cercaRisveglio(dove, eserc) {
  S.risvegli = S.risvegli || {};
  for (var i = 0; i < S.rosa.length; i++) {
    var g = S.rosa[i], f = IE.firme[g.id];
    if (!f || S.risvegli[g.id]) continue;
    if (f.dove !== dove || g.lv < f.lv) continue;
    if (dove === 'allenamento' && f.eserc !== eserc) continue;
    return { g: g, scena: f.scena, f: f };
  }
  return null;
}

function cercaRisveglioPartita() {
  S.risvegli = S.risvegli || {};
  for (var i = 0; i < P.mia.rosa.length; i++) {
    var c = P.mia.rosa[i], g = c._orig;
    if (!g) continue;
    var f = IE.firme[g.id];
    if (!f || S.risvegli[g.id] || f.dove !== 'partita' || g.lv < f.lv) continue;
    if (!IE.condizioneFirma(P, c, f.cond)) continue;
    return { g: g, clone: c, scena: f.scena, f: f };
  }
  return null;
}

function concediFirma(g, f, clone) {
  var tec = f.tec || IE.firmaTua(g.ruolo);
  if (!IE.tec(tec)) return null;
  if (g.tec.indexOf(tec) < 0) g.tec.push(tec);
  if (!g.eq || !g.eq.length) equipaggiaAuto(g);
  if (g.eq.indexOf(tec) < 0) {
    if (g.eq.length < SLOT) g.eq.push(tec);
    else {
      /* esce la più debole dello stesso tipo, altrimenti la più debole in assoluto */
      var mio = IE.tec(tec);
      var cand = g.eq.map(IE.tec).filter(Boolean);
      var stesso = cand.filter(function (t) { return t.tipo === mio.tipo; });
      var fuori = (stesso.length ? stesso : cand).sort(function (a, b) { return a.pot - b.pot; })[0];
      g.eq[g.eq.indexOf(fuori.id)] = tec;
    }
  }
  S.risvegli[g.id] = tec;
  /* se sta giocando adesso, la può usare subito */
  if (clone) { clone.tec = g.tec.slice(); clone.eq = g.eq.slice(); }
  return tec;
}

function apriRisveglio(r, ritorno) {
  G.risv = { scena: r.scena, gioc: r.g.id, riga: 0, ritorno: ritorno || 'hub', f: r.f, clone: r.clone || null };
  S.vista = 'risveglio';
  salva(); render();
}

function vistaRisveglio() {
  var d = G.risv;
  var sc = IE.storia.scene[d.scena];
  var g = S.gioc(d.gioc);
  if (!sc || !g) { S.vista = d.ritorno; render(); return; }

  schermo.appendChild(el('<div class="centro" style="margin:6px 0 10px">' +
    '<div class="etichetta">Una cosa che non si insegna</div>' +
    '<div class="volto-grande" style="margin:0 auto 8px">' + IE.volto(IE.voltoDi(g), { maglia: '#2f9e63' }) + '</div>' +
    '<h1 style="font-size:22px">' + esc(sc.titolo || g.nome) + '</h1>' +
    '<div class="picc fioco">' + esc(sc.luogo || '') + '</div></div>'));

  var chat = el('<div id="chat"></div>');
  schermo.appendChild(chat);
  for (var i = 0; i <= Math.min(d.riga, sc.righe.length - 1); i++) chat.appendChild(battutaHtml(sc.righe[i]));

  var piede = el('<div id="avanti"></div>');
  schermo.appendChild(piede);
  if (d.riga < sc.righe.length - 1) {
    piede.appendChild(bt('Avanti ▸', null, function () { d.riga++; salva(); render(); ancoraGiu(); }, 'primario'));
  } else {
    var tec = concediFirma(g, d.f, d.clone);
    var t = IE.tec(tec);
    if (t) piede.appendChild(el('<div class="pannello" style="border-color:#ffd23f">' +
      '<div class="etichetta">Tecnica nuova</div>' +
      '<div style="font-size:18px;font-weight:bold">' + IE.elementi[t.el].icona + ' ' + esc(t.nome) + '</div>' +
      '<div class="picc tenue" style="margin:3px 0 6px">' +
      ({ tiro: 'Tiro', drib: 'Dribbling', blocco: 'Blocco', parata: 'Parata' })[t.tipo] +
      ' · potenza ' + t.pot + ' · ' + t.tp + ' PT' +
      (t.sePerde ? ' · +' + t.sePerde + ' quando siete sotto' : '') +
      (t.seSubito ? ' · +' + t.seSubito + ' dopo aver preso gol' : '') +
      (t.seFresco ? ' · +' + t.seFresco + ' con il fiato pieno' : '') + '</div>' +
      '<div class="picc">' + esc(t.desc) + '</div></div>'));
    piede.appendChild(bt('Continua ▸', null, function () {
      var r = d.ritorno; G.risv = null; S.vista = r; salva(); render();
    }, 'primario'));
  }
  ancoraGiu();
}

function mostraRisveglio(scena, g) {
  apriRisveglio({ scena: scena, g: g, f: IE.firme[g.id] }, 'allenamento');
}

/* ============================================================
   PARTITA
   ============================================================ */
function clona(g) {
  var c = {};
  for (var k in g) if (k.charAt(0) !== '_') c[k] = g[k];
  c.tec = (g.tec || []).slice();
  c.eq = (g.eq && g.eq.length ? g.eq : equipaggiaAuto(g)).slice();
  c.tp = IE.tpMax(g);          /* in partita si entra sempre pieni: */
  c.fp = IE.fpMax(g);          /* il fiato degli allenamenti è un'altra cosa */
  c.baseId = g.id;
  c._orig = g;
  return c;
}
function avviaPartita(cfg) {
  if (!IE.squadre[cfg.avv]) { G.vai('hub'); return; }
  S.partitaPendente = cfg;
  aggiornaTitolari();
  S.vista = 'prepartita';
  salva(); render();
}

/* ---------- scheda di presentazione: quanto sono forti ---------- */
function vistaPrePartita() {
  var cfg = S.partitaPendente;
  if (!cfg) { G.vai('hub'); return; }
  var sq = IE.squadre[cfg.avv];
  var cons = sq.lvCons || sq.lv || 1;
  var mio = livelloMedio();
  var d = mio - cons;
  var giudizio, cls, col;
  if (d >= 4)      { giudizio = 'Siete più avanti di loro. Dovrebbe andare bene.';  cls = 'buono';  col = '#3fd07a'; }
  else if (d >= 0) { giudizio = 'Siete sul loro livello. Partita vera.';            cls = '';       col = '#ffd23f'; }
  else if (d >= -3){ giudizio = 'Sono un po\' più avanti. Si può fare, ma soffrendo.'; cls = ''; col = '#ff8a3d'; }
  else             { giudizio = 'Sono molto più forti di voi. Vi conviene allenarvi ancora.'; cls = 'male'; col = '#ff5468'; }

  schermo.appendChild(el('<div class="centro" style="margin:8px 0 12px">' +
    '<div class="etichetta">' + esc(cfg.titolo || 'Partita') + '</div>' +
    '<div style="font-size:42px;line-height:1">' + (sq.stemma || '⚽') + '</div>' +
    '<h1 style="font-size:23px">' + esc(sq.nome) + '</h1>' +
    '<div class="picc tenue" style="max-width:340px;margin:6px auto 0">' + esc(sq.motto || '') + '</div></div>'));

  schermo.appendChild(el('<div class="pannello">' +
    '<div class="riga tra" style="align-items:flex-end;margin-bottom:10px">' +
    '<div><div class="etichetta" style="margin:0">La tua squadra</div>' +
    '<div style="font-size:30px;font-weight:bold;line-height:1">Lv ' + mio + '</div>' +
    '<div class="picc fioco">media degli undici</div></div>' +
    '<div style="text-align:right"><div class="etichetta" style="margin:0">Consigliato</div>' +
    '<div style="font-size:30px;font-weight:bold;line-height:1;color:' + col + '">Lv ' + cons + '</div>' +
    '<div class="picc fioco">per giocarsela</div></div></div>' +
    '<div class="avviso ' + cls + ' picc" style="margin:0">' + giudizio + '</div></div>'));

  var fm = faticaMedia();
  if (fm < 55) schermo.appendChild(el('<div class="avviso picc">Fiato della squadra: <b>' + fm + '</b> su 100. ' +
    'Il fiato torna pieno solo dopo una partita, quindi si scende in campo così. Non è un problema: si stringe i denti.</div>'));

  var box = el('<div class="pannello"></div>');
  box.appendChild(bt('⚽  Scendere in campo', 'Formazione ' + S.formazione + '.', function () { scendiInCampo(); }, 'verde'));
  box.appendChild(bt('📋  Cambiare formazione', null, function () { G.vai('formazione'); }));
  if (S.sblocchi.allenamento) box.appendChild(bt('🏃  Allenarsi ancora', 'La partita ti aspetta: la ritrovi nel piazzale.', function () { G.vai('allenamento'); }));
  box.appendChild(bt('◀ Torna indietro', null, function () { G.vai('hub'); }, 'piatta'));
  schermo.appendChild(box);
}

function scendiInCampo() {
  var cfg = S.partitaPendente;
  var sq = IE.squadraDi(cfg.avv);
  if (!sq) { G.vai('hub'); return; }
  aggiornaTitolari();
  var titolari = S.titolari.map(function (id) { return clona(S.gioc(id)); }).filter(Boolean);
  var panchina = S.rosa.filter(function (g) { return S.titolari.indexOf(g.id) < 0; }).map(clona);
  if (titolari.length < 11) {
    /* meno di undici: si gioca lo stesso, ma si sente */
    while (titolari.length < 11 && panchina.length) titolari.push(panchina.shift());
  }
  var rosaAvv = sq._rosa || IE.rosaSquadra(sq);
  sq._rosa = rosaAvv;
  P = new IE.Partita({
    titolo: cfg.titolo || 'Partita',
    minutiTempo: cfg.minuti || 45,
    interazione: S.opz.interazione,
    mia: { nome: S.nomeSquadra, sigla: S.sigla, col: '#2f9e63', stemma: S.stemma, rosa: titolari, panchina: panchina, formazione: S.formazione, spirito: S.spirito },
    avv: { nome: sq.nome, sigla: sq.sigla, col: sq.col, stemma: sq.stemma, rosa: rosaAvv.slice(0, 11).map(clona), panchina: rosaAvv.slice(11).map(clona), formazione: '4-4-2', spirito: 40 }
  });
  G.posPrec = null; G.logVisto = 0;
  P.esiti = { vinto: cfg.vinto, perso: cfg.perso, pari: cfg.pari };
  P.amichevole = !!cfg.amichevole;
  P.avvId = cfg.avv;
  S.vista = 'partita';
  G.statoP = P.avanza(null);
  salva(); render();
}

function vistaPartita() {
  if (!P) {
    if (S.partitaPendente) { var c = S.partitaPendente; S.partitaPendente = null; avviaPartita(c); return; }
    G.vai('hub'); return;
  }
  schermo.appendChild(el('<div class="picc fioco centro" style="margin-bottom:6px">' + esc(P.titolo) + '</div>'));

  /* tabellone */
  var min = Math.min(P.minutiTempo * 2, P.min);
  schermo.appendChild(el('<div id="tabellone">' +
    '<div class="sq">' + esc(P.mia.nome) + '<div class="fascia" style="background:#3fd07a"></div></div>' +
    '<div><div class="pt">' + P.mia.gol + ' – ' + P.avv.gol + '</div>' +
    '<div class="tempo">' + (P.finita ? 'finita' : P.attesaTempo ? 'intervallo'
      : (P.tempo === 1 ? '1º tempo' : '2º tempo') + " · " + min + "'") + '</div></div>' +
    '<div class="sq">' + esc(P.avv.nome) + '<div class="fascia" style="background:' + P.avv.col + '"></div></div></div>'));

  /* campo con i ventidue in movimento */
  schermo.appendChild(disegnaCampo());

  /* portatore */
  var mio = P.possesso === P.mia;
  var pt = P.portatore;
  if (pt && !P.finita) {
    schermo.appendChild(el('<div class="duello">' +
      '<div class="lato">' + ritrattoHtml(pt, 'pc') + '<div style="margin-top:3px"><b>' + esc(pt.nome) + '</b></div>' +
      '<div class="fioco">' + (mio ? 'ha la palla' : 'palla agli avversari') + '</div></div>' +
      '<div style="flex:none;text-align:center"><div class="picc fioco">PT</div><div class="val" style="color:#a678ff">' + Math.round(pt._tp) + '</div></div>' +
      '<div style="flex:none;text-align:center"><div class="picc fioco">PE</div><div class="val" style="color:' +
      (pt._fp / pt._fpMax < 0.35 ? '#ff5468' : '#3fd07a') + '">' + Math.round(pt._fp) + '</div></div>' +
      '</div>'));
  }

  /* log */
  var log = el('<div id="log"></div>');
  P.log.slice(-40).forEach(function (l) { log.appendChild(el('<div class="l ' + l.cls + '">' + esc(l.t) + '</div>')); });
  schermo.appendChild(log);
  setTimeout(function () { var e = $('#log'); if (e) e.scrollTop = e.scrollHeight; }, 20);

  var st = G.statoP || { richiesta: 'attacco', opzioni: P.opzioniAttacco() };
  var box = el('<div class="pannello"></div>');

  if (st.richiesta === 'fine') {
    box.appendChild(bt('Fine partita ▸', null, function () { finePartita(); }, 'primario'));
  } else if (st.richiesta === 'fine_tempo') {
    box.appendChild(el('<div class="avviso picc">Intervallo. Si recupera un po\' di fiato e di PT.</div>'));
    box.appendChild(bt('Sostituzioni', P.mia.panchina.length ? P.mia.panchina.length + ' in panchina.' : 'Nessuno in panchina.', function () { pannelloCambi(); }));
    box.appendChild(bt('Secondo tempo ▸', null, function () {
      P.intervallo(); G.statoP = P.avanza(null); render();
    }, 'primario'));
  } else if (st.richiesta === 'difesa') {
    box.appendChild(el('<div class="etichetta">Difendi — ' + esc(P.pendente.dif.nome) + '</div>'));
    st.opzioni.forEach(function (o) { box.appendChild(bottoneAzione(o)); });
  } else {
    box.appendChild(el('<div class="etichetta">' + esc(pt ? pt.nome : '') + ' — ' + zonaTxt() + '</div>'));
    st.opzioni.forEach(function (o) { box.appendChild(bottoneAzione(o)); });
  }
  schermo.appendChild(box);

  if (!P.finita && st.richiesta !== 'fine_tempo') {
    var pan = el('<div class="pannello stretto"><div class="etichetta">Panchina</div></div>');
    var b = bt('📣  Ordine dalla panchina', P.mia.ordiniRimasti + ' rimasti in questo tempo.', function () { pannelloOrdini(); }, 'piatta');
    if (P.mia.ordiniRimasti <= 0) b.classList.add('disab');
    pan.appendChild(b);
    schermo.appendChild(pan);
  }
}
/* ---------- posizioni dei ventidue ---------- */
var BASE_X = { PT: 7, DF: 25, CC: 47, AT: 67 };
function posizioniCampo() {
  var out = [];
  [[P.mia, true], [P.avv, false]].forEach(function (par) {
    var lato = par[0], mio = par[1];
    var haPalla = P.possesso === lato;
    /* chi attacca sale, chi difende si abbassa */
    var spinta = haPalla ? (P.zona - 2) * 13 : -((P.zona - 2) * 8);
    ['PT', 'DF', 'CC', 'AT'].forEach(function (r) {
      var linea = lato.rosa.filter(function (g) { return g.ruolo === r; });
      linea.forEach(function (g, i) {
        var x = BASE_X[r] + (r === 'PT' ? 0 : spinta);
        x = Math.max(4, Math.min(94, x));
        var y = linea.length <= 1 ? 50 : 15 + 70 * i / (linea.length - 1);
        if (!mio) y = Math.max(9, Math.min(91, y + 8));
        out.push({
          k: (mio ? 'a_' : 'b_') + g.id, g: g, mio: mio,
          x: mio ? x : 100 - x, y: y,
          col: mio ? (g.ruolo === 'PT' ? '#f2b32e' : '#3fd07a') : (g.ruolo === 'PT' ? '#e0e0e0' : lato.col)
        });
      });
    });
  });
  return out;
}
function disegnaCampo() {
  var pos = posizioniCampo();
  var prec = G.posPrec || {};
  var portatore = P.portatore, marcato = P.pendente ? P.pendente.dif : null;
  var finali = {}, palla = null;
  var punti = pos.map(function (p) {
    finali[p.k] = { x: p.x, y: p.y };
    var pr = prec[p.k] || { x: p.x, y: p.y };
    var cls = 'pedina' + (p.mio ? '' : ' avv') + (p.g.ruolo === 'PT' ? ' pt' : '') +
      (p.g === portatore ? ' palla' : '') + (marcato && p.g === marcato ? ' marca' : '');
    if (p.g === portatore) palla = p;
    return '<div class="' + cls + '" style="left:' + pr.x + '%;top:' + pr.y + '%;background:' + p.col + '"' +
      ' data-k="' + p.k + '" title="' + esc(p.g.nome) + '">' + (p.g.numero || '') + '</div>';
  }).join('');
  var pp = palla ? (prec['palla'] || { x: palla.x, y: palla.y }) : { x: 50, y: 50 };
  if (palla) finali['palla'] = { x: palla.x + (palla.mio ? 3.5 : -3.5), y: palla.y + 9 };
  var c = el('<div id="campo">' +
    '<div class="linea" style="left:50%"></div><div class="cerchio"></div>' +
    '<div class="dischetto" style="left:50%;top:50%"></div>' +
    '<div class="area" style="left:0"></div><div class="area" style="right:0"></div>' +
    '<div class="areina" style="left:0"></div><div class="areina" style="right:0"></div>' +
    '<div class="porta" style="left:-4px"></div><div class="porta" style="right:-4px"></div>' +
    '<div class="dischetto" style="left:11%;top:50%"></div><div class="dischetto" style="left:89%;top:50%"></div>' +
    '<div class="angolo" style="left:-6px;top:-6px"></div><div class="angolo" style="right:-6px;top:-6px"></div>' +
    '<div class="angolo" style="left:-6px;bottom:-6px"></div><div class="angolo" style="right:-6px;bottom:-6px"></div>' +
    punti +
    '<div id="palla" style="left:' + pp.x + '%;top:' + pp.y + '%">\u26bd</div>' +
    '<div style="position:absolute;left:6px;top:3px;font-size:10px;font-weight:bold;color:#7bffb0;text-shadow:0 1px 3px rgba(0,0,0,.8)">' + esc(P.mia.sigla) + '</div>' +
    '<div style="position:absolute;right:6px;top:3px;font-size:10px;font-weight:bold;color:' + P.avv.col + ';text-shadow:0 1px 3px rgba(0,0,0,.8)">' + esc(P.avv.sigla) + '</div>' +
    '</div>');
  requestAnimationFrame(function () {
    c.querySelectorAll('.pedina').forEach(function (d) {
      var f = finali[d.getAttribute('data-k')];
      if (f) { d.style.left = f.x + '%'; d.style.top = f.y + '%'; }
    });
    var b = c.querySelector('#palla');
    if (b && finali.palla) { b.style.left = finali.palla.x + '%'; b.style.top = finali.palla.y + '%'; }
  });
  /* se è appena entrata, il campo lampeggia */
  var ultimo = P.log[P.log.length - 1];
  if (ultimo && P.log.length !== G.logVisto) {
    var recenti = P.log.slice(G.logVisto || 0);
    var gol = recenti.filter(function (l) { return l.cls === 'gol' || l.cls === 'subito'; }).pop();
    if (gol) c.classList.add(gol.cls === 'gol' ? 'gol-nostro' : 'gol-loro');
  }
  G.logVisto = P.log.length;
  G.posPrec = finali;
  return c;
}
function zonaTxt() {
  return ['', 'nella nostra difesa', 'a centrocampo', 'sulla trequarti', 'dentro l\'area'][P.zona];
}
function bottoneAzione(o) {
  var sotto = (o.sotto || '') + (o.tp ? '  ·  ' + o.tp + ' PT' : '');
  var b = bt(o.label, sotto, function () {
    if (o.disab) return;
    G.statoP = P.avanza(o);
    var r = cercaRisveglioPartita();
    salva();
    if (r) apriRisveglio(r, 'partita'); else render();
  }, o.tecnica ? '' : (o.id === 'tiro' ? 'verde' : ''));
  if (o.disab) {
    b.classList.add('disab');
    var sm = b.querySelector('small');
    if (sm) sm.textContent = sotto + ' — PT insufficienti';
  }
  return b;
}
function pannelloOrdini() {
  var h = '<h2>Ordine dalla panchina</h2><p class="picc tenue">Vale una quindicina di minuti. Ne restano ' + P.mia.ordiniRimasti + '.</p>';
  var v = velo(h + '<div id="ordbox"></div><button class="bt piatta" onclick="this.closest(\'.velo\').remove()">Annulla</button>');
  var box = v.querySelector('#ordbox');
  Object.keys(IE.ordini).forEach(function (k) {
    if (k === 'normale') return;
    var o = IE.ordini[k];
    box.appendChild(bt(o.nome, o.desc, function () {
      P.daiOrdine(k); v.remove(); G.statoP = G.statoP; render();
    }));
  });
}
function pannelloCambi() {
  var v = velo('<h2>Sostituzioni</h2><div id="cbox"></div><button class="bt piatta" onclick="this.closest(\'.velo\').remove()">Chiudi</button>');
  var box = v.querySelector('#cbox');
  if (!P.mia.panchina.length) { box.appendChild(el('<div class="picc tenue">Non c\'è nessuno in panchina.</div>')); return; }
  box.appendChild(el('<div class="etichetta">Chi esce</div>'));
  P.mia.rosa.forEach(function (g) {
    box.appendChild(schedaGiocatore(g, 'PE ' + Math.round(g._fp), function () {
      var v2 = velo('<h2>Chi entra al posto di ' + esc(g.nome) + '</h2><div id="c2"></div>' +
        '<button class="bt piatta" onclick="this.closest(\'.velo\').remove()">Annulla</button>');
      var b2 = v2.querySelector('#c2');
      P.mia.panchina.forEach(function (d) {
        b2.appendChild(schedaGiocatore(d, 'entra', function () {
          P.sostituisci(g.id, d.id); v2.remove(); v.remove(); render();
        }));
      });
    }));
  });
}

/* ---------- fine partita ---------- */
function finePartita() {
  var esito = P.esito;
  var premio = esito === 'vittoria' ? 480 : esito === 'pareggio' ? 340 : 240;
  var righe = [];
  P.mia.rosa.concat(P.mia.panchina).forEach(function (c) {
    var g = c._orig; if (!g) return;
    var inCampo = P.mia.rosa.indexOf(c) >= 0;
    var e = Math.round((premio + (inCampo ? 200 : 90)) * (1 + P.mia.duelliVinti * 0.012));
    var r = daiExp(g, e);
    if (r.salito.length) righe.push(esc(g.nome) + ' → livello ' + g.lv);
    r.imparate.forEach(function (t) { righe.push('<b>' + esc(g.nome) + ' impara ' + esc(IE.tec(t).nome) + '</b>'); });
    if (inCampo) {
      var im = cresciAffiatamento(g, esito === 'vittoria' ? 6 : 4);
      im.forEach(function (t) { righe.push('<b>' + esc(g.nome) + ' impara ' + esc(IE.tec(t).nome) + '</b>'); });
    }
  });
  S.spirito = Math.min(100, S.spirito + (esito === 'vittoria' ? 4 : esito === 'pareggio' ? 2 : 1));
  S.storico.push({ avv: P.avv.nome, gol: P.mia.gol, sub: P.avv.gol, esito: esito });
  if (S.incontrate.indexOf(P.avv.nome) < 0) S.incontrate.push(P.avv.nome);

  /* dopo una partita si rifiata, e si è parlato abbastanza */
  riposoCompleto();

  /* contatti: chi ti ha visto giocare risponde al telefono */
  var contatti = esito === 'vittoria' ? 3 : esito === 'pareggio' ? 2 : 1;
  S.scout = (S.scout || 0) + contatti;
  var battuta = false;
  if (esito === 'vittoria' && P.avvId && S.battute.indexOf(P.avvId) < 0) { S.battute.push(P.avvId); battuta = true; }
  righe.push('Contatti +' + contatti + (battuta ? ' — la rosa della ' + esc(P.avv.nome) + ' è ora richiamabile.' : ''));
  G.fine = { esito: esito, righe: righe, battuta: battuta, mia: P.mia.gol, avv: P.avv.gol, nomeAvv: P.avv.nome,
    tiri: [P.mia.tiri, P.avv.tiri], duelli: [P.mia.duelliVinti, P.avv.duelliVinti], esiti: P.esiti, amichevole: P.amichevole };
  S.partitaPendente = null;
  S.vista = 'finepartita';
  salva(); render();
}

function vistaFinePartita() {
  var f = G.fine || { esito: 'pareggio', righe: [] };
  var tit = f.esito === 'vittoria' ? 'VITTORIA' : f.esito === 'sconfitta' ? 'SCONFITTA' : 'PAREGGIO';
  var cls = f.esito === 'vittoria' ? 'buono' : f.esito === 'sconfitta' ? 'male' : '';
  schermo.appendChild(el('<div class="centro" style="margin:10px 0 14px">' +
    '<div class="etichetta">' + esc(f.nomeAvv) + '</div>' +
    '<div class="titolone" style="font-size:44px">' + f.mia + ' – ' + f.avv + '</div>' +
    '<div style="font-weight:bold;letter-spacing:3px">' + tit + '</div></div>'));
  schermo.appendChild(el('<div class="pannello stretto"><div class="etichetta">Statistiche</div>' +
    '<div class="picc">Tiri: <b>' + f.tiri[0] + '</b> – ' + f.tiri[1] + '</div>' +
    '<div class="picc">Duelli vinti: <b>' + f.duelli[0] + '</b> – ' + f.duelli[1] + '</div></div>'));
  if (f.righe.length) schermo.appendChild(el('<div class="avviso ' + cls + ' picc">' + f.righe.join('<br>') + '</div>'));
  if (f.battuta) schermo.appendChild(el('<div class="avviso buono picc">🫱 Hai battuto la <b>' + esc(f.nomeAvv) +
    '</b>: i loro giocatori ora si possono chiamare in squadra, da <b>Contatti</b>.</div>'));
  schermo.appendChild(bt('Continua ▸', null, function () {
    if (f.amichevole) { G.vai('hub'); return; }
    var e = f.esiti || {};
    var vai = f.esito === 'vittoria' ? e.vinto : f.esito === 'sconfitta' ? e.perso : (e.pari || e.perso);
    P = null;
    if (vai) apriScena(vai); else G.vai('hub');
  }, 'primario'));
}

/* ============================================================
   AMICHEVOLI
   ============================================================ */
function vistaAmichevoli() {
  schermo.appendChild(el('<h2>Amichevoli</h2>'));
  schermo.appendChild(el('<p class="picc tenue">Non contano per niente. È il bello delle amichevoli.</p>'));
  var box = el('<div class="pannello"></div>');
  Object.keys(IE.squadre).forEach(function (k) {
    var sq = IE.squadre[k];
    box.appendChild(bt(sq.stemma + '  ' + sq.nome, sq.motto, function () {
      avviaPartita({ avv: k, titolo: 'Amichevole — ' + S.nomeSquadra + ' vs ' + sq.nome, minuti: 45, amichevole: true });
    }));
  });
  schermo.appendChild(box);
  schermo.appendChild(bt('◀ Torna', null, function () { G.vai('hub'); }, 'piatta'));
}

/* ============================================================
   CONTATTI — chiamare in squadra chi hai battuto
   ============================================================ */
var ROSA_MAX = 22;
function costoDi(g) { return Math.max(2, Math.round(IE.valutazione(g) / 6)); }

function vistaContatti() {
  schermo.appendChild(el('<h2>Contatti</h2>'));
  schermo.appendChild(el('<p class="picc tenue">Chi vi ha giocato contro e ha perso, adesso risponde al telefono. ' +
    'Ogni partita giocata vale contatti: una vittoria tre, un pareggio due, una sconfitta uno.</p>'));
  schermo.appendChild(el('<div class="pannello stretto"><div class="riga tra">' +
    '<div><div class="etichetta" style="margin:0">Contatti</div><div style="font-size:26px;font-weight:bold">🫱 ' + (S.scout || 0) + '</div></div>' +
    '<div style="text-align:right"><div class="etichetta" style="margin:0">Tesserati</div>' +
    '<div style="font-size:26px;font-weight:bold">' + S.rosa.length + '<span class="tenue" style="font-size:14px"> / ' + ROSA_MAX + '</span></div></div>' +
    '</div></div>'));

  if (!S.battute.length) {
    schermo.appendChild(el('<div class="avviso picc">Non hai ancora battuto nessuno. Vinci una partita e la rosa di quella squadra compare qui.</div>'));
    schermo.appendChild(bt('◀ Torna', null, function () { G.vai('hub'); }, 'piatta'));
    return;
  }

  S.battute.forEach(function (idSq) {
    var sq = IE.squadraDi(idSq);
    if (!sq) return;
    var box = el('<div class="pannello"><div class="etichetta">' + (sq.stemma || '⚽') + ' ' + esc(sq.nome) + '</div></div>');
    var liberi = 0;
    (sq._rosa || []).forEach(function (o) {
      if (S.ha('r_' + o.id)) return;
      liberi++;
      var costo = costoDi(o);
      var puoi = (S.scout || 0) >= costo && S.rosa.length < ROSA_MAX;
      var sg = schedaGiocatore(o, '🫱 ' + costo, function () { chiamaInSquadra(o, sq, costo); });
      if (!puoi) sg.classList.add('disab');
      box.appendChild(sg);
    });
    if (!liberi) box.appendChild(el('<div class="picc tenue">Li hai già chiamati tutti.</div>'));
    schermo.appendChild(box);
  });
  schermo.appendChild(bt('◀ Torna', null, function () { G.vai('hub'); }, 'piatta'));
}

function chiamaInSquadra(o, sq, costo) {
  if ((S.scout || 0) < costo || S.rosa.length >= ROSA_MAX) return;
  S.scout -= costo;
  var g = {
    id: 'r_' + o.id, nome: o.nome, corto: o.corto || o.nome.split(' ')[0],
    ruolo: o.ruolo, el: o.el, col: o.col, prof: o.prof, pot: 0.9,
    base: IE.tutteStat(o),          /* arriva forte com'era, e da lì cresce con voi */
    allen: {}, lv: 1, exp: 0, tec: (o.tec || []).slice(),
    numero: prossimoNumero(), am: 25, fat: 100,
    volto: IE.voltoDi(o), provenienza: sq.nome
  };
  equipaggiaAuto(g);
  S.rosa.push(g);
  aggiornaTitolari();
  salva();
  velo('<div class="riga" style="gap:10px;margin-bottom:10px">' + ritrattoHtml(g, 'gr') +
    '<div><div style="font-weight:bold;font-size:17px">' + esc(g.nome) + '</div>' +
    '<div class="picc tenue">dalla ' + esc(sq.nome) + ' · <span class="ruolo r-' + g.ruolo + '">' + g.ruolo + '</span>n. ' + g.numero + '</div></div></div>' +
    '<p class="picc">Ha detto di sì. Arriva con le sue tecniche e con le statistiche che aveva quando vi ha giocato contro: ' +
    'da adesso cresce insieme a voi.</p>' +
    '<button class="bt primario" onclick="this.closest(\'.velo\').remove();G.render()">Bene</button>');
}

/* ============================================================
   OPZIONI
   ============================================================ */
function vistaOpzioni() {
  schermo.appendChild(el('<h2>Salvataggio e opzioni</h2>'));
  var box = el('<div class="pannello"><div class="etichetta">Quanto vuoi decidere in partita</div></div>');
  [['rapida', 'Rapida', 'Decidi solo in attacco e sui tiri in area.'],
   ['normale', 'Normale', 'Decidi in attacco e quando difendi vicino alla tua area.'],
   ['completa', 'Completa', 'Decidi ogni singolo duello, anche a centrocampo.']].forEach(function (o) {
    box.appendChild(bt(o[1], o[2], function () { S.opz.interazione = o[0]; salva(); render(); },
      S.opz.interazione === o[0] ? 'primario' : ''));
  });
  schermo.appendChild(box);

  var b2 = el('<div class="pannello"><div class="etichetta">Il salvataggio</div></div>');
  b2.appendChild(bt('⬇️  Esporta su file', 'Un file di testo da tenere da parte.', function () {
    var c = {}; for (var k in S) if (typeof S[k] !== 'function') c[k] = S[k];
    var t = JSON.stringify(c);
    var a = document.createElement('a');
    a.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(t);
    a.download = 'amanome-' + (S.io ? S.io.nome.replace(/\W+/g, '') : 'salvataggio') + '.json';
    a.click();
  }));
  b2.appendChild(bt('⬆️  Importa da file', 'Sostituisce la partita in corso.', function () {
    var i = document.createElement('input'); i.type = 'file'; i.accept = '.json,application/json';
    i.onchange = function () {
      var fr = new FileReader();
      fr.onload = function () {
        try {
          var s = JSON.parse(fr.result);
          if (!s.ver) throw 0;
          S = metodi(s); S.vista = 'hub'; salva(); render();
        } catch (e) { alert('File non valido.'); }
      };
      fr.readAsText(i.files[0]);
    };
    i.click();
  }));
  b2.appendChild(bt('🗑️  Cancella e ricomincia', null, function () {
    if (!confirm('Cancello tutto?')) return;
    localStorage.removeItem(CHIAVE); S = metodi(nuovoStato()); render();
  }, 'rossa'));
  schermo.appendChild(b2);
  schermo.appendChild(bt('📱  Installare sul telefono', 'Per averlo come app, anche senza rete.', function () { mostraInstalla(); }, 'piatta'));
  schermo.appendChild(bt('Come si gioca', null, function () { mostraAiuto(); }, 'piatta'));
  schermo.appendChild(bt('◀ Torna', null, function () { G.vai('hub'); }, 'piatta'));
}

function mostraInstalla() {
  velo('<h2>📱 Installare sul telefono</h2>' +
    '<p class="picc tenue">Non c\'è niente da scaricare da uno store: è una pagina che il telefono può salvare come app. ' +
    'Una volta installata funziona anche in aereo, in galleria o senza campo.</p>' +
    '<div class="etichetta">iPhone e iPad — Safari</div>' +
    '<p class="picc">1. Apri il gioco con <b>Safari</b> (non Chrome: su iOS solo Safari può installare).<br>' +
    '2. Tocca il pulsante <b>Condividi</b> in basso — il quadrato con la freccia in su.<br>' +
    '3. Scorri e tocca <b>Aggiungi a schermata Home</b>.<br>' +
    '4. Dai un nome e tocca <b>Aggiungi</b>.</p>' +
    '<div class="etichetta">Android — Chrome</div>' +
    '<p class="picc">1. Apri il gioco con <b>Chrome</b>.<br>' +
    '2. Tocca i <b>tre puntini</b> in alto a destra.<br>' +
    '3. Tocca <b>Installa app</b> (o <b>Aggiungi a schermata Home</b>).<br>' +
    '4. Conferma.</p>' +
    '<div class="etichetta">Poi</div>' +
    '<p class="picc">Apri il gioco dall\'icona almeno una volta con la rete accesa: serve a salvare tutto sul telefono. ' +
    'Da lì in poi funziona offline.</p>' +
    '<div class="avviso picc">Il salvataggio sta nel browser di <b>quel</b> telefono. Per portarlo altrove usa ' +
    '<b>Esporta su file</b> qui in Opzioni, e <b>Importa</b> sull\'altro dispositivo.</div>' +
    '<button class="bt primario" onclick="this.closest(\'.velo\').remove()">Chiudi</button>');
}

/* ============================================================
   AVVIO
   ============================================================ */
function avvio() {
  schermo = $('#schermo'); barra = $('#barra');
  S = metodi(nuovoStato());
  render();
  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    navigator.serviceWorker.register('./sw-ie.js').catch(function () {});
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', avvio);
else avvio();

})();
