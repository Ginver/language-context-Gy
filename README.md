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
* Ieder component of pagina die tekst gebruikt, importeert het content JSON bestand. Daarin staan zowel de keys "nl" als "es", maar de onderliggende object properties zijn exact hetzelfde.
Op basis van die taal-property krijg je een Nerlandse of Spaanse tekst. Probeer het maar eens! Hier ga je tussen wisselen op basis van de taal die via context wordt ingesteld.
* Maak eerst een aparte file om jouw context in te maken. Geef jouw context een descriptieve naam.
* Maak een context-provider component. Deze gebruikt state om de taal en de taal-setter functie in bij te houden.
* Gebruik het context-provider component en wrap deze om alle componenten heen die context nodig hebben
* Zorg dat alle pagina's die context weergeven, toegang hebben tot de data die in de context is geplaatst.

## Stappenplan
Benodigheden:
* context ( 'LanguageContext' )
* in die context beschikbaar: geselecteerde taal ("nl" / "es")
* in die context beschikbaar: taal-verander functie ('toggleLanguage') zodat we vanuit 
stappen:
1. 'LanguageContext' context maken in een apart bestandje en exporteren
2. 'LanguageContext' importeren in App.js 
3. we maekn gebruik van de 'LanguageContext.Provider' en wikkelen dit als component in App.js heen
4. via de 'value' property een data object in de context plaatsen ('const data = { test: "test" }')
5. kies een pagina en abonneer die op onze 'LanguageContext'
    - importeer 'LanguageContext'
    - useContext functie importeren uit React en aanroepen met de 'LanguageContext'
    - we destructuren de 'test' property uit de (data) object die we nodig hebben
    - gebruik de data die in 'test' staat in eht component: '<p>{test}</p>'
6. Werkt dit? Dan kunnen we verder.
7. Maak op de plek waar jouw data objetct staat (App.js) een stukje state aan voor 'language, toggleLanguage'
8. Maak daar (App.js) een aparte functie die bij aanroep (doormiddel van de toggleLanguage-functie) de taal op Nederlands zet
9. Maak daar (App.js) een aparte functie die bij aanroep (doormiddel van de toggleLanguage-functie) de taal op Spaans zet
10. Stop de twee functies én language in dat data object
   const [language, toggleLanguage] = useState('nl');
      function setNl() {
      toggleLanguage('nl')
      }
      function setEs() {
      toggleLanguage('es')
      }
       const data = {
      activeLanguage: language,
      setNlFunction: setNl,
      setEsFunction: setEs,
      }
   Test of je de actieve taal vanuit een pagina uit de context kunt halen en in de console kunt loggen! (zoals stap 5)
   Zorg ervoor dat op iedere pagina de juiste content wordt weergeven op basis van de actieve taal
   Zorg ervoor dat je met een knopje in de header van taal kunt wisselen
   (en dat er dus ook een andere vlag wordt weergegeven)
   Maak een apart component van de Provider!
   Kopieer de hele function App() uit App.js en plak dit in het context bestand
   Verander de naam App naar LanguageContextProvider en voeg de children property toe
   Vervang de huidige componten in deze functie door de children property
   Exporteer deze functie
   Wikkel het nieuwe LanguageContextProvider component om <App /> in index.js