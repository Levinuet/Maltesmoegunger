const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById ('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const explanationElement = document.getElementById('explanation');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    setNextQuestion()

})

function startQuiz(){
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random()- .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState();

    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        currentQuestionIndex++; 
    } else {
        console.log("End of Quiz");
    }
}



function showQuestion(question) {
    questionElement.innerText = question.question;
    explanationElement.innerText = ''; 
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.explanation = answer.explanation;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}


function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else{
        startButton.innerText = 'Start quizzen igen'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
    {
        question: "Det bliver fældet meget skov hvert minut, men hvor meget er det egentligt der bliver fældet?",
        answers: [
            {text: '16 fodboldbaner i minuttet', correct: false},
            {text: '26 fodboldbaner i minuttet', correct: false},
            {text: '36 fodboldbaner i minuttet', correct: true, explanation: '13 millioner hektar!!!Det svarer til 36 Fodboldbaner i minuttet.'},
        ]
    },
    {
        question: "Beboeligt land på jorden udgør 29% det svarer til 149 million km^2. Hvor mange procent af beboeligt land bliver brugt til landbrug?",
        answers: [
            {text: '36%', correct: false},
            {text: '46%', correct: true, explanation: '46 % er det rigtige svar. Det svarer til 48 millioner kvadratmeter.'},
            {text: '56%', correct: false},
        ]
    },
    {
        question: "Hvor mange køer bliver slagtet hver dag for kødindtag?",
        answers: [
            {text: '500.000', correct: false},
            {text: '700.000', correct: false},
            {text: '900.000', correct: true, explanation: 'billede af visualisering'},
        ]
    },
    {
        question: "Hvilken afgrøde er mest brugt i verden?",
        answers: [
            {text: 'Hvede', correct: true, explanation:'Hvede er den mest brugte afgrøde som findes i verden.'},
            {text: 'Majs', correct: false},
            {text: 'Ris', correct: false},
        ]
    },
    {
        question: "Hvis verdensbefolkningen spiste plantebaseret hvor meget af landbrugsjorden ville blive frigjort?  ",
        answers: [
            {text: '45%', correct: false, explanation: '75 % af landbrugsjorden ville blive frigjort. Dette ville kunne bruges til at opdyrke ny natur og redde biodiversiteten.'},
            {text: '65%', correct: false, explanation: '75 % af landbrugsjorden ville blive frigjort. Dette ville kunne bruges til at opdyrke ny natur og redde biodiversiteten.'},
            {text: '75%', correct: true, explanation: '75 % af landbrugsjorden ville blive frigjort. Dette ville kunne bruges til at opdyrke ny natur og redde biodiversiteten.'},
        ]
    }
]