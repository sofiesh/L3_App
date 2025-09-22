# EXAMINER
This repository contains of a module `L2M`, a test library `L2T` and the app `L3A` with the user interface implementing the module. Documentation for users and developers can be found in `docs/`as well as in README.md located in each of the projects.

The requirement of the course to keep the module re-useable is fulfilled as the module is imported to the L3A application via app.js. 

## Reflecting on Clean Code ch 2-11
 Skriv en kort (4-6 meningar) reflektion för varje kapitel om hur just det kapitlet har påverkat eller inte påverkat din kod. Använd bokens termer. Ge exempel med läsbara screenshots från er kod till varje reflektion. Dokumentera detta till mig i ett separat dokument reflection.md där jag är mottagaren. 

 Fokusera på tydlighet, variation, ärlighet och vad som är intressant. Exempelvis om du har icke självklara överväganden med olika kvalitetsregler som står i konflikt med varandra så är dessa extra intressanta.


### Ch.2 Meaningful Names
Att ge variabler och funktioner tydliga namn har hjälpt till med tydlighet. Jag föredrar betydligt längre namn så som Till exempel `rankInvestmentsOnNetPresentValue` för att undvika misstag i senare implementering. Men äve `createBudget` och `rentOrBuy` visar tydligt och direkt vad de ska användas för. Det gör det lättare för andra utvecklare att förstå flödet utan att behöva gräva i implementationen. Jag försökte också hålla namn på HTML-element och CSS-klasser beskrivande, vilket minskar risken för missförstånd.

### Ch.3 Functions
Funktionerna är små, fokuserade och gör en sak i taget. `validateBudgetInput` och `validateNetPresentValueInputs` är exempel på funktioner som endast kontrollerar giltighet och returnerar eller kastar fel. Detta underlättar testning och återanvändning. Jag försökte hålla funktioner så korta som möjligt för att göra dem mer läsbara.

### Ch.4 Comments
Jag är sparsam med kommentarer. När jag kämpat extra mycket med lösningar så har jag en tendens att skriva mer men fokus är att kommentarer skall förklara varför något görs, inte vad som görs. Koden själv skall vara tillräckligt beskrivande. Till exempel beskrivs i `rankInvestmentsOnNetPresentValue` varför det görs sortering av investeringarna efter NPV.

### Ch.5 Formatting
Kodens layout görs med indrag, blankrader mellan logiska block och tydliga separeringar mellan moduler. App.js är uppdelad i sektioner för Budget, Rent/Buy och NPV, i samma ordning som de sedan läggs till i html vilket gör det lätt att navigera. Jag har också skapat också konsekvent HTML-struktur och CSS-klasser för läsbarhet.

### Ch.6 Objects and Data structures
Objekt används för att paketera data, t.ex. budgetobjektet `{ userName, monthlyIncome, monthlyExpenses, totalMonthlyExpenses, balance }`. Detta gör koden mer modulär och det blir lättare att skicka data mellan funktioner. Arrays används för cashflows och utgifter, vilket gör iteration och summering enkel.

### Ch.7 Error Handling
Vid inmatning från användaren används `try/catch`. T.ex. vid NPV-beräkningen fångas ogiltiga värden innan de skickas till beräkningsfunktionerna. Felmeddelanden är tydliga och informativa, vilket hjälper både utvecklare och användare att förstå problem. Appen följer principen att fel ska hanteras nära källan.

### Ch.8 Boundaries
Modulen `finCalc` separeras från UI-kod. Funktionen `createBudget` har inga beroenden på DOM och kan testas separat. Detta gör det enkelt att byta ut eller vidareutveckla algoritmer utan att påverka användargränssnittet. Gränserna mellan logik och presentation är tydliga.

### Ch.9 Unit Tests
Valideringsfunktioner och beräkningsmoduler testas separat. `validateBudgetInput` och `calculateNetPresentValue` är exempel där enhetstester kan säkerställa korrekthet. Testbarheten förbättras av små, fokuserade funktioner och tydliga input/output.

### Ch.10 Classes
Jag valde att inte använda många klasser utan fokuserar på funktioner och objekt. Detta passar den modulära, funktionella strukturen. Om det skulle växa till ett större system kan man börja kapsla logik i klasser, men för nu är funktionerna tillräckliga och lättare att underhålla.

### Ch.11 Systems
Appen är strukturerad i separata sektioner och moduler, vilket ger ett systematiskt flöde: Budget → Rent/Buy → NPV. Detta gör det lätt att förstå och utöka systemet. Appen är designad för att nya moduler enkelt kan läggas till med minimal påverkan på existerande kod.

### Ch.12 Emergence
Clean code uppstår gradvis genom konsekvent tillämpning av principer. Den modulära strukturen med separata beräkningsfunktioner och valideringar gör att kodens kvalitet “emerge” naturligt. Små, tydliga funktioner har gjort det enkelt att implementera de olika delarna av finCalc-modulen i användargränssnittet steg för steg.
