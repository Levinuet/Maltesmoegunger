const questions = [
  {
    question: "Hvilket land har den største skovrydning i 2010 frem til 2020?",
    apiEndpoint: "http://localhost:8080/smallchanges",
    yAxis: "netChanges",
    xAxis: "name",
    graphType: "bar",
    imagePath: "css/images/deforest.jpg",
    answers: [
      {
        text: "Indonesien",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Illustrationen viser betydelig skovrydning i Brasilien i perioden 2010 til 2020. Dette udgør en alvorlig trussel mod Amazonas junglens komplekse økosystemer og har væsentlige konsekvenser for klimaet. Skovrydningen resulterer i tab af levesteder for det rige dyreliv i Amazonas jungle, og flere arter står nu over for fare for udryddelse. Det er værd at bemærke, at skovrydningen ofte realiseres gennem metoder som påsatte brænde, der i nogle tilfælde kan være drevet af landbrugsinteresser.",
      },
      {
        text: "Indien",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Illustrationen viser betydelig skovrydning i Brasilien i perioden 2010 til 2020. Dette udgør en alvorlig trussel mod Amazonas junglens komplekse økosystemer og har væsentlige konsekvenser for klimaet. Skovrydningen resulterer i tab af levesteder for det rige dyreliv i Amazonas jungle, og flere arter står nu over for fare for udryddelse. Det er værd at bemærke, at skovrydningen ofte realiseres gennem metoder som påsatte brænde, der i nogle tilfælde kan være drevet af landbrugsinteresser.",
      },
      {
        text: "Brasilien",
        correct: true,
        explanation:
          "Det er helt rigtigt! Illustrationen viser betydelig skovrydning i Brasilien i perioden 2010 til 2020. Dette udgør en alvorlig trussel mod Amazonas junglens komplekse økosystemer og har væsentlige konsekvenser for klimaet. Skovrydningen resulterer i tab af levesteder for det rige dyreliv i Amazonas jungle, og flere arter står nu over for fare for udryddelse. Det er værd at bemærke, at skovrydningen ofte realiseres gennem metoder som påsatte brænde, der i nogle tilfælde kan være drevet af landbrugsinteresser.",
      },
    ],
  },
  {
    question:
      "Hvilke faktorer har haft størst indflydelse på skovrydningen af den brasilianske regnskov?",
    apiEndpoint: "http://localhost:8080/brazil",
    yAxis: "pasture",
    xAxis: "year",
    graphType: "stacked",
    imagePath: "css/images/cows.jpg",
    answers: [
      {
        text: "Sojabønneproduktionen",
        correct: false,
        explanation:
          "Desværre du svarede forkert på spørgsmålet... Stakdiagrammet illustrerer de faktorer, der har haft størst betydning på skovrydningen i Brasilien i perioden 2001-2013. kvægopdræt er den mest betydningsfulde faktorer for skovrydningen af den brasilianske regnskov i løbet af denne periode, idet det gennemsnitligt udgør 62,7% af alle påvirkende faktorer årligt. Hvis vi antager at kvægopdræt har samme betydning for skovrydning globalt vil det, have en positiv betydning at reducere kødforbruget.",
      },
      {
        text: "Kvægopdræft",
        correct: true,
        explanation:
          "Du svarede rigtigt på spørgsmålet! Stakdiagrammet illustrerer de faktorer, der har haft størst betydning på skovrydningen i Brasilien i perioden 2001-2013. kvægopdræt er den mest betydningsfulde faktorer for skovrydningen af den brasilianske regnskov i løbet af denne periode, idet det gennemsnitligt udgør 62,7% af alle påvirkende faktorer årligt. Hvis vi antager at kvægopdræt har samme betydning for skovrydning globalt vil det, have en positiv betydning at reducere kødforbruget. ",
      },
      {
        text: "Skovbrænde",
        correct: false,
        explanation:
          "Desværre du svarede forkert på spørgsmålet... Stakdiagrammet illustrerer de faktorer, der har haft størst betydning på skovrydningen i Brasilien i perioden 2001-2013. kvægopdræt er den mest betydningsfulde faktorer for skovrydningen af den brasilianske regnskov i løbet af denne periode, idet det gennemsnitligt udgør 62,7% af alle påvirkende faktorer årligt. Hvis vi antager at kvægopdræt har samme betydning for skovrydning globalt vil det, have en positiv betydning at reducere kødforbruget.",
      },
    ],
  },
  {
    question: "Hvor meget skov er blevet afbrændt i Brasilien fra 2000-2017?",
    apiEndpoint: "http://localhost:8080/brazilfires",
    yAxis: "Brand",
    xAxis: "d.year",
    graphType: "bar",
    imagePath: "css/images/brazilfire.jpeg",
    answers: [
      {
        text: "cirka 2200 kvadratkilometer",
        correct: false,
        explanation:
          "Du svarede desværre forkert... 13 millioner hektar bliver fældet hver dag! Det svarer til 36 Fodboldbaner i minuttet. Skovene, som udgør en afgørende del af vores globale økosystem, står over for en udfordring af alarmerende proportioner. Hvert minut bliver et betragteligt areal af skovrydning registreret på verdensplan, hvilket har dybtgående konsekvenser for biodiversitet, klima og miljøet som helhed. Der er flere hovedårsager til skovrydning, herunder behovet for landbrugsarealer, produktion af papir og træprodukter, samt urbanisering. Uheldigvis fører denne praksis til tab af levesteder for utallige plante- og dyrearter, og det accelererer klimaforandringer ved at reducere skovens kapacitet til at absorbere CO2. At forstå omfanget af skovrydningen er afgørende for at tackle dette problem. Initiativer såsom bæredygtigt skovbrug, bevarelse af naturområder og anvendelse af alternative materialer kan bidrage til at mindske det aktuelle tempo for skovnedbrydning. Derfor er det vigtigt at øge bevidstheden om dette spørgsmål, da det berører os alle og har konsekvenser for fremtidige generationer.",
      },
      {
        text: "cirka 4400 kvadratkilometer",
        correct: false,
        explanation:
          "Du svarede desværre forkert... 13 millioner hektar bliver fældet hver dag! Det svarer til 36 Fodboldbaner i minuttet. Skovene, som udgør en afgørende del af vores globale økosystem, står over for en udfordring af alarmerende proportioner. Hvert minut bliver et betragteligt areal af skovrydning registreret på verdensplan, hvilket har dybtgående konsekvenser for biodiversitet, klima og miljøet som helhed. Der er flere hovedårsager til skovrydning, herunder behovet for landbrugsarealer, produktion af papir og træprodukter, samt urbanisering. Uheldigvis fører denne praksis til tab af levesteder for utallige plante- og dyrearter, og det accelererer klimaforandringer ved at reducere skovens kapacitet til at absorbere CO2. At forstå omfanget af skovrydningen er afgørende for at tackle dette problem. Initiativer såsom bæredygtigt skovbrug, bevarelse af naturområder og anvendelse af alternative materialer kan bidrage til at mindske det aktuelle tempo for skovnedbrydning. Derfor er det vigtigt at øge bevidstheden om dette spørgsmål, da det berører os alle og har konsekvenser for fremtidige generationer.",
      },
      {
        text: "cirka 6600 kvadratkilometer",
        correct: true,
        explanation:
          "Det er helt rigtigt! 13 millioner hektar bliver fældet hver dag! Det svarer til 36 Fodboldbaner i minuttet. Skovene, som udgør en afgørende del af vores globale økosystem, står over for en udfordring af alarmerende proportioner. Hvert minut bliver et betragteligt areal af skovrydning registreret på verdensplan, hvilket har dybtgående konsekvenser for biodiversitet, klima og miljøet som helhed. Der er flere hovedårsager til skovrydning, herunder behovet for landbrugsarealer, produktion af papir og træprodukter, samt urbanisering. Uheldigvis fører denne praksis til tab af levesteder for utallige plante- og dyrearter, og det accelererer klimaforandringer ved at reducere skovens kapacitet til at absorbere CO2. At forstå omfanget af skovrydningen er afgørende for at tackle dette problem. Initiativer såsom bæredygtigt skovbrug, bevarelse af naturområder og anvendelse af alternative materialer kan bidrage til at mindske det aktuelle tempo for skovnedbrydning. Derfor er det vigtigt at øge bevidstheden om dette spørgsmål, da det berører os alle og har konsekvenser for fremtidige generationer.",
      },
    ],
  },
  {
    question:
      "I 2015 blev der brændt 73017.07 tusind hektar af Amazonas junglen. Hvor meget svarer det til? ",
    apiEndpoint: "http://localhost:8080/brazilfires",
    yAxis: "year",
    xAxis: "Brand",
    graphType: "line",
    imagePath: "images/paris.jpg",
    answers: [
      {
        text: "To gange Tysklands areal",
        correct: true,
        explanation:
          "Det er helt rigtigt! Den Brasilianske skov er præget af massive skovbrænde. I 2015 blev cirka to gange af Tysklands samlede areal brændt af. Disse brænde er katastrofale for økosystemer og stiller vigtige spørgsmål vedrørende vores fællesansvar for at beskytte regnskoven. Amazon junglen er kendt, som verdens lunger og spiller en central rolle i at bremse klimaforandringerne. Disse brænde kan være udløst af menneskelig aktivitet såsom skovrydning, landbrug og tørke. Der frigives enorme mængder af CO2 i atmosfæren, når skoven brænder. Dette er med til at fremme drivhuseffekten og gøre klimamålene endnu sværere at realisere.",
      },
      {
        text: "Ruslands areal",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Den Brasilianske skov er præget af massive skovbrænde. I 2015 blev cirka to gange af Tysklands samlede areal brændt af. Disse brænde er katastrofale for økosystemer og stiller vigtige spørgsmål vedrørende vores fællesansvar for at beskytte regnskoven. Amazon junglen er kendt, som verdens lunger og spiller en central rolle i at bremse klimaforandringerne. Disse brænde kan være udløst af menneskelig aktivitet såsom skovrydning, landbrug og tørke. Der frigives enorme mængder af CO2 i atmosfæren, når skoven brænder. Dette er med til at fremme drivhuseffekten og gøre klimamålene endnu sværere at realisere.",
      },
      {
        text: "Mexicos areal",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Den Brasilianske skov er præget af massive skovbrænde. I 2015 blev cirka to gange af Tysklands samlede areal brændt af. Disse brænde er katastrofale for økosystemer og stiller vigtige spørgsmål vedrørende vores fællesansvar for at beskytte regnskoven. Amazon junglen er kendt, som verdens lunger og spiller en central rolle i at bremse klimaforandringerne. Disse brænde kan være udløst af menneskelig aktivitet såsom skovrydning, landbrug og tørke. Der frigives enorme mængder af CO2 i atmosfæren, når skoven brænder. Dette er med til at fremme drivhuseffekten og gøre klimamålene endnu sværere at realisere.",
      },
    ],
  },
  {
    question:
      "Hvordan er det gået med at genoprette skovområder i verden fra 2010-2020?",
    apiEndpoint: "http://localhost:8080/bubbleforest",
    yAxis: "reforestation",
    xAxis: "expansion",
    graphType: "some",
    imagePath: "css/images/good.jpg",
    answers: [
      {
        text: "Udsat",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Genoprettelsen af skovområder er der kommet et stigende fokus på i det seneste årti. I denne periode er der flere lande, som har lavet programmer, der har til formål at genoprette skovområder, der har været udsat for skovrydning og afbrænding. Nogle af de mest markante udforinger for skovgenoprettelse er økonomiske og politiske. Den gennemgribende konflikt er behovet for landbrugsjord og bevarelsen af skovområder. Hvis et skovgenopretningsprojekt skal være succesfuldt, kræver det ofte inddragelse fra lokalsamfundet.",
      },
      {
        text: "Droppet",
        correct: false,
        explanation:
          "Du svarede desværre forkert... Genoprettelsen af skovområder er der kommet et stigende fokus på i det seneste årti. I denne periode er der flere lande, som har lavet programmer, der har til formål at genoprette skovområder, der har været udsat for skovrydning og afbrænding. Nogle af de mest markante udforinger for skovgenoprettelse er økonomiske og politiske. Den gennemgribende konflikt er behovet for landbrugsjord og bevarelsen af skovområder. Hvis et skovgenopretningsprojekt skal være succesfuldt, kræver det ofte inddragelse fra lokalsamfundet.",
      },
      {
        text: "Stigende tendens",
        correct: true,
        explanation:
          "Det er helt rigtigt! Genoprettelsen af skovområder er der kommet et stigende fokus på i det seneste årti. I denne periode er der flere lande, som har lavet programmer, der har til formål at genoprette skovområder, der har været udsat for skovrydning og afbrænding. Nogle af de mest markante udforinger for skovgenoprettelse er økonomiske og politiske. Den gennemgribende konflikt er behovet for landbrugsjord og bevarelsen af skovområder. Hvis et skovgenopretningsprojekt skal være succesfuldt, kræver det ofte inddragelse fra lokalsamfundet.",
      },
    ],
  },
];
