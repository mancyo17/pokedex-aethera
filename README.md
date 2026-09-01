# luthia
manuale

## Pokédex di Aethera

`pokedex.html` — compagno digitale per la campagna «Cronache di Allenatori» (Pokémon 5e),
**file unico** con tutto il database incorporato: si apre nel browser, anche da telefono,
senza installare nulla; i salvataggi restano sul dispositivo di ognuno (con
Esporta/Importa per condividerli).

- **Schede Pokémon** (schermata iniziale): una galleria di schede, una per giocatore,
  ognuna indipendente ed esportabile come file a sé. Dentro la scheda: **squadra di sei**
  in stile scheda del personaggio (scegli la specie e si compila da sola dal dex) e
  **Box** con tutti gli altri Pokémon catturati, con scambio in due tocchi. Mosse con
  dettagli e danni scalati al livello, PF/competenza/STAB ricalcolati a ogni livello,
  evoluzioni che aggiornano la scheda.
- **Natura e abilità come nei giochi**: alla cattura escono da sole — natura fra le 21
  ufficiali, abilità sorteggiata fra quelle che quella specie può avere (nascosta compresa).
  Quando il Pokémon evolve l'abilità può cambiare: decide il giocatore (o il GM imposta
  «la tiene» / «si ritira sempre»).
- **Poké Market**: scaffali per categoria con Poké Ball, cure, vitamine, pietre, oggetti
  chiave e **tutte le 256 MT**, ognuno con il suo prezzo. Si compra per il giocatore la cui
  scheda è aperta: i soldi si scalano da soli, la roba finisce nello zaino e si può
  rivendere a metà prezzo. Ogni articolo ha la sua scheda con la descrizione per intero e,
  per le MT, la scheda completa della mossa: tipo, PP, gittata, danni per livello ed effetti.
  Lo zaino è diviso in tasche e le MT si usano direttamente da lì, che le propone solo ai
  Pokémon che possono impararle.
- **Centro Pokémon**: un tocco e tutta la squadra torna a PF pieni, senza stati e con i
  PP ricaricati; si può curare solo una cosa alla volta o includere anche il Box.
- **Stati e PP**: i sette stati (avvelenato, iper-avvelenato, scottato, paralizzato,
  addormentato, congelato, confuso) stanno sulla scheda con il loro effetto, e il pulsante
  «fine turno» tira i danni e i tiri salvezza per liberarsene. Gli effetti sono quelli che
  il sistema P5e descrive nelle proprie abilità e mosse — *Dentistretti* (svantaggio,
  riduzione dei danni, danni a fine turno), *Velencura*, *Tossina* (il doppio), *Gelamento*
  (velocità 0), *Sveglialampo* — mentre i numeri, che il database non riporta, si regolano
  da **Impostazioni → Stati**. Ogni mossa negli slot ha i suoi PP, che si consumano usandola
  e si ricaricano con Etere, Elisir o al Centro; si possono spegnere del tutto.
- **Usare gli oggetti**: dal Pokémon, «🎒 Usa oggetto» mostra cosa c'è nello zaino che serve
  davvero in quel momento — pozioni e Acqua Fresca se è ferito, antidoti se ha uno stato,
  Etere se ha finito i PP — tira la formula di cura scritta sull'oggetto e lo consuma.
- **Natura scegliibile**: come per l'abilità, l'elenco completo delle 21 nature con i loro
  modificatori; alla cattura resta sorteggiata.
- **Descrizioni complete**: tutte le **766 mosse** hanno la loro scheda — le 675 del dex più
  le 91 di gen 8/9 che il dex non riporta, scritte sulle stesse convenzioni (formule di danno
  per fascia di livello, tiri salvezza, effetti) e segnate come schede di casa.
  Le **voci del Pokédex** delle specie non esistono nel database: si prendono in italiano
  dall'archivio pubblico PokéAPI la prima volta che si apre una scheda e restano poi salvate
  sul dispositivo. Ogni gioco ne scrive una riga soltanto, quindi ne mettiamo in fila **tre
  diverse** — saltando quelle che ripetono la stessa cosa — e in coda dove vive la specie e
  di che colore è, così la voce è un paragrafo e non mezza frase. Chi preferisce può scrivere
  la propria descrizione e la propria categoria dall'editor della specie: quelle hanno sempre
  la precedenza.
- **Fuori dalla lotta**: ogni mossa, tutte e 766, dice anche a cosa serve **quando non si sta
  combattendo** — su una zona, su un oggetto, su una persona. Lanciafiamme ripulisce un roveto
  e accende un fuoco da campo (e in un bosco secco il GM chiede una prova per tenerlo a bada),
  Terremoto scopre gallerie e fa cadere chi è in equilibrio, Sonnifero addormenta una guardia,
  Danzaspada apre le feste di paese, Splash non fa assolutamente nulla. Non sono regole nuove:
  è il testo che il GM legge per dire di sì. Le mosse iconiche — Surf, Volo, Forza, Sub, Fossa,
  Flash, Taglio, Teletrasporto — hanno il loro uso classico da gioco. Il riquadro compare nella
  scheda della mossa e in quella delle MT al Market, e si riscrive dall'editor delle mosse come
  tutto il resto.
- **MT e mosse modificabili**: da Impostazioni → Tabella MT si corregge quale mossa insegna
  ogni MT, si creano **MT nuove** con un numero libero e si apre l'**editor delle mosse** —
  tipo, PP, attivazione, gittata, danni per fascia di livello e descrizione. Serve soprattutto
  per le 91 mosse recenti che il dex P5e non descrive: scritte una volta, compaiono ovunque
  come le altre. Tutto con ripristino.
- **Lealtà**: il valore del sistema P5e usato dalle bacche che riducono le caratteristiche e
  dalla Calmanella, ora tracciato sulla scheda; alcune Poké Ball la assegnano alla cattura.
- **Statistiche del giocatore**: record vittorie/sconfitte con percentuale, Pokémon
  catturati, medaglie, Pokémon più usato, iniziale, mossa preferita, XP guadagnati,
  avversario ricorrente e composizione della squadra per tipo. Si aggiornano da sole
  con le lotte, le catture e l'esperienza.
- **Pokédex ordinabile**: per numero, nome, sfida (SR), tipo, PF, CA o livello minimo.
- **Immagini**: sprite accanto a ogni specie nell'elenco, nelle carte della squadra e del Box,
  l'artwork grande nella scheda, e la figura di **ogni oggetto** nel Market, nello zaino e
  nella schermata «usa oggetto» — le MT prendono l'icona del tipo della mossa che insegnano.
  Arrivano dall'archivio pubblico PokéAPI, i Pokémon per numero del dex e gli oggetti per
  nome: non sono nel repository, quindi la prima volta serve connessione e poi restano nella
  cache del browser. Le forme regionali hanno il numero della specie base, perciò lì compare
  un segnaposto invece di un'immagine sbagliata, e nell'editor della specie c'è un campo per
  incollare l'indirizzo giusto.
- **Schede modificabili da chiunque**: ogni specie del dex si può correggere — utile
  soprattutto per le MT, visto che il dex P5e standard si ferma alla MT 100 e le 156 più
  recenti non sono assegnate alle specie vecchie. Dalla schermata «Usa una MT» c'è
  «Ne manca una?»: si cerca, si aggiunge alla specie una volta sola e vale per sempre.
  Ogni modifica si annulla con **Ripristina** e resta sul proprio dispositivo.
- **Pokédex**: 1043 specie con scheda completa (CA, PF, statistiche, tiri salvezza,
  abilità, mosse per livello, evoluzioni, MT con numero e nome) — senza indicazioni su
  dove trovarle in Aethera, per non fare spoiler ai giocatori. Comprende le 896 specie
  del dex P5e standard più le **132 schede ufficiali di Spada/Scudo, Leggende Arceus e
  delle forme di Galar e di Hisui**, convertite dalle pagine di poke5e.app.
- **Console del GM**: i giocatori mandano la propria scheda con un codice da incollare in
  chat (o il file .json) e il GM vede squadre, livelli, PF, mosse e zaino di tutti.
  Nessun server: i salvataggi restano sui dispositivi.
- **Lotte**: tavolo del GM per più scontri in contemporanea — PF auto-calcolati, stati,
  prova di cattura in stile PHB (CD = base + livello + PF rimasti). Le Poké Ball non
  aiutano il tiro: **abbassano la CD** (Mega Ball −5, Ultra Ball −10, quelle specialistiche
  −8 quando ricorre la loro condizione), e la Master Ball cattura senza tirare.
- **PNG**: capipalestra, rivali del torneo, Superquattro e Campione della guida di Aethera
  già pronti (squadra, formato, regola speciale), modificabili e creabili da zero, con
  apertura rapida della lotta.
- **Oggetti**: catalogo con Poké Ball, cure, vitamine, pietre evolutive e oggetti chiave
  (mappa città, canna da pesca, flauto Poké…). Gli **strumenti tenuti** — 93 dal dex, fra cui
  35 bacche, Avanzi, Corpetto Assalto, Palloncino — ora hanno un prezzo e si comprano al
  Market; ne ho aggiunti otto che mancavano (Bendascelta, Sciarpascelta, Occhialiscelta,
  Evolcondensa, Vitasfera, Elmo Ruvido, Vigorcintura, Restipietra) con effetti scritti sulle
  convenzioni del sistema e correggibili. Ogni giocatore ha zaino con quantità e soldi.
- **Specie personalizzate**: editor per creare o modificare qualsiasi Pokémon. Le linee di
  Scarlatto/Violetto (iniziali di Paldea, Charcadet→Armarouge/Ceruledge, Frigibax→Baxcalibur)
  restano schede di casa, riconoscibili e modificabili; tutto il resto di gen 8 usa i numeri
  ufficiali.
- **Tabella MT completa**: 256 macchine tecniche con numero e nome italiano, usate sia dalle
  schede del dex sia dal sistema dei 4 slot mosse.
- **Calcoli** e **Tipi**: formule P5e e tabella di efficacia in due direzioni.

### Installazione e aggiornamenti

L'app è una PWA: aperta da un indirizzo `https://` si installa sulla schermata Home
(iPhone/iPad da Safari con «Aggiungi a Home», Android da Chrome con «Installa app») e da lì
funziona anche senza connessione.

Gli aggiornamenti **non cancellano nulla**: i salvataggi vivono in `localStorage` e hanno un
numero di schema. Quando l'app cambia struttura, all'avvio converte i dati vecchi da sola
(e prima mette da parte una copia di sicurezza, ripristinabile da *Copie di sicurezza*).
Quando esce una versione nuova compare in basso una barra **Aggiorna**: si applica quando
lo decide il giocatore, mai a metà di una lotta.

`p5e-data.js` è generato dal dataset open source del dex P5e standard
(Jerakin/p5e-data, branch no-variants) più i datafiles di Jerakin/Pokedex5E.

---

## Amanome Eleven — «Undici nomi»

`inazuma/` — gioco di ruolo calcistico ispirato all'universo dei primi tre
**Inazuma Eleven**, giocabile nel browser **senza rete**. Si apre da
`inazuma/index.html`, funziona da telefono, e il salvataggio resta sul
dispositivo (con Esporta/Importa per spostarlo).

Non è un rifacimento del gioco Nintendo: niente sprite animati né campo in 3D.
È una partita **raccontata** — dialoghi in stile chat, un campo schematico, e
un motore di duelli a turni sotto.

### La storia

Sei uno studente della **scuola media di Amanome**: un paese di
quattrocentododici abitanti in una valle di montagna, trentotto studenti in
tutto, tre ore di corriera dalla città. Dietro la palestra c'è un prato con due
porte arrugginite: il club di calcio è stato sciolto nel 1986 e da allora non
l'ha più chiesto nessuno.

Il regolamento scolastico dice che per fondare un club di calcio servono
**undici iscritti e un insegnante che firmi**. Su trentotto studenti, di cui
nove già nel club di baseball, e cinque professori.

**Dieci capitoli**, da aprile a giugno dell'anno dopo:

1. **Undici nomi** *(aprile)* — convincere dieci persone, quasi nessuna delle
   quali ha mai toccato un pallone.
2. **Il campo dietro la palestra** *(maggio)* — falciare, togliere duemila
   sassi, tracciare le linee, e trovare qualcuno che sappia allenarvi.
3. **Il pullman** *(giugno)* — il campionato si gioca anche fuori, e servono
   settantaduemila yen, un mezzo e undici maglie. Non ci sono. Il paese però ha
   sacchi da scaricare, un piazzale di tempio da rastrellare e un magazzino
   senza ascensore.
4. **Il portiere che aveva smesso** *(fine giugno)* — Zero, otto gol in una
   finale davanti a duemila persone, sceso da un pullman con la borsa vuota.
5. **Quello che se ne va** *(luglio)* — Gorō non viene da tre giorni. È in
   segheria, e non è un capriccio: è un ordine da quattrocento travi da cui
   dipende se la sua famiglia resta ad Amanome. È esattamente quello che ha
   sciolto il club nel 1986.
6. **La recinzione** *(agosto)* — il comune vuole farci il parcheggio. Il campo
   si salva solo vincendo il torneo estivo.
7. **Il posto in più** *(settembre)* — ripescati al Football Frontier. E Tonda
   si riprende la rivincita che aveva promesso ad aprile.
8. **Il girone** *(ottobre)* — Occult, Wild, Shuriken: le stesse tre squadre che
   l'anno prima si era trovato la Raimon.
9. **Quelli che ci guardano** *(novembre)* — il giornale della prefettura parla
   di voi, dietro la recinzione da tre spettatori si passa a ventidue, e alla
   Nagano Higashi arriva in mente di offrire a Hina una borsa di studio. Ed è la
   scuola in cui Zero ha preso otto gol.
10. **Raimon** *(fine novembre)* — un pullman si ferma davanti alla scuola. Poi
    l'inverno, la neve sul campo, le iscrizioni di gennaio, e a giugno la porta
    nord che qualcuno aveva piegato nel 1986.

### La scheda del carattere

Alla creazione scegli **che tipo sei**: *Fuoco addosso*, *Testa fredda*,
*Battuta pronta*, *Poche parole*, *Testardo*. Non è un dettaglio estetico: **è
quello che dici per tutta la storia**. Le battute del capitano hanno una
versione per ciascun carattere, e gli altri ti rispondono di conseguenza.

Poi ci sono tre tratti che crescono con quello che scegli di dire:

- **❤️ Cuore** — quanto metti le persone prima del risultato;
- **🧠 Testa** — quanto ragioni prima di muoverti;
- **🦴 Schiena** — quanto sei disposto a startene lì quando conviene andarsene.

Non sono decorazioni: **certe strade si aprono solo se sei arrivato abbastanza
in là**. In segheria, davanti al padre di Gorō, puoi zittire l'adulto e chiedere
al ragazzo di parlare — ma solo se hai la schiena per farlo. A Hina puoi
chiedere se ha paura di andarsene o di scoprire che qui non le bastava — ma solo
se hai la testa per arrivarci.

La scheda tiene anche l'elenco dei **momenti che ti hanno definito**: cosa hai
scelto, e cosa è costato.

### Il Football Frontier visto da Amanome

Mentre giochi in valle, dall'altra parte del Giappone succede tutto il resto.
Lo segui dal quaderno di Kenta e dalla radio sopra il banco frigo degli
alimentari, con due giorni di ritardo e il segnale che salta quando piove:

- maggio — a Inazuma una scuola con **sette giocatori**, che stava per sciogliere
  il club, sfida la Royal Academy invece di chiudere;
- giugno — la Raimon ha un attaccante nuovo, uno che aveva smesso di giocare
  «per motivi personali»; e il loro portiere si allena da solo all'argine del
  fiume, tutte le mattine, contro un muro di cemento;
- agosto — comincia il Football Frontier, e nel girone della Raimon ci sono le
  stesse tre squadre del tuo;
- ottobre — la **semifinale**: la Royal Academy, cinque titoli su sei, perde
  contro l'Istituto Zeus. Tre giorni dopo **Jude Sharp si trasferisce alla
  Raimon**, e sul giornale c'è solo una foto sgranata senza spiegazioni;
- novembre — la Raimon vince la finale. Poi un pullman con la loro scritta
  sulla fiancata si ferma davanti alla tua scuola.

Se glielo chiedi, Jude ti dice lui perché ha cambiato maglia. È una scena
facoltativa e vale la pena di farla.

### Come si gioca

- **La partita** è una catena di duelli. Chi ha la palla sceglie *dribbling*,
  *passaggio* o *tiro*; chi difende sceglie *contrasto*, *tecnica di blocco* o
  *raddoppio* (che se salta apre il campo il doppio). Vince chi somma di più
  fra statistiche, tecnica speciale, elemento, fiato e fortuna.
- **Quattro zone** — difesa, centrocampo, trequarti, area: ogni duello vinto
  ti sposta avanti di una. Si tira dalla trequarti (male) o dall'area (bene).
- **Elementi**: 🔥 Fuoco batte 🌲 Bosco batte 🌀 Aria batte ⛰️ Terra batte 🔥
  Fuoco, per circa il 15%.
- **Sessanta tecniche speciali** fra tiri, dribbling, blocchi e parate, comprese
  quelle **combinate**, che funzionano solo se in campo ci sono i compagni
  giusti.
- **Fra una partita e l'altra non c'è nessun calendario.** Ci si allena finché
  si regge in piedi: ogni esercizio costa **fiato** a chi lo fa, e il fiato torna
  pieno solo giocando. In partita invece si entra sempre al massimo — la fatica
  degli allenamenti non se la porta dietro nessuno.
- **Prima di ogni partita** vedi la scheda dell'avversario con il **livello
  consigliato** accanto alla media dei tuoi undici, e un giudizio onesto su come
  può andare. Se non ti piace quello che leggi, torni indietro, ti alleni ancora
  e la partita ti aspetta.
- **Novantacinque tecniche**, e in campo se ne portano **quattro a testa**: quali
  si sceglie dalla scheda del giocatore. Se ne imparano allenandosi, crescendo di
  livello e parlando nello spogliatoio.
- **Due squadre nuove** lungo la strada: la scuola media di Ōkubo, che ha undici
  studenti in tutto il secondo anno e gioca in nove più due presi in prestito
  dalla pallavolo, e la Nagano Higashi, ottocento studenti, quella in cui Zero
  ha preso otto gol.
- **Dalla panchina**: cinque formazioni, sostituzioni all'intervallo e due
  ordini per tempo (pressing, tutti dietro, ci mettiamo il cuore).
- Quanto vuoi decidere in partita lo scegli tu, da Opzioni: *rapida* (solo i
  tiri in area), *normale*, *completa* (ogni singolo duello).
- **Sul campo si vedono tutti e ventidue**: le pedine si muovono a ogni azione,
  chi ha la palla è cerchiato d'oro, chi sta per essere contrastato di rosso.

### Le firme

Nessuno impara la propria tecnica studiando: **gli succede addosso**. Ognuno dei
tredici ha una tecnica che è solo sua e che si sblocca in una scena scritta, che
il gioco fa partire da solo quando ne ricorrono le condizioni — a volte in
allenamento, a volte dentro una partita.

Gorō la trova nell'uno contro uno, il giorno che smette di inseguire. Hina al
duecentesimo tiro contro il muro, quando capisce che il problema non era la mira.
Zero in porta, dopo il secondo gol subito, contando le parate che nessuno gli ha
mai contato. Rei nel secondo tempo di una partita persa, restando in piedi più a
lungo dell'altro. Rikuto il pomeriggio in cui gli dicono che lì non ci sono
capre e può calciare forte.

Alcune di queste tecniche valgono di più quando serve: *Ultimo a Mollare* cresce
se siete sotto, *Zero* se avete già preso gol, *Primo sul Pallone* se il fiato è
pieno. Sulla scheda di ogni giocatore c'è scritto cosa gli manca perché succeda.

### Contatti

Come nei giochi, **chi hai battuto poi puoi chiamartelo in squadra**. Ogni partita
giocata vale contatti — tre per una vittoria, due per un pareggio, uno per una
sconfitta — e la rosa di ogni squadra che hai sconfitto compare nella schermata
*Contatti*, con il suo prezzo. Arrivano con le loro tecniche e con le statistiche
che avevano quando ti hanno giocato contro, e da lì crescono insieme a voi.

Sì: se batti la Raimon, puoi chiamare Mark Evans.

### I volti

Ogni personaggio ha un **ritratto disegnato dal gioco stesso**: nessuna immagine
da scaricare, nessun disegno di altri: sono forme vettoriali generate al volo da
taglio, colore dei capelli, incarnato, sguardo, bocca e un dettaglio (fascia,
occhiali, visiera, cerotto, berretto). Compaiono nella chat accanto a chi parla,
nella rosa e in partita.

Il tuo volto lo componi tu alla creazione — dodici tagli, tredici colori, sei
incarnati, e un pulsante «Sorteggia» se non hai voglia di scegliere. Gli
avversari ricevono un volto generato dal loro nome, quindi lo stesso giocatore
ha sempre la stessa faccia.

### Giocarlo da computer

Su uno schermo grande il gioco si apre **su due colonne**: in partita il campo,
il portatore e il registro stanno a sinistra, le azioni e la panchina a destra;
nell'hub i luoghi della storia da una parte e il club dall'altra; la rosa passa a
due colonne di schede.

E si gioca **tutto da tastiera**:

| tasto | cosa fa |
|---|---|
| `1` … `9` | sceglie l'opzione con quel numero (compaiono i numerini sui pulsanti) |
| `Invio` / `spazio` | preme il pulsante principale — Avanti, Continua, Scendere in campo |
| `Esc` / `←` | torna indietro e chiude le finestrelle |
| `S` | salta una scena di dialogo |

#### Un file solo, da portare via

Nella cartella c'è **`inazuma/amanome-eleven.html`**: è tutto il gioco — codice,
storia, volti, icona — dentro un unico file HTML da 370 KB.

Si scarica, si mette dove si vuole e **si apre con un doppio clic**. Niente
internet, niente installazione, niente server: funziona anche da una chiavetta
USB. Su Chrome e Firefox salva regolarmente; Safari non fa salvare i file aperti
dal disco, e in quel caso il gioco lo dice e conviene usare *Esporta su file*
prima di chiudere.

Il file si rigenera dopo ogni modifica al codice con:

```
node inazuma/strumenti/costruisci-unico.js
```

Il salvataggio sta nel browser che stai usando, quindi non si sposta da solo fra
telefono e computer: per passarlo, *Esporta su file* di qua e *Importa* di là.

### Installarlo sul telefono

Non c'è niente da scaricare da uno store: è una pagina che il telefono salva
come app, e da lì funziona anche senza rete.

- **iPhone/iPad**: apri il gioco con **Safari** (su iOS solo Safari può
  installare) → pulsante **Condividi** → **Aggiungi a schermata Home**.
- **Android**: apri il gioco con **Chrome** → **tre puntini** in alto a destra →
  **Installa app** (o *Aggiungi a schermata Home*).

Poi aprilo dall'icona almeno una volta con la rete accesa: serve a salvare tutto
sul dispositivo. Le stesse istruzioni sono dentro il gioco, in
*Opzioni → Installare sul telefono*.

Il salvataggio resta nel browser di quel telefono: per spostarlo, *Esporta su
file* da una parte e *Importa* dall'altra.

Gioco di fan, non ufficiale. I nomi delle squadre e dei personaggi canonici
seguono l'adattamento italiano; tutto il resto — Amanome, i suoi tredici
ragazzi, il custode e la valle — è originale.
