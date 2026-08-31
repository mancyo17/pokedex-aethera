/* ============================================================
   AMANOME ELEVEN — dati di base
   Elementi, statistiche, tecniche speciali, personaggi, squadre.
   Nessuna dipendenza: si carica prima di tutto il resto.
   ============================================================ */
(function () {
'use strict';
var IE = window.IE = window.IE || {};

/* ---------- elementi ----------
   Catena come nei giochi: Fuoco > Bosco > Aria > Terra > Fuoco. */
IE.elementi = {
  fuoco:  { nome: 'Fuoco',  icona: '🔥', batte: 'bosco', col: '#ff6a3d' },
  bosco:  { nome: 'Bosco',  icona: '🌲', batte: 'aria',  col: '#4fbf6a' },
  aria:   { nome: 'Aria',   icona: '🌀', batte: 'terra', col: '#5fc8ff' },
  terra:  { nome: 'Terra',  icona: '⛰️', batte: 'fuoco', col: '#d3a833' },
  neutro: { nome: 'Neutro', icona: '⚪', batte: null,    col: '#9aa7bd' }
};
IE.listaElementi = ['fuoco', 'bosco', 'aria', 'terra'];

/* Ritorna 1.15 se a è in vantaggio su b, 0.9 se in svantaggio, 1 altrimenti. */
IE.vantaggio = function (a, b) {
  if (!a || !b || a === 'neutro' || b === 'neutro') return 1;
  if (IE.elementi[a] && IE.elementi[a].batte === b) return 1.15;
  if (IE.elementi[b] && IE.elementi[b].batte === a) return 0.9;
  return 1;
};

/* ---------- ruoli ---------- */
IE.ruoli = {
  PT: { nome: 'Portiere',      breve: 'PT', desc: 'Ultima linea. Para con le mani e con la faccia.' },
  DF: { nome: 'Difensore',     breve: 'DF', desc: 'Ferma chi arriva. Il muro davanti al portiere.' },
  CC: { nome: 'Centrocampista',breve: 'CC', desc: 'Recupera, costruisce, corre per due.' },
  AT: { nome: 'Attaccante',    breve: 'AT', desc: 'Fa gol. È l\'unica cosa che gli chiedono.' }
};

/* ---------- statistiche ---------- */
IE.stat = {
  tir: { nome: 'Tiro',       col: '#ff5468' },
  fis: { nome: 'Fisico',     col: '#ff8a3d' },
  ctr: { nome: 'Controllo',  col: '#3fd07a' },
  dif: { nome: 'Difesa',     col: '#4aa8ff' },
  vel: { nome: 'Velocità',   col: '#5fc8ff' },
  res: { nome: 'Resistenza', col: '#a678ff' },
  gri: { nome: 'Grinta',     col: '#ffd23f' },
  par: { nome: 'Parata',     col: '#f2b32e' }
};
IE.ordineStat = ['tir', 'fis', 'ctr', 'dif', 'vel', 'res', 'gri', 'par'];

/* ---------- profili di crescita (punti per livello) ---------- */
IE.profili = {
  bomber:    { tir: 2.0, fis: 1.3, ctr: 1.2, dif: 0.6, vel: 1.5, res: 1.1, gri: 1.3, par: 0.2 },
  regista:   { tir: 1.2, fis: 0.9, ctr: 2.0, dif: 1.1, vel: 1.2, res: 1.3, gri: 1.5, par: 0.2 },
  ala:       { tir: 1.2, fis: 0.7, ctr: 1.5, dif: 0.8, vel: 2.0, res: 1.4, gri: 1.1, par: 0.2 },
  muro:      { tir: 0.8, fis: 2.0, ctr: 0.7, dif: 2.0, vel: 0.5, res: 1.4, gri: 1.4, par: 0.3 },
  terzino:   { tir: 0.7, fis: 1.1, ctr: 1.2, dif: 1.7, vel: 1.6, res: 1.5, gri: 1.2, par: 0.2 },
  portiere:  { tir: 0.4, fis: 1.2, ctr: 0.9, dif: 1.3, vel: 0.8, res: 1.2, gri: 1.6, par: 2.1 },
  tuttofare: { tir: 1.2, fis: 1.2, ctr: 1.3, dif: 1.2, vel: 1.2, res: 1.3, gri: 1.4, par: 0.3 }
};

/* ============================================================
   TECNICHE SPECIALI
   tipo: tiro | drib | blocco | parata
   pot : potenza aggiunta al duello
   tp  : costo in Punti Tecnica
   com : elenco di id-personaggio richiesti (tecnica combinata)
   ============================================================ */
function T(id, nome, tipo, el, pot, tp, desc, extra) {
  var t = { id: id, nome: nome, tipo: tipo, el: el, pot: pot, tp: tp, desc: desc };
  if (extra) for (var k in extra) t[k] = extra[k];
  return t;
}

IE.tecniche = {};
[
  /* --- tiri comuni --- */
  T('tiro_dritto',   'Tiro Dritto',            'tiro', 'neutro', 16, 6,  'Collo pieno, niente fronzoli. Il primo tiro che impara chiunque.'),
  T('bordata',       'Bordata',                'tiro', 'neutro', 26, 10, 'Corsa lunga e botta. Fa più rumore che male, ma qualche volta entra.'),
  T('tiro_a_giro',   'Tiro a Giro',            'tiro', 'aria',   30, 12, 'La palla gira attorno al portiere invece che addosso.'),
  T('palla_di_fuoco','Palla di Fuoco',         'tiro', 'fuoco',  34, 14, 'La palla si accende nel salto e arriva che scotta.'),
  T('lama_vento',    'Lama di Vento',          'tiro', 'aria',   32, 13, 'Un taglio piatto che passa dove sembrava non ci fosse spazio.'),
  T('zolla',         'Zolla Esplosiva',        'tiro', 'terra',  36, 15, 'Colpisce la palla e mezzo campo insieme.'),
  T('germoglio',     'Colpo di Germoglio',     'tiro', 'bosco',  33, 14, 'La palla scatta da terra come una pianta che spunta.'),
  T('cannonata',     'Cannonata',              'tiro', 'terra',  44, 20, 'Tutto il peso del corpo dentro un pallone solo.'),
  T('meteora',       'Pioggia di Meteore',     'tiro', 'fuoco',  52, 26, 'Il pallone sale, sparisce nel sole e ricade in porta.'),

  /* --- tiri di Amanome --- */
  T('freccia_amanome','Freccia di Amanome',    'tiro', 'aria',   42, 18, 'Hina incocca il piede come una freccia: non è potenza, è mira.'),
  T('ascia_di_legno','Ascia di Legno',         'tiro', 'terra',  46, 22, 'Il tiro di chi spacca tronchi da quando ha otto anni.'),
  T('tiro_della_capra','Zoccolo di Montagna',  'tiro', 'terra',  40, 18, 'Rikuto calcia come se il pallone fosse un sasso in discesa.'),
  T('calcio_del_primino','Calcio del Primino', 'tiro', 'neutro', 24, 9,  'Minoru arriva prima di tutti e tocca prima di pensarci.'),
  T('tuono_valle',   'Tuono della Valle',      'tiro', 'aria',   58, 28, 'Il rimbombo che fa un temporale chiuso fra due montagne.'),
  T('corriere',      'Corriere del Mattino',   'tiro', 'aria',   54, 26, 'I gemelli Sōma si scambiano la palla di corsa come le cassette del latte.', { com: ['yuki', 'aoi'] }),
  T('valanga',       'Valanga di Amanome',     'tiro', 'terra',  66, 32, 'Tre che partono insieme dalla stessa collina e non si fermano più.', { com: ['goro', 'rikuto'] }),
  T('undici_nomi',   'Undici Nomi',            'tiro', 'neutro', 88, 46, 'Il pallone passa fra tutti e undici prima di entrare. È il tiro del club, non di un giocatore.', { com: ['rei', 'hina', 'goro'] }),

  /* --- tiri comuni, per avere di che scegliere --- */
  T('tiro_al_volo',  'Tiro al Volo',           'tiro', 'neutro', 28, 11, 'Non la fa nemmeno rimbalzare.'),
  T('colpo_testa',   'Colpo di Testa',         'tiro', 'neutro', 30, 12, 'Chiude gli occhi un istante prima. Tutti lo fanno.'),
  T('punizione',     'Punizione a Foglia',     'tiro', 'aria',   36, 15, 'Sale sopra la barriera e poi cade di colpo.'),
  T('tiro_teso',     'Tiro Teso',              'tiro', 'fuoco',  38, 16, 'Basso, dritto, cattivo. Non fa scena e fa gol.'),
  T('siluro',        'Siluro',                 'tiro', 'terra',  42, 18, 'Rasoterra così forte che alza la polvere per venti metri.'),
  T('foglia_morta',  'Foglia Morta',           'tiro', 'bosco',  40, 17, 'Sembra fuori di tre metri finché non scende.'),
  T('raffica_tiri',  'Raffica',                'tiro', 'aria',   46, 20, 'Tre finte di tiro e il quarto parte davvero.'),

  /* --- dribbling comuni --- */
  T('doppio_passo',  'Doppio Passo',           'drib', 'neutro', 26, 10, 'Il piede passa sopra il pallone due volte. Funziona una volta su due.'),
  T('tunnel',        'Tunnel',                 'drib', 'neutro', 32, 13, 'Umiliante per chi lo subisce. Rischioso per chi lo prova.'),
  T('cambio_passo',  'Cambio di Passo',        'drib', 'aria',   34, 14, 'Rallenta, aspetta che l\'altro rallenti, riparte.'),
  T('spalla',        'Spalla a Spalla',        'drib', 'terra',  32, 13, 'Niente tecnica: peso contro peso.'),
  T('zig_zag',       'Zigzag',                 'drib', 'bosco',  36, 15, 'Non in linea retta: mai in linea retta.'),
  T('sombrero',      'Sombrero',               'drib', 'neutro', 40, 17, 'Se ti riesce ne parlano per un mese. Se sbagli, per due.'),

  /* --- blocchi comuni --- */
  T('anticipo',      'Anticipo',               'blocco', 'neutro', 22, 9,  'Arrivare mezzo secondo prima. È tutto lì.'),
  T('scivolata',     'Scivolata',              'blocco', 'terra',  34, 14, 'Terra in bocca e pallone in fallo laterale.'),
  T('gabbia',        'Gabbia',                 'blocco', 'bosco',  38, 16, 'Non gli togli la palla: gli togli tutte le direzioni.'),
  T('pressing2',     'Pressing a Due',         'blocco', 'aria',   36, 15, 'Uno davanti e uno alle spalle, nello stesso momento.'),

  /* --- parate comuni --- */
  T('uscita_bassa',  'Uscita Bassa',           'parata', 'neutro', 26, 10, 'Ai piedi dell\'attaccante. Fa male e serve.'),
  T('presa_alta',    'Presa Alta',             'parata', 'neutro', 32, 13, 'Sale fra tre teste e la prende con due mani.'),
  T('volo_laterale', 'Volo Laterale',          'parata', 'aria',   36, 15, 'Un metro più in là di quanto sembrasse possibile.'),
  T('mani_pietra',   'Mani di Pietra',         'parata', 'terra',  38, 16, 'Non respinge: ferma.'),

  /* --- FIRME: una a testa, e solo loro possono usarla --- */
  T('firma_rei',     'Ultimo a Mollare',       'blocco', 'neutro', 34, 16, 'Rei non è forte, non è veloce e non molla. Più siete sotto, più diventa un problema.', { soloDi: 'rei', sePerde: 30 }),
  T('firma_goro',    'Tronco che Cade',        'blocco', 'terra',  58, 26, 'Gorō non si butta e non salta. Arriva addosso, tutto insieme, come una cosa segata alla base.', { soloDi: 'goro' }),
  T('firma_hina',    'Freccia dei Trentotto',  'tiro',   'aria',   64, 30, 'Hina incocca, e per un secondo il campo è un bersaglio a ventotto metri. Trentotto studenti dietro la recinzione trattengono il fiato.', { soloDi: 'hina' }),
  T('firma_zero',    'Zero',                   'parata', 'terra',  58, 26, 'Lo chiamavano così per prenderlo in giro. Adesso è il nome di quello che succede quando tirano dalle sue parti.', { soloDi: 'zero', seSubito: 26 }),
  T('firma_minoru',  'Primo sul Pallone',      'drib',   'aria',   52, 22, 'Minoru non salta nessuno: ci arriva prima, e quindi non c\'è nessuno da saltare.', { soloDi: 'minoru', seFresco: 22 }),
  T('firma_kenta',   'Il Quaderno',            'blocco', 'bosco',  48, 21, 'Kenta non è veloce. Ma ha sei anni di partite scritte a mano e sa già dove andrà quella palla.', { soloDi: 'kenta' }),
  T('firma_gemelli', 'Le Cinque del Mattino',  'drib',   'aria',   60, 28, 'Otto chilometri al giorno da quando ne avevano sei. Passano ai due lati e non si guardano nemmeno.', { com: ['yuki', 'aoi'] }),
  T('firma_shinobu', 'Terzo Atto',             'drib',   'neutro', 56, 24, 'Shinobu cade. Il difensore si ferma. Shinobu si rialza già in corsa: il pubblico applaude una bugia.', { soloDi: 'shinobu' }),
  T('firma_rikuto',  'Frana',                  'tiro',   'terra',  62, 29, 'Quattrocento metri di dislivello messi dentro un pallone.', { soloDi: 'rikuto' }),
  T('firma_benkei',  'Il Pranzo è Servito',    'parata', 'terra',  50, 22, 'Benkei apre le braccia e occupa tutto. Da qualche parte, in tasca, c\'è ancora un panino.', { soloDi: 'benkei' }),
  T('firma_daichi',  'Delibera del 1986',      'blocco', 'fuoco',  60, 27, 'C\'era scritto che quel campo andava rifatto. Non l\'ha revocata nessuno. Daichi si mette lì e non si sposta.', { soloDi: 'daichi' }),
  T('firma_nao',     'Numero Quattordici',     'drib',   'bosco',  52, 23, 'La casella vuota nel registro del club. Adesso corre.', { soloDi: 'nao' }),
  T('firma_tu_AT',   'Tuono di Amanome',       'tiro',   'aria',   68, 32, 'Il rimbombo che fa un temporale chiuso fra due montagne, quando non ha da nessuna parte dove andare.', { soloDi: 'tu' }),
  T('firma_tu_CC',   'Tutta la Valle',         'drib',   'aria',   62, 28, 'Non è dribbling: è sapere dove sono tutti e dieci senza guardarli.', { soloDi: 'tu' }),
  T('firma_tu_DF',   'La Cresta del Kurogane', 'blocco', 'terra',  62, 28, 'Come la cresta sopra il paese: la vedi da lontano e non la passi.', { soloDi: 'tu' }),
  T('firma_tu_PT',   'Porta di Amanome',       'parata', 'terra',  62, 28, 'Arrugginita, storta, e da vent\'anni non l\'ha buttata giù nessuno.', { soloDi: 'tu' }),

  /* --- tiri degli avversari famosi --- */
  T('tornado_fuoco', 'Tornado di Fuoco',       'tiro', 'fuoco',  62, 30, 'Rovesciata avvolta nelle fiamme. Il tiro di Axel Blaze.'),
  T('pinguino1',     'Pinguino Imperatore n.1','tiro', 'neutro', 68, 34, 'Un esercito di pinguini spinge il pallone in porta.', { com: [] }),
  T('lama_cometa',   'Lama Cometa',            'tiro', 'aria',   60, 30, 'Una scia bianca che taglia il cielo dell\'area.'),
  T('splendore',     'Splendore Divino',       'tiro', 'aria',   66, 33, 'Ali di luce e un tiro che nessuno guarda in faccia.'),
  T('eterna_bufera', 'Eterna Bufera',          'tiro', 'aria',   58, 28, 'Ghiaccio e vento: la porta sparisce dentro la neve.'),
  T('drago_ruggente','Drago Ruggente',         'tiro', 'fuoco',  50, 24, 'Un drago sale dal terreno e accompagna la palla.'),
  T('fantasma',      'Tiro Fantasma',          'tiro', 'bosco',  48, 22, 'La palla si vede solo quando è già dentro.'),
  T('spirale_nera',  'Spirale Nera',           'tiro', 'terra',  54, 26, 'Un imbuto scuro che risucchia chiunque provi a mettersi in mezzo.'),

  /* --- dribbling --- */
  T('finta_secca',   'Finta Secca',            'drib', 'neutro', 16, 6,  'Un passo di troppo nella direzione sbagliata, e sei passato.'),
  T('passo_di_lato', 'Passo di Lato',          'drib', 'neutro', 22, 9,  'Non lo salti: lo fai spostare.'),
  T('folata',        'Folata',                 'drib', 'aria',   30, 12, 'Un colpo di vento e il difensore si ritrova indietro.'),
  T('slalom_bosco',  'Slalom del Bosco',       'drib', 'bosco',  34, 14, 'Come scendere fra gli abeti: non frenare mai.'),
  T('giravolta',     'Giravolta di Fuoco',     'drib', 'fuoco',  36, 15, 'Gira su sé stesso lasciando una riga bruciata.'),
  T('passo_capra',   'Passo della Capra',      'drib', 'terra',  34, 14, 'Rikuto cambia direzione su un piede solo, in salita.'),
  T('sipario',       'Sipario!',               'drib', 'neutro', 38, 16, 'Shinobu recita un dolore atroce, il difensore si ferma, lei riparte.'),
  T('fuga_del_daino','Fuga del Daino',         'drib', 'aria',   38, 16, 'Minoru scatta prima ancora di aver deciso dove andare.'),
  T('vento_valle',   'Vento della Valle',      'drib', 'aria',   44, 19, 'I gemelli passano ai due lati dello stesso avversario.', { com: ['yuki', 'aoi'] }),
  T('spirale_vento', 'Spirale del Vento',      'drib', 'aria',   44, 19, 'Una scia azzurra che si chiude dietro chi corre.'),
  T('illusione',     'Illusione',              'drib', 'bosco',  46, 20, 'Tre copie partono, una sola ha il pallone.'),
  T('lettura',       'Lettura del Campo',      'drib', 'neutro', 32, 13, 'Kenta ha già visto dove sarà lo spazio fra due secondi.'),

  /* --- blocchi --- */
  T('contrasto',     'Contrasto Deciso',       'blocco', 'neutro', 16, 6,  'Piede dentro, senza pensarci. Fa male a tutti e due.'),
  T('sbarramento',   'Sbarramento',            'blocco', 'neutro', 26, 10, 'Due passi indietro e il corridoio si chiude.'),
  T('muro_di_terra', 'Muro di Terra',          'blocco', 'terra',  32, 13, 'Il terreno si alza e ferma la corsa.'),
  T('trappola_radici','Trappola di Radici',    'blocco', 'bosco',  30, 12, 'Radici dal fondo del campo che si stringono sulle caviglie.'),
  T('raffica_gelata','Raffica Gelata',         'blocco', 'aria',   44, 19, 'Un colpo di vento freddo che toglie l\'equilibrio.'),
  T('boscaiolo',     'Colpo del Boscaiolo',    'blocco', 'terra',  42, 18, 'Gorō non salta: arriva addosso come un tronco che cade.'),
  T('recinzione',    'La Recinzione',          'blocco', 'terra',  46, 20, 'Daichi mette il corpo dove passerebbe la palla e non si sposta.'),
  T('doppia_consegna','Doppia Consegna',       'blocco', 'aria',   40, 17, 'I gemelli arrivano dai due lati nello stesso istante.', { com: ['yuki', 'aoi'] }),
  T('occhio_arciere','Occhio dell\'Arciere',   'blocco', 'aria',   38, 16, 'Hina non guarda la palla: guarda il piede. E parte prima.'),
  T('cancello_pietra','Cancello di Pietra',    'blocco', 'terra',  50, 22, 'Un muro che si chiude a chiave davanti all\'area.'),
  T('marcatura',     'Marcatura d\'Acciaio',   'blocco', 'neutro', 48, 21, 'Ti sta addosso finché non sbagli tu.'),

  /* --- parate --- */
  T('presa_sicura',  'Presa Sicura',           'parata', 'neutro', 20, 7,  'Due mani, petto, palla al sicuro. Niente di speciale, funziona.'),
  T('pugno_teso',    'Pugno Teso',             'parata', 'neutro', 30, 12, 'Se non si può prendere, si manda lontano.'),
  T('cancello_chiuso','Cancello Chiuso',       'parata', 'terra',  40, 17, 'La porta si chiude come una stalla la sera.'),
  T('pancia_acciaio','Pancia d\'Acciaio',      'parata', 'terra',  34, 14, 'Benkei si mette in mezzo. Il resto lo fa la stazza.'),
  T('mani_di_neve',  'Mani di Neve',           'parata', 'aria',   44, 19, 'Le mani si allargano in una nevicata che assorbe il tiro.'),
  T('rete_di_rami',  'Rete di Rami',           'parata', 'bosco',  42, 18, 'Rami che crescono di traverso alla traiettoria.'),
  T('muro_custode',  'Muro del Custode',       'parata', 'terra',  48, 22, 'Zero para come se dietro di lui ci fosse tutta la scuola.'),
  T('presa_falco',   'Presa del Falco',        'parata', 'aria',   52, 23, 'Un volo laterale che sembra troppo lungo per essere vero.'),
  T('mano_magica',   'Mano Magica',            'parata', 'neutro', 58, 26, 'Una mano enorme si alza dai guantoni e ferma tutto.'),
  T('muro_infinito', 'Muro Infinito',          'parata', 'terra',  56, 25, 'Il portiere si moltiplica lungo tutta la linea di porta.')
].forEach(function (t) { IE.tecniche[t.id] = t; });

IE.tec = function (id) { return IE.tecniche[id] || null; };

/* Tecniche disponibili come «scelta iniziale» per il protagonista. */
IE.tecnicheIniziali = {
  PT: ['presa_sicura', 'pugno_teso', 'cancello_chiuso'],
  DF: ['contrasto', 'sbarramento', 'muro_di_terra'],
  CC: ['passo_di_lato', 'finta_secca', 'lettura'],
  AT: ['tiro_dritto', 'bordata', 'tiro_a_giro']
};
IE.tecnicaElemento = {
  fuoco: { tiro: 'palla_di_fuoco', drib: 'giravolta',    blocco: 'contrasto',       parata: 'pugno_teso' },
  aria:  { tiro: 'lama_vento',     drib: 'folata',       blocco: 'raffica_gelata',  parata: 'mani_di_neve' },
  terra: { tiro: 'zolla',          drib: 'passo_capra',  blocco: 'muro_di_terra',   parata: 'cancello_chiuso' },
  bosco: { tiro: 'germoglio',      drib: 'slalom_bosco', blocco: 'trappola_radici', parata: 'rete_di_rami' }
};

/* ============================================================
   ORIGINI DEL PROTAGONISTA
   ============================================================ */
IE.origini = [
  { id: 'citta',   nome: 'Trasferito dalla città',
    desc: 'Tokyo, sesto piano, campetto in cemento sotto casa. Poi il lavoro di tuo padre è finito e siete saliti quassù.',
    bonus: { ctr: 8, tir: 4 }, profilo: 'regista' },
  { id: 'valle',   nome: 'Nato in valle',
    desc: 'Non hai mai visto una partita dal vivo. Le hai sentite tutte alla radio, con la nebbia fuori dalla finestra.',
    bonus: { res: 10, gri: 4 }, profilo: 'tuttofare' },
  { id: 'atletica',nome: 'Ex del club di atletica',
    desc: 'Correvi i 1500. Sei bravo, ma correre da soli aveva smesso di divertirti.',
    bonus: { vel: 9, res: 5 }, profilo: 'ala' },
  { id: 'lavoro',  nome: 'Cresciuto fra i campi',
    desc: 'Alzi sacchi da quando avevi dieci anni. Hai le spalle di uno di terza superiore.',
    bonus: { fis: 9, dif: 5 }, profilo: 'muro' },
  { id: 'tribuna', nome: 'Tifoso da sempre',
    desc: 'Sai a memoria le formazioni di squadre che non esistono più. Non hai mai giocato una partita vera in vita tua.',
    bonus: { gri: 10, ctr: 4 }, profilo: 'tuttofare' }
];

/* ============================================================
   PERSONAGGI DI AMANOME
   ============================================================ */
function P(o) { return o; }

IE.personaggi = {
  /* --- reclutabili --- */
  rei: P({ id: 'rei', nome: 'Rei Tachibana', corto: 'Rei', ruolo: 'CC', el: 'bosco',
    col: '#7ed08f', prof: 'tuttofare', pot: 1.25, tec: ['finta_secca'],
    base: { tir: 18, fis: 20, ctr: 22, dif: 18, vel: 22, res: 26, gri: 34, par: 8 },
    bio: 'Il tuo compagno di banco. Non sa giocare a calcio, non gli è mai interessato, e ha detto sì prima ancora che tu finissi la domanda.',
    voce: 'Va bene. Cioè, non ho capito niente, però va bene.' }),

  goro: P({ id: 'goro', nome: 'Gorō Ishizuka', corto: 'Gorō', ruolo: 'DF', el: 'terra',
    col: '#c08b4a', prof: 'muro', pot: 1.05, tec: ['contrasto', 'boscaiolo'],
    base: { tir: 22, fis: 46, ctr: 14, dif: 34, vel: 10, res: 30, gri: 24, par: 10 },
    bio: 'Un metro e ottantatré a tredici anni. Dopo la scuola lavora nella segheria del padre e non lo dice a nessuno.',
    voce: '...se serve spingo. Correre no.' }),

  hina: P({ id: 'hina', nome: 'Hina Kurosawa', corto: 'Hina', ruolo: 'AT', el: 'aria',
    col: '#e0637f', prof: 'bomber', pot: 1.15, tec: ['freccia_amanome', 'occhio_arciere'],
    base: { tir: 42, fis: 18, ctr: 30, dif: 14, vel: 24, res: 22, gri: 30, par: 8 },
    bio: 'Capitana del club di tiro con l\'arco: dodici anni di bersagli e un solo modo di stare in piedi. Del calcio pensa tutto il male possibile.',
    voce: 'Colpire un bersaglio fermo è facile. Il vostro si muove e urla. Va bene, mi interessa.' }),

  zero: P({ id: 'zero', nome: 'Tsukasa Naruse', corto: 'Zero', ruolo: 'PT', el: 'terra',
    col: '#8f7ae0', prof: 'portiere', pot: 1.2, tec: ['presa_sicura', 'muro_custode'],
    base: { tir: 14, fis: 30, ctr: 22, dif: 28, vel: 20, res: 26, gri: 38, par: 44 },
    bio: 'Lo chiamano Zero da quando ha preso otto gol in una finale, in città, davanti a duemila persone. Si è trasferito ad Amanome per non essere più nessuno.',
    voce: 'Io in porta non ci torno. Chiaro? Non ci torno.' }),

  minoru: P({ id: 'minoru', nome: 'Minoru Sasaoka', corto: 'Minoru', ruolo: 'AT', el: 'aria',
    col: '#5fc8ff', prof: 'ala', pot: 1.1, tec: ['calcio_del_primino'],
    base: { tir: 20, fis: 8, ctr: 22, dif: 10, vel: 44, res: 24, gri: 14, par: 6 },
    bio: 'Primo anno, un metro e quarantuno, il più veloce della valle. Ha una paura fisica del contatto che gli fa chiudere gli occhi.',
    voce: 'Io corro forte! Solo... non addosso alla gente.' }),

  kenta: P({ id: 'kenta', nome: 'Kenta Ubukata', corto: 'Kenta', ruolo: 'CC', el: 'bosco',
    col: '#9fe07e', prof: 'regista', pot: 1.2, tec: ['lettura'],
    base: { tir: 14, fis: 12, ctr: 34, dif: 20, vel: 14, res: 18, gri: 26, par: 6 },
    bio: 'Club di scienze, membro unico. Ha registrato a mano i risultati di tutte le partite del Football Frontier degli ultimi sei anni. Con la palla è un disastro.',
    voce: 'Statisticamente perderemo. Ho fatto i conti. Li ho fatti tre volte. Ci sto lo stesso.' }),

  yuki: P({ id: 'yuki', nome: 'Yuki Sōma', corto: 'Yuki', ruolo: 'CC', el: 'aria',
    col: '#6fd3c8', prof: 'ala', pot: 1.05, tec: ['vento_valle'],
    base: { tir: 18, fis: 18, ctr: 26, dif: 24, vel: 34, res: 42, gri: 22, par: 6 },
    bio: 'Il maggiore dei gemelli Sōma di undici minuti. Ogni mattina, dalle cinque, otto chilometri di consegne del latte in bicicletta con il fratello.',
    voce: 'Alle cinque siamo già svegli. Il pomeriggio è tutto tempo regalato.' }),

  aoi: P({ id: 'aoi', nome: 'Aoi Sōma', corto: 'Aoi', ruolo: 'DF', el: 'aria',
    col: '#6f9fd3', prof: 'terzino', pot: 1.05, tec: ['vento_valle', 'doppia_consegna'],
    base: { tir: 14, fis: 20, ctr: 24, dif: 28, vel: 32, res: 44, gri: 22, par: 6 },
    bio: 'Il minore. Parla la metà del fratello e finisce sempre le sue frasi.',
    voce: '...tutto tempo regalato. Sì.' }),

  shinobu: P({ id: 'shinobu', nome: 'Shinobu Katagiri', corto: 'Shinobu', ruolo: 'CC', el: 'bosco',
    col: '#e0a35f', prof: 'ala', pot: 1.1, tec: ['sipario'],
    base: { tir: 22, fis: 14, ctr: 32, dif: 16, vel: 30, res: 22, gri: 28, par: 6 },
    bio: 'Il club di teatro di Amanome è lei e due sedie. Recita da quando ha sei anni e ha capito subito che una finta è solo una bugia detta con il corpo.',
    voce: 'Quindi mi state chiedendo di mentire, in pubblico, per un\'ora e mezza? Dove firmo.' }),

  rikuto: P({ id: 'rikuto', nome: 'Rikuto Hazama', corto: 'Rikuto', ruolo: 'AT', el: 'terra',
    col: '#a08050', prof: 'muro', pot: 1.15, tec: ['passo_capra', 'tiro_della_capra'],
    base: { tir: 34, fis: 44, ctr: 12, dif: 26, vel: 18, res: 40, gri: 30, par: 8 },
    bio: 'Vive quattrocento metri più in alto di tutti gli altri, con le capre. Scende a scuola a giorni alterni quando la strada non è chiusa. In un anno lo hai sentito dire nove parole.',
    voce: '...ok.' }),

  benkei: P({ id: 'benkei', nome: 'Benkei Marui', corto: 'Benkei', ruolo: 'PT', el: 'terra',
    col: '#d9a441', prof: 'portiere', pot: 1.0, tec: ['pancia_acciaio'],
    base: { tir: 10, fis: 40, ctr: 12, dif: 24, vel: 8, res: 20, gri: 22, par: 26 },
    bio: 'Sta in porta perché è largo e perché lì si può stare fermi. Porta sempre in tasca due panini avvolti nella carta.',
    voce: 'Se para il panino paro anch\'io. Ci provo, dai.' }),

  daichi: P({ id: 'daichi', nome: 'Daichi Amano', corto: 'Daichi', ruolo: 'DF', el: 'fuoco',
    col: '#ff8a5f', prof: 'terzino', pot: 1.2, tec: ['recinzione', 'sbarramento'],
    base: { tir: 22, fis: 32, ctr: 22, dif: 34, vel: 28, res: 28, gri: 30, par: 10 },
    bio: 'Figlio del capo del villaggio. È l\'unico ad Amanome che sappia davvero giocare — e l\'unico che abbia buoni motivi per volere quel campo raso al suolo.',
    voce: 'Quel terreno è già stato usato per fare promesse una volta. Non ricapita.' }),

  nao: P({ id: 'nao', nome: 'Nao Kirishima', corto: 'Nao', ruolo: 'CC', el: 'bosco',
    col: '#c98fe0', prof: 'tuttofare', pot: 1.1, tec: ['passo_di_lato'],
    base: { tir: 18, fis: 14, ctr: 26, dif: 18, vel: 22, res: 28, gri: 36, par: 10 },
    bio: 'Nipote del custode. Tiene i registri, le borracce, gli orari dei pullman e i nervi di tutti. Non voleva giocare: le mancava un numero.',
    voce: 'Io scrivo, non corro. ...Quanti siete? Dieci? Ah. Va bene, va bene.' }),

  /* --- non giocanti --- */
  tu:     P({ id: 'tu', nome: 'Tu', corto: 'Tu', ruolo: 'CC', el: 'aria', col: '#ffd23f', prof: 'tuttofare', pot: 1.3, tec: [], base: {}, bio: '' }),
  amagai: P({ id: 'amagai', nome: 'Sōichirō Amagai', corto: 'Amagai', col: '#b0b8c8', png: true,
    bio: 'Custode della scuola da trentun anni. Apre alle sei, chiude alle otto, non parla con nessuno.' }),
  ayase:  P({ id: 'ayase', nome: 'Prof.ssa Mitsuki Ayase', corto: 'Ayase', col: '#7ec8e0', png: true,
    bio: 'Educazione fisica, primo incarico. Ha ventisei anni e la stessa faccia terrorizzata dei suoi studenti.' }),
  sindaco:P({ id: 'sindaco', nome: 'Kōhei Amano', corto: 'Amano', col: '#c8a06f', png: true,
    bio: 'Capo del villaggio. Padre di Daichi. Ha un piano per Amanome che non prevede un campo da calcio.' }),
  tonda:  P({ id: 'tonda', nome: 'Gen Tonda', corto: 'Tonda', col: '#e0d06f', png: true,
    bio: 'Capitano del club di baseball di Amanome. Nove giocatori, sette mazze, zero vittorie.' }),
  preside:P({ id: 'preside', nome: 'Preside Uchimura', corto: 'Preside', col: '#9aa7bd', png: true, bio: 'Preside della scuola media di Amanome.' }),
  mark:   P({ id: 'mark', nome: 'Mark Evans', corto: 'Mark', col: '#ff7043', png: true, bio: 'Capitano e portiere della Raimon. Nipote del leggendario Dave Evans.' }),
  axel:   P({ id: 'axel', nome: 'Axel Blaze', corto: 'Axel', col: '#ff5468', png: true, bio: 'Attaccante della Raimon. Il fuoco lo tiene tutto dentro.' }),
  jude:   P({ id: 'jude', nome: 'Jude Sharp', corto: 'Jude', col: '#5fa8ff', png: true, bio: 'Stratega. Vede la partita tre passaggi avanti a chiunque.' }),
  nelly:  P({ id: 'nelly', nome: 'Nelly Raimon', corto: 'Nelly', col: '#ffb0c0', png: true, bio: 'Manager della Raimon. Figlia del presidente della scuola.' }),
  cronista:P({ id: 'cronista', nome: 'Radio Valle', corto: 'Radio', col: '#8fa0c0', png: true, bio: 'La radio locale. Tre ascoltatori e un microfono degli anni Settanta.' })
};

/* ============================================================
   CALCOLO DELLE STATISTICHE
   ============================================================ */
IE.statoDi = function (g, chiave) {
  var prof = IE.profili[g.prof] || IE.profili.tuttofare;
  var base = (g.base && g.base[chiave]) || 0;
  var bonus = (g.bonus && g.bonus[chiave]) || 0;
  var cresc = prof[chiave] * (Math.max(1, g.lv || 1) - 1) * (g.pot || 1);
  var extra = (g.allen && g.allen[chiave]) || 0;
  var v = Math.round(base + bonus + cresc + extra);
  return Math.max(1, Math.min(160, v));
};
IE.tutteStat = function (g) {
  var o = {};
  IE.ordineStat.forEach(function (k) { o[k] = IE.statoDi(g, k); });
  return o;
};
IE.tpMax = function (g) { return 60 + Math.round(IE.statoDi(g, 'gri') * 0.8) + Math.round((g.lv || 1) * 1.5); };
IE.fpMax = function (g) { return 70 + Math.round(IE.statoDi(g, 'res') * 0.9) + Math.round((g.lv || 1) * 1.2); };

/* Valutazione sintetica, per le liste. */
IE.valutazione = function (g) {
  var s = IE.tutteStat(g), tot;
  if (g.ruolo === 'PT') tot = s.par * 2.2 + s.gri * 1.2 + s.dif + s.fis * .8 + s.res * .6;
  else if (g.ruolo === 'DF') tot = s.dif * 1.8 + s.fis * 1.3 + s.vel * .9 + s.res * .8 + s.gri * .8;
  else if (g.ruolo === 'CC') tot = s.ctr * 1.8 + s.vel * 1.1 + s.res * 1.1 + s.dif * .9 + s.gri * .9 + s.tir * .6;
  else tot = s.tir * 1.8 + s.vel * 1.2 + s.ctr * 1.1 + s.fis * .9 + s.gri * .8;
  return Math.round(tot / 6.5);
};

/* Crea l'istanza giocabile di un personaggio del listino. */
IE.creaGiocatore = function (id, lv) {
  var m = IE.personaggi[id];
  if (!m) return null;
  var g = {
    id: id, nome: m.nome, corto: m.corto, ruolo: m.ruolo, el: m.el, col: m.col,
    prof: m.prof, pot: m.pot, base: Object.assign({}, m.base), allen: {},
    lv: lv || 1, exp: 0, tec: (m.tec || []).slice(), numero: 0
  };
  g.tp = IE.tpMax(g); g.fp = IE.fpMax(g);
  return g;
};

/* ============================================================
   AVVERSARI — nomi di riempimento e generatore di rose
   ============================================================ */
var COGNOMI = ['Kagawa','Morita','Yasuda','Tokunaga','Iwase','Shindō','Kurata','Nomura','Ōbayashi',
  'Serizawa','Tanigawa','Hoshino','Uehara','Mizuki','Kanda','Andō','Fujisaki','Kunimitsu','Terada',
  'Nakabayashi','Ozaki','Hayami','Sugimoto','Katayama','Momoi','Ryūzaki','Shikimi','Nishio','Ōgami','Tsuruta'];
var NOMI = ['Ren','Sōta','Kaito','Haruto','Yūma','Riku','Asahi','Takumi','Sora','Hinata','Jun',
  'Kōki','Naoya','Tetsu','Shun','Masaki','Ryō','Itsuki','Daigo','Kōsei'];

function rngDa(seme) {
  var s = 0; for (var i = 0; i < seme.length; i++) s = (s * 31 + seme.charCodeAt(i)) >>> 0;
  return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/* Genera una rosa completa: parte dai titolari nominati e riempie il resto. */
IE.rosaSquadra = function (sq) {
  var r = rngDa(sq.id), rosa = [], usati = {}, i;
  (sq.chiave || []).forEach(function (c, idx) {
    var g = {
      id: sq.id + '_' + (c.id || idx), nome: c.nome, corto: c.corto || c.nome.split(' ')[0],
      ruolo: c.ruolo, el: c.el || 'neutro', col: c.col || sq.col, prof: c.prof || 'tuttofare',
      pot: 0, base: {}, allen: {}, lv: c.lv || sq.lv, exp: 0, tec: (c.tec || []).slice(), numero: idx + 1
    };
    var b = c.b || 0;
    IE.ordineStat.forEach(function (k) { g.base[k] = Math.round((sq.base + b) * (c.mod && c.mod[k] ? c.mod[k] : 1)); });
    if (g.ruolo !== 'PT') g.base.par = Math.round(g.base.par * 0.35);
    g.tp = IE.tpMax(g); g.fp = IE.fpMax(g);
    rosa.push(g); usati[g.nome] = 1;
  });
  var manca = ['PT', 'DF', 'DF', 'DF', 'DF', 'CC', 'CC', 'CC', 'CC', 'AT', 'AT', 'DF', 'CC', 'AT', 'PT'];
  rosa.forEach(function (g) { var k = manca.indexOf(g.ruolo); if (k >= 0) manca.splice(k, 1); });
  var profDi = { PT: 'portiere', DF: ['muro', 'terzino'], CC: ['regista', 'ala'], AT: ['bomber', 'ala'] };
  for (i = 0; rosa.length < 16 && i < 40; i++) {
    var ruolo = manca.shift() || 'CC';
    var nome; do { nome = NOMI[Math.floor(r() * NOMI.length)] + ' ' + COGNOMI[Math.floor(r() * COGNOMI.length)]; } while (usati[nome]);
    usati[nome] = 1;
    var p = profDi[ruolo]; p = Array.isArray(p) ? p[Math.floor(r() * p.length)] : p;
    var g2 = {
      id: sq.id + '_f' + i, nome: nome, corto: nome.split(' ')[1], ruolo: ruolo,
      el: IE.listaElementi[Math.floor(r() * 4)], col: sq.col2 || sq.col, prof: p, pot: 0,
      base: {}, allen: {}, lv: sq.lv, exp: 0, tec: [], numero: rosa.length + 1
    };
    IE.ordineStat.forEach(function (k) { g2.base[k] = Math.round((sq.base - 4 + r() * 10)); });
    if (ruolo !== 'PT') g2.base.par = Math.round(g2.base.par * 0.35);
    /* una tecnica comune adatta al ruolo */
    var comuni = { PT: ['presa_sicura', 'pugno_teso'], DF: ['contrasto', 'sbarramento'], CC: ['finta_secca', 'passo_di_lato'], AT: ['tiro_dritto', 'bordata'] };
    g2.tec.push(comuni[ruolo][Math.floor(r() * 2)]);
    if (sq.lv >= 12) g2.tec.push(IE.tecnicaElemento[g2.el][ruolo === 'PT' ? 'parata' : ruolo === 'DF' ? 'blocco' : ruolo === 'AT' ? 'tiro' : 'drib']);
    g2.tp = IE.tpMax(g2); g2.fp = IE.fpMax(g2);
    rosa.push(g2);
  }
  return rosa;
};

/* ============================================================
   SQUADRE AVVERSARIE
   base = livello medio delle statistiche di partenza
   ============================================================ */
IE.squadre = {
  baseball: { id: 'baseball', nome: 'Club di Baseball di Amanome', sigla: 'BAS', lvCons: 2, col: '#e0d06f', col2: '#a89a4a',
    lv: 3, base: 20, stemma: '⚾',
    motto: 'Nove giocatori, sette mazze, zero vittorie. Ma le braccia ce le hanno.',
    chiave: [
      { id: 'tonda', nome: 'Gen Tonda', ruolo: 'AT', el: 'terra', prof: 'bomber', b: 12, tec: ['bordata'], mod: { tir: 1.5, fis: 1.3 } },
      { id: 'ric', nome: 'Sō Kaneko', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 8, tec: ['presa_sicura'], mod: { par: 1.3 } }
    ] },

  kuzuryu: { id: 'kuzuryu', nome: 'Scuola Media Kuzuryū', sigla: 'KUZ', lvCons: 7, col: '#4f7fd0', col2: '#2f5090',
    lv: 8, base: 26, stemma: '🐉',
    motto: 'Quattrocento studenti, due campi in erba, un pullman tutto loro. La scuola grande della valle.',
    chiave: [
      { id: 'cap', nome: 'Jin Shikimi', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 14, tec: ['tiro_a_giro', 'bordata'], mod: { tir: 1.4, vel: 1.2 } },
      { id: 'por', nome: 'Ryō Amemiya', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 10, tec: ['presa_sicura', 'pugno_teso'], mod: { par: 1.3 } },
      { id: 'dif', nome: 'Take Ōmori', ruolo: 'DF', el: 'terra', prof: 'muro', b: 10, tec: ['contrasto'], mod: { dif: 1.3, fis: 1.3 } }
    ] },

  shirakaba: { id: 'shirakaba', nome: 'Scuola Media Shirakaba', sigla: 'SHI', lvCons: 12, col: '#7ec89a', col2: '#3f7a58',
    lv: 12, base: 31, stemma: '🌿',
    motto: 'Giocano in mezzo alle betulle da vent\'anni e nessuno li ha mai visti perdere in casa.',
    chiave: [
      { id: 'cap', nome: 'Sōji Wakabayashi', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 11, tec: ['slalom_bosco', 'germoglio'], mod: { ctr: 1.4 } },
      { id: 'at', nome: 'Kei Todoroki', ruolo: 'AT', el: 'bosco', prof: 'bomber', b: 14, tec: ['germoglio'], mod: { tir: 1.35 } },
      { id: 'por', nome: 'Hajime Nozaki', ruolo: 'PT', el: 'bosco', prof: 'portiere', b: 12, tec: ['rete_di_rami'], mod: { par: 1.3 } }
    ] },

  tomegawa: { id: 'tomegawa', nome: 'Scuola Media Tomegawa', sigla: 'TOM', lvCons: 17, col: '#d06f6f', col2: '#8f3f3f',
    lv: 16, base: 39, stemma: '🔥',
    motto: 'Corrono per novanta minuti e non parlano mai. Il loro allenatore urla per tutti.',
    chiave: [
      { id: 'cap', nome: 'Gaku Shiratori', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 13, tec: ['palla_di_fuoco', 'giravolta'], mod: { tir: 1.4, fis: 1.2 } },
      { id: 'cc', nome: 'Hiro Enomoto', ruolo: 'CC', el: 'fuoco', prof: 'ala', b: 14, tec: ['giravolta'], mod: { vel: 1.3 } },
      { id: 'por', nome: 'Ken Mabuchi', ruolo: 'PT', el: 'fuoco', prof: 'portiere', b: 14, tec: ['pugno_teso'], mod: { par: 1.35 } }
    ] },

  hakuba: { id: 'hakuba', nome: 'Scuola Media Hakuba', sigla: 'HAK', lvCons: 21, col: '#cfe4ff', col2: '#6f8fb0',
    lv: 21, base: 43, stemma: '🏔️',
    motto: 'Campioni di Nagano da sei anni. Si allenano sulla neve perché è più difficile.',
    chiave: [
      { id: 'cap', nome: 'Tōya Shirasaki', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 15, tec: ['eterna_bufera', 'folata'], mod: { tir: 1.4, ctr: 1.2 } },
      { id: 'dif', nome: 'Gen Kirino', ruolo: 'DF', el: 'aria', prof: 'muro', b: 13, tec: ['raffica_gelata'], mod: { dif: 1.35, fis: 1.2 } },
      { id: 'por', nome: 'Aki Tsugumi', ruolo: 'PT', el: 'aria', prof: 'portiere', b: 14, tec: ['mani_di_neve'], mod: { par: 1.35 } }
    ] },

  occult: { id: 'occult', nome: 'Scuola Media Occult', sigla: 'OCC', lvCons: 23, col: '#7a5fc8', col2: '#3f2f70',
    lv: 24, base: 43, stemma: '👻',
    motto: 'Entrano in campo con le bende e le torce. Metà del lavoro lo fanno prima del fischio d\'inizio.',
    chiave: [
      { id: 'cap', nome: 'Zell Bandō', ruolo: 'AT', el: 'bosco', prof: 'bomber', b: 15, tec: ['fantasma'], mod: { tir: 1.35 } },
      { id: 'por', nome: 'Rō Gūna', ruolo: 'PT', el: 'bosco', prof: 'portiere', b: 14, tec: ['rete_di_rami'], mod: { par: 1.3 } }
    ] },

  wild: { id: 'wild', nome: 'Scuola Media Wild', sigla: 'WIL', lvCons: 25, col: '#c8863f', col2: '#7a4a1f',
    lv: 27, base: 50, stemma: '🐗',
    motto: 'Si allenano correndo dietro ai cinghiali. Non è un modo di dire.',
    chiave: [
      { id: 'cap', nome: 'Bran Kodama', ruolo: 'DF', el: 'terra', prof: 'muro', b: 17, tec: ['cancello_pietra', 'contrasto'], mod: { fis: 1.45, dif: 1.35 } },
      { id: 'at', nome: 'Rob Ushio', ruolo: 'AT', el: 'terra', prof: 'bomber', b: 15, tec: ['cannonata'], mod: { tir: 1.35, fis: 1.2 } },
      { id: 'por', nome: 'Gō Inukai', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 14, tec: ['cancello_chiuso'], mod: { par: 1.3 } }
    ] },

  shuriken: { id: 'shuriken', nome: 'Scuola Media Shuriken', sigla: 'SHU', lvCons: 27, col: '#5f9a7a', col2: '#2f5a45',
    lv: 30, base: 46, stemma: '🥷',
    motto: 'Sparire, riapparire, e nel frattempo segnare.',
    chiave: [
      { id: 'cap', nome: 'Kage Hanzō', ruolo: 'CC', el: 'bosco', prof: 'ala', b: 18, tec: ['illusione', 'fantasma'], mod: { vel: 1.4, ctr: 1.25 } },
      { id: 'por', nome: 'Saburō Kiri', ruolo: 'PT', el: 'bosco', prof: 'portiere', b: 17, tec: ['rete_di_rami', 'pugno_teso'], mod: { par: 1.35 } }
    ] },

  royal: { id: 'royal', nome: 'Royal Academy', sigla: 'ROY', lvCons: 31, col: '#e8d27a', col2: '#8f7a2f',
    lv: 34, base: 54, stemma: '👑',
    motto: 'La scuola di calcio più forte del Giappone. Non hanno mai perso una finale nazionale.',
    chiave: [
      { id: 'jude', nome: 'Jude Sharp', corto: 'Jude', ruolo: 'CC', el: 'aria', prof: 'regista', b: 24, col: '#5fa8ff',
        tec: ['pinguino1', 'illusione', 'marcatura'], mod: { ctr: 1.5, gri: 1.3, tir: 1.2 } },
      { id: 'sam', nome: 'David Samford', corto: 'Samford', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 21, tec: ['muro_infinito', 'pugno_teso'], mod: { par: 1.3 } },
      { id: 'dif', nome: 'Herman Waldon', ruolo: 'DF', el: 'terra', prof: 'muro', b: 18, tec: ['cancello_pietra'], mod: { dif: 1.4, fis: 1.3 } }
    ] },

  zeus: { id: 'zeus', nome: 'Istituto Zeus', sigla: 'ZEU', lvCons: 33, col: '#f0e6c8', col2: '#c8a83f',
    lv: 38, base: 53, stemma: '⚡',
    motto: 'Dicono di essere figli degli dèi. Per novanta minuti sembra vero.',
    chiave: [
      { id: 'byron', nome: 'Byron Love', corto: 'Byron', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 27, col: '#ffe8a0',
        tec: ['splendore', 'lama_cometa'], mod: { tir: 1.55, ctr: 1.25 } },
      { id: 'por', nome: 'Alan Bane', ruolo: 'PT', el: 'aria', prof: 'portiere', b: 22, tec: ['presa_falco'], mod: { par: 1.3 } }
    ] },

  raimon: { id: 'raimon', nome: 'Scuola Media Raimon', sigla: 'RAI', lvCons: 29, col: '#e8703a', col2: '#8f3f18',
    lv: 32, base: 43, stemma: '⚡',
    motto: 'Undici che non dovevano arrivare da nessuna parte, e sono arrivati fino in fondo.',
    chiave: [
      { id: 'mark', nome: 'Mark Evans', corto: 'Mark', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 22, col: '#ff7043',
        tec: ['mano_magica', 'muro_infinito'], mod: { par: 1.3, gri: 1.6 } },
      { id: 'axel', nome: 'Axel Blaze', corto: 'Axel', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 24, col: '#ff5468',
        tec: ['tornado_fuoco', 'giravolta'], mod: { tir: 1.45, vel: 1.2 } },
      { id: 'nathan', nome: 'Nathan Swift', corto: 'Nathan', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 18, col: '#5fc8ff',
        tec: ['spirale_vento', 'raffica_gelata'], mod: { vel: 1.45, dif: 1.2 } },
      { id: 'kevin', nome: 'Kevin Dragonfly', corto: 'Kevin', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 18, col: '#d05f8f',
        tec: ['drago_ruggente'], mod: { tir: 1.35, fis: 1.2 } },
      { id: 'jack', nome: 'Jack Wallside', corto: 'Jack', ruolo: 'DF', el: 'terra', prof: 'muro', b: 17, col: '#7ac87a',
        tec: ['muro_di_terra'], mod: { fis: 1.5, dif: 1.3, vel: 0.7 } },
      { id: 'shawn', nome: 'Shawn Frost', corto: 'Shawn', ruolo: 'DF', el: 'aria', prof: 'tuttofare', b: 21, col: '#bfe8ff',
        tec: ['eterna_bufera', 'raffica_gelata'], mod: { dif: 1.3, tir: 1.3, ctr: 1.2 } }
    ] }
};

IE.squadraDi = function (id) {
  var s = IE.squadre[id];
  if (!s) return null;
  if (!s._rosa) s._rosa = IE.rosaSquadra(s);
  return s;
};


/* ============================================================
   LE FIRME
   Ogni ragazzo ha una tecnica sua, che non impara studiando:
   gli succede addosso, in un momento preciso.
   dove: 'allenamento' (dopo un certo esercizio) | 'partita' (in gara)
   ============================================================ */
IE.firme = {
  rei:     { tec: 'firma_rei',     dove: 'partita',     lv: 6,  cond: 'sotto',    scena: 'f_rei',
             nota: 'In una partita in cui siete sotto di due gol.' },
  goro:    { tec: 'firma_goro',    dove: 'allenamento', lv: 8,  eserc: 'uno',     scena: 'f_goro',
             nota: 'Nell\'uno contro uno, quando non ha più niente da dimostrare.' },
  hina:    { tec: 'firma_hina',    dove: 'allenamento', lv: 10, eserc: 'muro',    scena: 'f_hina',
             nota: 'Ai tiri contro il muro della palestra, dopo il duecentesimo.' },
  zero:    { tec: 'firma_zero',    dove: 'partita',     lv: 12, cond: 'subito',   scena: 'f_zero',
             nota: 'In partita, dopo aver già preso dei gol.' },
  minoru:  { tec: 'firma_minoru',  dove: 'allenamento', lv: 7,  eserc: 'salita',  scena: 'f_minoru',
             nota: 'In salita, il giorno che smette di avere paura.' },
  kenta:   { tec: 'firma_kenta',   dove: 'allenamento', lv: 9,  eserc: 'cerchio', scena: 'f_kenta',
             nota: 'A palla al cerchio, quando i suoi conti cominciano a servire.' },
  yuki:    { tec: 'firma_gemelli', dove: 'allenamento', lv: 11, eserc: 'salita',  scena: 'f_gemelli',
             nota: 'Con il fratello, in salita, all\'ora in cui di solito consegnano il latte.' },
  shinobu: { tec: 'firma_shinobu', dove: 'partita',     lv: 12, cond: 'pubblico', scena: 'f_shinobu',
             nota: 'In partita, davanti a gente vera.' },
  rikuto:  { tec: 'firma_rikuto',  dove: 'allenamento', lv: 13, eserc: 'muro',    scena: 'f_rikuto',
             nota: 'Ai tiri, il giorno che si decide a calciare forte.' },
  benkei:  { tec: 'firma_benkei',  dove: 'allenamento', lv: 10, eserc: 'porta',   scena: 'f_benkei',
             nota: 'Ai tiri in porta, all\'ora di merenda.' },
  daichi:  { tec: 'firma_daichi',  dove: 'partita',     lv: 16, cond: 'area',     scena: 'f_daichi',
             nota: 'In partita, quando gli arrivano dentro l\'area.' },
  nao:     { tec: 'firma_nao',     dove: 'partita',     lv: 14, cond: 'entra',    scena: 'f_nao',
             nota: 'In partita, la prima volta che gioca sul serio.' },
  tu:      { tec: null,            dove: 'partita',     lv: 15, cond: 'sotto',    scena: 'f_tu',
             nota: 'Quando serve a te, e non c\'è più nessun altro a cui chiederlo.' }
};
/* la firma del capitano dipende dal ruolo scelto */
IE.firmaTua = function (ruolo) { return 'firma_tu_' + (ruolo || 'CC'); };

/* ---------- formazioni ---------- */
IE.formazioni = {
  '4-4-2':  { nome: '4-4-2 Classico',  linee: { PT: 1, DF: 4, CC: 4, AT: 2 }, dif: 1.0,  att: 1.0,  desc: 'Equilibrata. Nessuno si lamenta, nessuno si esalta.' },
  '5-3-2':  { nome: '5-3-2 Catenaccio',linee: { PT: 1, DF: 5, CC: 3, AT: 2 }, dif: 1.18, att: 0.86, desc: 'Chiudere tutto e sperare in un contropiede.' },
  '3-4-3':  { nome: '3-4-3 Offensiva', linee: { PT: 1, DF: 3, CC: 4, AT: 3 }, dif: 0.85, att: 1.18, desc: 'Attaccare finché si respira.' },
  '4-5-1':  { nome: '4-5-1 Ragnatela', linee: { PT: 1, DF: 4, CC: 5, AT: 1 }, dif: 1.08, att: 0.94, desc: 'Il centrocampo si prende tutto, l\'attaccante si arrangia.' },
  '3-3-4':  { nome: '3-3-4 Disperata', linee: { PT: 1, DF: 3, CC: 3, AT: 4 }, dif: 0.72, att: 1.32, desc: 'Quando mancano dieci minuti e un gol.' }
};

/* ---------- ordini della panchina ---------- */
IE.ordini = {
  normale: { nome: 'Gioco normale', desc: 'Nessuna indicazione particolare.', att: 1, dif: 1, tp: 0 },
  pressing: { nome: 'Pressing alto', desc: 'Recuperare palla subito. Costa fiato.', att: 1.12, dif: 0.95, fp: 1.4 },
  muro:     { nome: 'Tutti dietro', desc: 'Chiudersi e non prendere gol.', att: 0.8, dif: 1.25, fp: 1.0 },
  cuore:    { nome: 'Ci mettiamo il cuore', desc: 'Grinta al massimo per dieci minuti. Poi si crolla.', att: 1.2, dif: 1.1, fp: 1.6 }
};

})();
