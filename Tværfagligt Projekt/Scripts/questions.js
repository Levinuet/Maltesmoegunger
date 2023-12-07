const questions = [
  {
    question:
      "Det bliver fældet meget skov hvert minut, men hvor meget er det egentligt der bliver fældet?",
    apiEndpoint: "http://localhost:8080/changes",
    yAxis: "Net Ændringer",
    xAxis: "Lande Navn",
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
    apiEndpoint: "http://localhost:8080/forestfires",
    yAxis: "name",
    xAxis: "Brand",
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
    question: "Hvor mange køer bliver slagtet hver dag for kødindtag?",
    apiEndpoint: "http://localhost:8080/brazilfires",
    yAxis: "name",
    xAxis: "Brand",
    answers: [
      {
        text: "500.000",
        correct: false,
        explanation:
          "Du svarede desværre forkert...  Bag den daglige slagtning af 900.000 køer ligger en kompleks dynamik, der også påvirker skovområder rundt om i verden. En betydelig del af denne kødproduktion er forbundet med kvægopdræt, og det kræver store landområder til græsning og dyrkning af foder. Desværre er dette behov for land ofte en drivkraft bag skovrydning. For at imødekomme efterspørgslen efter kødprodukter bliver skovområder i visse regioner ofte ryddet for at skabe plads til kvæggræsning eller afgrøder til foder. Denne praksis, kendt som afgrødebaseret skovrydning, er en bekymrende faktor for biodiversitet og miljøets sundhed. Skovrydning ikke kun reducerer det naturlige habitat for mange arter, men det bidrager også til klimaforandringer, da træer spiller en afgørende rolle i at absorbere kuldioxid. Derfor er den massive skala, hvorpå køer bliver slagtet hver dag, indirekte knyttet til en stigende efterspørgsel efter landbrugsarealer, hvilket igen driver skovrydning og de deraf følgende miljømæssige udfordringer. For at håndtere denne komplekse problematik er der behov for øget bevidsthed omkring bæredygtige landbrugspraksisser og alternativer, der kan mindske presset på skovområder. Dette indebærer også overvejelser om vores forbrugsmønstre og den globale fødevaresystems påvirkning på miljøet.",
      },
      {
        text: "700.000",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Bag den daglige slagtning af 900.000 køer ligger en kompleks dynamik, der også påvirker skovområder rundt om i verden. En betydelig del af denne kødproduktion er forbundet med kvægopdræt, og det kræver store landområder til græsning og dyrkning af foder. Desværre er dette behov for land ofte en drivkraft bag skovrydning. For at imødekomme efterspørgslen efter kødprodukter bliver skovområder i visse regioner ofte ryddet for at skabe plads til kvæggræsning eller afgrøder til foder. Denne praksis, kendt som afgrødebaseret skovrydning, er en bekymrende faktor for biodiversitet og miljøets sundhed. Skovrydning ikke kun reducerer det naturlige habitat for mange arter, men det bidrager også til klimaforandringer, da træer spiller en afgørende rolle i at absorbere kuldioxid. Derfor er den massive skala, hvorpå køer bliver slagtet hver dag, indirekte knyttet til en stigende efterspørgsel efter landbrugsarealer, hvilket igen driver skovrydning og de deraf følgende miljømæssige udfordringer. For at håndtere denne komplekse problematik er der behov for øget bevidsthed omkring bæredygtige landbrugspraksisser og alternativer, der kan mindske presset på skovområder. Dette indebærer også overvejelser om vores forbrugsmønstre og den globale fødevaresystems påvirkning på miljøet.",
      },
      {
        text: "900.000",
        correct: true,
        explanation:
          "Det er helt rigtigt! Bag den daglige slagtning af 900.000 køer ligger en kompleks dynamik, der også påvirker skovområder rundt om i verden. En betydelig del af denne kødproduktion er forbundet med kvægopdræt, og det kræver store landområder til græsning og dyrkning af foder. Desværre er dette behov for land ofte en drivkraft bag skovrydning. For at imødekomme efterspørgslen efter kødprodukter bliver skovområder i visse regioner ofte ryddet for at skabe plads til kvæggræsning eller afgrøder til foder. Denne praksis, kendt som afgrødebaseret skovrydning, er en bekymrende faktor for biodiversitet og miljøets sundhed. Skovrydning ikke kun reducerer det naturlige habitat for mange arter, men det bidrager også til klimaforandringer, da træer spiller en afgørende rolle i at absorbere kuldioxid. Derfor er den massive skala, hvorpå køer bliver slagtet hver dag, indirekte knyttet til en stigende efterspørgsel efter landbrugsarealer, hvilket igen driver skovrydning og de deraf følgende miljømæssige udfordringer. For at håndtere denne komplekse problematik er der behov for øget bevidsthed omkring bæredygtige landbrugspraksisser og alternativer, der kan mindske presset på skovområder. Dette indebærer også overvejelser om vores forbrugsmønstre og den globale fødevaresystems påvirkning på miljøet.",
      },
    ],
  },
  {
    question: "Hvilken afgrøde er mest brugt i verden?",
    apiEndpoint: "http://localhost:8080/smallchanges",
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
