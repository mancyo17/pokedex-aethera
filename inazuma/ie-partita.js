/* ============================================================
   AMANOME ELEVEN — motore di partita
   Partita a turni: ogni azione è un duello fra chi ha la palla
   e chi prova a fermarla. Elementi, tecniche speciali, fiato.
   ============================================================ */
(function () {
'use strict';
var IE = window.IE;

function caso(n) { return Math.random() * n; }
function scegli(a) { return a[Math.floor(Math.random() * a.length)]; }
function limita(v, a, b) { return Math.max(a, Math.min(b, v)); }

/* Nomi delle zone, dal punto di vista di chi ha la palla. */
var ZONE = ['', 'la propria difesa', 'il centrocampo', 'la trequarti', 'l\'area avversaria'];

/* ------------------------------------------------------------
   Lato squadra: incarto attorno a una rosa
   ------------------------------------------------------------ */
function Lato(cfg, io) {
  this.io = !!io;
  this.nome = cfg.nome; this.sigla = cfg.sigla || cfg.nome.slice(0, 3).toUpperCase();
  this.col = cfg.col || '#888'; this.stemma = cfg.stemma || '⚽';
  this.rosa = cfg.rosa;                       /* gli undici in campo */
  this.panchina = cfg.panchina || [];
  this.formazione = cfg.formazione || '4-4-2';
  this.spirito = cfg.spirito || 0;            /* 0-100, bonus di squadra */
  this.gol = 0;
  this.ordine = 'normale';
  this.ordiniRimasti = 2;
  this.turbo = 0;                             /* minuti residui dell'ordine speciale */
  this.tiri = 0; this.duelliVinti = 0; this.duelliPersi = 0;
  var self = this;
  this.rosa.forEach(function (g) {
    g._tp = (typeof g.tp === 'number' ? g.tp : IE.tpMax(g));
    g._fp = (typeof g.fp === 'number' ? g.fp : IE.fpMax(g));
    g._tpMax = IE.tpMax(g); g._fpMax = IE.fpMax(g);
    g._st = IE.tutteStat(g);
    g._sq = self;
  });
  this.panchina.forEach(function (g) {
    g._tp = IE.tpMax(g); g._fp = IE.fpMax(g);
    g._tpMax = g._tp; g._fpMax = g._fp; g._st = IE.tutteStat(g); g._sq = self;
  });
}
Lato.prototype.portiere = function () {
  return this.rosa.filter(function (g) { return g.ruolo === 'PT'; })[0] || this.rosa[0];
};
Lato.prototype.perRuolo = function (r) {
  return this.rosa.filter(function (g) { return g.ruolo === r; });
};
Lato.prototype.modAtt = function () {
  var f = IE.formazioni[this.formazione] || IE.formazioni['4-4-2'];
  var o = IE.ordini[this.ordine] || IE.ordini.normale;
  return f.att * (this.turbo > 0 ? (o.att || 1) : 1) * (1 + this.spirito / 400);
};
Lato.prototype.modDif = function () {
  var f = IE.formazioni[this.formazione] || IE.formazioni['4-4-2'];
  var o = IE.ordini[this.ordine] || IE.ordini.normale;
  return f.dif * (this.turbo > 0 ? (o.dif || 1) : 1) * (1 + this.spirito / 400);
};

/* ------------------------------------------------------------
   Partita
   ------------------------------------------------------------ */
IE.Partita = function (cfg) {
  this.mia = new Lato(cfg.mia, true);
  this.avv = new Lato(cfg.avv, false);
  this.minutiTempo = cfg.minutiTempo || 45;
  this.tempo = 1;
  this.min = 0;
  this.log = [];
  this.finita = false;
  this.pendente = null;
  this.attesaTempo = false;
  this.titolo = cfg.titolo || 'Amichevole';
  this.interazione = cfg.interazione || 'normale';   /* normale | completa | rapida */
  this.possesso = Math.random() < 0.5 ? this.mia : this.avv;
  this.zona = 2;
  this.portatore = scegli(this.possesso.perRuolo('CC').concat(this.possesso.perRuolo('AT')));
  if (!this.portatore) this.portatore = this.possesso.rosa[1] || this.possesso.rosa[0];
  this.scrivi('Fischio d\'inizio. ' + this.mia.nome + ' contro ' + this.avv.nome + '.', 'ev');
  this.scrivi('Palla a ' + this.possesso.nome + '. Batte ' + this.portatore.nome + '.');
};

var Pt = IE.Partita.prototype;

Pt.scrivi = function (t, cls) { this.log.push({ t: t, cls: cls || '' }); };
Pt.altra = function (l) { return l === this.mia ? this.avv : this.mia; };

/* ---------- stanchezza e fiato ---------- */
function fresco(g) { return 0.62 + 0.38 * limita(g._fp / g._fpMax, 0, 1); }
Pt.consuma = function (g, n) {
  var o = IE.ordini[g._sq.ordine] || IE.ordini.normale;
  var m = g._sq.turbo > 0 ? (o.fp || 1) : 1;
  g._fp = Math.max(0, g._fp - n * m);
};

/* ---------- scelta del difensore ---------- */
Pt.difensoreIn = function (lato, zona, perTiro) {
  if (perTiro) return lato.portiere();
  var pool;
  if (zona <= 2) pool = lato.perRuolo('CC').concat(lato.perRuolo('AT'));
  else if (zona === 3) pool = lato.perRuolo('DF').concat(lato.perRuolo('CC'));
  else pool = lato.perRuolo('DF');
  pool = pool.filter(function (g) { return g.ruolo !== 'PT'; });
  if (!pool.length) pool = lato.rosa.filter(function (g) { return g.ruolo !== 'PT'; });
  /* il più adatto fra tre estratti a caso: la difesa non è mai perfetta */
  var c = [scegli(pool), scegli(pool), scegli(pool)];
  c.sort(function (a, b) { return (b._st.dif + b._st.vel) * fresco(b) - (a._st.dif + a._st.vel) * fresco(a); });
  return c[0];
};

/* ---------- valore d'attacco ---------- */
Pt.valoreAttacco = function (g, azione, tecnica) {
  var s = g._st, v;
  if (azione === 'drib') v = s.vel * 0.48 + s.ctr * 0.32 + s.fis * 0.20;
  else if (azione === 'passa') v = s.ctr * 0.55 + s.gri * 0.20 + s.vel * 0.25;
  else v = s.tir * 0.86 + s.fis * 0.12 + s.gri * 0.08;
  v *= fresco(g) * g._sq.modAtt();
  if (tecnica) v += tecnica.pot * (0.9 + caso(0.25));
  return v;
};
/* ---------- valore di difesa ---------- */
Pt.valoreDifesa = function (g, azione, tecnica) {
  var s = g._st, v;
  if (azione === 'tiro') v = s.par * 0.53 + s.gri * 0.12 + s.fis * 0.06;
  else if (azione === 'passa') v = s.dif * 0.40 + s.ctr * 0.30 + s.vel * 0.30;
  else v = s.dif * 0.50 + s.vel * 0.28 + s.fis * 0.22;
  v *= fresco(g) * g._sq.modDif();
  if (tecnica) v += tecnica.pot * (0.9 + caso(0.25));
  return v;
};

/* ---------- tecniche utilizzabili ---------- */
Pt.tecnicheUtili = function (g, tipo) {
  var lato = g._sq, out = [];
  var elenco = (g.eq && g.eq.length) ? g.eq : (g.tec || []);
  elenco.forEach(function (id) {
    var t = IE.tec(id);
    if (!t || t.tipo !== tipo) return;
    if (t.soloDi && t.soloDi !== (g.baseId || g.id)) return;
    if (t.com && t.com.length) {
      var ok = t.com.every(function (cid) {
        return lato.rosa.some(function (x) { return x.id === cid || x.baseId === cid; });
      });
      if (!ok) return;
    }
    out.push(t);
  });
  return out;
};
Pt.puoUsare = function (g, t) { return g._tp >= t.tp; };

/* ============================================================
   AVANZAMENTO
   scelta = null (prosegui) oppure oggetto scelta del giocatore
   ritorna { richiesta: 'attacco'|'difesa'|'fine_tempo'|'fine'|null, ... }
   ============================================================ */
Pt.avanza = function (scelta) {
  if (this.finita) return { richiesta: 'fine' };

  if (this.pendente) {
    var p = this.pendente; this.pendente = null;
    if (p.tipo === 'difesa') this.risolvi(p.att, p.dif, p.azione, p.tecAtt, scelta && scelta.tecnica ? IE.tec(scelta.tecnica) : null, scelta && scelta.mod || 1);
  } else if (scelta) {
    this.azionePropria(scelta);
  }

  /* ciclo automatico fino alla prossima decisione */
  for (var giri = 0; giri < 60; giri++) {
    if (this.finita) return { richiesta: 'fine' };
    if (this.min >= this.minutiTempo * this.tempo) {
      if (this.tempo >= 2) { this.chiudi(); return { richiesta: 'fine' }; }
      this.attesaTempo = true;
      this.scrivi('Fine del primo tempo. ' + this.punteggio() + '.', 'ev');
      return { richiesta: 'fine_tempo' };
    }
    if (this.possesso === this.mia) {
      return { richiesta: 'attacco', opzioni: this.opzioniAttacco() };
    }
    var r = this.turnoAvversario();
    if (r === 'attesa') return { richiesta: 'difesa', opzioni: this.opzioniDifesa() };
  }
  return { richiesta: 'attacco', opzioni: this.opzioniAttacco() };
};

Pt.punteggio = function () { return this.mia.sigla + ' ' + this.mia.gol + ' - ' + this.avv.gol + ' ' + this.avv.sigla; };

/* ---------- opzioni offensive del giocatore ---------- */
Pt.opzioniAttacco = function () {
  var g = this.portatore, o = [], self = this;
  o.push({ id: 'drib', label: 'Dribbling', sotto: 'Saltalo e vai avanti da solo.', azione: 'drib' });
  o.push({ id: 'passa', label: 'Passaggio', sotto: 'Cerca un compagno più avanti.', azione: 'passa' });
  if (this.zona >= 3) o.push({ id: 'tiro', label: 'Tiro', sotto: this.zona === 4 ? 'Sei dentro l\'area.' : 'Da fuori. Difficile.', azione: 'tiro' });
  var tipi = { drib: 'drib', passa: 'drib', tiro: 'tiro' };
  ['drib', 'tiro'].forEach(function (tp) {
    if (tp === 'tiro' && self.zona < 3) return;
    self.tecnicheUtili(g, tp).forEach(function (t) {
      o.push({
        id: 'tec_' + t.id, label: t.nome, tecnica: t.id, azione: tp === 'tiro' ? 'tiro' : 'drib',
        sotto: (tp === 'tiro' ? 'Tiro speciale' : 'Dribbling speciale') + ' · ' + IE.elementi[t.el].icona + ' ' + IE.elementi[t.el].nome + ' · potenza ' + t.pot,
        tp: t.tp, disab: g._tp < t.tp
      });
    });
  });
  return o;
};

/* ---------- opzioni difensive del giocatore ---------- */
Pt.opzioniDifesa = function () {
  var p = this.pendente, g = p.dif, o = [], self = this;
  var perTiro = p.azione === 'tiro';
  o.push({ id: 'normale', label: perTiro ? 'Parata normale' : 'Contrasto', sotto: perTiro ? 'Mani e petto. Senza fronzoli.' : 'Piede dentro e via.' });
  this.tecnicheUtili(g, perTiro ? 'parata' : 'blocco').forEach(function (t) {
    o.push({
      id: 'tec_' + t.id, label: t.nome, tecnica: t.id,
      sotto: (perTiro ? 'Parata speciale' : 'Blocco speciale') + ' · ' + IE.elementi[t.el].icona + ' ' + IE.elementi[t.el].nome + ' · potenza ' + t.pot,
      tp: t.tp, disab: g._tp < t.tp
    });
  });
  if (!perTiro) o.push({ id: 'raddoppio', label: 'Raddoppio', sotto: 'Due addosso a uno: più forza, ma se salta entrambi è finita.', mod: 1.3, rischio: true });
  return o;
};

/* ---------- il giocatore agisce ---------- */
Pt.azionePropria = function (scelta) {
  var g = this.portatore;
  var tec = scelta.tecnica ? IE.tec(scelta.tecnica) : null;
  if (tec && g._tp < tec.tp) tec = null;
  var perTiro = scelta.azione === 'tiro';
  var dif = this.difensoreIn(this.avv, this.zona, perTiro);
  var difTec = null;
  /* l'avversario risponde con una tecnica se può */
  var dTec = this.tecnicheUtili(dif, perTiro ? 'parata' : 'blocco').filter(function (t) { return dif._tp >= t.tp; });
  if (dTec.length && Math.random() < (perTiro ? 0.58 : 0.42)) {
    dTec.sort(function (a, b) { return b.pot - a.pot; });
    difTec = dTec[0];
  }
  this.risolvi(g, dif, scelta.azione, tec, difTec, 1, scelta.azione === 'passa' ? scelta : null);
};

/* ---------- l'avversario agisce ---------- */
Pt.turnoAvversario = function () {
  var g = this.portatore, z = this.zona;
  var azione;
  var r = Math.random();
  if (z <= 2) azione = r < 0.65 ? 'passa' : 'drib';
  else if (z === 3) azione = r < 0.38 ? 'passa' : (r < 0.7 ? 'drib' : 'tiro');
  else azione = r < 0.68 ? 'tiro' : 'drib';
  if (azione === 'tiro' && g.ruolo === 'DF') azione = 'passa';

  var tec = null;
  var pool = this.tecnicheUtili(g, azione === 'tiro' ? 'tiro' : 'drib').filter(function (t) { return g._tp >= t.tp; });
  if (pool.length) {
    pool.sort(function (a, b) { return b.pot - a.pot; });
    var prob = azione === 'tiro' ? 0.8 : 0.5;
    if (Math.random() < prob) tec = pool[0];
  }

  var perTiro = azione === 'tiro';
  var dif = this.difensoreIn(this.mia, this.zona, perTiro);

  /* deve decidere il giocatore? */
  var chiedi = this.interazione === 'completa' ? true
    : this.interazione === 'rapida' ? (perTiro && this.zona >= 4)
    : (this.zona >= 3 || perTiro);
  if (chiedi) {
    this.pendente = { tipo: 'difesa', att: g, dif: dif, azione: azione, tecAtt: tec };
    this.scrivi(g.nome + ' punta ' + dif.nome + (perTiro ? ' e carica il tiro' : '') + '…', 'ev');
    return 'attesa';
  }
  var difTec = null;
  var dTec = this.tecnicheUtili(dif, perTiro ? 'parata' : 'blocco').filter(function (t) { return dif._tp >= t.tp; });
  if (dTec.length && Math.random() < 0.4) { dTec.sort(function (a, b) { return b.pot - a.pot; }); difTec = dTec[0]; }
  this.risolvi(g, dif, azione, tec, difTec, 1);
  return 'fatto';
};

/* Le firme non valgono sempre uguale: alcune si accendono quando serve. */
Pt.bonusFirma = function (g, t) {
  if (!t) return 0;
  var lato = g._sq, b = 0;
  if (t.sePerde && lato.gol < this.altra(lato).gol) b += t.sePerde;
  if (t.seSubito && lato.gol < this.altra(lato).gol + 1 && this.altra(lato).gol > 0) b += t.seSubito;
  if (t.seFresco && g._fp / g._fpMax > 0.6) b += t.seFresco;
  return b;
};

/* ============================================================
   RISOLUZIONE DEL DUELLO
   ============================================================ */
Pt.risolvi = function (att, dif, azione, tecAtt, tecDif, mod, extra) {
  var self = this;
  var latoAtt = att._sq, latoDif = dif._sq;
  var perTiro = azione === 'tiro';
  mod = mod || 1;

  if (tecAtt) { att._tp -= tecAtt.tp; }
  if (tecDif) { dif._tp -= tecDif.tp; }

  var A = this.valoreAttacco(att, azione, tecAtt) + this.bonusFirma(att, tecAtt);
  var D = (this.valoreDifesa(dif, perTiro ? 'tiro' : azione, tecDif) + this.bonusFirma(dif, tecDif)) * mod;

  /* elementi */
  var elA = tecAtt ? tecAtt.el : att.el, elD = tecDif ? tecDif.el : dif.el;
  var vant = IE.vantaggio(elA, elD);
  A *= vant;

  /* tiro da fuori area */
  if (perTiro && this.zona === 3) A *= 0.74;

  /* caso */
  A += caso(A * 0.22) + caso(10);
  D += caso(D * 0.22) + caso(10);

  var vinceAtt = A >= D;

  /* racconto */
  var righe = [];
  if (tecAtt) this.scrivi((latoAtt.io ? '' : '') + att.nome + ' — ' + tecAtt.nome + '!', 'tec');
  if (tecDif) this.scrivi(dif.nome + ' — ' + tecDif.nome + '!', 'tec');

  this.ultimoDuello = {
    att: att, dif: dif, A: Math.round(A), D: Math.round(D), vant: vant,
    tecAtt: tecAtt, tecDif: tecDif, azione: azione, vinceAtt: vinceAtt
  };

  this.consuma(att, perTiro ? 5 : 4);
  this.consuma(dif, 3);
  this.min += 1 + Math.floor(caso(3));
  if (latoAtt.turbo > 0) latoAtt.turbo = Math.max(0, latoAtt.turbo - 3);
  if (latoDif.turbo > 0) latoDif.turbo = Math.max(0, latoDif.turbo - 3);

  if (perTiro) {
    latoAtt.tiri++;
    if (vinceAtt) {
      latoAtt.gol++;
      latoAtt.duelliVinti++; latoDif.duelliPersi++;
      this.scrivi('⚽ GOL DI ' + att.nome.toUpperCase() + '! ' + this.punteggio(), latoAtt.io ? 'gol' : 'subito');
      if (latoAtt.io) this.scrivi('La panchina è in piedi.', 'arb');
      this.ripartenza(latoDif);
    } else {
      latoDif.duelliVinti++; latoAtt.duelliPersi++;
      var stretto = (D - A) / Math.max(1, D) < 0.10;
      if (stretto && Math.random() < 0.35) {
        this.scrivi(dif.nome + ' respinge, la palla resta lì! Mischia in area.', 'ev');
        this.zona = 4;
        this.portatore = scegli(latoAtt.perRuolo('AT').concat(latoAtt.perRuolo('CC')));
        if (!this.portatore) this.portatore = att;
      } else {
        this.scrivi(dif.nome + ' blocca il tiro di ' + att.nome + '.', latoDif.io ? 'ev' : '');
        this.cambioPossesso(latoDif, 1, dif);
      }
    }
    return;
  }

  if (vinceAtt) {
    latoAtt.duelliVinti++; latoDif.duelliPersi++;
    if (azione === 'drib') {
      this.scrivi(att.nome + ' salta ' + dif.nome + ' e guadagna campo.');
    } else {
      var compagni = latoAtt.rosa.filter(function (x) { return x !== att && x.ruolo !== 'PT'; });
      var pref = compagni.filter(function (x) { return self.zona >= 3 ? x.ruolo === 'AT' : x.ruolo !== 'DF'; });
      var nuovo = scegli(pref.length ? pref : compagni) || att;
      this.scrivi(att.nome + ' apre per ' + nuovo.nome + '.');
      this.portatore = nuovo;
    }
    var avanza = mod > 1 ? 2 : 1;   /* se il raddoppio salta, si perde il doppio del campo */
    if (mod > 1) this.scrivi('Il raddoppio è saltato: campo aperto.', 'subito');
    this.zona = Math.min(4, this.zona + avanza);
    if (this.zona === 4) this.scrivi(this.portatore.nome + ' è dentro l\'area.', 'ev');
  } else {
    latoDif.duelliVinti++; latoAtt.duelliPersi++;
    this.scrivi(dif.nome + (azione === 'drib' ? ' chiude su ' : ' intercetta il passaggio di ') + att.nome + '.', latoDif.io ? 'ev' : '');
    this.cambioPossesso(latoDif, this.zona >= 3 ? 1 : 2, dif);
  }
};

Pt.cambioPossesso = function (nuovo, zona, chi) {
  this.possesso = nuovo;
  this.zona = zona || 2;
  this.portatore = chi && chi.ruolo !== 'PT' ? chi : scegli(nuovo.perRuolo('DF').concat(nuovo.perRuolo('CC'))) || nuovo.rosa[1];
};
Pt.ripartenza = function (lato) {
  this.possesso = lato;
  this.zona = 2;
  this.portatore = scegli(lato.perRuolo('CC').concat(lato.perRuolo('AT'))) || lato.rosa[1];
};

/* ---------- intervallo ---------- */
Pt.intervallo = function () {
  this.tempo = 2;
  this.min = this.minutiTempo;
  this.attesaTempo = false;
  [this.mia, this.avv].forEach(function (l) {
    l.rosa.forEach(function (g) {
      g._fp = Math.min(g._fpMax, g._fp + g._fpMax * 0.32);
      g._tp = Math.min(g._tpMax, g._tp + g._tpMax * 0.28);
    });
    l.ordiniRimasti = 2;
    l.turbo = 0; l.ordine = 'normale';
  });
  this.ripartenza(this.avv === this.possesso ? this.mia : this.avv);
  this.scrivi('Si ricomincia. Secondo tempo.', 'ev');
};

/* ---------- ordine dalla panchina ---------- */
Pt.daiOrdine = function (id) {
  if (this.mia.ordiniRimasti <= 0) return false;
  var o = IE.ordini[id]; if (!o) return false;
  this.mia.ordine = id; this.mia.turbo = 15; this.mia.ordiniRimasti--;
  this.scrivi('Dalla panchina: «' + o.nome + '!»', 'ev');
  return true;
};

/* ---------- sostituzione ---------- */
Pt.sostituisci = function (fuoriId, dentroId) {
  var l = this.mia, i = -1, j = -1;
  l.rosa.forEach(function (g, k) { if (g.id === fuoriId) i = k; });
  l.panchina.forEach(function (g, k) { if (g.id === dentroId) j = k; });
  if (i < 0 || j < 0) return false;
  var f = l.rosa[i], d = l.panchina[j];
  l.rosa[i] = d; l.panchina[j] = f;
  if (this.portatore === f) this.portatore = d;
  this.scrivi('Cambio: esce ' + f.nome + ', entra ' + d.nome + '.', 'ev');
  return true;
};

Pt.chiudi = function () {
  this.finita = true;
  var m = this.mia.gol, a = this.avv.gol;
  this.esito = m > a ? 'vittoria' : (m < a ? 'sconfitta' : 'pareggio');
  this.scrivi('Fine partita. ' + this.punteggio() + '.', 'ev');
};

/* ============================================================
   SIMULAZIONE RAPIDA (per i risultati delle altre squadre)
   ============================================================ */
/* ============================================================
   CONDIZIONI DEI RISVEGLI IN PARTITA
   ============================================================ */
IE.condizioneFirma = function (P, g, cond) {
  var mio = P.mia;
  if (cond === 'sotto') return P.tempo >= 2 && mio.gol <= P.avv.gol - 2;
  if (cond === 'sottoUno') return P.tempo >= 2 && mio.gol < P.avv.gol;
  if (cond === 'subito') return g.ruolo === 'PT' && (P.avv.gol >= 2 || (P.tempo >= 2 && P.avv.gol >= 1));
  if (cond === 'pubblico') return P.tempo >= 2 && !P.amichevole;
  if (cond === 'area') return P.possesso === P.avv && P.zona >= 4;
  if (cond === 'entra') return P.tempo >= 2 && P.mia.rosa.indexOf(g) >= 0;
  return false;
};


IE.forzaSquadra = function (rosa) {
  var t = 0;
  rosa.slice(0, 11).forEach(function (g) { t += IE.valutazione(g); });
  return t / Math.max(1, Math.min(11, rosa.length));
};
IE.simulaVeloce = function (fa, fb) {
  var d = (fa - fb) / 10;
  var ga = Math.max(0, Math.round(1.3 + d * 0.55 + caso(2.2) - 1));
  var gb = Math.max(0, Math.round(1.3 - d * 0.55 + caso(2.2) - 1));
  if (ga === gb && Math.random() < 0.55) { if (d >= 0) ga++; else gb++; }
  return [ga, gb];
};

})();
