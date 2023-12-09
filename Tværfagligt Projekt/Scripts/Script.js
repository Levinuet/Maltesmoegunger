document.addEventListener("DOMContentLoaded", function () {
  // Hent DOM-elementer ved hjælp af deres id
  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const questionContainerElement =
    document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");
  const explanationElement = document.getElementById("explanation");
  const nextQuestionButton = document.getElementById("next-question-btn");

  const width = 780;
  const height = 503;
  let svg = d3
    .select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  let shuffledQuestions = [];
  let currentQuestionIndex = -1;
  let correctAnswersCount = 0;

  // listeners
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", () => {
    nextQuestion();
  });

  function startQuiz() {
    // set arr to be a list of random numbers
    const arr = [];

    while (arr.length < questions.length) {
      const randomNumber = Math.floor(Math.random() * questions.length - 1) + 1;
      if (arr.indexOf(randomNumber) === -1) {
        arr.push(randomNumber);
      }
    }

    // go through arr and push question into shuffledQuestions
    arr.forEach((index) => {
      shuffledQuestions.push(questions[index]);
    });

    // Skjul startknappen
    startButton.classList.add("hide");
    // Vis containeren til spørgsmål
    questionContainerElement.classList.remove("hide");
    nextQuestion();
  }

  function nextQuestion() {
    // Nulstil visningen
    resetState();

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      currentQuestionIndex++;
      showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
      // Call showResults when there are no more questions
      showResults();
    }
  }

  function showResults() {
    // Store the correct answers count in localStorage
    localStorage.setItem("correctAnswersCount", correctAnswersCount);
    // Redirect to the results page
    window.location.href = "results.html";
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

    if (svg) {
      svg.remove();
      d3.selectAll("g > *").remove();
      d3.select("svg").remove();
    }
  }

  function showQuestion(question) {
    // Sæt teksten for spørgsmålet
    questionElement.innerText = question.question;
    // Sæt teksten for forklaringen til tom streng
    explanationElement.innerText = "";

    // Ryd svarknapperne
    answerButtonsElement.innerHTML = "";

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

  async function selectAnswer(e) {
    const selectedButton = e.target;
    const currentQuestion = shuffledQuestions[currentQuestionIndex];

    // Show explanation on a new page
    showExplanationPage(selectedButton.dataset.explanation);

    // fetch data and show graph
    const apiUrl = currentQuestion.apiEndpoint;
    const yAxis = currentQuestion.yAxis;
    const xAxis = currentQuestion.xAxis;
    const graphType = currentQuestion.graphType;
    await fetchDataAndCreateVisualization(apiUrl, yAxis, xAxis, svg, graphType);

    // Increment the correctAnswersCount if the selected answer is correct
    if (selectedButton.dataset.correct === "true") {
      correctAnswersCount++;
    }

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

  function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  }
});
