/* ============================================================
   AMANOME ELEVEN — storia, dialoghi, capitoli
   Scene:  { id, luogo, righe:[{chi,t,cls}], scelte:[...], poi }
   chi:    'narr' | 'tu' | id di un personaggio
   poi:    id di scena | {partita:{...}} | {hub:true} | {capitolo:n}
   ============================================================ */
(function () {
'use strict';
var IE = window.IE;
var S = IE.storia = { scene: {} };

function sc(o) { S.scene[o.id] = o; return o; }
function n(t, cls) { return { chi: 'narr', t: t, cls: cls || '' }; }
function tu(t, cls) { return { chi: 'tu', t: t, cls: cls || '' }; }
function d(chi, t, cls) { return { chi: chi, t: t, cls: cls || '' }; }

/* Una battuta del capitano che cambia con il suo carattere.
   Le chiavi sono i cinque caratteri; «base» vale per quelli non elencati. */
function tv(v, cls) { return { chi: 'tu', v: v, cls: cls || '' }; }

/* ============================================================
   CAPITOLO 1 — UNDICI NOMI
   ============================================================ */

sc({ id: 'c1_1', luogo: 'Scuola media di Amanome — Aula 2-A',
  righe: [
    n("Amanome ha quattrocentododici abitanti, un distributore automatico che funziona d'estate, e una scuola media con trentotto studenti divisi in tre classi."),
    n("Il pullman per la città passa due volte al giorno. Alle 6:40 e alle 17:10. Se lo perdi, dormi dove sei."),
    n("È il primo lunedì di aprile. Fuori dalla finestra c'è ancora neve sulla cresta del monte Kurogane."),
    d('rei', "Ehi. Ehi. Stai guardando fuori da venti minuti."),
    tv({
      fuoco:   "Guardo il campo!",
      calmo:   "Guardo il campo.",
      ironico: "Sto valutando una proprietà immobiliare.",
      chiuso:  "Il campo.",
      ostinato:"Guardo il campo. Da venti minuti, sì."
    }),
    d('rei', "Quale campo?"),
    tu("Quello dietro la palestra."),
    d('rei', "Quello è un prato. Con dentro due cose di ferro arrugginite."),
    tv({
      fuoco:   "SONO DUE PORTE!",
      calmo:   "Sono due porte. Storte, ma due porte.",
      ironico: "Sono due porte molto rilassate.",
      chiuso:  "Sono porte.",
      ostinato:"Sono due porte, e restano due porte anche se lo dici in un altro modo."
    }),
    d('rei', "Sono due cose di ferro arrugginite in un prato.", 'pensiero'),
    n("Rei Tachibana è il tuo compagno di banco da un anno e mezzo. Non ha mai visto una partita di calcio per intero in vita sua."),
    n("Tu invece sai a memoria le formazioni di squadre che hanno smesso di esistere prima che tu nascessi."),
    tu("Rei. Ad Amanome non c'è il club di calcio."),
    d('rei', "Non c'è nemmeno il club di nuoto. Non c'è la piscina."),
    tu("Il prato però c'è."),
    d('rei', "…"),
    d('rei', "Ho la sensazione che questa conversazione mi costerà i prossimi due anni della mia vita.")
  ],
  poi: 'c1_2' });

sc({ id: 'c1_2', luogo: 'Dietro la palestra',
  righe: [
    n("Il campo è lungo il giusto e largo il giusto. È quello che c'è dentro il campo, il problema."),
    n("Erba alta fino al ginocchio. Una porta senza rete. L'altra porta piegata in avanti, come se qualcuno le si fosse appeso e non fosse più sceso."),
    n("Sulla linea di fondo, dove non cresce niente, il terreno è ancora battuto. Duro. Come se qualcuno ci avesse corso sopra per anni."),
    tu("Qui ci si giocava."),
    d('rei', "Mio padre dice che sì. Tanto tempo fa."),
    tu("Quanto tanto?"),
    d('rei', "Prima di lui. Dice che poi hanno chiuso il club e nessuno ha più chiesto di riaprirlo."),
    n("Sotto la tettoia del magazzino c'è un armadio di metallo con la serratura mangiata dalla ruggine. Si apre spingendo."),
    n("Dentro: quattro palloni di cuoio induriti come sassi. Una cassetta di gesso. E un quaderno."),
    n("La copertina dice, in inchiostro sbiadito:"),
    n("« CLUB DI CALCIO — SCUOLA MEDIA DI AMANOME — 1985 »", 'urlo'),
    n("Dentro, sulla prima pagina, undici nomi scritti a mano. Uno sotto l'altro. Con accanto il numero di maglia."),
    n("L'ultima pagina è di dieci mesi dopo. Una riga sola:"),
    n("« Il club è sciolto. Non ci sono più abbastanza iscritti. »"),
    tu("Rei."),
    d('rei', "No."),
    tu("Non ho ancora detto niente."),
    d('rei', "Hai quella faccia lì. È la faccia di uno che sta per dire una cosa.")
  ],
  poi: 'c1_3' });

sc({ id: 'c1_3', luogo: 'Ufficio del preside',
  righe: [
    d('preside', "Un club di calcio."),
    tu("Sì."),
    d('preside', "Qui."),
    tu("Sì."),
    n("Il preside Uchimura si toglie gli occhiali e li pulisce con la cravatta. È il gesto che fa quando sta per dire di no in modo educato."),
    d('preside', "Il regolamento scolastico è del 1971 e non l'ha mai cambiato nessuno perché non è mai servito. Dice due cose."),
    d('preside', "Uno: per costituire un club sportivo servono tanti iscritti quanti ne richiede lo sport. Per il calcio: undici."),
    d('preside', "Due: serve un insegnante che firmi come responsabile."),
    tu("Undici."),
    d('preside', "Undici. Su trentotto studenti, di cui nove sono già nel club di baseball, che è l'unica cosa che questa scuola sia mai riuscita a tenere in piedi."),
    d('preside', "E i professori in questa scuola sono cinque. Di cui quattro hanno più di cinquant'anni e uno è arrivato tre settimane fa."),
    n("Silenzio. Dalla finestra si sente il rumore del vento nel prato dietro la palestra."),
    d('preside', "Hai tempo fino alla fine del mese. Se mi porti undici firme e un professore, io firmo."),
    d('preside', "Non lo dico per incoraggiarti. Lo dico perché non succederà e voglio che tu lo scopra da solo. È più utile così."),
    tu("Grazie."),
    d('preside', "Non ringraziarmi ancora.")
  ],
  poi: 'c1_4' });

sc({ id: 'c1_4', luogo: 'Corridoio del primo piano',
  righe: [
    d('rei', "Undici."),
    tu("Undici."),
    d('rei', "Siamo in due."),
    tu("Siamo in due."),
    n("Rei apre il quaderno del 1985 e legge i nomi ad alta voce. Ci mette tempo, perché la calligrafia è di uno che scriveva in fretta."),
    d('rei', "Sai una cosa? Questi qui erano undici come noi. Cioè: erano una scuola come questa. E per un anno ce l'hanno fatta."),
    d('rei', "Poi hanno smesso, ok. Ma per un anno."),
    tu("Rei, stai per dire una cosa."),
    d('rei', "Ho quella faccia lì?"),
    tu("Ce l'hai."),
    d('rei', "Va bene. Cioè, non ho capito niente. Però va bene."),
    n("Rei Tachibana firma il primo foglio con una biro che scrive a metà."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'rei' }, { spirito: 5 }],
  poi: { hub: true } });

/* ---------- reclutamenti ---------- */

sc({ id: 'r_goro', luogo: 'Segheria Ishizuka — fondovalle',
  righe: [
    n("La segheria è un capannone di lamiera a un chilometro dalla scuola. Si sente da lontano: un ronzio basso che non smette mai."),
    n("Gorō Ishizuka sposta tronchi da tre metri come se fossero manici di scopa. Ha tredici anni e le spalle di un adulto."),
    tu("Gorō."),
    d('goro', "…"),
    tu("Sto facendo un club di calcio."),
    d('goro', "…lo so. Lo sanno tutti. Siamo trentotto."),
    tu("Mi serviresti."),
    n("Gorō appoggia il tronco. Si pulisce le mani sui pantaloni, molto lentamente, come si fa quando si sta cercando il modo di dire di no."),
    d('goro', "Io non corro."),
    tu("Non ti sto chiedendo di correre."),
    d('goro', "Tutti quelli che ho visto giocare a calcio correvano."),
    tu("Quelli davanti. Dietro ci vuole uno che non si sposta.")
  ],
  scelte: [
    { t: "«Ci vuole uno che stia fermo mentre gli altri gli vengono addosso.»", vai: 'r_goro_a' },
    { t: "«Comunque ti conviene: qui lavori gratis.»", vai: 'r_goro_b' }
  ] });

sc({ id: 'r_goro_a', luogo: 'Segheria Ishizuka',
  righe: [
    d('goro', "Fermo."),
    tu("Fermo. Come quel tronco lì."),
    n("Gorō guarda il tronco. Poi guarda te. È il discorso più lungo che gli abbia fatto qualcuno da settembre."),
    d('goro', "Quello lo sposto io."),
    tu("Ecco. Nessuno deve poter spostare te."),
    n("Gorō ci pensa per undici secondi buoni. Poi tira su una spalla."),
    d('goro', "…se serve spingo. Correre no."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'goro' }, { spirito: 4 }], poi: { hub: true } });

sc({ id: 'r_goro_b', luogo: 'Segheria Ishizuka',
  righe: [
    d('goro', "Mio padre mi paga."),
    tu("Ah."),
    d('goro', "In legna. Per la stufa. Ma mi paga."),
    n("Silenzio. Il ronzio della sega. Uno dei silenzi peggiori della tua vita."),
    d('goro', "Però il pomeriggio, dopo le cinque, non serve più nessuno."),
    tu("…quindi?"),
    d('goro', "Quindi dopo le cinque. Se non piove."),
    n("Iscritti: {N} su undici. Meno gloriosi, ma sono nomi.")
  ],
  eff: [{ recluta: 'goro' }, { spirito: 2 }], poi: { hub: true } });

sc({ id: 'r_kenta', luogo: 'Aula di scienze — club di scienze (membri: 1)',
  righe: [
    n("Kenta Ubukata è seduto davanti a tre quaderni aperti. Sul primo, colonne di numeri scritti in stampatello minuscolo."),
    d('kenta', "Non sono libero. Sto lavorando."),
    tu("A cosa?"),
    d('kenta', "Percentuali realizzative del Football Frontier, ultimi sei anni. Squadra per squadra. Tempo per tempo."),
    tu("…li hai copiati da dove?"),
    d('kenta', "Dalla radio. Li segno mentre trasmettono e poi li ricontrollo il giorno dopo sul giornale della prefettura, che arriva con due giorni di ritardo."),
    n("Sfoglia. Ci sono sei anni di partite lì dentro. Scritti a mano, di sera, in una valle dove non arriva il segnale."),
    tu("Kenta, tu ami il calcio."),
    d('kenta', "Io amo i dati."),
    tu("Sei anni di dati su una cosa sola."),
    d('kenta', "…"),
    d('kenta', "Statisticamente perderemo. L'ho calcolato. Una scuola con trentotto iscritti ha una probabilità di superare le qualificazioni prefetturali che non arriva allo zero virgola tre per cento."),
    tu("Zero virgola tre non è zero."),
    d('kenta', "No. Non lo è.")
  ],
  scelte: [
    { t: "«Voglio che tu sia quello che ci dice quanto stiamo messi male.»", vai: 'r_kenta_a' },
    { t: "«Voglio che tu giochi. In campo, non a bordo campo.»", vai: 'r_kenta_b' }
  ] });

sc({ id: 'r_kenta_a', luogo: 'Aula di scienze',
  righe: [
    d('kenta', "Vuoi che vi dica la verità? Sempre?"),
    tu("Sempre. Anche quando è brutta."),
    d('kenta', "Nessuno vuole mai quello."),
    tu("Io sì. Se non so quanto siamo indietro, non so nemmeno di quanto devo recuperare."),
    n("Kenta chiude il quaderno. È la prima volta che qualcuno gli chiede di fare la cosa che sa fare."),
    d('kenta', "Ho fatto i conti tre volte. Ci sto lo stesso."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'kenta' }, { spirito: 5 }], poi: { hub: true } });

sc({ id: 'r_kenta_b', luogo: 'Aula di scienze',
  righe: [
    d('kenta', "Io sono alto un metro e cinquantadue e ho fatto due flessioni in tutta la mia vita."),
    tu("Lo so."),
    d('kenta', "Sarei un peso."),
    tu("Saresti l'undicesimo. Che è l'unica cosa che ci serve per esistere."),
    n("È una risposta un po' cinica, e Kenta la riconosce subito, perché è il tipo di persona che riconosce le cose."),
    d('kenta', "Almeno sei onesto."),
    d('kenta', "Va bene. Però i conti li tengo io."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'kenta' }, { spirito: 2 }], poi: { hub: true } });

sc({ id: 'r_gemelli', luogo: 'La strada del latte — 5:10 del mattino',
  righe: [
    n("Ti sei alzato alle quattro e mezza. Fuori è buio e fa cinque gradi. È aprile."),
    n("Li senti prima di vederli: due bici che scendono la provinciale con le cassette di alluminio che battono sul portapacchi."),
    d('yuki', "Ehi! Sei quello del calcio!"),
    d('aoi', "…quello del calcio, sì."),
    tu("Devo parlarvi."),
    d('yuki', "Parla mentre pedali, che se ci fermiamo alla Kurihara il latte arriva caldo e la signora si arrabbia."),
    n("Fai quattro chilometri in bicicletta con due tredicenni che non respirano nemmeno. Tu sì. Molto."),
    d('yuki', "Allora?"),
    tu("Vi voglio in squadra. Tutti e due."),
    d('yuki', "Perché tutti e due?"),
    tu("Perché correte da otto anni nello stesso senso, alla stessa velocità, senza guardarvi. Nessun allenatore al mondo può insegnare quella roba lì."),
    d('aoi', "…"),
    d('yuki', "Aoi. Ha detto una cosa giusta."),
    d('aoi', "L'ha detta, sì."),
    d('yuki', "Alle cinque siamo già svegli. Il pomeriggio è tutto tempo regalato."),
    d('aoi', "…tutto tempo regalato. Sì."),
    n("Iscritti: {N} su undici. E sei sveglio dalle quattro e mezza.")
  ],
  eff: [{ recluta: 'yuki' }, { recluta: 'aoi' }, { spirito: 6 }], poi: { hub: true } });

sc({ id: 'r_minoru', luogo: 'Corridoio del primo piano — ricreazione',
  righe: [
    n("Minoru Sasaoka è un primo anno alto un metro e quarantuno che attraversa il corridoio come una cosa lanciata."),
    n("Copre i venticinque metri fra la 1-A e le scale in un tempo che, se qualcuno lo cronometrasse, farebbe litigare due allenatori di atletica."),
    tu("Minoru."),
    d('minoru', "Sì!"),
    tu("Sei velocissimo."),
    d('minoru', "Sì! Cioè — sì. Grazie. Sì."),
    tu("Vuoi giocare a calcio?"),
    n("La faccia di Minoru fa una cosa strana: si illumina e poi si spegne, tutto in mezzo secondo."),
    d('minoru', "Io corro forte. Solo… non addosso alla gente."),
    tu("In che senso?"),
    d('minoru', "Nel senso che se uno mi viene addosso io chiudo gli occhi. Sempre. Non è una cosa che decido."),
    n("Lo dice come si dice un difetto che ci si porta dietro da anni e di cui ci si è già arresi.")
  ],
  scelte: [
    { t: "«Allora arriva prima che ti vengano addosso.»", vai: 'r_minoru_a' },
    { t: "«Impareremo. Non da soli: insieme.»", vai: 'r_minoru_b' }
  ] });

sc({ id: 'r_minoru_a', luogo: 'Corridoio del primo piano',
  righe: [
    d('minoru', "…prima?"),
    tu("Tu sei il più veloce della valle. Se sei sul pallone prima di loro, il contatto non c'è. Non è coraggio, è aritmetica."),
    d('minoru', "Aritmetica."),
    tu("Aritmetica."),
    n("Minoru ci pensa. Poi fa una cosa che non ti aspetti: parte di corsa lungo il corridoio, tocca il muro in fondo e torna indietro."),
    d('minoru', "Quanto ci ho messo?"),
    tu("Non lo so, non ti stavo cronometrando."),
    d('minoru', "Da domani cronometra."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'minoru' }, { spirito: 5 }], poi: { hub: true } });

sc({ id: 'r_minoru_b', luogo: 'Corridoio del primo piano',
  righe: [
    d('minoru', "Insieme?"),
    tu("Non c'è nessuno in questa squadra che sappia fare il proprio ruolo. Nemmeno uno. Sei in ottima compagnia."),
    d('minoru', "…questa è la cosa più rassicurante che mi abbia detto qualcuno da settembre."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'minoru' }, { spirito: 4 }], poi: { hub: true } });

sc({ id: 'r_benkei', luogo: 'Mensa — dopo la mensa',
  righe: [
    n("Benkei Marui mangia il terzo panino della pausa. Li tiene avvolti nella carta oleata, nella tasca del grembiule, in ordine di grandezza."),
    d('benkei', "Se è per il club, la risposta è: dipende da quanto si corre."),
    tu("Tu andresti in porta."),
    d('benkei', "Quanto si corre in porta?"),
    tu("Zero. Stai fermo in un rettangolo e la gente ti tira addosso delle cose."),
    n("Benkei smette di masticare. È il primo sport che gli sia mai stato descritto in termini che lo interessano."),
    d('benkei', "…e devo prenderle?"),
    tu("Devi non farle passare. Prenderle è un di più."),
    d('benkei', "Perché io sono largo. Cioè, oggettivamente. Se mi metto nel mezzo, il mezzo è occupato."),
    tu("È esattamente la mia idea."),
    d('benkei', "Se para il panino paro anch'io. Ci provo, dai."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'benkei' }, { spirito: 3 }], poi: { hub: true } });

sc({ id: 'r_shinobu', luogo: "Aula di musica — sede del club di teatro (membri: 1)",
  righe: [
    n("Shinobu Katagiri sta provando un monologo davanti a due sedie vuote e a un ritratto dell'imperatore Meiji."),
    d('shinobu', "«…e allora io gli dissi: non è la neve che mi fa paura, è la primavera!» — troppo? Troppo. Lo rifaccio."),
    tu("Shinobu."),
    d('shinobu', "Il club di teatro di Amanome non accetta nuovi membri. Il club di teatro di Amanome sono io e mi trovo benissimo."),
    tu("Non vengo per entrare. Vengo per portarti via."),
    d('shinobu', "Oh. Continua, questo è un buon attacco."),
    tu("Nel calcio c'è una cosa che si chiama finta."),
    d('shinobu', "So cos'è una finta. Mio cugino ne fa una ogni volta che gli chiedono di lavare i piatti."),
    tu("Una finta è una bugia detta con il corpo. Tu menti con il corpo da sette anni davanti a due sedie vuote."),
    n("Shinobu si ferma. Mette giù il copione. Ha l'espressione di chi ha appena sentito descrivere il proprio lavoro meglio di come lo descriverebbe lei."),
    d('shinobu', "Quindi mi state chiedendo di mentire, in pubblico, per un'ora e mezza."),
    tu("Con centocinquanta persone che guardano."),
    d('shinobu', "Centocinquanta?"),
    tu("Se andiamo lontano."),
    d('shinobu', "Dove firmo."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'shinobu' }, { spirito: 5 }], poi: { hub: true } });

sc({ id: 'r_hina', luogo: "Campo di tiro con l'arco — dietro il tempio",
  righe: [
    n("Il campo di tiro è l'unica struttura sportiva decente del villaggio: legno vecchio, sabbia rastrellata, silenzio."),
    n("Hina Kurosawa tira. Non guarda il bersaglio quando incocca: guarda un punto in mezzo all'aria e poi il bersaglio ci arriva."),
    n("Sei frecce. Sei centri. Le raccoglie senza cambiare espressione."),
    d('hina', "So perché sei qui e la risposta è no."),
    tu("Non ho ancora—"),
    d('hina', "Sei arrivato a nove. Manca poco, la scuola parla, io ho le orecchie."),
    d('hina', "E la risposta è no, perché il vostro è uno sport in cui si urla, ci si spinge, e alla fine vince quello a cui è andata bene."),
    tu("Non è così."),
    d('hina', "È esattamente così. Io ho passato dodici anni a togliere il caso da quello che faccio. Voi lo mettete dentro apposta.")
  ],
  scelte: [
    { t: "«Il tuo bersaglio è fermo. Il mio si muove, ti guarda e cerca di fregarti.»", vai: 'r_hina_a' },
    { t: "«Hai ragione. È per questo che sei l'unica che può insegnarci a non sbagliare.»", vai: 'r_hina_b' },
    { t: "«Colpisci quella porta da qui e io me ne vado.»", vai: 'r_hina_c' }
  ] });

sc({ id: 'r_hina_a', luogo: 'Campo di tiro con l\'arco',
  righe: [
    n("Hina incocca un'altra freccia. Non la tira."),
    d('hina', "Ripetilo."),
    tu("Il tuo bersaglio è fermo, è a ventotto metri, ed è lì da quando sei nata. Non ti ha mai chiesto niente."),
    tu("Il mio si muove. Ti guarda. Cerca di capire dove tiri e si mette in mezzo apposta."),
    tu("Tu non hai mai colpito un bersaglio difficile in vita tua."),
    n("Il silenzio dura parecchio. Poi Hina abbassa l'arco e per la prima volta ti guarda in faccia davvero."),
    d('hina', "Questa è la cosa più maleducata che mi abbiano detto."),
    tu("Sì."),
    d('hina', "Colpire un bersaglio fermo è facile. Il vostro si muove e urla."),
    d('hina', "Va bene. Mi interessa."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'hina' }, { spirito: 8 }], poi: { hub: true } });

sc({ id: 'r_hina_b', luogo: 'Campo di tiro con l\'arco',
  righe: [
    d('hina', "Insegnarvi."),
    tu("Siamo dieci persone che tirano con la punta e chiudono gli occhi. Tu sei l'unica in questa valle che sappia cosa vuol dire mirare."),
    d('hina', "…"),
    d('hina', "Quindi non mi vuoi come giocatrice. Mi vuoi come istruttrice."),
    tu("Ti voglio come entrambe. Ma comincio da quella che ti conviene di più."),
    d('hina', "Sei più furbo di come sembri."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'hina' }, { spirito: 5 }], poi: { hub: true } });

sc({ id: 'r_hina_c', luogo: 'Campo di tiro con l\'arco',
  righe: [
    n("Hina gira la testa verso la porta arrugginita, laggiù, oltre il muro, a un centinaio di metri e mezzo nascosta."),
    d('hina', "Con l'arco o col piede?"),
    tu("Col piede."),
    n("Hina appoggia l'arco. Prende il pallone che hai portato. Se lo mette davanti."),
    n("Non prende la rincorsa. Fa due passi e colpisce."),
    n("La palla passa sopra il muro, gira in aria come una cosa che sa dove sta andando, e centra il palo interno della porta piegata con un rumore di campana."),
    n("Silenzio."),
    d('hina', "Ti sei impegnato poco a scegliere la scommessa."),
    tu("Mi sono impegnato tantissimo. Volevo perderla."),
    n("Per la prima volta, Hina Kurosawa sorride. Dura mezzo secondo e non si ripeterà per settimane."),
    d('hina', "Dammi il foglio."),
    n("Iscritti: {N} su undici.")
  ],
  eff: [{ recluta: 'hina' }, { spirito: 10 }, { flag: 'hina_palo' }], poi: { hub: true } });

sc({ id: 'r_rikuto', luogo: "Sentiero dell'alpeggio — quattrocento metri più in alto",
  righe: [
    n("Ci vuole un'ora e dieci a piedi. L'ultimo tratto è ghiaione e non c'è più sentiero, solo i segni delle capre."),
    n("Rikuto Hazama è seduto su una roccia con undici capre intorno e non sembra sorpreso di vederti."),
    tu("Ciao."),
    d('rikuto', "…"),
    tu("Sto facendo il club di calcio."),
    d('rikuto', "…"),
    n("Il silenzio quassù è diverso da quello di scuola. Non è imbarazzato. È solo silenzio."),
    tu("Vieni a scuola tre giorni su cinque."),
    d('rikuto', "Quando la strada è aperta."),
    n("Sei parole. È il record dell'anno."),
    tu("Gli allenamenti sono il pomeriggio. Nei giorni in cui scendi."),
    d('rikuto', "…e negli altri?"),
    tu("Negli altri corri in salita dietro alle capre, che è più di quello che fa chiunque altro in squadra."),
    n("Rikuto guarda giù. Da qui si vede tutta Amanome: la scuola, il tetto della palestra, e dietro, piccolo come un francobollo, il prato con le due porte."),
    d('rikuto', "Da qui si vede."),
    tu("Sì."),
    d('rikuto', "…ok."),
    n("Iscritti: {N} su undici. Ci siamo.")
  ],
  eff: [{ recluta: 'rikuto' }, { spirito: 7 }], poi: { hub: true } });

sc({ id: 'r_ayase', luogo: 'Sala professori',
  righe: [
    n("La professoressa Ayase ha ventisei anni, è arrivata ad Amanome tre settimane fa da Matsumoto, e ha la stessa faccia terrorizzata dei suoi studenti."),
    d('ayase', "Io insegno educazione fisica da diciassette giorni e finora ho fatto fare solo la corsa campestre perché è l'unica cosa in cui non posso sbagliare niente."),
    tu("Non deve allenarci. Deve solo firmare."),
    d('ayase', "Il regolamento dice «insegnante responsabile». Responsabile. Se vi rompete un ginocchio, la responsabile sono io."),
    tu("Nessuno si romperà un ginocchio."),
    d('ayase', "Questa frase l'ha detta qualcuno prima di ogni ginocchio rotto della storia."),
    n("Sfoglia il modulo. Ci sono già dieci firme, alcune in biro, una a matita, una di Gorō che ha bucato il foglio."),
    d('ayase', "Perché lo fai?"),
    n("È la prima volta che qualcuno te lo chiede davvero.")
  ],
  scelte: [
    { t: "«Perché in questa scuola non succede mai niente e voglio che succeda qualcosa.»", vai: 'r_ayase_a' },
    { t: "«Perché nel 1985 ci sono riusciti e poi hanno smesso. Voglio sapere perché.»", vai: 'r_ayase_b' },
    { t: "«Perché mi piace il calcio. Non ho una ragione più bella di questa.»", vai: 'r_ayase_c' }
  ] });

sc({ id: 'r_ayase_a', luogo: 'Sala professori',
  righe: [
    d('ayase', "Succedere qualcosa."),
    tu("Il pullman passa due volte al giorno. Il distributore funziona d'estate. Fine dell'elenco."),
    d('ayase', "Sai perché ho chiesto questa sede? Perché nessuno la chiede mai e io volevo un posto dove non succedesse niente."),
    d('ayase', "Sono qui da tre settimane e già mi manca che succeda qualcosa."),
    n("Prende la penna."),
    d('ayase', "Firmo. Ma alla prima caviglia gonfia chiudo tutto.")
  ],
  eff: [{ flag: 'ayase' }, { spirito: 5 }], poi: 'c1_fine' });

sc({ id: 'r_ayase_b', luogo: 'Sala professori',
  righe: [
    d('ayase', "1985."),
    tu("Erano undici. Hanno giocato un anno. Poi il quaderno dice: «non ci sono più abbastanza iscritti»."),
    d('ayase', "E tu vuoi sapere cosa è successo."),
    tu("Voglio sapere se è successo qualcosa o se semplicemente si sono stancati. Perché sono due cose molto diverse."),
    n("Ayase ti guarda per un momento più lungo del necessario."),
    d('ayase', "Il custode è qui da trentun anni. Ha cominciato nel 1985."),
    tu("…"),
    d('ayase', "Non ho detto niente. Firmo.")
  ],
  eff: [{ flag: 'ayase' }, { flag: 'indizio_amagai' }, { spirito: 6 }], poi: 'c1_fine' });

sc({ id: 'r_ayase_c', luogo: 'Sala professori',
  righe: [
    d('ayase', "Tutto qui?"),
    tu("Tutto qui. Mi piace il calcio. Da quando ho memoria. Non c'è una storia dietro, non c'è un nonno campione, non c'è niente."),
    tu("Mi piace e basta, e ad Amanome non si può fare, e questa cosa mi tiene sveglio."),
    n("Ayase mette giù il modulo e ride. È la prima volta che ride da quando è arrivata."),
    d('ayase', "Ho fatto quattro anni di università sentendomi dire che bisogna avere una motivazione strutturata."),
    d('ayase', "Sei il primo studente onesto che incontro. Firmo.")
  ],
  eff: [{ flag: 'ayase' }, { spirito: 7 }], poi: 'c1_fine' });

sc({ id: 'c1_fine', luogo: 'Ufficio del preside — ultimo giorno di aprile',
  righe: [
    n("Il preside Uchimura conta le firme due volte. Poi una terza."),
    d('preside', "Undici."),
    tu("Undici."),
    d('preside', "E un insegnante."),
    tu("E un insegnante."),
    n("Toglie gli occhiali. Li pulisce con la cravatta. Ma stavolta li rimette su."),
    d('preside', "In trentun anni di questa scuola nessuno mi ha mai portato undici firme per niente. Nemmeno per la gita."),
    n("Firma. Il timbro fa un rumore assurdamente definitivo."),
    d('preside', "Club di calcio della scuola media di Amanome. Costituito."),
    d('preside', "Il campo dietro la palestra è vostro. Vi avverto che è vostro nel senso che nessun altro lo vuole."),
    n("Fuori, nel corridoio, ci sono dieci persone che fanno finta di passare di lì per caso."),
    d('rei', "Allora?"),
    tv({
      fuoco:   "ESISTIAMO!",
      calmo:   "Esistiamo. Da adesso è scritto da qualche parte.",
      ironico: "Siamo ufficialmente un problema amministrativo.",
      chiuso:  "Esistiamo.",
      ostinato:"Esistiamo, e adesso ci tocca dimostrare che non era uno sbaglio."
    }),
    d('shinobu', "Esistiamo!"),
    d('kenta', "Esistiamo con una probabilità di successo dello zero virgola tre per cento."),
    d('goro', "…esistiamo."),
    n("Da in fondo al corridoio arriva Gen Tonda, capitano del club di baseball, con il guantone ancora infilato."),
    d('tonda', "Ho sentito che siete undici."),
    tu("Da venti minuti."),
    d('tonda', "Noi siamo nove e due che si annoiano. Sabato il campo grande è libero."),
    d('tonda', "Nessuno di noi ha mai giocato a calcio in vita sua. Nessuno di voi nemmeno. Mi sembra giusto."),
    n("Il club di calcio della scuola media di Amanome giocherà la sua prima partita cinque giorni dopo essere nato, contro undici giocatori di baseball.")
  ],
  eff: [{ flag: 'club_fondato' }],
  poi: { partita: { avv: 'baseball', titolo: 'Prima amichevole — Amanome vs Club di Baseball', minuti: 20,
    vinto: 'c1_dopo_v', perso: 'c1_dopo_p', pari: 'c1_dopo_p' } } });

sc({ id: 'c1_dopo_v', luogo: 'Il campo dietro la palestra — sera',
  righe: [
    n("Avete vinto una partita di calcio contro nove giocatori di baseball e due che si annoiavano."),
    n("È la vittoria meno importante nella storia dello sport giapponese. Nessuno la registrerà da nessuna parte."),
    d('rei', "Abbiamo vinto."),
    tu("Abbiamo vinto."),
    d('rei', "Contro il baseball."),
    tu("Contro il baseball."),
    d('kenta', "Vorrei far notare che Tonda ha provato tre volte a battere il pallone con le mani."),
    d('hina', "Vorrei far notare che noi abbiamo provato due volte a fare la stessa cosa."),
    n("Il sole va giù dietro il Kurogane. Sul prato l'erba è schiacciata dove avete corso: per la prima volta da vent'anni si vede la forma di un campo."),
    d('tonda', "Rifacciamola."),
    tu("Quando?"),
    d('tonda', "Non lo so. Quando avrete perso contro qualcuno di vero, così tornate con l'umore giusto."),
    n("Era una battuta. Sarebbe stato meglio se non lo fosse stata.")
  ],
  eff: [{ spirito: 8 }, { exp: 312 }], poi: { capitolo: 2 } });

sc({ id: 'c1_dopo_p', luogo: 'Il campo dietro la palestra — sera',
  righe: [
    n("Il club di baseball di Amanome, che non aveva mai toccato un pallone da calcio prima di oggi, vi ha battuti."),
    n("Nessuno dice niente per un po'. Poi Gorō si siede per terra e il rumore che fa è più forte di qualsiasi commento."),
    d('minoru', "Scusate. La palla ce l'avevo io e ho chiuso gli occhi."),
    d('rei', "L'ho chiusi anch'io."),
    d('shinobu', "Io li ho tenuti aperti e devo dire che non è servito a niente."),
    d('kenta', "Undici passaggi riusciti su cinquantatré. Il ventuno per cento."),
    d('hina', "Kenta."),
    d('kenta', "Scusate. Mi avete chiesto la verità anche quando è brutta."),
    tu("Gliel'ho chiesto io."),
    n("Silenzio. Il sole va giù dietro il Kurogane."),
    tu("Ok. Sappiamo dove siamo."),
    tu("Siamo qui: sotto a tutti. È l'unico punto da cui non si può scendere."),
    d('goro', "…si può risalire, però."),
    n("È la frase più lunga che Gorō Ishizuka abbia detto in due anni.")
  ],
  eff: [{ spirito: 10 }, { exp: 234 }], poi: { capitolo: 2 } });

/* ============================================================
   CAPITOLO 2 — IL CAMPO DIETRO LA PALESTRA
   ============================================================ */

sc({ id: 'c2_1', luogo: 'Il campo dietro la palestra — maggio',
  righe: [
    n("Il club esiste. Adesso c'è il problema di dove giocare."),
    n("L'erba arriva al ginocchio. Sotto l'erba ci sono sassi, una carriola rovesciata dal 1994 e un nido di vespe che scoprirete nel modo peggiore."),
    d('ayase', "Il preside dice che la scuola non ha fondi per il campo. E aveva una faccia come se «fondi» fosse una parola straniera."),
    d('nao', "Non ha fondi perché non ci sono. Ho visto il bilancio, mio nonno lo lascia sul tavolo."),
    n("Nao Kirishima è la nipote del custode. Gestisce il negozio di alimentari con la madre, ha quattordici anni, e ha già l'aria di una che sa tutto di tutti."),
    d('nao', "Vi serve una falce, un rastrello, del gesso e quaranta ore. Le prime tre ce le ho io."),
    tu("E le quaranta ore?"),
    d('nao', "Quelle ce le avete voi. Siete undici e non avete niente da fare.")
  ],
  eff: [{ obiettivo: 'Rimettere in piedi il campo, e trovare qualcuno che sappia allenarvi.' }],
  poi: { hub: true } });

sc({ id: 'c2_campo', luogo: 'Il campo dietro la palestra — tre sabati di fila',
  righe: [
    n("Primo sabato: falce. Gorō falcia da solo un terzo del campo mentre gli altri dieci fanno insieme il resto."),
    n("Secondo sabato: sassi. Duemila e passa, raccolti a mano, dentro le cassette del latte dei gemelli."),
    n("Terzo sabato: gesso."),
    d('kenta', "Il campo regolamentare è centocinque per sessantotto. Il nostro è novantuno per cinquantatré."),
    tu("Va bene lo stesso?"),
    d('kenta', "No. Ma è il nostro."),
    n("Tracciate le linee alle sei di sera con l'ultima luce. Quando finite, nessuno se ne va."),
    n("Rimanete tutti e undici sulla linea di metà campo a guardare una cosa che ieri era un prato."),
    d('shinobu', "Se fosse una scena la chiamerei retorica."),
    d('rei', "È retorica."),
    d('shinobu', "Sì. Però funziona."),
    n("Dal gabbiotto del custode, dall'altra parte del cortile, una tenda si muove e poi torna a posto.")
  ],
  eff: [{ flag: 'campo_pronto' }, { spirito: 10 }, { flag: 'tenda_custode' }], poi: { hub: true } });

sc({ id: 'c2_amagai', luogo: 'Gabbiotto del custode — dopo le otto',
  righe: [
    n("Sōichirō Amagai apre alle sei del mattino e chiude alle otto di sera. Ha sessantotto anni ed è qui da trentuno."),
    n("Nel gabbiotto c'è una stufa, un calendario del consorzio agrario e, appesa dietro la porta, una fotografia."),
    n("Undici ragazzi in bianco e verde su un campo di terra battuta. Data sul bordo: 1985."),
    tu("Il terzo da sinistra è lei."),
    d('amagai', "Chiudo alle otto."),
    tu("Sono le sette e cinquanta."),
    d('amagai', "…"),
    n("Amagai non guarda la fotografia. È il tipo di uomo che non guarda una cosa proprio perché ce l'ha dietro le spalle da trentun anni."),
    tu("Sul quaderno c'è scritto: «il club è sciolto, non ci sono più abbastanza iscritti»."),
    d('amagai', "È scritto giusto."),
    tu("È scritto giusto e non è vero."),
    n("Il vecchio si ferma con la chiave in mano.")
  ],
  scelte: [
    { t: "«Cos'è successo nel 1986?»", vai: 'c2_amagai_a' },
    { t: "«Non mi interessa cos'è successo. Mi interessa che lei ci alleni.»", vai: 'c2_amagai_b' }
  ] });

sc({ id: 'c2_amagai_a', luogo: 'Gabbiotto del custode',
  righe: [
    d('amagai', "È successo che siamo arrivati secondi alla prefettura."),
    tu("…secondi?"),
    d('amagai', "Secondi. Undici ragazzi di un paese di quattrocento anime, secondi in tutta Nagano."),
    d('amagai', "E poi a giugno hanno chiuso la segheria grande, e sette famiglie su undici sono scese in città a cercare lavoro."),
    d('amagai', "A settembre eravamo in quattro. Il regolamento dice undici. Il quaderno dice la verità: non c'erano più abbastanza iscritti."),
    n("Lo dice senza rabbia. Come uno che ha avuto trent'anni per trovare il tono giusto e alla fine ha scelto nessun tono."),
    tu("Nessuno vi ha battuti."),
    d('amagai', "No. Ci ha battuti il fondovalle."),
    n("Fuori è buio. La stufa fa un rumore di lamiera che si raffredda."),
    tu("Noi siamo undici. E nessuno di noi ha dove andare."),
    d('amagai', "Non è una cosa di cui vantarsi, ragazzo."),
    tu("Non me ne vanto. Le sto dicendo che quest'anno il problema non è quello.")
  ],
  poi: 'c2_amagai_c' });

sc({ id: 'c2_amagai_b', luogo: 'Gabbiotto del custode',
  righe: [
    d('amagai', "Io lavo i pavimenti."),
    tu("Da trentun anni. E ogni volta che abbiamo falciato quel campo lei ha spostato la tenda."),
    d('amagai', "…"),
    tu("Tre sabati. Tre volte."),
    d('amagai', "Quattro."),
    tu("Quattro."),
    n("Amagai posa la chiave sul tavolo. È un gesto piccolissimo e vuol dire che stasera non chiude alle otto.")
  ],
  poi: 'c2_amagai_c' });

sc({ id: 'c2_amagai_c', luogo: 'Gabbiotto del custode',
  righe: [
    d('amagai', "Voi non sapete giocare."),
    tu("No."),
    d('amagai', "Non uno. Ho guardato. La ragazza dell'arco tira bene e non sa dove mettersi. Il grosso non sa cadere. Il piccolo scappa dalla palla."),
    d('amagai', "E tu corri dappertutto perché pensi che il capitano debba essere ovunque, e così non sei da nessuna parte."),
    n("È la critica più precisa che tu abbia mai ricevuto e viene da un uomo che ti ha guardato da dietro una tenda."),
    tv({
      fuoco:   "Allora ce lo insegni lei!",
      calmo:   "Se ha visto tutte queste cose da dietro una tenda, ce le insegni da dentro il campo.",
      ironico: "Senta, ci ha appena distrutti in quindici secondi. Le conviene finire il lavoro.",
      chiuso:  "Ce lo insegni.",
      ostinato:"Non me ne vado finché non dice di sì. Ha le chiavi, ma io ho tempo."
    }),
    d('amagai', "…"),
    d('amagai', "Alle sei e mezza. Non le sette: le sei e mezza, prima che apra la scuola. Chi arriva tardi corre."),
    d('amagai', "E un'altra cosa."),
    tu("Sì?"),
    d('amagai', "Quella fotografia resta dietro la porta. Non la porto in campo. Voi non siete loro."),
    d('amagai', "Voi dovete essere peggio di loro per un bel po', prima di poter provare a essere meglio."),
    n("Il club di calcio della scuola media di Amanome ha un allenatore.")
  ],
  eff: [{ flag: 'allenatore' }, { spirito: 12 }, { sblocca: 'allenamento' }],
  poi: { hub: true } });

sc({ id: 'c2_sfida', luogo: 'Sala professori — fine maggio',
  righe: [
    d('ayase', "Ho una notizia bella e una brutta."),
    d('ayase', "La bella: ho iscritto il club al campionato provinciale giovanile. La brutta: la prima partita è fra sei giorni contro la Kuzuryū."),
    d('kenta', "La Kuzuryū ha quattrocento studenti, due campi in erba e un pullman."),
    d('ayase', "Sì."),
    d('kenta', "Nell'ultimo torneo hanno vinto tutte le partite del girone con almeno cinque gol di scarto."),
    d('ayase', "…anche questo sì."),
    d('amagai', "Bene."),
    n("Tutti si girano."),
    d('amagai', "Serve una squadra vera per capire quanto siete lontani. Non c'è nessun allenamento che ve lo insegni."),
    d('amagai', "Andiamo a farci battere come si deve, e poi cominciamo a lavorare.")
  ],
  eff: [{ obiettivo: 'Sopravvivere alla Kuzuryū.' }],
  poi: { hub: true } });

sc({ id: 'c2_partita', luogo: 'Campo comunale di Kuzuryū',
  righe: [
    n("Il campo della Kuzuryū ha l'erba vera, le panchine con la tettoia, e circa duecento persone in piedi lungo la recinzione."),
    n("È il pubblico più numeroso davanti a cui giocherete per un pezzo. Nessuno di loro è venuto per voi."),
    d('minoru', "Sono tantissimi."),
    d('hina', "Sono duecento. Al torneo regionale di tiro con l'arco sono tremila e non fanno rumore. Questi fanno rumore."),
    d('goro', "…"),
    d('rei', "Gorō sta bene?"),
    d('goro', "…no."),
    d('amagai', "Ascoltate. Oggi non vi chiedo di vincere."),
    d('amagai', "Vi chiedo una cosa sola: alla fine dei novanta minuti, voglio che siate ancora undici in piedi in mezzo al campo."),
    d('amagai', "Non nove che hanno mollato e due che corrono. Undici. In piedi."),
    d('amagai', "Se ci riuscite, oggi avete vinto qualcosa che il tabellone non scrive.")
  ],
  poi: { partita: { avv: 'kuzuryu', titolo: 'Provinciale — Amanome vs Kuzuryū', minuti: 45,
    vinto: 'c2_v', perso: 'c2_p', pari: 'c2_x' } } });

sc({ id: 'c2_v', luogo: 'Campo comunale di Kuzuryū — dopo',
  righe: [
    n("Duecento persone che sono venute a vedere la Kuzuryū vincere se ne vanno senza parlare."),
    n("Sul tabellone c'è scritta una cosa che non doveva succedere."),
    d('kenta', "Statisticamente questo non è successo."),
    d('shinobu', "È successo, Kenta."),
    d('kenta', "Lo so. Sto solo dicendo che statisticamente no."),
    d('amagai', "Vi avevo chiesto di essere in piedi in undici."),
    tu("E siamo in piedi in undici."),
    d('amagai', "Sì. E avete anche vinto, il che è un problema."),
    tu("Un problema?"),
    d('amagai', "Adesso vi guarderanno. Prima eravate un paese con un prato. Da domani siete una squadra che ha battuto la Kuzuryū."),
    d('amagai', "Nessuno vi regalerà più niente. Bene: era ora.")
  ],
  eff: [{ spirito: 12 }, { exp: 676 }], poi: { capitolo: 3 } });

sc({ id: 'c2_p', luogo: 'Campo comunale di Kuzuryū — dopo',
  righe: [
    n("Il tabellone dice quello che tutti sapevano che avrebbe detto."),
    n("Ma alla fine dei novanta minuti, in mezzo al campo, ci sono undici persone in piedi."),
    n("Minoru piange e continua a camminare. Gorō non riesce a raddrizzare la schiena e resta lì lo stesso. Benkei ha una guancia viola."),
    d('amagai', "Contateli."),
    tu("Cosa?"),
    d('amagai', "Contateli. Ad alta voce."),
    n("Rei comincia. «Uno». Poi Kenta: «due». Poi i gemelli insieme, che vale due. Shinobu, Hina, Gorō, Minoru, Benkei, Rikuto."),
    tu("Undici."),
    d('amagai', "Undici. Nel 1985 alla nostra prima partita eravamo in sette a fine gara. Gli altri quattro erano seduti."),
    d('amagai', "Voi siete in piedi in undici e avete perso. Loro hanno vinto e domani non si ricorderanno il vostro nome."),
    d('amagai', "Fra un anno se lo ricorderanno.")
  ],
  eff: [{ spirito: 14 }, { exp: 572 }], poi: { capitolo: 3 } });

sc({ id: 'c2_x', luogo: 'Campo comunale di Kuzuryū — dopo',
  righe: [
    n("Un pareggio contro la Kuzuryū vale, in questa valle, più di quanto valga scritto."),
    d('kenta', "Un punto. Abbiamo un punto in classifica."),
    d('rei', "Un punto vero? Nella classifica vera?"),
    d('kenta', "Nella classifica vera."),
    n("Rei si mette a ridere e non riesce a smettere, e poi si mettono a ridere tutti, e la Kuzuryū li guarda dall'altra parte del campo senza capire."),
    d('amagai', "Siete in piedi in undici."),
    tu("Siamo in piedi in undici."),
    d('amagai', "Allora era una buona giornata.")
  ],
  eff: [{ spirito: 13 }, { exp: 624 }], poi: { capitolo: 3 } });

/* ============================================================
   CAPITOLO 3 — IL PORTIERE CHE AVEVA SMESSO
   ============================================================ */

sc({ id: 'c3_1', luogo: 'Fermata del pullman — giugno',
  righe: [
    n("Il pullman delle 17:10 porta ad Amanome tre persone all'anno. Oggi ne porta una."),
    n("Un ragazzo della tua età con una borsa sportiva vuota e la faccia di uno che non ha nessuna voglia di essere qui."),
    d('nao', "È Tsukasa Naruse. Si è trasferito da Nagano città. Sta dagli zii, quelli della casa in fondo alla via del tempio."),
    tu("Come fai a saperlo già?"),
    d('nao', "Gestisco un negozio di alimentari. Io so tutto di tutti prima di tutti."),
    d('kenta', "Naruse. Naruse. …Aspetta."),
    n("Kenta apre uno dei suoi quaderni e va indietro di due anni. Trova la pagina. La rilegge. Poi la richiude molto in fretta."),
    d('kenta', "Non è niente."),
    tu("Kenta."),
    d('kenta', "Finale della prefettura di due anni fa. Portiere titolare della Nagano Higashi. Otto gol subiti nel secondo tempo."),
    d('kenta', "Il giornale l'ha chiamato «il portiere zero». Nel senso di zero parate."),
    n("Duemila persone in tribuna. Aveva dodici anni.")
  ],
  eff: [{ obiettivo: 'Convincere Zero a tornare in porta.' }],
  poi: { hub: true } });

sc({ id: 'r_zero_1', luogo: 'Via del tempio — davanti alla casa degli zii',
  righe: [
    d('zero', "So chi sei. Quello del club."),
    tu("Ci serve un portiere."),
    d('zero', "Avete quello grosso."),
    tu("Benkei è largo e coraggioso e non sa dove mettere le mani."),
    d('zero', "Allora insegnateglielo."),
    tu("Non lo sappiamo nemmeno noi."),
    n("Zero apre il cancello e non lo chiude. Non è un invito, è solo che non gliene importa abbastanza da chiuderlo."),
    d('zero', "Io in porta non ci torno. Chiaro? Non ci torno."),
    tu("Perché otto gol?"),
    n("Si ferma."),
    d('zero', "Chi te l'ha detto?"),
    tu("Un mio compagno di squadra tiene i risultati di sei anni di partite scritti a mano."),
    d('zero', "Allora sa anche che l'ottavo l'ho preso da fermo. Non mi sono nemmeno mosso."),
    d('zero', "A un certo punto smetti di muoverti e guardi la palla entrare. È una cosa che succede. Non lo sapevo neanche io.")
  ],
  scelte: [
    { t: "«E i primi sette? Quelli li hai presi provandoci.»", vai: 'r_zero_a' },
    { t: "«Vieni solo a guardarci. Non ti chiedo altro.»", vai: 'r_zero_b' },
    { t: "«Ok. Allora te ne stai qui e ci pensi per altri due anni.»", vai: 'r_zero_c' }
  ] });

sc({ id: 'r_zero_a', luogo: 'Via del tempio',
  righe: [
    d('zero', "…"),
    tu("Otto gol in un tempo vuol dire che la tua difesa non esisteva. Tu eri l'ultimo. Il quaderno lo dice."),
    tu("Diciotto tiri in porta nel secondo tempo. Ne hai parati dieci."),
    d('zero', "Nessuno conta quelli."),
    tu("Il mio compagno di squadra li conta. Li ha contati due anni fa, da solo, in una valle dove non arriva il segnale, e non sapeva nemmeno che un giorno ti avrebbe incontrato."),
    n("Zero guarda a terra per un tempo lungo."),
    d('zero', "Dieci."),
    tu("Dieci.")
  ],
  poi: 'r_zero_fine' });

sc({ id: 'r_zero_b', luogo: 'Via del tempio',
  righe: [
    d('zero', "Guardarvi."),
    tu("Domani alle sei e mezza. Ti siedi sull'erba e guardi. Se dopo dieci minuti te ne vai, non ti cerco più."),
    d('zero', "Perché dovrei?"),
    tu("Perché sei sceso da quel pullman con una borsa sportiva vuota."),
    n("È un colpo basso e lo capite tutti e due nel momento in cui esce."),
    d('zero', "…sei stronzo."),
    tu("Alle sei e mezza.")
  ],
  poi: 'r_zero_fine' });

sc({ id: 'r_zero_c', luogo: 'Via del tempio',
  righe: [
    n("Ti giri e te ne vai davvero. Fai una cinquantina di metri."),
    d('zero', "Ehi."),
    n("Non ti giri."),
    d('zero', "EHI."),
    n("Ti giri."),
    d('zero', "Che ore, l'allenamento."),
    tu("Sei e mezza. Chi arriva tardi corre."),
    d('zero', "…che razza di orario è."),
    n("Non ha detto sì. Ma non ha detto no, e con Zero è la stessa cosa.")
  ],
  poi: 'r_zero_fine' });

sc({ id: 'r_zero_fine', luogo: 'Il campo dietro la palestra — 6:30',
  righe: [
    n("Arriva alle sei e quaranta. Corre due giri senza che nessuno glielo dica, perché è arrivato tardi e la regola è la regola."),
    n("Poi si mette in porta senza chiedere il permesso, e Benkei si sposta di lato con un'espressione di sollievo puro."),
    n("Il primo tiro glielo tira Hina. Lo prende."),
    n("Il secondo glielo tira Rikuto, che calcia come un sasso in discesa. Lo prende."),
    n("Il terzo glielo tiri tu. Lo prende, e resta a terra con la palla stretta al petto più a lungo del necessario."),
    d('amagai', "Alzati."),
    d('zero', "…"),
    d('amagai', "Alzati. Ne mancano quaranta."),
    n("Zero si alza."),
    d('zero', "Quaranta?"),
    d('amagai', "Ogni mattina. Per due anni. Poi ne parliamo."),
    n("Dodici tesserati.")
  ],
  eff: [{ recluta: 'zero' }, { spirito: 10 }],
  poi: { hub: true } });

sc({ id: 'c3_partita', luogo: 'Il campo dietro la palestra — prima partita in casa',
  righe: [
    n("La Shirakaba scende dal pullmino guardandosi intorno con l'espressione di chi si è perso."),
    d('cronista', "…e siamo in diretta dal campo della scuola media di Amanome, dove non si giocava una partita ufficiale dal 1986. Qui Radio Valle."),
    d('nao', "Ho contato quarantatré spettatori."),
    d('kenta', "Quarantatré?"),
    d('nao', "La scuola è trentotto. Più sei genitori. Meno uno che è andato a casa a prendere una sedia."),
    d('amagai', "Prima partita in casa."),
    d('amagai', "In casa vuol dire che l'erba la conoscete voi. Che il vento delle cinque scende dal Kurogane e gira verso la porta nord. Che il terreno in area vostra è più duro perché lì l'abbiamo battuto noi."),
    d('amagai', "Loro non sanno niente di tutto questo. È l'unico vantaggio che avete: usatelo tutto.")
  ],
  poi: { partita: { avv: 'shirakaba', titolo: 'Provinciale — Amanome vs Shirakaba', minuti: 45,
    vinto: 'c3_v', perso: 'c3_p', pari: 'c3_p' } } });

sc({ id: 'c3_v', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("Quarantatré persone fanno un rumore sorprendente quando gridano tutte insieme."),
    d('cronista', "…e Radio Valle può dirlo: la scuola media di Amanome ha vinto in casa. Ai tre ascoltatori collegati: avete sentito bene."),
    d('zero', "Porta inviolata."),
    d('kenta', "Porta inviolata."),
    d('zero', "Scrivilo."),
    d('kenta', "L'ho già scritto."),
    d('zero', "Scrivilo bene."),
    n("Amagai è in piedi in fondo al campo, vicino alla porta piegata che nessuno ha ancora raddrizzato. Non applaude. Guarda."),
    n("Quando pensa che nessuno lo veda, si toglie il berretto.")
  ],
  eff: [{ spirito: 12 }, { exp: 832 }], poi: { capitolo: 5 } });

sc({ id: 'c3_p', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("Perdere in casa, davanti a quarantatré persone che ti conoscono per nome, è peggio che perdere davanti a duecento sconosciuti."),
    d('zero', "Il terzo era mio."),
    tu("Non era tuo."),
    d('zero', "Era mio. Ero fermo."),
    n("È la prima volta che lo dice ad alta voce, e lo dice qui, in un campo di terra battuta, davanti a dieci persone che gli vogliono bene da tre settimane."),
    d('amagai', "Naruse."),
    d('zero', "Sì."),
    d('amagai', "Domani alle sei e mezza."),
    d('zero', "…solo questo?"),
    d('amagai', "Solo questo. È tutto quello che ho da darti e funziona."),
    n("Zero resta a raccogliere i palloni da solo. Nessuno gli dice di smettere.")
  ],
  eff: [{ spirito: 10 }, { exp: 728 }], poi: { capitolo: 5 } });

/* ============================================================
   CAPITOLO 4 — LA RECINZIONE
   ============================================================ */

sc({ id: 'c4_1', luogo: 'Il campo dietro la palestra — luglio, sei del mattino',
  righe: [
    n("Quando arrivi, alle sei e venti, sul campo ci sono quattro paletti di legno nuovi e una fettuccia bianca e rossa."),
    n("La fettuccia taglia il campo in diagonale, dalla bandierina all'area piccola."),
    n("Appeso a un paletto, un foglio plastificato con il timbro del villaggio:"),
    n("« AREA DESTINATA A PARCHEGGIO — CENTRO POLIFUNZIONALE PER ANZIANI DI AMANOME — INIZIO LAVORI: 1 SETTEMBRE »", 'urlo'),
    d('rei', "…è il nostro campo."),
    d('nao', "È il terreno della scuola. Che è del comune. Che è di mio zio, praticamente."),
    d('shinobu', "Tuo zio?"),
    d('nao', "Il capo villaggio. Kōhei Amano. Che è anche il padre di Daichi.")
  ],
  poi: 'c4_2' });

sc({ id: 'c4_2', luogo: 'Municipio di Amanome — una stanza sola',
  righe: [
    d('sindaco', "Il centro serve."),
    tu("Anche il campo serve."),
    d('sindaco', "A undici ragazzi. Il centro a centoquaranta persone sopra i settant'anni, che in questo villaggio sono un terzo degli abitanti e non hanno un posto al chiuso dove passare gennaio."),
    n("È il problema di parlare con qualcuno che ha ragione."),
    d('sindaco', "Il progetto è finanziato dalla prefettura. Se non partiamo entro l'anno, i soldi vanno a Kuzuryū e non tornano più."),
    d('sindaco', "L'edificio va dove c'è il vecchio deposito. Il parcheggio deve stare da qualche parte. L'unico pezzo piano è il vostro prato."),
    tu("Non è un prato."),
    d('sindaco', "Lo è stato per vent'anni.")
  ],
  scelte: [
    { t: "«Ci dia un motivo per tenerlo. Ce lo giochiamo.»", vai: 'c4_3' },
    { t: "«Sposti il parcheggio dall'altra parte. Il pezzo piano c'è: è dove sta la sua rimessa.»", vai: 'c4_3b' }
  ] });

sc({ id: 'c4_3b', luogo: 'Municipio di Amanome',
  righe: [
    n("Il capo villaggio non risponde subito. Guarda fuori dalla finestra, verso la sua rimessa, che effettivamente sta su un pezzo piano."),
    d('sindaco', "Sei ben informato."),
    tu("Ho una compagna di squadra che gestisce un negozio di alimentari."),
    d('sindaco', "Mia nipote."),
    tu("Sua nipote."),
    n("Per un attimo, sotto la faccia da amministratore, si vede un uomo che è cresciuto qui e conosce ogni metro quadro di questa valle."),
    d('sindaco', "Non funziona così, ragazzo. Ma hai fegato.")
  ],
  poi: 'c4_3' });

sc({ id: 'c4_3', luogo: 'Municipio di Amanome',
  righe: [
    n("La porta si apre. Entra Daichi Amano, che ha sentito tutto dal corridoio e non ha nemmeno provato a fingere il contrario."),
    d('daichi', "Papà. Diglielo."),
    d('sindaco', "Daichi."),
    d('daichi', "Diglielo, o glielo dico io."),
    n("Silenzio."),
    d('daichi', "Nel 1986 il comune ha promesso a undici ragazzi che avrebbe rifatto il campo. C'è la delibera. È nel raccoglitore verde."),
    d('daichi', "Poi ha chiuso la segheria e la delibera è rimasta lì. Nessuno l'ha revocata. Nessuno l'ha eseguita. È stata solo dimenticata per trent'anni."),
    d('daichi', "Mio nonno era il capo villaggio nel 1986."),
    n("Guardi Daichi. È l'unico ad Amanome che sappia davvero giocare — l'hai visto in cortile, da solo, mille volte."),
    n("Ed è anche l'unico che avesse motivo di odiare quel campo."),
    d('daichi', "Quel terreno è già stato usato per fare promesse una volta. Non ricapita."),
    d('sindaco', "…"),
    d('sindaco', "La prefettura vuole una risposta entro fine agosto."),
    d('sindaco', "Il 20 agosto c'è il torneo estivo della vallata. Se la scuola media di Amanome lo vince, io trovo un altro posto per il parcheggio e mi prendo io la responsabilità con la prefettura."),
    d('sindaco', "Se lo perde, i lavori cominciano il primo settembre e non se ne parla più."),
    tu("Chi c'è al torneo estivo?"),
    d('sindaco', "Kuzuryū. Tomegawa. E l'Hakuba, che è campione di Nagano da sei anni."),
    d('sindaco', "Buona estate, ragazzi.")
  ],
  eff: [{ flag: 'ultimatum' }, { obiettivo: 'Vincere il torneo estivo della vallata. In palio: il campo.' }],
  poi: 'c4_4' });

sc({ id: 'c4_4', luogo: 'Fuori dal municipio',
  righe: [
    tu("Daichi."),
    d('daichi', "No."),
    tu("Non ho ancora—"),
    d('daichi', "Hai quella faccia lì."),
    d('rei', "Ce l'ha sempre. È la sua faccia normale, purtroppo."),
    n("Daichi Amano si ferma in mezzo alla strada."),
    d('daichi', "Io gioco da quando ho sei anni. Da solo, contro un muro, perché qui non c'era nessuno con cui giocare."),
    d('daichi', "Quando avete fondato il club non sono venuto. Sai perché?"),
    tu("Perché avevi paura che finisse come nell'86."),
    d('daichi', "Perché sapevo come sarebbe finita. Due mesi, poi qualcuno si stufa, poi siete in sette, poi il preside chiude tutto e mio padre ha ragione da trent'anni."),
    d('daichi', "E invece siete ancora tredici."),
    tu("Tredici."),
    d('daichi', "Tredici. Con il portiere che ha smesso e la nipote del custode."),
    n("Guarda verso la scuola. Da qui si vede il tetto della palestra e, dietro, un pezzo di prato con la fettuccia bianca e rossa che si muove nel vento."),
    d('daichi', "Ho una condizione."),
    tu("Dimmi."),
    d('daichi', "Se perdiamo il torneo, il primo settembre vengo lì con voi a guardare i camion. In piedi. Tutti e quattordici."),
    d('daichi', "Non voglio che qualcuno se ne stia a casa a far finta di niente. Quello ha rovinato mio nonno."),
    tu("Quattordici."),
    d('daichi', "Quattordici.")
  ],
  eff: [{ recluta: 'daichi' }, { spirito: 15 }],
  poi: { hub: true } });



sc({ id: 'c4_semi', luogo: 'Torneo estivo della vallata — semifinale',
  righe: [
    n("Il torneo estivo si gioca sul campo comunale di fondovalle, con il sole delle due del pomeriggio e trentaquattro gradi."),
    d('kenta', "Semifinale contro la Tomegawa. Corrono per novanta minuti e non parlano mai."),
    d('amagai', "Allora fateli parlare."),
    d('shinobu', "In che senso?"),
    d('amagai', "Una squadra che non parla è una squadra che ha imparato a memoria una cosa sola. Fate succedere qualcosa che non hanno imparato."),
    d('amagai', "E quando cominciano a chiamarsi fra loro, vuol dire che stanno improvvisando. Da lì in poi sono come voi."),
    d('daichi', "Noi improvvisiamo da aprile."),
    d('amagai', "Voi improvvisate da aprile e siete arrivati in semifinale. Pensaci un attimo.")
  ],
  poi: { partita: { avv: 'tomegawa', titolo: 'Semifinale estiva — Amanome vs Tomegawa', minuti: 45,
    vinto: 'c4_fin', perso: 'c4_ko', pari: 'c4_ko' } } });

sc({ id: 'c4_ko', luogo: 'Campo comunale di fondovalle — dopo',
  righe: [
    n("Fuori in semifinale. Il primo settembre i camion arrivano."),
    n("Nessuno parla nello spogliatoio, che poi è una tettoia con quattro panche."),
    d('daichi', "Il primo settembre alle otto."),
    tu("Daichi—"),
    d('daichi', "Ho detto tutti e quattordici. In piedi. L'ho detto io e ci vengo io."),
    n("Amagai entra sotto la tettoia. Ha in mano una busta."),
    d('amagai', "Il tabellone del torneo estivo non è l'unico che esiste."),
    d('amagai', "Le qualificazioni prefetturali del Football Frontier cominciano a ottobre. Una squadra per distretto, più due ripescate su segnalazione federale."),
    d('kenta', "Le due ripescate le decide una commissione."),
    d('amagai', "Sì."),
    d('kenta', "E le sceglie fra squadre che hanno fatto qualcosa di notevole."),
    d('amagai', "Sì."),
    d('kenta', "…noi abbiamo perso una semifinale di un torneo estivo di vallata."),
    d('amagai', "Voi ad aprile eravate un prato.")
  ],
  eff: [{ flag: 'campo_perso' }, { exp: 780 }], poi: { capitolo: 7 } });

sc({ id: 'c4_fin', luogo: 'Torneo estivo della vallata — finale',
  righe: [
    n("Dall'altra parte del campo c'è l'Hakuba."),
    n("Sei anni di titoli di Nagano. Divise bianche pulite. Si allenano sulla neve d'inverno perché è più difficile, e in estate scendono qui e vincono senza sudare."),
    d('hina', "Il numero 10 tira di collo esterno e non guarda mai la porta prima di calciare."),
    d('kenta', "Come lo sai?"),
    d('hina', "Sono due ore che lo guardo scaldarsi."),
    d('amagai', "Ascoltate bene, perché lo dico una volta sola."),
    d('amagai', "Nel 1985 siamo arrivati secondi in questa prefettura. Non ve l'ho mai detto perché non serviva a niente."),
    d('amagai', "Ve lo dico adesso perché serve."),
    d('amagai', "Quelli che ci hanno battuti in finale erano più bravi di noi. Ma non erano più bravi di quanto l'Hakuba sia più brava di voi."),
    d('amagai', "E noi li abbiamo tenuti fino all'ultimo minuto."),
    d('amagai', "Sapete perché? Perché loro giocavano per vincere un torneo, e noi giocavamo per non tornare a casa."),
    d('amagai', "Oggi il campo dietro la palestra è sotto una fettuccia bianca e rossa."),
    d('amagai', "Andate a riprendervelo.")
  ],
  poi: { partita: { avv: 'hakuba', titolo: 'FINALE — Amanome vs Hakuba · in palio: il campo', minuti: 45,
    vinto: 'c4_v', perso: 'c4_ko' } } });

sc({ id: 'c4_v', luogo: 'Campo comunale di fondovalle — fischio finale',
  righe: [
    n("L'arbitro fischia tre volte e il rumore che arriva dalla recinzione non assomiglia a niente che abbiate mai sentito."),
    n("Ad Amanome ci sono quattrocentododici abitanti. Alla finale ne sono scesi in centonovanta."),
    n("Hanno chiuso il negozio, la segheria, l'ambulatorio e l'ufficio postale. La corriera delle 13:40 ha fatto due viaggi."),
    d('cronista', "…Radio Valle non ha più parole. Dico solo: la scuola media di Amanome, trentotto studenti, è campione della vallata."),
    n("Il capo villaggio Kōhei Amano scende dalla tribuna, attraversa il campo e si ferma davanti a suo figlio."),
    d('sindaco', "Daichi."),
    d('daichi', "…"),
    d('sindaco', "Il parcheggio lo faccio dove c'è la mia rimessa."),
    n("Silenzio."),
    d('sindaco', "Era il pezzo piano più ovvio, e lo sapevo da marzo. Non l'ho fatto perché avrei dovuto ammettere una cosa davanti a tutto il villaggio."),
    d('sindaco', "Che a mio padre, nel 1986, l'ha battuto il fondovalle. Non i ragazzi."),
    n("Poi si gira verso il vecchio custode, in piedi in fondo al campo con il berretto in mano."),
    d('sindaco', "Amagai."),
    d('amagai', "Kōhei."),
    d('sindaco', "Trent'anni."),
    d('amagai', "Trentuno.")
  ],
  eff: [{ flag: 'campo_salvo' }, { spirito: 20 }, { exp: 1092 }], poi: { capitolo: 7 } });

/* ============================================================
   CAPITOLO 5 — IL POSTO IN PIÙ
   ============================================================ */

sc({ id: 'c5_1', luogo: 'Aula 2-A — settembre',
  righe: [
    n("La busta arriva il primo lunedì di settembre. È intestata alla Federazione Calcistica Giovanile del Giappone."),
    n("Nao la apre con il tagliacarte del negozio perché nessun altro ha il coraggio di toccarla."),
    d('nao', "«…si comunica che codesta società è stata designata quale squadra ripescata per le qualificazioni prefetturali del Football Frontier…»"),
    d('rei', "Cosa vuol dire ripescata?"),
    d('kenta', "Vuol dire che due squadre entrano senza aver vinto il proprio distretto, per segnalazione della commissione."),
    d('kenta', "Vuol dire che qualcuno, da qualche parte, ha guardato quello che abbiamo fatto quest'estate e ha alzato la mano."),
    d('shinobu', "Chi?"),
    d('amagai', "…"),
    d('nao', "Nonno."),
    d('amagai', "Non ho fatto niente. Ho mandato una lettera. È diverso."),
    d('amagai', "Nel 1985 sono stato in una commissione di quelle. Uno di quelli che c'era allora oggi è vicepresidente federale. Gli ho scritto quattro righe."),
    tu("Cosa c'era scritto?"),
    d('amagai', "«Ci sono undici ragazzi in un paese di quattrocento anime che hanno rifatto il campo con le mani. Vieni a vederli e poi decidi.»"),
    d('amagai', "È venuto in agosto. Era in fondo alla recinzione, in finale. Nessuno l'ha riconosciuto."),
    n("Il Football Frontier è il torneo nazionale delle scuole medie giapponesi. Ci arrivano milleduecento squadre. Ne resta una."),
    d('kenta', "Le probabilità sono—"),
    d('hina', "Kenta."),
    d('kenta', "…scusate. Forza di abitudine.")
  ],
  eff: [{ obiettivo: 'Superare il girone di qualificazione del Football Frontier.' }],
  poi: { hub: true } });

sc({ id: 'c5_occult', luogo: 'Qualificazioni Football Frontier — girone D',
  righe: [
    n("La scuola media Occult entra in campo con le torce accese in pieno giorno e le bende sulle braccia."),
    d('minoru', "Perché hanno le torce?"),
    d('kenta', "Per spaventarci."),
    d('minoru', "Funziona."),
    d('shinobu', "No, no, no. Aspetta."),
    n("Shinobu Katagiri si stacca dal gruppo, va a metà campo, e si mette a osservare la scenografia dell'Occult come si osserva il lavoro di un collega."),
    d('shinobu', "Le torce sono un errore. Sono a tre metri dalla fila, quindi la luce viene da dietro e non gli si vedono le facce."),
    d('shinobu', "E il tizio in fondo ha già finito il rotolo di bende e sta improvvisando."),
    d('shinobu', "Non sono spaventosi. Sono dilettanti spaventosi."),
    d('goro', "…mi sento meglio."),
    d('amagai', "Il teatro lo lasciamo a loro. Noi giochiamo.")
  ],
  poi: { partita: { avv: 'occult', titolo: 'Football Frontier — Amanome vs Occult', minuti: 45,
    vinto: 'c5_wild', perso: 'c5_ripesca', pari: 'c5_ripesca' } } });

sc({ id: 'c5_ripesca', luogo: 'Spogliatoi — dopo la sconfitta',
  righe: [
    n("Nel girone si passa a punti. Una sconfitta non chiude niente, ma toglie tutto il margine."),
    d('kenta', "Ci serve vincere le prossime due. Entrambe. Con almeno due gol di scarto nella seconda."),
    d('daichi', "Allora vinciamo le prossime due."),
    d('kenta', "Ho fatto il calcolo—"),
    d('daichi', "Kenta. Allora vinciamo le prossime due."),
    n("Kenta chiude il quaderno."),
    d('kenta', "…sì. Va bene. Allora vinciamo le prossime due.")
  ],
  eff: [{ exp: 676 }], poi: 'c5_wild' });

sc({ id: 'c5_wild', luogo: 'Qualificazioni Football Frontier — girone D',
  righe: [
    n("La scuola media Wild si allena inseguendo i cinghiali. Non è un modo di dire: lo scrivono sul programma del torneo, con orgoglio."),
    d('rikuto', "…"),
    tu("Rikuto?"),
    d('rikuto', "I cinghiali non si inseguono."),
    n("Tutti si girano. Rikuto Hazama ha detto cinque parole di sua iniziativa. Non era mai successo."),
    d('rikuto', "Si aspettano. Vanno sempre allo stesso passaggio."),
    d('rikuto', "Chi li insegue è uno che non li conosce."),
    d('amagai', "…Hazama."),
    d('rikuto', "Sì."),
    d('amagai', "Oggi la difesa la imposti tu."),
    d('rikuto', "…ok.")
  ],
  poi: { partita: { avv: 'wild', titolo: 'Football Frontier — Amanome vs Wild', minuti: 45,
    vinto: 'c5_shuriken', perso: 'c5_shuriken', pari: 'c5_shuriken' } } });

sc({ id: 'c5_shuriken', luogo: 'Qualificazioni Football Frontier — ultima di girone',
  righe: [
    n("Ultima giornata. La Shuriken è prima in classifica e vi basta la vittoria per passare."),
    n("Si allenano a sparire. È letteralmente scritto così sul loro sito: «tecniche di occultamento applicate al gioco del calcio»."),
    d('zero', "Come si para un tiro di uno che non vedi?"),
    d('amagai', "Non si para il tiro. Si para il tiratore."),
    d('zero', "Non ho capito."),
    d('amagai', "Uno che sparisce deve riapparire nel posto dove serve. Quel posto è sempre lo stesso: davanti a te."),
    d('amagai', "Guarda dove non sono. Il buco te lo dice."),
    d('zero', "…"),
    d('zero', "Questa è la cosa più assurda che mi abbia detto un allenatore, e ha senso.")
  ],
  poi: { partita: { avv: 'shuriken', titolo: 'Football Frontier — Amanome vs Shuriken', minuti: 45,
    vinto: 'c5_v', perso: 'c5_p', pari: 'c5_p' } } });

sc({ id: 'c5_p', luogo: 'Fine del girone',
  righe: [
    n("Il girone si chiude. Amanome non passa."),
    n("Sul pullman del ritorno non parla nessuno per quaranta minuti, e poi Rei dice una cosa."),
    d('rei', "Ad aprile eravamo in due."),
    n("Nessuno risponde, ma qualcuno annuisce, e Gorō, che è seduto in fondo perché nei sedili normali non ci sta, fa un rumore di approvazione che riempie tutto il pullman."),
    d('amagai', "L'anno prossimo si ricomincia da ottobre."),
    d('daichi', "L'anno prossimo io sono in terza. È l'ultimo."),
    d('amagai', "Allora conviene cominciare domani mattina alle sei e mezza."),
    n("Il Football Frontier di quest'anno finirà senza di voi. Ma ci sarà un'amichevole, a novembre, che nessuno di voi si aspetta.")
  ],
  eff: [{ exp: 884 }], poi: { capitolo: 9 } });

sc({ id: 'c5_v', luogo: 'Fine del girone — Amanome qualificata',
  righe: [
    d('cronista', "…Radio Valle interrompe le previsioni meteo. La scuola media di Amanome ha vinto il girone D."),
    d('cronista', "Amanome è alla fase finale delle qualificazioni prefetturali del Football Frontier."),
    n("Nao ha in mano il tabellone della fase finale, e non lo passa a nessuno, perché ha visto il nome che c'è scritto nel quarto in alto."),
    d('nao', "Ok. Devo dirvi una cosa e devo dirla in fretta."),
    d('kenta', "Chi c'è?"),
    d('nao', "Nel nostro quarto? La Royal Academy."),
    n("Silenzio assoluto."),
    d('kenta', "La Royal Academy non ha mai perso una partita ufficiale in sei anni."),
    d('kenta', "Ha vinto il Football Frontier cinque volte su sei. L'anno che non l'ha vinto non era iscritta."),
    d('hina', "E l'altro quarto?"),
    d('nao', "L'Istituto Zeus."),
    d('shinobu', "Che sarebbe?"),
    d('kenta', "Una scuola privata di Tokyo che si è iscritta quest'anno per la prima volta. Il capitano si chiama Byron Love e non ha ancora subito un gol."),
    d('rei', "…e noi?"),
    d('nao', "Noi siamo la scuola media di Amanome, trentotto studenti, ripescata, campo rifatto a mano, quattordici tesserati di cui uno che scrive le bollette."),
    d('nao', "Siamo l'unica squadra qui dentro che nessuno ha invitato.")
  ],
  eff: [{ flag: 'qualificati' }, { spirito: 15 }, { exp: 1040 }], poi: { capitolo: 9 } });

/* ============================================================
   CAPITOLO 6 — RAIMON
   ============================================================ */

sc({ id: 'c6_1', luogo: 'Il campo dietro la palestra — novembre',
  righe: [
    n("Novembre ad Amanome vuol dire che alle quattro e mezza è già buio e che l'erba gela di notte."),
    n("Un pullman si ferma davanti alla scuola. Non è la corriera: è un pullman con una scritta sulla fiancata."),
    n("« SCUOLA MEDIA RAIMON — CLUB DI CALCIO »"),
    d('nao', "Non li ho invitati io."),
    d('kenta', "Raimon. Raimon di Inazuma."),
    d('kenta', "Domenica hanno giocato la finale del Football Frontier contro l'Istituto Zeus. Quella squadra che non aveva mai subito un gol in tutto il torneo."),
    d('nao', "E?"),
    d('kenta', "E la Zeus i gol li ha subiti."),
    d('kenta', "Hanno vinto loro. Hanno vinto il Football Frontier. Una scuola che a marzo aveva sette giocatori e stava per essere sciolta."),
    d('rei', "…sette."),
    d('kenta', "Sette."),
    n("Dal pullman scende per primo un ragazzo con la fascia arancione in testa e un pallone sotto il braccio, che guarda il campo dietro la palestra come se fosse un posto importante."),
    d('mark', "È QUESTO! È questo il campo!"),
    d('nelly', "Mark, calmati."),
    d('mark', "Ciao! Mark Evans, capitano della Raimon. Scusate se siamo arrivati così, abbiamo scritto ma credo che la lettera—"),
    d('nao', "La lettera è arrivata stamattina. L'ho aperta venti minuti fa."),
    d('mark', "Ah! Bene! Allora siamo puntuali!"),
    d('rei', "…chi è questo?")
  ],
  poi: 'c6_2' });

sc({ id: 'c6_2', luogo: 'Il campo dietro la palestra',
  righe: [
    d('jude', "Il campo è novantuno per cinquantatré. Non è regolamentare."),
    d('kenta', "…lo hai capito guardandolo?"),
    d('jude', "Ho contato i passi dalla bandierina."),
    d('kenta', "Io ci ho messo un pomeriggio e una cordella metrica."),
    d('jude', "Anche io la prima volta."),
    n("Jude Sharp è quello che a settembre giocava nella Royal Academy. Adesso è qui, con la maglia arancione della Raimon, e non ha ancora smesso di guardare le linee del vostro campo."),
    d('jude', "Chi le ha tracciate?"),
    tu("Noi. A mano. Con il gesso della scuola."),
    d('jude', "Si vede. Sono precise."),
    n("Poi si accorge che lo stai guardando: la maglia arancione addosso a uno che a ottobre giocava per un'altra squadra.")
  ],
  scelte: [
    { t: "«Perché sei in arancione? A ottobre eri alla Royal Academy.»", vai: 'c6_jude' },
    { t: "Non chiedere niente. Portarli in campo.", vai: 'c6_2b' }
  ] });

sc({ id: 'c6_2b', luogo: 'Il campo dietro la palestra',
  righe: [
    n("Dall'altra parte, appoggiato al palo della porta che nessuno ha ancora raddrizzato, c'è un ragazzo che non ha ancora detto una parola."),
    d('axel', "Perché qui?"),
    tu("In che senso?"),
    d('axel', "Sei in un paese di quattrocento persone. La squadra più vicina è a un'ora di pullman. Nessuno ti vedrà mai giocare."),
    d('axel', "Perché continui?"),
    n("È una domanda vera. La fa uno che ha smesso di giocare per un anno e poi ha ricominciato.")
  ],
  scelte: [
    { t: "«Perché qui non c'era niente e adesso c'è questo.»", vai: 'c6_3' },
    { t: "«Perché nel 1985 undici come noi ci sono arrivati vicino, e poi il paese si è svuotato.»", vai: 'c6_3' },
    { t: "«Perché non so fare altro. Mi piace e basta.»", vai: 'c6_3' }
  ] });

sc({ id: 'c6_3', luogo: 'Il campo dietro la palestra',
  righe: [
    n("Axel Blaze ascolta fino in fondo. Poi annuisce una volta sola."),
    d('axel', "Va bene."),
    d('mark', "Vi spiego perché siamo qui!"),
    d('mark', "Al Football Frontier c'era un signore in commissione che ha raccontato una cosa al nostro allenatore. Di una scuola in montagna con trentotto studenti che ha rifatto il campo a mano e ha battuto la campione di Nagano per non farsi portare via il prato."),
    d('mark', "E io ho detto: dobbiamo andarci."),
    d('nelly', "Ha detto esattamente: «PRENDIAMO IL PULLMAN ADESSO». Erano le undici di sera."),
    d('mark', "Ho aspettato fino a stamattina!"),
    d('nelly', "Hai aspettato perché ti ho tolto le chiavi."),
    n("Mark Evans si mette il pallone sotto il piede e guarda il campo dietro la palestra: erba gelata, una porta piegata, e le linee tracciate a mano."),
    d('mark', "Facciamo una partita?"),
    d('amagai', "Fra un'ora è buio."),
    d('mark', "Un'ora basta!"),
    d('amagai', "…"),
    d('amagai', "Nao, le luci del cortile arrivano fino alla linea di metà campo?"),
    d('nao', "Se stacco il frigorifero del negozio e attacco la prolunga arancione, sì."),
    d('amagai', "Staccalo."),
    n("Nel giro di venti minuti, mezza Amanome è dietro la recinzione con le torce dei telefoni accese."),
    n("Non c'è niente in palio. Non è nel tabellone di nessuno. Non lo scriverà nessun giornale."),
    d('mark', "Pronti?"),
    tu("Pronti.")
  ],
  poi: { partita: { avv: 'raimon', titolo: 'Amichevole — Amanome vs Raimon · sotto le luci del cortile', minuti: 45,
    vinto: 'c6_v', perso: 'c6_p', pari: 'c6_x' } } });

sc({ id: 'c6_v', luogo: 'Il campo dietro la palestra — dopo, al buio',
  righe: [
    n("La scuola media di Amanome ha battuto i campioni del Football Frontier su un campo di novantuno metri per cinquantatré, alla luce di un cortile e di quaranta telefoni."),
    n("Non lo scriverà nessuno. Non conta per nessuna classifica."),
    n("Ma centonovanta persone di un paese di quattrocentododici l'hanno visto."),
    d('mark', "È stata la partita più bella dell'anno."),
    d('kenta', "Avete vinto il Football Frontier."),
    d('mark', "Sì! E questa è stata più bella!"),
    d('nelly', "Non dirlo in giro, per favore."),
    d('jude', "Il vostro numero 4 non ha sbagliato una diagonale in tutto il secondo tempo."),
    d('daichi', "…il numero 4 sono io."),
    d('jude', "Lo so."),
    n("Mark Evans si mette il pallone sotto il braccio e guarda le porte arrugginite."),
    d('mark', "L'anno prossimo vi iscrivete al Football Frontier, vero?"),
    tu("Ci siamo già iscritti."),
    d('mark', "Allora ci vediamo lì."),
    d('mark', "E raddrizzate quella porta! Fa male al cuore!"),
    d('amagai', "…quella porta la raddrizziamo a giugno."),
    tu("Perché a giugno?"),
    d('amagai', "Perché nel 1986 l'ho piegata io, a giugno, il giorno che ci hanno detto che eravamo rimasti in quattro."),
    d('amagai', "Adesso siete quattordici. Si può raddrizzare.")
  ],
  eff: [{ spirito: 25 }, { exp: 1560 }, { flag: 'finale' }], poi: 'al_1' });

sc({ id: 'c6_p', luogo: 'Il campo dietro la palestra — dopo, al buio',
  righe: [
    n("Avete perso. Contro i campioni del Football Frontier, su un campo che avete falciato voi, davanti a tutto il paese."),
    n("E nessuno, dietro la recinzione, se ne va."),
    d('mark', "Il vostro portiere."),
    d('zero', "…io?"),
    d('mark', "Nel primo tempo, il tiro di Axel. Quello da dentro l'area."),
    d('zero', "L'ho preso in faccia."),
    d('mark', "L'hai preso. È diverso da averlo preso in faccia."),
    d('mark', "Io ho preso il mio primo tiro di Axel in faccia e sono rimasto a terra ventidue secondi. Li ho contati dopo, nel video."),
    d('mark', "Tu ti sei rialzato subito."),
    d('zero', "…"),
    d('mark', "Come ti chiamano?"),
    d('zero', "Zero."),
    d('mark', "Perché?"),
    d('zero', "Perché ho preso otto gol in una finale davanti a duemila persone."),
    d('mark', "Io ne ho presi undici, in una partita, davanti a tutta la scuola."),
    d('mark', "Nel mio primo anno. E il mio allenatore era mio nonno, che era morto da tre mesi, quindi c'era solo un quaderno con scritto cosa fare."),
    d('mark', "Sono ancora qui."),
    n("Zero non risponde. Ma quando la Raimon risale sul pullman, è l'unico che resta fuori a guardarli partire."),
    d('amagai', "Naruse."),
    d('zero', "Domani alle sei e mezza."),
    d('amagai', "…brava gente.")
  ],
  eff: [{ spirito: 20 }, { exp: 1352 }, { flag: 'finale' }], poi: 'al_1' });

sc({ id: 'c6_x', luogo: 'Il campo dietro la palestra — dopo, al buio',
  righe: [
    n("Un pareggio. Contro i campioni del Football Frontier, su un campo di terra e gesso, sotto le luci di un cortile."),
    d('mark', "Rigori?"),
    d('nelly', "Mark, è buio e domani c'è scuola."),
    d('mark', "Rigori!"),
    d('amagai', "Non ci sono rigori nelle amichevoli."),
    d('mark', "…"),
    d('mark', "Allora l'anno prossimo. Al Football Frontier. Sul serio."),
    tu("Sul serio."),
    n("Si stringono la mano a metà campo, e centonovanta persone dietro una recinzione fanno il rumore che fanno centonovanta persone.")
  ],
  eff: [{ spirito: 22 }, { exp: 1456 }, { flag: 'finale' }], poi: 'al_1' });

sc({ id: 'c6_epilogo', luogo: 'Amanome — dicembre',
  righe: [
    n("L'otto dicembre inaugurano il centro polifunzionale per anziani di Amanome."),
    n("Il parcheggio sta dove c'era la rimessa del capo villaggio. Alla cerimonia parlano in tre e nessuno dei tre nomina il calcio."),
    n("Ma la signora Kurihara arriva con la sua sedia pieghevole, e quando le chiedono perché se l'è portata risponde che ormai ci ha fatto l'abitudine."),
    { chi: 'narr', t: "Nella sala del centro, in fondo, c'è un cartello scritto a mano che nessuno ha autorizzato: « RACCOLTA PER IL CAMPO ». Sotto, una scatola da scarpe. Dentro, la prima settimana, quarantunomila yen.", se: function (S) { return !!S.flag.campo_distrutto; } },
    { chi: 'narr', t: "— Il quindici dicembre chiude il campionato provinciale. Amanome finisce quinta su otto: le ultime due partite le ha giocate su un campo in prestito a Ōkubo, con il pullman della segheria.", se: function (S) { return !!S.flag.campo_distrutto; } },
    { chi: 'narr', t: "— Il quindici dicembre chiude il campionato provinciale. Amanome finisce quinta su otto.", se: function (S) { return !S.flag.campo_distrutto; } },
    d('kenta', "Quinti."),
    d('rei', "È tanto o poco?"),
    d('kenta', "È quinti."),
    d('kenta', "Ad aprile non esistevamo, quindi tecnicamente eravamo ottavi su sette."),
    { chi: 'narr', t: "— Il ventidue dicembre nevica. Sul fosso che era il campo si posano quaranta centimetri e per un po' sembra quasi normale.", se: function (S) { return !!S.flag.campo_distrutto; } },
    { chi: 'narr', t: "— Il ventidue dicembre nevica. Il campo dietro la palestra sparisce sotto quaranta centimetri e non riappare fino a marzo.", se: function (S) { return !S.flag.campo_distrutto; } },
    { chi: 'narr', t: "Vi allenate nella sala del centro anziani, fra i tavoli spostati, con le porte disegnate col nastro adesivo sul muro. La signora Kurihara guarda dalla sedia e ogni tanto dice a qualcuno di correre di più.", se: function (S) { return !!S.flag.campo_distrutto; } },
    { chi: 'narr', t: "Vi allenate in palestra, in dodici metri per ventiquattro, con le porte da pallamano e Amagai che urla che la palla non va alzata.", se: function (S) { return !S.flag.campo_distrutto; } },
    n("Rikuto smette di scendere a valle il quattro di gennaio e ricompare il diciannove di marzo, senza spiegazioni, come le cose che tornano."),
    { chi: 'narr', t: "— Di te, in questi mesi, ad Amanome arrivano notizie di seconda mano: una cartolina da Toyama, una da Osaka, una da un posto sul mare di cui nessuno sa pronunciare il nome.", se: function (S) { return !!S.flag.partito; } },
    { chi: 'narr', t: "Kenta le attacca tutte sulla parete della sala, in ordine di data, e sotto ci scrive i risultati che riesce a raccogliere dalla radio.", se: function (S) { return !!S.flag.partito; } },
    { chi: 'kenta', t: "Non è statistica. È un'altra cosa e non so come si chiama.", se: function (S) { return !!S.flag.partito; } },
    { chi: 'narr', t: "Il club di calcio della scuola media di Amanome gioca tutto l'inverno senza il suo capitano. Perde sei partite su nove e non salta un allenamento.", se: function (S) { return !!S.flag.partito; } },
    { chi: 'narr', t: "Rei Tachibana porta la fascia. Gliel'hanno data gli altri, senza discutere, il giorno dopo che sei partito.", se: function (S) { return !!S.flag.partito; } },
    { chi: 'rei', t: "Io non sono un capitano. Però so stare in piedi, e a quanto pare è la stessa cosa.", se: function (S) { return !!S.flag.partito; } },
    n("— A gennaio, alle iscrizioni del secondo quadrimestre, si presentano tre studenti nuovi."),
    d('nao', "Tre."),
    d('nao', "Uno è un primo anno che ha visto la partita con la Raimon da dietro la recinzione, in braccio a suo padre."),
    d('nao', "Ha sei anni e non può iscriversi. Ha compilato il modulo lo stesso e me lo ha consegnato."),
    d('nao', "L'ho messo nel raccoglitore. In fondo, dove tengo le cose che non buttiamo."),
    n("— A gennaio Hina Kurosawa risponde alla Nagano Higashi."),
    n("Cosa le ha scritto lo sa solo lei e nessuno gliel'ha chiesto, che in questa squadra è il modo in cui ci si vuole bene."),
    n("Il tre di febbraio, all'allenamento delle sei e mezza, è lì con gli altri e non dice niente, e nessuno dice niente, e Rei piange e dice che è per il freddo."),
    n("— A febbraio Sōichirō Amagai compie sessantanove anni."),
    n("Nao trova la data nel registro del personale, che non doveva guardare, e il club si presenta al gabbiotto alle sei e mezza del mattino con una torta comprata al negozio Kirishima e pagata regolarmente, perché Nao è Nao."),
    d('amagai', "Non è il mio compleanno."),
    d('nao', "C'è scritto nel registro."),
    d('amagai', "Nel registro c'è la data che ho dato quando mi sono assunto nel 1985, e nel 1985 avevo fretta."),
    d('shinobu', "Quindi quando è?"),
    d('amagai', "In agosto."),
    d('rei', "…e la torta?"),
    d('amagai', "La torta la mangiamo, che è già pagata."),
    n("— Il primo marzo Kenta Ubukata chiude il quaderno dell'anno e ne apre uno nuovo."),
    n("Sull'ultima pagina di quello vecchio c'è una riga sola, scritta a matita, che nessuno gli ha chiesto di scrivere:"),
    n("« Il club non è stato sciolto. »"),
    { chi: 'narr', t: "— Il campo si rifà in aprile, come la prima volta, con le braccia. Ci sono anche il padre di Gorō col trattore, il monaco di Ōmachi e undici persone di Ōkubo arrivate in pullmino senza che nessuno le avesse chiamate.", se: function (S) { return !!S.flag.campo_distrutto; } },
    { chi: 'narr', t: "— L'undici di giugno torni ad Amanome per tre giorni. Non lo sa nessuno tranne Nao, che sa tutto di tutti prima di tutti e ha organizzato di conseguenza.", se: function (S) { return !!S.flag.partito; } },
    n("— L'undici di giugno, quando il terreno si è asciugato, quattordici persone raddrizzano la porta nord."),
    n("Ci vogliono tre ore, due tiranti e il trattore della segheria. Amagai guarda e non tocca niente, perché gliel'avete detto voi di non toccare niente."),
    n("Quando è dritta, resta lì in mezzo al campo per un po'."),
    d('amagai', "L'ho piegata io, questa."),
    tu("Lo so."),
    d('amagai', "Il ventidue di giugno del 1986. Ci si è appeso Tanabe, e io gli ho detto che tanto non serviva più a niente."),
    d('amagai', "E lui è rimasto appeso finché non si è piegata."),
    d('amagai', "E poi ce ne siamo andati a casa e non ce lo siamo più detto."),
    n("Si toglie il berretto e si asciuga la faccia, e fa finta che sia per il caldo di giugno."),
    d('amagai', "Ce l'ho ancora il suo numero, sai. Su un foglietto, da trent'anni."),
    tv({
      fuoco:   "E allora chiamalo! Adesso! Digli che la porta è dritta!",
      calmo:   "Se lo chiami e non risponde, sei nella stessa situazione di adesso. Se risponde, no.",
      ironico: "Guarda, peggio di come è andata finora non può andare. Chiamalo e digli che gli hanno raddrizzato la roba.",
      chiuso:  "Chiamalo.",
      ostinato:"Chiamalo. E se non risponde, richiamalo domani. Ho tutta l'estate."
    }),
    d('amagai', "…"),
    d('amagai', "Ci penso."),
    n("Ci pensa per undici giorni. Il ventidue di giugno, che è la data, telefona."),
    n("Tanabe risponde al secondo squillo. Vive a Kawasaki, ha cinquantasei anni, e non parlavano da trent'anni."),
    n("La telefonata dura un'ora e quaranta e nessuno di voi ha mai saputo cosa si sono detti."),
    n("Si sa solo che ad agosto è venuto a vedere un'amichevole, in piedi in fondo alla recinzione, e che se n'è andato prima della fine."),
    n("E che l'anno dopo è tornato, e non se n'è andato prima della fine."),
    { chi: 'narr', t: "Prima di ripartire restituisci ad Amagai il quaderno del 1985. Lo prende, lo apre, e vede che nell'ultima pagina bianca qualcuno ha cominciato a scrivere altri nomi.", se: function (S) { return !!S.flag.partito; } },
    { chi: 'amagai', t: "Questi chi sono?", se: function (S) { return !!S.flag.partito; } },
    { chi: 'tu', t: "Quelli che ho incontrato in giro. Uno per scuola, a volte due.", se: function (S) { return !!S.flag.partito; } },
    { chi: 'amagai', t: "…e ci hai messo anche i loro.", se: function (S) { return !!S.flag.partito; } },
    { chi: 'tu', t: "Anche i loro.", se: function (S) { return !!S.flag.partito; } },
    n("— Il club di calcio della scuola media di Amanome conta diciassette tesserati."),
    n("Nel gabbiotto del custode ci sono due fotografie sul muro. Una del 1985 e una di adesso."),
    n("Sotto la seconda, scritti a penna sul bordo bianco, ci sono undici nomi. E poi tre. E poi lo spazio per gli altri."),
    d('rei', "Allora, capitano."),
    tu("Dimmi."),
    d('rei', "Cosa facciamo adesso?"),
    tv({
      fuoco:   "Domani alle sei e mezza!",
      calmo:   "Domani alle sei e mezza. E poi il giorno dopo.",
      ironico: "Domani alle sei e mezza. Lo so, mi odi. Va bene così.",
      chiuso:  "Domani alle sei e mezza.",
      ostinato:"Domani alle sei e mezza. Come tutti i giorni da aprile dell'anno scorso."
    }),
    d('rei', "…lo sapevo che me la facevi pagare per due anni."),
    d('rei', "Ne mancano ancora tre, comunque. Ho contato."),
    n("— FINE DEL PRIMO ANNO —", 'urlo'),
    n("Il club continua: puoi allenare la squadra e giocare amichevoli contro tutte le squadre che hai incontrato, comprese quelle che ti hanno battuto."),
    n("E chi hai battuto, adesso, risponde al telefono."),
    { chi: 'narr', t: "E dal piazzale, quando serve, parte un pullman con una parabola sul tetto: dall'hub trovi il Caravan della Raimon, dove giochi da singolo giocatore in mezzo a undici che non sono i tuoi, contro le squadre di Alius Academy.", cls: 'urlo' }
  ],
  eff: [{ flag: 'gioco_finito' }, { sblocca: 'amichevoli' }, { spirito: 10 },
        { momento: 'Avete raddrizzato la porta nord l\'undici di giugno.' }],
  poiSe: [{ se: function (S) { return !!S.flag.partito && !S.flag.viaggio_finito; }, poi: { capitolo: 11 } }],
  poi: { hub: true } });


/* ============================================================
   IL FOOTBALL FRONTIER VISTO DA AMANOME
   Quello che succede a Inazuma mentre voi giocate in valle.
   ============================================================ */

sc({ id: 'n_c2', luogo: 'Aula di scienze — il quaderno di Kenta',
  righe: [
    d('kenta', "Devo farvi vedere una cosa. È di due settimane fa e non l\'ho detto a nessuno perché sembrava una presa in giro."),
    n("Kenta gira il quaderno. Una pagina scritta a matita, con sopra l\'ora della trasmissione: Radio Valle, notiziario sportivo, 21:40."),
    d('kenta', "«Scuola media Raimon, prefettura di Inazuma. Club di calcio in via di scioglimento per numero insufficiente di iscritti.»"),
    d('rei', "…"),
    d('kenta', "«Sette giocatori.»"),
    d('rei', "Sette."),
    d('kenta', "Sette. E la Royal Academy li ha sfidati lo stesso."),
    d('shinobu', "La Royal Academy quella vera? Quella dei cinque titoli nazionali?"),
    d('kenta', "Quella. E la Raimon è scesa in campo."),
    tu("Com\'è finita?"),
    d('kenta', "Il notiziario è saltato. Radio Valle va via quando piove e quella sera pioveva."),
    d('kenta', "So solo che il club non è stato sciolto. Il mese dopo li ho ritrovati iscritti al torneo di distretto."),
    n("Nessuno dice niente per un po\'."),
    d('hina', "Fammi capire. Da qualche parte, a trecento chilometri da qui, c\'è una scuola con sette persone che stava per chiudere il club."),
    d('kenta', "Sì."),
    d('hina', "E invece di chiudere hanno chiamato la squadra più forte del Giappone."),
    d('kenta', "Sì."),
    d('goro', "…mi piacciono."),
    d('kenta', "Il portiere è il nipote di Dave Evans."),
    tu("Dave Evans il portiere?"),
    d('kenta', "Dave Evans il portiere. Quello del 1963."),
    n("Kenta apre una pagina nuova, in fondo al quaderno, e ci scrive un titolo che non c\'era: «RAIMON»."),
    d('kenta', "Da adesso li seguo. Se il segnale regge.")
  ],
  eff: [{ flag: 'segue_raimon' }], poi: { hub: true } });

sc({ id: 'n_c3', luogo: 'Dietro la palestra — dopo l\'allenamento',
  righe: [
    d('kenta', "Aggiornamento sulla Raimon. Due cose."),
    d('kenta', "La prima: hanno un attaccante nuovo. Si chiama Axel Blaze."),
    d('kenta', "Aveva smesso. Da più di un anno. Il giornale della prefettura scrive «per motivi personali», che è il modo in cui si scrive che è successo qualcosa e non lo dicono."),
    n("Zero, che stava raccogliendo i palloni in fondo al campo, si è fermato."),
    d('kenta', "Ha ricominciato a giocare a marzo. Adesso è il loro attaccante titolare."),
    d('zero', "…perché ha ricominciato?"),
    d('kenta', "Questo il giornale non lo scrive."),
    d('zero', "…"),
    d('kenta', "La seconda cosa è più strana. È un trafiletto di colore, di quelli che mettono per riempire."),
    d('kenta', "«Il portiere della Raimon si allena tutte le mattine da solo, all\'argine del fiume, tirando contro il muro di cemento. Alle sei.»"),
    d('shinobu', "Alle sei?"),
    d('kenta', "Alle sei."),
    d('amagai', "Alle sei e mezza."),
    n("Il vecchio custode non alza nemmeno la testa dal secchio."),
    d('amagai', "Noi alle sei e mezza. Non fatevi venire idee.")
  ],
  poi: { hub: true } });

sc({ id: 'n_c4', luogo: 'Alimentari Kirishima — la radio sopra il banco frigo',
  righe: [
    n("Il Football Frontier è il campionato nazionale delle scuole medie. Ci si iscrivono milleduecento squadre. Ne resta una."),
    n("Nel negozio di Nao c\'è l\'unica radio del paese che prenda decentemente, sopra il banco frigo, tenuta ferma con due elastici."),
    d('cronista', "…gironi nazionali del Football Frontier. Nel girone della Raimon: Occult, Wild, Shuriken."),
    d('kenta', "Aspetta."),
    d('kenta', "Aspetta aspetta aspetta."),
    d('nao', "Che c\'è?"),
    d('kenta', "Sono le stesse tre squadre del nostro girone di qualificazione."),
    d('shinobu', "Cioè quelle che dobbiamo giocarci noi a ottobre?"),
    d('kenta', "Quelle."),
    n("Silenzio. Poi Rei dice la cosa che stanno pensando tutti e che nessuno ha il coraggio di dire."),
    d('rei', "Quindi se passiamo il girone… facciamo la stessa strada che stanno facendo loro."),
    d('kenta', "Statisticamente—"),
    d('hina', "Kenta."),
    d('kenta', "…sì. Facciamo la stessa strada."),
    d('cronista', "…e nell\'altro raggruppamento la sorpresa dell\'anno: l\'Istituto Zeus, scuola privata di Tokyo, iscritta per la prima volta. Quattro partite, quattordici gol fatti."),
    d('cronista', "E zero subiti. Zero. Il loro capitano, Byron Love, non ha ancora dovuto raccogliere un pallone dalla propria rete."),
    d('zero', "…zero subiti."),
    d('daichi', "Zero, non ti ci mettere anche tu."),
    d('zero', "Non mi ci sto mettendo. Sto solo dicendo che è una bella cosa da leggere.")
  ],
  poi: { hub: true } });

sc({ id: 'n_c5', luogo: 'Alimentari Kirishima — sabato sera',
  righe: [
    n("La semifinale nazionale del Football Frontier si gioca a Tokyo il primo sabato di ottobre."),
    n("Ad Amanome sono le otto di sera, il negozio è chiuso da un\'ora e dentro ci sono nove persone in piedi davanti a una radio tenuta ferma con due elastici."),
    d('cronista', "…Royal Academy contro Istituto Zeus. Il quarantatreesimo minuto del secondo tempo."),
    d('kenta', "Non è possibile."),
    d('nao', "Kenta."),
    d('kenta', "Non è statisticamente possibile. La Royal Academy ha vinto cinque Football Frontier su sei. Non ha mai perso una semifinale. Mai."),
    d('cronista', "…e finisce qui. L\'Istituto Zeus è in finale. La Royal Academy è fuori."),
    n("Nessuno parla. Nao spegne la radio, poi ci ripensa e la riaccende, come se potessero dire che si erano sbagliati."),
    d('shinobu', "Mi dispiace per loro."),
    d('hina', "Erano i più forti del Giappone."),
    d('shinobu', "Appunto. Mi dispiace per loro."),
    n("Passano tre giorni. Poi arriva il giornale della prefettura, con due giorni di ritardo come sempre, e Kenta lo apre in mezzo al cortile e si mette a ridere in un modo che non gli avevamo mai sentito."),
    d('kenta', "Jude Sharp."),
    tu("Chi?"),
    d('kenta', "Il numero 10 della Royal Academy. Il loro stratega. Quello che vede tre passaggi avanti a tutti."),
    d('kenta', "Si è trasferito."),
    d('rei', "Dove?"),
    d('kenta', "Alla Raimon."),
    n("Kenta gira il giornale. C\'è una fotografia piccola, sgranata, in bianco e nero: un ragazzo con gli occhiali a visiera che entra in un campo di allenamento indossando una maglia arancione."),
    d('daichi', "…passa alla squadra che ha battuto la sua vecchia squadra?"),
    d('kenta', "No. La Raimon la Royal Academy non l\'ha battuta. È stata la Zeus."),
    d('daichi', "E allora perché?"),
    d('kenta', "Il giornale non lo dice."),
    d('hina', "Perché nessuno gliel\'ha chiesto."),
    n("Hina Kurosawa guarda la fotografia per un tempo più lungo del necessario."),
    d('hina', "Quello lì non è uno che scappa da una sconfitta. Guardagli la faccia."),
    d('hina', "Quello lì ha capito una cosa. E ha cambiato squadra perché aveva capito una cosa."),
    tu("Cosa?"),
    d('hina', "Boh. Non lo so io."),
    d('hina', "Ma se un giorno lo incontri, chiediglielo.")
  ],
  eff: [{ flag: 'jude_trasferito' }], poi: { hub: true } });

sc({ id: 'c6_jude', luogo: 'Il campo dietro la palestra',
  righe: [
    tu("Posso chiederti una cosa?"),
    d('jude', "Sì."),
    tu("A ottobre eri alla Royal Academy. Adesso hai la maglia arancione."),
    d('jude', "…"),
    tu("Una mia compagna di squadra ha visto la tua foto sul giornale e ha detto che non eri uno che scappa da una sconfitta."),
    tu("Ha detto che avevi capito qualcosa. E che se ti avessi incontrato, dovevo chiedertelo."),
    n("Jude Sharp si toglie gli occhiali a visiera. È la prima volta stasera."),
    d('jude', "La tua compagna di squadra ha ragione. Non è per la sconfitta."),
    d('jude', "Alla Royal Academy ho passato tre anni a vincere. Ero il capitano. Non ho perso una partita ufficiale in tre anni."),
    d('jude', "E il nostro allenatore non voleva che vincessimo."),
    tu("…come?"),
    d('jude', "Voleva che gli altri perdessero. Sembrano la stessa cosa e non lo sono per niente."),
    d('jude', "Se vuoi vincere, alleni undici persone. Se vuoi che gli altri perdano, ti servono undici strumenti. E gli strumenti non è necessario che stiano bene."),
    n("Lo dice piano, senza rancore, come uno che ci ha già pensato abbastanza."),
    d('jude', "Il giorno che la Zeus ci ha battuti, mi sono accorto di una cosa: mentre perdevamo, non pensavo alla partita."),
    d('jude', "Pensavo che dopo sarebbe stato tutto uguale. Che avremmo ricominciato lunedì, con lo stesso uomo, a fare la stessa cosa."),
    d('jude', "E per la prima volta in tre anni ho pensato: non voglio."),
    d('mark', "E poi è venuto da noi!"),
    d('jude', "Mark, stavo raccontando."),
    d('mark', "Sì ma è la parte bella!"),
    d('jude', "…e poi sono andato da loro."),
    n("Jude si rimette gli occhiali e guarda il campo: novantuno metri per cinquantatré, tracciato a mano, con una porta ancora piegata."),
    d('jude', "Posso dirti una cosa io adesso?"),
    tu("Sì."),
    d('jude', "Alla Royal Academy il campo lo rifacevano tre giardinieri, di notte, con le macchine."),
    d('jude', "In tre anni non ho mai saputo come si chiamavano."),
    d('jude', "Voi il vostro l\'avete falciato a mano."),
    d('jude', "Ecco: questa è la differenza. E ci ho messo tre anni e una semifinale a capirla.")
  ],
  eff: [{ spirito: 6 }], poi: 'c6_2b' });



/* ============================================================
   CAPITOLO 3 — IL PULLMAN
   Il campionato provinciale si gioca anche fuori. Amanome non ha
   un pullman, non ha le maglie e non ha diciottomila yen.
   ============================================================ */

sc({ id: 'c3b_1', luogo: 'Sala professori — primi di giugno',
  righe: [
    d('ayase', "Ho il calendario del provinciale. Sette partite: tre in casa e quattro fuori."),
    d('kenta', "Fuori dove?"),
    d('ayase', "Ōkubo, Nanao, Tomegawa e il ritorno a Kuzuryū."),
    d('kenta', "La più vicina è a cinquantadue chilometri."),
    d('ayase', "Sì."),
    n("Silenzio. La corriera per la città passa due volte al giorno e non va in nessuno di quei posti."),
    d('ayase', "Ho chiesto un preventivo a una ditta di noleggio. Diciottomila yen a trasferta, autista compreso."),
    d('kenta', "Per quattro trasferte fanno settantaduemila."),
    d('ayase', "Il bilancio del club di calcio della scuola media di Amanome, a oggi, è di zero yen."),
    d('ayase', "Perché il club esiste da cinque settimane e nessuno ha pensato che servissero dei soldi."),
    n("È vero. Nessuno ci ha pensato. Tu per primo."),
    d('shinobu', "E poi c'è l'altra cosa."),
    d('ayase', "Quale altra cosa?"),
    d('shinobu', "Che giochiamo con le magliette di ginnastica e il numero scritto col pennarello."),
    d('shinobu', "A Kuzuryū uno di loro ha chiesto a Rei se eravamo una punizione della scuola."),
    d('rei', "Non era cattivo, era una domanda vera."),
    d('rei', "Gliel'ho anche spiegato. E poi ci ho pensato tutto il viaggio di ritorno."),
    tv({
      fuoco:   "Allora troviamo i soldi. Non so come. Li troviamo.",
      calmo:   "Ok. Settantaduemila e le maglie. Facciamo l'elenco di cosa possiamo fare e partiamo da lì.",
      ironico: "Quindi ci mancano solo i soldi, il pullman e i vestiti. Il resto ce l'abbiamo tutto.",
      chiuso:  "…li troviamo.",
      ostinato:"Non rinunciamo a una partita. Nemmeno una. Trovo un modo."
    }),
    d('ayase', "Apprezzo l'entusiasmo, ma io i soldi non ce li ho e la scuola nemmeno."),
    d('kenta', "C'è una persona in questo paese che sa dove sono i soldi."),
    d('shinobu', "Chi?"),
    d('kenta', "Quella che tiene una cassa da quando aveva undici anni.")
  ],
  eff: [{ obiettivo: 'Trovare settantaduemila yen, un pullman e undici maglie.' }],
  poi: { hub: true } });

sc({ id: 'c3b_nao', luogo: 'Alimentari Kirishima — dopo la chiusura',
  righe: [
    n("Nao Kirishima ha quattordici anni e tiene la cassa del negozio da quando ne aveva undici, perché sua madre lavora anche al consorzio e qualcuno deve stare lì."),
    n("Le spieghi la faccenda. Lei ascolta senza interrompere, il che non è da lei."),
    d('nao', "Settantaduemila."),
    tu("Settantaduemila."),
    d('nao', "E le maglie."),
    tu("E le maglie."),
    d('nao', "Quindi siete venuti a chiedermi dei soldi."),
    tv({
      fuoco:   "No! Cioè, sì. Ma non i tuoi. Siamo venuti a chiederti come si fa.",
      calmo:   "Non i tuoi soldi. Il tuo modo di contarli. È una cosa diversa e ci serve di più.",
      ironico: "Tecnicamente siamo venuti a chiederti di lavorare gratis per undici sconosciuti. Detta così suona male.",
      chiuso:  "No. Siamo venuti a chiederti di occupartene tu.",
      ostinato:"Siamo venuti a chiederti di dirci di no in un modo che ci lasci una strada aperta."
    }),
    n("Nao chiude il registratore di cassa. Fa quel rumore che fanno i registratori di cassa vecchi."),
    d('nao', "Vi dico due cose e poi decidete voi."),
    d('nao', "Uno: in questo paese non ci sono settantaduemila yen che qualcuno vi regali. Non perché siano cattivi. Perché non ci sono."),
    d('nao', "Due: in questo paese ci sono centoquaranta persone sopra i settant'anni che hanno cose da spostare e nessuno che gliele sposti."),
    d('kenta', "…"),
    d('nao', "La signora Kurihara ha ottantasei anni e le arrivano i pellet per la stufa in sacchi da quindici chili. Li scarica il camion in strada. Poi restano lì."),
    d('nao', "L'ufficio postale ha un solo dipendente e il magazzino è al primo piano senza ascensore."),
    d('nao', "Il tempio ha un piazzale che nessuno rastrella da quando è morto il vecchio custode del tempio, che era il fratello del vostro custode."),
    tu("Ci stai dicendo di lavorare."),
    d('nao', "Vi sto dicendo che avete undici ragazzi che si allenano alle sei e mezza del mattino e poi non hanno niente da fare fino alle quattro."),
    d('nao', "E che il paese ha esattamente quel problema lì, al contrario."),
    n("Prende un quaderno da sotto il banco. Non è il registro del negozio: è nuovo."),
    d('nao', "L'ho comprato tre settimane fa. Quando ho sentito che avevate fondato il club e ho pensato: questi si schiantano entro luglio."),
    d('nao', "Ho cominciato a scrivere cosa gli sarebbe servito."),
    d('rei', "…e cosa ci serve?"),
    d('nao', "Tutto. Ho fatto quattro pagine."),
    tu("Nao."),
    d('nao', "So cosa stai per chiedermi e la risposta è che io non gioco a calcio."),
    tv({
      fuoco:   "Non ti sto chiedendo di giocare! Ti sto chiedendo di comandarci!",
      calmo:   "Non ti chiedo di giocare. Ti chiedo di tenere quel quaderno e di dirci ogni settimana quanto siamo lontani.",
      ironico: "Perfetto, perché a guardarti non hai proprio il fisico. Neanche noi, comunque.",
      chiuso:  "Non serve che giochi.",
      ostinato:"Non oggi. Oggi ti chiedo solo il quaderno."
    }),
    n("Nao Kirishima guarda il quaderno. Poi lo gira verso di te e ti fa vedere la prima pagina."),
    n("In cima, scritto tre settimane fa, c'è: « CLUB DI CALCIO — COSE CHE NON HANNO »."),
    d('nao', "Va bene. Ma le cifre le tengo io e non si discutono."),
    n("Il club di calcio della scuola media di Amanome ha una dirigente.")
  ],
  eff: [{ recluta: 'nao' }, { spirito: 6 }, { tratto: { testa: 2 } },
        { momento: 'Hai chiesto aiuto a Nao Kirishima prima di sapere se serviva.' }],
  poi: { hub: true } });

sc({ id: 'c3b_lavori', luogo: 'Amanome — due settimane di pomeriggi',
  righe: [
    n("Il quaderno di Nao è diviso in colonne: cosa, chi, quanto, quando pagano."),
    n("Nessuno di voi aveva mai lavorato per soldi. Tre di voi avevano già lavorato senza."),
    n("— Lunedì. Gorō e Rikuto scaricano ottanta sacchi di pellet da quindici chili in via del tempio. Alla signora Kurihara viene un colpo quando li vede arrivare in due invece che in sei."),
    d('goro', "…dove li metto."),
    n("« Dove vuole lei, signora. » La signora Kurihara ha ottantasei anni e non le si rivolge qualcuno da giovedì."),
    n("— Martedì. Il piazzale del tempio. Sono quattrocento metri quadri di ghiaia e foglie di undici anni."),
    d('shinobu', "Undici anni di foglie."),
    d('kenta', "Dodici. Il fratello di Amagai è morto nel 2013."),
    n("Ci mettono due pomeriggi. Il monaco che viene una volta al mese da Ōmachi, quando arriva e vede, si ferma in mezzo al piazzale e non dice niente per parecchio."),
    n("— Mercoledì. Ufficio postale, primo piano, niente ascensore. Minoru fa ventidue viaggi e alla fine è l'unico che riesce ancora a parlare."),
    d('minoru', "Io corro! È l'unica cosa che so fare! Fatemi fare i viaggi!"),
    n("— Giovedì. La segheria. Il padre di Gorō li guarda lavorare per venti minuti senza dire una parola."),
    n("Poi va dentro, torna con undici paia di guanti da lavoro e li appoggia sul ceppo senza commentare."),
    n("— Venerdì. Il cimitero. Nessuno lo ha chiesto: lo ha proposto Aoi, che parla una volta al giorno."),
    d('aoi', "C'è l'erba alta."),
    d('yuki', "Nostro nonno è lì in fondo."),
    d('aoi', "Anche il tuo, Rei."),
    n("Ci vanno tutti e dodici. Non lo racconta nessuno a nessuno, e in un paese di quattrocentododici abitanti lo sanno tutti entro sera."),
    n("— La domenica sera, Nao apre il quaderno alla pagina delle cifre."),
    d('nao', "Sessantunomila e quattrocento."),
    d('kenta', "Mancano diecimilaseicento."),
    d('nao', "Mancavano. La signora Kurihara è passata stamattina e ha lasciato una busta con dentro ottomila yen e un biglietto."),
    d('shinobu', "Cosa c'è scritto?"),
    d('nao', "« Per la benzina. »"),
    n("E poi, sotto, con una calligrafia da ottantasei anni:"),
    d('nao', "« Mio marito giocava nel 1985. Terzino sinistro. »")
  ],
  eff: [{ flag: 'soldi' }, { spirito: 10 }, { tratto: { schiena: 2 } },
        { momento: 'Avete lavorato due settimane per pagarvi quattro trasferte.' }],
  poi: { hub: true } });

sc({ id: 'c3b_maglie', luogo: 'Casa Anzai — la sarta',
  righe: [
    n("Tsuru Anzai ha ottantun anni e una Singer a pedale del 1961 che funziona meglio di qualunque cosa in questo paese."),
    n("Ha cucito le maglie del 1985. Ha ancora il cartamodello, dentro una busta di carta oleata, in un cassetto che apre senza cercarlo."),
    d('ayase', "Signora Anzai, non possiamo pagarla."),
    d('nao', "Ho già discusso. Ha detto che le paghiamo il filo."),
    n("La vecchia stende il cartamodello sul tavolo. È carta gialla, con i numeri segnati a matita e il nome di undici ragazzi scritto a lato."),
    n("Uno dei nomi è « AMAGAI S. — 5 »."),
    d('anzai', "Il verde di allora non lo trovo più. Facevano un verde che adesso non lo fa nessuno."),
    d('anzai', "Quindi decidete voi. È la vostra squadra, non la loro.")
  ],
  scelte: [
    { t: "«Il verde più simile che si trova. Siamo la stessa squadra.»", vai: 'c3b_maglie_a' },
    { t: "«Un colore nuovo. Non siamo loro e non dobbiamo esserlo.»", vai: 'c3b_maglie_b' },
    { t: "«Decida lei, signora. Lei c'era.»", vai: 'c3b_maglie_c' }
  ] });

sc({ id: 'c3b_maglie_a', luogo: 'Casa Anzai',
  righe: [
    tv({
      fuoco:   "Il verde. Il più simile che c'è. Non voglio che sembri un'altra cosa.",
      calmo:   "Il verde più vicino che si trova. Non per nostalgia: perché quel colore in questo paese vuol già dire qualcosa.",
      ironico: "Verde. Se poi perdiamo, almeno ci confondiamo con l'erba.",
      chiuso:  "Verde.",
      ostinato:"Verde. Quello. Anche se ci vuole di più."
    }),
    d('anzai', "Ne trovo uno che ci somiglia. Sarà più chiaro."),
    tu("Va bene più chiaro."),
    d('anzai', "…"),
    d('anzai', "Sai perché avevano scelto il verde, nell'85?"),
    tu("No."),
    d('anzai', "Perché il rosso costava duecento yen in più al metro."),
    n("Ride. È una risata piccola, di una che ride poco."),
    d('anzai', "Vi hanno raccontato tutti che era il colore della montagna. Era il prezzo del tessuto."),
    d('anzai', "Adesso però è il colore della montagna, perché è quello che si sono messi addosso.")
  ],
  eff: [{ flag: 'maglie' }, { spirito: 6 }, { tratto: { cuore: 2 } },
        { momento: 'Avete scelto il verde del 1985, sapendo che era stata una questione di prezzo.' }],
  poi: { hub: true } });

sc({ id: 'c3b_maglie_b', luogo: 'Casa Anzai',
  righe: [
    tv({
      fuoco:   "Un colore nostro. Quelli dell'85 sono finiti in quattro. Noi non finiamo così.",
      calmo:   "Un colore nuovo. Con rispetto: se ci mettiamo il loro, ogni partita che perdiamo diventa anche la loro.",
      ironico: "Nuovo. Con tutto il bene, non voglio andare in giro vestito da fantasma di qualcun altro.",
      chiuso:  "Un colore nostro.",
      ostinato:"Nuovo. Il loro se lo sono guadagnato loro. Il nostro ce lo guadagniamo noi."
    }),
    d('anzai', "…"),
    d('anzai', "Bene."),
    n("Ripiega il cartamodello del 1985 e lo rimette nella busta di carta oleata, con cura, come una cosa che ha finito il suo lavoro."),
    d('anzai', "Sai che sei il primo che me lo dice?"),
    d('anzai', "In trent'anni sono venuti qui in tre a chiedermi di quel modello. Tutti e tre volevano rifarlo uguale."),
    d('anzai', "E tutti e tre non hanno mai messo insieme una squadra."),
    n("Prende un foglio nuovo. Non il cartamodello: un foglio bianco."),
    d('anzai', "Allora dimmi che colore.")
  ],
  eff: [{ flag: 'maglie' }, { spirito: 6 }, { tratto: { schiena: 2 } },
        { momento: 'Avete rifiutato le maglie del 1985 e ne avete fatte di vostre.' }],
  poi: { hub: true } });

sc({ id: 'c3b_maglie_c', luogo: 'Casa Anzai',
  righe: [
    tv({
      fuoco:   "Decida lei! Lei le ha cucite, lei c'era, lei sa!",
      calmo:   "Decida lei. Noi possiamo scegliere un colore. Lei può scegliere il colore giusto.",
      ironico: "Onestamente non abbiamo il gusto per queste cose. Guardi come siamo vestiti adesso.",
      chiuso:  "Lei c'era. Scelga lei.",
      ostinato:"Scelga lei, e qualunque cosa scelga noi ce la mettiamo e non ci lamentiamo."
    }),
    n("Tsuru Anzai posa le mani sul tavolo. Sono mani di una che cuce da settant'anni."),
    d('anzai', "Mi state chiedendo di scegliere per voi."),
    tu("Sì."),
    d('anzai', "È una cosa molto scomoda da chiedere a una persona vecchia, ragazzo."),
    d('anzai', "Perché noi le scelte le abbiamo già fatte, e non tutte sono andate bene."),
    n("Silenzio. Poi va all'armadio e torna con una pezza di stoffa che non è verde."),
    d('anzai', "Bianca. Con una riga verde sulla spalla."),
    d('anzai', "Bianca perché si vede da lontano, e in questo paese chi guarda le partite le guarda dalla strada del tornante."),
    d('anzai', "E la riga verde perché una cosa dell'85 ve la potete anche portare dietro. Ma una riga, non tutta la maglia."),
    n("Nessuno dice niente."),
    d('anzai', "Il mio Anzai era il numero otto. Non era bravo.")
  ],
  eff: [{ flag: 'maglie' }, { spirito: 9 }, { tratto: { cuore: 3 } },
        { momento: 'Avete lasciato scegliere le maglie a chi aveva cucito quelle del 1985.' }],
  poi: { hub: true } });

sc({ id: 'c3b_partita', luogo: 'Piazzale della scuola — 6:15 del mattino',
  righe: [
    n("Il pullman è il minibus della segheria Ishizuka. Nove posti omologati, dodici persone dentro, e Rikuto in piedi in mezzo perché non ci sta seduto."),
    n("Guida Amagai. Ha una patente per il trasporto di persone del 1985 e non ha mai smesso di rinnovarla, cosa su cui nessuno gli fa domande."),
    d('nao', "Ho contato: con quello che abbiamo risparmiato sul noleggio ci restano quarantatremila yen per il resto della stagione."),
    d('kenta', "Che vuol dire che possiamo permetterci anche il ritorno."),
    d('shinobu', "Non era scontato?"),
    d('nao', "Nel mio quaderno? No."),
    n("Le maglie sono nel bagagliaio, in una scatola di cartone con scritto sopra ANZAI a pennarello."),
    n("Nessuno le ha ancora indossate. Le mettono nello spogliatoio della scuola media di Ōkubo, che è un'aula con le sedie spostate."),
    n("Ci vogliono nove minuti buoni, perché nessuno vuole essere il primo."),
    d('rei', "…"),
    d('rei', "Scusate, mi devo sedere un attimo."),
    d('hina', "Rei."),
    d('rei', "Sto bene. È che è la prima volta in vita mia che ho una maglia con un numero cucito sopra.")
  ],
  poi: { partita: { avv: 'okubo', titolo: 'Provinciale — Ōkubo vs Amanome', minuti: 45,
    vinto: 'c3b_v', perso: 'c3b_p', pari: 'c3b_p' } } });

sc({ id: 'c3b_v', luogo: 'Scuola media di Ōkubo — dopo',
  righe: [
    n("La scuola media di Ōkubo ha undici studenti in tutto il secondo anno. Giocano in nove più due presi in prestito dal club di pallavolo."),
    n("Hanno perso, e il loro capitano viene a stringervi la mano uno per uno, cosa che non fa quasi nessuno."),
    d('okubo', "Bella maglia."),
    tu("Grazie."),
    d('okubo', "Le nostre le compriamo online. Sono di poliestere e d'estate fanno schifo."),
    d('okubo', "Quella è cucita, si vede."),
    n("Guarda i vostri dodici che caricano la scatola vuota sul minibus della segheria."),
    d('okubo', "Posso chiederti una cosa? Come avete fatto a venire fin qui?"),
    tv({
      fuoco:   "Abbiamo scaricato ottanta sacchi di pellet, rastrellato un tempio e tagliato l'erba del cimitero!",
      calmo:   "Abbiamo lavorato due settimane. Il paese aveva cose da spostare, noi avevamo dodici pomeriggi liberi.",
      ironico: "Ufficio postale. Primo piano. Niente ascensore. Non chiedere.",
      chiuso:  "Lavorando.",
      ostinato:"Ce li siamo guadagnati. Non c'era un altro modo, quindi era quello."
    }),
    d('okubo', "…"),
    d('okubo', "Noi il club l'abbiamo sciolto due anni fa e riaperto a marzo."),
    d('okubo', "Quando l'abbiamo riaperto, il preside ha detto che tanto non saremmo andati da nessuna parte."),
    d('okubo', "E io gli ho creduto. Fino a stamattina."),
    n("Gli stringi la mano una seconda volta e non sai bene perché.")
  ],
  eff: [{ spirito: 10 }, { exp: 585 }, { tratto: { cuore: 1 } }], poi: { capitolo: 4 } });

sc({ id: 'c3b_p', luogo: 'Scuola media di Ōkubo — dopo',
  righe: [
    n("Avete perso contro una scuola con undici studenti in tutto il secondo anno, in trasferta, con le maglie nuove."),
    n("Sul minibus del ritorno non parla nessuno per venti chilometri."),
    d('nao', "Diciottomila yen risparmiati sul noleggio, meno il gasolio, meno i panini: quattordicimila e duecento."),
    d('kenta', "Nao—"),
    d('nao', "Sto arrivando al punto. Quattordicimila e duecento è quello che ci è costata questa partita."),
    d('nao', "Otto sacchi di pellet a testa, il piazzale del tempio, il magazzino della posta e il cimitero."),
    n("Silenzio."),
    d('nao', "Ve lo dico perché è il mio lavoro dirvelo, non per farvi stare male."),
    d('nao', "E perché voglio che quando arriva la prossima sappiate esattamente quanto vale."),
    d('goro', "…quanto vale?"),
    d('nao', "Quattordicimila e duecento yen di braccia di dodici persone."),
    n("Rikuto, in piedi in mezzo al minibus perché non ci sta seduto, dice la seconda frase più lunga dell'anno."),
    d('rikuto', "Allora la prossima la vinciamo.")
  ],
  eff: [{ spirito: 8 }, { exp: 520 }, { tratto: { schiena: 1 } }], poi: { capitolo: 4 } });

/* ============================================================
   CAPITOLO 5 — QUELLO CHE SE NE VA
   Nel 1986 il club non è morto perché erano scarsi.
   ============================================================ */

sc({ id: 'c5b_1', luogo: 'Il campo dietro la palestra — luglio, terzo giorno',
  righe: [
    n("Gorō Ishizuka non viene all'allenamento da tre giorni."),
    n("Il primo giorno avete pensato che fosse malato. Il secondo che fosse successo qualcosa in famiglia."),
    n("Il terzo, Minoru è passato davanti alla segheria alle sette di sera e ha visto la luce accesa e Gorō dentro."),
    d('minoru', "Stava spostando i tronchi. Da solo."),
    d('minoru', "L'ho chiamato e mi ha visto. Sono sicuro che mi ha visto."),
    d('minoru', "E ha continuato."),
    d('shinobu', "Magari non poteva fermarsi."),
    d('kenta', "O magari ha smesso."),
    d('rei', "Kenta!"),
    d('kenta', "Scusate. Mi avete chiesto la verità anche quando è brutta e a volte me ne dimentico che è brutta."),
    n("Amagai non ha detto niente per tutto l'allenamento."),
    n("Alla fine, mentre raccoglie i coni, parla senza girarsi."),
    d('amagai', "Nel 1986 il primo è stato Tanabe. Terza media, difensore centrale, il più forte di tutti noi."),
    d('amagai', "Un giovedì non è venuto. Il venerdì nemmeno. Il lunedì gli ho chiesto perché e mi ha detto: « ho da fare »."),
    d('amagai', "E io gli ho detto va bene."),
    d('amagai', "Gli ho detto va bene, e sono andato a casa."),
    n("Mette l'ultimo cono nel sacco."),
    d('amagai', "Non ci ho più pensato per trent'anni. Poi ci ho pensato tutte le notti degli ultimi tre giorni.")
  ],
  eff: [{ obiettivo: 'Capire cos\'è successo a Gorō. E decidere cosa farne.' }],
  poi: { hub: true } });

sc({ id: 'c5b_segheria', luogo: 'Segheria Ishizuka — sette di sera',
  righe: [
    n("La segheria è aperta e c'è solo Gorō. Sposta travi da tre metri, una alla volta, e le impila."),
    n("Ne ha già impilate parecchie. Troppe per un pomeriggio."),
    tu("Gorō."),
    d('goro', "…"),
    tu("Gorō."),
    d('goro', "Non posso venire."),
    tu("Lo vedo."),
    d('goro', "Allora perché me lo chiedi."),
    n("Dalla porta dell'ufficio esce suo padre. Non lo avevi mai visto da vicino: è più basso di Gorō di quindici centimetri e ha la stessa faccia."),
    d('ishizuka', "Tu sei quello del club."),
    tu("Sì."),
    d('ishizuka', "Vieni dentro, che qui non si sente."),
    n("L'ufficio della segheria è una stanza di tre metri per tre con un calendario del 2019 e una fattura appesa a un chiodo."),
    d('ishizuka', "Il ventidue di giugno mi è arrivato un ordine da un'impresa di Matsumoto. Quattrocento travi da tre metri, consegna entro il quindici di agosto."),
    d('ishizuka', "È il più grosso che prendo da nove anni. Se lo consegno in tempo, questa segheria campa fino al 2028."),
    d('ishizuka', "Se non lo consegno, chiudo entro Natale e ce ne andiamo a Nagano da mia sorella."),
    n("Lo dice come si dicono le cose che si sono già dette molte volte da soli."),
    d('ishizuka', "Per farlo mi servirebbero due uomini. Un uomo costa duecentomila yen al mese e io non li ho."),
    d('ishizuka', "Ho mio figlio, che ha tredici anni e la schiena di uno di venticinque."),
    tu("…"),
    d('ishizuka', "Non gliel'ho chiesto io."),
    d('ishizuka', "Si è messo il grembiule il diciannove sera e ha detto: da domani faccio i pomeriggi. E io non gli ho detto di no."),
    d('ishizuka', "Questa è la parte per cui non riesco a dormire, se ti interessa: che non gli ho detto di no.")
  ],
  scelte: [
    { t: "«Allora veniamo tutti. Dodici pomeriggi valgono due uomini.»", vai: 'c5b_lavoro',
      nota: 'La strada del cuore. Costa a tutti, e non è detto che basti.' },
    { t: "«Facciamo i conti. Quanto manca davvero, in ore?»", vai: 'c5b_conti',
      nota: 'La strada della testa. Serve che qualcuno sappia contare.' },
    { t: "«Ha ragione lei. Gorō resta qui e noi giochiamo in dieci.»", vai: 'c5b_dieci',
      nota: 'La strada onesta. È anche quella che fa più male.' },
    { t: "«Gorō. Dillo tu. Non lui, non io: tu.»", vai: 'c5b_goro',
      se: function (S, car, tr) { return car === 'chiuso' || car === 'ostinato' || (tr.schiena || 0) >= 4; },
      nota: 'Nessuno gliel\'ha ancora chiesto.' }
  ] });

sc({ id: 'c5b_lavoro', luogo: 'Segheria Ishizuka',
  righe: [
    tv({
      fuoco:   "Allora veniamo tutti! Dodici pomeriggi! Cosa sono due uomini? Noi siamo dodici!",
      calmo:   "Due uomini sono sedici ore al giorno. Noi siamo dodici e possiamo darle quattro ore a testa dopo la scuola. Sono quarantotto.",
      ironico: "Guardi che siamo dodici e nove di noi non hanno mai fatto niente di faticoso in vita loro. Ma siamo dodici.",
      chiuso:  "Veniamo noi.",
      ostinato:"Veniamo tutti i pomeriggi fino al quindici di agosto. Non me lo faccia ripetere."
    }),
    n("Il padre di Gorō vi guarda uno alla volta. Poi ride, e non è una risata gentile."),
    d('ishizuka', "Voi non sapete cosa state dicendo."),
    d('ishizuka', "Una trave da tre metri di larice pesa novanta chili. La signorina lì" ),
    d('shinobu', "Shinobu."),
    d('ishizuka', "…Shinobu. Quanto pesi?"),
    d('shinobu', "Quarantaquattro."),
    d('ishizuka', "Ecco."),
    d('nao', "Non tutti devono spostare le travi."),
    n("Nao Kirishima apre il quaderno. Non quello del club: quello del negozio."),
    d('nao', "Lei ha quattrocento travi da segare, squadrare, impilare, contare e caricare. Le travi le spostano in tre: Gorō, Rikuto e Ishizuka figlio."),
    d('nao', "Contare, marcare, impilare i corti, pulire la sega, tenere il registro delle consegne e fare da mangiare a chi lavora sono altre sei mansioni, e per quelle non serve pesare novanta chili."),
    d('nao', "Serve esserci tutti i giorni alla stessa ora."),
    d('nao', "E noi ci siamo tutti i giorni alla stessa ora da aprile. È l'unica cosa che sappiamo fare bene."),
    n("Silenzio nell'ufficio di tre metri per tre."),
    d('ishizuka', "…"),
    d('ishizuka', "Dalle due e mezza alle sei. Chi arriva tardi non entra."),
    d('goro', "Papà—"),
    d('ishizuka', "Sta' zitto e va' a prendere gli altri guanti."),
    n("Fanno diciannove giorni. Il campo dietro la palestra resta vuoto tutti i pomeriggi di luglio, e per la prima volta da aprile nessuno di voi tocca un pallone per due settimane e mezza."),
    n("L'ordine parte il tredici di agosto, due giorni prima della scadenza."),
    n("La sera del tredici, il padre di Gorō attraversa il cortile della scuola con una busta in mano e la dà a Nao senza dire niente."),
    d('nao', "…sono quarantamila yen."),
    d('ishizuka', "È quello che avrei pagato due uomini per sei giorni. Non per diciannove: per sei."),
    d('ishizuka', "Gli altri tredici li avete lavorati per lui e quelli non ve li pago, perché non erano lavoro."),
    n("Se ne va senza salutare, che dalle sue parti è un modo di salutare.")
  ],
  eff: [{ flag: 'goro_torna' }, { spirito: 16 }, { tratto: { cuore: 4 } },
        { momento: 'Il club ha lavorato diciannove giorni in una segheria per non perdere un difensore.' }],
  poi: { hub: true } });

sc({ id: 'c5b_conti', luogo: 'Segheria Ishizuka',
  righe: [
    tv({
      fuoco:   "Quante ore! Me lo dica in ore e vediamo se è vero che non si può!",
      calmo:   "Prima di dirle qualcosa di stupido, vorrei sapere una cosa: quante ore mancano davvero. Non due uomini: ore.",
      ironico: "Senta, noi siamo pessimi a quasi tutto, ma abbiamo uno che conta le cose in modo preoccupante.",
      chiuso:  "Quante ore mancano.",
      ostinato:"Non me ne vado finché non so quante ore sono. Poi decidiamo."
    }),
    d('ishizuka', "…ore?"),
    d('kenta', "Ore, sì. Quattrocento travi. Quanto ci vuole per una?"),
    d('ishizuka', "Ragazzo, non è che—"),
    d('kenta', "Quanto ci vuole per una."),
    n("Kenta Ubukata ha un metro e cinquantadue, ha fatto due flessioni in tutta la vita, e ha appena interrotto un adulto senza accorgersene."),
    d('ishizuka', "…venti minuti, se la sega tiene. Mezz'ora se non tiene."),
    d('kenta', "Quattrocento per venticinque minuti fanno centosessantasei ore. Da oggi al quindici agosto sono trentanove giorni."),
    d('kenta', "Quattro ore e venti al giorno."),
    d('ishizuka', "Che io da solo non le faccio, perché ho anche il resto."),
    d('kenta', "No. Lei da solo fa la sega, che è l'unica cosa che sa fare solo lei."),
    d('kenta', "Squadrare, impilare, marcare, contare e caricare sono cinque cose che sanno fare tutti dopo mezz'ora che gliele hanno spiegate."),
    d('kenta', "Sono novanta ore su centosessantasei. Il cinquantaquattro per cento."),
    n("Il padre di Gorō guarda questo ragazzino che gli sta smontando il problema come si smonta un motorino."),
    d('kenta', "Il punto non è che a Gorō serve rinunciare al calcio. Il punto è che a lei serve che qualcuno stia in segheria dalle due e mezza alle sei."),
    d('kenta', "E noi possiamo starci a turno. Tre alla volta, quattro giorni a settimana."),
    d('kenta', "Così Gorō ci sta due pomeriggi su quattro invece che quattro su quattro. E i giorni che non c'è, si allena."),
    d('ishizuka', "…"),
    d('ishizuka', "E chi mi dice che venite?"),
    d('kenta', "Nessuno. Però io scrivo tutto, e se qualcuno salta lo scrivo."),
    d('kenta', "E poi glielo faccio vedere."),
    n("Il padre di Gorō guarda il figlio, che è rimasto sulla porta e non ha ancora detto una parola."),
    d('ishizuka', "Tu lo sapevi che il tuo amico contava le cose così?"),
    d('goro', "…lo conta anche quando nessuno glielo chiede.")
  ],
  eff: [{ flag: 'goro_torna' }, { flag: 'turni' }, { spirito: 12 }, { tratto: { testa: 4 } },
        { momento: 'Kenta ha smontato il problema della segheria in cinque mansioni e un turno.' }],
  poi: { hub: true } });

sc({ id: 'c5b_dieci', luogo: 'Segheria Ishizuka',
  righe: [
    tv({
      fuoco:   "…ha ragione lei. Odio dirlo. Ha ragione lei.",
      calmo:   "Ha ragione. Se la segheria chiude, Gorō a settembre non è più ad Amanome. Il calcio viene dopo.",
      ironico: "Sa qual è la cosa peggiore? Che non riesco nemmeno a farci una battuta sopra.",
      chiuso:  "Ha ragione.",
      ostinato:"Non mi piace. Ma ha ragione, e far finta di no sarebbe da stupidi."
    }),
    d('ishizuka', "…"),
    tu("Se la segheria chiude, a settembre Gorō non è più qui. E allora non l'ho perso per un'estate: l'ho perso e basta."),
    tu("Preferisco perderlo per un'estate."),
    n("Il padre di Gorō ti guarda con una faccia che non ti aspettavi: sorpresa, e un po' dispiaciuta."),
    d('ishizuka', "Pensavo che avresti insistito."),
    tu("Ci ho pensato."),
    d('ishizuka', "E?"),
    tu("E poi ho pensato a chi ci rimette se insisto e va male."),
    n("Gorō non dice niente. Ma quando esci dalla segheria ti segue fino in strada, e questa è la prima volta in due anni che ti segue da qualche parte."),
    d('goro', "Ehi."),
    tu("Sì?"),
    d('goro', "Il quindici di agosto."),
    tu("Cosa?"),
    d('goro', "Consegniamo il quindici. Il sedici sono libero."),
    d('goro', "Non ti sto chiedendo di aspettarmi. Ti sto dicendo la data."),
    n("Il club di calcio della scuola media di Amanome giocherà una partita in dieci."),
    n("E il sedici di agosto, alle sei e mezza del mattino, Gorō Ishizuka è sul campo prima di tutti gli altri.")
  ],
  eff: [{ flag: 'goro_via' }, { spirito: 8 }, { tratto: { testa: 2 }, }, { tratto: { schiena: 3 } },
        { momento: 'Hai lasciato andare Gorō in segheria invece di insistere. È tornato il sedici di agosto.' }],
  poi: { hub: true } });

sc({ id: 'c5b_goro', luogo: 'Segheria Ishizuka',
  righe: [
    n("Non rispondi al padre. Ti giri verso Gorō, che è rimasto in piedi sulla porta dell'ufficio da quando siete entrati."),
    tv({
      fuoco:   "Gorō. Non m'importa cosa dice tuo padre. Dillo tu. Cosa vuoi fare.",
      calmo:   "Gorō. In questa stanza hanno parlato tutti tranne quello di cui si sta parlando. Dillo tu.",
      ironico: "Scusi signore, senza offesa: lui ce l'ha una bocca? L'ho visto usarla nove volte in due anni ma esiste.",
      chiuso:  "Gorō. Parla tu.",
      ostinato:"No. Non decide lei e non decido io. Gorō, dillo tu, e io non me ne vado finché non lo dici."
    }),
    n("Silenzio nell'ufficio di tre metri per tre."),
    n("Gorō Ishizuka ha tredici anni, un metro e ottantatré, e in due anni di scuola gli hanno rivolto la parola meno di quante volte lui abbia spostato un tronco in un pomeriggio."),
    d('goro', "…"),
    d('goro', "Io—"),
    n("Si ferma. Ricomincia."),
    d('goro', "Quando ero piccolo mio padre mi diceva di stare fuori dal capannone perché era pericoloso."),
    d('goro', "Poi a undici anni mi ha detto che potevo entrare."),
    d('goro', "E io ho pensato: adesso servo."),
    d('goro', "E mi è piaciuto tantissimo."),
    n("Nessuno lo interrompe. È il discorso più lungo della sua vita e lo stanno capendo tutti insieme."),
    d('goro', "Poi ad aprile è venuto uno a chiedermi di stare fermo mentre gli altri mi venivano addosso."),
    d('goro', "E anche lì ho pensato: adesso servo."),
    d('goro', "E mi è piaciuto uguale."),
    d('goro', "E adesso mi dicono che devo sceglierne una."),
    d('goro', "E io non voglio scegliere. Voglio tutte e due. E so che non si può, e mi fa arrabbiare, e non so con chi."),
    n("Suo padre guarda il pavimento."),
    d('ishizuka', "…con me."),
    d('goro', "No."),
    d('ishizuka', "Sì. Con me. Sono io quello che non ti ha detto di no il diciannove sera."),
    n("Gorō Ishizuka fa una cosa che non gli ha visto fare nessuno: alza la voce."),
    d('goro', "E ALLORA DIMMELO ADESSO!"),
    n("Il ronzio della sega, fuori, è l'unica cosa che si sente."),
    d('ishizuka', "…dalle due e mezza alle sei. Ma il martedì e il giovedì no."),
    d('ishizuka', "Il martedì e il giovedì vai a giocare a pallone e non ti voglio vedere qui."),
    d('goro', "…"),
    d('ishizuka', "E porta gli altri, che se stanno lì a guardare mi innervosiscono.")
  ],
  eff: [{ flag: 'goro_torna' }, { flag: 'turni' }, { spirito: 18 }, { tratto: { schiena: 4 }, }, { tratto: { cuore: 2 } },
        { momento: 'Hai fatto parlare Gorō al posto di suo padre. Ha urlato per la prima volta in vita sua.' }],
  poi: { hub: true } });

sc({ id: 'c5b_partita', luogo: 'Il campo dietro la palestra — ritorno con la Kuzuryū',
  righe: [
    n("La Kuzuryū scende dal pullman — il loro, quello vero, con la scritta sulla fiancata — e guarda il campo dietro la palestra."),
    d('cronista', "Radio Valle in diretta dal campo della scuola media di Amanome per il ritorno con la Kuzuryū. Sono presenti… ottantasei persone."),
    d('nao', "Ottantasei?"),
    d('kenta', "A maggio erano quarantatré."),
    d('nao', "C'è la signora Kurihara. In prima fila. Con la sedia."),
    n("Il capitano della Kuzuryū, quello del gol dell'andata, si ferma davanti a voi e guarda le maglie."),
    d('kuz', "Queste sono nuove."),
    tu("Sì."),
    d('kuz', "Le nostre le fa uno sponsor. Ci hanno messo il logo di un concessionario di Nagano."),
    d('kuz', "Vostro padre ha un concessionario?"),
    tu("No."),
    d('kuz', "E allora chi ve le ha pagate?"),
    tv({
      fuoco:   "Ottanta sacchi di pellet, un piazzale di tempio, un magazzino di posta e un cimitero!",
      calmo:   "Le abbiamo pagate noi. Con due settimane di pomeriggi.",
      ironico: "Una signora di ottantasei anni. Sul serio. C'era anche il biglietto.",
      chiuso:  "Noi.",
      ostinato:"Nessuno. Ce le siamo fatte."
    }),
    d('amagai', "In campo."),
    d('amagai', "E una cosa sola, oggi: a maggio siamo andati a casa loro a farci misurare."),
    d('amagai', "Oggi sono venuti a casa nostra. È una cosa completamente diversa e voglio che ve ne ricordiate per tutti i novanta minuti.")
  ],
  poi: { partita: { avv: 'kuzuryu', titolo: 'Provinciale — Amanome vs Kuzuryū (ritorno)', minuti: 45,
    vinto: 'c5b_v', perso: 'c5b_p', pari: 'c5b_x' } } });

sc({ id: 'c5b_v', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("Ottantasei persone che gridano insieme, in un paese di quattrocentododici, si sentono dal tornante."),
    d('cronista', "…e Radio Valle non ha più niente da aggiungere. La Kuzuryū è stata battuta ad Amanome."),
    d('kuz', "Come avete fatto?"),
    tu("In che senso?"),
    d('kuz', "A maggio eravate un'altra squadra. Letteralmente un'altra. Cosa avete fatto in due mesi?"),
    n("Ci pensi. La risposta vera è lunghissima e non sta in una frase, ma la parte che conta è breve."),
    tv({
      fuoco:   "Abbiamo lavorato in una segheria per non perdere un difensore.",
      calmo:   "Abbiamo passato luglio a fare una cosa che con il calcio non c'entrava niente.",
      ironico: "Abbiamo scoperto che il calcio è la parte facile.",
      chiuso:  "Abbiamo tenuto tutti.",
      ostinato:"Non abbiamo perso nessuno. Era quello il campionato di luglio."
    }),
    d('kuz', "…non ho capito."),
    tu("Lo so.")
  ],
  eff: [{ spirito: 12 }, { exp: 650 }], poi: { capitolo: 6 } });

sc({ id: 'c5b_p', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("Persa. In casa, con le maglie nuove, davanti a ottantasei persone."),
    n("La signora Kurihara si alza dalla sedia, la ripiega, e prima di andarsene si ferma davanti a Gorō."),
    d('kurihara', "Tu sei quello dei sacchi."),
    d('goro', "…sì."),
    d('kurihara', "Mio marito era terzino sinistro. Nel 1985 hanno perso otto partite su ventidue."),
    d('goro', "…"),
    d('kurihara', "Otto. E per trent'anni me ne ha raccontate quattordici."),
    n("Se ne va con la sua sedia sotto il braccio."),
    d('amagai', "…"),
    d('amagai', "Sua moglie non aveva mai parlato con nessuno di noi. In trent'anni."),
    d('amagai', "Nemmeno al funerale.")
  ],
  eff: [{ spirito: 10 }, { exp: 585 }], poi: { capitolo: 6 } });

sc({ id: 'c5b_x', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("Un pareggio, in casa, contro la squadra che a maggio vi aveva battuti senza accorgersi di voi."),
    d('kenta', "Due punti in classifica. Ne abbiamo tre in totale."),
    d('rei', "Tre è un numero?"),
    d('kenta', "Tre è un numero."),
    d('rei', "Ad aprile eravamo in due e adesso abbiamo tre punti. Sono più punti che persone di aprile."),
    d('shinobu', "Rei, questa è la cosa più stupida che tu abbia mai detto."),
    d('rei', "Lo so. Sono felice.")
  ],
  eff: [{ spirito: 11 }, { exp: 618 }], poi: { capitolo: 6 } });

/* ============================================================
   CAPITOLO 9 — QUELLI CHE CI GUARDANO
   Arriva quello che non avevate messo in conto: essere guardati.
   ============================================================ */

sc({ id: 'c9_1', luogo: 'Aula 2-A — primi di novembre',
  righe: [
    n("Il giornale della prefettura di Nagano esce il martedì e arriva ad Amanome il giovedì."),
    n("Questo giovedì, a pagina undici, c'è mezza pagina con una fotografia del campo dietro la palestra."),
    n("Titolo: « TRENTOTTO STUDENTI, UNDICI GIOCATORI: IL MIRACOLO DI AMANOME »."),
    d('shinobu', "Miracolo."),
    d('kenta', "Miracolo."),
    d('hina', "Non è un miracolo, è che ci alziamo alle sei."),
    d('nao', "Ho venduto quarantun copie del giornale stamattina. Ne tengo di solito quattro."),
    n("È cominciata una cosa che non avevate previsto e per cui nessuno vi ha preparati."),
    n("Alle quattro e mezza, dietro la recinzione del campo, ci sono ventidue persone a guardarvi fare gli esercizi."),
    n("Il lunedì erano tre."),
    d('minoru', "Mi guardano."),
    d('rei', "Guardano tutti, non solo te."),
    d('minoru', "Sì ma prima non mi guardava nessuno e adesso mi guardano e non riesco a fare la cosa dei coni."),
    d('amagai', "Sasaoka."),
    d('minoru', "Sì?"),
    d('amagai', "Fra tre settimane potrebbero essere duemila."),
    d('minoru', "…"),
    d('amagai', "Non lo dico per spaventarti. Lo dico perché è meglio che tu lo scopra qui, con ventidue persone che ti conoscono per nome."),
    n("Nao arriva di corsa dal cortile con una busta in mano, e ha la faccia di una che ha già letto il contenuto."),
    d('nao', "È per Hina."),
    d('nao', "Ed è della Nagano Higashi.")
  ],
  eff: [{ obiettivo: 'Decidere cosa siete adesso che vi guardano.' }],
  poi: { hub: true } });

sc({ id: 'c9_hina', luogo: 'Campo di tiro con l\'arco — dietro il tempio',
  righe: [
    n("Hina Kurosawa tira. Sei frecce, sei centri, come sempre."),
    n("La busta della Nagano Higashi è appoggiata sulla panca, aperta, con il foglio ripiegato dentro."),
    d('hina', "Sai cosa c'è scritto?"),
    tu("No."),
    d('hina', "Trasferimento a gennaio. Retta pagata, convitto pagato, materiale pagato."),
    d('hina', "Ottocento studenti. Tre campi. Due allenatori con il patentino."),
    d('hina', "E un club di tiro con l'arco che l'anno scorso è arrivato quarto ai nazionali."),
    n("Questa è la parte che non ti aspettavi."),
    d('hina', "Hanno visto il pezzo sul giornale. Ma nella lettera parlano più dell'arco che del calcio."),
    d('hina', "Dicono che con una preparazione seria potrei fare i nazionali in due anni."),
    n("Tira un'altra freccia. Centro."),
    d('hina', "Io tiro con l'arco da dodici anni. Gioco a calcio da sette mesi."),
    d('hina', "Non è nemmeno una scelta difficile, se la guardi da fuori."),
    tu("E se la guardi da dentro?"),
    d('hina', "Da dentro è la cosa più difficile che mi sia mai capitata e non riesco a spiegare perché."),
    n("Abbassa l'arco."),
    d('hina', "Dimmi cosa ne pensi. Sul serio, non quello che dovresti dire da capitano.")
  ],
  scelte: [
    { t: "«Vai. Se resti per noi e poi ti pesa, ci odierai.»", vai: 'c9_hina_a' },
    { t: "«Resta. Qui sei una delle undici. Là saresti una delle ottocento.»", vai: 'c9_hina_b' },
    { t: "«Non te lo dico. È tua e sarebbe scorretto.»", vai: 'c9_hina_c' },
    { t: "«Cosa ti fa paura: andare, o scoprire che qui non ti bastava?»", vai: 'c9_hina_d',
      se: function (S, car, tr) { return (tr.testa || 0) >= 5 || car === 'calmo'; },
      nota: 'È la domanda giusta, ed è cattiva.' }
  ] });

sc({ id: 'c9_hina_a', luogo: 'Campo di tiro con l\'arco',
  righe: [
    tv({
      fuoco:   "Vai. Lo dico controvoglia e non me lo far ripetere: vai.",
      calmo:   "Vai. Se resti per noi, fra tre anni sarà colpa nostra, e non voglio quel debito.",
      ironico: "Vai. Poi però quando fai i nazionali ci mandi i biglietti, che qui non usciamo mai.",
      chiuso:  "Vai.",
      ostinato:"Vai. E se torni a trovarci ti facciamo giocare lo stesso, così ti roviniamo la preparazione."
    }),
    d('hina', "…"),
    d('hina', "Speravo che me lo dicessi."),
    d('hina', "E adesso che me l'hai detto sono furiosa, il che mi dice una cosa che non sapevo."),
    n("Piega il foglio della Nagano Higashi e se lo mette in tasca."),
    d('hina', "Rispondo a gennaio. Non prima."),
    d('hina', "Voglio vedere come finisce.")
  ],
  eff: [{ spirito: 6 }, { tratto: { cuore: 3 } },
        { momento: 'Hai detto a Hina di andarsene, sperando che restasse. Non è una cosa pulita.' }],
  poi: { hub: true } });

sc({ id: 'c9_hina_b', luogo: 'Campo di tiro con l\'arco',
  righe: [
    tv({
      fuoco:   "Resta! Qui sei una degli undici! Là sei un numero in un elenco!",
      calmo:   "Resta. Là avresti tutto tranne una cosa: essere necessaria. E tu quella lì l'hai scoperta a maggio.",
      ironico: "Resta. Là hanno tre campi ma nessuno che ti chiami «capitana dell'arco» con quel tono che usa Minoru.",
      chiuso:  "Resta.",
      ostinato:"Resta. Te lo chiedo, non te lo consiglio. È diverso e voglio che tu senta la differenza."
    }),
    d('hina', "…lo sai che è egoista."),
    tu("Lo so."),
    d('hina', "E lo dici lo stesso."),
    tu("Lo dico lo stesso."),
    n("Hina Kurosawa ti guarda per un tempo scomodo."),
    d('hina', "Va bene."),
    d('hina', "Non « va bene resto ». « Va bene, hai detto una cosa vera invece di una cosa nobile »."),
    d('hina', "Rispondo a gennaio. Volevo solo sapere se qualcuno me lo avrebbe chiesto.")
  ],
  eff: [{ spirito: 8 }, { tratto: { schiena: 3 } },
        { momento: 'Hai chiesto a Hina di restare sapendo che era egoista, e gliel\'hai detto.' }],
  poi: { hub: true } });

sc({ id: 'c9_hina_c', luogo: 'Campo di tiro con l\'arco',
  righe: [
    tv({
      fuoco:   "No. Non te lo dico. Se te lo dico io poi non è più tua e mi verrebbe da urlartelo.",
      calmo:   "Non te lo dico. Qualunque cosa dicessi, peserebbe più di quanto dovrebbe, e questa scelta deve pesare solo quanto pesa.",
      ironico: "Se te lo dico io, poi per trent'anni sarà colpa mia. Ho già abbastanza roba.",
      chiuso:  "È tua.",
      ostinato:"No. Su questa non ti aiuto, e non cambio idea nemmeno se insisti."
    }),
    d('hina', "…"),
    d('hina', "Sei un vigliacco."),
    tu("Forse."),
    d('hina', "No, aspetta. Ci ripenso."),
    n("Incocca una freccia, la tiene, non tira."),
    d('hina', "Nel tiro con l'arco c'è una cosa: se qualcuno ti parla mentre stai per tirare, tu senti la sua voce dentro il tiro. Anche se dice una cosa giusta."),
    d('hina', "Per questo il maestro sta zitto."),
    d('hina', "Sta zitto e non è perché non gli importa."),
    n("Tira. Centro."),
    d('hina', "Ritiro « vigliacco ».")
  ],
  eff: [{ spirito: 5 }, { tratto: { testa: 3 } },
        { momento: 'Non hai risposto a Hina. Lei ha capito perché.' }],
  poi: { hub: true } });

sc({ id: 'c9_hina_d', luogo: 'Campo di tiro con l\'arco',
  righe: [
    tv({
      base:    "Posso farti una domanda scortese?",
      ironico: "Posso farti una domanda che ti farà venire voglia di tirarmi addosso una freccia?"
    }),
    d('hina', "Fammela."),
    tu("Cosa ti fa paura davvero: andare via, o scoprire che stare qui non ti bastava?"),
    n("Hina Kurosawa non risponde per undici secondi. Li conti."),
    d('hina', "…"),
    d('hina', "La seconda."),
    d('hina', "A maggio pensavo che il vostro sport fosse una cosa disordinata per gente a cui va bene il caso."),
    d('hina', "A ottobre ho segnato un gol al novantesimo contro la Wild e ho urlato in un modo che non avevo mai fatto in dodici anni di gare."),
    d('hina', "E la sera, a casa, ho pensato: allora l'arco non mi bastava."),
    d('hina', "E quel pensiero lì mi ha fatto stare male per tre giorni."),
    n("Rimette la freccia nella faretra senza tirarla."),
    d('hina', "Perché se l'arco non mi bastava, vuol dire che dodici anni li ho passati a fare una cosa che facevo bene invece di una cosa che volevo."),
    d('hina', "E adesso arriva una lettera che mi offre altri sei anni della stessa cosa, fatta meglio."),
    n("Ti guarda."),
    d('hina', "Grazie. Era la domanda giusta ed è stata cattiva."),
    d('hina', "Rispondo a gennaio.")
  ],
  eff: [{ spirito: 9 }, { tratto: { testa: 3 } }, { tratto: { cuore: 2 } },
        { momento: 'Hai chiesto a Hina la cosa che nessuno le aveva chiesto in dodici anni.' }],
  poi: { hub: true } });

sc({ id: 'c9_zero', luogo: 'Gabbiotto del custode — dopo le otto',
  righe: [
    d('nao', "C'è un'altra cosa nella busta della Nagano Higashi."),
    d('nao', "Propongono un'amichevole. Qui, il ventidue."),
    n("Zero, che stava attraversando il cortile con il sacco dei palloni, si ferma."),
    d('zero', "…no."),
    d('nao', "Zero—"),
    d('zero', "Ho detto no."),
    n("Mette giù il sacco. Non lo appoggia: lo lascia cadere."),
    d('zero', "Sapete perché mi sono trasferito qui? Non per la scuola. Non per gli zii."),
    d('zero', "Perché ad Amanome non arriva il giornale della prefettura il giorno stesso."),
    d('zero', "Arriva con due giorni di ritardo e nel frattempo la gente ha già smesso di parlarne."),
    d('zero', "Mi sono trasferito in un posto dove le notizie arrivano tardi. Questo è il motivo. È scemo e è quello."),
    d('amagai', "E adesso il giornale parla di voi."),
    d('zero', "E adesso il giornale parla di noi.")
  ],
  scelte: [
    { t: "«Allora non giochiamo. Rifiutiamo e basta.»", vai: 'c9_zero_a' },
    { t: "«Giochiamo. Ma tu quel giorno stai in panchina, se vuoi.»", vai: 'c9_zero_b' },
    { t: "«Giochiamo e tu giochi. Sono venuti a vedere te, e devono vedere te.»", vai: 'c9_zero_c',
      se: function (S, car, tr) { return (tr.schiena || 0) >= 6 || car === 'ostinato' || car === 'fuoco'; },
      nota: 'È dura, e potrebbe essere sbagliata.' }
  ] });

sc({ id: 'c9_zero_a', luogo: 'Gabbiotto del custode',
  righe: [
    tv({
      fuoco:   "Allora niente. Nao, rispondi di no. Non ci andiamo e non se ne parla più.",
      calmo:   "Rifiutiamo. Non c'è nessun motivo tecnico per giocarla e c'è un motivo grosso per non farlo.",
      ironico: "Rifiutiamo. Diciamo che avevamo il pullman impegnato. È anche vero, il pullman è una segheria.",
      chiuso:  "No. Rifiutiamo.",
      ostinato:"Rifiutiamo. E se insistono, rifiutiamo di nuovo."
    }),
    d('nao', "Va bene. Scrivo io."),
    d('zero', "…"),
    d('zero', "Aspetta."),
    n("Zero Naruse guarda il sacco dei palloni per terra."),
    d('zero', "Fammi passare la notte."),
    n("La mattina dopo arriva alle sei e venti — venti minuti prima, non dieci minuti dopo — e mentre si mette i guanti dice una frase sola."),
    d('zero', "Scrivi di sì."),
    tu("Zero—"),
    d('zero', "Hai detto no per me davanti a tutti senza pensarci."),
    d('zero', "Questa è la prima volta in due anni che qualcuno si mette in mezzo invece che dietro."),
    d('zero', "Quindi adesso la gioco, e non perché sono guarito. Perché mi sembra brutto non giocarla.")
  ],
  eff: [{ spirito: 10 }, { tratto: { cuore: 3 } },
        { momento: 'Hai rifiutato la partita per proteggere Zero. Lui ha voluto giocarla lo stesso.' }],
  poi: { hub: true } });

sc({ id: 'c9_zero_b', luogo: 'Gabbiotto del custode',
  righe: [
    tv({
      fuoco:   "Giochiamo, ma tu quel giorno stai fuori. Non è una punizione, è che decido io e ho deciso così.",
      calmo:   "Giochiamo. Tu in panchina. Benkei ha parato contro la Shuriken e può reggere novanta minuti.",
      ironico: "Giochiamo, e tu quel giorno fai il vice-allenatore. Ti do anche la cartellina.",
      chiuso:  "Giochiamo. Tu fuori.",
      ostinato:"Giochiamo. Tu decidi la mattina stessa e nessuno ti chiede niente."
    }),
    d('zero', "Quindi mi state mettendo in panchina."),
    tu("Ti sto dando una porta aperta."),
    d('zero', "…"),
    d('benkei', "Io la faccio."),
    n("Benkei Marui ha in mano un panino e lo dice con la bocca piena, il che toglie solennità e la rende più vera."),
    d('benkei', "Novanta minuti li reggo. Ne prendo quattro o cinque, però li reggo."),
    d('zero', "Ne prendi otto."),
    d('benkei', "Va bene, otto."),
    d('benkei', "Otto li ho presi anche io a maggio a Kuzuryū e sono ancora qui."),
    n("Zero lo guarda. È la prima volta che qualcuno gli dice quel numero senza pesarlo."),
    d('zero', "…deciderò la mattina.")
  ],
  eff: [{ spirito: 7 }, { tratto: { testa: 2 } }, { tratto: { cuore: 2 } },
        { momento: 'Hai lasciato a Zero la scelta di non giocare contro la sua vecchia scuola.' }],
  poi: { hub: true } });

sc({ id: 'c9_zero_c', luogo: 'Gabbiotto del custode',
  righe: [
    tv({
      fuoco:   "No. Giochi. Sono venuti a vedere te e devono vedere te, non una versione di te che si nasconde.",
      calmo:   "Giochi. Non perché te lo devi. Perché se non giochi, quel pomeriggio resta il pomeriggio che non hai giocato, e ti resta addosso più a lungo della partita.",
      ironico: "Giochi. Guarda che se stai fuori poi ti tocca stare seduto vicino a me per novanta minuti, e io parlo.",
      chiuso:  "Giochi.",
      ostinato:"Giochi. E se ne prendi otto ne prendi otto, e il ventitré ti alzi alle sei e mezza come tutti gli altri giorni."
    }),
    n("Zero Naruse ti guarda con un'espressione che non gli hai mai visto: non rabbia. Qualcosa di più scomodo."),
    d('zero', "Tu non sai cosa mi stai chiedendo."),
    tu("No."),
    d('zero', "E lo chiedi lo stesso."),
    tu("Sì."),
    d('amagai', "Naruse."),
    d('zero', "…"),
    d('amagai', "Ha ragione lui, e ti dico anche perché, e poi non ne parliamo più."),
    d('amagai', "Nel 1986 io ho lasciato andare Tanabe senza dirgli niente, perché mi sembrava di rispettarlo."),
    d('amagai', "Non lo stavo rispettando. Stavo evitando una conversazione."),
    d('amagai', "Il tuo capitano ha appena fatto la conversazione. È scomoda ed è meglio del silenzio."),
    n("Zero non risponde. Ma il giorno dopo, e quello dopo ancora, resta in campo mezz'ora in più a farsi tirare addosso i palloni da Hina."),
    n("E non chiede a nessuno di smettere.")
  ],
  eff: [{ spirito: 12 }, { tratto: { schiena: 4 } },
        { momento: 'Hai obbligato Zero a giocare contro la scuola che lo aveva chiamato Zero.' }],
  poi: { hub: true } });

sc({ id: 'c9_partita', luogo: 'Il campo dietro la palestra — 22 novembre',
  righe: [
    n("Il pullman della Nagano Higashi non entra nel piazzale della scuola e deve fermarsi sulla provinciale."),
    n("Scendono in ventiquattro, con le tute uguali e i borsoni uguali, e camminano fino al campo in fila per due."),
    n("Dietro la recinzione ci sono centoquaranta persone. Il paese ne ha quattrocentododici."),
    d('kenta', "Il loro portiere è Kaoru Ijūin. Secondo anno."),
    d('zero', "Lo so chi è. Era il mio secondo."),
    d('kenta', "…"),
    d('zero', "Due anni fa, in quella finale, quando ho preso l'ottavo, l'allenatore stava per farmi uscire e mettere lui."),
    d('zero', "Non ha fatto in tempo perché l'arbitro ha fischiato."),
    n("Dall'altra parte del campo un uomo in giacca da tuta blu guarda verso la vostra panchina e non si muove."),
    d('zero', "Quello è l'allenatore."),
    d('amagai', "…"),
    d('amagai', "Naruse. Una cosa sola."),
    d('zero', "Sì."),
    d('amagai', "Oggi in porta non ci sei tu contro di loro."),
    d('amagai', "Oggi in porta c'è la scuola media di Amanome, e tu sei quello che ci sta dentro."),
    d('amagai', "Se prendi gol, li prendiamo noi. È una differenza tecnica da niente e cambia tutto."),
    d('zero', "…"),
    d('zero', "Va bene.")
  ],
  poi: { partita: { avv: 'higashi', titolo: 'Amichevole — Amanome vs Nagano Higashi', minuti: 45,
    vinto: 'c9_v', perso: 'c9_p', pari: 'c9_x' } } });

sc({ id: 'c9_v', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("Centoquaranta persone. Il rumore che fanno quando finisce non lo dimenticherà nessuno di voi."),
    n("L'allenatore della Nagano Higashi attraversa il campo e si ferma davanti a Zero."),
    d('higashi_all', "Naruse."),
    d('zero', "Buonasera."),
    d('higashi_all', "Hai fatto una partita che non ti avevo mai visto fare."),
    d('zero', "…"),
    d('higashi_all', "Volevo dirti una cosa da due anni e non ho mai trovato il modo, quindi la dico male."),
    d('higashi_all', "Quella finale non l'hai persa tu."),
    d('higashi_all', "L'ho persa io, perché ti ho lasciato lì dentro da solo con una difesa che non esisteva più, e ti ho lasciato lì perché avevo paura di sembrare uno che molla."),
    d('higashi_all', "Avevi dodici anni."),
    n("Zero Naruse non dice niente. Ha ancora i guanti addosso e li stringe."),
    d('higashi_all', "Il giornale ha scritto zero. Io non l'ho corretto."),
    d('higashi_all', "Potevo, e non l'ho fatto."),
    n("Silenzio. Poi Zero fa una cosa che sorprende tutti: gli tende la mano."),
    d('zero', "Dieci."),
    d('higashi_all', "…come?"),
    d('zero', "Dieci parate su diciotto tiri. Le ha contate un mio compagno di squadra due anni fa, in un paese dove non arriva il segnale, prima ancora di conoscermi."),
    d('zero', "Se lo scrive da qualche parte, siamo pari.")
  ],
  eff: [{ spirito: 14 }, { exp: 910 }, { flag: 'zero_pari' }], poi: { capitolo: 10 } });

sc({ id: 'c9_p', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("Avete perso. Non era una partita che dovevate vincere: ottocento studenti contro trentotto."),
    n("Ma Zero Naruse è rimasto in piedi per novanta minuti davanti a centoquaranta persone che erano venute a vedere se sarebbe crollato."),
    n("E alla fine, quando l'arbitro ha fischiato, si è girato verso la recinzione invece che verso terra."),
    d('higashi_all', "Naruse."),
    d('zero', "Buonasera."),
    d('higashi_all', "Quella finale non l'hai persa tu. L'ho persa io e non l'ho mai detto a nessuno."),
    d('zero', "Lo so."),
    d('higashi_all', "…lo sai?"),
    d('zero', "L'ho capito quest'anno. Con undici che mi stanno davanti, gli stessi tiri diventano cinque."),
    d('zero', "Non ero io il problema. Era che ero solo."),
    n("L'allenatore della Nagano Higashi resta lì un momento di troppo."),
    d('higashi_all', "Hai un buon allenatore."),
    d('zero', "Ho un buon custode.")
  ],
  eff: [{ spirito: 12 }, { exp: 845 }, { flag: 'zero_pari' }], poi: { capitolo: 10 } });

sc({ id: 'c9_x', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("Un pareggio contro una scuola da ottocento studenti, in casa, davanti a centoquaranta persone."),
    d('zero', "Kenta."),
    d('kenta', "Dimmi."),
    d('zero', "Quante ne ho parate?"),
    d('kenta', "Nove su undici."),
    d('zero', "Scrivilo."),
    d('kenta', "L'ho già scritto."),
    d('zero', "…lo so. Volevo sentirtelo dire.")
  ],
  eff: [{ spirito: 13 }, { exp: 878 }, { flag: 'zero_pari' }], poi: { capitolo: 10 } });


sc({ id: 'c7_baseball', luogo: 'Campo grande — sabato pomeriggio',
  righe: [
    n("Gen Tonda vi aspetta al campo grande con il guantone infilato, come ad aprile."),
    d('tonda', "Ve lo ricordate cosa vi ho detto a maggio?"),
    tu("« Rifacciamola quando avrete perso contro qualcuno di vero, così tornate con l'umore giusto. »"),
    d('tonda', "Esatto. Solo che poi avete cominciato a vincere e la cosa mi ha rovinato la battuta."),
    d('tonda', "Quindi la rifacciamo adesso, prima che andiate al Football Frontier e diventiate insopportabili."),
    d('shinobu', "Siamo già insopportabili."),
    d('tonda', "Sì, ma ancora poco."),
    n("Il club di baseball di Amanome è sempre nove giocatori più due che si annoiano."),
    n("Sono cinque mesi che vi vedono uscire alle sei e mezza del mattino."),
    d('tonda', "Una cosa però ve la dico prima, che poi non me la ricordo."),
    d('tonda', "Ad aprile vi ho sfidati perché mi facevate pena."),
    d('tonda', "Undici che non sapevano tenere in piedi un club, e noi nove che il club lo tenevamo in piedi da tre anni senza vincere niente."),
    d('tonda', "Volevo vincere una volta contro qualcuno, capisci? Una."),
    tv({
      fuoco:   "E l'hai vinta? O l'ho vinta io? Non me lo ricordo mai.",
      calmo:   "Ad aprile eravamo la squadra giusta contro cui vincere. È un ruolo che abbiamo fatto bene.",
      ironico: "Tonda, se ti fa piacere possiamo ancora perdere. Ci riesce benissimo, è il nostro forte storico.",
      chiuso:  "Lo so.",
      ostinato:"E adesso vuoi vincerne una contro di noi che siamo diventati bravi. Bene: è più difficile e conta di più."
    }),
    d('tonda', "Adesso il club di baseball ha dodici iscritti."),
    d('kenta', "…dodici? Eravate undici."),
    d('tonda', "Tre primi anni si sono iscritti a settembre. Uno se n'è andato."),
    d('tonda', "Sono venuti perché hanno visto voi."),
    d('tonda', "E hanno scelto il baseball, il che mi ha fatto un piacere enorme, ma sono venuti perché hanno visto voi.")
  ],
  poi: { partita: { avv: 'baseball', titolo: 'Amichevole — Amanome vs Club di Baseball (ritorno)', minuti: 30,
    vinto: 'c7_dopo', perso: 'c7_dopo', pari: 'c7_dopo' } } });

sc({ id: 'c7_dopo', luogo: 'Campo grande — sera',
  righe: [
    d('tonda', "Ok. Adesso andate a giocare quel torneo."),
    tu("Tonda."),
    d('tonda', "Che c'è."),
    tv({
      fuoco:   "Grazie di aprile. Sul serio. Sei stato il primo a dirci di sì.",
      calmo:   "Ad aprile hai giocato con undici che non sapevano giocare. Non lo doveva fare nessuno e l'hai fatto tu.",
      ironico: "Se un giorno diventiamo famosi ti nomino da qualche parte. Piccolo, sotto, ma ti nomino.",
      chiuso:  "Grazie di aprile.",
      ostinato:"Voglio che sia scritto da qualche parte che la prima partita ce l'ha data il club di baseball."
    }),
    d('tonda', "…"),
    d('tonda', "Vaffanculo, dai. Ci vediamo lunedì a scuola.")
  ],
  eff: [{ spirito: 6 }, { exp: 455 }, { tratto: { cuore: 1 } }],
  poi: { capitolo: 8 } });

sc({ id: 'c8_1', luogo: 'Palazzetto di Matsumoto — girone D, primo giorno',
  righe: [
    n("Le qualificazioni prefetturali del Football Frontier si giocano su campi veri, con le linee dipinte e gli spogliatoi con le docce."),
    n("È la prima volta che entrate in uno spogliatoio con le docce. Ci mettono nove minuti a smettere di commentarle."),
    d('minoru', "C'è l'acqua calda!"),
    d('nao', "Minoru, c'è l'acqua calda anche a scuola."),
    d('minoru', "Sì ma qui esce subito!"),
    d('kenta', "Girone D. Tre partite: Occult, Wild, Shuriken. Passa la prima."),
    d('kenta', "Sono le stesse tre squadre del girone della Raimon, l'anno scorso. Ve l'avevo detto ad agosto."),
    d('daichi', "E la Raimon com'era andata?"),
    d('kenta', "Tre vittorie."),
    d('daichi', "Ah."),
    d('amagai', "Ascoltate, che poi non lo dico più."),
    d('amagai', "Da qui in avanti tutte le squadre che incontrate sono più forti di voi. Tutte, senza eccezione, fino alla fine."),
    d('amagai', "Non è pessimismo: sono i numeri. Loro pescano da mille studenti, voi da trentotto."),
    d('amagai', "Quindi smettete di chiedervi se siete più forti, perché non lo siete, e cominciate a chiedervi l'altra cosa."),
    tu("Quale?"),
    d('amagai', "Quanto siete disposti a stare in piedi."),
    d('amagai', "Quella lì non gliela pesca nessuno da mille studenti.")
  ],
  eff: [{ obiettivo: 'Passare il girone D: Occult, Wild, Shuriken.' }],
  poi: { hub: true } });


/* ============================================================
   ALIUS ACADEMY
   Nella seconda stagione dei giochi, squadre di ragazzi con
   poteri impossibili girano il Giappone sfidando le scuole e
   radendo al suolo quelle che perdono. La Raimon gira il paese
   con un pullman a raccogliere giocatori.
   Ad Amanome arrivano il quattro di dicembre.
   ============================================================ */

sc({ id: 'al_1', luogo: 'Il campo dietro la palestra — 4 dicembre, 15:40',
  righe: [
    n("Sono passate due settimane dalla partita con la Raimon."),
    n("Il quattro di dicembre, alle tre e quaranta del pomeriggio, sul campo dietro la palestra ci sono undici persone che non sono di Amanome."),
    n("Tute grigie, tutte uguali. Nessun borsone. Nessun pullman nel piazzale, e nessuno li ha visti arrivare dalla strada."),
    d('rei', "Chi sono?"),
    d('kenta', "Non sono di nessuna scuola della prefettura. Le conosco tutte."),
    n("Uno di loro si stacca dal gruppo. Ha i capelli verdi legati e l'aria di uno che ha già fatto questa cosa molte volte."),
    d('reize', "Scuola media di Amanome. Club di calcio, quattordici tesserati, fondato ad aprile."),
    d('reize', "Sei tu il capitano."),
    tv({
      fuoco:   "Chi siete e cosa ci fate sul nostro campo?",
      calmo:   "Sono io. E voi chi siete, visto che sapete già tutto di noi?",
      ironico: "Complimenti per le ricerche. Adesso però mi dite anche chi siete voi, che sarebbe la parte educata.",
      chiuso:  "Sì.",
      ostinato:"Sì. E quello è il nostro campo, quindi comincia tu a spiegarti."
    }),
    d('reize', "Alius Academy. Io sono Reize."),
    d('reize', "Vi sfidiamo. Adesso."),
    d('kenta', "Non si può. Serve un arbitro, serve—"),
    d('reize', "Non serve niente."),
    n("Alza una mano verso il campo e la neve che c'era sulla linea di fondo si solleva di trenta centimetri e resta ferma a mezz'aria."),
    n("Poi ricade tutta insieme, come se qualcuno l'avesse lasciata andare."),
    n("Nessuno dice niente. Minoru ha fatto due passi indietro senza accorgersene."),
    d('reize', "Se vinciamo, questo campo non c'è più."),
    d('reize', "Non è una minaccia: è la procedura. L'abbiamo già fatto a diciannove scuole da settembre."),
    d('shinobu', "…diciannove?"),
    d('reize', "Diciannove."),
    d('ayase', "Io chiamo la polizia."),
    d('reize', "Chiami chi vuole. Ci vogliono quaranta minuti da Ōmachi e noi ci mettiamo meno."),
    n("Amagai si è messo davanti a tutti senza che nessuno se ne accorgesse. Ha sessantotto anni e le mani in tasca."),
    d('amagai', "Ragazzo. Perché lo fate?"),
    d('reize', "…"),
    d('reize', "Perché ce lo chiedono."),
    n("Lo dice con una faccia che per un secondo non è la faccia di prima.")
  ],
  poi: 'al_2' });

sc({ id: 'al_2', luogo: 'Il campo dietro la palestra',
  righe: [
    d('amagai', "Non giocate."),
    d('hina', "Cosa?"),
    d('amagai', "Non giocate. Sono più forti di voi e non è nemmeno una questione di quanto: è che non è la stessa cosa."),
    d('amagai', "Il campo lo rifacciamo. L'abbiamo già fatto ad aprile."),
    n("Ha ragione. È la cosa sensata da fare, ed è la prima volta in nove mesi che Sōichirō Amagai vi dice di non scendere in campo."),
    d('daichi', "Capitano."),
    d('goro', "…"),
    d('rei', "Decidi tu."),
    n("Quattordici persone ti guardano. Dietro la recinzione ce ne sono altre trenta arrivate in dieci minuti, perché in un paese di quattrocentododici abitanti le notizie corrono a piedi.")
  ],
  scelte: [
    { t: "«Si gioca. Non è il campo: è che ce l'hanno chiesto e siamo una squadra.»", vai: 'al_3' },
    { t: "«Si gioca, ma nessuno si fa male per un prato. Se diventa brutta, ci fermiamo.»", vai: 'al_3' },
    { t: "«Si gioca perché ho voglia di vedere fin dove arriviamo.»", vai: 'al_3',
      se: function (S, car, tr) { return car === 'fuoco' || car === 'ostinato' || (tr.schiena || 0) >= 8; } },
    { t: "«Amagai ha ragione. Non giochiamo.»", vai: 'al_rifiuto' }
  ] });

sc({ id: 'al_rifiuto', luogo: 'Il campo dietro la palestra',
  righe: [
    tv({
      fuoco:   "…no. Non giochiamo. Andatevene.",
      calmo:   "No. Non c'è niente da guadagnare e c'è gente qui dietro che ha ottant'anni.",
      ironico: "Passo. Rimandiamo alla prossima invasione, magari con più preavviso.",
      chiuso:  "No.",
      ostinato:"No. E non mi interessa come suona."
    }),
    d('reize', "…"),
    d('reize', "Va bene."),
    n("Si girano tutti e undici insieme, con lo stesso movimento, e si incamminano verso la strada."),
    n("Poi Reize si ferma."),
    d('reize', "Non cambia niente, comunque."),
    d('reize', "Le scuole che non giocano le segnaliamo, e ci manda qualcun altro. Uno di quelli sopra di noi."),
    d('reize', "Quelli sopra di noi non chiedono."),
    n("Arrivano il giorno dopo, alle sei del mattino, quando sul campo non c'è nessuno."),
    n("Nessuno li vede. Non c'è nessuna partita da raccontare."),
    n("C'è solo che alle sei e mezza, quando arrivate per l'allenamento, il campo dietro la palestra non c'è più.")
  ],
  eff: [{ flag: 'campo_distrutto' }, { flag: 'non_giocato' }, { tratto: { testa: 3 } },
        { momento: 'Hai rifiutato la sfida di Alius Academy. Sono tornati comunque, di mattina presto.' }],
  poi: 'al_dopo' });

sc({ id: 'al_3', luogo: 'Il campo dietro la palestra — 4 dicembre',
  righe: [
    d('reize', "Bene."),
    n("Si dispongono senza parlarsi. Non fanno riscaldamento."),
    d('amagai', "…"),
    d('amagai', "Va bene. Allora ascoltatemi bene, che è l'ultima cosa che vi dico oggi."),
    d('amagai', "Non provate a stargli dietro, perché non ci riuscite."),
    d('amagai', "Fate la cosa che sapete fare voi e che loro non hanno mai avuto bisogno di imparare: state in piedi."),
    d('amagai', "Novanta minuti in undici, in piedi."),
    d('amagai', "È l'unica cosa che ho da darvi ed è tutto l'anno che funziona.")
  ],
  poi: { partita: { avv: 'gemini', titolo: 'Alius Academy — Amanome vs Gemini Storm', minuti: 45,
    vinto: 'al_v', perso: 'al_p', pari: 'al_p' } } });

sc({ id: 'al_v', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("La scuola media di Amanome ha battuto Gemini Storm."),
    n("Non applaude nessuno, perché nessuno dei quaranta dietro la recinzione ha capito bene cosa ha visto."),
    d('reize', "…"),
    d('reize', "Non era previsto."),
    tv({
      fuoco:   "Non era previsto un accidente. Vi abbiamo battuti.",
      calmo:   "Non era previsto da chi? Non da te. Tu hai giocato.",
      ironico: "Da noi non è previsto quasi mai niente. Ci si abitua.",
      chiuso:  "È successo lo stesso.",
      ostinato:"Adesso il campo resta dov'è."
    }),
    d('reize', "Il campo resta dov'è. Quella è la regola e la regola vale anche per noi."),
    n("Si gira per andarsene. Poi si ferma, come prima."),
    d('reize', "Posso chiederti una cosa?"),
    tu("Sì."),
    d('reize', "Quel campo lì. Chi l'ha falciato?"),
    tu("Noi. Ad aprile."),
    d('reize', "…"),
    d('reize', "Noi la nostra scuola non l'abbiamo costruita. Ce l'hanno data."),
    n("Se ne vanno a piedi lungo la provinciale, in fila per due, e spariscono dietro il tornante."),
    n("Quella notte nevica quaranta centimetri."),
    n("La mattina dopo, alle sei e mezza, il campo dietro la palestra non c'è più."),
    n("Non è la neve. Il terreno è aperto in due, le porte sono piegate come fili di ferro, e la parete est della palestra è caduta dentro."),
    n("Sulla linea di fondo, dove non cresce niente, c'è un biglietto tenuto fermo da un sasso."),
    n("« Non è stata una mia decisione. Mi dispiace. — R. »")
  ],
  eff: [{ flag: 'campo_distrutto' }, { flag: 'battuto_gemini' }, { spirito: 10 }, { exp: 1500 },
        { momento: 'Avete battuto Gemini Storm. Il giorno dopo il campo non c\'era più lo stesso.' }],
  poi: 'al_dopo' });

sc({ id: 'al_p', luogo: 'Il campo dietro la palestra — dopo',
  righe: [
    n("Non è stata una partita. È stata una dimostrazione, e voi eravate la cosa dimostrata."),
    n("Rikuto è a terra da sei minuti e non si è ancora rialzato del tutto. Zero ha i guanti strappati sul palmo destro."),
    n("Nessuno di loro ha mai corso a tutta velocità."),
    d('reize', "È finita."),
    n("Alza una mano verso il campo come aveva fatto con la neve."),
    d('amagai', "Aspetta."),
    n("Sōichirō Amagai attraversa il campo. Ci mette parecchio, perché ha sessantotto anni e il terreno è ghiacciato."),
    d('amagai', "Il campo dietro la palestra è del 1985. L'ho tracciato io con il gesso quando avevo diciassette anni."),
    d('amagai', "Adesso ha vent'anni di ruggine e un mese fa dodici ragazzi lo hanno falciato a mano."),
    d('amagai', "Fallo pure, ma guardalo mentre lo fai."),
    d('reize', "…"),
    n("Lo guarda. Lo guarda per un tempo che a tutti sembra lunghissimo."),
    n("Poi il terreno si apre in due lungo la linea di metà campo, le porte si piegano come fili di ferro, e la parete est della palestra cade dentro."),
    n("Ci mette quattro secondi."),
    n("Quando il rumore finisce, sulla linea di fondo, dove non cresce niente, c'è un biglietto tenuto fermo da un sasso."),
    n("« Non è stata una mia decisione. Mi dispiace. — R. »")
  ],
  eff: [{ flag: 'campo_distrutto' }, { spirito: 6 }, { exp: 1200 },
        { momento: 'Gemini Storm ha raso al suolo il campo dietro la palestra.' }],
  poi: 'al_dopo' });

sc({ id: 'al_dopo', luogo: 'Amanome — 5 dicembre',
  righe: [
    n("Non c'è un modo elegante di raccontare una cosa così."),
    n("Il campo dietro la palestra è un fosso. La palestra ha tre pareti. La scuola resta chiusa per una settimana e i trentotto studenti vanno a fare lezione nella sala del centro anziani, che è nuova e ha il riscaldamento."),
    n("La prefettura manda due ingegneri. Scrivono « cedimento del terreno dovuto al gelo » perché quello che è successo davvero non ha una casella nel modulo."),
    d('nao', "Ho fatto i conti della ricostruzione."),
    d('kenta', "Nao—"),
    d('nao', "Ho fatto i conti perché è il mio lavoro farli."),
    d('nao', "Il campo si rifà in primavera, con le braccia, come ad aprile. Quello non è il problema."),
    d('nao', "Il problema è la palestra, e quella non la rifà il paese: la rifà la prefettura, quando le gira."),
    d('rei', "Quindi il club?"),
    d('ayase', "Il club esiste. Ha quattordici tesserati e un professore che ha firmato."),
    d('ayase', "Solo che per un po' non ha dove giocare."),
    n("Il sette di dicembre, alle undici del mattino, un pullman si ferma sulla provinciale davanti alla scuola."),
    n("Non è il minibus della segheria. Ha una scritta sulla fiancata e una parabola sul tetto."),
    n("« INAZUMA CARAVAN »")
  ],
  poi: 'al_caravan' });

sc({ id: 'al_caravan', luogo: 'Piazzale della scuola — 7 dicembre',
  righe: [
    d('mark', "SIETE TUTTI VIVI?"),
    d('nelly', "Mark."),
    d('mark', "È una domanda importante!"),
    n("Mark Evans salta giù dal pullman prima che si sia fermato del tutto. Dietro di lui scendono Jude Sharp, Axel Blaze e altri sei che riconosci dalla partita di novembre."),
    d('mark', "Amanome è la ventunesima. Sono tre mesi che li rincorriamo e arriviamo sempre il giorno dopo."),
    d('jude', "Diciannove scuole a settembre e ottobre. Poi Raimon."),
    tu("…anche la vostra?"),
    d('jude', "La nostra è stata la prima. Il quattordici di settembre."),
    d('jude', "Della scuola media Raimon adesso è in piedi l'ala nord e basta."),
    n("Lo dice come si dicono le cose che si sono già dette tante volte per poterle sopportare."),
    d('mark', "Per questo giriamo. Non possiamo batterli in undici: siamo undici di una scuola sola."),
    d('mark', "Quindi andiamo in giro a cercare gente. Uno per scuola, a volte due."),
    d('mark', "Gente che ha giocato contro di loro e si è rialzata."),
    n("Si gira verso di te. Ha ancora la fascia arancione in testa, a dicembre, con meno tre gradi."),
    d('mark', "Vieni con noi?"),
    n("Silenzio nel piazzale."),
    d('hina', "…"),
    d('kenta', "Aspetta. Aspetta un attimo. Stai chiedendo al nostro capitano di venire via."),
    d('mark', "Sì."),
    d('kenta', "Per quanto?"),
    d('mark', "Non lo so. Finché non finisce."),
    d('nelly', "Il consiglio scolastico della Raimon copre il trasferimento temporaneo. È tutto regolare, c'è il modulo."),
    d('nao', "Fatemi vedere il modulo."),
    d('nelly', "…prego?"),
    d('nao', "Il modulo. Sono la dirigente di questo club e voglio leggerlo."),
    n("Nelly Raimon guarda questa ragazza di quattordici anni che le sta chiedendo la documentazione, e per la prima volta in tre mesi sorride.")
  ],
  poi: 'al_scelta' });

sc({ id: 'al_scelta', luogo: 'Piazzale della scuola',
  righe: [
    n("Sono tutti lì. Rei, Gorō, Hina, Zero, Minoru, Kenta, Yuki, Aoi, Shinobu, Rikuto, Benkei, Daichi, Nao."),
    n("Ad aprile eravate in due."),
    n("Adesso c'è un pullman che ti chiede di salirci, e un campo che non c'è più, e tredici persone che non ti stanno dicendo cosa fare perché aspettano che lo dica tu.")
  ],
  scelte: [
    { t: "«Vengo. Ma torno.»", vai: 'al_parto' },
    { t: "«Vengo, e ci vado per voi: quelli lì hanno buttato giù il nostro campo.»", vai: 'al_parto' },
    { t: "«Non vengo. Il mio posto è qui.»", vai: 'al_resto' },
    { t: "«Decidete voi. Se uno di voi dice no, resto.»", vai: 'al_squadra',
      se: function (S, car, tr) { return (tr.cuore || 0) >= 6 || car === 'chiuso'; },
      nota: 'Non è indecisione: è che non è solo tua.' }
  ] });

sc({ id: 'al_squadra', luogo: 'Piazzale della scuola',
  righe: [
    tv({
      fuoco:   "Decidete voi! Io da solo non ci vado e non ci penso nemmeno!",
      calmo:   "Non decido io. Questo club l'abbiamo fatto in quattordici e questa è una cosa che riguarda tutti e quattordici.",
      ironico: "Facciamo una votazione. È la cosa più noiosa che ci sia e mi sembra il momento giusto.",
      chiuso:  "Decidete voi. Se uno dice no, resto.",
      ostinato:"Se uno solo di voi dice no, io resto qui e non se ne parla più."
    }),
    n("Rei alza la mano per primo, e non è nemmeno una votazione, e la alza lo stesso."),
    d('rei', "Vai."),
    d('goro', "…vai."),
    d('hina', "Vai. E impara qualcosa, che qui hai finito."),
    d('minoru', "Vai!"),
    d('kenta', "Statisticamente sei il nostro giocatore migliore e perderemo di più. Vai lo stesso."),
    d('shinobu', "Vai, e poi mi racconti tutto in ordine cronologico perché ci devo scrivere una cosa."),
    d('rikuto', "…vai."),
    d('benkei', "Vai. Ti tengo un panino."),
    d('yuki', "Vai."),
    d('aoi', "Vai."),
    d('zero', "Vai."),
    d('daichi', "Vai. E se torni e il campo non è pronto, prenditela con me."),
    n("Nao non dice niente. Apre il quaderno, quello del club, e alla riga del tuo nome scrive una parola sola."),
    d('nao', "« In prestito »."),
    d('nao', "Non « trasferito ». In prestito. È una parola diversa e la scelgo io perché tengo io i registri.")
  ],
  eff: [{ spirito: 20 }, { tratto: { cuore: 4 } },
        { momento: 'Non hai deciso da solo se partire. Te l\'hanno detto loro, uno per uno.' }],
  poi: 'al_parto' });

sc({ id: 'al_resto', luogo: 'Piazzale della scuola',
  righe: [
    tv({
      fuoco:   "No. Io da qui non mi muovo. Il campo è nostro e lo rifacciamo noi.",
      calmo:   "No. Grazie, davvero. Ma se me ne vado adesso, questo club non arriva a marzo.",
      ironico: "Vi ringrazio ma ho un impegno: devo rifare un prato.",
      chiuso:  "Resto.",
      ostinato:"No. Sono partito da un prato ad aprile e ci resto finché non torna un campo."
    }),
    d('mark', "…"),
    d('mark', "Va bene!"),
    d('nelly', "Va bene? Mark, siamo venuti fin quassù—"),
    d('mark', "Ha detto che deve rifare il campo. È la risposta giusta."),
    d('mark', "Il campo viene prima."),
    n("Torna verso il pullman. Poi si gira, come fanno tutti in questo paese."),
    d('mark', "Però una cosa te la dico, e poi salgo."),
    d('mark', "Quelli lì torneranno. Non da voi: dappertutto."),
    d('mark', "E quando ci saremo in mezzo noi e non basteremo, io torno quassù."),
    d('mark', "E quella volta non te lo chiedo."),
    n("Il pullman riparte verso il tornante."),
    n("Il campo dietro la palestra torna a essere un prato con dentro due cose di ferro storte, e voi ricominciate da lì, che è il posto da cui avete cominciato la prima volta."),
    n("Ma tre giorni dopo arriva una busta della Raimon con dentro un modulo, un orario di allenamento e un biglietto scritto a mano che dice: « quando vuoi »."),
    d('nao', "Lo metto nel raccoglitore."),
    d('nao', "In fondo, dove tengo le cose che non buttiamo.")
  ],
  eff: [{ flag: 'rimasto' }, { flag: 'caravan_aperto' }, { sblocca: 'caravan' }, { spirito: 14 },
        { tratto: { schiena: 5 } },
        { momento: 'Hai detto di no alla Raimon per restare a rifare il campo.' }],
  poi: 'c6_epilogo' });

sc({ id: 'al_parto', luogo: 'Piazzale della scuola — 7 dicembre, 14:20',
  righe: [
    tv({
      fuoco:   "Vengo. Ma torno, chiaro? Torno.",
      calmo:   "Vengo. A una condizione che riguarda solo me: che questo resti il mio club anche mentre non ci sono.",
      ironico: "Vengo. Ho sempre voluto vedere il mare e invece vado a farmi picchiare dagli alieni, ma vengo.",
      chiuso:  "Vengo. E torno.",
      ostinato:"Vengo, e quando è finita torno qui e finisco quello che ho cominciato ad aprile."
    }),
    d('mark', "BENE!"),
    d('nelly', "Mark, sono le due e venti, dobbiamo essere a Nagano per le sei."),
    d('mark', "Sì! Prendi la roba!"),
    n("Ci metti undici minuti a fare la borsa, perché non hai quasi niente da portare."),
    n("Sul piazzale, mentre sali, Amagai ti dà una cosa."),
    n("È il quaderno del 1985. Quello con gli undici nomi scritti a mano."),
    d('amagai', "Non è un regalo. È un prestito e lo rivoglio."),
    tu("Perché me lo dà?"),
    d('amagai', "Perché nel 1986 quelli che se ne sono andati non hanno portato via niente."),
    d('amagai', "E non sono più tornati."),
    d('amagai', "Tu porti via una cosa che è di qui. Così ti tocca riportarla."),
    n("Il pullman parte alle due e trentuno. Dal finestrino di dietro si vede il piazzale con tredici persone dentro, e dietro il piazzale il tetto della palestra a tre pareti, e dietro ancora la cresta del monte Kurogane con la neve."),
    n("Rei corre dietro al pullman per una cinquantina di metri, poi si ferma perché non ce la fa più, ed è esattamente quello che ti aspettavi che facesse."),
    d('mark', "Ehi."),
    tu("Sì?"),
    d('mark', "Come si chiama la tua squadra?"),
    n("Ci pensi un secondo, e poi glielo dici, e per il resto del viaggio nessuno ti chiede altro."),
    n("— Da qui in avanti giochi con la Raimon."),
    n("Non sei il capitano, non è il tuo campo e non conosci nessuno."),
    n("Sei uno degli undici, e devi guadagnarti il posto come tutti gli altri.")
  ],
  eff: [{ flag: 'partito' }, { flag: 'caravan_aperto' }, { sblocca: 'caravan' }, { sblocca: 'amichevoli' },
        { spirito: 12 }, { exp: 800 },
        { momento: 'Sei salito sul pullman della Raimon con il quaderno del 1985 nella borsa.' }],
  poi: 'al_raimon' });

sc({ id: 'al_raimon', luogo: 'Inazuma Caravan — statale 19, verso nord',
  righe: [
    n("Il pullman della Raimon ha nove cuccette, un tavolo che si ribalta e un allenatore che dorme seduto."),
    d('hillman', "Tu sei quello di Amanome."),
    tu("Sì."),
    d('hillman', "Trentotto studenti. E il tuo custode è Sōichirō Amagai."),
    n("Alzi la testa."),
    d('hillman', "Secondo posto alla prefettura di Nagano, 1985. Terzo da sinistra nella fotografia."),
    d('hillman', "Io giocavo a Shizuoka, quell'anno. Ci hanno parlato di voi per un mese."),
    n("Coach Hillman chiude gli occhi e sembra che abbia finito. Poi non ha finito."),
    d('hillman', "Sharp. Raccontagli da dove veniamo, che se lo faccio io ci metto un'ora."),
    d('jude', "Da settembre."),
    d('jude', "Il quattordici settembre Gemini Storm è arrivata alla scuola media Raimon e ha chiesto una partita, esattamente come da voi."),
    d('jude', "Abbiamo perso e della Raimon è rimasta in piedi l'ala nord."),
    d('jude', "Quello è stato il primo capitolo di questa storia, se vuoi chiamarla così."),
    tu("E il secondo?"),
    d('jude', "Il secondo è la parte che non capiamo ancora."),
    d('jude', "C'è un pallone nero che gira. Compare dove è appena passata Alius Academy, e sparisce prima che qualcuno lo raccolga."),
    d('jude', "E ci sono uomini in giacca che si fanno vedere vicino alle scuole colpite, e che con dei ragazzi con i poteri non c'entrano niente."),
    d('nelly', "Mio padre dice che il Primo Ministro ha ricevuto una proposta. E che non l'ha rifiutata."),
    d('jude', "Ecco. Quello è il secondo capitolo, ed è ancora aperto."),
    n("Guardi il pullman: nove cuccette, undici persone, un allenatore che dorme seduto."),
    tv({
      fuoco:   "E l'attaccante? Quello del tornado di fuoco. Dov'è?",
      calmo:   "Manca qualcuno. A novembre da noi eravate in dodici e c'era anche l'attaccante numero dieci.",
      ironico: "Scusate se lo chiedo il primo giorno: avete perso un pezzo? Quello che tira le fiamme.",
      chiuso:  "Manca Axel Blaze.",
      ostinato:"Prima di dormire voglio saperlo: dov'è finito il vostro numero dieci?"
    }),
    n("Nessuno risponde subito. Mark Evans smette di fare quello che stava facendo."),
    d('mark', "Axel se n'è andato."),
    tu("Perché?"),
    d('mark', "Perché ha una sorella in ospedale e un padre che gli ha fatto scegliere."),
    d('mark', "E perché quando la scuola è caduta, ha pensato che fosse colpa del calcio."),
    d('jude', "Torna."),
    d('mark', "Torna!"),
    d('jude', "Non l'ho detto per consolarti. L'ho detto perché lo penso."),
    n("Ti addormenti sulla cuccetta di sopra con il quaderno del 1985 sotto il cuscino, mentre fuori dal finestrino passa un Giappone che non hai mai visto."),
    n("Alle sei del mattino Coach Hillman ferma il pullman in un'area di sosta e sveglia tutti."),
    d('hillman', "Da qui in avanti la strada si divide, e voglio che lo decida chi è salito per ultimo.")
  ],
  poi: 'al_versione' });

sc({ id: 'al_versione', luogo: 'Area di sosta — statale 19, sei del mattino',
  righe: [
    d('hillman', "Alius Academy ha cinque squadre. Non le incontreremo tutte: dipende da dove passiamo."),
    d('hillman', "Se saliamo dritti a nord, verso Hokkaido, prima o poi ci troviamo davanti Diamond Dust: giocano sul ghiaccio e il loro capitano si chiama Gazel."),
    d('hillman', "Se pieghiamo verso ovest e scendiamo, incontriamo Prominence, che è la squadra di Burn e brucia il campo prima di giocarci sopra."),
    d('jude', "Le due strade portano allo stesso posto. Cambia solo chi ci trovi in mezzo."),
    d('mark', "E cambia anche un'altra cosa!"),
    d('nelly', "Mark, non è il momento di—"),
    d('mark', "Cambia che se andiamo a nord passiamo da Hokkaido e io voglio andare a Hokkaido."),
    d('jude', "Ci passiamo comunque, Mark."),
    d('mark', "Ah. Allora niente."),
    n("Coach Hillman apre la cartina sul cofano. È una cartina di carta, piegata male, con le strade segnate a penna."),
    d('hillman', "Decidi tu. È il tuo primo giorno e sei l'unico qui dentro che non ha ancora perso niente in questa storia."),
    n("(Come nei due giochi: la strada che scegli decide quale squadra di Alius Academy incontrerai. L'altra si può affrontare dopo, alla fine.)")
  ],
  scelte: [
    { t: "🔥  Tempesta di Fuoco — verso ovest, incontro a Prominence", vai: 'al_ver_fuoco',
      nota: 'La strada che segue Axel Blaze.' },
    { t: "❄️  Bufera di Neve — dritti a nord, incontro a Diamond Dust", vai: 'al_ver_neve',
      nota: 'La strada che segue Shawn Froste.' }
  ] });

sc({ id: 'al_ver_fuoco', luogo: 'Area di sosta',
  righe: [
    tv({
      fuoco:   "Ovest. Se il vostro numero dieci è là fuori, passiamo di là.",
      calmo:   "Ovest. Se torna qualcuno, torna dove abita, e Axel Blaze non abita a Hokkaido.",
      ironico: "Ovest. Ho vissuto tredici anni in mezzo alla neve, ne ho abbastanza.",
      chiuso:  "Ovest.",
      ostinato:"Ovest. E ce lo riprendiamo, il vostro dieci."
    }),
    d('hillman', "Ovest."),
    d('mark', "…grazie."),
    n("Piega la cartina lungo la linea che va verso ovest, e non la riapre più per tutto il viaggio.")
  ],
  eff: [{ versione: 'fuoco' }, { momento: 'Hai scelto la strada di ovest: Tempesta di Fuoco.' }],
  poi: 'c6_epilogo' });

sc({ id: 'al_ver_neve', luogo: 'Area di sosta',
  righe: [
    tv({
      fuoco:   "Nord! Se giocano sul ghiaccio andiamo a giocare sul ghiaccio!",
      calmo:   "Nord. In montagna ci sono cresciuto: è l'unico posto dove il vantaggio ce l'ho io.",
      ironico: "Nord. Almeno il freddo lo so già fare.",
      chiuso:  "Nord.",
      ostinato:"Nord. Dritti, senza girarci intorno."
    }),
    d('hillman', "Nord."),
    d('mark', "Hokkaido!"),
    d('nelly', "Mark, sono milleduecento chilometri."),
    d('mark', "HOKKAIDO!")
  ],
  eff: [{ versione: 'neve' }, { momento: 'Hai scelto la strada di nord: Bufera di Neve.' }],
  poi: 'c6_epilogo' });


/* ============================================================
   ATTO SECONDO — INAZUMA ELEVEN 2
   I dieci capitoli di «Tempesta di Fuoco» e «Bufera di Neve»,
   dal primo all'ultimo, con dentro il tuo personaggio.
   Lo schema è quello del gioco: Alius Academy arriva in una città,
   la scuola di quella città scende in campo per prima e perde,
   e solo dopo tocca alla Raimon.
   ============================================================ */

/* ------------------------------------------------------------
   CAPITOLO 1 — LA RAIMON IN ROVINA
   ------------------------------------------------------------ */

sc({ id: 'g1_1', luogo: 'Inazuma — quello che era la scuola media Raimon, 8 dicembre',
  righe: [
    n("Il pullman ci mette diciannove ore ad arrivare a Inazuma, e le ultime due le fa a passo d'uomo perché la strada davanti alla scuola è chiusa."),
    n("Non è chiusa per lavori. È chiusa perché ci sono ancora pezzi di scuola in mezzo."),
    n("La scuola media Raimon aveva tre piani. Adesso ne ha uno e mezzo, e il mezzo è quello che ha ceduto."),
    n("In tutta la sua storia il Giappone non ha mai avuto un terremoto che colpisse un edificio solo dentro un isolato."),
    d('mark', "Eccoci."),
    d('mark', "Scusa il disordine."),
    tv({
      fuoco:   "Non è divertente.",
      calmo:   "Non fa ridere.",
      ironico: "Fai battute anche adesso?",
      chiuso:  "…",
      ostinato:"Smettila di scherzarci sopra."
    }),
    d('mark', "Lo so."),
    d('mark', "È che se non ci scherzo devo guardarla."),
    n("Sul piazzale ci sono undici ragazzi seduti su tre panchine e una branda di plastica presa dalla palestra."),
    n("Sei di loro hanno qualcosa fasciato."),
    d('celia', "Loro sono la Raimon. O quello che ne è rimasto."),
    d('celia', "Io sono Celia Hills. Tengo il quaderno."),
    d('celia', "Ho scritto i nomi di tutti quelli che oggi non possono giocare, e mi sono già dovuta girare la pagina."),
    d('jude', "Mia sorella tiene le statistiche. Io tengo le persone."),
    d('jude', "In questo momento sono ventidue meno undici."),
    n("Coach Hillman è in piedi in mezzo al piazzale con le mani dietro la schiena e non guarda la scuola: guarda voi.")
  ],
  poi: 'g1_2' });

sc({ id: 'g1_2', luogo: 'Il piazzale — le presentazioni',
  righe: [
    d('hillman', "Tu saresti quello di Amanome."),
    tu("Sì."),
    d('hillman', "Quanti studenti?"),
    tu("Trentotto."),
    d('hillman', "E adesso?"),
    tv({
      fuoco:   "Trentotto. Sono tutti vivi. La scuola no.",
      calmo:   "Trentotto. Nessuno si è fatto niente. L'edificio sì.",
      ironico: "Trentotto studenti e zero aule. Un ottimo rapporto insegnanti-alunni.",
      chiuso:  "Trentotto. La scuola non c'è più.",
      ostinato:"Trentotto, e ci torno."
    }),
    d('hillman', "…"),
    d('hillman', "Fammi vedere le mani."),
    n("Gliele fai vedere. Le guarda per tre secondi come si guarda una fattura."),
    d('hillman', "Bene. Adesso ascolta, perché te lo dico una volta sola e poi non te lo ripeto mai più."),
    d('hillman', "Tutto quello che sai fare, tu l'hai imparato in un prato dietro una palestra con dieci ragazzi che conosci dall'asilo."),
    d('hillman', "Qui non c'è quel prato e non ci sono quei dieci."),
    d('hillman', "Le tue tecniche funzionavano perché sapevi dove sarebbero stati loro. Qui non lo sai."),
    tv({
      fuoco:   "Allora le rifaccio.",
      calmo:   "Va bene. Ricomincio.",
      ironico: "Mi sta dicendo che sono tornato in prima media.",
      chiuso:  "Capito.",
      ostinato:"Le rifaccio, ma le rifaccio mie."
    }),
    d('hillman', "Esatto."),
    d('hillman', "Riparti da due. Come tutti."),
    n("— Le tue tecniche sono state azzerate. —", 'urlo'),
    n("Restano due tecniche di base adatte al tuo ruolo. Tutto il resto lo imparerai di nuovo, un capitolo alla volta, come gli altri."),
    n("Il quaderno del 1985 è ancora nella borsa. Quello non te lo può azzerare nessuno.")
  ],
  eff: [{ resetTec: true }, { flag: 'atto2' },
        { momento: 'Coach Hillman ti ha azzerato le tecniche il primo giorno.' }],
  poi: 'g1_3' });

sc({ id: 'g1_3', luogo: 'Palestra della Raimon — la sera',
  righe: [
    n("Dormite in palestra, in fila, con i materassini dell'educazione fisica."),
    n("Alle undici e mezza arriva Nelly Raimon con un telefono in mano e la faccia di chi ha appena sentito una cosa al telegiornale."),
    d('nelly', "Kasamino."),
    d('jude', "Cosa c'è a Kasamino?"),
    d('nelly', "C'era una scuola media. Adesso c'è un cratere e undici ragazzi all'ospedale."),
    d('nelly', "Li hanno sfidati a calcio, hanno perso, e poi hanno tirato giù l'edificio."),
    d('mark', "…"),
    d('mark', "Andiamo."),
    d('nelly', "Mark, sono le undici e mezza di sera e voi siete sei."),
    d('mark', "Siamo undici se ci mettiamo quelli che si reggono in piedi."),
    d('kevin', "Io mi reggo in piedi."),
    d('jack', "Io un po' meno."),
    d('jack', "Ma vengo."),
    n("Il pullman parte alle undici e cinquanta. Sul finestrino di dietro c'è ancora scritto « Inazuma Caravan » con lo scotch da pacchi.")
  ],
  poi: 'g1_4' });

sc({ id: 'g1_4', luogo: 'Kasamino — 9 dicembre, mattina',
  righe: [
    n("A Kasamino il campo della scuola c'è ancora. È l'unica cosa che c'è ancora."),
    n("In mezzo al campo ci sono undici ragazzi in tuta bianca con una specie di pietra al collo. Uno di loro ha i capelli verdi ed è quello che parla."),
    d('reize', "Ah. Siete voi."),
    d('reize', "I campioni nazionali."),
    d('reize', "Vi aspettavo ieri, sinceramente."),
    d('mark', "Chi siete?"),
    d('reize', "Gemini Storm. Seconda squadra di Alius Academy."),
    d('reize', "«Seconda» come «ce ne sono altre più forti», non come «siamo arrivati secondi»."),
    n("Sulla linea di fondo, seduto per terra, c'è un ragazzo con la maglia di Kasamino e un braccio al collo. Guarda il campo e non guarda voi."),
    d('kasa', "Non fatelo."),
    d('mark', "Come?"),
    d('kasa', "Noi abbiamo detto di sì. Ieri. Alle due del pomeriggio."),
    d('kasa', "Alle tre non c'era più il primo piano."),
    tv({
      fuoco:   "Quanto avete perso?",
      calmo:   "Come è finita?",
      ironico: "Immagino che il risultato non fosse in bilico.",
      chiuso:  "Il risultato.",
      ostinato:"Dimmi il risultato, per favore."
    }),
    d('kasa', "Diciannove a zero."),
    d('kasa', "Al ventesimo ci siamo seduti tutti e undici e abbiamo smesso."),
    d('kasa', "Non perché eravamo stanchi. Perché avevamo capito."),
    d('reize', "È stata una partita corretta. Hanno accettato loro."),
    d('reize', "Adesso accettate voi, o vi devo far vedere perché conviene?"),
    d('mark', "Accettiamo."),
    d('jude', "Mark—"),
    d('mark', "Jude. Se non giochiamo noi, dopo di noi c'è un'altra scuola."),
    d('jude', "…"),
    d('jude', "Va bene. Ma ricordati che oggi non ci interessa vincere."),
    d('jude', "Ci interessa capire come sono fatti.")
  ],
  poi: { hub: true } });

sc({ id: 'g1_partita', luogo: 'Kasamino — campo della scuola',
  righe: [
    n("Sei in campo con la maglia della Raimon addosso. Non è la tua, è di uno che oggi è in ospedale, e ti sta larga."),
    d('mark', "Ehi. Nuovo."),
    d('mark', "Come si chiama la tua scuola?"),
    tu("Amanome."),
    d('mark', "Bene. Oggi giochi anche per quella."),
    n("Il primo pallone lo tocca Gemini Storm e non lo lascia più per undici minuti.")
  ],
  poi: { partita: { avv: 'gemini_alius', titolo: 'Alius Academy — Raimon vs Gemini Storm', minuti: 45, caravan: true,
    vinto: 'g1_fine', perso: 'g1_fine', pari: 'g1_fine' } } });

sc({ id: 'g1_fine', luogo: 'Kasamino — fischio finale',
  righe: [
    n("Non è una partita. È una cosa che vi succede addosso per quarantacinque minuti."),
    n("Steve Grim esce al dodicesimo. Sam Kincaid al diciannovesimo. Max Carson al ventiquattresimo, portato via in due."),
    n("Jim Wraith prende in pieno un tiro che non era diretto a lui. Timmy Sanders resta a terra e ci resta."),
    n("Alla fine siete in otto e Mark Evans para da undici minuti in ginocchio perché in piedi non ci sta più."),
    d('reize', "Basta così."),
    d('reize', "Non è divertente."),
    d('mark', "…non… abbiamo… finito…"),
    d('reize', "Voi avete finito da mezz'ora. Siete solo rimasti in piedi."),
    n("Se ne vanno a piedi, in fila per due, come una gita scolastica."),
    n("Sul campo restate voi, cinque barelle e un tabellone che nessuno ha il coraggio di guardare."),
    d('celia', "…lo devo scrivere lo stesso?"),
    d('jude', "Scrivilo."),
    d('celia', "Venti a zero."),
    n("— Steve Grim, Sam Kincaid, Max Carson, Jim Wraith e Timmy Sanders sono fuori. —", 'urlo'),
    n("Cinque nomi in meno sul pullman, e nessuno che li sostituisca."),
    d('mark', "Ehi."),
    d('mark', "Nuovo."),
    d('mark', "Tu perché sei ancora qui?"),
    tv({
      fuoco:   "Perché mi hanno buttato giù la scuola e non ho un altro posto dove andare a rispondere.",
      calmo:   "Perché se me ne vado adesso, poi devo raccontare a tredici persone che me ne sono andato.",
      ironico: "Perché il pullman per Amanome passa due volte al giorno e l'ho perso.",
      chiuso:  "Perché sì.",
      ostinato:"Perché ho detto che venivo. E quando dico una cosa la faccio."
    }),
    d('mark', "…"),
    d('mark', "Va bene."),
    d('mark', "Allora domani ti insegno una cosa."),
    d('mark', "Non è granché. Ma è mia, e le cose mie le do via.")
  ],
  eff: [{ ferite: 1 }, { imparoAtto2: 1 }, { exp: 420 }, { spirito: -10 },
        { obiettivo: 'Capire come sono fatti, prima di riprovarci.' },
        { momento: 'Eri in campo il giorno del 20-0 di Kasamino.' }],
  poi: { capitolo: 12 } });


/* ------------------------------------------------------------
   CAPITOLO 2 — LA CONGIURA DELLA PALLA NERA
   ------------------------------------------------------------ */

sc({ id: 'g2_1', luogo: 'Inazuma Caravan — 11 dicembre',
  righe: [
    n("Sul pullman, in mezzo al corridoio, c'è un pallone nero."),
    n("Lo hanno lasciato loro a Kasamino. È un pallone da calcio normale, della misura giusta, e nessuno riesce a spostarlo con un piede."),
    d('jack', "Ci ho provato ieri sera."),
    d('jack', "Mi fa male ancora adesso."),
    d('mark', "Fammi provare."),
    n("Mark Evans lo prende con due mani. Riesce a staccarlo da terra di due centimetri, poi lo rimette giù e si siede."),
    d('mark', "…quelli lì lo calciavano."),
    d('mark', "Come se fosse un pallone."),
    d('jude', "Perché per loro è un pallone."),
    d('jude', "La differenza non è la palla. È chi la tocca."),
    d('william', "Ho fatto due conti."),
    d('william', "Se il pallone pesa quello che sembra pesare, il tiro che ha steso Jim viaggiava a una velocità che non è possibile."),
    d('william', "Quindi o sbaglio io, o non è possibile."),
    d('jude', "Terza ipotesi: è possibile e non ci piace."),
    n("La radio del pullman è accesa. Alle sette e trenta il giornale radio dice una cosa che vi fa alzare tutti insieme.")
  ],
  poi: 'g2_2' });

sc({ id: 'g2_2', luogo: 'Nara — parco di Nara, 12 dicembre',
  righe: [
    n("Nel parco di Nara ci sono i cervi, un lago, un padiglione di legno del Seicento e, da stanotte, un cratere dove c'era una statua."),
    n("La polizia ha transennato tutto. Dentro le transenne c'è una ragazza in tuta che sta litigando con quattro agenti in giacca."),
    d('victoria', "Io entro."),
    d('victoria', "È mio padre."),
    n("Sousuke Zaizen, primo ministro del Giappone, è stato portato via da questo parco alle due e dieci di stanotte da undici ragazzini in tuta bianca."),
    n("Nessuno lo sta dicendo in televisione con queste parole."),
    d('victoria', "Voi siete la Raimon."),
    d('mark', "Sì!"),
    d('victoria', "Vi hanno fatti a pezzi a Kasamino."),
    d('mark', "…sì."),
    d('victoria', "Bene. Allora siete gli unici che ci hanno provato."),
    n("Si chiama Victoria Vanguard. Gioca in difesa da quando ha sette anni, ha una guardia del corpo che la perde tre volte a settimana, e in questo momento è più arrabbiata di chiunque altro dentro questo parco."),
    { chi: 'victoria', t: "Tu. Quello che non ha la faccia da Raimon." },
    { chi: 'victoria', t: "Vieni dentro con me?" },
    n("Le transenne sono alte un metro e ci sono quattro agenti. Nessuno ti obbliga.")
  ],
  scelte: [
    { t: "«Vengo.» Scavalchi.", vai: 'g2_3', eff: [{ tratto: { schiena: 3 } }, { flag: 'con_victoria' }] },
    { t: "«Aspetta.» Chiedi prima a un agente, e ti dice di no.", vai: 'g2_3', eff: [{ tratto: { testa: 3 } }] },
    { t: "«Vengo, ma da dietro.» Il parco ha un cancello di servizio.", vai: 'g2_3',
      se: function (S) { return (S.io && S.io.tratti && S.io.tratti.testa) >= 4; },
      eff: [{ tratto: { testa: 4 } }, { flag: 'con_victoria' }] }
  ] });

sc({ id: 'g2_3', luogo: 'Nara — dentro le transenne',
  righe: [
    n("Nel cratere non c'è niente da vedere. C'è una pietra piccola, azzurra, con dentro una luce che non dovrebbe esserci."),
    d('victoria', "Che cos'è?"),
    d('jude', "È quello che portano al collo."),
    d('jude', "Lasciala dov'è."),
    d('victoria', "Perché?"),
    d('jude', "Perché a Kasamino chi la porta ha tirato giù una scuola."),
    n("Alle undici e venti arrivano loro. In fila per due, come una gita scolastica."),
    d('reize', "Ancora voi."),
    d('reize', "Sinceramente pensavo aveste capito."),
    d('victoria', "Dov'è mio padre?"),
    d('reize', "Al sicuro. Sta bene. È perfino di buon umore, il che è strano."),
    d('reize', "Ve lo ridiamo. Basta battere Gemini Storm."),
    d('reize', "Voi ci avete già provato una volta, quindi sapete quanto è facile."),
    d('mark', "Accettiamo."),
    d('kevin', "Mark, siamo in nove."),
    d('victoria', "Siete in dieci."),
    d('victoria', "Ho la borsa in macchina."),
    d('reize', "Undici con il ragazzino di campagna."),
    d('reize', "Va bene lo stesso. Tanto non cambia."),
    n("— Victoria Vanguard si è unita alla carovana. —", 'urlo')
  ],
  eff: [{ arrivi: 2 }, { spirito: 8 }],
  poi: { hub: true } });

sc({ id: 'g2_partita', luogo: 'Nara — il campo del liceo, prestato',
  righe: [
    d('jude', "Ascoltatemi tutti, perché stavolta un piano ce l'ho."),
    d('jude', "Non possiamo fermarli. Possiamo però capire dove guardano prima di passare."),
    d('jude', "Guardano sempre lo stesso punto, mezzo secondo prima. Tutti e undici."),
    d('mark', "E poi?"),
    d('jude', "E poi niente. Oggi serve solo sapere che è vero."),
    tv({
      fuoco:   "Cioè andiamo a perdere apposta?",
      calmo:   "Quindi oggi la partita è una scusa.",
      ironico: "Ottimo piano. Molto rassicurante.",
      chiuso:  "Perdiamo di nuovo.",
      ostinato:"Io non scendo in campo per perdere."
    }),
    d('jude', "Nessuno ha detto di perdere."),
    d('jude', "Ho detto che oggi la cosa importante non è il risultato."),
    d('mark', "…io la cosa importante la trovo sempre nel risultato però.")
  ],
  poi: { partita: { avv: 'gemini_alius', titolo: 'Alius Academy — Raimon vs Gemini Storm (seconda)', minuti: 45, caravan: true,
    vinto: 'g2_fine', perso: 'g2_fine', pari: 'g2_fine' } } });

sc({ id: 'g2_fine', luogo: 'Nara — fischio finale',
  righe: [
    n("Trentadue a zero."),
    n("È un numero che non ha più niente a che fare con il calcio: è quante volte hanno deciso di farlo."),
    n("Al ventottesimo Mark Evans resta giù e non si rialza, e Nathan Swift lo raggiunge in area per vedere come sta."),
    n("Il tiro dopo arriva mentre Nathan è girato, gli prende la schiena e finisce dentro comunque."),
    n("Nathan Swift si rialza. Fa quattro passi. Poi si siede sull'erba e non riesce più a girare il collo."),
    n("Todd Ironside esce al trentaquattresimo con la caviglia."),
    d('reize', "Bene."),
    d('reize', "Adesso avete capito?"),
    d('mark', "…"),
    d('mark', "Sì."),
    d('reize', "Bravo. Era ora."),
    d('mark', "Ho capito che al ventiduesimo minuto il tuo numero sette ha guardato a sinistra prima di passare a destra."),
    d('mark', "E l'ha rifatto al trentesimo. E al quarantunesimo."),
    d('reize', "…"),
    d('reize', "Sei un caso disperato."),
    d('jude', "Non è disperato. È il capitano."),
    n("Se ne vanno di nuovo a piedi. Il primo ministro non torna a casa."),
    n("Sul pullman, quella sera, Victoria Vanguard si presenta a tutti uno per uno e a ognuno stringe la mano come si fa dai grandi."),
    { chi: 'victoria', t: "Io sto qui finché non me lo ridanno." },
    { chi: 'victoria', t: "E se dopo mi tenete, sto anche dopo." },
    d('hillman', "Ragazzi."),
    d('hillman', "Undici non li avete più. Dovete andarli a prendere."),
    d('hillman', "Sopra Sapporo c'è una scuola con dentro un ragazzo che vale da solo quanto tre di voi."),
    d('hillman', "Si chiama Hakuren."),
    n("— Nathan Swift e Todd Ironside sono fuori. —", 'urlo')
  ],
  eff: [{ ferite: 2 }, { imparoAtto2: 2 }, { exp: 480 }, { spirito: 6 },
        { obiettivo: 'Salire a Hokkaido e trovare qualcuno che sappia giocare.' },
        { momento: 'Hai giocato la seconda contro Gemini Storm: 32-0.' }],
  poi: { capitolo: 13 } });


/* ------------------------------------------------------------
   CAPITOLO 3 — UNA STELLA DEL NORD
   ------------------------------------------------------------ */

sc({ id: 'g3_1', luogo: 'Hokkaido — statale 275, tormenta, 15 dicembre',
  righe: [
    n("A Hokkaido nevica da ottobre e smetterà a maggio. Il pullman fa quaranta all'ora e Nelly guida con la faccia a venti centimetri dal parabrezza."),
    n("Al chilometro quarantadue la strada gira e sotto la strada c'è un fosso."),
    n("Succede in tre secondi: il pullman scivola, Nelly non prende il freno in tempo, e da fuori, dalla neve, esce qualcuno."),
    n("Non lo ferma con le mani: si mette dove il pullman sta andando e ci mette il corpo, e il pullman si ferma."),
    d('mark', "…"),
    d('mark', "CHI SEI?!"),
    d('shawn', "Scusate."),
    d('shawn', "Ho spinto un po' forte. Vi ho ammaccato la fiancata."),
    n("Si chiama Shawn Froste. Ha la vostra età, un cappotto troppo leggero per il posto in cui vive, e si scusa per avervi salvati."),
    d('shawn', "Siete della Raimon."),
    d('shawn', "Vi ho visti alla televisione, in finale, l'anno scorso."),
    d('shawn', "Ho guardato quella partita ventisei volte."),
    d('kevin', "Ventisei?"),
    d('shawn', "Qui d'inverno non c'è tantissimo da fare.")
  ],
  poi: 'g3_2' });

sc({ id: 'g3_2', luogo: 'Scuola media Hakuren — la palestra riscaldata',
  righe: [
    n("Hakuren ha centonovanta studenti ed è l'unica scuola nel raggio di trenta chilometri."),
    n("Il campo è coperto di neve battuta. La battono loro, ogni mattina, con un rullo che tirano in otto."),
    d('shawn', "Alius Academy è già passata."),
    d('mark', "Qui?"),
    d('shawn', "Tre giorni fa. Hanno chiesto una partita."),
    d('shawn', "Abbiamo giocato noi per primi, perché è la nostra scuola."),
    d('shawn', "Abbiamo perso undici a zero e non hanno buttato giù niente."),
    d('jude', "Perché no?"),
    d('shawn', "Hanno detto che non ne valeva la pena."),
    d('shawn', "Hanno detto: « una scuola così piccola non la conta nessuno »."),
    n("Lo dice con la stessa voce con cui prima si è scusato per la fiancata."),
    tv({
      fuoco:   "E tu che gli hai risposto?",
      calmo:   "E tu cosa hai detto?",
      ironico: "Immagino tu li abbia ringraziati.",
      chiuso:  "E tu?",
      ostinato:"Spero tu gli abbia risposto qualcosa."
    }),
    d('shawn', "Niente."),
    d('shawn', "Non mi è venuto in mente niente."),
    n("Tu sai esattamente cosa vuol dire, perché la tua di scuola l'hanno contata abbastanza da tirarla giù, e non sapresti dire quale delle due cose sia peggio."),
    d('mark', "Vieni con noi."),
    d('shawn', "…no."),
    d('mark', "Perché no?!"),
    d('shawn', "Perché non sono bravo come pensate."),
    d('shawn', "Giocatemi contro. Poi ne riparliamo.")
  ],
  poi: { hub: true } });

sc({ id: 'g3_partita', luogo: 'Hakuren — campo di neve battuta',
  righe: [
    n("Shawn Froste scende in campo con il numero 4 e si mette in difesa."),
    d('kevin', "Il fenomeno gioca dietro?"),
    d('shawn', "Io gioco dove serve."),
    d('jude', "Attenzione tutti."),
    d('jude', "Quello lì in difesa fa una cosa che non ho mai visto fare a un difensore: si diverte."),
    n("Nel primo tempo Shawn Froste vi toglie undici palloni e non fa un fallo.")
  ],
  poi: { partita: { avv: 'hakuren', titolo: 'Hokkaido — Raimon vs Hakuren', minuti: 45, caravan: true,
    vinto: 'g3_2t', perso: 'g3_2t', pari: 'g3_2t' } } });

sc({ id: 'g3_2t', luogo: 'Hakuren — dopo la partita',
  righe: [
    n("A un certo punto della partita, dentro l'intervallo, Shawn Froste è andato a mettersi in attacco senza che nessuno gliel'abbia chiesto."),
    n("E chi è tornato in campo dopo non era esattamente lui."),
    { chi: 'aiden', t: "Fatevi da parte." },
    { chi: 'aiden', t: "Adesso gioco io." },
    d('mark', "…Shawn?"),
    { chi: 'aiden', t: "Aiden." },
    { chi: 'aiden', t: "Aiden Froste. Il fratello." },
    n("Quello che è successo nei quarantacinque minuti dopo, in questo paese, se lo ricordano tutti."),
    n("A fine partita Shawn Froste è seduto sulla neve e trema, e non è per il freddo."),
    d('shawn', "Scusate."),
    d('shawn', "Succede."),
    d('celia', "…succede da quanto?"),
    d('shawn', "Da tre anni."),
    d('shawn', "Da quando c'è stata la valanga sopra la strada."),
    d('shawn', "Mio padre, mia madre e mio fratello Aiden erano in macchina davanti alla mia."),
    d('shawn', "Aiden aveva undici anni e giocava attaccante."),
    d('shawn', "Io giocavo dietro perché lui giocava davanti."),
    d('shawn', "Adesso quando serve un attaccante lui torna, e io lo lascio fare, perché è l'unico modo che ho per averlo ancora."),
    n("Nessuno dice niente per un po'. Poi ti alzi tu."),
    tv({
      fuoco:   "Ce l'ho anch'io una cosa che non c'è più. È una scuola, non un fratello, e non è la stessa cosa. Ma so cosa vuol dire tenersela addosso.",
      calmo:   "Non è la stessa cosa, ma anche a me hanno portato via il posto dove stavo. Non ci si abitua. Si continua.",
      ironico: "Guarda che se cominciamo a fare la gara di chi ha perso di più, qui su questo pullman perdiamo tutti.",
      chiuso:  "Io ho perso una scuola. Tu hai perso di più. Ma il posto sul pullman è lo stesso.",
      ostinato:"Allora portalo con te. Non lasciarlo qui a Hokkaido dove non lo conta nessuno."
    }),
    d('shawn', "…"),
    d('mark', "Shawn."),
    d('mark', "Vieni con noi. Tutti e due."),
    d('shawn', "…tutti e due?"),
    d('mark', "Tutti e due. Non ho detto una cosa strana."),
    n("— Shawn Froste si è unito alla carovana. —", 'urlo'),
    d('shawn', "Una cosa però."),
    d('shawn', "Prima di ripartire, andiamo a prendercela."),
    d('mark', "Chi?"),
    d('shawn', "Quelli che hanno detto che la mia scuola non la conta nessuno.")
  ],
  eff: [{ arrivi: 3 }, { spirito: 14 }, { exp: 520 },
        { caravanTec: { chi: 'shawn', tec: 'ice_ground' } },
        { caravanTec: { chi: 'kevin', tec: 'wyvern_crash' } },
        { momento: 'Hai detto a Shawn Froste di portarsi il fratello sul pullman.' }],
  poi: 'g3_3' });

sc({ id: 'g3_3', luogo: 'Hakuren — il campo, la mattina dopo',
  righe: [
    n("Kevin Dragonfly è sul campo dalle cinque. Tira contro il muro della palestra da tre ore e ha le mani viola."),
    d('kevin', "Non ci arrivo."),
    d('kevin', "Il drago mi viene, ma non arriva in porta. Si spegne."),
    d('shawn', "Perché tiri da solo."),
    d('kevin', "Io tiro sempre da solo. Sono un attaccante."),
    d('shawn', "Anche mio fratello lo diceva."),
    d('shawn', "Poi ha smesso di dirlo perché aveva me."),
    n("Ci mettono un'ora e venti. Alla fine il drago di Kevin non è più un drago: è una cosa bianca con le ali che esce dalla neve."),
    d('kevin', "…cos'è?"),
    d('shawn', "Un viverna. È un drago che ha imparato a stare in aria."),
    d('kevin', "Non me la chiamerai tu la mia tecnica."),
    d('shawn', "L'ho appena fatto."),
    n("— Bufera del Viverna: Kevin Dragonfly e Shawn Froste. —", 'urlo'),
    n("È la prima cosa che questa squadra riesce a fare in due da quando è partita.")
  ],
  eff: [{ caravanTec: { chi: 'kevin', tec: 'wyvern_bliz' } },
        { caravanTec: { chi: 'shawn', tec: 'wyvern_bliz' } }, { spirito: 8 },
        { imparoAtto2: 3 }, { flag: 'hakuren_fatto' }],
  poi: { hub: true } });

sc({ id: 'g3_rivincita', luogo: 'Hokkaido — un campo di neve fuori Sapporo',
  righe: [
    n("Gemini Storm è ancora a Hokkaido. Non è difficile trovarli: basta seguire le scuole che hanno un piano in meno."),
    d('reize', "Terza volta."),
    d('reize', "Voi non state bene."),
    d('mark', "Terza volta!"),
    d('reize', "Perché sorridi?"),
    d('mark', "Perché stavolta so dove guardi prima di passare."),
    d('reize', "…"),
    d('reize', "Chi te l'ha detto?"),
    d('mark', "Me l'hai fatto vedere tu. Sessantasette volte in due partite."),
    d('mark', "Le abbiamo contate tutte. C'è un ragazzo sul nostro pullman che conta le cose."),
    { chi: 'william', t: "Sessantasette. Sessantotto se contiamo quella dubbia al trentesimo." }
  ],
  poi: { partita: { avv: 'gemini', titolo: 'Rivincita — Raimon vs Gemini Storm', minuti: 45, caravan: true,
    vinto: 'g3_v', perso: 'g3_p', pari: 'g3_p' } } });

sc({ id: 'g3_v', luogo: 'Hokkaido — fischio finale',
  righe: [
    n("Finisce, e stavolta il numero sul tabellone è dalla vostra parte."),
    n("È la prima squadra di Alius Academy che perde una partita da quando sono arrivati."),
    d('reize', "…"),
    d('reize', "Non è possibile."),
    d('reize', "Voi eravate quelli di Kasamino."),
    d('mark', "Sì."),
    d('mark', "E adesso siamo quelli di qui."),
    n("Gemini Storm se ne va senza mettersi in fila per due. È la prima volta."),
    d('shawn', "Ehi. Nuovo di Amanome."),
    d('shawn', "Come si chiamava il numero della tua scuola?"),
    tu("Trentotto studenti."),
    d('shawn', "Centonovanta la mia."),
    d('shawn', "Sommate fanno duecentoventotto persone che oggi non erano allo stadio e a cui è successa una cosa lo stesso.")
  ],
  eff: [{ spirito: 20 }, { exp: 700 }, { flag: 'gemini_battuta' },
        { momento: 'Prima vittoria contro Alius Academy: Gemini Storm.' }],
  poi: { capitolo: 14 } });

sc({ id: 'g3_p', luogo: 'Hokkaido — fischio finale',
  righe: [
    n("Non basta ancora. Ma stavolta il tabellone è un tabellone da partita, non un elenco."),
    d('reize', "Meglio."),
    d('reize', "Sinceramente: meglio."),
    d('reize', "Alla prossima non vi guardo più dall'alto."),
    d('mark', "Alla prossima ti battiamo."),
    d('reize', "Lo so."),
    d('reize', "È per questo che l'ho detto."),
    n("Se ne vanno. Nessuno mette in fila nessuno."),
    d('shawn', "Capitano."),
    d('shawn', "Non a te, Mark. A quello nuovo."),
    d('shawn', "Grazie per ieri.")
  ],
  eff: [{ spirito: 10 }, { exp: 560 }],
  poi: { capitolo: 14 } });


/* ------------------------------------------------------------
   CAPITOLO 4 — UN APPUNTAMENTO CON LA DIVINITÀ
   ------------------------------------------------------------ */

sc({ id: 'g4_1', luogo: 'Kyoto — scuola media Cloister, 20 dicembre',
  righe: [
    n("La Cloister è una scuola dentro un tempio, o un tempio con dentro una scuola: a Kyoto le due cose si distinguono male."),
    n("Ha un cortile di ghiaia rastrellata, un campo di terra battuta, e sopra il campo un tetto di legno del 1704 che nessuno ha il permesso di toccare."),
    d('cloi', "Voi siete quelli del pullman."),
    d('cloi', "Vi stavamo aspettando. Ma arrivate tardi di un giorno."),
    d('jude', "Cos'è successo ieri?"),
    d('cloi', "Sono arrivati. Non quelli con la pietra azzurra: altri."),
    d('cloi', "Hanno detto di chiamarsi Epsilon."),
    d('cloi', "Hanno detto che il tetto del 1704 è un buon punto di partenza."),
    n("Il capitano della Cloister si chiama Genkai Manyū e ha diciassette punti di sutura sopra un sopracciglio."),
    d('cloi', "Abbiamo chiesto di giocare noi per primi."),
    d('mark', "Perché?"),
    d('cloi', "Perché è la nostra scuola. Si fa così."),
    d('cloi', "Ventinove a zero."),
    d('cloi', "Il tetto è ancora su perché hanno detto che tornano domani a finire."),
    d('cloi', "Domani siete voi, spero.")
  ],
  poi: 'g4_2' });

sc({ id: 'g4_2', luogo: 'Cloister — il magazzino dietro il campo',
  righe: [
    n("Mentre gli altri parlano, tu senti un rumore dietro il magazzino: qualcuno che ride e cerca di non ridere."),
    n("Dietro il magazzino c'è un ragazzino di prima con un secchio d'acqua appoggiato sopra una porta socchiusa."),
    { chi: 'scotty', t: "Sst." },
    { chi: 'scotty', t: "Non è per te. È per il professore di ginnastica." },
    tv({
      fuoco:   "Ieri vi hanno preso ventinove gol e tu fai gli scherzi?",
      calmo:   "Non è il giorno giusto per gli scherzi.",
      ironico: "Bel secchio. Molto ben posizionato.",
      chiuso:  "…",
      ostinato:"Tira giù quel secchio."
    }),
    { chi: 'scotty', t: "Io ieri non c'ero." },
    { chi: 'scotty', t: "Sono di prima. In squadra non mi ci mettono." },
    { chi: 'scotty', t: "Quindi mentre gli altri si prendevano ventinove gol io ero dietro il magazzino a fare questo." },
    { chi: 'scotty', t: "E ho guardato tutta la partita da qui." },
    { chi: 'scotty', t: "Tutta." },
    n("Si chiama Scotty Banyan. Ha undici anni e mezzo, fa scherzi a tutti, e ha una faccia che non sa fare quella seria."),
    n("In questo momento la sta provando e non gli viene."),
    d('celia', "Come ti chiami?"),
    { chi: 'scotty', t: "…Scotty." },
    d('celia', "Scotty, tu li hai visti giocare per quarantacinque minuti."),
    d('celia', "Sei l'unico in questa scuola che li ha guardati invece di subirli."),
    d('celia', "Vuoi raccontarcelo?"),
    { chi: 'scotty', t: "…nessuno mi ha mai chiesto niente in questa scuola." },
    { chi: 'scotty', t: "Va bene. Ve lo racconto." },
    { chi: 'scotty', t: "Ma prima aspettiamo il professore di ginnastica, che sta arrivando." }
  ],
  eff: [{ flag: 'scotty_visto' }],
  poi: { hub: true } });

sc({ id: 'g4_partita', luogo: 'Cloister — campo di terra battuta, 21 dicembre',
  righe: [
    n("Epsilon arriva alle nove in punto. Sono in undici e il più alto sta davanti."),
    d('desarm', "Desarm."),
    d('desarm', "Prima squadra di Alius Academy."),
    d('jude', "Prima?"),
    d('desarm', "Gemini Storm era la seconda. Ve l'avevano detto."),
    d('desarm', "Voi li avete battuti. Complimenti sinceri: è una cosa che non era mai successa."),
    d('desarm', "Questo però significa soltanto che adesso vi tocca il livello sopra."),
    n("Desarm si mette in porta. Nessuno se lo aspettava."),
    d('kevin', "Il capitano fa il portiere?"),
    d('desarm', "Il capitano fa quello che serve."),
    { chi: 'scotty', t: "Ehi! Quello lì ieri stava in porta e non ha preso niente!" },
    { chi: 'scotty', t: "E il numero nove taglia sempre a sinistra! Sempre! Ventidue volte!" },
    d('jude', "…"),
    d('jude', "Ragazzino. Domani vieni sul pullman.")
  ],
  poi: { partita: { avv: 'epsilon', titolo: 'Alius Academy — Raimon vs Epsilon', minuti: 45, caravan: true,
    vinto: 'g4_fine', perso: 'g4_fine', pari: 'g4_fine' } } });

sc({ id: 'g4_fine', luogo: 'Cloister — dopo',
  righe: [
    n("Il tetto del 1704 è ancora al suo posto."),
    d('desarm', "Ci rivediamo."),
    d('desarm', "E la prossima volta in panchina ci sarà qualcun altro."),
    d('mark', "Che vuol dire?"),
    d('desarm', "Vuol dire che qualcuno mi ha cercato ieri sera in albergo."),
    d('desarm', "Un signore giapponese, non di Alius Academy, che sa il nome di tutti voi e sa il nome dei vostri genitori."),
    d('jude', "…"),
    d('jude', "Che occhiali aveva?"),
    d('desarm', "Spessi."),
    d('jude', "…"),
    d('jude', "Mark. Dobbiamo parlare."),
    n("Alle sette del mattino dopo, sul pullman, sotto un sedile, c'è uno zaino che non è di nessuno."),
    n("Dentro lo zaino c'è un ragazzino di prima che è salito alle cinque e mezza e non l'ha detto a nessuno."),
    { chi: 'scotty', t: "Ho lasciato un biglietto a mia madre." },
    { chi: 'scotty', t: "C'è scritto: « torno a marzo, sto con dei campioni nazionali, non è uno scherzo »." },
    { chi: 'scotty', t: "Non mi crederà. Faccio sempre scherzi." },
    d('celia', "Le telefono io."),
    { chi: 'scotty', t: "…tu perché sei gentile con me?" },
    d('celia', "Perché ieri sei stato l'unico utile in tutta la tua scuola e nessuno te l'ha detto."),
    n("— Scotty Banyan si è unito alla carovana. —", 'urlo')
  ],
  eff: [{ arrivi: 4 }, { imparoAtto2: 4 }, { exp: 640 }, { spirito: 10 },
        { caravanTec: { chi: 'scotty', tec: 'senpuujin' } },
        { obiettivo: 'Capire chi si è messo in panchina a Epsilon.' },
        { momento: 'Hai trovato tu Scotty Banyan dietro il magazzino della Cloister.' }],
  poi: { capitolo: 15 } });


/* ------------------------------------------------------------
   CAPITOLO 5 — RESA DEI CONTI: HILLMAN CONTRO DARK
   ------------------------------------------------------------ */

sc({ id: 'g5_1', luogo: 'Yokato — scuola media Yokato, 22 dicembre',
  righe: [
    n("Yokato è una scuola di città, otto piani di cemento e un campo sul tetto con la rete alta sei metri."),
    n("Sul campo, da solo, c'è un portiere che para tiri che gli lancia una macchina."),
    n("Para male. Ci prova tantissimo."),
    d('darren', "…voi siete—"),
    d('darren', "Voi siete—"),
    d('darren', "MARK EVANS."),
    d('mark', "Ciao!"),
    d('darren', "Io ho—"),
    d('darren', "Io ho la sua partita di finale registrata e l'ho—"),
    d('darren', "Scusi. Scusa. Scusate."),
    n("Si chiama Darren LaChance. Ha imparato a parare guardando la televisione, il che vuol dire che ha imparato tutto al contrario e poi si è corretto da solo."),
    d('darren', "Guarda. La so fare anch'io."),
    n("Alza le mani. Sopra i guantoni si forma una mano grande come una persona."),
    n("È blu."),
    d('mark', "…la mia è arancione."),
    d('darren', "Lo so."),
    d('darren', "Mi viene blu. Non so perché. Ci ho provato quattrocento volte."),
    d('mark', "Perché non è la mia."),
    d('mark', "È la tua. Le cose tue vengono del colore tuo."),
    n("Darren LaChance si siede sul cemento e per un po' non dice niente.")
  ],
  poi: 'g5_2' });

sc({ id: 'g5_2', luogo: 'Yokato — il campo sul tetto',
  righe: [
    n("Epsilon arriva alle due del pomeriggio, e in panchina, sotto la rete alta sei metri, c'è un uomo in cappotto lungo con gli occhiali spessi."),
    d('jude', "…"),
    d('jude', "Ray Dark."),
    d('dark', "Jude Sharp."),
    d('dark', "Sei cresciuto. Non abbastanza."),
    n("Ray Dark ha allenato la Royal Academy per tre anni. Ha allenato Jude Sharp da quando aveva otto anni. Nessuno dei due lo dice ad alta voce."),
    d('hillman', "Kageyama."),
    d('dark', "Hibiki."),
    d('dark', "Sei ancora vivo. Che noia."),
    d('hillman', "Tu che ci fai in panchina di una squadra di ragazzini stranieri?"),
    d('dark', "Non sono stranieri, e lo sai anche tu."),
    d('dark', "Sono orfani. Ottantasei, in un istituto, con un uomo che gli ha detto che sono speciali."),
    d('dark', "Io mi limito a insegnargli il calcio, che è l'unica cosa che gli hanno lasciato."),
    d('hillman', "Tu non insegni. Tu usi."),
    d('dark', "E tu che differenza fai, con questi qui?"),
    n("Yokato scende in campo per prima, perché è la loro scuola e si fa così."),
    n("Durano ventidue minuti. Darren LaChance para nove tiri e ne prende quattordici."),
    n("Alla fine è in ginocchio in mezzo alla porta e la mano blu non gli viene più.")
  ],
  poi: 'g5_3' });

sc({ id: 'g5_3', luogo: 'Yokato — sotto la tribuna, prima della vostra',
  righe: [
    n("Ray Dark ti trova da solo sotto la tribuna. Non è un caso: quelli come lui non fanno cose per caso."),
    d('dark', "Tu non sei della Raimon."),
    tv({
      fuoco:   "Sono con loro.",
      calmo:   "Sono in prestito.",
      ironico: "Sono il figurante.",
      chiuso:  "No.",
      ostinato:"Sono con loro, e questo basta."
    }),
    d('dark', "Ho letto il tuo fascicolo."),
    d('dark', "Scuola media di Amanome. Trentotto studenti. Club di calcio fondato ad aprile, iscritto al Football Frontier a ottobre, edificio distrutto il quattro dicembre."),
    d('dark', "Nessuna di quelle tredici persone giocherà mai a un livello che conta."),
    d('dark', "Tu forse sì."),
    d('dark', "Vieni con me e in due anni ti metto in nazionale."),
    d('dark', "Ti do quello che a loro non serve e che a te serve moltissimo: un posto dove quello che sai fare vale qualcosa."),
    n("Da fuori si sente Mark Evans che chiama i nomi per la formazione. Al tuo arriva e si ferma un secondo di troppo, perché non ti trova.")
  ],
  scelte: [
    { t: "«No.» E basta.", vai: 'g5_hub',
      eff: [{ tratto: { schiena: 4 } }, { spirito: 6 }, { momento: 'Ray Dark ti ha offerto la nazionale. Hai detto no e basta.' }] },
    { t: "«Ad Amanome ci gioco io. Quindi ad Amanome qualcosa conta.»", vai: 'g5_hub',
      eff: [{ tratto: { cuore: 4 } }, { spirito: 8 }, { momento: 'A Ray Dark hai risposto che Amanome conta perché ci giochi tu.' }] },
    { t: "«Lo dica a Coach Hillman. Vediamo se glielo ripete in faccia.»", vai: 'g5_dark2',
      se: function (S) { return (S.io && S.io.tratti && S.io.tratti.testa) >= 6; },
      eff: [{ tratto: { testa: 4 } }] },
    { t: "«…quanto tempo ho per pensarci?»", vai: 'g5_hub',
      eff: [{ flag: 'dark_tentato' }, { tratto: { testa: 2 } },
            { momento: 'Per un secondo hai pensato di dire sì a Ray Dark.' }] }
  ] });

sc({ id: 'g5_dark2', luogo: 'Yokato — sotto la tribuna',
  righe: [
    d('dark', "…"),
    d('dark', "Sei sveglio."),
    d('dark', "Peccato: gli svegli in quella squadra ce li ho già mandati io."),
    n("Se ne va. Dieci secondi dopo arriva Coach Hillman, che era dietro un pilastro da prima di te."),
    d('hillman', "Bravo."),
    d('hillman', "Se gli avessi detto di sì, l'avrei lasciato fare."),
    tu("Perché?"),
    d('hillman', "Perché a quindici anni uno deve poter scegliere di sbagliare."),
    d('hillman', "E perché saresti tornato. Tornano tutti."),
    d('hillman', "Tranne quelli che non tornano, e quelli me li ricordo uno per uno.")
  ],
  eff: [{ spirito: 8 }, { tratto: { schiena: 3 } },
        { momento: 'Coach Hillman era dietro il pilastro quando hai detto no a Ray Dark.' }],
  poi: { hub: true } });

sc({ id: 'g5_hub', luogo: 'Yokato — spogliatoio',
  righe: [
    d('darren', "Fatemi giocare."),
    d('mark', "Sei stanco. Hai appena preso quattordici gol."),
    d('darren', "Fatemi giocare, per favore."),
    d('darren', "Non per parare. Per stare in campo mentre para lui."),
    d('mark', "…"),
    d('mark', "Hillman?"),
    d('hillman', "Mettilo dentro."),
    d('hillman', "Un portiere che dopo quattordici gol vuole rientrare non si trova al mercato.")
  ],
  poi: { hub: true } });

sc({ id: 'g5_partita', luogo: 'Yokato — campo sul tetto',
  righe: [
    d('dark', "Epsilon Migliorata."),
    d('dark', "Non ho cambiato i ragazzi. Ho cambiato dove stanno.")
  ],
  poi: { partita: { avv: 'epsilon_kai', titolo: 'Resa dei conti — Raimon vs Epsilon Migliorata', minuti: 45, caravan: true,
    vinto: 'g5_fine', perso: 'g5_fine', pari: 'g5_fine' } } });

sc({ id: 'g5_fine', luogo: 'Yokato — fischio finale',
  righe: [
    n("Ray Dark guarda il tabellone per quattro secondi, poi si gira e se ne va senza salutare i suoi giocatori."),
    d('desarm', "…se n'è andato."),
    d('desarm', "Ci ha allenati per otto giorni e se n'è andato senza dire niente."),
    d('hillman', "Fa così."),
    d('hillman', "L'ha fatto anche con me, nel 1968, che eravamo compagni di stanza."),
    d('desarm', "…voi due eravate—"),
    d('hillman', "Eravamo due che volevano la stessa cosa e l'hanno cercata in due posti diversi."),
    d('hillman', "Io l'ho cercata nei ragazzi. Lui l'ha cercata sui ragazzi."),
    d('hillman', "Una preposizione. Quarant'anni."),
    n("Darren LaChance è ancora in mezzo al campo con i guantoni in mano."),
    d('darren', "Scusate."),
    d('darren', "Io la squadra ce l'ho già. È questa qua di Yokato, e adesso non ha più il campo sul tetto perché l'hanno tirato giù."),
    d('darren', "Quindi tecnicamente non ce l'ho più."),
    d('mark', "Darren."),
    d('mark', "Sali sul pullman."),
    d('darren', "…posso?"),
    d('mark', "Devi. Ho bisogno di uno che sappia parare quando io non ci sono."),
    d('darren', "Tu non ci sei mai stato non in porta."),
    d('mark', "Appunto. Un giorno succederà e voglio essere pronto."),
    n("— Darren LaChance si è unito alla carovana. —", 'urlo')
  ],
  eff: [{ arrivi: 5 }, { imparoAtto2: 5 }, { exp: 700 }, { spirito: 12 },
        { caravanTec: { chi: 'mark', tec: 'pugno_giustizia' } },
        { obiettivo: 'Andare avanti. Alius Academy ha altre due squadre.' },
        { momento: 'Hai visto Coach Hillman e Ray Dark uno di fronte all\'altro.' }],
  poi: { capitolo: 16 } });


/* ------------------------------------------------------------
   CAPITOLO 6 — TUTTO IL DIVERTIMENTO DEL LUNA PARK
   ------------------------------------------------------------ */

sc({ id: 'g6_1', luogo: 'Inazuma — luna park, 23 dicembre',
  righe: [
    n("Il 23 dicembre Nelly Raimon dice una frase che nessuno si aspettava: « oggi non si gioca »."),
    d('nelly', "Oggi è vigilia della vigilia, siete undici ragazzini e un vecchio, e state andando a un luna park."),
    d('mark', "Ma dobbiamo allenar—"),
    d('nelly', "Mark."),
    d('mark', "…va bene."),
    n("Il luna park di Inazuma ha una ruota panoramica alta trentun metri, tre baracchini di tiro a segno e una pista di autoscontro con quattro macchine che funzionano su sette."),
    n("Scotty Banyan ha già trovato il modo di far scendere il tiro a segno dal proprietario."),
    { chi: 'scotty', t: "Non è barare. È capire come è fatta la cosa." },
    n("Shawn Froste non era mai stato su una ruota panoramica."),
    d('shawn', "A Hokkaido ci sono le montagne. Non serve una ruota per stare in alto."),
    d('shawn', "Ma da qui si vede tutta la città."),
    d('shawn', "…quanto è grande."),
    { chi: 'victoria', t: "Ehi. Amanome." },
    { chi: 'victoria', t: "Vieni su un giro con me. Devo chiederti una cosa e non voglio che la sentano." }
  ],
  poi: 'g6_2' });

sc({ id: 'g6_2', luogo: 'La ruota panoramica — cabina 7',
  righe: [
    { chi: 'victoria', t: "Tuo padre e tua madre stanno bene?" },
    tv({
      fuoco:   "Sì. Stanno in una casa che non è caduta.",
      calmo:   "Sì. La scuola è caduta, la casa no.",
      ironico: "Stanno benissimo. Si lamentano del riscaldamento.",
      chiuso:  "Stanno bene.",
      ostinato:"Stanno bene, e li richiamo ogni tre giorni."
    }),
    { chi: 'victoria', t: "Bene." },
    { chi: 'victoria', t: "Io il mio non so nemmeno se mangia." },
    { chi: 'victoria', t: "Alla televisione dicono « il primo ministro è in isolamento per motivi di salute » e io lo devo sentire dire da un giornalista di ventisei anni." },
    { chi: 'victoria', t: "Sono dodici giorni." },
    n("La cabina è in cima. Da qui la scuola media Raimon è un buco fra due tetti, e non serve nemmeno cercarla."),
    tv({
      fuoco:   "Lo riprendiamo.",
      calmo:   "Lo riportiamo a casa. Non so quando. Ma lo riportiamo.",
      ironico: "Guarda che tuo padre secondo me a quelli lì li sta annoiando a morte. Lo ridanno indietro da soli.",
      chiuso:  "Torna.",
      ostinato:"Torna, perché non ho intenzione di finire questa storia senza."
    }),
    { chi: 'victoria', t: "…" },
    { chi: 'victoria', t: "Sai qual è la cosa che mi fa più rabbia?" },
    { chi: 'victoria', t: "Che tu me lo dici e io ci credo." },
    n("La cabina scende. A metà discesa, sotto di voi, il piazzale delle giostre diventa bianco.")
  ],
  eff: [{ tratto: { cuore: 3 } }],
  poi: 'g6_3' });

sc({ id: 'g6_3', luogo: 'Luna park — il piazzale delle giostre',
  righe: [
    n("La neve al 23 dicembre a Inazuma non è una notizia. La neve solo dentro un luna park sì."),
    { chi: 'gazel', t: "Diamond Dust.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'gazel', t: "Gazel.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'gazel', t: "Voi avete battuto Gemini Storm e avete tenuto testa a Epsilon. Bravi.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'gazel', t: "Noi però siamo un'altra cosa: noi siamo dei Rank Master.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'burn', t: "Prominence.", se: function (S) { return S.versione !== 'neve'; } },
    { chi: 'burn', t: "Burn.", se: function (S) { return S.versione !== 'neve'; } },
    { chi: 'burn', t: "Ho sentito che avete battuto Gemini. Gemini è la seconda squadra e ha perso con dei ragazzini.", se: function (S) { return S.versione !== 'neve'; } },
    { chi: 'burn', t: "Adesso vediamo quanto valete davvero.", se: function (S) { return S.versione !== 'neve'; } },
    d('mark', "In un luna park?"),
    { chi: 'gazel', t: "Il campo è un rettangolo. Ce ne sono dappertutto.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'burn', t: "Il campo è dove decido io.", se: function (S) { return S.versione !== 'neve'; } },
    n("Il piazzale delle giostre è lungo il giusto e largo un po' meno. Le porte sono due bancarelle rovesciate."),
    d('jude', "Mark. Noi oggi siamo in undici contati."),
    d('jude', "Se ne esce uno, finiamo in dieci."),
    d('mark', "Allora non esce nessuno.")
  ],
  poi: { hub: true } });

sc({ id: 'g6_partita', luogo: 'Luna park — il piazzale delle giostre',
  righe: [
    n("Le porte sono due bancarelle rovesciate e la linea laterale è dove finisce l'asfalto."),
    d('nelly', "Se rompete qualcosa lo paghiamo noi."),
    d('mark', "Con che soldi?"),
    d('nelly', "Appunto.")
  ],
  poi: { partita: { avv: 'versione', titolo: 'Luna park — Raimon contro Alius Academy', minuti: 45, caravan: true,
    vinto: 'g6_fine', perso: 'g6_fine', pari: 'g6_fine' } } });

sc({ id: 'g6_fine', luogo: 'Luna park — dopo',
  righe: [
    n("A metà secondo tempo, dalla parte del tiro a segno, arriva qualcuno che si toglie il cappotto camminando."),
    d('byron', "Chiedo scusa per il ritardo."),
    d('byron', "Ho guardato tutte e cinque le vostre partite da quando è cominciata questa storia."),
    d('byron', "Le prime due erano imbarazzanti."),
    d('mark', "…Byron?"),
    d('byron', "Byron Love. Istituto Zeus. Quello che vi ha battuti in finale con una squadra dopata, se ricordi."),
    d('byron', "Ho passato l'autunno a chiedermi cosa dovevo fare per rimediare."),
    d('byron', "Poi ho visto Kasamino in televisione e ho smesso di chiedermelo."),
    d('jude', "Non sei tesserato con noi."),
    d('byron', "Non è un torneo. Non c'è nessuno che tesseri niente."),
    d('byron', "C'è un piazzale con dentro ventidue persone e una di queste sono io."),
    n("— Byron Love è sceso in campo con la Raimon. —", 'urlo'),
    { chi: 'gazel', t: "…l'angelo.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'burn', t: "…l'angelo.", se: function (S) { return S.versione !== 'neve'; } },
    d('byron', "Non più."),
    d('byron', "Adesso sono solo uno che gioca."),
    n("Quando finisce, il piazzale delle giostre è pieno di neve sciolta e i quattro autoscontro funzionanti sono diventati tre."),
    { chi: 'gazel', t: "Ci rivediamo.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'gazel', t: "E la prossima volta non sarà in un luna park.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'burn', t: "Ci rivediamo.", se: function (S) { return S.versione !== 'neve'; } },
    { chi: 'burn', t: "E stavolta portati dietro tutti quelli che hai.", se: function (S) { return S.versione !== 'neve'; } },
    d('nelly', "Avevo detto che oggi non si giocava."),
    d('mark', "E infatti non era in programma!"),
    d('nelly', "Mark, giuro—"),
    n("Sotto il baraccone del tiro a segno, mentre gli altri smontano le bancarelle-porta, Coach Hillman resta seduto e guarda il buco fra due tetti."),
    d('hillman', "Domani si va a scavare."),
    d('jude', "Dove?"),
    d('hillman', "Sotto la vostra scuola."),
    d('hillman', "C'è una cosa lì sotto che avrei dovuto tirare fuori trent'anni fa.")
  ],
  eff: [{ arrivi: 6 }, { imparoAtto2: 6 }, { exp: 780 }, { spirito: 12 },
        { caravanTec: { chi: 'byron', tec: 'god_knows' } },
        { obiettivo: 'Scavare sotto le macerie della Raimon.' },
        { momento: 'Byron Love è entrato in campo per voi al luna park.' }],
  poi: { capitolo: 17 } });


/* ------------------------------------------------------------
   CAPITOLO 7 — IL TACCUINO SEGRETO
   ------------------------------------------------------------ */

sc({ id: 'g7_1', luogo: 'Inazuma — sotto le macerie della Raimon, 27 dicembre',
  righe: [
    n("Ci mettono due giorni a spostare abbastanza cemento da arrivare a quello che era il magazzino del club di calcio."),
    n("Sotto il magazzino c'è un vano che nella pianta della scuola non è disegnato."),
    d('hillman', "L'ha fatto costruire tuo nonno nel 1971 e non l'ha detto al preside."),
    d('mark', "Mio nonno ha costruito una stanza segreta sotto la scuola."),
    d('hillman', "Tuo nonno ha fatto cose peggiori."),
    n("Dentro il vano c'è una scrivania, una sedia, e un quaderno con la copertina di tela."),
    n("Sulla copertina, scritto a mano: « Dave Evans — secondo taccuino »."),
    d('mark', "…il secondo?"),
    d('hillman', "Il primo te l'ha lasciato in vista, perché lo trovassi tu."),
    d('hillman', "Il secondo l'ha nascosto, perché non voleva che lo trovasse nessuno."),
    d('hillman', "Compreso lui."),
    n("Il secondo taccuino non contiene tecniche. Contiene un elenco di scuole."),
    d('jude', "Sono duecentododici nomi."),
    d('jude', "Ognuno con una data e una riga."),
    d('celia', "« Kasamino, 1974: undici ragazzi, nessuno bravo, hanno vinto il girone »."),
    d('celia', "« Yokato, 1979: il portiere para male e non molla »."),
    d('celia', "« Hakuren, 1981: nevica troppo, giocano lo stesso »."),
    n("Poi Celia Hills si ferma su una riga e ti guarda."),
    d('celia', "…c'è anche la tua.")
  ],
  poi: 'g7_2' });

sc({ id: 'g7_2', luogo: 'Il vano sotto il magazzino',
  righe: [
    n("« Amanome, 1985: trentotto studenti, un campo falciato a mano, undici nomi. Il più piccolo ha nove anni e non molla la palla. Tornarci. »"),
    n("Sotto, con una penna diversa e una calligrafia più vecchia:"),
    n("« 1986: non ci sono tornato. »"),
    d('mark', "…"),
    d('mark', "Mio nonno è stato ad Amanome."),
    tv({
      fuoco:   "Nel 1985 c'era una squadra. L'anno dopo hanno chiuso il club.",
      calmo:   "Nel 1985 ad Amanome c'era una squadra. Nel 1986 non c'era più.",
      ironico: "Sì, e ha scritto una recensione da tre stelle.",
      chiuso:  "Lo so.",
      ostinato:"Nel 1985 c'era una squadra e ho passato l'anno a rimetterla in piedi."
    }),
    n("Tiri fuori dalla borsa il quaderno di Amagai. Quello del 1985, con gli undici nomi scritti a mano."),
    n("La calligrafia dell'ultima riga del quaderno di Amanome e quella del taccuino di Dave Evans sono la stessa calligrafia."),
    d('hillman', "…"),
    d('hillman', "Vecchio impiccione."),
    d('mark', "Cosa vuol dire?"),
    d('hillman', "Vuol dire che nel 1985 tuo nonno è passato da un paese di quattrocento abitanti, ha visto undici ragazzini e gli ha scritto la formazione sul quaderno."),
    d('hillman', "E poi non è più tornato perché è morto."),
    d('hillman', "E adesso qui c'è uno di quel paese lì, che è arrivato in mezzo a voi ventisei anni dopo."),
    d('hillman', "Non è destino. È che le cose fatte bene restano lì e aspettano."),
    n("— Il quaderno di Amanome e il taccuino di Dave Evans sono la stessa mano. —", 'urlo')
  ],
  eff: [{ flag: 'taccuino' }, { spirito: 14 }, { tratto: { cuore: 4 } },
        { momento: 'Dave Evans era passato da Amanome nel 1985 e aveva scritto gli undici nomi.' }],
  poi: 'g7_3' });

sc({ id: 'g7_3', luogo: 'Aeroporto di Inazuma — 28 dicembre',
  righe: [
    n("Alle sei del pomeriggio Bobby Shearer riceve una telefonata e comincia a correre verso l'uscita senza spiegare niente a nessuno."),
    d('bobby', "È atterrato."),
    d('jude', "Chi è atterrato?"),
    d('bobby', "Erik."),
    n("Erik Eagle è partito per l'America due anni fa con un ginocchio che i medici giapponesi avevano dichiarato finito."),
    n("Torna camminando da solo, con una borsa in spalla e una cicatrice che gli gira intorno alla rotula."),
    d('erik', "Ciao."),
    d('erik', "Ho visto Kasamino al telegiornale a Los Angeles."),
    d('erik', "Ho comprato il biglietto lo stesso giorno."),
    d('mark', "Il ginocchio?"),
    d('erik', "Regge novanta minuti. Poi mi si gonfia e per due giorni sto fermo."),
    d('erik', "Quindi facciamo che gioco quelli buoni."),
    { chi: 'suzette', t: "DARLING!" },
    n("Dietro Erik Eagle, con due valigie e un cappotto rosa, c'è una ragazza che nessuno ha invitato."),
    { chi: 'suzette', t: "Suzette Heartland. Ci siamo conosciuti sull'aereo, fila 34." },
    { chi: 'suzette', t: "Lui non lo sa ancora ma è il mio darling." },
    d('erik', "…non ci siamo conosciuti sull'aereo. Mi ha seguito dal gate."),
    { chi: 'suzette', t: "Sull'aereo abbiamo parlato." },
    d('erik', "Hai parlato tu."),
    { chi: 'victoria', t: "Tu giochi?" },
    { chi: 'suzette', t: "Attaccante. Otto anni. Meglio di lui." },
    { chi: 'victoria', t: "…mi piaci." },
    n("— Erik Eagle e Suzette Heartland si sono uniti alla carovana. —", 'urlo'),
    n("Fuori dall'aeroporto, appoggiati al pullman, ci sono altre due persone che nessuno si aspettava."),
    d('nathan', "Il collo gira."),
    d('nathan', "Ci ho messo diciotto giorni e adesso gira."),
    d('todd', "La caviglia no. Ma corro lo stesso."),
    d('mark', "TODD!"),
    d('todd', "Non urlare, capitano. È un mese che non urla nessuno vicino a me."),
    d('nathan', "Una cosa però."),
    d('nathan', "Io a Nara mi sono girato per guardare te che stavi giù, e quel tiro mi è arrivato nella schiena."),
    d('nathan', "Se rifaccio quella cosa, rifammela rifare."),
    d('mark', "…"),
    d('mark', "Va bene."),
    n("— Nathan Swift e Todd Ironside sono rientrati. —", 'urlo')
  ],
  eff: [{ arrivi: 7 }, { spirito: 10 },
        { caravanTec: { chi: 'erik', tec: 'death_zone2' } },
        { caravanTec: { chi: 'jude', tec: 'pinguino2' } },
        { caravanTec: { chi: 'nathan', tec: 'shippuu' } }],
  poi: { hub: true } });

sc({ id: 'g7_partita', luogo: 'Royal Academy — campo d\'allenamento, 30 dicembre',
  righe: [
    n("La Royal Academy ha quattro campi in erba, una tribuna coperta e un cancello che si apre da solo."),
    n("Da settembre non ha più un allenatore, e la cosa si vede: giocano meglio."),
    d('sakuma', "Voi."),
    d('sakuma', "Siete quelli che si stanno facendo prendere a pallonate in giro per il Giappone."),
    d('jude', "Sì."),
    d('sakuma', "…e venite a chiedere un'amichevole a noi."),
    d('jude', "Sì."),
    d('sakuma', "Jude. Sono passati sette mesi da quando te ne sei andato."),
    d('jude', "Lo so."),
    d('sakuma', "Non ti ho ancora perdonato."),
    d('jude', "Non te l'ho chiesto."),
    d('genda', "Io sì però."),
    d('genda', "Cioè: io ti ho perdonato. È che parlo poco e non l'hai sentito."),
    d('sakuma', "…"),
    d('sakuma', "Va bene. Novanta minuti. Poi ve ne andate."),
    d('sakuma', "E una cosa: se ci battete, quando arrivate all'ultima partita ci portate con voi."),
    d('jude', "Non funziona così."),
    d('sakuma', "Funziona così se lo decidiamo noi due.")
  ],
  poi: { partita: { avv: 'royal', titolo: 'Allenamento vero — Raimon vs Royal Academy', minuti: 45, caravan: true,
    vinto: 'g7_fine', perso: 'g7_fine', pari: 'g7_fine' } } });

sc({ id: 'g7_fine', luogo: 'Royal Academy — dopo',
  righe: [
    d('sakuma', "Basta così."),
    d('sakuma', "Adesso ho capito perché ve le suonano."),
    d('jude', "Illuminami."),
    d('sakuma', "Perché giocate come se ogni partita fosse l'ultima."),
    d('sakuma', "Contro di noi va bene. Contro gente che gioca per distruggere edifici, no."),
    d('sakuma', "Vi serve una squadra che regga anche il minuto sessanta."),
    d('jude', "…"),
    d('jude', "Grazie."),
    d('sakuma', "Non era un complimento."),
    d('jude', "Lo so. Grazie lo stesso."),
    n("Sul pullman, quella sera, Jude Sharp resta sveglio fino alle tre a disegnare schemi su un foglio."),
    n("Alle tre e dieci ti passa il foglio. Ci sono undici cerchietti e uno è il tuo."),
    d('jude', "Tu qui."),
    d('jude', "Sei l'unico che non ha imparato a giocare in una scuola con l'allenatore."),
    d('jude', "Quindi sei l'unico che non fa la cosa che ci aspettiamo tutti."),
    tv({
      fuoco:   "Cioè faccio la cosa sbagliata.",
      calmo:   "Cioè non so ancora fare la cosa giusta.",
      ironico: "Complimento più strano che abbia mai ricevuto.",
      chiuso:  "Va bene.",
      ostinato:"Faccio la cosa che serve. Che poi sia quella che vi aspettate non è affar mio."
    }),
    d('jude', "Esatto. Non cambiarla.")
  ],
  eff: [{ imparoAtto2: 7 }, { exp: 820 }, { spirito: 10 },
        { obiettivo: 'Okinawa. C\'è qualcuno da riprendere.' },
        { momento: 'Jude Sharp ha disegnato lo schema mettendoti dove non se lo aspetta nessuno.' }],
  poi: { capitolo: 18 } });


/* ------------------------------------------------------------
   CAPITOLO 8 — IL RITORNO DEL FUOCO
   ------------------------------------------------------------ */

sc({ id: 'g8_1', luogo: 'Okinawa — spiaggia di Nagahama, 4 gennaio',
  righe: [
    n("A Okinawa il 4 gennaio ci sono diciannove gradi e uno che fa surf."),
    n("Il pullman è arrivato alle sei di mattina dopo trentun ore di traghetti e statali, e nessuno ha dormito."),
    { chi: 'hurley', t: "Ehi! Voi!" },
    { chi: 'hurley', t: "Non si può stare lì, c'è la corrente!" },
    n("Esce dall'acqua con la tavola sotto il braccio. È alto un metro e ottantatré, ha i capelli rosa e la faccia di uno che non ha mai avuto un problema."),
    { chi: 'hurley', t: "Hurley Kane. Piacere." },
    { chi: 'hurley', t: "Voi siete quelli del pullman con lo scotch." },
    d('mark', "Sì!"),
    { chi: 'hurley', t: "Qui ci sono già passati." },
    { chi: 'hurley', t: "Quattro giorni fa. Sopra la scuola." },
    n("La scuola media di Nagahama non c'è più. Al posto del campo c'è un parcheggio di terra battuta con le righe fatte con la calce."),
    { chi: 'hurley', t: "Abbiamo giocato noi per primi. Diciotto a zero." },
    { chi: 'hurley', t: "Poi ci hanno tirato giù la palestra e se ne sono andati verso nord." },
    { chi: 'hurley', t: "Io ho ricominciato a fare surf perché il campo non c'era più e non sapevo cosa fare con le giornate." },
    { chi: 'hurley', t: "Ma se voi andate a giocarci contro, io vengo." },
    d('mark', "Non ti ho ancora chiesto niente."),
    { chi: 'hurley', t: "Lo so. Ti ho risparmiato la fatica." }
  ],
  poi: 'g8_2' });

sc({ id: 'g8_2', luogo: 'Okinawa — il chiosco sulla spiaggia',
  righe: [
    n("Al chiosco, seduto all'ultimo tavolino, c'è un ragazzo con i capelli bianchi che sta bevendo qualcosa e non ha guardato il mare nemmeno una volta."),
    d('kevin', "…"),
    d('kevin', "No."),
    d('mark', "AXEL!"),
    d('axel', "Ciao, Mark."),
    n("Axel Blaze se n'è andato dalla Raimon il giorno dopo il crollo della scuola. Non ha detto perché. Ha smesso di rispondere al telefono per un mese."),
    d('kevin', "Un mese."),
    d('kevin', "Un mese che io sono l'unico attaccante di una squadra che prende venti gol a partita, e tu sei qui a bere una cosa fresca."),
    d('axel', "Mia sorella si è svegliata il 6 dicembre."),
    d('kevin', "…"),
    d('axel', "Dopo undici mesi."),
    d('axel', "Ha aperto gli occhi e ha chiesto di me, e io ero in un ospedale di Okinawa dove l'avevano trasferita in ottobre."),
    d('axel', "Non l'ho detto a nessuno perché se lo dicevo qualcuno mi diceva di tornare, e io non potevo."),
    d('kevin', "…"),
    d('kevin', "Potevi dirlo."),
    d('axel', "Lo so."),
    d('kevin', "Sei un cretino."),
    d('axel', "Lo so."),
    n("Kevin Dragonfly si siede al tavolino e ordina la stessa cosa fresca, e per quattro minuti nessuno dei due dice più niente."),
    d('axel', "Chi è quello nuovo?"),
    d('mark', "Amanome. Ha fondato un club in un paese di quattrocento abitanti e gliel'hanno tirato giù."),
    d('axel', "…"),
    d('axel', "Quanti eravate?"),
    tu("Quattordici."),
    d('axel', "E adesso?"),
    tv({
      fuoco:   "Adesso sono qui e loro sono lì, e a marzo torno.",
      calmo:   "Adesso sono qui. Loro tengono aperto il club senza di me.",
      ironico: "Adesso sono un profugo con la maglia di un altro.",
      chiuso:  "Adesso sono qui.",
      ostinato:"Adesso sono qui e ho un debito con tredici persone."
    }),
    d('axel', "…"),
    d('axel', "Mark. Ho un posto?"),
    d('mark', "Ce l'hai sempre avuto. Non l'ho dato a nessuno."),
    d('kevin', "L'ha dato a me, veramente."),
    d('mark', "Vi metto tutti e due!"),
    d('kevin', "Non funziona così!"),
    d('mark', "Da oggi sì.")
  ],
  poi: 'g8_3' });

sc({ id: 'g8_3', luogo: 'Okinawa — il parcheggio che era un campo',
  righe: [
    n("Prima della partita c'è un problema che nessuno ha voglia di nominare: siete in dodici per undici maglie."),
    d('mark', "Nelly, quante maglie abbiamo?"),
    d('nelly', "Undici. Le altre erano nella scuola."),
    n("Nessuno dice il tuo nome, ma tutti guardano da un'altra parte nello stesso momento, e questo è peggio."),
    n("Sei quello arrivato per ultimo fra i titolari. Sei quello che non è della Raimon.")
  ],
  scelte: [
    { t: "«Gioca Axel. Io sto fuori.» Gli passi la maglia.", vai: 'g8_4',
      eff: [{ tratto: { cuore: 5 } }, { spirito: 10 }, { flag: 'maglia_data' },
            { momento: 'Hai dato la tua maglia ad Axel Blaze senza che nessuno te lo chiedesse.' }] },
    { t: "«Gioco io. Sono qui da otto partite e me lo sono guadagnato.»", vai: 'g8_4',
      eff: [{ tratto: { schiena: 5 } }, { spirito: 4 }, { flag: 'maglia_tenuta' },
            { momento: 'Hai detto ad alta voce che il posto te lo eri guadagnato.' }] },
    { t: "«Decida Coach Hillman. Non è una cosa che si decide fra di noi.»", vai: 'g8_4',
      eff: [{ tratto: { testa: 4 } }, { flag: 'maglia_hillman' }] }
  ] });

sc({ id: 'g8_4', luogo: 'Okinawa — il parcheggio, cinque minuti dopo',
  righe: [
    n("Coach Hillman ascolta tutto senza dire niente. Poi tira fuori dalla borsa una maglia arancione piegata."),
    d('hillman', "Dodici."),
    d('hillman', "L'ho fatta fare a Inazuma il 12 dicembre, il giorno dopo Kasamino."),
    d('hillman', "Ci ho messo undici giorni a decidere se dartela."),
    tu("Perché undici giorni?"),
    d('hillman', "Perché volevo vedere se te ne andavi."),
    d('hillman', "Se ne sono andati in tanti, da questa squadra. Nessuno gliene fa una colpa."),
    d('hillman', "Tu no."),
    n("Sul retro della maglia c'è il numero 12 e sopra il numero non c'è « Raimon »."),
    n("C'è il nome della tua scuola."),
    d('hillman', "Perché non giochi per noi."),
    d('hillman', "Giochi per quelli lì, in mezzo a noi."),
    d('hillman', "È diverso, ed è meglio."),
    n("— Hai ricevuto la maglia numero 12. —", 'urlo'),
    { chi: 'hurley', t: "Bello. Io che numero ho?" },
    d('nelly', "Tu non hai la maglia, hai una muta da surf."),
    { chi: 'hurley', t: "Allora gioco con quella." },
    d('nelly', "…non puoi."),
    { chi: 'hurley', t: "Guarda che a Okinawa si può." }
  ],
  eff: [{ arrivi: 8 }, { flag: 'maglia12' }, { spirito: 14 },
        { caravanTec: { chi: 'axel', tec: 'bakunetsu' } },
        { caravanTec: { chi: 'hurley', tec: 'onda_lunga' } },
        { momento: 'Coach Hillman ti ha dato la maglia numero 12 con sopra il nome della tua scuola.' }],
  poi: { hub: true } });

sc({ id: 'g8_partita', luogo: 'Okinawa — il parcheggio che era un campo',
  righe: [
    { chi: 'burn', t: "Ah. Siete tornati in dodici.", se: function (S) { return S.versione !== 'neve'; } },
    { chi: 'burn', t: "Meglio: così ne resta uno da mandare a chiamare l'ambulanza.", se: function (S) { return S.versione !== 'neve'; } },
    { chi: 'gazel', t: "Al luna park eravate in undici.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'gazel', t: "Adesso siete in dodici e uno ha i capelli bianchi. Interessante.", se: function (S) { return S.versione === 'neve'; } },
    d('axel', "…"),
    d('axel', "Mark."),
    d('mark', "Sì?"),
    d('axel', "Ho un tiro nuovo."),
    d('axel', "L'ho tirato tutti i giorni per un mese contro il muro di un ospedale."),
    d('mark', "Come si chiama?"),
    d('axel', "Non lo so. Non ho avuto nessuno a cui chiederlo.")
  ],
  poi: { partita: { avv: 'versione', titolo: 'Okinawa — Raimon contro Alius Academy', minuti: 45, caravan: true,
    vinto: 'g8_fine', perso: 'g8_fine', pari: 'g8_fine' } } });

sc({ id: 'g8_fine', luogo: 'Okinawa — dopo',
  righe: [
    { chi: 'burn', t: "…", se: function (S) { return S.versione !== 'neve'; } },
    { chi: 'burn', t: "Quello con i capelli bianchi.", se: function (S) { return S.versione !== 'neve'; } },
    { chi: 'burn', t: "Dov'era fino a ieri?", se: function (S) { return S.versione !== 'neve'; } },
    { chi: 'gazel', t: "…", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'gazel', t: "Quello con i capelli bianchi non c'era, al luna park.", se: function (S) { return S.versione === 'neve'; } },
    { chi: 'gazel', t: "Dov'era?", se: function (S) { return S.versione === 'neve'; } },
    d('mark', "In un ospedale."),
    d('mark', "A tirare contro un muro."),
    n("Se ne vanno verso il molo, e per la prima volta da quando è cominciata questa storia non camminano in fila per due."),
    n("Sulla spiaggia, la sera, Hurley Kane accende un fuoco con il legname portato dalla corrente."),
    { chi: 'hurley', t: "Allora: ricapitolando." },
    { chi: 'hurley', t: "Siete partiti in sei, avete preso cinquantadue gol in due partite, e adesso siete quattordici e ne avete battute tre." },
    { chi: 'hurley', t: "Che facciamo domani?" },
    d('hillman', "Domani niente."),
    d('hillman', "Dopodomani si va su un'isola."),
    d('jude', "Quale isola?"),
    d('hillman', "Quella dove tengono il primo ministro."),
    { chi: 'victoria', t: "…" },
    { chi: 'victoria', t: "Ripeta." },
    d('hillman', "L'ho saputo stamattina. Un pescatore di qui ci porta il pesce da tre anni e non ha mai chiesto a chi."),
    d('hillman', "Da dopodomani lo sa.")
  ],
  eff: [{ imparoAtto2: 8 }, { exp: 900 }, { spirito: 14 },
        { caravanTec: { chi: 'axel', tec: 'bakunetsu_v' } },
        { caravanTec: { chi: 'mark', tec: 'colosso_mano' } },
        { obiettivo: 'L\'isola. E quello che c\'è sopra.' },
        { momento: 'Axel Blaze è tornato in squadra a Okinawa.' }],
  poi: { capitolo: 19 } });


/* ------------------------------------------------------------
   CAPITOLO 9 — LA MINACCIA DI THE GENESIS
   ------------------------------------------------------------ */

sc({ id: 'g9_1', luogo: 'Isola di Aliea — 20 gennaio',
  righe: [
    n("L'isola non è su nessuna carta turistica. È su tutte le carte nautiche, con scritto sopra « proprietà privata »."),
    n("Ci sono un campo di calcio in erba vera, tre palazzine basse, e ottantasei ragazzi."),
    n("Ottantasei ragazzi che non hanno i genitori."),
    d('gran', "Buongiorno."),
    d('gran', "Vi aspettavamo da tre settimane."),
    d('gran', "Mi chiamo Gran. The Genesis."),
    n("Non ha la faccia di uno che tira giù le scuole. Ha la faccia di uno che ti offre da bere."),
    { chi: 'victoria', t: "Dov'è mio padre?" },
    d('gran', "Nella palazzina di destra. Sta bene. Gioca a shogi con il nostro amministratore e sta perdendo."),
    d('gran', "Lo riportate a casa oggi, comunque vada la partita."),
    { chi: 'victoria', t: "…perché?" },
    d('gran', "Perché non ci serve più."),
    d('gran', "Ci serviva per farvi venire fin qui, e siete venuti."),
    d('jude', "Perché volevate noi?"),
    d('gran', "Perché siete gli unici che non hanno smesso."),
    d('gran', "Duecentododici scuole hanno accettato una partita. Duecentododici hanno smesso dopo la prima."),
    d('gran', "Voi ne avete perse due da venti e trentadue e siete ancora in piedi."),
    d('gran', "Volevo vedere che faccia avete.")
  ],
  poi: 'g9_2' });

sc({ id: 'g9_2', luogo: 'Isola di Aliea — dietro le palazzine',
  righe: [
    n("Mentre gli altri parlano, tu vai dietro le palazzine perché hai sentito un rumore che conosci: qualcuno che palleggia da solo contro un muro."),
    n("È una ragazza con i capelli blu. Palleggia e conta a voce bassa, e quando arriva a cento ricomincia da uno."),
    { chi: 'ulvida', t: "Sei quello che non è della Raimon." },
    tv({
      fuoco:   "Come lo sai?",
      calmo:   "Si vede?",
      ironico: "È così evidente?",
      chiuso:  "Sì.",
      ostinato:"Sono con loro, se è quello che vuoi sapere."
    }),
    { chi: 'ulvida', t: "Cammini come uno che sta in casa di altri." },
    { chi: 'ulvida', t: "Lo so perché lo facevo anch'io, i primi due anni." },
    n("Si chiama Ulvida. Ha dodici anni, è arrivata qui che ne aveva sei, e non si ricorda niente di prima."),
    { chi: 'ulvida', t: "Qui non siamo alieni." },
    { chi: 'ulvida', t: "Ce l'ha detto lui che eravamo alieni, e ce l'ha detto quando eravamo abbastanza piccoli da crederci." },
    { chi: 'ulvida', t: "Questo è l'Istituto Sole. Ottantasei bambini senza genitori e un signore che ci ha presi tutti." },
    { chi: 'ulvida', t: "E poi un giorno il signore ha detto: adesso siamo speciali, e usciamo." },
    tv({
      fuoco:   "E vi ha fatto tirare giù le scuole degli altri.",
      calmo:   "E per essere speciali dovevate distruggere le scuole di qualcun altro.",
      ironico: "Bel programma didattico.",
      chiuso:  "E voi avete detto di sì.",
      ostinato:"E nessuno di voi ottantasei ha detto di no?"
    }),
    { chi: 'ulvida', t: "…" },
    { chi: 'ulvida', t: "Una." },
    { chi: 'ulvida', t: "Aveva otto anni. L'hanno mandata via dall'isola." },
    { chi: 'ulvida', t: "Nessuno l'ha più vista, e nessuno di noi ha più chiesto dov'è andata." },
    n("Smette di palleggiare e prende la palla in mano."),
    { chi: 'ulvida', t: "Non lo dire agli altri tuoi." },
    { chi: 'ulvida', t: "Diglielo dopo la partita." }
  ],
  eff: [{ flag: 'ulvida_parla' }, { tratto: { cuore: 3 } },
        { momento: 'Ulvida ti ha detto che Alius Academy è un orfanotrofio prima della partita.' }],
  poi: { hub: true } });

sc({ id: 'g9_partita', luogo: 'Isola di Aliea — campo bianco',
  righe: [
    d('gran', "Una cosa sola, prima di cominciare."),
    d('gran', "Non vi sto sfidando."),
    d('gran', "Vi sto chiedendo un favore."),
    d('mark', "…un favore?"),
    d('gran', "Fatemi vedere che si può fare in un altro modo."),
    d('gran', "Se ci battete, ottantasei persone smettono di credere a una cosa in cui credono da sei anni."),
    d('gran', "Se non ci battete, continuiamo."),
    d('gran', "Non è una minaccia: è quello che succede."),
    tv({
      fuoco:   "Allora smettete e basta!",
      calmo:   "Potreste anche smettere senza aspettare una partita.",
      ironico: "Comodo: la responsabilità è nostra.",
      chiuso:  "Smettete.",
      ostinato:"Non me ne frega niente di chi ve l'ha detto. Potete smettere adesso."
    }),
    d('gran', "…"),
    d('gran', "Novanta minuti. Poi ne riparliamo.")
  ],
  poi: { partita: { avv: 'genesis', titolo: 'The Genesis — la prima volta', minuti: 45, caravan: true,
    vinto: 'g9_fine', perso: 'g9_fine', pari: 'g9_fine' } } });

sc({ id: 'g9_fine', luogo: 'Isola di Aliea — dopo',
  righe: [
    d('gran', "Tornate."),
    d('mark', "Cosa?"),
    d('gran', "Tornate. Fra dieci giorni."),
    d('gran', "Non è generosità: è che oggi ho capito una cosa e ho bisogno di dieci giorni per decidere cosa farne."),
    n("Sousuke Zaizen esce dalla palazzina di destra con il cappotto sul braccio e cammina da solo fino al molo."),
    { chi: 'zaizen', t: "Victoria." },
    { chi: 'victoria', t: "…" },
    { chi: 'victoria', t: "Sei dimagrito." },
    { chi: 'zaizen', t: "Mi hanno dato da mangiare tre volte al giorno e ho perso quattro chili lo stesso." },
    { chi: 'zaizen', t: "È l'unico posto in cui sono stato negli ultimi otto anni dove nessuno voleva niente da me." },
    { chi: 'zaizen', t: "Sono ragazzini, Victoria." },
    { chi: 'victoria', t: "Lo so." },
    { chi: 'victoria', t: "Sono ragazzini che hanno tirato giù una scuola a settimana per tre mesi." },
    { chi: 'zaizen', t: "Sì." },
    { chi: 'zaizen', t: "Tutte e due le cose insieme. È così che sono fatte quasi tutte le cose." },
    n("Sul traghetto del ritorno, Coach Hillman apre il secondo taccuino di Dave Evans all'ultima pagina."),
    d('hillman', "C'è scritta una cosa sola, qui in fondo."),
    d('mark', "Cosa?"),
    d('hillman', "« Quando arrivi in fondo e non basta ancora, non cercare un'altra tecnica. Cerca un'altra persona. »"),
    n("Guardi il pullman: quattordici persone, un allenatore e due manager."),
    n("Poi guardi il quaderno di Amanome, che ha undici nomi del 1985 e quattordici nomi del tuo anno, e sono ventisei persone in tutto che non sono qui."),
    tv({
      fuoco:   "Un'altra persona ce l'ho. Anzi: ne ho tredici.",
      calmo:   "Io un'altra persona la conosco. Anzi, tredici.",
      ironico: "Coach, se ne servono altre, io ne ho tredici parcheggiate in montagna.",
      chiuso:  "Ne ho tredici.",
      ostinato:"Tredici. E non hanno mai perso una partita per stanchezza."
    }),
    d('hillman', "…"),
    d('hillman', "Nelly. Quanto ci mette il pullman ad arrivare ad Amanome?"),
    d('nelly', "Diciannove ore."),
    d('hillman', "Ne abbiamo dieci di giorni."),
    d('mark', "ANDIAMO A PRENDERLI!"),
    n("— La carovana sale ad Amanome. —", 'urlo')
  ],
  eff: [{ imparoAtto2: 9 }, { exp: 1100 }, { spirito: 12 },
        { caravanTec: { chi: 'darren', tec: 'colosso_blu' } },
        { obiettivo: 'Dieci giorni. Poi l\'ultima.' },
        { momento: 'Hai proposto tu di andare a prendere i tuoi compagni di Amanome.' }],
  poi: { capitolo: 20 } });


/* ------------------------------------------------------------
   CAPITOLO 10 — INAZUMA ELEVEN PER SEMPRE
   ------------------------------------------------------------ */

sc({ id: 'g10_1', luogo: 'Amanome — il campo dietro la palestra, 25 gennaio',
  righe: [
    n("Il pullman entra ad Amanome alle sei e quaranta di mattina, esattamente all'orario della corriera, e mezzo paese pensa che sia la corriera."),
    n("Il campo dietro la palestra è coperto di neve. Sotto la neve, però, la neve è battuta: qualcuno l'ha battuta."),
    n("Tredici persone continuano ad allenarsi su un campo di una scuola che non c'è più, alle sei e quaranta di mattina, da cinquantun giorni."),
    d('mark', "…"),
    d('mark', "Chi ha detto loro di continuare?"),
    tv({
      fuoco:   "Nessuno.",
      calmo:   "Nessuno. È il club. Si allena.",
      ironico: "Nessuno. Sono fatti male.",
      chiuso:  "Nessuno.",
      ostinato:"Nessuno gliel'ha detto. E infatti non hanno smesso."
    }),
    n("Non ti hanno ancora visto. Sei dietro il pullman e potresti anche restarci."),
    n("Poi Rei Tachibana si gira perché gli è caduto un pallone verso la strada, e resta fermo con il pallone in mano per quattro secondi buoni.")
  ],
  poi: 'g10_2' });

sc({ id: 'g10_2', luogo: 'Amanome — il campo, sette minuti dopo',
  righe: [
    n("Non c'è nessun discorso. È il vantaggio dei posti piccoli: non serve spiegare niente a nessuno."),
    d('hillman', "Ragazzi di Amanome."),
    d('hillman', "Fra cinque giorni c'è una partita su un'isola e ci servono persone."),
    d('hillman', "Non undici titolari: persone."),
    d('hillman', "Chi viene sale sul pullman adesso, così com'è, senza tornare a casa a prendere niente."),
    n("Salgono tutti e tredici."),
    d('nelly', "Non ci stanno tutti."),
    d('hillman', "Ci stanno in piedi."),
    d('nelly', "È illegale."),
    d('hillman', "Sì."),
    n("Sul piazzale, mentre il pullman gira, il signor Amagai batte due volte sul finestrino con le nocche."),
    d('amagai', "Il quaderno."),
    tu("Ce l'ho ancora."),
    d('amagai', "Non lo voglio indietro adesso."),
    d('amagai', "Volevo solo sapere se ce l'avevi ancora."),
    n("— Amanome è salita sulla carovana. —", 'urlo')
  ],
  eff: [{ flag: 'amanome_sale' }, { spirito: 20 }, { tratto: { cuore: 5 } },
        { momento: 'I tuoi tredici compagni sono saliti sul pullman della Raimon.' }],
  poi: 'g10_3' });

sc({ id: 'g10_3', luogo: 'Isola di Aliea — 30 gennaio, prima della partita',
  righe: [
    n("Sul molo dell'isola, il 30 gennaio, ci sono ventisette persone della vostra parte e ottantasei dell'altra."),
    n("Le ottantasei sono tutte lì, sedute sull'erba intorno al campo, e nessuna di loro ha una maglia da gioco."),
    d('gran', "Ho deciso cosa farne, dei dieci giorni."),
    d('gran', "Ho detto a tutti la verità."),
    d('gran', "Che non siamo alieni. Che siamo dell'Istituto Sole. Che i nostri genitori sono morti o ci hanno lasciati e che nessuno di noi è speciale."),
    d('mark', "…e loro?"),
    d('gran', "Sei sono scappati. Undici hanno pianto. Gli altri hanno chiesto se si giocava lo stesso."),
    d('gran', "Ho detto di sì."),
    d('gran', "Perché oggi è l'unica volta in cui giochiamo senza avere un motivo."),
    { chi: 'ulvida', t: "Gran." },
    d('gran', "Sì?"),
    { chi: 'ulvida', t: "Come ti chiami?" },
    d('gran', "…"),
    d('gran', "Xavier."),
    d('gran', "Xavier Foster."),
    { chi: 'ulvida', t: "Reina." },
    { chi: 'ulvida', t: "Io mi chiamo Reina." },
    n("È la prima volta che se lo dicono, in sei anni."),
    n("Prima del fischio, Mark Evans mette in fila ventisette persone e non riesce a scegliere gli undici."),
    d('mark', "Non ce la faccio."),
    d('hillman', "Non devi farcela tu."),
    d('hillman', "Deve farcela lui."),
    n("Coach Hillman guarda te.")
  ],
  poi: 'g10_4' });

sc({ id: 'g10_4', luogo: 'Isola di Aliea — la formazione',
  righe: [
    d('hillman', "Tu sei l'unico qui che conosce tutte e due le metà di questa squadra."),
    d('hillman', "Conosci quelli della Raimon perché ci giochi da due mesi."),
    d('hillman', "Conosci quelli di Amanome perché li hai messi insieme tu, uno per uno, partendo da un prato."),
    d('hillman', "Fai la formazione."),
    tv({
      fuoco:   "Io?!",
      calmo:   "…va bene.",
      ironico: "Fantastico. Se perdiamo è colpa mia.",
      chiuso:  "Va bene.",
      ostinato:"Me la dia. La faccio."
    }),
    n("Ci metti undici minuti, che è più o meno il tempo che ci hai messo a fare la borsa il 7 dicembre."),
    n("Alla fine gli undici sono undici, e sei tu a doverli chiamare ad alta voce davanti a ventisette persone e a un'isola intera."),
    n("— Sei tu a fare la formazione dell'ultima partita. —", 'urlo'),
    d('mark', "Un'ultima cosa."),
    d('mark', "Prima di entrare."),
    d('mark', "Come si chiama questa squadra qua? Perché non è la Raimon."),
    d('jude', "No, non lo è."),
    { chi: 'victoria', t: "Non lo è da dicembre." },
    { chi: 'hurley', t: "Io non ci sono mai stato, alla Raimon." },
    d('mark', "Appunto."),
    d('mark', "Allora glielo chiediamo a quello che le squadre le fonda."),
    n("Ventisei persone guardano te.")
  ],
  eff: [{ imparoAtto2: 10 }, { spirito: 20 }, { flag: 'formazione_tua' },
        { caravanTec: { chi: 'victoria', tec: 'perfect_tower' } },
        { caravanTec: { chi: 'hurley', tec: 'perfect_tower' } },
        { caravanTec: { chi: 'scotty', tec: 'perfect_tower' } },
        { caravanTec: { chi: 'suzette', tec: 'butterfly' } },
        { caravanTec: { chi: 'darren', tec: 'mano_insup' } },
        { momento: 'Hai fatto tu la formazione dell\'ultima partita.' }],
  poi: { hub: true } });

sc({ id: 'g10_partita', luogo: 'Isola di Aliea — l\'ultima',
  righe: [
    tv({
      fuoco:   "Inazuma Eleven. Perché è quello che siamo: undici, e facciamo rumore.",
      calmo:   "Inazuma Eleven. Non è un nome mio: è il nome che ci sta bene a tutti e ventisette.",
      ironico: "Inazuma Eleven. So che è poco fantasioso. Provateci voi a trovarne uno in quattro secondi.",
      chiuso:  "Inazuma Eleven.",
      ostinato:"Inazuma Eleven. E non lo cambiamo più."
    }),
    d('mark', "…"),
    d('mark', "va bene!"),
    d('mark', "ANDIAMO!")
  ],
  poi: { partita: { avv: 'genesis', titolo: 'Inazuma Eleven — l\'ultima partita', minuti: 45, caravan: true,
    vinto: 'g10_v', perso: 'g10_p', pari: 'g10_p' } } });

sc({ id: 'g10_v', luogo: 'Isola di Aliea — fischio finale',
  righe: [
    n("Alla fine, sull'isola, non cade niente."),
    n("È l'unica volta in tutta questa storia, ed è il motivo per cui è stata giocata."),
    d('gran', "…"),
    d('gran', "Adesso capisco perché lo fate."),
    d('mark', "Ci hai messo poco!"),
    d('gran', "Ci ho messo sei anni."),
    n("Gli ottantasei dell'istituto escono sul campo e per un po' non succede niente di raccontabile: giocano e basta, tutti insieme, senza squadre."),
    n("Verso sera qualcuno conta e viene fuori che in campo ci sono centotredici persone e quattro palloni."),
    d('mark', "Ehi. Adesso dimmelo."),
    tu("Cosa?"),
    d('mark', "Come si chiama la tua squadra. Quella vera. Quella di casa tua.")
  ],
  poi: 'g10_fine' });

sc({ id: 'g10_p', luogo: 'Isola di Aliea — fischio finale',
  righe: [
    n("Non la vincete."),
    n("Ma alla fine, sull'isola, non cade niente lo stesso, e questo nessuna delle duecentododici scuole prima di voi era riuscita a ottenerlo."),
    d('gran', "Avete perso."),
    d('mark', "Sì."),
    d('gran', "E siete ancora qui."),
    d('mark', "Sì."),
    d('gran', "…"),
    d('gran', "È la terza volta che vi vedo perdere e la terza volta che non ve ne andate."),
    d('gran', "Basta così. Ho capito."),
    n("Gli ottantasei dell'istituto escono sul campo e per un po' non succede niente di raccontabile: giocano e basta, tutti insieme, senza squadre."),
    d('mark', "Ehi. Adesso dimmelo."),
    tu("Cosa?"),
    d('mark', "Come si chiama la tua squadra. Quella vera. Quella di casa tua.")
  ],
  poi: 'g10_fine' });

sc({ id: 'g10_fine', luogo: 'Isola di Aliea — sera',
  righe: [
    tv({
      fuoco:   "Amanome. Scuola media di Amanome, trentotto studenti.",
      calmo:   "Scuola media di Amanome. Trentotto studenti, un campo di novantuno metri per cinquantatré.",
      ironico: "Amanome. Non l'hai mai sentita nominare e va benissimo così.",
      chiuso:  "Amanome.",
      ostinato:"Amanome. E adesso torno lì."
    }),
    d('mark', "Amanome."),
    d('mark', "Quella col campo falciato a mano."),
    tu("Quella."),
    d('mark', "Quando lo rifate?"),
    tu("In aprile."),
    d('mark', "…"),
    d('mark', "Nelly. Ad aprile dove siamo?"),
    d('nelly', "Mark, ad aprile ricomincia la scuola. Quella che non c'è più."),
    d('mark', "Appunto! Non abbiamo niente da fare!"),
    n("Il traghetto parte alle sette e dieci."),
    n("Sul ponte, mentre l'isola diventa piccola, Coach Hillman ti restituisce una cosa."),
    n("È il quaderno del 1985. Lo aveva preso lui dalla tua borsa, e ci ha scritto dentro una riga."),
    n("Sotto gli undici nomi del 1985 — quelli che ci aveva scritto Dave Evans di sua mano, ventisei anni fa — e sotto i quattordici del tuo anno, c'è scritto con la calligrafia di uno di sessant'anni:"),
    n("« E poi ce n'era uno che è arrivato il giorno peggiore, quando eravamo già rotti, e non se n'è accorto nessuno finché non è servito. »"),
    n("— FINE DEL VIAGGIO —", 'urlo'),
    n("Torni ad Amanome il primo febbraio. Il campo lo rifate in aprile."),
    n("Dall'hub puoi continuare: allenare il club, giocare amichevoli, e tornare sul pullman della Raimon quando ti va.")
  ],
  eff: [{ flag: 'viaggio_finito' }, { sblocca: 'caravan' }, { sblocca: 'amichevoli' }, { spirito: 15 },
        { exp: 1200 }, { momento: 'Hai finito il viaggio. Coach Hillman ha scritto una riga sul quaderno del 1985.' }],
  poi: { hub: true } });


/* ============================================================
   I RISVEGLI
   Nessuno impara la propria tecnica studiando. Gli succede addosso.
   Queste scene le mostra il gioco da solo, quando ne ricorrono le
   condizioni: in allenamento o dentro una partita.
   ============================================================ */

sc({ id: 'f_rei', firma: 'firma_rei', titolo: 'Rei Tachibana', luogo: 'Secondo tempo — sotto di due',
  righe: [
    n("Rei Tachibana ha corso per settanta minuti e non ha fatto una cosa giusta."),
    n("Ha sbagliato quattro passaggi, si è fatto saltare tre volte, e adesso è l'ultimo rimasto fra il numero 9 avversario e la vostra area."),
    d('rei', "Ok."),
    d('rei', "Ok ok ok."),
    n("Non ha la tecnica per fermarlo. Non ha la velocità. Non ha niente."),
    d('rei', "Però io non me ne vado."),
    n("Si mette davanti. Lo saltano. Si rialza. Si rimette davanti. Lo saltano di nuovo."),
    n("Alla terza si rialza prima ancora di essere caduto del tutto."),
    d('rei', "SONO ANCORA QUI!"),
    n("Il numero 9 esita. È un decimo di secondo, ed è tutto quello che serviva."),
    d('rei', "…l'ho preso?"),
    tu("L'hai preso."),
    n("Rei Tachibana ha imparato una cosa che non si insegna: che stare in piedi più a lungo dell'altro è una tecnica.")
  ] });

sc({ id: 'f_goro', firma: 'firma_goro', titolo: 'Gorō Ishizuka', luogo: 'Uno contro uno — dietro la palestra',
  righe: [
    n("Uno contro uno. Gorō contro Rikuto, che pesa venti chili di meno e non ha mai perso un contrasto in salita."),
    n("Sei volte di fila Rikuto lo salta. Alla settima Gorō si ferma e resta lì, con le mani sulle ginocchia."),
    d('amagai', "Ishizuka."),
    d('goro', "…non ci arrivo."),
    d('amagai', "No. Non ci arrivi."),
    d('amagai', "Tu quanti tronchi sposti al giorno?"),
    d('goro', "…quattordici."),
    d('amagai', "E quando un tronco cade, cosa fa? Insegue?"),
    d('goro', "…no. Cade e basta."),
    d('amagai', "E cosa succede a quello che sta sotto?"),
    n("Silenzio. Gorō si raddrizza molto lentamente, come uno che ha appena capito una cosa che sapeva già da anni."),
    d('goro', "…ancora."),
    n("Rikuto riparte. Gorō non lo insegue: aspetta la linea giusta e ci si mette dentro tutto insieme."),
    n("Il rumore lo sentono dalla strada.")
  ] });

sc({ id: 'f_hina', firma: 'firma_hina', titolo: 'Hina Kurosawa', luogo: 'Muro della palestra — duecentesimo tiro',
  righe: [
    n("Hina tira contro il muro della palestra da un'ora e mezza. Ha segnato con il gesso un quadrato di quaranta centimetri e lo ha centrato centonovantotto volte su duecento."),
    d('kenta', "Novantanove per cento."),
    d('hina', "Non basta."),
    d('kenta', "…è novantanove per cento."),
    d('hina', "Nel tiro con l'arco novantanove per cento vuol dire che una freccia su cento ammazza qualcuno."),
    n("Tira di nuovo. Centro. Di nuovo. Centro."),
    d('hina', "Non è la mira il problema."),
    tu("E qual è?"),
    d('hina', "Che quando tiro penso al quadrato."),
    d('hina', "E in partita il quadrato non c'è. C'è un portiere che si muove, dieci persone che urlano, e quarantatré cretini dietro la recinzione che gridano il mio nome."),
    n("Si ferma. Guarda il muro. Poi si gira e guarda la recinzione, che adesso è vuota."),
    d('hina', "…quarantatré."),
    d('hina', "Devo smettere di togliere il rumore. Devo mirarci dentro."),
    n("Il duecentesimo tiro non centra il quadrato: passa dodici centimetri più in là, dove Hina aveva deciso un istante prima che sarebbe stato il palo.")
  ] });

sc({ id: 'f_zero', firma: 'firma_zero', titolo: 'Tsukasa "Zero" Naruse', luogo: 'Dentro la partita — dopo il secondo gol',
  righe: [
    n("Secondo gol. Zero resta a terra più a lungo del necessario, con la faccia nell'erba."),
    n("È esattamente la posizione in cui è rimasto due anni fa, in una finale, davanti a duemila persone, dopo l'ottavo."),
    d('rei', "Zero—"),
    d('zero', "Non chiamarmi così."),
    n("Si alza."),
    d('zero', "Non chiamarmi così. Non oggi."),
    d('zero', "Sapete perché mi chiamano Zero? Perché un giornale ha contato i gol e non le parate."),
    d('zero', "Diciotto tiri. Dieci parate. Otto gol. E hanno scritto zero."),
    n("Si mette i guanti. Li stringe fino a farsi male ai polsi."),
    d('zero', "Da adesso conto io."),
    n("Il terzo tiro glielo tirano da dodici metri, di collo pieno, nell'angolo basso."),
    n("Zero ci arriva. E quando si rialza, con il pallone stretto al petto, non guarda il pubblico: guarda Kenta."),
    d('zero', "SEGNALA."),
    d('kenta', "L'ho già segnata!"),
    d('zero', "SEGNALA BENE.")
  ] });

sc({ id: 'f_minoru', firma: 'firma_minoru', titolo: 'Minoru Sasaoka', luogo: 'Corsa in salita — al tornante',
  righe: [
    n("La salita fino al tornante è di un chilometro e quattrocento. Minoru arriva sempre primo e aspetta gli altri seduto sul guard-rail."),
    n("Oggi non si siede. Torna indietro di corsa, incontra Gorō a metà salita, e riparte con lui."),
    d('goro', "…che fai."),
    d('minoru', "Ti vengo addosso."),
    d('goro', "Cosa."),
    d('minoru', "Devo smettere di chiudere gli occhi. Sei la cosa più grossa che c'è. Comincio da te."),
    n("Gorō si ferma. Guarda questo primo anno alto un metro e quarantuno che gli sta chiedendo di essere investito."),
    d('goro', "…mi dispiace in anticipo."),
    n("Minoru non chiude gli occhi. Vola per tre metri e atterra malissimo, e mentre è ancora per aria sta già ridendo."),
    d('minoru', "NON LI HO CHIUSI!"),
    d('minoru', "Ancora! Ancora!"),
    n("Alla quarta capisce la cosa vera: che se parte mezzo secondo prima, non c'è nessuna collisione da temere."),
    n("Non deve essere coraggioso. Deve solo arrivare prima. Ed è la cosa che gli riesce meglio al mondo.")
  ] });

sc({ id: 'f_kenta', firma: 'firma_kenta', titolo: 'Kenta Ubukata', luogo: 'Palla al cerchio — in mezzo, di nuovo',
  righe: [
    n("A palla al cerchio, Kenta sta in mezzo. Ci sta sempre. Ci sta da due mesi."),
    n("Non è un caso: ci finisce perché è il più lento, e non ne esce perché è il più lento."),
    d('shinobu', "Kenta, muoviti!"),
    d('kenta', "Mi sto muovendo."),
    d('shinobu', "Ti stai muovendo verso dove è già passata."),
    n("Kenta si ferma in mezzo al cerchio. Non insegue più. Guarda."),
    d('kenta', "Hina passa sempre al secondo compagno a destra quando è sotto pressione. Sempre. Quarantuno volte su quarantatré."),
    d('hina', "…cosa?"),
    d('kenta', "Rikuto tocca due volte prima di passare. Shinobu finge di passare corto e passa lungo, ma solo se l'ha già fatto almeno una volta nello stesso giro."),
    d('kenta', "Rei passa a te."),
    d('rei', "Io passo a chiunque!"),
    d('kenta', "No. Tu passi a lui. Sempre a lui. Ventisei su ventotto."),
    n("Silenzio nel cerchio."),
    d('kenta', "Ripartite."),
    n("Kenta intercetta al terzo passaggio. E al quinto. E al sesto."),
    d('kenta', "Non devo correre più veloce. Devo essere già lì.")
  ] });

sc({ id: 'f_gemelli', firma: 'firma_gemelli', titolo: 'Yuki e Aoi Sōma', luogo: 'Corsa in salita — le cinque del mattino',
  righe: [
    n("Amagai ha spostato l'allenamento alle cinque, una volta sola, per vedere una cosa."),
    d('amagai', "Voi due. Fate la salita come fate le consegne."),
    d('yuki', "Con le bici?"),
    d('amagai', "Senza. Ma con la testa che avete alle cinque."),
    n("Partono. E succede una cosa che nessuno degli altri nove riesce a spiegare bene nemmeno dopo."),
    n("Non si guardano. Non si parlano. Yuki accelera e Aoi accelera nello stesso istante, senza mezzo decimo di ritardo."),
    n("Al tornante Yuki va a sinistra e Aoi a destra senza che nessuno dei due abbia deciso niente."),
    d('shinobu', "Come fanno?"),
    d('kenta', "Otto chilometri al giorno da quando ne avevano sei. Fanno circa ventimila chilometri insieme."),
    d('kenta', "Non si stanno coordinando. Si sono coordinati nel 2015 e non hanno più smesso."),
    d('amagai', "Sōma."),
    d('yuki', "Sì?"),
    d('amagai', "Tutti e due."),
    d('yuki', "Sì?"),
    d('aoi', "Sì?"),
    d('amagai', "Da domani, in partita, non vi separo mai più.")
  ] });

sc({ id: 'f_shinobu', firma: 'firma_shinobu', titolo: 'Shinobu Katagiri', luogo: 'Secondo tempo — davanti a gente vera',
  righe: [
    n("Shinobu Katagiri ha recitato per sette anni davanti a due sedie vuote e a un ritratto dell'imperatore Meiji."),
    n("Adesso ha centoventi persone dietro una recinzione e un difensore che pesa quindici chili più di lei."),
    n("Cade. Cade in un modo che non le è mai riuscito in aula di musica: la caviglia gira, la faccia si apre, il braccio va su come nelle tragedie."),
    n("L'arbitro non fischia. Il difensore però si ferma, perché nessuno resta indifferente davanti a un dolore fatto così bene."),
    n("Shinobu è già in piedi. È già in corsa. Ha ancora la faccia del dolore addosso per mezzo secondo, poi se la toglie."),
    d('shinobu', "PRIMO ATTO!"),
    n("Il secondo lo fa dieci metri più avanti: finge di passare e non passa."),
    d('shinobu', "SECONDO!"),
    n("Il terzo non lo annuncia. Il terzo è quello vero."),
    n("Dopo, sulla panchina, sta zitta per un tempo lunghissimo."),
    d('shinobu', "Sette anni davanti a due sedie."),
    d('shinobu', "E la sala era qui.")
  ] });

sc({ id: 'f_rikuto', firma: 'firma_rikuto', titolo: 'Rikuto Hazama', luogo: 'Tiri contro il muro — pomeriggio',
  righe: [
    n("Rikuto tira piano. Lo ha sempre fatto. Colpisce bene, in mezzo, e la palla arriva al muro senza fare rumore."),
    d('amagai', "Hazama. Perché non calci forte?"),
    d('rikuto', "…"),
    d('amagai', "Hazama."),
    d('rikuto', "Se calcio forte le capre scappano."),
    n("Nessuno ride, perché è chiaro che non è una battuta."),
    d('rikuto', "Da noi non si fa rumore. Il rumore le fa scappare, e poi le devi ritrovare, e a volte una la ritrovi che è caduta."),
    d('rikuto', "Quindi non si fa rumore. Mai."),
    n("Amagai ci mette un po' a rispondere."),
    d('amagai', "Quanti anni hai."),
    d('rikuto', "Tredici."),
    d('amagai', "E da quanti anni non fai rumore?"),
    d('rikuto', "…tredici."),
    n("Il vecchio custode guarda il muro della palestra, poi la montagna dietro."),
    d('amagai', "Qui non ci sono capre. E questo muro è di cemento armato del 1974."),
    d('amagai', "Fai rumore, ragazzo. Una volta. Vediamo che succede."),
    n("Il pallone parte come quattrocento metri di dislivello messi tutti insieme. Dalla scuola escono in sei a vedere cos'è caduto.")
  ] });

sc({ id: 'f_benkei', firma: 'firma_benkei', titolo: 'Benkei Marui', luogo: 'Tiri in porta — ora di merenda',
  righe: [
    n("Benkei ha preso undici tiri su trenta. Non è un buon numero e lo sa."),
    d('benkei', "Non arrivo con le mani."),
    d('hina', "Le mani ce le hai."),
    d('benkei', "Le ho corte."),
    n("È vero. È largo e ha le braccia corte, ed è la peggior combinazione possibile per un portiere."),
    d('amagai', "Marui. Togliti i guanti."),
    d('benkei', "…come?"),
    d('amagai', "Toglili. Non ti servono. Tu non pari con le mani."),
    d('amagai', "Tu occupi. È una cosa diversa e nessuno te l'ha mai detto perché nessuno pensa che sia una tecnica."),
    d('amagai', "Non provare a prenderla. Mettiti dove sta andando e allarga tutto."),
    n("Il tiro successivo glielo tira Rikuto, che adesso fa rumore."),
    n("Benkei non salta. Si apre come una porta di stalla e la palla gli arriva in pieno stomaco."),
    n("Resta in piedi. La palla cade davanti a lui, ferma."),
    d('benkei', "…ho fame."),
    d('shinobu', "BENKEI HA PARATO CON LA PANCIA."),
    d('benkei', "Ho parato con la pancia e ho fame. Sono due cose vere insieme.")
  ] });

sc({ id: 'f_daichi', firma: 'firma_daichi', titolo: 'Daichi Amano', luogo: 'Dentro la partita — dentro la nostra area',
  righe: [
    n("Sono dentro. Tre di loro dentro l'area, uno solo davanti a Daichi Amano."),
    n("Daichi non arretra. Non è una scelta tecnica: è che dietro di lui c'è la linea di fondo, e dietro la linea di fondo c'è il prato dove a settembre dovevano passare i camion."),
    d('daichi', "…"),
    n("In un raccoglitore verde, in un armadio del municipio di Amanome, c'è una delibera del 1986 che dice che quel terreno andava rifatto."),
    n("Non l'ha revocata nessuno. Non l'ha eseguita nessuno. È rimasta lì trent'anni ad aspettare qualcuno che se ne accorgesse."),
    d('daichi', "Non si passa."),
    n("Il numero 10 avversario prova a saltarlo. Daichi si sposta di quaranta centimetri e chiude."),
    n("Ci riprova dall'altra parte. Quaranta centimetri, e chiude."),
    d('daichi', "NON SI PASSA!"),
    n("Dalla recinzione, in fondo, un uomo di cinquantadue anni che non applaude mai fa un passo avanti senza accorgersene.")
  ] });

sc({ id: 'f_nao', firma: 'firma_nao', titolo: 'Nao Kirishima', luogo: 'Secondo tempo — il quattordici entra',
  righe: [
    n("Nao Kirishima si è iscritta al club per riempire una casella vuota nel registro."),
    n("Ha scelto il quattordici perché era il numero della casella e perché è il giorno del suo compleanno, e ha detto a tutti che lei scrive, non corre."),
    n("È in campo da undici minuti e ha già toccato il pallone diciannove volte."),
    d('kenta', "Diciannove."),
    d('nao', "Stai contando anche me?"),
    d('kenta', "Conto tutti."),
    d('nao', "…"),
    n("Nao Kirishima gestisce un negozio di alimentari con sua madre da quando aveva undici anni."),
    n("Sa quanto latte serve il martedì. Sa che la signora Kurihara paga il quindici del mese. Sa dove va ogni cosa prima che qualcuno gliela chieda."),
    n("È esattamente la stessa cosa."),
    d('nao', "Rei, alla tua sinistra fra due secondi."),
    d('rei', "Cosa—"),
    d('nao', "DUE SECONDI."),
    n("La palla arriva alla sinistra di Rei dopo due secondi."),
    d('nao', "Io scrivo, non corro."),
    d('nao', "Ma il quattordici è mio e non lo do a nessuno.")
  ] });

sc({ id: 'f_tu', firma: null, titolo: 'Il capitano', luogo: 'Secondo tempo — sotto',
  righe: [
    n("Sotto. Venti minuti alla fine, e il tabellone dice quello che dice."),
    n("Guardi la panchina e Amagai non dice niente, perché non c'è niente da dire che tu non sappia già."),
    n("Guardi i tuoi dieci. Rei che ha le mani sulle ginocchia. Gorō che respira come una macchina rotta. Minoru che ha ancora paura. Hina che è arrabbiata con sé stessa."),
    n("Undici persone che ad aprile non sapevano giocare a calcio, in un campo che avete falciato voi, davanti a un paese che non ha altro."),
    n("Ad aprile eravate in due."),
    tu("…"),
    tu("Ehi."),
    n("Si girano tutti e dieci insieme, e questa è la cosa che ti fa capire che ce l'hai fatta molto prima del risultato."),
    tu("Venti minuti."),
    d('rei', "Venti minuti."),
    d('goro', "…venti."),
    d('hina', "Dimmi dove devo tirare."),
    n("E in quel momento, senza sapere bene come, sai esattamente dove.")
  ] });

/* ============================================================
   CAPITOLI: struttura, obiettivi, luoghi disponibili nell'hub
   ============================================================ */
IE.capitoli = [
  { n: 1, titolo: 'Undici nomi', periodo: 'Aprile',
    apertura: 'c1_1',
    obiettivo: 'Trovare undici iscritti e un insegnante che firmi.',
    luoghi: [
      { id: 'goro', nome: 'Segheria Ishizuka', icona: '🪵', scena: 'r_goro', se: function (S) { return !S.ha('goro'); } },
      { id: 'kenta', nome: 'Aula di scienze', icona: '🔬', scena: 'r_kenta', se: function (S) { return !S.ha('kenta'); } },
      { id: 'minoru', nome: 'Corridoio del primo piano', icona: '🏃', scena: 'r_minoru', se: function (S) { return !S.ha('minoru'); } },
      { id: 'benkei', nome: 'Mensa', icona: '🍙', scena: 'r_benkei', se: function (S) { return !S.ha('benkei'); } },
      { id: 'gemelli', nome: 'La strada del latte (5:10)', icona: '🚲', scena: 'r_gemelli', se: function (S) { return !S.ha('yuki'); } },
      { id: 'shinobu', nome: 'Aula di musica', icona: '🎭', scena: 'r_shinobu', se: function (S) { return !S.ha('shinobu') && S.rosa.length >= 5; }, bloccoTxt: 'Servono almeno 5 iscritti.' },
      { id: 'hina', nome: 'Campo di tiro con l\'arco', icona: '🏹', scena: 'r_hina', se: function (S) { return !S.ha('hina') && S.rosa.length >= 8; }, bloccoTxt: 'Hina non ti ascolterà finché non sarete almeno 8.' },
      { id: 'rikuto', nome: 'Sentiero dell\'alpeggio', icona: '🐐', scena: 'r_rikuto', se: function (S) { return !S.ha('rikuto') && S.rosa.length >= 10; }, bloccoTxt: 'Un\'ora di salita per un solo nome: vacci quando ne mancherà uno.' },
      { id: 'ayase', nome: 'Sala professori', icona: '📋', scena: 'r_ayase', se: function (S) { return S.rosa.length >= 11 && !S.flag.ayase; }, bloccoTxt: 'Prima gli undici. Poi il professore.' }
    ] },

  { n: 2, titolo: 'Il campo dietro la palestra', periodo: 'Maggio',
    apertura: 'c2_1',
    obiettivo: 'Rimettere in piedi il campo e trovare un allenatore.',
    luoghi: [
      { id: 'radio', nome: 'Il quaderno di Kenta', icona: '📻', scena: 'n_c2', se: function () { return true; } },
      { id: 'campo', nome: 'Sistemare il campo', icona: '🧹', scena: 'c2_campo', se: function (S) { return !S.flag.campo_pronto; } },
      { id: 'amagai', nome: 'Gabbiotto del custode', icona: '🔑', scena: 'c2_amagai', se: function (S) { return S.flag.campo_pronto && !S.flag.allenatore; }, bloccoTxt: 'Prima il campo.' },
      { id: 'sfida', nome: 'Sala professori', icona: '📋', scena: 'c2_sfida', se: function (S) { return S.flag.allenatore && !S.flag.sfida_kuzuryu; }, eff: [{ flag: 'sfida_kuzuryu' }] },
      { id: 'partita', nome: '⚽ Andare a Kuzuryū', icona: '🚌', scena: 'c2_partita', se: function (S) { return S.flag.sfida_kuzuryu; }, principale: true }
    ] },

  { n: 3, titolo: 'Il pullman', periodo: 'Giugno',
    apertura: 'c3b_1',
    obiettivo: 'Trovare settantaduemila yen, un pullman e undici maglie.',
    luoghi: [
      { id: 'radio', nome: 'Il quaderno di Kenta', icona: '📻', scena: 'n_c3', se: function () { return true; } },
      { id: 'nao', nome: 'Alimentari Kirishima', icona: '🏪', scena: 'c3b_nao', se: function (S) { return !S.ha('nao'); } },
      { id: 'lavori', nome: 'Due settimane di pomeriggi', icona: '🧤', scena: 'c3b_lavori', se: function (S) { return S.ha('nao') && !S.flag.soldi; }, bloccoTxt: 'Prima serve qualcuno che sappia contare.' },
      { id: 'maglie', nome: 'Casa Anzai, la sarta', icona: '🧵', scena: 'c3b_maglie', se: function (S) { return S.flag.soldi && !S.flag.maglie; }, bloccoTxt: 'Prima i soldi.' },
      { id: 'partita', nome: '⚽ Trasferta a Ōkubo', icona: '🚐', scena: 'c3b_partita', se: function (S) { return S.flag.maglie; }, bloccoTxt: 'Non si parte senza maglie.', principale: true }
    ] },

  { n: 4, titolo: 'Il portiere che aveva smesso', periodo: 'Fine giugno',
    apertura: 'c3_1',
    obiettivo: 'Convincere Zero a tornare in porta, poi la prima partita in casa.',
    luoghi: [
      { id: 'zero', nome: 'Via del tempio', icona: '🧤', scena: 'r_zero_1', se: function (S) { return !S.ha('zero'); } },
      { id: 'partita', nome: '⚽ Shirakaba — prima in casa', icona: '🏠', scena: 'c3_partita', se: function (S) { return S.ha('zero'); }, bloccoTxt: 'Non si gioca in casa senza portiere.', principale: true }
    ] },

  { n: 5, titolo: 'Quello che se ne va', periodo: 'Luglio',
    apertura: 'c5b_1',
    obiettivo: 'Capire cos\'è successo a Gorō. E decidere cosa farne.',
    luoghi: [
      { id: 'segheria', nome: 'Segheria Ishizuka', icona: '🪵', scena: 'c5b_segheria', se: function (S) { return !S.flag.goro_torna && !S.flag.goro_via; } },
      { id: 'partita', nome: '⚽ Ritorno con la Kuzuryū', icona: '🏠', scena: 'c5b_partita', se: function (S) { return S.flag.goro_torna || S.flag.goro_via; }, bloccoTxt: 'Prima si va in segheria.', principale: true }
    ] },

  { n: 6, titolo: 'La recinzione', periodo: 'Agosto',
    apertura: 'c4_1',
    obiettivo: 'Vincere il torneo estivo della vallata. In palio: il campo.',
    luoghi: [
      { id: 'radio', nome: 'La radio degli alimentari', icona: '📻', scena: 'n_c4', se: function () { return true; } },
      { id: 'semi', nome: '⚽ Semifinale — Tomegawa', icona: '🏆', scena: 'c4_semi', se: function (S) { return S.flag.ultimatum; }, principale: true }
    ] },

  { n: 7, titolo: 'Il posto in più', periodo: 'Settembre',
    apertura: 'c5_1',
    obiettivo: 'Prepararsi al Football Frontier.',
    luoghi: [
      { id: 'baseball', nome: '⚾ La rivincita di Tonda', icona: '⚾', scena: 'c7_baseball', se: function () { return true; }, principale: true }
    ] },

  { n: 8, titolo: 'Il girone', periodo: 'Ottobre',
    apertura: 'c8_1',
    obiettivo: 'Passare il girone D: Occult, Wild, Shuriken.',
    luoghi: [
      { id: 'radio', nome: 'La semifinale alla radio', icona: '📻', scena: 'n_c5', se: function () { return true; } },
      { id: 'occult', nome: '⚽ Girone — Occult', icona: '👻', scena: 'c5_occult', se: function (S) { return !S.flag.g_occult; }, eff: [{ flag: 'g_occult' }], principale: true },
      { id: 'wild', nome: '⚽ Girone — Wild', icona: '🐗', scena: 'c5_wild', se: function (S) { return S.flag.g_occult && !S.flag.g_wild; }, eff: [{ flag: 'g_wild' }], principale: true },
      { id: 'shuriken', nome: '⚽ Girone — Shuriken', icona: '🥷', scena: 'c5_shuriken', se: function (S) { return S.flag.g_wild; }, principale: true }
    ] },

  { n: 9, titolo: 'Quelli che ci guardano', periodo: 'Novembre',
    apertura: 'c9_1',
    obiettivo: 'Decidere cosa siete adesso che vi guardano.',
    luoghi: [
      { id: 'hina', nome: 'Campo di tiro con l\'arco', icona: '🏹', scena: 'c9_hina', se: function (S) { return !S.luoghiFatti.hina; } },
      { id: 'zero', nome: 'Gabbiotto del custode', icona: '🧤', scena: 'c9_zero', se: function (S) { return !S.luoghiFatti.zero; } },
      { id: 'partita', nome: '⚽ Nagano Higashi', icona: '🏙️', scena: 'c9_partita',
        se: function (S) { return S.luoghiFatti.hina && S.luoghiFatti.zero; },
        bloccoTxt: 'Prima si parla con Hina e con Zero.', principale: true }
    ] },

  { n: 10, titolo: 'Raimon', periodo: 'Fine novembre',
    apertura: 'c6_1',
    obiettivo: 'Una partita che non conta per nessuna classifica.',
    luoghi: [] },

  /* ---------- ATTO SECONDO: i dieci capitoli di Inazuma Eleven 2 ---------- */
  { n: 11, atto: 2, nGioco: 1, titolo: 'La Raimon in rovina', periodo: '8 dicembre · Inazuma',
    apertura: 'g1_1',
    obiettivo: 'Arrivare a Inazuma e vedere cosa è rimasto della Raimon.',
    luoghi: [
      { id: 'partita', nome: '⚽ Gemini Storm · Kasamino', icona: '☄️', scena: 'g1_partita', se: function () { return true; }, principale: true }
    ] },

  { n: 12, atto: 2, nGioco: 2, titolo: 'La congiura della palla nera', periodo: '11 dicembre · Nara',
    apertura: 'g2_1',
    obiettivo: 'Nara. Hanno portato via il primo ministro.',
    luoghi: [
      { id: 'partita', nome: '⚽ Gemini Storm · la seconda', icona: '☄️', scena: 'g2_partita', se: function () { return true; }, principale: true }
    ] },

  { n: 13, atto: 2, nGioco: 3, titolo: 'Una stella del nord', periodo: '15 dicembre · Hokkaido',
    apertura: 'g3_1',
    obiettivo: 'Hokkaido. La scuola media Hakuren, e il ragazzo che ha fermato un pullman.',
    luoghi: [
      { id: 'partita', nome: '⚽ Hakuren', icona: '🏔️', scena: 'g3_partita',
        se: function (S) { return !S.flag.hakuren_fatto; }, principale: true },
      { id: 'rivincita', nome: '⚽ Gemini Storm · la rivincita', icona: '☄️', scena: 'g3_rivincita',
        se: function (S) { return !!S.flag.hakuren_fatto; }, principale: true }
    ] },

  { n: 14, atto: 2, nGioco: 4, titolo: 'Un appuntamento con la divinità', periodo: '20 dicembre · Kyoto',
    apertura: 'g4_1',
    obiettivo: 'Kyoto. Epsilon ha già distrutto la Cloister e torna domani.',
    luoghi: [
      { id: 'partita', nome: '⚽ Epsilon', icona: '🛸', scena: 'g4_partita', se: function () { return true; }, principale: true }
    ] },

  { n: 15, atto: 2, nGioco: 5, titolo: 'Resa dei conti: Hillman contro Dark', periodo: '22 dicembre · Yokato',
    apertura: 'g5_1',
    obiettivo: 'Epsilon di nuovo, ma stavolta in panchina c\'è Ray Dark.',
    luoghi: [
      { id: 'partita', nome: '⚽ Epsilon Migliorata', icona: '🧬', scena: 'g5_partita', se: function () { return true; }, principale: true }
    ] },

  { n: 16, atto: 2, nGioco: 6, titolo: 'Tutto il divertimento del luna park', periodo: '23 dicembre · Inazuma',
    apertura: 'g6_1',
    obiettivo: 'Ventitré dicembre. Non doveva essere una giornata di calcio.',
    luoghi: [
      { id: 'partita', nome: '⚽ Il piazzale delle giostre', icona: '🎡', scena: 'g6_partita', se: function () { return true; }, principale: true }
    ] },

  { n: 17, atto: 2, nGioco: 7, titolo: 'Il taccuino segreto', periodo: '27 dicembre · Inazuma',
    apertura: 'g7_1',
    obiettivo: 'Il secondo taccuino di Dave Evans, sotto le macerie della Raimon.',
    luoghi: [
      { id: 'partita', nome: '⚽ Royal Academy', icona: '👑', scena: 'g7_partita', se: function () { return true; }, principale: true }
    ] },

  { n: 18, atto: 2, nGioco: 8, titolo: 'Il ritorno del fuoco', periodo: '4 gennaio · Okinawa',
    apertura: 'g8_1',
    obiettivo: 'Okinawa. Il ritorno di Axel Blaze, e un difensore che fa surf.',
    luoghi: [
      { id: 'partita', nome: '⚽ Il campo che adesso è un parcheggio', icona: '🏄', scena: 'g8_partita', se: function () { return true; }, principale: true }
    ] },

  { n: 19, atto: 2, nGioco: 9, titolo: 'La minaccia di The Genesis', periodo: '20 gennaio · Isola di Aliea',
    apertura: 'g9_1',
    obiettivo: 'L\'isola. The Genesis, e la verità su Alius Academy.',
    luoghi: [
      { id: 'partita', nome: '⚽ The Genesis', icona: '🌌', scena: 'g9_partita', se: function () { return true; }, principale: true }
    ] },

  { n: 20, atto: 2, nGioco: 10, titolo: 'Inazuma Eleven per sempre', periodo: '30 gennaio · Isola di Aliea',
    apertura: 'g10_1',
    obiettivo: 'L\'ultima partita. Ventisette persone e un nome da scegliere.',
    luoghi: [
      { id: 'partita', nome: '⚽ L\'ultima', icona: '⚡', scena: 'g10_partita', se: function () { return true; }, principale: true }
    ] }
];


/* ============================================================
   ALLENAMENTI
   ============================================================ */
IE.allenamenti = [
  { id: 'salita', nome: 'Corsa in salita', icona: '⛰️', desc: 'Fino al tornante e ritorno. Nessuno la ama.',
    su: ['res', 'vel'], q: 3, fat: 20, tutti: true },
  { id: 'muro', nome: 'Tiri contro il muro', icona: '🧱', desc: 'Duecento tiri. Poi altri duecento.',
    su: ['tir'], q: 4, fat: 22, ruoli: ['AT', 'CC', 'DF'] },
  { id: 'uno', nome: 'Uno contro uno', icona: '🤼', desc: 'A coppie, fino a che uno dei due non molla.',
    su: ['dif', 'fis'], q: 3, fat: 26, tutti: true },
  { id: 'cerchio', nome: 'Palla al cerchio', icona: '🔵', desc: 'Dieci in cerchio, due in mezzo. Umiliante e utile.',
    su: ['ctr'], q: 4, fat: 18, tutti: true },
  { id: 'porta', nome: 'Tiri in porta', icona: '🥅', desc: 'Il portiere si stanca prima di tutti.',
    su: ['par', 'tir'], q: 4, fat: 24, ruoli: ['PT', 'AT'] },
  { id: 'navetta', nome: 'Navette', icona: '🏃', desc: 'Venti metri avanti e indietro finché non gira la testa.',
    su: ['vel', 'gri'], q: 3, fat: 24, tutti: true },
  { id: 'sacchi', nome: 'Sacchi di segatura', icona: '🪵', desc: 'Li presta il padre di Gorō. Pesano come sembrano.',
    su: ['fis'], q: 5, fat: 28, tutti: true },
  { id: 'partitella', nome: 'Partitella', icona: '⚽', desc: 'Sette contro sette. Serve a ricordarsi perché.',
    su: ['gri', 'ctr'], q: 2, fat: 16, tutti: true, spirito: 3, exp: 145 }
];

/* Tecniche comuni che si possono imparare allenandosi. */
IE.imparabili = {
  tiro:   ['tiro_dritto', 'bordata', 'tiro_al_volo', 'colpo_testa', 'punizione', 'tiro_teso', 'tiro_a_giro', 'siluro', 'foglia_morta', 'raffica_tiri', 'cannonata'],
  drib:   ['finta_secca', 'passo_di_lato', 'doppio_passo', 'tunnel', 'cambio_passo', 'spalla', 'zig_zag', 'sombrero', 'folata', 'lettura'],
  blocco: ['contrasto', 'sbarramento', 'anticipo', 'scivolata', 'gabbia', 'pressing2', 'marcatura'],
  parata: ['presa_sicura', 'pugno_teso', 'uscita_bassa', 'presa_alta', 'volo_laterale', 'mani_pietra']
};

/* Tecniche che si imparano crescendo in affiatamento. */
IE.crescitaTecniche = {
  rei:     [{ am: 25, tec: 'passo_di_lato' }, { am: 55, tec: 'lettura' }, { am: 80, tec: 'undici_nomi' }],
  goro:    [{ am: 30, tec: 'ascia_di_legno' }, { am: 65, tec: 'valanga' }],
  hina:    [{ am: 30, tec: 'tiro_a_giro' }, { am: 60, tec: 'undici_nomi' }],
  zero:    [{ am: 30, tec: 'pugno_teso' }, { am: 65, tec: 'presa_falco' }],
  minoru:  [{ am: 25, tec: 'fuga_del_daino' }, { am: 60, tec: 'lama_vento' }],
  kenta:   [{ am: 30, tec: 'germoglio' }, { am: 60, tec: 'marcatura' }],
  yuki:    [{ am: 30, tec: 'corriere' }, { am: 60, tec: 'doppia_consegna' }],
  aoi:     [{ am: 30, tec: 'corriere' }, { am: 60, tec: 'raffica_gelata' }],
  shinobu: [{ am: 30, tec: 'illusione' }, { am: 60, tec: 'tiro_a_giro' }],
  rikuto:  [{ am: 30, tec: 'cannonata' }, { am: 65, tec: 'valanga' }],
  benkei:  [{ am: 30, tec: 'presa_sicura' }, { am: 60, tec: 'cancello_chiuso' }],
  daichi:  [{ am: 30, tec: 'cancello_pietra' }, { am: 65, tec: 'marcatura' }],
  nao:     [{ am: 30, tec: 'lettura' }, { am: 60, tec: 'germoglio' }],
  tu:      [{ am: 999, tec: null }]
};

/* Battute delle chiacchiere a bordo campo. */
IE.chiacchiere = {
  rei: ["Sai che ho sognato il calcio? Il calcio vero, con le regole. Mi sono svegliato che ero stanco.",
        "Mio padre ha chiesto quanto durano gli allenamenti. Gli ho detto «un po'». Non gli ho detto delle sei e mezza.",
        "Io non sarò mai bravo. Ma sarò sempre qui, che è un'altra cosa che si può fare."],
  goro: ["...", "Oggi ho spostato quattordici tronchi. Sono venuto lo stesso.", "Mio padre è venuto a guardare. Non gliel'ho chiesto io."],
  hina: ["Nel tiro con l'arco, se sbagli, hai sbagliato tu. Qui invece ci sono dieci persone in mezzo. È fastidioso. Mi sto abituando.",
         "Ti guardavo tirare. Chiudi la caviglia troppo presto. Domani te lo sistemo.",
         "Non ho ancora deciso se questo sport mi piace. Ho deciso che voglio essere brava."],
  zero: ["Non chiedermi di quella finale.", "...ho contato le parate di ieri. Nove. Le ho contate io, da solo, come fa Kenta.",
         "Mia madre mi ha chiamato. Le ho detto che sto giocando. È stata zitta un po' e poi ha detto «bene»."],
  minoru: ["Oggi non ho chiuso gli occhi! Cioè, li ho chiusi, ma dopo!",
           "Nella mia classe adesso mi chiamano «quello della squadra». Prima non mi chiamavano.",
           "Quanto ci ho messo? Cronometra! Cronometra!"],
  kenta: ["La nostra percentuale di passaggi riusciti è passata dal ventuno al quarantasette per cento. In quattro mesi.",
          "Ho aggiunto una colonna al quaderno. Si chiama «noi».",
          "Statisticamente non doveva succedere niente di quello che è successo. Ho smesso di aggiornare quella previsione."],
  yuki: ["Stamattina abbiamo fatto le consegne in ventisei minuti. Record.", "Aoi dice che tu corri male. Lo dice per bene.",
         "Il pomeriggio è tutto tempo regalato. Continuo a pensarlo."],
  aoi: ["...", "Yuki parla per due. Va bene così.", "Quando corriamo insieme non ci guardiamo. Sappiamo dov'è l'altro. È strano da spiegare."],
  shinobu: ["Il pubblico di quarantatré è più difficile di un pubblico di quattrocento. Quarantatré li conosci per nome.",
            "Ho scritto una scena su di noi. È bruttissima. La rifaccio.",
            "Fingere di cadere è un'arte. Fingere di stare bene quando cadi davvero è un'altra arte, e la sto imparando adesso."],
  rikuto: ["...", "Oggi la strada era aperta.", "Da lassù si vede il campo. Guardo se c'è qualcuno che corre."],
  benkei: ["Ho portato tre panini oggi. Uno è per Gorō, che mangia poco e non si capisce come faccia.",
           "Non sarò mai il portiere titolare. Va bene. Sono l'altro portiere. Ci vuole anche quello.",
           "Se il pallone arriva alla pancia lo prendo. È il mio raggio d'azione."],
  daichi: ["Ho giocato dieci anni contro un muro. Il muro non passa mai la palla indietro.",
           "Mio padre viene a vedere. Sta in fondo alla recinzione e non applaude. Ma viene.",
           "Nel raccoglitore verde c'era anche una foto. Non l'ho detto a nessuno. L'ho data a tuo nonno, Nao."],
  nao: ["Ho ordinato le magliette. Costavano troppo. Ho trattato. Adesso costano il giusto.",
        "Mio nonno alle sei e mezza è già in piedi. Lo è sempre stato. Adesso però esce.",
        "Il numero quattordici è mio e non lo do a nessuno."]
};

})();
