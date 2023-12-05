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
    const apiUrl = "http://localhost:8080/changes";
    selectedButton.dataset.changes = apiUrl;
    if (button !== selectedButton) {
      setStatusClass(button, button.dataset.correct);
    }
    fetch(selectedButton.dataset.changes)
      .then((response) => response.json())
      .then((data) => {
        console.log("URL:", apiUrl);

        // Create a D3 visualization using 'data'
        createD3Visualization(data);

        // Show explanation on a new page
        showExplanationPage(selectedButton.dataset.explanation);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

  // Vis forklaring på en ny side med et unikt billede
  const imagePath = selectedButton.dataset.imagePath;
  showExplanationPage(selectedButton.dataset.explanation);

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
