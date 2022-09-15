<h3>Dette er den tekniske oppgaven jeg fikk tilsend etter speedintervju mandag 12. september 2022. Jeg har hovedsakelig fokusert på back-end, men har også laget en enkel HTML-side som henger sammen med serveren. </h3>

<h3>Hva programmet gjør:</h3>
Programmet lar brukeren utføre en eller flere PEP-søk av et enkeltindivid.

<h3>Hvordan programmet fungerer:</h3>
Programmet kjører i en node.js server som brukeren kan interagere med via en HTML-side. Node.js serveren er bygget med rammeverket "express" og noen andre utvidelser som 	
gjør utvikling mere effektivt og minsker kompleksiteten. HTML-siden har et tekstfelt og en knapp som lar brukeren sende en spørring etter et individ. Deretter blir 
informasjonen sendt til serveren der det blir gjort et API-kall med "node-fetch". Jeg bruker Stacc sin API for å hente ut data. Når serveren har mottat en respons i form av 
et JSON-objekt blir navn og "score" hentet ut og sendt tilbake til HTML-siden via EJS.

<h3>Oppbygning:</h3>
<li>Webside: HTML, CSS, EJS</li>
<li>Webserver: Node.js, express, node-fetch, nodemon</li>
