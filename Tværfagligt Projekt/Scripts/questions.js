const questions = [
  {
    question:
      "Det bliver fældet meget skov hvert minut, men hvor meget er det egentligt der bliver fældet?",
    apiEndpoint: "http://localhost:8080/changes",
    yAxis: "Net Ændringer",
    xAxis: "Lande Navn",
    graphType: "bar",
    answers: [
      {
        text: "16 fodboldbaner i minuttet",
        correct: false,
        explanation:
          "Du svarede desværre forkert... 13 millioner hektar bliver fældet hver dag! Det svarer til 36 Fodboldbaner i minuttet. Skovene, som udgør en afgørende del af vores globale økosystem, står over for en udfordring af alarmerende proportioner. Hvert minut bliver et betragteligt areal af skovrydning registreret på verdensplan, hvilket har dybtgående konsekvenser for biodiversitet, klima og miljøet som helhed. Der er flere hovedårsager til skovrydning, herunder behovet for landbrugsarealer, produktion af papir og træprodukter, samt urbanisering. Uheldigvis fører denne praksis til tab af levesteder for utallige plante- og dyrearter, og det accelererer klimaforandringer ved at reducere skovens kapacitet til at absorbere CO2. At forstå omfanget af skovrydningen er afgørende for at tackle dette problem. Initiativer såsom bæredygtigt skovbrug, bevarelse af naturområder og anvendelse af alternative materialer kan bidrage til at mindske det aktuelle tempo for skovnedbrydning. Derfor er det vigtigt at øge bevidstheden om dette spørgsmål, da det berører os alle og har konsekvenser for fremtidige generationer.",
      },
      {
        text: "26 fodboldbaner i minuttet",
        correct: false,
        explanation:
          "Du svarede desværre forkert... 13 millioner hektar bliver fældet hver dag! Det svarer til 36 Fodboldbaner i minuttet. Skovene, som udgør en afgørende del af vores globale økosystem, står over for en udfordring af alarmerende proportioner. Hvert minut bliver et betragteligt areal af skovrydning registreret på verdensplan, hvilket har dybtgående konsekvenser for biodiversitet, klima og miljøet som helhed. Der er flere hovedårsager til skovrydning, herunder behovet for landbrugsarealer, produktion af papir og træprodukter, samt urbanisering. Uheldigvis fører denne praksis til tab af levesteder for utallige plante- og dyrearter, og det accelererer klimaforandringer ved at reducere skovens kapacitet til at absorbere CO2. At forstå omfanget af skovrydningen er afgørende for at tackle dette problem. Initiativer såsom bæredygtigt skovbrug, bevarelse af naturområder og anvendelse af alternative materialer kan bidrage til at mindske det aktuelle tempo for skovnedbrydning. Derfor er det vigtigt at øge bevidstheden om dette spørgsmål, da det berører os alle og har konsekvenser for fremtidige generationer.",
      },
      {
        text: "36 fodboldbaner i minuttet",
        correct: true,
        explanation:
          "Det er helt rigtigt! 13 millioner hektar bliver fældet hver dag! Det svarer til 36 Fodboldbaner i minuttet. Skovene, som udgør en afgørende del af vores globale økosystem, står over for en udfordring af alarmerende proportioner. Hvert minut bliver et betragteligt areal af skovrydning registreret på verdensplan, hvilket har dybtgående konsekvenser for biodiversitet, klima og miljøet som helhed. Der er flere hovedårsager til skovrydning, herunder behovet for landbrugsarealer, produktion af papir og træprodukter, samt urbanisering. Uheldigvis fører denne praksis til tab af levesteder for utallige plante- og dyrearter, og det accelererer klimaforandringer ved at reducere skovens kapacitet til at absorbere CO2. At forstå omfanget af skovrydningen er afgørende for at tackle dette problem. Initiativer såsom bæredygtigt skovbrug, bevarelse af naturområder og anvendelse af alternative materialer kan bidrage til at mindske det aktuelle tempo for skovnedbrydning. Derfor er det vigtigt at øge bevidstheden om dette spørgsmål, da det berører os alle og har konsekvenser for fremtidige generationer.",
      },
    ],
  },
  {
    question:
      "Beboeligt land på jorden udgør 29% det svarer til 149 million km^2. Hvor mange procent af beboeligt land bliver brugt til landbrug?",
    apiEndpoint: "http://localhost:8080/brazil",
    yAxis: "pasture",
    xAxis: "year",
    graphType: "bar",
    answers: [
      {
        text: "36%",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Af det beboelige land på jorden, der udgør 29%, bliver omkring 46% anvendt til landbrug. Desværre spiller skovrydning en betydelig rolle i denne procentdel, da landbrugsaktiviteter ofte indebærer fjernelse af skovområder for at skabe plads til dyrkning. Denne procentdel afspejler ikke blot landbrugets omfang, men også den udfordring, som skovrydning udgør for biodiversitet og økologisk balance. Skovene, der engang dækkede store dele af det beboelige land, bliver ofte ofret for at imødekomme den stigende efterspørgsel efter landbrugsprodukter. For at adressere denne udfordring er det afgørende at fremme bæredygtige landbrugspraksisser og bevare skovområder. Balancen mellem landbrugsproduktion og bevarelse af skove er afgørende for at sikre en langsigtet og bæredygtig fremtid for vores planet.",
      },
      {
        text: "46%",
        correct: true,
        explanation:
          "Det er helt rigtigt!  Af det beboelige land på jorden, der udgør 29%, bliver omkring 46% anvendt til landbrug. Desværre spiller skovrydning en betydelig rolle i denne procentdel, da landbrugsaktiviteter ofte indebærer fjernelse af skovområder for at skabe plads til dyrkning. Denne procentdel afspejler ikke blot landbrugets omfang, men også den udfordring, som skovrydning udgør for biodiversitet og økologisk balance. Skovene, der engang dækkede store dele af det beboelige land, bliver ofte ofret for at imødekomme den stigende efterspørgsel efter landbrugsprodukter. For at adressere denne udfordring er det afgørende at fremme bæredygtige landbrugspraksisser og bevare skovområder. Balancen mellem landbrugsproduktion og bevarelse af skove er afgørende for at sikre en langsigtet og bæredygtig fremtid for vores planet.",
      },
      {
        text: "56%",
        correct: false,
        explanation:
          "Du svarede desværre forkert...  Af det beboelige land på jorden, der udgør 29%, bliver omkring 46% anvendt til landbrug. Desværre spiller skovrydning en betydelig rolle i denne procentdel, da landbrugsaktiviteter ofte indebærer fjernelse af skovområder for at skabe plads til dyrkning. Denne procentdel afspejler ikke blot landbrugets omfang, men også den udfordring, som skovrydning udgør for biodiversitet og økologisk balance. Skovene, der engang dækkede store dele af det beboelige land, bliver ofte ofret for at imødekomme den stigende efterspørgsel efter landbrugsprodukter. For at adressere denne udfordring er det afgørende at fremme bæredygtige landbrugspraksisser og bevare skovområder. Balancen mellem landbrugsproduktion og bevarelse af skove er afgørende for at sikre en langsigtet og bæredygtig fremtid for vores planet.",
      },
    ],
  },
  {
    question: "Hvor meget skov er blevet afbrændt i Brasilien fra 2000-2017?",
    apiEndpoint: "http://localhost:8080/brazilfires",
    yAxis: "Brand",
    xAxis: "year",
    graphType: "bar",
    answers: [
      {
        text: "cirka 2200 kvadratkilometer",
        correct: false,
        explanation:
          "Du svarede desværre forkert...  Fra 2000-2017 oplevede Brasilien betydelig skovrydning, især i Amazonas-regnskoven. I løbet af denne periode blev der ryddet store områder skov, primært som følge af landbrugsudvidelse, skovhugst og minedrift. Ifølge data fra det brasilianske rumforskningsinstitut INPE (Instituto Nacional de Pesquisas Espaciais) blev der i 2017 ryddet omkring 6.624 kvadratkilometer skov i Brasilien. Dette tal repræsenterede en stigning i forhold til tidligere år og var en bekymrende indikation af den vedvarende trussel mod skovområder. Dette svarer til størrelsen på den amerikanske stats Delaware. Det er vigtigt at forstå, at dette ikke kun repræsenterer et fysisk område, men også en betydelig del af et komplekst økosystem, der er afgørende for planetens miljømæssige sundhed. Skovrydning på denne skala har dybtgående konsekvenser for biodiversitet, klima og menneskelige samfund.",
      },
      {
        text: "cirka 4400 kvadratkilometer",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Fra 2000-2017 oplevede Brasilien betydelig skovrydning, især i Amazonas-regnskoven. I løbet af denne periode blev der ryddet store områder skov, primært som følge af landbrugsudvidelse, skovhugst og minedrift. Ifølge data fra det brasilianske rumforskningsinstitut INPE (Instituto Nacional de Pesquisas Espaciais) blev der i 2017 ryddet omkring 6.624 kvadratkilometer skov i Brasilien. Dette tal repræsenterede en stigning i forhold til tidligere år og var en bekymrende indikation af den vedvarende trussel mod skovområder. Dette svarer til størrelsen på den amerikanske stats Delaware. Det er vigtigt at forstå, at dette ikke kun repræsenterer et fysisk område, men også en betydelig del af et komplekst økosystem, der er afgørende for planetens miljømæssige sundhed. Skovrydning på denne skala har dybtgående konsekvenser for biodiversitet, klima og menneskelige samfund.",
      },
      {
        text: "cirka 6600 kvadratkilometer",
        correct: true,
        explanation:
          "Det er helt rigtigt! Fra 2000-2017 oplevede Brasilien betydelig skovrydning, især i Amazonas-regnskoven. I løbet af denne periode blev der ryddet store områder skov, primært som følge af landbrugsudvidelse, skovhugst og minedrift. Ifølge data fra det brasilianske rumforskningsinstitut INPE (Instituto Nacional de Pesquisas Espaciais) blev der i 2017 ryddet omkring 6.624 kvadratkilometer skov i Brasilien. Dette tal repræsenterede en stigning i forhold til tidligere år og var en bekymrende indikation af den vedvarende trussel mod skovområder. Dette svarer til størrelsen på den amerikanske stats Delaware. Det er vigtigt at forstå, at dette ikke kun repræsenterer et fysisk område, men også en betydelig del af et komplekst økosystem, der er afgørende for planetens miljømæssige sundhed. Skovrydning på denne skala har dybtgående konsekvenser for biodiversitet, klima og menneskelige samfund.",
      },
    ],
  },
  {
    question: "Hvilken afgrøde er mest brugt i verden?",
    apiEndpoint: "http://localhost:8080/smallchanges",
    yAxis: "Net Ændringer",
    xAxis: "Lande Navn",
    graphType: "bar",
    answers: [
      {
        text: "Hvede",
        correct: true,
        explanation:
          "Det er helt rigtigt! Selvom hvede ikke er direkte ansvarlig for skovrydning, spiller udvidelsen af ​​landbrugsarealer, herunder hvededyrkning, en rolle i nedbrydningen af verdens skove. Den stigende efterspørgsel efter landbrugsprodukter kan presse på for at frigøre nye arealer, og i nogle tilfælde fører dette desværre til skovrydning. Nogle regioner, hvor skovområder er rige på biodiversitet, står over for udfordringer, da landbrugsaktiviteter, herunder hvededyrkning, udvider sig. Fældning af skove for at skabe plads til landbrugsjord kan have alvorlige konsekvenser for økosystemet, med tab af levesteder og ødelæggelse af naturlige balance. Samtidig er det vigtigt at nævne, at bæredygtige landbrugspraksisser og teknologier kan hjælpe med at mindske presset på skove. Effektiv ressourceforvaltning, herunder brugen af avancerede landbrugsmetoder og bevarelse af eksisterende skovområder, er nødvendige for at sikre en balance mellem landbrugsproduktion og bevaring af vigtige økosystemer. Hvededyrkning og andre landbrugsaktiviteter bør derfor gennemføres med omhu og bæredygtighed for øje, for at bevare skove som afgørende aktiver for planetens sundhed og biodiversitet.",
      },
      {
        text: "Majs",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Selvom hvede ikke er direkte ansvarlig for skovrydning, spiller udvidelsen af ​​landbrugsarealer, herunder hvededyrkning, en rolle i nedbrydningen af verdens skove. Den stigende efterspørgsel efter landbrugsprodukter kan presse på for at frigøre nye arealer, og i nogle tilfælde fører dette desværre til skovrydning. Nogle regioner, hvor skovområder er rige på biodiversitet, står over for udfordringer, da landbrugsaktiviteter, herunder hvededyrkning, udvider sig. Fældning af skove for at skabe plads til landbrugsjord kan have alvorlige konsekvenser for økosystemet, med tab af levesteder og ødelæggelse af naturlige balance. Samtidig er det vigtigt at nævne, at bæredygtige landbrugspraksisser og teknologier kan hjælpe med at mindske presset på skove. Effektiv ressourceforvaltning, herunder brugen af avancerede landbrugsmetoder og bevarelse af eksisterende skovområder, er nødvendige for at sikre en balance mellem landbrugsproduktion og bevaring af vigtige økosystemer. Hvededyrkning og andre landbrugsaktiviteter bør derfor gennemføres med omhu og bæredygtighed for øje, for at bevare skove som afgørende aktiver for planetens sundhed og biodiversitet.",
      },
      {
        text: "Ris",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Selvom hvede ikke er direkte ansvarlig for skovrydning, spiller udvidelsen af ​​landbrugsarealer, herunder hvededyrkning, en rolle i nedbrydningen af verdens skove. Den stigende efterspørgsel efter landbrugsprodukter kan presse på for at frigøre nye arealer, og i nogle tilfælde fører dette desværre til skovrydning. Nogle regioner, hvor skovområder er rige på biodiversitet, står over for udfordringer, da landbrugsaktiviteter, herunder hvededyrkning, udvider sig. Fældning af skove for at skabe plads til landbrugsjord kan have alvorlige konsekvenser for økosystemet, med tab af levesteder og ødelæggelse af naturlige balance. Samtidig er det vigtigt at nævne, at bæredygtige landbrugspraksisser og teknologier kan hjælpe med at mindske presset på skove. Effektiv ressourceforvaltning, herunder brugen af avancerede landbrugsmetoder og bevarelse af eksisterende skovområder, er nødvendige for at sikre en balance mellem landbrugsproduktion og bevaring af vigtige økosystemer. Hvededyrkning og andre landbrugsaktiviteter bør derfor gennemføres med omhu og bæredygtighed for øje, for at bevare skove som afgørende aktiver for planetens sundhed og biodiversitet.",
      },
    ],
  },
  {
    question:
      "Hvis verdensbefolkningen spiste plantebaseret hvor meget af landbrugsjorden ville blive frigjort?  ",
    apiEndpoint: "http://localhost:8080/pasturepercentage",
    yAxis: "name",
    xAxis: "Brand",
    graphType: "bar",
    answers: [
      {
        text: "45%",
        correct: false,
        explanation:
          "Du svarede desværre forkert...  Hvis verdensbefolkningen skiftede til en plantebaseret kost, ville der potentielt blive frigivet 75% landbrugsjord. Dette skyldes, at plantebaserede diæter kræver mindre arealressourcer sammenlignet med kødbaserede diæter, da dyreopdræt kræver mere plads, vand og føde end planteproduktion. En betydelig del af den globale landbrugsjord anvendes i øjeblikket til dyrkning af afgrøder, der bruges som dyrefoder, samt græsningsområder til husdyr. Hvis disse arealer blev omfordelt til dyrkning af direkte menneskeføde, kunne vi se en markant frigivelse af landbrugsjord. Estimater varierer, men nogle studier antyder, at en overgang til en plantebaseret kost kunne reducere behovet for landbrugsjord med op til 75%, afhængigt af faktorer som ernæringsmønstre og landbrugspraksis. Dette ville have betydelige positive virkninger på bevarelsen af naturressourcer, biodiversitet og reduktion af skovrydning, da mindre areal ville være nødvendigt for at imødekomme fødevarebehovene for en plantebaseret befolkning. Denne omlægning af kostvaner og landbrugspraksisser er dog en kompleks udfordring og kræver overvejelser om adfærdsændringer, teknologiske innovationer og politiske tiltag. Ikke desto mindre peger mange eksperter på en plantebaseret kost som en bæredygtig løsning for at imødegå udfordringerne ved global fødevaresikkerhed og miljøpåvirkning.",
      },
      {
        text: "65%",
        correct: false,
        explanation:
          "Du svarede desværre forkert...   Hvis verdensbefolkningen skiftede til en plantebaseret kost, ville der potentielt blive frigivet 75% landbrugsjord. Dette skyldes, at plantebaserede diæter kræver mindre arealressourcer sammenlignet med kødbaserede diæter, da dyreopdræt kræver mere plads, vand og føde end planteproduktion. En betydelig del af den globale landbrugsjord anvendes i øjeblikket til dyrkning af afgrøder, der bruges som dyrefoder, samt græsningsområder til husdyr. Hvis disse arealer blev omfordelt til dyrkning af direkte menneskeføde, kunne vi se en markant frigivelse af landbrugsjord. Estimater varierer, men nogle studier antyder, at en overgang til en plantebaseret kost kunne reducere behovet for landbrugsjord med op til 75%, afhængigt af faktorer som ernæringsmønstre og landbrugspraksis. Dette ville have betydelige positive virkninger på bevarelsen af naturressourcer, biodiversitet og reduktion af skovrydning, da mindre areal ville være nødvendigt for at imødekomme fødevarebehovene for en plantebaseret befolkning. Denne omlægning af kostvaner og landbrugspraksisser er dog en kompleks udfordring og kræver overvejelser om adfærdsændringer, teknologiske innovationer og politiske tiltag. Ikke desto mindre peger mange eksperter på en plantebaseret kost som en bæredygtig løsning for at imødegå udfordringerne ved global fødevaresikkerhed og miljøpåvirkning.",
      },
      {
        text: "75%",
        correct: true,
        explanation:
          "Det er helt rigtigt!  Hvis verdensbefolkningen skiftede til en plantebaseret kost, ville der potentielt blive frigivet 75% landbrugsjord. Dette skyldes, at plantebaserede diæter kræver mindre arealressourcer sammenlignet med kødbaserede diæter, da dyreopdræt kræver mere plads, vand og føde end planteproduktion. En betydelig del af den globale landbrugsjord anvendes i øjeblikket til dyrkning af afgrøder, der bruges som dyrefoder, samt græsningsområder til husdyr. Hvis disse arealer blev omfordelt til dyrkning af direkte menneskeføde, kunne vi se en markant frigivelse af landbrugsjord. Estimater varierer, men nogle studier antyder, at en overgang til en plantebaseret kost kunne reducere behovet for landbrugsjord med op til 75%, afhængigt af faktorer som ernæringsmønstre og landbrugspraksis. Dette ville have betydelige positive virkninger på bevarelsen af naturressourcer, biodiversitet og reduktion af skovrydning, da mindre areal ville være nødvendigt for at imødekomme fødevarebehovene for en plantebaseret befolkning. Denne omlægning af kostvaner og landbrugspraksisser er dog en kompleks udfordring og kræver overvejelser om adfærdsændringer, teknologiske innovationer og politiske tiltag. Ikke desto mindre peger mange eksperter på en plantebaseret kost som en bæredygtig løsning for at imødegå udfordringerne ved global fødevaresikkerhed og miljøpåvirkning.",
      },
    ],
  },
];
