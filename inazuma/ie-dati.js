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

  /* --- tecniche delle squadre ufficiali --- */
  T('atomic_flare',  'Atomic Flare',           'tiro', 'fuoco',  70, 34, 'Il tiro di Burn: una palla di fuoco che si apre come un\'esplosione.'),
  T('northern',      'Northern Impact',        'tiro', 'aria',   70, 34, 'Il tiro di Gazel: la porta si copre di ghiaccio prima che la palla arrivi.'),
  T('chaos_break',   'Chaos Break',            'tiro', 'terra',  76, 38, 'Burn e Gazel insieme. Non doveva succedere mai.'),
  T('astro_break',   'Astro Break',            'tiro', 'terra',  74, 36, 'Un meteorite che cade dove c\'era il pallone.'),
  T('the_tower',     'The Tower',              'blocco','terra', 56, 25, 'Il muro di Desarm: si alza dal terreno e non si passa.'),
  T('the_wall',      'The Wall',               'blocco','terra', 52, 23, 'Jack Wallside si allarga e diventa esattamente quello che dice il nome.'),
  T('doppio_froste','I Due Froste',           'tiro', 'aria',   80, 39, 'Nel primo tempo Shawn gioca dietro. Poi qualcosa cambia posto dentro di lui e in area ci arriva un\'altra persona con la stessa faccia.', { soloDi: 'hakuren_shawn', sePerde: 34 }),
  T('wolf_legend',   'Wolf Legend',            'tiro', 'aria',   66, 32, 'Il tiro di Shawn Froste: un lupo bianco esce dalla neve e corre con la palla.'),
  T('tsunami_boost', 'Tsunami Boost',          'tiro', 'aria',   64, 31, 'Hurley Kane cavalca l\'onda fino all\'area e la scarica in porta con tutto il mare dietro.'),

  /* --- INAZUMA ELEVEN 2: le tecniche che si imparano durante il viaggio --- */
  T('pugno_giustizia','Pugno di Giustizia',    'parata', 'terra',  72, 35, 'Mark non para più con la mano aperta: chiude il pugno. Seigi no Tekken, il colpo che non chiede permesso.'),
  T('colosso_mano', 'Mano del Colosso',        'parata', 'terra',  80, 40, 'Dietro Mark si alza una cosa alta quanto la porta, e quella cosa ha due mani.'),
  T('mano_luce_blu','Mano di Luce Blu',        'parata', 'aria',   58, 26, 'La stessa mano di Mark, ma blu. Darren l\'ha imparata guardandolo, e gli è venuta del colore sbagliato.'),
  T('colosso_blu',  'Mano del Colosso Blu',    'parata', 'aria',   72, 34, 'Darren smette di copiare a metà: il colosso viene su tutto intero, e viene su blu.'),
  T('mano_insup',   'Mano Insuperabile',       'parata', 'aria',   84, 42, 'Maou the Hand. Darren la tira fuori una volta sola, quando davvero non si poteva parare.'),

  T('ice_ground',   'Terreno di Ghiaccio',     'tiro', 'aria',   62, 30, 'Shawn gela i venti metri davanti a sé e ci fa scivolare sopra il pallone.'),
  T('snow_angel',   'Angelo di Neve',          'tiro', 'aria',   58, 28, 'La palla lascia due ali di neve dietro di sé. Shawn dice che era il tiro di suo fratello.'),
  T('wyvern_crash', 'Colpo del Viverna',       'tiro', 'fuoco',  68, 33, 'Kevin non chiama più un drago: chiama un viverna, e il viverna ha imparato a stare in aria.'),
  T('wyvern_bliz',  'Bufera del Viverna',      'tiro', 'aria',   88, 44, 'Il viverna di Kevin dentro la bufera di Shawn. Bianco, e non si vede arrivare.', { com: ['kevin', 'shawn'] }),
  T('bakunetsu',    'Tempesta Rovente',        'tiro', 'fuoco',  76, 37, 'Axel torna e non tira più il tornado: tira una cosa che parte già bruciando.'),
  T('bakunetsu_v',  'Vite Rovente',            'tiro', 'fuoco',  84, 42, 'La Tempesta Rovente che avvita su sé stessa. Passa in mezzo alle mani.'),
  T('pinguino2',    'Pinguino Imperatore n.2', 'tiro', 'neutro', 80, 40, 'Il numero due: tre che partono insieme e un esercito che arriva dietro.', { com: ['jude', 'erik'] }),
  T('butterfly',    'Sogno di Farfalla',       'tiro', 'aria',   72, 35, 'Victoria e Suzette si sono conosciute in mezzo a tutto questo e la prima cosa che hanno fatto insieme è stata questa.', { com: ['victoria', 'suzette'] }),
  T('god_knows',    'Dio Solo Sa',             'tiro', 'aria',   78, 38, 'Byron Love apre le ali un\'ultima volta, e stavolta è dalla vostra parte.'),
  T('heavens_time', 'Il Tempo del Cielo',      'drib', 'aria',   62, 29, 'Per tre secondi tutti gli altri si muovono come dentro l\'acqua.'),
  T('kazamidori',   'Banderuola di Fuoco',     'tiro', 'fuoco',  68, 33, 'Nathan gira su sé stesso, Axel arriva dentro il giro. Non l\'avevano provata: gli è venuta.', { com: ['axel', 'nathan'] }),
  T('death_zone2',  'Zona Mortale n.2',        'tiro', 'terra',  76, 37, 'La vecchia Zona Mortale della Royal, rifatta da chi adesso gioca per un\'altra squadra.', { com: ['jude', 'bobby'] }),
  T('senpuujin',    'Lama di Vento',           'blocco', 'aria',  56, 25, 'Scotty smette di fare scherzi per quattro secondi e in quei quattro secondi non si passa.'),
  T('perfect_tower','Torre Perfetta',          'blocco', 'terra', 82, 40, 'Hurley, Victoria e Scotty. Nessuno gliel\'ha insegnata: l\'hanno inventata sul 3-0 per loro.', { com: ['hurley', 'victoria', 'scotty'] }),
  T('shippuu',      'Scatto di Vento',         'drib', 'aria',   50, 21, 'Nathan riparte dopo l\'infortunio, e la prima cosa che rifà è correre più di prima.'),
  T('koutei_muro',  'Muro dell\'Imperatore',   'blocco', 'neutro', 60, 27, 'Jude mette in fila quattro persone e le fa muovere insieme come una cosa sola.'),
  T('spirale_neve', 'Spirale di Neve',         'drib', 'aria',   48, 20, 'Shawn gira e dietro di lui resta una spirale bianca che nasconde dov\'è andato.'),
  T('onda_lunga',   'Onda Lunga',              'blocco', 'aria',  58, 26, 'Hurley non ferma la palla: ferma tutto quello che le arriva dietro.'),

  /* --- le firme del capitano sulla carovana (secondo gioco) --- */
  T('firma2_tu_AT', 'Undici Sconosciuti',      'tiro',   'aria',   82, 40, 'Sei partito da un prato con undici nomi scritti a mano. Adesso i nomi sono altri undici e il tiro è lo stesso.', { soloDi: 'tu' }),
  T('firma2_tu_CC', 'Il Giro Lungo',           'drib',   'aria',   76, 35, 'Duemila chilometri di pullman dentro un movimento solo.', { soloDi: 'tu' }),
  T('firma2_tu_DF', 'Quello che Resta in Piedi','blocco', 'terra',  78, 37, 'Hanno buttato giù la tua scuola. Non hanno buttato giù te.', { soloDi: 'tu' }),
  T('firma2_tu_PT', 'La Porta di Nessun Posto','parata', 'terra',  78, 37, 'Una porta storta in un prato a quattrocento abitanti. Prova a superarla.', { soloDi: 'tu' }),
  T('mano_infinita', 'Mano Infinita',          'parata','neutro',66, 30, 'La Mano Magica cresciuta: una mano che copre tutta la porta.'),
  T('tornado_drago', 'Tiro del Drago',         'tiro', 'fuoco',  56, 27, 'Un drago sale dal terreno e accompagna il pallone in porta.'),
  T('taglio_vento',  'Taglio di Vento',        'drib', 'aria',   50, 22, 'Nathan Swift sparisce in una scia azzurra e ricompare dieci metri avanti.'),
  T('pinguino2',     'Pinguino Imperatore n.2','tiro', 'neutro', 78, 38, 'La versione che serve a Jude Sharp quando la prima non basta.', { com: [] }),

  /* --- tiri degli avversari famosi --- */
  T('tornado_fuoco', 'Tornado di Fuoco',       'tiro', 'fuoco',  62, 30, 'Rovesciata avvolta nelle fiamme. Il tiro di Axel Blaze.'),
  T('pinguino1',     'Pinguino Imperatore n.1','tiro', 'neutro', 68, 34, 'Un esercito di pinguini spinge il pallone in porta.', { com: [] }),
  T('lama_cometa',   'Lama Cometa',            'tiro', 'aria',   60, 30, 'Una scia bianca che taglia il cielo dell\'area.'),
  T('splendore',     'Splendore Divino',       'tiro', 'aria',   66, 33, 'Ali di luce e un tiro che nessuno guarda in faccia.'),
  T('eterna_bufera', 'Eterna Bufera',          'tiro', 'aria',   58, 28, 'Ghiaccio e vento: la porta sparisce dentro la neve.'),
  T('lama_ghiaccio','Lama di Ghiaccio',      'tiro', 'aria',   54, 26, 'Un taglio netto nell\'aria fredda, e la palla ci passa dentro.'),
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
   CARATTERE DEL CAPITANO
   Non cambia le statistiche in modo determinante: cambia quello
   che dici, e quindi come ti rispondono.
   ============================================================ */
IE.caratteri = {
  fuoco: { nome: 'Fuoco addosso', icona: '🔥',
    desc: 'Parli prima di pensare, e trascini gli altri anche quando non sai dove stai andando. Non riesci a stare zitto quando una cosa non va.',
    come: 'Quello che urla per primo.', bonus: { gri: 7 } },
  calmo: { nome: 'Testa fredda', icona: '🧊',
    desc: 'Ascolti tutti, misuri, e poi parli una volta sola. Gli altri ti chiedono cosa fare perché sembri saperlo.',
    come: 'Quello a cui si chiede.', bonus: { ctr: 7 } },
  ironico: { nome: 'Battuta pronta', icona: '🙃',
    desc: 'Sdrammatizzi anche quando non si dovrebbe. È il tuo modo di tenere insieme le persone senza dover dire le cose serie.',
    come: 'Quello che fa ridere cinque minuti prima di una punizione.', bonus: { vel: 7 } },
  chiuso: { nome: 'Poche parole', icona: '🤐',
    desc: 'Parli il minimo. Non per timidezza: perché la maggior parte delle cose non ha bisogno di essere detta. Quando parli, si girano tutti.',
    come: 'Quello che se apre bocca vuol dire che è importante.', bonus: { dif: 7 } },
  ostinato: { nome: 'Testardo', icona: '🪨',
    desc: 'Non ti sposti. Non è coraggio ed è inutile chiamarlo così: è che non ti viene proprio in mente di mollare.',
    come: 'Quello che ci riprova.', bonus: { res: 7 } }
};
IE.listaCaratteri = ['fuoco', 'calmo', 'ironico', 'chiuso', 'ostinato'];

/* I tre tratti che crescono con quello che scegli di dire. */
IE.tratti = {
  cuore:   { nome: 'Cuore',   icona: '❤️', col: '#ff5468',
             desc: 'Quanto metti le persone prima del risultato.',
             basso: 'Guardi il tabellone prima della panchina.',
             medio: 'Cominci a chiedere agli altri come stanno prima di dire cosa fare.',
             alto: 'Guardi la panchina prima del tabellone, e lo sanno tutti.' },
  testa:   { nome: 'Testa',   icona: '🧠', col: '#4aa8ff',
             desc: 'Quanto ragioni prima di muoverti.',
             basso: 'Vai a sentimento, e ogni tanto va bene.',
             medio: 'Prima di parlare ti fermi. Non sempre, ma ti fermi.',
             alto: 'Arrivi con un piano, e di solito regge.' },
  schiena: { nome: 'Schiena', icona: '🦴', col: '#ffd23f',
             desc: 'Quanto sei disposto a startene lì quando conviene andarsene.',
             basso: 'Scegli le battaglie.',
             medio: 'Certe volte resti anche quando nessuno te lo chiede.',
             alto: 'Non le scegli, le battaglie: le finisci.' }
};

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
  anzai:  P({ id: 'anzai', nome: 'Tsuru Anzai', corto: 'Anzai', col: '#c8a8b8', png: true,
    bio: 'Ottantun anni, una Singer a pedale del 1961. Ha cucito le maglie del 1985 e ha ancora il cartamodello.' }),
  ishizuka: P({ id: 'ishizuka', nome: 'Tetsuo Ishizuka', corto: 'Ishizuka', col: '#a08050', png: true,
    bio: 'Padre di Gorō. Tiene in piedi la segheria da solo da nove anni.' }),
  kurihara: P({ id: 'kurihara', nome: 'Signora Kurihara', corto: 'Kurihara', col: '#b8a8c8', png: true,
    bio: 'Ottantasei anni, via del tempio. Suo marito era terzino sinistro nel 1985.' }),
  okubo:  P({ id: 'okubo', nome: 'Mitsuru Ōkubo', corto: 'Ōkubo', col: '#8fa8c8', png: true,
    bio: 'Capitano della scuola media di Ōkubo: undici studenti in tutto il secondo anno.' }),
  kuz:    P({ id: 'kuz', nome: 'Jin Shikimi', corto: 'Shikimi', col: '#4f7fd0', png: true,
    bio: 'Capitano della Kuzuryū. Quattrocento studenti, due campi in erba e un pullman con la scritta.' }),
  higashi_all: P({ id: 'higashi_all', nome: 'Allenatore Umezawa', corto: 'Umezawa', col: '#3f6fc0', png: true,
    bio: 'Allenatore della Nagano Higashi. Due anni fa ha lasciato un dodicenne solo in porta per quarantacinque minuti.' }),
  reize:  P({ id: 'reize', nome: 'Jordan Greenway', corto: 'Reize', col: '#7fd08f', png: true,
    bio: 'Capitano di Gemini Storm, la seconda squadra di Alius Academy. In originale Midorikawa Ryuuji: «Reize» è un nome in codice.' }),
  gran:   P({ id: 'gran', nome: 'Xavier Foster', corto: 'Gran', col: '#ff9a9a', png: true,
    bio: 'Capitano di The Genesis, la prima squadra di Alius Academy. In originale Kiyama Hiroto.' }),
  burn:   P({ id: 'burn', nome: 'Burn', corto: 'Burn', col: '#ff9a6a', png: true,
    bio: 'Capitano di Prominence. In originale Nagumo Haruya.' }),
  gazel:  P({ id: 'gazel', nome: 'Gazel', corto: 'Gazel', col: '#dff2ff', png: true,
    bio: 'Capitano di Diamond Dust. In originale Suzuno Fuusuke.' }),
  hillman: P({ id: 'hillman', nome: 'Coach Hillman', corto: 'Hillman', col: '#8f9aa8', png: true,
    bio: 'Allenatore della Raimon. In originale Hibiki Seigou.' }),
  darren: P({ id: 'darren', nome: 'Darren LaChance', corto: 'Darren', col: '#7fb8e8', png: true,
    bio: 'Portiere della scuola media Yokato. In originale Tachimukai Yuuki. Guarda giocare Mark Evans da quando ha nove anni e ha imparato la Mano Magica copiandola: gli è venuta blu.' }),
  victoria: P({ id: 'victoria', nome: 'Victoria Vanguard', corto: 'Victoria', col: '#ff9ac8', png: true,
    bio: 'Difensore. In originale Zaizen Touko. Suo padre Sousuke Zaizen è il primo ministro del Giappone, e Gemini Storm lo ha portato via da un parco di Nara.' }),
  suzette: P({ id: 'suzette', nome: 'Suzette Heartland', corto: 'Suzette', col: '#e88fd0', png: true,
    bio: 'Attaccante. In originale Urabe Rika. Sale sulla carovana perché c\'è Erik Eagle, e resta perché le viene bene.' }),
  erik: P({ id: 'erik', nome: 'Erik Eagle', corto: 'Erik', col: '#ffd07f', png: true,
    bio: 'Centrocampista. In originale Ichinose Kazuya. Torna dall\'America dopo l\'operazione al ginocchio, con Bobby Shearer.' }),
  aiden: P({ id: 'aiden', nome: 'Aiden Froste', corto: 'Aiden', col: '#ff8f8f', png: true,
    bio: 'Il fratello gemello di Shawn Froste, morto nella valanga insieme ai genitori. In originale Fubuki Atsuya. Parla soltanto dentro la testa di Shawn.' }),
  celia:  P({ id: 'celia', nome: 'Celia Hills', corto: 'Celia', col: '#9ac8ff', png: true,
    bio: 'Manager della Raimon, sorella di Jude Sharp. In originale Otonashi Haruna.' }),
  silvia: P({ id: 'silvia', nome: 'Silvia Woods', corto: 'Silvia', col: '#8fd0a8', png: true,
    bio: 'Manager della Raimon. In originale Kino Aki.' }),
  zaizen: P({ id: 'zaizen', nome: 'Sousuke Zaizen', corto: 'Zaizen', col: '#7a8fa8', png: true,
    bio: 'Primo ministro del Giappone, padre di Victoria. Portato via da Gemini Storm in un parco di Nara.' }),
  reo:    P({ id: 'reo', nome: 'Gorureo', corto: 'Gorureo', col: '#a08fd0', png: true,
    bio: 'Portiere di Gemini Storm.' }),
  diam:   P({ id: 'diam', nome: 'Diam', corto: 'Diam', col: '#9a8fd8', png: true,
    bio: 'Attaccante di Gemini Storm. Le riserve di Alius Academy portano nomi di satelliti.' }),
  metron: P({ id: 'metron', nome: 'Metron', corto: 'Metron', col: '#7fd0c0', png: true,
    bio: 'Attaccante di Epsilon. In originale Mutou Satoshi.' }),
  nepper: P({ id: 'nepper', nome: 'Nepper', corto: 'Nepper', col: '#ffb07f', png: true,
    bio: 'Attaccante di Prominence. In originale Netsuha Natsuhiko.' }),
  frost:  P({ id: 'frost', nome: 'Frost', corto: 'Frost', col: '#cfe8ff', png: true,
    bio: 'Attaccante di Diamond Dust. In originale Mikoori Rei.' }),
  ulvida: P({ id: 'ulvida', nome: 'Ulvida', corto: 'Ulvida', col: '#bfd8ff', png: true,
    bio: 'Centrocampista di The Genesis. In originale Yagami Reina.' }),
  wheeze: P({ id: 'wheeze', nome: 'Wheeze', corto: 'Wheeze', col: '#d8d0ff', png: true,
    bio: 'Attaccante di The Genesis. In originale Izuno Yuu.' }),
  kasa:   P({ id: 'kasa', nome: 'Rei Kasamino', corto: 'Kasamino', col: '#c8b07f', png: true,
    bio: 'Capitano della scuola media Kasamino. La sua squadra ha giocato contro Gemini Storm il giorno prima della Raimon.' }),
  cloi:   P({ id: 'cloi', nome: 'Genkai Manyuu', corto: 'Manyuu', col: '#c88f5f', png: true,
    bio: 'Capitano della Cloister, la scuola-tempio di Kyoto. Ha chiesto lui a Epsilon di giocare per primi.' }),
  shawn:  P({ id: 'shawn', nome: 'Shawn Froste', corto: 'Shawn', col: '#bfe8ff', png: true,
    bio: 'Scuola media Hakuren, Hokkaido. In originale Fubuki Shirou. Si unisce alla carovana al terzo capitolo.' }),
  scotty: P({ id: 'scotty', nome: 'Scotty Banyan', corto: 'Scotty', col: '#7f9a5f', png: true,
    bio: 'Primo anno della Raimon. In originale Kogure Yuuya. Si unisce al quarto capitolo.' }),
  hurley: P({ id: 'hurley', nome: 'Hurley Kane', corto: 'Hurley', col: '#5fb8c8', png: true,
    bio: 'Difensore di Okinawa, in originale Tsunami Jousuke. Si unisce all\'ottavo capitolo.' }),
  byron:  P({ id: 'byron', nome: 'Byron Love', corto: 'Byron', col: '#ffe8a0', png: true,
    bio: 'Capitano dell\'Istituto Zeus. In originale Afuro Terumi, «Aphrodi».' }),
  desarm: P({ id: 'desarm', nome: 'Desarm', corto: 'Desarm', col: '#8fd0c0', png: true,
    bio: 'Capitano di Epsilon. In originale Saginuma Osamu.' }),
  dark:   P({ id: 'dark', nome: 'Ray Dark', corto: 'Dark', col: '#6f6f7f', png: true,
    bio: 'In originale Kageyama Reiji. Ha allenato la Royal Academy di Jude Sharp per tre anni.' }),
  sakuma: P({ id: 'sakuma', nome: 'David Samford', corto: 'Samford', col: '#7fc8e0', png: true,
    bio: 'Royal Academy. In originale Sakuma Jirou.' }),
  genda:  P({ id: 'genda', nome: 'Joseph King', corto: 'King', col: '#c8a86f', png: true,
    bio: 'Portiere della Royal Academy. In originale Genda Koujirou.' }),
  mark:   P({ id: 'mark', nome: 'Mark Evans', corto: 'Mark', col: '#ff7043', png: true, bio: 'Capitano e portiere della Raimon. Nipote del leggendario Dave Evans.' }),
  axel:   P({ id: 'axel', nome: 'Axel Blaze', corto: 'Axel', col: '#ff5468', png: true, bio: 'Attaccante della Raimon. Il fuoco lo tiene tutto dentro.' }),
  jude:   P({ id: 'jude', nome: 'Jude Sharp', corto: 'Jude', col: '#5fa8ff', png: true, bio: 'Stratega. Vede la partita tre passaggi avanti a chiunque.' }),
  nelly:  P({ id: 'nelly', nome: 'Nelly Raimon', corto: 'Nelly', col: '#ffb0c0', png: true, bio: 'Manager della Raimon. Figlia del presidente della scuola.' }),
  nathan: P({ id: 'nathan', nome: 'Nathan Swift', corto: 'Nathan', col: '#5fc8ff', png: true, bio: 'Difensore della Raimon, il più veloce dei ventidue. In originale Kazemaru Ichirouta.' }),
  kevin:  P({ id: 'kevin', nome: 'Kevin Dragonfly', corto: 'Kevin', col: '#d05f8f', png: true, bio: 'Attaccante della Raimon. In originale Someoka Ryuugo. Da quando Axel se n\'è andato, l\'attacco è suo e lo sa.' }),
  jack:   P({ id: 'jack', nome: 'Jack Wallside', corto: 'Jack', col: '#7ac87a', png: true, bio: 'Difensore della Raimon. In originale Kabeyama Heigorou. Grande come un armadio e spaventato da tutto.' }),
  todd:   P({ id: 'todd', nome: 'Todd Ironside', corto: 'Todd', col: '#c8a06f', png: true, bio: 'Difensore della Raimon. In originale Kurimatsu Teppei.' }),
  steve:  P({ id: 'steve', nome: 'Steve Grim', corto: 'Steve', col: '#8fc87a', png: true, bio: 'Centrocampista della Raimon. In originale Handa Shin\'ichi.' }),
  timmy:  P({ id: 'timmy', nome: 'Timmy Sanders', corto: 'Timmy', col: '#a8c85f', png: true, bio: 'Centrocampista della Raimon. In originale Shourinji Ayumu.' }),
  sam:    P({ id: 'sam', nome: 'Sam Kincaid', corto: 'Sam', col: '#e0885f', png: true, bio: 'Centrocampista della Raimon. In originale Shishido Sakichi.' }),
  max:    P({ id: 'max', nome: 'Max Carson', corto: 'Max', col: '#7fd0c8', png: true, bio: 'Ala della Raimon. In originale Matsuno Kuusuke.' }),
  bobby:  P({ id: 'bobby', nome: 'Bobby Shearer', corto: 'Bobby', col: '#c87a5f', png: true, bio: 'Centrocampista della Raimon. In originale Domon Asuka. È stato in America con Erik Eagle.' }),
  william:P({ id: 'william', nome: 'William Glass', corto: 'William', col: '#9a9ab0', png: true, bio: 'Centrocampista della Raimon. In originale Megane Kakeru. Tiene la statistica di tutto.' }),
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
function nomeLibero(r, usati) {
  for (var t = 0; t < 200; t++) {
    var c = COGNOMI[Math.floor(r() * COGNOMI.length)];
    if (usati[c]) continue;
    var nm = NOMI[Math.floor(r() * NOMI.length)] + ' ' + c;
    if (!usati[nm]) return nm;
  }
  var nm2; do { nm2 = NOMI[Math.floor(r() * NOMI.length)] + ' ' + COGNOMI[Math.floor(r() * COGNOMI.length)]; } while (usati[nm2]);
  return nm2;
}

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
    var nome;
    if (sq.nomi && sq.nomi.length) {
      /* i nomi in elenco si distribuiscono uno per uno, senza ripetersi */
      nome = null;
      for (var q = 0; q < sq.nomi.length; q++) if (!usati[sq.nomi[q]]) { nome = sq.nomi[q]; break; }
      if (!nome) nome = nomeLibero(r, usati);
    } else {
      nome = nomeLibero(r, usati);
    }
    var cog = nome.split(' ')[1]; if (cog) usati[cog] = 1;
    usati[nome] = 1;
    var p = profDi[ruolo]; p = Array.isArray(p) ? p[Math.floor(r() * p.length)] : p;
    var g2 = {
      id: sq.id + '_f' + i, nome: nome, corto: nome.split(' ')[1] || nome, ruolo: ruolo,
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

  okubo: { id: 'okubo', nome: 'Scuola Media Ōkubo', sigla: 'OKU', lvCons: 10, col: '#8fa8c8', col2: '#54677f',
    lv: 10, base: 27, stemma: '🏫',
    motto: 'Undici studenti in tutto il secondo anno. Giocano in nove più due presi in prestito dal club di pallavolo.',
    chiave: [
      { id: 'cap', nome: 'Mitsuru Ōkubo', ruolo: 'CC', el: 'bosco', prof: 'tuttofare', b: 13, tec: ['finta_secca', 'germoglio'], mod: { ctr: 1.3, gri: 1.3 } },
      { id: 'por', nome: 'Fumi Ōkubo', ruolo: 'PT', el: 'bosco', prof: 'portiere', b: 10, tec: ['presa_sicura'], mod: { par: 1.3 } }
    ] },

  higashi: { id: 'higashi', nome: 'Nagano Higashi', sigla: 'NGH', lvCons: 27, col: '#3f6fc0', col2: '#22406f',
    lv: 30, base: 48, stemma: '🏙️',
    motto: 'Ottocento studenti, tre campi, due allenatori pagati. La scuola in cui Tsukasa Naruse ha preso otto gol in una finale.',
    chiave: [
      { id: 'cap', nome: 'Wataru Segawa', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 20, tec: ['tiro_teso', 'meteora'], mod: { tir: 1.4, vel: 1.2 } },
      { id: 'por', nome: 'Kaoru Ijūin', ruolo: 'PT', el: 'aria', prof: 'portiere', b: 17, tec: ['volo_laterale', 'presa_alta'], mod: { par: 1.35 } },
      { id: 'dif', nome: 'Rin Motoyama', ruolo: 'DF', el: 'terra', prof: 'muro', b: 16, tec: ['scivolata', 'marcatura'], mod: { dif: 1.3, fis: 1.25 } }
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
      { id: 'cap', nome: 'Tōya Shirasaki', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 15, tec: ['lama_ghiaccio', 'folata'], mod: { tir: 1.4, ctr: 1.2 } },
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
    lv: 34, base: 51, stemma: '👑',
    motto: 'Cinque Football Frontier su sei. Non hanno mai perso una semifinale, fino a quest\'anno.',
    chiave: [
      { id: 'jude', nome: 'Jude Sharp', corto: 'Jude', jp: 'Kidou Yuuto', ruolo: 'CC', el: 'aria', prof: 'regista', b: 24, col: '#5fa8ff',
        tec: ['pinguino1', 'pinguino2', 'illusione'], mod: { ctr: 1.5, gri: 1.3, tir: 1.2 } },
      { id: 'genda', nome: 'Joseph King', corto: 'King', jp: 'Genda Koujirou', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 21, col: '#c8a86f',
        tec: ['muro_infinito', 'pugno_teso'], mod: { par: 1.3 } },
      { id: 'sakuma', nome: 'David Samford', corto: 'Samford', jp: 'Sakuma Jirou', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 20, col: '#7fc8e0',
        tec: ['pinguino1', 'lama_vento'], mod: { tir: 1.35, ctr: 1.2 } },
      { id: 'fudou', nome: 'Caleb Stonewall', corto: 'Caleb', jp: 'Fudou Akio', ruolo: 'CC', el: 'terra', prof: 'regista', b: 19, col: '#8f8f5f',
        tec: ['marcatura', 'spirale_nera'], mod: { ctr: 1.3, gri: 1.3 } },
      { id: 'henmi', nome: 'Herman Waldon', corto: 'Waldon', jp: 'Henmi Wataru', ruolo: 'DF', el: 'terra', prof: 'muro', b: 16, col: '#a89a6f',
        tec: ['cancello_pietra'], mod: { dif: 1.35, fis: 1.25 } },
      { id: 'doumen', nome: 'Derek Swing', corto: 'Derek', jp: 'Doumen Shuuichirou', ruolo: 'CC', el: 'aria', prof: 'ala', b: 14, col: '#c8b87a',
        tec: ['cambio_passo'], mod: { vel: 1.25 } },
      { id: 'gojou', nome: 'Gus Martin', corto: 'Gus', jp: 'Gojou Masaru', ruolo: 'DF', el: 'terra', prof: 'muro', b: 14, col: '#b0a070',
        tec: ['scivolata'], mod: { dif: 1.25, fis: 1.2 } },
      { id: 'banjou', nome: 'Ben Simmons', corto: 'Ben', jp: 'Banjou Kazumichi', ruolo: 'DF', el: 'terra', prof: 'terzino', b: 14, col: '#c0b080',
        tec: ['anticipo'], mod: { dif: 1.2, vel: 1.15 } },
      { id: 'jimon', nome: 'Daiki Jimon', corto: 'Jimon', jp: 'Jimon Daiki', ruolo: 'DF', el: 'bosco', prof: 'muro', b: 13, col: '#9ab07a',
        tec: ['sbarramento'], mod: { dif: 1.2, fis: 1.2 } },
      { id: 'narukami', nome: 'Kenya Narukami', corto: 'Narukami', jp: 'Narukami Kenya', ruolo: 'CC', el: 'fuoco', prof: 'ala', b: 13, col: '#d09a6f',
        tec: ['giravolta'], mod: { vel: 1.2, tir: 1.1 } },
      { id: 'kagami', nome: 'Ryuu Kagami', corto: 'Kagami', jp: 'Kagami Hiroto', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 14, col: '#e0a06f',
        tec: ['tiro_teso'], mod: { tir: 1.3 } }
    ] },

  zeus: { id: 'zeus', nome: 'Istituto Zeus', sigla: 'ZEU', lvCons: 33, col: '#f0e6c8', col2: '#c8a83f',
    lv: 38, base: 50, stemma: '⚡',
    motto: 'Dicono di essere figli degli dèi. In tutto il torneo non avevano ancora subito un gol.',
    chiave: [
      { id: 'byron', nome: 'Byron Love', corto: 'Byron', jp: 'Afuro Terumi', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 27, col: '#ffe8a0',
        tec: ['splendore', 'lama_cometa'], mod: { tir: 1.55, ctr: 1.25 } },
      { id: 'posei', nome: 'Posei Donichi', corto: 'Posei', jp: 'Posei Donichi', ruolo: 'PT', el: 'aria', prof: 'portiere', b: 22, col: '#cfe0f0',
        tec: ['presa_falco', 'presa_alta'], mod: { par: 1.3 } },
      { id: 'aporo', nome: 'Aporo Hikaru', corto: 'Aporo', jp: 'Aporo Hikaru', ruolo: 'DF', el: 'aria', prof: 'muro', b: 17, col: '#e8dfc0',
        tec: ['cancello_pietra'], mod: { dif: 1.3, fis: 1.2 } },
      { id: 'hepai', nome: 'Hepai En', corto: 'Hepai', jp: 'Hepai En', ruolo: 'DF', el: 'fuoco', prof: 'muro', b: 16, col: '#e0c090',
        tec: ['muro_di_terra'], mod: { dif: 1.25, fis: 1.25 } },
      { id: 'aresu', nome: 'Aresu Ran', corto: 'Aresu', jp: 'Aresu Ran', ruolo: 'DF', el: 'fuoco', prof: 'terzino', b: 16, col: '#d8b088',
        tec: ['marcatura'], mod: { dif: 1.25, vel: 1.15 } },
      { id: 'deio', nome: 'Deio Geki', corto: 'Deio', jp: 'Deio Geki', ruolo: 'DF', el: 'terra', prof: 'muro', b: 16, col: '#c8b898',
        tec: ['scivolata'], mod: { dif: 1.3 } },
      { id: 'arute', nome: 'Arute Saneki', corto: 'Arute', jp: 'Arute Saneki', ruolo: 'CC', el: 'aria', prof: 'regista', b: 17, col: '#e8e0c8',
        tec: ['lettura'], mod: { ctr: 1.3 } },
      { id: 'herume', nome: 'Herume Matsuaki', corto: 'Herume', jp: 'Herume Matsuaki', ruolo: 'CC', el: 'aria', prof: 'ala', b: 17, col: '#dfd8b8',
        tec: ['folata'], mod: { vel: 1.35 } },
      { id: 'atena', nome: 'Atena Tomo', corto: 'Atena', jp: 'Atena Tomo', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 17, col: '#c8d8a8',
        tec: ['illusione'], mod: { ctr: 1.3, gri: 1.15 } },
      { id: 'demete', nome: 'Demete Yutaka', corto: 'Demete', jp: 'Demete Yutaka', ruolo: 'AT', el: 'bosco', prof: 'bomber', b: 18, col: '#b8d090',
        tec: ['germoglio', 'foglia_morta'], mod: { tir: 1.3 } },
      { id: 'hera', nome: 'Hera Tadashi', corto: 'Hera', jp: 'Hera Tadashi', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 18, col: '#e8b890',
        tec: ['meteora'], mod: { tir: 1.3 } }
    ] },


  /* ---------- squadre del viaggio (Inazuma Eleven 2) ---------- */
  hakuren: { id: 'hakuren', nome: 'Scuola Media Hakuren', sigla: 'HKR', lvCons: 32, col: '#dff2ff', col2: '#6f9ac0',
    lv: 35, base: 64, stemma: '🏔️',
    motto: 'Hokkaido, dove nevica da ottobre a maggio. In squadra hanno uno che nel primo tempo gioca dietro e nel secondo tempo diventa un\'altra persona.',
    chiave: [
      { id: 'shawn', nome: 'Shawn Froste', corto: 'Shawn', jp: 'Fubuki Shirou', ruolo: 'DF', el: 'aria', prof: 'tuttofare', b: 30, col: '#bfe8ff',
        tec: ['doppio_froste', 'eterna_bufera', 'raffica_gelata'], mod: { tir: 1.42, dif: 1.34, ctr: 1.26 } },
      { id: 'yukino', nome: 'Sōta Yukino', corto: 'Yukino', ruolo: 'DF', el: 'aria', prof: 'muro', b: 12, tec: ['raffica_gelata'], mod: { dif: 1.3, fis: 1.2 } },
      { id: 'iya', nome: 'Kei Iya', corto: 'Iya', ruolo: 'CC', el: 'aria', prof: 'ala', b: 12, tec: ['spirale_neve', 'zig_zag'], mod: { vel: 1.3, ctr: 1.2 } },
      { id: 'por', nome: 'Yūki Konko', corto: 'Konko', ruolo: 'PT', el: 'aria', prof: 'portiere', b: 16, tec: ['mani_di_neve'], mod: { par: 1.3 } }
    ] },

  epsilon_kai: { id: 'epsilon_kai', nome: 'Epsilon Migliorata', sigla: 'EPK', lvCons: 35, col: '#7fd0b8', col2: '#2f7a6a',
    lv: 38, base: 58, stemma: '🧬', alius: true,
    nomi: ['Kayson', 'Kenvil', 'Fadora', 'Cripto', 'Swarm'],
    motto: 'Epsilon rimessa in piedi da un allenatore che con Alius Academy non c\'entra niente: Ray Dark.',
    chiave: [
      { id: 'desarm', nome: 'Desarm', corto: 'Desarm', jp: 'Saginuma Osamu', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 22, col: '#8fd0c0',
        tec: ['muro_infinito', 'the_tower'], mod: { par: 1.44, gri: 1.35 } },
      { id: 'titan', nome: 'Titan', corto: 'Titan', jp: 'Tanba Taiji', ruolo: 'DF', el: 'terra', prof: 'muro', b: 14, tec: ['cancello_pietra', 'the_tower'], mod: { dif: 1.4, fis: 1.32 } },
      { id: 'moll', nome: 'Moll', corto: 'Moll', jp: 'Morino Rumi', ruolo: 'DF', el: 'bosco', prof: 'terzino', b: 10, tec: ['trappola_radici'], mod: { dif: 1.28 } },
      { id: 'kayson', nome: 'Kayson', corto: 'Kayson', jp: 'Murata Keisuke', ruolo: 'DF', el: 'terra', prof: 'terzino', b: 9, tec: ['scivolata'], mod: { dif: 1.24 } },
      { id: 'kenvil', nome: 'Kenvil', corto: 'Kenvil', jp: 'Hiruma Ken\'ichi', ruolo: 'DF', el: 'aria', prof: 'muro', b: 9, tec: ['pressing2'], mod: { dif: 1.24, fis: 1.18 } },
      { id: 'fadora', nome: 'Fadora', corto: 'Fadora', jp: 'Hatou Torahiko', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 10, tec: ['marcatura'], mod: { dif: 1.26, vel: 1.18 } },
      { id: 'cripto', nome: 'Cripto', corto: 'Cripto', jp: 'Kuri Fuuko', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 12, tec: ['illusione', 'marcatura'], mod: { ctr: 1.34 } },
      { id: 'swarm', nome: 'Swarm', corto: 'Swarm', jp: 'Mureta Hachirou', ruolo: 'CC', el: 'aria', prof: 'ala', b: 11, tec: ['zig_zag'], mod: { vel: 1.28 } },
      { id: 'maquia', nome: 'Maquia', corto: 'Maquia', jp: 'Sumeragi Maki', ruolo: 'AT', el: 'aria', prof: 'ala', b: 15, tec: ['lama_cometa'], mod: { tir: 1.34, vel: 1.24 } },
      { id: 'metron', nome: 'Metron', corto: 'Metron', jp: 'Mutou Satoshi', ruolo: 'AT', el: 'terra', prof: 'bomber', b: 18, col: '#7fd0c0',
        tec: ['astro_break', 'spirale_nera'], mod: { tir: 1.42, fis: 1.24 } },
      { id: 'zel', nome: 'Zel', corto: 'Zel', jp: 'Segata Ryuuchirou', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 20, tec: ['astro_break', 'cannonata'], mod: { tir: 1.44 } }
    ] },

  chaos: { id: 'chaos', nome: 'Chaos', sigla: 'CHA', lvCons: 42, col: '#ff7fb0', col2: '#7a2f5f',
    lv: 46, base: 60, stemma: '🌗', alius: true, doppia: true,
    nomi: ['Berkley', 'Droll', 'Valen', 'Satosu', 'Blow'],
    motto: 'Prominence e Diamond Dust messe insieme per prendersi il posto di The Genesis. Si vede soltanto mettendo in comunicazione le due versioni del gioco.',
    chiave: [
      { id: 'grent', nome: 'Grent', corto: 'Grent', jp: 'Ooiwa Kurando', ruolo: 'PT', el: 'fuoco', prof: 'portiere', b: 18, tec: ['pugno_teso', 'mani_pietra'], mod: { par: 1.4 } },
      { id: 'bomber', nome: 'Bomber', corto: 'Bomber', jp: 'Honba Geki', ruolo: 'DF', el: 'terra', prof: 'muro', b: 15, tec: ['the_tower'], mod: { dif: 1.36, fis: 1.42 } },
      { id: 'clara', nome: 'Clara', corto: 'Clara', jp: 'Kurakake Clara', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 13, tec: ['raffica_gelata'], mod: { dif: 1.32, vel: 1.22 } },
      { id: 'gokka', nome: 'Gokka', corto: 'Gokka', jp: 'Gokukawa Kantarou', ruolo: 'DF', el: 'terra', prof: 'muro', b: 12, tec: ['cancello_pietra'], mod: { dif: 1.32, fis: 1.26 } },
      { id: 'barra', nome: 'Barra', corto: 'Barra', jp: 'Barazono Hana', ruolo: 'DF', el: 'fuoco', prof: 'terzino', b: 12, tec: ['scivolata'], mod: { dif: 1.3, vel: 1.2 } },
      { id: 'ic', nome: 'IC', corto: 'IC', jp: 'Touchi Ai', ruolo: 'CC', el: 'aria', prof: 'regista', b: 17, tec: ['raffica_gelata', 'illusione'], mod: { ctr: 1.4 } },
      { id: 'rean', nome: 'Rean', corto: 'Rean', jp: 'Hasuike An', ruolo: 'CC', el: 'fuoco', prof: 'regista', b: 14, tec: ['illusione'], mod: { ctr: 1.34 } },
      { id: 'heat', nome: 'Heat', corto: 'Heat', jp: 'Atsuishi Shigeto', ruolo: 'CC', el: 'fuoco', prof: 'ala', b: 15, tec: ['tornado_fuoco'], mod: { tir: 1.34, vel: 1.26 } },
      { id: 'nepper', nome: 'Nepper', corto: 'Nepper', jp: 'Netsuha Natsuhiko', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 18, col: '#ffb07f',
        tec: ['atomic_flare'], mod: { tir: 1.42, vel: 1.2 } },
      { id: 'burn', nome: 'Burn', corto: 'Burn', jp: 'Nagumo Haruya', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 24, col: '#ff9a6a',
        tec: ['chaos_break', 'atomic_flare'], mod: { tir: 1.5, vel: 1.22 } },
      { id: 'gazel', nome: 'Gazel', corto: 'Gazel', jp: 'Suzuno Fuusuke', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 24, col: '#dff2ff',
        tec: ['chaos_break', 'northern'], mod: { tir: 1.5, ctr: 1.22 } }
    ] },

  /* ============================================================
     ALIUS ACADEMY  (Aliea Gakuen)
     Le squadre della seconda stagione. I capitani e i nomi in
     elenco sono quelli veri; le riserve portano nomi in stile,
     perché non tutte le rose sono documentate.
     ============================================================ */
  gemini: { id: 'gemini', nome: 'Gemini Storm', sigla: 'GEM', lvCons: 31, col: '#8f7fd0', col2: '#4a3f8f',
    lv: 34, base: 56, stemma: '☄️', alius: true,
    nomi: ['Gigu', 'Karon', 'Pandora', 'Gringo', 'Riimu'],
    motto: 'La seconda squadra di Alius Academy. Portano i nomi dei satelliti di Giove e arrivano dove una scuola ha appena smesso di esistere.',
    chiave: [
      { id: 'reo', nome: 'Gorureo', corto: 'Gorureo', jp: 'Goryuu Reo', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 14, col: '#a08fd0',
        tec: ['mani_pietra', 'pugno_teso'], mod: { par: 1.32 } },
      { id: 'coral', nome: 'Coral', corto: 'Coral', jp: 'Sango Yoshirou', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 7, tec: ['anticipo'], mod: { dif: 1.2, vel: 1.15 } },
      { id: 'gigu', nome: 'Gigu', corto: 'Gigu', jp: 'Kikuma Shousuke', ruolo: 'DF', el: 'terra', prof: 'muro', b: 6, tec: ['scivolata'], mod: { dif: 1.2, fis: 1.2 } },
      { id: 'ganymede', nome: 'Ganymede', corto: 'Ganymede', jp: 'Kanime Iderou', ruolo: 'DF', el: 'terra', prof: 'muro', b: 12, tec: ['the_tower'], mod: { dif: 1.32, fis: 1.25 } },
      { id: 'karon', nome: 'Karon', corto: 'Karon', jp: 'Karoku Satori', ruolo: 'DF', el: 'bosco', prof: 'terzino', b: 6, tec: ['gabbia'], mod: { dif: 1.2 } },
      { id: 'pandora', nome: 'Pandora', corto: 'Pandora', jp: 'Kinki Nozomi', ruolo: 'CC', el: 'aria', prof: 'regista', b: 9, tec: ['illusione'], mod: { ctr: 1.25 } },
      { id: 'gringo', nome: 'Gringo', corto: 'Gringo', jp: 'Omotsuki Sora', ruolo: 'CC', el: 'bosco', prof: 'ala', b: 7, tec: ['zig_zag'], mod: { vel: 1.2 } },
      { id: 'io', nome: 'Io', corto: 'Io', jp: 'Io Shuntarou', ruolo: 'CC', el: 'fuoco', prof: 'ala', b: 11, tec: ['cambio_passo', 'tiro_teso'], mod: { vel: 1.28, tir: 1.15 } },
      { id: 'riimu', nome: 'Riimu', corto: 'Riimu', jp: 'Nanakaze Rimu', ruolo: 'AT', el: 'aria', prof: 'ala', b: 9, tec: ['tiro_a_giro'], mod: { vel: 1.25, tir: 1.15 } },
      { id: 'diam', nome: 'Diam', corto: 'Diam', jp: 'Miura Hiromu', ruolo: 'AT', el: 'terra', prof: 'bomber', b: 14, col: '#9a8fd8',
        tec: ['spirale_nera', 'bordata'], mod: { tir: 1.35, fis: 1.2 } },
      { id: 'reize', nome: 'Jordan Greenway', corto: 'Reize', jp: 'Midorikawa Ryuuji — nome in codice Reize', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 22, col: '#7fd08f',
        tec: ['astro_break', 'illusione', 'zig_zag'], mod: { tir: 1.42, ctr: 1.3, vel: 1.15 } }
    ] },

  /* Gemini Storm con la Pietra di Alius a pieno regime: le prime due
     volte la Raimon non riesce nemmeno a toccare la palla. */
  gemini_alius: { id: 'gemini_alius', nome: 'Gemini Storm', sigla: 'GEM', lvCons: 40, col: '#8f7fd0', col2: '#4a3f8f',
    lv: 44, base: 92, stemma: '☄️', alius: true,
    nomi: ['Gigu', 'Karon', 'Pandora', 'Gringo', 'Riimu'],
    motto: 'La stessa squadra, ma con la pietra accesa. Contro di loro non si perde: si viene tolti dal campo.',
    chiave: [
      { id: 'reo', nome: 'Gorureo', corto: 'Gorureo', jp: 'Goryuu Reo', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 16, col: '#a08fd0',
        tec: ['muro_infinito', 'mani_pietra'], mod: { par: 1.4 } },
      { id: 'coral', nome: 'Coral', corto: 'Coral', jp: 'Sango Yoshirou', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 9, tec: ['anticipo'], mod: { dif: 1.3, vel: 1.2 } },
      { id: 'gigu', nome: 'Gigu', corto: 'Gigu', jp: 'Kikuma Shousuke', ruolo: 'DF', el: 'terra', prof: 'muro', b: 8, tec: ['scivolata'], mod: { dif: 1.3, fis: 1.3 } },
      { id: 'ganymede', nome: 'Ganymede', corto: 'Ganymede', jp: 'Kanime Iderou', ruolo: 'DF', el: 'terra', prof: 'muro', b: 14, tec: ['the_tower'], mod: { dif: 1.4, fis: 1.3 } },
      { id: 'karon', nome: 'Karon', corto: 'Karon', jp: 'Karoku Satori', ruolo: 'DF', el: 'bosco', prof: 'terzino', b: 8, tec: ['gabbia'], mod: { dif: 1.28 } },
      { id: 'pandora', nome: 'Pandora', corto: 'Pandora', jp: 'Kinki Nozomi', ruolo: 'CC', el: 'aria', prof: 'regista', b: 11, tec: ['illusione'], mod: { ctr: 1.34 } },
      { id: 'gringo', nome: 'Gringo', corto: 'Gringo', jp: 'Omotsuki Sora', ruolo: 'CC', el: 'bosco', prof: 'ala', b: 9, tec: ['zig_zag'], mod: { vel: 1.28 } },
      { id: 'io', nome: 'Io', corto: 'Io', jp: 'Io Shuntarou', ruolo: 'CC', el: 'fuoco', prof: 'ala', b: 13, tec: ['cambio_passo', 'cannonata'], mod: { vel: 1.34, tir: 1.25 } },
      { id: 'riimu', nome: 'Riimu', corto: 'Riimu', jp: 'Nanakaze Rimu', ruolo: 'AT', el: 'aria', prof: 'ala', b: 12, tec: ['tiro_a_giro'], mod: { vel: 1.3, tir: 1.25 } },
      { id: 'diam', nome: 'Diam', corto: 'Diam', jp: 'Miura Hiromu', ruolo: 'AT', el: 'terra', prof: 'bomber', b: 18, col: '#9a8fd8',
        tec: ['spirale_nera', 'cannonata'], mod: { tir: 1.45, fis: 1.3 } },
      { id: 'reize', nome: 'Jordan Greenway', corto: 'Reize', jp: 'Midorikawa Ryuuji — nome in codice Reize', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 24, col: '#7fd08f',
        tec: ['astro_break', 'illusione', 'zig_zag'], mod: { tir: 1.5, ctr: 1.35, vel: 1.2 } }
    ] },
  epsilon: { id: 'epsilon', nome: 'Epsilon', sigla: 'EPS', lvCons: 34, col: '#5fc8b0', col2: '#2f7a6a',
    lv: 37, base: 58, stemma: '🛸', alius: true,
    nomi: ['Kayson', 'Kenvil', 'Fadora', 'Cripto', 'Swarm'],
    motto: 'La prima squadra di Alius Academy. Giocano come se il risultato fosse già scritto da qualche parte.',
    chiave: [
      { id: 'desarm', nome: 'Desarm', corto: 'Desarm', jp: 'Saginuma Osamu — nome in codice Desarm', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 20, col: '#8fd0c0',
        tec: ['muro_infinito', 'the_tower'], mod: { par: 1.4, gri: 1.3 } },
      { id: 'titan', nome: 'Titan', corto: 'Titan', jp: 'Tanba Taiji', ruolo: 'DF', el: 'terra', prof: 'muro', b: 12, tec: ['cancello_pietra'], mod: { dif: 1.35, fis: 1.3 } },
      { id: 'moll', nome: 'Moll', corto: 'Moll', jp: 'Morino Rumi', ruolo: 'DF', el: 'bosco', prof: 'terzino', b: 8, tec: ['trappola_radici'], mod: { dif: 1.25 } },
      { id: 'kayson', nome: 'Kayson', corto: 'Kayson', jp: 'Murata Keisuke', ruolo: 'DF', el: 'terra', prof: 'terzino', b: 7, tec: ['scivolata'], mod: { dif: 1.2 } },
      { id: 'kenvil', nome: 'Kenvil', corto: 'Kenvil', jp: 'Hiruma Ken\'ichi', ruolo: 'DF', el: 'aria', prof: 'muro', b: 7, tec: ['pressing2'], mod: { dif: 1.2, fis: 1.15 } },
      { id: 'fadora', nome: 'Fadora', corto: 'Fadora', jp: 'Hatou Torahiko', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 8, tec: ['anticipo'], mod: { dif: 1.22, vel: 1.15 } },
      { id: 'cripto', nome: 'Cripto', corto: 'Cripto', jp: 'Kuri Fuuko', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 10, tec: ['illusione'], mod: { ctr: 1.3 } },
      { id: 'swarm', nome: 'Swarm', corto: 'Swarm', jp: 'Mureta Hachirou', ruolo: 'CC', el: 'aria', prof: 'ala', b: 9, tec: ['zig_zag'], mod: { vel: 1.25 } },
      { id: 'maquia', nome: 'Maquia', corto: 'Maquia', jp: 'Sumeragi Maki', ruolo: 'AT', el: 'aria', prof: 'ala', b: 13, tec: ['lama_cometa'], mod: { tir: 1.3, vel: 1.2 } },
      { id: 'metron', nome: 'Metron', corto: 'Metron', jp: 'Mutou Satoshi', ruolo: 'AT', el: 'terra', prof: 'bomber', b: 16, col: '#7fd0c0',
        tec: ['astro_break'], mod: { tir: 1.38, fis: 1.2 } },
      { id: 'zel', nome: 'Zel', corto: 'Zel', jp: 'Segata Ryuuchirou', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 18, tec: ['astro_break', 'bordata'], mod: { tir: 1.4 } }
    ] },

  diamond: { id: 'diamond', nome: 'Diamond Dust', sigla: 'DIA', lvCons: 36, col: '#bfe8ff', col2: '#5f8fb0',
    lv: 39, base: 50, stemma: '❄️', alius: true,
    nomi: ['Gokka', 'Valen', 'Droll', 'Blow', 'IQ'],
    motto: 'Il campo si copre di brina dove passano loro. La squadra di Gazel.',
    chiave: [
      { id: 'beluga', nome: 'Beluga', corto: 'Beluga', jp: 'Shirai Ikkaku', ruolo: 'PT', el: 'aria', prof: 'portiere', b: 16, tec: ['mani_di_neve', 'muro_infinito'], mod: { par: 1.38 } },
      { id: 'clara', nome: 'Clara', corto: 'Clara', jp: 'Kurakake Clara', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 12, tec: ['raffica_gelata'], mod: { dif: 1.3, vel: 1.2 } },
      { id: 'gokka', nome: 'Gokka', corto: 'Gokka', jp: 'Gokukawa Kantarou', ruolo: 'DF', el: 'terra', prof: 'muro', b: 10, tec: ['cancello_pietra'], mod: { dif: 1.3, fis: 1.25 } },
      { id: 'valen', nome: 'Valen', corto: 'Valen', jp: 'Toba Ren', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 8, tec: ['anticipo'], mod: { dif: 1.24 } },
      { id: 'rhionne', nome: 'Rhionne', corto: 'Rhionne', jp: 'Kurione Yuki', ruolo: 'DF', el: 'aria', prof: 'muro', b: 10, tec: ['raffica_gelata'], mod: { dif: 1.28, fis: 1.2 } },
      { id: 'ic', nome: 'IC', corto: 'IC', jp: 'Touchi Ai', ruolo: 'CC', el: 'aria', prof: 'regista', b: 16, tec: ['raffica_gelata', 'illusione'], mod: { ctr: 1.38 } },
      { id: 'iq', nome: 'IQ', corto: 'IQ', jp: 'Touchi Shuuji', ruolo: 'CC', el: 'aria', prof: 'regista', b: 12, tec: ['illusione'], mod: { ctr: 1.3 } },
      { id: 'droll', nome: 'Droll', corto: 'Droll', jp: 'Kadomichi Tooru', ruolo: 'CC', el: 'bosco', prof: 'ala', b: 9, tec: ['zig_zag'], mod: { vel: 1.24 } },
      { id: 'blow', nome: 'Blow', corto: 'Blow', jp: 'Tsumujino Touji', ruolo: 'CC', el: 'aria', prof: 'ala', b: 10, tec: ['cambio_passo'], mod: { vel: 1.28 } },
      { id: 'frost', nome: 'Frost', corto: 'Frost', jp: 'Mikoori Rei', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 16, col: '#cfe8ff',
        tec: ['lama_ghiaccio', 'bordata'], mod: { tir: 1.38 } },
      { id: 'gazel', nome: 'Gazel', corto: 'Gazel', jp: 'Suzuno Fuusuke — nome in codice Gazel', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 24, col: '#dff2ff',
        tec: ['northern', 'lama_ghiaccio'], mod: { tir: 1.5, ctr: 1.2 } }
    ] },

  prominence: { id: 'prominence', nome: 'Prominence', sigla: 'PRO', lvCons: 37, col: '#ff8a4a', col2: '#a83f1f',
    lv: 40, base: 66, stemma: '🔥', alius: true,
    nomi: ['Berkley', 'Satosu', 'Bonitona', 'Saiden', 'Barra'],
    motto: 'Bruciano il campo e poi ci giocano sopra. La squadra di Burn.',
    chiave: [
      { id: 'grent', nome: 'Grent', corto: 'Grent', jp: 'Ooiwa Kurando', ruolo: 'PT', el: 'fuoco', prof: 'portiere', b: 16, tec: ['pugno_teso', 'mani_pietra'], mod: { par: 1.38 } },
      { id: 'barra', nome: 'Barra', corto: 'Barra', jp: 'Barazono Hana', ruolo: 'DF', el: 'fuoco', prof: 'terzino', b: 11, tec: ['scivolata'], mod: { dif: 1.28, vel: 1.18 } },
      { id: 'berkley', nome: 'Berkley', corto: 'Berkley', jp: 'Hagakure Koutarou', ruolo: 'DF', el: 'bosco', prof: 'terzino', b: 8, tec: ['gabbia'], mod: { dif: 1.24 } },
      { id: 'bomber', nome: 'Bomber', corto: 'Bomber', jp: 'Honba Geki', ruolo: 'DF', el: 'terra', prof: 'muro', b: 14, tec: ['the_tower'], mod: { dif: 1.34, fis: 1.4 } },
      { id: 'saiden', nome: 'Saiden', corto: 'Saiden', jp: 'Saiden Jou', ruolo: 'DF', el: 'terra', prof: 'muro', b: 9, tec: ['muro_di_terra'], mod: { dif: 1.26, fis: 1.22 } },
      { id: 'rean', nome: 'Rean', corto: 'Rean', jp: 'Hasuike An', ruolo: 'CC', el: 'fuoco', prof: 'regista', b: 12, tec: ['illusione'], mod: { ctr: 1.32 } },
      { id: 'satosu', nome: 'Satosu', corto: 'Satosu', jp: 'Satou Kazuo', ruolo: 'CC', el: 'terra', prof: 'ala', b: 8, tec: ['spalla'], mod: { vel: 1.2, fis: 1.15 } },
      { id: 'bonitona', nome: 'Bonitona', corto: 'Bonitona', jp: 'Nitou Honoka', ruolo: 'CC', el: 'fuoco', prof: 'ala', b: 10, tec: ['giravolta'], mod: { vel: 1.26 } },
      { id: 'heat', nome: 'Heat', corto: 'Heat', jp: 'Atsuishi Shigeto', ruolo: 'AT', el: 'fuoco', prof: 'ala', b: 15, tec: ['tornado_fuoco'], mod: { tir: 1.34, vel: 1.24 } },
      { id: 'nepper', nome: 'Nepper', corto: 'Nepper', jp: 'Netsuha Natsuhiko', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 18, col: '#ffb07f',
        tec: ['atomic_flare', 'drago_ruggente'], mod: { tir: 1.42, vel: 1.2 } },
      { id: 'burn', nome: 'Burn', corto: 'Burn', jp: 'Nagumo Haruya — nome in codice Burn', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 24, col: '#ff9a6a',
        tec: ['atomic_flare', 'tornado_fuoco'], mod: { tir: 1.5, vel: 1.22 } }
    ] },

  genesis: { id: 'genesis', nome: 'The Genesis', sigla: 'GEN', lvCons: 40, col: '#e8e0ff', col2: '#6f5fa8',
    lv: 44, base: 56, stemma: '🌌', alius: true,
    nomi: ['Gale', 'Keeve', 'Houser', 'Quill', 'Arc'],
    motto: 'La squadra più forte di Alius Academy. Non hanno mai preso un gol da nessuno.',
    chiave: [
      { id: 'nero', nome: 'Nero', corto: 'Nero', jp: 'Nemuro Kimiyuki', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 16, tec: ['muro_infinito', 'mani_pietra'], mod: { par: 1.34 } },
      { id: 'gale', nome: 'Gale', corto: 'Gale', jp: 'Kujirai Takanori', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 12, tec: ['pressing2'], mod: { dif: 1.3, vel: 1.2 } },
      { id: 'keeve', nome: 'Keeve', corto: 'Keeve', jp: 'Kii Fumiko', ruolo: 'DF', el: 'bosco', prof: 'terzino', b: 11, tec: ['gabbia'], mod: { dif: 1.28 } },
      { id: 'zohan', nome: 'Zohan', corto: 'Zohan', jp: 'Ishidaira Hanzou', ruolo: 'DF', el: 'terra', prof: 'muro', b: 16, tec: ['cancello_pietra', 'the_tower'], mod: { dif: 1.4, fis: 1.32 } },
      { id: 'houser', nome: 'Houser', corto: 'Houser', jp: 'Hanesaki Gouta', ruolo: 'DF', el: 'terra', prof: 'muro', b: 12, tec: ['muro_di_terra'], mod: { dif: 1.3, fis: 1.25 } },
      { id: 'koma', nome: 'Koma', corto: 'Koma', jp: 'Komazawa Kyouma', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 13, tec: ['illusione', 'marcatura'], mod: { ctr: 1.34 } },
      { id: 'quill', nome: 'Quill', corto: 'Quill', jp: 'Kui Ruru', ruolo: 'CC', el: 'aria', prof: 'ala', b: 11, tec: ['zig_zag'], mod: { vel: 1.28 } },
      { id: 'arc', nome: 'Arc', corto: 'Arc', jp: 'Akutsu Kiyoshi', ruolo: 'CC', el: 'fuoco', prof: 'regista', b: 12, tec: ['passo_di_lato'], mod: { ctr: 1.3 } },
      { id: 'wheeze', nome: 'Wheeze', corto: 'Wheeze', jp: 'Izuno Yuu', ruolo: 'AT', el: 'terra', prof: 'bomber', b: 15, col: '#d8d0ff',
        tec: ['spirale_nera'], mod: { tir: 1.36 } },
      { id: 'ulvida', nome: 'Ulvida', corto: 'Ulvida', jp: 'Yagami Reina — nome in codice Ulvida', ruolo: 'CC', el: 'aria', prof: 'regista', b: 20, col: '#bfd8ff',
        tec: ['northern', 'illusione'], mod: { ctr: 1.42, vel: 1.22, tir: 1.2 } },
      { id: 'gran', nome: 'Xavier Foster', corto: 'Gran', jp: 'Kiyama Hiroto — nome in codice Gran', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 24, col: '#ff9a9a',
        tec: ['lama_cometa', 'atomic_flare'], mod: { tir: 1.5, ctr: 1.3 } }
    ] },

  kasamino: { id: 'kasamino', nome: 'Scuola Media Kasamino', sigla: 'KAS', lvCons: 12, col: '#c8b07f', col2: '#8f7a4a',
    lv: 14, base: 30, stemma: '🏫',
    motto: 'Una scuola normale con una squadra normale. Ieri hanno giocato contro Gemini Storm e adesso della scuola non c\'è più il primo piano.',
    chiave: [
      { id: 'cap', nome: 'Rei Kasamino', corto: 'Kasamino', ruolo: 'CC', el: 'terra', prof: 'regista', b: 8, col: '#c8b07f',
        tec: ['passo_di_lato'], mod: { ctr: 1.25 } },
      { id: 'por', nome: 'Tarō Sekiya', corto: 'Sekiya', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 7, tec: ['presa_sicura'], mod: { par: 1.2 } }
    ] },

  cloister: { id: 'cloister', nome: 'Scuola Media Cloister', sigla: 'CLO', lvCons: 22, col: '#c88f5f', col2: '#7a4f2f',
    lv: 24, base: 40, stemma: '⛩️',
    motto: 'La scuola-tempio di Kyoto, in originale Manyūji. Hanno chiesto loro di giocare per primi contro Epsilon.',
    chiave: [
      { id: 'scotty', nome: 'Scotty Banyan', corto: 'Scotty', jp: 'Kogure Yuuya', ruolo: 'DF', el: 'bosco', prof: 'terzino', b: 13, col: '#7f9a5f',
        tec: ['gabbia', 'anticipo'], mod: { dif: 1.25, vel: 1.15 } },
      { id: 'cap', nome: 'Genkai Manyū', corto: 'Manyū', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 12, col: '#c88f5f',
        tec: ['illusione'], mod: { ctr: 1.3 } },
      { id: 'por', nome: 'Ryōkai Anjō', corto: 'Anjō', ruolo: 'PT', el: 'bosco', prof: 'portiere', b: 12, tec: ['rete_di_rami'], mod: { par: 1.28 } }
    ] },

  yokato: { id: 'yokato', nome: 'Scuola Media Yokato', sigla: 'YOK', lvCons: 26, col: '#7fb8e8', col2: '#3f6f9a',
    lv: 28, base: 44, stemma: '🧤',
    motto: 'Undici ragazzi normali e un portiere che ha imparato a parare guardando le partite della Raimon in televisione.',
    chiave: [
      { id: 'darren', nome: 'Darren LaChance', corto: 'Darren', jp: 'Tachimukai Yuuki', ruolo: 'PT', el: 'aria', prof: 'portiere', b: 20, col: '#7fb8e8',
        tec: ['mano_luce_blu', 'presa_falco'], mod: { par: 1.42 } },
      { id: 'cap', nome: 'Rin Ōbayashi', corto: 'Ōbayashi', ruolo: 'AT', el: 'aria', prof: 'bomber', b: 12, tec: ['tiro_a_giro'], mod: { tir: 1.3 } }
    ] },

  raimon: { id: 'raimon', nome: 'Scuola Media Raimon', sigla: 'RAI', lvCons: 29, col: '#e8703a', col2: '#8f3f18',
    lv: 32, base: 43, stemma: '⚡',
    motto: 'Undici che non dovevano arrivare da nessuna parte, e sono arrivati fino in fondo. Campioni del Football Frontier.',
    chiave: [
      { id: 'mark', nome: 'Mark Evans', corto: 'Mark', jp: 'Endou Mamoru', ruolo: 'PT', el: 'terra', prof: 'portiere', b: 22, col: '#ff7043',
        tec: ['mano_magica', 'mano_infinita'], mod: { par: 1.3, gri: 1.6 } },
      { id: 'nathan', nome: 'Nathan Swift', corto: 'Nathan', jp: 'Kazemaru Ichirouta', ruolo: 'DF', el: 'aria', prof: 'terzino', b: 18, col: '#5fc8ff',
        tec: ['spirale_vento', 'taglio_vento'], mod: { vel: 1.45, dif: 1.2 } },
      { id: 'jack', nome: 'Jack Wallside', corto: 'Jack', jp: 'Kabeyama Heigorou', ruolo: 'DF', el: 'terra', prof: 'muro', b: 17, col: '#7ac87a',
        tec: ['the_wall', 'muro_di_terra'], mod: { fis: 1.5, dif: 1.3, vel: 0.7 } },
      { id: 'jim', nome: 'Jim Wraith', corto: 'Jim', jp: 'Kageno Jin', ruolo: 'DF', el: 'bosco', prof: 'muro', b: 12, col: '#6f5f8f',
        tec: ['trappola_radici'], mod: { dif: 1.25, vel: 1.1 } },
      { id: 'todd', nome: 'Todd Ironside', corto: 'Todd', jp: 'Kurimatsu Teppei', ruolo: 'DF', el: 'terra', prof: 'terzino', b: 12, col: '#c8a06f',
        tec: ['scivolata'], mod: { dif: 1.2, res: 1.2 } },
      { id: 'steve', nome: 'Steve Grim', corto: 'Steve', jp: 'Handa Shin\'ichi', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 14, col: '#8fc87a',
        tec: ['passo_di_lato', 'lettura'], mod: { ctr: 1.25 } },
      { id: 'timmy', nome: 'Timmy Sanders', corto: 'Timmy', jp: 'Shourinji Ayumu', ruolo: 'CC', el: 'bosco', prof: 'ala', b: 12, col: '#a8c85f',
        tec: ['zig_zag'], mod: { vel: 1.2, ctr: 1.15 } },
      { id: 'sam', nome: 'Sam Kincaid', corto: 'Sam', jp: 'Shishido Sakichi', ruolo: 'CC', el: 'fuoco', prof: 'ala', b: 12, col: '#e0885f',
        tec: ['cambio_passo'], mod: { vel: 1.2 } },
      { id: 'max', nome: 'Max Carson', corto: 'Max', jp: 'Matsuno Kuusuke', ruolo: 'AT', el: 'aria', prof: 'ala', b: 14, col: '#7fd0c8',
        tec: ['folata', 'tiro_a_giro'], mod: { vel: 1.35, tir: 1.1 } },
      { id: 'axel', nome: 'Axel Blaze', corto: 'Axel', jp: 'Gouenji Shuuya', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 24, col: '#ff5468',
        tec: ['tornado_fuoco', 'giravolta'], mod: { tir: 1.45, vel: 1.2 } },
      { id: 'kevin', nome: 'Kevin Dragonfly', corto: 'Kevin', jp: 'Someoka Ryuugo', ruolo: 'AT', el: 'fuoco', prof: 'bomber', b: 18, col: '#d05f8f',
        tec: ['tornado_drago'], mod: { tir: 1.35, fis: 1.2 } },
      { id: 'jude', nome: 'Jude Sharp', corto: 'Jude', jp: 'Kidou Yuuto', ruolo: 'CC', el: 'aria', prof: 'regista', b: 24, col: '#5fa8ff',
        tec: ['pinguino1', 'illusione', 'marcatura'], mod: { ctr: 1.45, gri: 1.25, tir: 1.15 } },
      { id: 'shawn', nome: 'Shawn Froste', corto: 'Shawn', jp: 'Fubuki Shirou', ruolo: 'AT', el: 'aria', prof: 'tuttofare', b: 24, col: '#bfe8ff',
        tec: ['eterna_bufera', 'wolf_legend', 'raffica_gelata'], mod: { tir: 1.4, dif: 1.25, ctr: 1.2 } },
      { id: 'bobby', nome: 'Bobby Shearer', corto: 'Bobby', jp: 'Domon Asuka', ruolo: 'CC', el: 'terra', prof: 'terzino', b: 13, col: '#c87a5f',
        tec: ['anticipo'], mod: { dif: 1.15, ctr: 1.15 } },
      { id: 'william', nome: 'William Glass', corto: 'William', jp: 'Megane Kakeru', ruolo: 'CC', el: 'bosco', prof: 'regista', b: 6, col: '#9a9ab0',
        tec: ['finta_secca'], mod: { ctr: 1.1 } },
      { id: 'scotty', nome: 'Scotty Banyan', corto: 'Scotty', jp: 'Kogure Yuuya', ruolo: 'DF', el: 'bosco', prof: 'terzino', b: 11, col: '#7f9a5f',
        tec: ['gabbia'], mod: { dif: 1.2, vel: 1.1 } },
      { id: 'hurley', nome: 'Hurley Kane', corto: 'Hurley', jp: 'Tsunami Jousuke', ruolo: 'DF', el: 'aria', prof: 'muro', b: 19, col: '#5fb8c8',
        tec: ['the_wall', 'tsunami_boost'], mod: { dif: 1.35, fis: 1.3, gri: 1.2 } },
      { id: 'darren', nome: 'Darren LaChance', corto: 'Darren', jp: 'Tachimukai Yuuki', ruolo: 'PT', el: 'aria', prof: 'portiere', b: 18, col: '#7fb8e8',
        tec: ['mano_luce_blu', 'presa_falco'], mod: { par: 1.36 } },
      { id: 'victoria', nome: 'Victoria Vanguard', corto: 'Victoria', jp: 'Zaizen Touko', ruolo: 'DF', el: 'terra', prof: 'muro', b: 19, col: '#ff9ac8',
        tec: ['cancello_pietra', 'marcatura'], mod: { dif: 1.36, fis: 1.24, gri: 1.3 } },
      { id: 'suzette', nome: 'Suzette Heartland', corto: 'Suzette', jp: 'Urabe Rika', ruolo: 'AT', el: 'aria', prof: 'ala', b: 17, col: '#e88fd0',
        tec: ['tiro_a_giro', 'cambio_passo'], mod: { tir: 1.3, vel: 1.32 } },
      { id: 'erik', nome: 'Erik Eagle', corto: 'Erik', jp: 'Ichinose Kazuya', ruolo: 'CC', el: 'fuoco', prof: 'regista', b: 21, col: '#ffd07f',
        tec: ['illusione', 'passo_di_lato'], mod: { ctr: 1.4, vel: 1.25, tir: 1.2 } }
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
             nota: 'In porta, dopo aver preso gol: due, o anche uno solo se è il secondo tempo.' },
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
  tu:      { tec: null,            dove: 'partita',     lv: 15, cond: 'sottoUno', scena: 'f_tu',
             nota: 'Nel secondo tempo di una partita che state perdendo, quando non c\'è più nessun altro a cui chiederlo.' }
};
/* la firma del capitano dipende dal ruolo scelto */
IE.firmaTua = function (ruolo) { return 'firma_tu_' + (ruolo || 'CC'); };


/* ============================================================
   ATTO SECONDO — IL VIAGGIO
   Ricalca la struttura dei giochi «Inazuma Eleven 2: Tempesta di
   Fuoco» e «Bufera di Neve»: stessi capitoli, stesso ordine,
   stessi arrivi in squadra. Il capitano di Amanome si aggiunge
   al capitolo 3, quando la carovana sale verso Hokkaido.
   ============================================================ */
IE.versioni = {
  fuoco: { id: 'fuoco', nome: 'Tempesta di Fuoco', icona: '🔥',
    desc: 'La strada che segue Axel Blaze. Di fronte troverai Prominence.',
    squadra: 'prominence', altra: 'diamond', segue: 'Axel Blaze' },
  neve:  { id: 'neve', nome: 'Bufera di Neve', icona: '❄️',
    desc: 'La strada che segue Shawn Froste. Di fronte troverai Diamond Dust.',
    squadra: 'diamond', altra: 'prominence', segue: 'Shawn Froste' }
};

/* Chi c'è sul pullman quando ci sali, e chi arriva dopo.
   Axel Blaze non è in squadra: torna al capitolo 8. */
/* Chi c'è sul pullman quando parte: gli undici che non si sono fatti
   male contro Gemini Storm, più chi era già in squadra. Axel Blaze non
   c'è: se n'è andato dopo il crollo della scuola e torna all'ottavo. */
IE.caravanBase = ['mark', 'nathan', 'jack', 'jim', 'todd', 'steve', 'timmy', 'sam', 'max', 'kevin', 'jude', 'bobby', 'william'];

/* Chi si aggiunge, capitolo per capitolo del secondo gioco. */
IE.caravanArrivi = {
  2:  ['victoria'],          /* La palla nera — dopo il parco di Nara */
  3:  ['shawn'],             /* Una stella del nord — Hakuren, Hokkaido */
  4:  ['scotty'],            /* Un appuntamento con la divinità — Cloister, Kyoto */
  5:  ['darren'],            /* Resa dei conti — Yokato */
  6:  ['byron'],             /* Il luna park — Byron Love entra a partita in corso */
  7:  ['erik', 'suzette', 'nathan', 'todd'],  /* Il taccuino segreto — Erik torna dall'America, e rientrano i due infortunati */
  8:  ['axel', 'hurley']     /* Il ritorno del fuoco — Okinawa */
};

/* Chi si fa male, e quando. Nel gioco la prima ondata di Alius Academy
   toglie di mezzo mezza squadra: qui succede uguale. */
IE.caravanFerite = {
  1: ['steve', 'sam', 'max', 'jim', 'timmy'],   /* Kasamino, 20-0 */
  2: ['nathan', 'todd']                          /* la seconda contro Gemini Storm */
};

/* Le tecniche che si imparano strada facendo. Le assegna la storia,
   nel punto in cui nel gioco le impara quel giocatore lì. */
IE.caravanTecniche = {
  mark:     ['pugno_giustizia', 'colosso_mano'],
  nathan:   ['shippuu'],
  kevin:    ['wyvern_crash'],
  shawn:    ['ice_ground', 'snow_angel'],
  axel:     ['bakunetsu', 'bakunetsu_v'],
  jude:     ['pinguino2', 'koutei_muro'],
  darren:   ['colosso_blu', 'mano_insup'],
  scotty:   ['senpuujin'],
  hurley:   ['onda_lunga'],
  victoria: ['perfect_tower'],
  suzette:  ['butterfly'],
  erik:     ['death_zone2'],
  byron:    ['god_knows', 'heavens_time']
};

/* Le riserve della Raimon: quando mezza squadra è all'ospedale, in
   campo ci va chi c'è. Sono ragazzi della scuola, non campioni. */
IE.caravanRiserve = [
  { nome: 'Kenji Sagara',   ruolo: 'DF', el: 'terra' },
  { nome: 'Tsutomu Ide',    ruolo: 'DF', el: 'bosco' },
  { nome: 'Rin Hoshiba',    ruolo: 'CC', el: 'aria' },
  { nome: 'Osamu Kuki',     ruolo: 'CC', el: 'terra' },
  { nome: 'Wataru Sudō',      ruolo: 'AT', el: 'fuoco' },
  { nome: 'Jun Nakadai',    ruolo: 'AT', el: 'bosco' },
  { nome: 'Shirō Amagase',  ruolo: 'DF', el: 'aria' },
  { nome: 'Hideo Kanbara',  ruolo: 'CC', el: 'fuoco' }
];

/* ATTO SECONDO: le tecniche del capitano si azzerano.
   Sul pullman non serve a niente il Tuono di Amanome: quella era
   un'altra squadra e un altro campionato. Si riparte da due tecniche
   di base e si impara di nuovo, come fanno tutti gli altri. */
IE.atto2 = {
  base: {
    PT: ['presa_sicura', 'pugno_teso'],
    DF: ['contrasto', 'sbarramento'],
    CC: ['doppio_passo', 'passo_di_lato'],
    AT: ['tiro_dritto', 'tiro_al_volo']
  },
  /* quello che impari tu, capitolo per capitolo */
  impara: {
    2:  { PT: 'volo_laterale', DF: 'anticipo',      CC: 'cambio_passo', AT: 'tiro_teso' },
    3:  { PT: 'mani_di_neve',  DF: 'raffica_gelata', CC: 'spirale_neve', AT: 'lama_ghiaccio' },
    4:  { PT: 'presa_alta',    DF: 'gabbia',        CC: 'zig_zag',      AT: 'tiro_a_giro' },
    5:  { PT: 'cancello_chiuso', DF: 'marcatura',   CC: 'illusione',    AT: 'bordata' },
    6:  { PT: 'presa_falco',   DF: 'cancello_pietra', CC: 'sombrero',   AT: 'giravolta' },
    7:  { PT: 'mani_pietra',   DF: 'the_wall',      CC: 'finta_secca',  AT: 'cannonata' },
    8:  { PT: 'mano_magica',   DF: 'the_tower',     CC: 'heavens_time', AT: 'tornado_fuoco' },
    9:  { PT: 'firma2_tu_PT',  DF: 'firma2_tu_DF',  CC: 'firma2_tu_CC', AT: 'firma2_tu_AT' },
    10: { PT: 'mano_infinita', DF: 'perfect_tower', CC: 'koutei_muro',  AT: 'pinguino2' }
  }
};

/* ---------- formazioni ---------- */
IE.formazioni = {
  '4-4-2':  { nome: '4-4-2 Classico',  linee: { PT: 1, DF: 4, CC: 4, AT: 2 }, dif: 1.0,  att: 1.0,  desc: 'Equilibrata. Nessuno si lamenta, nessuno si esalta.' },
  '5-3-2':  { nome: '5-3-2 Catenaccio',linee: { PT: 1, DF: 5, CC: 3, AT: 2 }, dif: 1.18, att: 0.86, desc: 'Chiudere tutto e sperare in un contropiede.' },
  '4-3-3':  { nome: '4-3-3 Tridente',  linee: { PT: 1, DF: 4, CC: 3, AT: 3 }, dif: 0.94, att: 1.1,  desc: 'Tre davanti e tre in mezzo: si copre un po\' meno e si punge molto di più.' },
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
