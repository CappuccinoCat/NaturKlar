# Projektbeskrivelse

- Projektet er **Temaopgave 2 – En hobby for begyndere** på multimediedesigneruddannelsen.
- Den valgte hobby er **friluftsliv**. Den valgte målgruppe er **begyndere inden for friluftsliv**. Hjemmesiden skal hjælpe dem med at forstå mulighederne, finde ud af hvad de skal bruge, og turde prøve friluftsliv for første gang.
- Den ønskede brugerrejse er: **nysgerrighed på friluftsliv → forståelse af udstyr og forberedelse → en overskuelig første friluftsoplevelse**.
- Byg et **responsivt, statisk website** ud fra brugerens **færdige high-fidelity-prototype i Figma**. Figma-designet er den visuelle reference for layout, indhold, navigation og interaktioner.
- Opgaven kræver **minimum fire sider** og mindst én sammenhængende brugerrejse fra landing page til en tydelig **»kom i gang«-handling**.
- De tidligere planlagte emner er **forside, begynderguide, pakkeliste/udstyr og en begyndervenlig første tur/rute**. Kontrollér de endelige sider, navne og funktioner i Figma, før de implementeres. Opret ikke ekstra sider på eget initiativ.
- Målgruppen er **begyndere inden for friluftsliv**. Eventuelle mere konkrete afgrænsninger af målgruppen, primær og sekundær persona, det endelige hjemmesidenavn og præcise indhold skal hentes fra brugerens projektmateriale: **[SKAL AFKLARES, HVIS DET IKKE ER TILGÆNGELIGT]**.
- Formålet er ikke en komplet platform om friluftsliv, men en **enkel og overskuelig introduktion** med fokus på at hjælpe begynderen i gang. Vandring og eventuel overnatning kan indgå som konkrete aktiviteter, hvis de er en del af Figma-designet.

# Teknologier

- Brug **semantisk HTML5**, **struktureret CSS** og kun **simpel vanilla JavaScript**, når funktionaliteten kræver det.
- JavaScript må eksempelvis anvendes til en mobilmenu, et FAQ-accordion eller en interaktiv pakkeliste, **hvis funktionerne findes i eller er godkendt til Figma-designet**.
- Foretræk HTML/CSS og indbyggede browserfunktioner, hvor de kan løse opgaven enkelt. Undgå unødvendig JavaScript.
- Anvend ikke React, Vue, Tailwind, CSS-frameworks, komponentbiblioteker, npm-afhængigheder eller andre tredjepartsbiblioteker uden brugerens udtrykkelige godkendelse.
- Der må **ikke** bruges database, login, brugerprofiler, backend, betalingsløsning eller eksterne API'er. Løsningen skal fungere som et statisk website.
- Introducér ikke krav om buildproces eller udviklingsserver, medmindre de er nødvendige og aftalt.
- Implementér kun funktioner, som kan fungere inden for disse tekniske rammer.

# Projektstruktur

- Undersøg først projektets eksisterende mappestruktur. Hvis projektet endnu ikke er oprettet, kan følgende **enkle struktur bruges som udgangspunkt**:

  ```text
  projektmappe/
  ├── AGENTS.md
  ├── index.html
  ├── begynderguide.html
  ├── pakkeliste.html
  ├── foerste-tur.html
  ├── css/
  │   └── style.css
  ├── js/
  │   └── main.js
  └── images/
  ```

- **Filnavnene på undersiderne er foreløbige**. Tilpas dem til de faktiske sider i Figma og brugerens beslutninger, før sider oprettes.
- `index.html` er forsiden. Fælles visuel styling placeres som udgangspunkt i `css/style.css`.
- Placér kun den nødvendige JavaScript i `js/main.js`. Filen behøver ikke oprettes, hvis projektet ikke kræver JavaScript.
- Brug lokale billed- og illustrationsfiler fra projektets relevante mapper. Hvis aktiver mangler, så spørg efter dem; indsæt ikke tilfældige billeder som endeligt indhold.
- Bevar eksisterende filnavne, struktur og konventioner, når de allerede er etableret.
- Redigér ikke `.idea/`, editorindstillinger eller andre uvedkommende filer.

# Arbejdsform

## Før ændringer

- Undersøg relevante eksisterende filer og kode, før noget ændres.
- Gennemgå den relevante del af **Figma-prototypen** før implementering. Hvis Figma-filen, skærmbilleder eller specifikationer ikke er tilgængelige, så bed om dem i stedet for at gætte.
- Analysér designets sider, sektioner, grid, spacing, typografi, farver, knapper, cards, billeder, navigationsstruktur, komponenter og responsive varianter.
- Identificér de genbrugelige designværdier. Brug gerne CSS-variabler til farver, typografi og spacing, når værdierne er fastlagt ud fra designet.
- Afklar, hvad knapper, links, menuer, accordions og andre interaktive elementer faktisk skal gøre.
- Skeln mellem **krav fra opgaveformuleringen**, **valg dokumenteret i Figma** og **forslag fra AI**. Fremstil ikke forslag som besluttede krav.
- Hvis væsentlige detaljer mangler eller er modstridende, så stil få, præcise spørgsmål **før kodning**.

## Under arbejdet

- Følg projektets eksisterende struktur og konventioner.
- **Følg det godkendte Figma-design** så tæt som praktisk muligt. Omdesign ikke selv farver, fonte, tekst, proportioner eller sektioner.
- Byg løsningen **responsivt** til både mobil og desktop. Brug layoutprincipper, der passer til de faktiske Figma-designs; gæt ikke på manglende skærmvarianter, hvis det vil ændre løsningen væsentligt.
- Brug semantiske HTML-elementer og tydelige klassenavne. Undgå unødvendigt kompliceret kode.
- Genbrug eksisterende kode, CSS og komponentmønstre, når de dækker behovet.
- Lav kun de ændringer, der er nødvendige for den aktuelle opgave. Undgå refaktorering og ændringer uden for scope.
- Bevar eksisterende indhold og funktionalitet, medmindre brugeren specifikt ønsker en ændring.
- Kontrollér relaterede sider, navigation og delte styles, når noget ændres.
- Forklar kort væsentlige tekniske valg, så en multimediedesignstuderende kan forstå og senere forklare sin egen kode.

# Andre vigtige ting ift. projekt

- Prioritér en **begyndervenlig oplevelse** med korte, forståelige trin og en tydelig vej fra interesse for friluftsliv til en første konkret aktivitet.
- Skab sammenhæng mellem forsiden, begynderguiden, udstyr/pakkelisten og den første tur, **i det omfang disse sider indgår i det endelige Figma-design**.
- Den vigtigste brugerrejse og »kom i gang«-handlingen skal fungere i den kodede løsning – ikke kun visuelt fremstå som interaktiv.
- Respektér den dokumenterede primære personas behov, motivationer, barrierer og digitale forventninger. **Opfind ikke personadetaljer**.
- Brug kun godkendt tekst, billeder, illustrationer, logo og andre visuelle aktiver. Spørg, hvis nødvendige filer mangler.
- **Opfind ikke** ruter, afstande, varigheder, priser, udstyrsanbefalinger, regler for overnatning, shelterbooking, faciliteter eller andre faktuelle oplysninger.
- Tag højde for **tilgængelighed**: logisk overskriftsrækkefølge, beskrivende linktekster, alternativ tekst til meningsbærende billeder, synlige fokustilstande og funktionalitet, der kan betjenes med tastatur.
- Bevar tydelig navigation og læsbar tekst på små skærme. Skab ikke vandret scrolling eller elementer, der overlapper indhold.
- Respektér **ophavsret** for billeder, illustrationer, skrifttyper og tekst. Angiv nødvendige kilde- og licensoplysninger, når materialet kræver det.
- Opgaven kræver GitHub med **meningsfulde commits** og publicering på webhotel. Udfør ikke Git-, publicerings- eller andre eksterne handlinger uden en konkret anmodning.
- Udviklingsprocessen skal senere kunne forklares i opgaveafleveringen, herunder **tre vigtige AI-prompts**, model-/ræsonneringsvalg, anvendte skills/plugins, udfordringer samt **et HTML- og et CSS-kodeudsnit**. Hjælp med at gøre disse valg tydelige, men opret ikke ekstra dokumentationsfiler uden anmodning.

# Begrænsninger

- Websitet skal have **minimum fire sider**, men kun de sider, som brugeren har godkendt eller som findes i det endelige Figma-design.
- Brug HTML, CSS og højst simpel vanilla JavaScript. Prioritér den enkleste løsning, der opfylder designet og funktionaliteten.
- Ingen frameworks, nye pakker eller biblioteker uden udtrykkelig tilladelse.
- Ingen database, login, brugerprofiler, backend, betalingsfunktion eller eksterne API'er.
- Ingen nye features, animationer, sektioner, tekster eller sider, der ikke kan udledes af Figma, opgaven eller brugerens konkrete ønsker.
- Ingen opdigtede ruteoplysninger, sikkerhedspåstande, regler, billeder eller kilder.
- Ingen ændringer i uvedkommende filer, IDE-metadata eller genererede filer.
- Undgå unødigt avanceret arkitektur, som gør en lille studieopgave sværere at forstå og vedligeholde.

# Test og kvalitet

- Test de sider og funktioner, som ændringen berører.
- Kontrollér navigationen og den sammenhængende brugerrejse fra forsiden til den aftalte »kom i gang«-handling.
- Kontrollér layout, læsbarhed, klikmål, indholdsoverløb og billeder på både mobil og desktop; sammenlign med tilgængelige Figma-designs.
- Afprøv interaktioner som mobilmenu, FAQ og pakkeliste, **hvis de er implementeret**. Kontrollér også tastaturbetjening.
- Kontrollér, at links har korrekte destinationer, og at der ikke er døde knapper eller tomme sider.
- Kontrollér, at relevante billeder indlæses, og at meningsbærende billeder har passende alt-tekst.
- Brug kun test-, build- og valideringskommandoer, som faktisk er tilgængelige og relevante for projektet. Opfind ikke eksisterende scripts eller resultater.
- Hvis tests eller visuel kontrol ikke kan udføres, forklar kort hvorfor.
- Rapportér relevante fejl, risici og manglende validering. Skeln mellem nye problemer og allerede eksisterende problemer.

# Svar fra CODEX

- Hold afsluttende svar korte og fokuserede på resultatet.
- Brug dette format, og udelad kun punkter, der ikke er relevante:
    - **Ændret:** Kort beskrivelse af resultatet.
    - **Filer/områder:** Centrale berørte filer eller sider.
    - **Kontrol:** Udførte tests, builds eller manuelle kontroller; angiv, hvorfor noget ikke kunne udføres.
    - **Bemærkninger:** Relevante fejl, risici, begrænsninger eller forhold, der stadig skal afklares.