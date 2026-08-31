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

/* ============================================================
   CAPITOLO 1 — UNDICI NOMI
   ============================================================ */

sc({ id: 'c1_1', luogo: 'Scuola media di Amanome — Aula 2-A',
  righe: [
    n("Amanome ha quattrocentododici abitanti, un distributore automatico che funziona d'estate, e una scuola media con trentotto studenti divisi in tre classi."),
    n("Il pullman per la città passa due volte al giorno. Alle 6:40 e alle 17:10. Se lo perdi, dormi dove sei."),
    n("È il primo lunedì di aprile. Fuori dalla finestra c'è ancora neve sulla cresta del monte Kurogane."),
    d('rei', "Ehi. Ehi. Stai guardando fuori da venti minuti."),
    tu("Guardo il campo."),
    d('rei', "Quale campo?"),
    tu("Quello dietro la palestra."),
    d('rei', "Quello è un prato. Con dentro due cose di ferro arrugginite."),
    tu("Sono due porte."),
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
    tu("Esistiamo."),
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
  eff: [{ spirito: 8 }, { exp: 480 }], poi: { capitolo: 2 } });

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
  eff: [{ spirito: 10 }, { exp: 360 }], poi: { capitolo: 2 } });

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
    tu("Ce lo insegni."),
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
  eff: [{ spirito: 12 }, { exp: 1040 }], poi: { capitolo: 3 } });

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
  eff: [{ spirito: 14 }, { exp: 880 }], poi: { capitolo: 3 } });

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
  eff: [{ spirito: 13 }, { exp: 960 }], poi: { capitolo: 3 } });

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
  eff: [{ spirito: 12 }, { exp: 1280 }], poi: { capitolo: 4 } });

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
  eff: [{ spirito: 10 }, { exp: 1120 }], poi: { capitolo: 4 } });

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
    d('daichi', "E invece siete ancora undici."),
    tu("Dodici."),
    d('daichi', "Dodici. Con il portiere che ha smesso."),
    n("Guarda verso la scuola. Da qui si vede il tetto della palestra e, dietro, un pezzo di prato con la fettuccia bianca e rossa che si muove nel vento."),
    d('daichi', "Ho una condizione."),
    tu("Dimmi."),
    d('daichi', "Se perdiamo il torneo, il primo settembre vengo lì con voi a guardare i camion. In piedi. Tutti e tredici."),
    d('daichi', "Non voglio che qualcuno se ne stia a casa a far finta di niente. Quello ha rovinato mio nonno."),
    tu("Tredici."),
    d('daichi', "Tredici.")
  ],
  eff: [{ recluta: 'daichi' }, { spirito: 15 }],
  poi: { hub: true } });

sc({ id: 'c4_nao', luogo: 'Alimentari Kirishima — chiuso, luce accesa',
  righe: [
    n("Nao sta facendo l'inventario delle bibite alle nove di sera con la faccia di una che sta pensando ad altro."),
    d('nao', "Siete tredici."),
    tu("Tredici."),
    d('nao', "Ne giocano undici. Due in panchina. Se uno si fa male all'ultimo minuto, siete undici esatti."),
    d('nao', "Se se ne fanno male due, non potete nemmeno scendere in campo, e il regolamento del torneo dice sconfitta a tavolino."),
    tu("Kenta ha fatto lo stesso conto ieri."),
    d('nao', "Kenta fa i conti. Io tengo i registri, e nel registro del club c'è una casella vuota che si chiama «riserve»."),
    n("Chiude il quaderno dell'inventario."),
    d('nao', "Io scrivo, non corro."),
    tu("Lo so."),
    d('nao', "…quanti siete? Tredici? Ah."),
    d('nao', "Va bene. Va bene."),
    n("Prende la penna delle bollette e firma il modulo del club con la calligrafia di una che firma cose da quando ha undici anni."),
    d('nao', "Ma il numero lo scelgo io. Quattordici. Come il mio compleanno e come la casella che era vuota."),
    n("Quattordici tesserati.")
  ],
  eff: [{ recluta: 'nao' }, { spirito: 8 }], poi: { hub: true } });

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
  eff: [{ flag: 'campo_perso' }, { exp: 1200 }], poi: { capitolo: 5 } });

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
  eff: [{ flag: 'campo_salvo' }, { spirito: 20 }, { exp: 1680 }], poi: { capitolo: 5 } });

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
  eff: [{ exp: 1040 }], poi: 'c5_wild' });

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
  eff: [{ exp: 1360 }], poi: { capitolo: 6 } });

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
  eff: [{ flag: 'qualificati' }, { spirito: 15 }, { exp: 1600 }], poi: { capitolo: 6 } });

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
  eff: [{ spirito: 25 }, { exp: 2400 }, { flag: 'finale' }], poi: 'c6_epilogo' });

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
  eff: [{ spirito: 20 }, { exp: 2080 }, { flag: 'finale' }], poi: 'c6_epilogo' });

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
  eff: [{ spirito: 22 }, { exp: 2240 }, { flag: 'finale' }], poi: 'c6_epilogo' });

sc({ id: 'c6_epilogo', luogo: 'Amanome — dicembre',
  righe: [
    n("Il centro polifunzionale per anziani di Amanome è stato inaugurato l'8 dicembre. Il parcheggio sta dove c'era la rimessa del capo villaggio."),
    n("Il club di calcio della scuola media di Amanome conta quattordici tesserati."),
    n("A gennaio, alle iscrizioni del secondo quadrimestre, si presenteranno altri tre studenti. Uno è un primo anno che ha visto la partita contro la Raimon da dietro la recinzione, in braccio a suo padre."),
    n("Nel gabbiotto del custode, la fotografia del 1985 non è più dietro la porta."),
    n("È sul muro, accanto a un'altra."),
    n("Nella seconda, quattordici ragazzi in verde e bianco su un campo di novantuno metri per cinquantatré, con dietro una porta ancora piegata."),
    n("Sotto, scritto a penna sul bordo bianco, undici nomi. E poi tre. E poi lo spazio per gli altri."),
    d('rei', "Allora, capitano."),
    tu("Dimmi."),
    d('rei', "Cosa facciamo adesso?"),
    tu("Domani alle sei e mezza."),
    d('rei', "…lo sapevo che me la facevi pagare per due anni."),
    n("— FINE DEL PRIMO ANNO —", 'urlo'),
    n("Il club continua: puoi allenare la squadra e giocare amichevoli contro tutte le squadre che hai incontrato, comprese quelle che ti hanno battuto.")
  ],
  eff: [{ flag: 'gioco_finito' }, { sblocca: 'amichevoli' }], poi: { hub: true } });


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

sc({ id: 'f_tu', firma: null, titolo: 'Il capitano', luogo: 'Secondo tempo — sotto di due',
  righe: [
    n("Sotto di due. Venti minuti alla fine."),
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

  { n: 3, titolo: 'Il portiere che aveva smesso', periodo: 'Giugno',
    apertura: 'c3_1',
    obiettivo: 'Convincere Zero a tornare in porta, poi la prima partita in casa.',
    luoghi: [
      { id: 'radio', nome: 'Il quaderno di Kenta', icona: '📻', scena: 'n_c3', se: function () { return true; } },
      { id: 'zero', nome: 'Via del tempio', icona: '🧤', scena: 'r_zero_1', se: function (S) { return !S.ha('zero'); } },
      { id: 'partita', nome: '⚽ Shirakaba — prima in casa', icona: '🏠', scena: 'c3_partita', se: function (S) { return S.ha('zero'); }, bloccoTxt: 'Non si gioca in casa senza portiere.', principale: true }
    ] },

  { n: 4, titolo: 'La recinzione', periodo: 'Luglio — Agosto',
    apertura: 'c4_1',
    obiettivo: 'Vincere il torneo estivo della vallata. In palio: il campo.',
    luoghi: [
      { id: 'radio', nome: 'La radio degli alimentari', icona: '📻', scena: 'n_c4', se: function () { return true; } },
      { id: 'nao', nome: 'Alimentari Kirishima', icona: '🏪', scena: 'c4_nao', se: function (S) { return S.flag.ultimatum && !S.ha('nao'); } },
      { id: 'semi', nome: '⚽ Semifinale — Tomegawa', icona: '🏆', scena: 'c4_semi', se: function (S) { return S.flag.ultimatum; }, principale: true }
    ] },

  { n: 5, titolo: 'Il posto in più', periodo: 'Settembre — Ottobre',
    apertura: 'c5_1',
    obiettivo: 'Superare il girone di qualificazione del Football Frontier.',
    luoghi: [
      { id: 'radio', nome: 'La semifinale alla radio', icona: '📻', scena: 'n_c5', se: function () { return true; } },
      { id: 'occult', nome: '⚽ Girone — Occult', icona: '👻', scena: 'c5_occult', se: function (S) { return !S.flag.g_occult; }, eff: [{ flag: 'g_occult' }], principale: true },
      { id: 'wild', nome: '⚽ Girone — Wild', icona: '🐗', scena: 'c5_wild', se: function (S) { return S.flag.g_occult && !S.flag.g_wild; }, eff: [{ flag: 'g_wild' }], principale: true },
      { id: 'shuriken', nome: '⚽ Girone — Shuriken', icona: '🥷', scena: 'c5_shuriken', se: function (S) { return S.flag.g_wild; }, principale: true }
    ] },

  { n: 6, titolo: 'Raimon', periodo: 'Novembre',
    apertura: 'c6_1',
    obiettivo: 'Una partita che non conta per nessuna classifica.',
    luoghi: [] }
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
    su: ['gri', 'ctr'], q: 2, fat: 16, tutti: true, spirito: 3, exp: 220 }
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
