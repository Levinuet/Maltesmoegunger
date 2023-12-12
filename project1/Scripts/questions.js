const questions = [
  {
    question: "verdenskort med changes",
    apiEndpoint: "http://localhost:8080/changes",
    yAxis: "net ændringer",
    xAxis: "Lande Navn",
    graphType: "map",
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
    question: "Hvad har du at sige",
    apiEndpoint: "http://localhost:8080/brazil",
    yAxis: "pasture",
    xAxis: "year",
    graphType: "stacked",
    answers: [
      {
        text: "Monner fra Kannern",
        correct: false,
        explanation: "Waaahhh bros det er forkert",
      },
      {
        text: "Pestobolle%",
        correct: true,
        explanation:
          "Godt brølt løve! Du ved det er ingen kasket på baby på gud.",
      },
      {
        text: "21st century skills",
        correct: false,
        explanation: "cap.",
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
    question: "Hvor meget skov er blevet afbrændt i Brasilien fra 2000-2017?",
    apiEndpoint: "http://localhost:8080/brazilfires",
    yAxis: "year",
    xAxis: "Brand",
    graphType: "line",
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
    question:
      "Hvis verdensbefolkningen spiste plantebaseret hvor meget af landbrugsjorden ville blive frigjort?  ",
    apiEndpoint: "null",
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
