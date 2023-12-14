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
      "Hvilket land har haft den største skovudvidelse i Amazonas fra 2000 til 2020?",
    apiEndpoint: "https://maltesmoegungerne.onrender.com/growingyearamazon",
    yAxis: "year",
    xAxis: "skovudvidelse",
    graphType: "line",
    imagePath: "css/images/forestfire.jpg",
    answers: [
      {
        text: "Columbia",
        correct: true,
        explanation:
          "Præcis, Colombia har set den største skovudvidelse i Amazonas fra 2000 til 2020, hvilket afspejler en vellykket implementering af miljøpolitikker og bevaringsstrategier. Landet har gennem årene iværksat forskellige initiativer til at beskytte regnskoven og fremme bæredygtig brug af dens ressourcer. Disse tiltag har til sammen ført til en nettoforøgelse af skovområder i landet, hvilket gør Colombia til det førende land i Amazonasregionen med hensyn til skovudvidelse.",
      },
      {
        text: "Bolivia",
        correct: false,
        explanation:
          "Desværre, Colombia har set den største skovudvidelse i Amazonas fra 2000 til 2020, hvilket afspejler en vellykket implementering af miljøpolitikker og bevaringsstrategier. Landet har gennem årene iværksat forskellige initiativer til at beskytte regnskoven og fremme bæredygtig brug af dens ressourcer.Disse tiltag har til sammen ført til en nettoforøgelse af skovområder i landet, hvilket gør Colombia til det førende land i Amazonasregionen med hensyn til skovudvidelse. ",
      },
      {
        text: "Brasilien",
        correct: false,
        explanation:
          "Desværre, Colombia har set den største skovudvidelse i Amazonas fra 2000 til 2020, hvilket afspejler en vellykket implementering af miljøpolitikker og bevaringsstrategier. Landet har gennem årene iværksat forskellige initiativer til at beskytte regnskoven og fremme bæredygtig brug af dens ressourcer. Disse tiltag har til sammen ført til en nettoforøgelse af skovområder i landet, hvilket gør Colombia til det førende land i Amazonasregionen med hensyn til skovudvidelse.",
      },
    ],
  },
  {
    question:
      "Hvordan er det gået med at genoprette skovområder i verden fra 2010-2020?",
    apiEndpoint: "https://maltesmoegungerne.onrender.com/bubbleforest",
    yAxis: "reforestation",
    xAxis: "expansion",
    graphType: "bar",
    imagePath: "css/images/good.jpg",
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
