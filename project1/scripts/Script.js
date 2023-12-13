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
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  let shuffledQuestions = [];
  let currentQuestionIndex = -1;
  let correctAnswersCount = 0;

  // listeners
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", () => {
    nextQuestion();
  });

  function hideElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
      element.style.display = "none";
    }
  }

  function startQuiz() {
    // set arr to be a list of random numbers
    const arr = [];

    while (arr.length < questions.length) {
      const randomNumber = Math.floor(Math.random() * questions.length - 1) + 1;
      if (arr.indexOf(randomNumber) === -1) {
        arr.push(randomNumber);
      }
    }
    hideElementsByClass("intro-image");
    hideElementsByClass("quiz-info-box");

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
    const existingImage =
      questionContainerElement.querySelector(".question-image");
    if (existingImage) {
      existingImage.remove();
    }

    answerButtonsElement.style.display = "";

    // Check if there's an image for the question and add it
    if (question.imagePath) {
      const imageElement = document.createElement("img");
      imageElement.src = question.imagePath;
      imageElement.alt = "Question image"; // Provide a relevant alt text
      imageElement.classList.add("question-image"); // Add a class for styling
      questionContainerElement.insertBefore(
        imageElement,
        questionContainerElement.firstChild
      ); // Insert the image at the beginning of the question container
    }
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

    const isCorrect = selectedButton.dataset.correct === "true";
    showExplanationPage(selectedButton.dataset.explanation, isCorrect);

    const questionImage =
      questionContainerElement.querySelector(".question-image");
    if (questionImage) {
      questionImage.style.display = "none"; // or questionImage.remove(); if you want to remove it from the DOM
    }
    answerButtonsElement.style.display = "none";
    // Show explanation on a new page
    showExplanationPage(selectedButton.dataset.explanation);

    // fetch data and show graph
    const apiUrl = currentQuestion.apiEndpoint;
    const yAxis = currentQuestion.yAxis;
    const xAxis = currentQuestion.xAxis;
    const graphType = currentQuestion.graphType;
    await fetchDataAndCreateVisualization(apiUrl, yAxis, xAxis, svg, graphType);

    if (selectedButton.dataset.correct === "true") {
      selectedButton.classList.add("correct");
      correctAnswersCount++;
    } else {
      selectedButton.classList.add("wrong");
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
  function showExplanationPage(explanation, isCorrect) {
    // Clear the content of explanationElement
    explanationElement.innerHTML = "";

    // Create and add the icon element
    const iconElement = document.createElement("img");
    iconElement.src = isCorrect
      ? "css/icons/correct.png"
      : "css/icons/wrong.png";
    iconElement.alt = isCorrect ? "Correct Answer" : "Wrong Answer";
    iconElement.classList.add("explanation-icon");

    // Append the icon to the explanation element
    explanationElement.appendChild(iconElement);

    // Create a text node for the explanation text and append it
    const textNode = document.createTextNode(explanation);
    explanationElement.appendChild(textNode);
  }
  function clearStatusClass(element) {
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("correct", "wrong");
    }
  }
});
