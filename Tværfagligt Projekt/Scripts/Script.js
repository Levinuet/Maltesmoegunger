// Hent DOM-elementer ved hjælp af deres id
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const explanationElement = document.getElementById("explanation");
const nextQuestionButton = document.getElementById("next-question-btn");

// Initialiser variabler
let shuffledQuestions, currentQuestionIndex;

// Eventlistener til startknappen
startButton.addEventListener("click", startQuiz);

// Eventlistener til næste-knappen
nextButton.addEventListener("click", () => {
  setNextQuestion();
});

// Funktion til at starte quizzen
function startQuiz() {
  console.log("Started Quiz");
  // Skjul startknappen
  startButton.classList.add("hide");
  // Shuffle spørgsmålene
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  // Initialiser index for det aktuelle spørgsmål
  currentQuestionIndex = 0;
  // Vis containeren til spørgsmål
  questionContainerElement.classList.remove("hide");
  // Vis det første spørgsmål
  setNextQuestion();
}

// Funktion til at sætte næste spørgsmål
function setNextQuestion() {
  // Nulstil visningen
  resetState();

  // Hvis der er flere spørgsmål tilbage, vis det næste
  console.log(`Current Question Index: ${currentQuestionIndex}`);
  console.log(`Shuffled Questions Length: ${shuffledQuestions.length}`);

  if (currentQuestionIndex < shuffledQuestions.length) {
    currentQuestionIndex++;
    showQuestion(shuffledQuestions[currentQuestionIndex - 1]);
  } else {
    console.log("End of Quiz");
  }
}

// Funktion til at vise et spørgsmål
function showQuestion(question) {
  // Sæt teksten for spørgsmålet
  questionElement.innerText = question.question;

  // Sæt teksten for forklaringen til tom streng
  explanationElement.innerText = "";

  // Ryd svarknapperne
  answerButtonsElement.innerHTML = "";

  // Iterér gennem hvert svarmulighed i spørgsmålet
  question.answers.forEach((answer) => {
    // Opret et knappelement
    const button = document.createElement("button");

    // Sæt knapteksten til svarsteksten
    button.innerText = answer.text;

    // Tilføj klassen 'btn' til knappen
    button.classList.add("btn");

    // Sæt dataset-egenskaber for forklaring og korrekt
    button.dataset.explanation = answer.explanation;
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    // Sæt dataset-egenskab for imagePath
    button.dataset.imagePath = question.imagePath;

    // Tilføj en eventlistener for klikhændelsen
    button.addEventListener("click", selectAnswer);

    // Tilføj knappen til svarsknapcontaineren
    answerButtonsElement.appendChild(button);
  });
}

// Funktion til at nulstille tilstanden
function resetState() {
  // Ryd statusklassen fra hele dokumentet
  clearStatusClass(document.body);
  // Skjul næste-knappen
  nextButton.classList.add("hide");
  // Fjern alle børnelementer fra svarsknapcontaineren
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Funktion til at håndtere valg af svar
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  // Sæt statusklassen for det valgte svar
  setStatusClass(selectedButton, correct);

  // Sæt statusklassen for andre knapper
  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button !== selectedButton) {
      setStatusClass(button, button.dataset.correct);
    }
  });

  // Vis forklaring på en ny side med et unikt billede
  const imagePath = selectedButton.dataset.imagePath;
  showExplanationPage(selectedButton.dataset.explanation, imagePath);

  // Vis næste-knappen eller afslut quizzen
  if (shuffledQuestions.length > currentQuestionIndex) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Start quizzen igen";
    startButton.classList.remove("hide");
  }
}

// Funktion til at vise siden med forklaring
function showExplanationPage(explanation, imagePath) {
  // Ryd spørgsmålet og svarknapperne
  questionElement.innerText = "";
  answerButtonsElement.innerHTML = "";

  // Sæt teksten for forklaringen
  explanationElement.innerText = explanation;

  // Opret et billed-element
  const imageElement = document.createElement("img");

  // Sæt src-attributten til stien for billedet
  imageElement.src = imagePath;

  // Tilføj billedet til forklaringssiden
  explanationElement.appendChild(imageElement);
}

// Funktion til at sætte statusklassen for et element baseret på korrekthed
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// Funktion til at rydde statusklassen for et element
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question:
      "Det bliver fældet meget skov hvert minut, men hvor meget er det egentligt der bliver fældet?",
    imagePath: "resources/imgs/annual-deforestation.png",
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
    imagePath: "resources/imgs/landuse.png",
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
    imagePath: "resources/imgs/cows.png",
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
    imagePath: "resources/imgs/crop.png",
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
    imagePath: "resources/imgs/diets.png",
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
