# Opdrachtbeschrijving

## Inleiding
Bob en Betsy hebben een website over planten en willen deze graag in zowel Spaans als Nederlands aanbieden. De gebruiker moet door het vlag-icoontje op de website van taal kunnen wisselen.
Alle vertalingen hebben zij gelukkig al voor je gemaakt. Gezien jij al super veel hebt geleerd over React, weet je dat je dit het beste kunt oplossen met React Context.

Je besluit Bob en Betsy te helpen.

Het project is opgezet met [Create React App](https://github.com/facebook/create-react-app).

## Eindresultaat
Je zult niets veranderen aan de styling - alleen aan de content. De website ziet er in het Nederlands zo uit:

![Eindresultaat](src/assets/screenshot.png)

## De applicatie starten
Als je het project gecloned hebt naar jouw locale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken. 
Begin met het maken van wijzigingen in `src/App.js`: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.

## Randvoorwaarden
* Als de taal op 'Nederlands' staat, zijn alle teksten op de website het Nederlands.
* Als de taal op 'Spaans staat', zijn alle teksten op de website het Spaans.
* De gebruiker kan de taal wisselen door op de vlag in de header te klikken. De taal wordt dan aangepast doormiddel van context. Als de huidige taal op 'Spaans' staat, 
ziet de gebruiker 'Wissel taal naar [nederlandse vlag]'. Staat de taal op 'Nederlands', dan staat er: 'Cambiar el idioma a [spaanse vlag]'.

## Plan de campagne
* Boven ieder component of pagina die tekst gebruikt, staat een `content`-object met daarin zowel de Nederlandse als de Spaanse tekst. Hier ga je tussen wisselen op basis van de
taal die via context wordt ingesteld.
* Maak eerst een aparte file om jouw context in te maken. Geef jouw context een descriptieve naam.
* Maak een context-provider component. Deze gebruikt state om de taal en de taal-setter functie in bij te houden.
* Gebruik het context-provider component en wrap deze om alle componenten heen die context nodig hebben
* Zorg dat alle pagina's die context weergeven, toegang hebben tot de data die in de context is geplaatst.