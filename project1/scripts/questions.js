const questions = [
  {
    question: "Hvilket land har den største skovrydning i 2010 frem til 2020?",
    apiEndpoint: "https://maltesmoegungerne.onrender.com/smallchanges",
    yAxis: "netChanges",
    xAxis: "name",
    graphType: "bart",
    imagePath: "css/images/deforest.jpg",
    answers: [
      {
        text: "USA",
        correct: false,
        explanation:
          "Forkert, Brasilien oplevede den mest omfattende skovrydning i dette tidsrum, primært i Amazonas. Denne udvikling har haft alvorlige konsekvenser for biodiversiteten og klimaet.",
      },
      {
        text: "Rusland",
        correct: false,
        explanation:
          "Forkert, Brasilien oplevede den mest omfattende skovrydning i dette tidsrum, primært i Amazonas. Denne udvikling har haft alvorlige konsekvenser for biodiversiteten og klimaet.",
      },
      {
        text: "Brasilien",
        correct: true,
        explanation:
          "Korrekt, Brasilien oplevede den mest omfattende skovrydning i dette tidsrum, primært i Amazonas. Denne udvikling har haft alvorlige konsekvenser for biodiversiteten og klimaet.",
      },
    ],
  },
  {
    question:
      "Hvilke faktorer har haft størst indflydelse på skovrydningen af den brasilianske regnskov?",
    apiEndpoint: "https://maltesmoegungerne.onrender.com/brazil",
    yAxis: "pasture",
    xAxis: "year",
    graphType: "stacked",
    imagePath: "css/images/cows.jpg",
    answers: [
      {
        text: "Sojabønneproduktionen",
        correct: false,
        explanation:
          "Forkert, kvægopdræt var den dominerende faktor, der bidrog til skovrydning i Brasilien, hvilket understreger behovet for bæredygtige landbrugsmetoder.",
      },
      {
        text: "Kvægopdræt",
        correct: true,
        explanation:
          "Rigtigt, kvægopdræt var den dominerende faktor, der bidrog til skovrydning i Brasilien, hvilket understreger behovet for bæredygtige landbrugsmetoder.",
      },
      {
        text: "Urbanisering",
        correct: false,
        explanation:
          "Forkert, kvægopdræt var den dominerende faktor, der bidrog til skovrydning i Brasilien, hvilket understreger behovet for bæredygtige landbrugsmetoder.",
      },
    ],
  },
  {
    question: "Hvor meget skov er blevet afbrændt i Brasilien fra 2000-2017?",
    apiEndpoint: "https://maltesmoegungerne.onrender.com/brazilfires",
    yAxis: "Brand",
    xAxis: "d.year",
    graphType: "bar",
    imagePath: "css/images/brazilfire.jpeg",
    answers: [
      {
        text: "cirka 2,2 mio. hektar",
        correct: false,
        explanation:
          "Korrekt.... NOT! Omkring 6,6 millioner hektar blev afbrændt, hvilket har været en udfordring for både klima og biodiversitet i området.",
      },
      {
        text: "cirka 4,4 mio. hektar",
        correct: false,
        explanation:
          "Korrekt.... NOT! Omkring 6,6 millioner hektar blev afbrændt, hvilket har været en udfordring for både klima og biodiversitet i området.",
      },
      {
        text: "cirka 6,6 mio. hektar",
        correct: true,
        explanation:
          "Korrekt! Omkring 6,6 millioner hektar blev afbrændt, hvilket har været en udfordring for både klima og biodiversitet i området.",
      },
    ],
  },
  {
    question:
      "Hvor meget skovudvidelse har der været i Amazonas fra 1990-2020?",
    apiEndpoint: "https://maltesmoegungerne.onrender.com/growingyearamazon",
    yAxis: "year",
    xAxis: "skovudvidelse",
    graphType: "line",
    imagePath: "css/images/forestfire.jpg",
    answers: [
      {
        text: "To gange Tysklands areal",
        correct: true,
        explanation:
          "Præcis, et område på størrelse med to gange Tysklands areal blev brændt, hvilket markerer en kritisk situation for denne vitale økosystem.",
      },
      {
        text: "Halvdelen af Belgiens areal",
        correct: false,
        explanation:
          "Desværre, et område på størrelse med to gange Tysklands areal blev brændt, hvilket markerer en kritisk situation for denne vitale økosystem.",
      },
      {
        text: "Lige så stort som Schweiz",
        correct: false,
        explanation:
          "Desværre, et område på størrelse med to gange Tysklands areal blev brændt, hvilket markerer en kritisk situation for denne vitale økosystem.",
      },
    ],
  },
  {
    question:
      "Hvor mange hektar skov bliver hvert år tab pågrund af bakterier, fungus og virusser?",
    apiEndpoint: "https://maltesmoegungerne.onrender.com/totalannual",
    yAxis: "total_diseases",
    xAxis: "year",
    graphType: "barz",
    imagePath: "css/images/svamp.jpg",
    answers: [
      {
        text: "Stagnerende tendens",
        correct: false,
        explanation:
          "Det er desværre forkert, der har været en stigende tendens i skovgenoprettelse globalt, med flere lande, der iværksætter programmer for at imødegå tidligere skader.",
      },
      {
        text: "Faldende tendens",
        correct: false,
        explanation:
          "Det er desværre forkert, der har været en stigende tendens i skovgenoprettelse globalt, med flere lande, der iværksætter programmer for at imødegå tidligere skader.",
      },
      {
        text: "Stigende tendens",
        correct: true,
        explanation:
          "Det er helt korrekt, der har været en stigende tendens i skovgenoprettelse globalt, med flere lande, der iværksætter programmer for at imødegå tidligere skader.",
      },
    ],
  },
];
