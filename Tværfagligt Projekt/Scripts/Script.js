const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById ('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const explanationElement = document.getElementById('explanation');
const nextQuestionButton = document.getElementById('next-question-btn');



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
    // Set the question text
    questionElement.innerText = question.question;

    // Set the explanation text to an empty string
    explanationElement.innerText = '';

    // Clear the answer buttons
    answerButtonsElement.innerHTML = '';

    // Iterate through each answer in the question
    question.answers.forEach(answer => {
        // Create a button element
        const button = document.createElement('button');

        // Set the button text to the answer text
        button.innerText = answer.text;

        // Add the 'btn' class to the button
        button.classList.add('btn');

        // Set the dataset properties for explanation and correct
        button.dataset.explanation = answer.explanation;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        // Set the dataset property for imagePath
        button.dataset.imagePath = question.imagePath;

        // Add an event listener for the click event
        button.addEventListener('click', selectAnswer);

        // Append the button to the answer buttons container
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

// ...

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    // Set status class for selected answer
    setStatusClass(selectedButton, correct);

    // Set status class for other buttons
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button !== selectedButton) {
            setStatusClass(button, button.dataset.correct);
        }
    });

    // Show explanation on a new page with a unique image path
    const imagePath = selectedButton.dataset.imagePath; // Use the provided image path
    showExplanationPage(selectedButton.dataset.explanation, imagePath);

    // Show next button or end of quiz
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Start quizzen igen';
        startButton.classList.remove('hide');
    }
}



function showExplanationPage(explanation, imagePath, question) {
    // Clear the question and answer buttons
    questionElement.innerText = '';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

    // Display the explanation text
    explanationElement.innerText = explanation;
    explanationElement.classList.remove('hide');

    // Show only the "next-btn" button
    nextButton.classList.remove('hide');

    // Remove the "Næste spørgsmål" button if it exists
    if (nextQuestionButton) {
        nextQuestionButton.remove();
    }

    // Create an image element
    const imageElement = document.createElement('img');
    imageElement.src = imagePath;
    imageElement.alt = 'Explanation Image'; // Add a descriptive alt text
    console.log("imagePath:", imagePath);

    // Add styles to the image for maximum width
    imageElement.style.maxWidth = '100%'; // Adjust the value as needed
    imageElement.style.height = 'auto';

    // Append the image to the answer buttons element
    answerButtonsElement.appendChild(imageElement);
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
        imagePath: "annual-deforestation.png",
        answers: [
            {text: '16 fodboldbaner i minuttet', correct: false, explanation: 'Du svarede desværre forkert... 13 millioner hektar bliver fældet hver dag! Det svarer til 36 Fodboldbaner i minuttet. Skovene, som udgør en afgørende del af vores globale økosystem, står over for en udfordring af alarmerende proportioner. Hvert minut bliver et betragteligt areal af skovrydning registreret på verdensplan, hvilket har dybtgående konsekvenser for biodiversitet, klima og miljøet som helhed. Der er flere hovedårsager til skovrydning, herunder behovet for landbrugsarealer, produktion af papir og træprodukter, samt urbanisering. Uheldigvis fører denne praksis til tab af levesteder for utallige plante- og dyrearter, og det accelererer klimaforandringer ved at reducere skovens kapacitet til at absorbere CO2. At forstå omfanget af skovrydningen er afgørende for at tackle dette problem. Initiativer såsom bæredygtigt skovbrug, bevarelse af naturområder og anvendelse af alternative materialer kan bidrage til at mindske det aktuelle tempo for skovnedbrydning. Derfor er det vigtigt at øge bevidstheden om dette spørgsmål, da det berører os alle og har konsekvenser for fremtidige generationer.'},
            {text: '26 fodboldbaner i minuttet', correct: false, explanation: 'Du svarede desværre forkert... 13 millioner hektar bliver fældet hver dag! Det svarer til 36 Fodboldbaner i minuttet. Skovene, som udgør en afgørende del af vores globale økosystem, står over for en udfordring af alarmerende proportioner. Hvert minut bliver et betragteligt areal af skovrydning registreret på verdensplan, hvilket har dybtgående konsekvenser for biodiversitet, klima og miljøet som helhed. Der er flere hovedårsager til skovrydning, herunder behovet for landbrugsarealer, produktion af papir og træprodukter, samt urbanisering. Uheldigvis fører denne praksis til tab af levesteder for utallige plante- og dyrearter, og det accelererer klimaforandringer ved at reducere skovens kapacitet til at absorbere CO2. At forstå omfanget af skovrydningen er afgørende for at tackle dette problem. Initiativer såsom bæredygtigt skovbrug, bevarelse af naturområder og anvendelse af alternative materialer kan bidrage til at mindske det aktuelle tempo for skovnedbrydning. Derfor er det vigtigt at øge bevidstheden om dette spørgsmål, da det berører os alle og har konsekvenser for fremtidige generationer.'},
            {text: '36 fodboldbaner i minuttet', correct: true, explanation: 'Det er helt rigtigt! 13 millioner hektar bliver fældet hver dag! Det svarer til 36 Fodboldbaner i minuttet. Skovene, som udgør en afgørende del af vores globale økosystem, står over for en udfordring af alarmerende proportioner. Hvert minut bliver et betragteligt areal af skovrydning registreret på verdensplan, hvilket har dybtgående konsekvenser for biodiversitet, klima og miljøet som helhed. Der er flere hovedårsager til skovrydning, herunder behovet for landbrugsarealer, produktion af papir og træprodukter, samt urbanisering. Uheldigvis fører denne praksis til tab af levesteder for utallige plante- og dyrearter, og det accelererer klimaforandringer ved at reducere skovens kapacitet til at absorbere CO2. At forstå omfanget af skovrydningen er afgørende for at tackle dette problem. Initiativer såsom bæredygtigt skovbrug, bevarelse af naturområder og anvendelse af alternative materialer kan bidrage til at mindske det aktuelle tempo for skovnedbrydning. Derfor er det vigtigt at øge bevidstheden om dette spørgsmål, da det berører os alle og har konsekvenser for fremtidige generationer.'},
        ]
    },
    {
        question: "Beboeligt land på jorden udgør 29% det svarer til 149 million km^2. Hvor mange procent af beboeligt land bliver brugt til landbrug?",
        imagePath: "landuse.png",
        answers: [
            {text: '36%', correct: false, explanation: 'Du svarede desværre forkert... Af det beboelige land på jorden, der udgør 29%, bliver omkring 46% anvendt til landbrug. Desværre spiller skovrydning en betydelig rolle i denne procentdel, da landbrugsaktiviteter ofte indebærer fjernelse af skovområder for at skabe plads til dyrkning. Denne procentdel afspejler ikke blot landbrugets omfang, men også den udfordring, som skovrydning udgør for biodiversitet og økologisk balance. Skovene, der engang dækkede store dele af det beboelige land, bliver ofte ofret for at imødekomme den stigende efterspørgsel efter landbrugsprodukter. For at adressere denne udfordring er det afgørende at fremme bæredygtige landbrugspraksisser og bevare skovområder. Balancen mellem landbrugsproduktion og bevarelse af skove er afgørende for at sikre en langsigtet og bæredygtig fremtid for vores planet.'},
            {text: '46%', correct: true, explanation: 'Det er helt rigtigt!  Af det beboelige land på jorden, der udgør 29%, bliver omkring 46% anvendt til landbrug. Desværre spiller skovrydning en betydelig rolle i denne procentdel, da landbrugsaktiviteter ofte indebærer fjernelse af skovområder for at skabe plads til dyrkning. Denne procentdel afspejler ikke blot landbrugets omfang, men også den udfordring, som skovrydning udgør for biodiversitet og økologisk balance. Skovene, der engang dækkede store dele af det beboelige land, bliver ofte ofret for at imødekomme den stigende efterspørgsel efter landbrugsprodukter. For at adressere denne udfordring er det afgørende at fremme bæredygtige landbrugspraksisser og bevare skovområder. Balancen mellem landbrugsproduktion og bevarelse af skove er afgørende for at sikre en langsigtet og bæredygtig fremtid for vores planet.'},
            {text: '56%', correct: false, explanation: 'Du svarede desværre forkert...  Af det beboelige land på jorden, der udgør 29%, bliver omkring 46% anvendt til landbrug. Desværre spiller skovrydning en betydelig rolle i denne procentdel, da landbrugsaktiviteter ofte indebærer fjernelse af skovområder for at skabe plads til dyrkning. Denne procentdel afspejler ikke blot landbrugets omfang, men også den udfordring, som skovrydning udgør for biodiversitet og økologisk balance. Skovene, der engang dækkede store dele af det beboelige land, bliver ofte ofret for at imødekomme den stigende efterspørgsel efter landbrugsprodukter. For at adressere denne udfordring er det afgørende at fremme bæredygtige landbrugspraksisser og bevare skovområder. Balancen mellem landbrugsproduktion og bevarelse af skove er afgørende for at sikre en langsigtet og bæredygtig fremtid for vores planet.'},
        ]
    },
    {
        question: "Hvor mange køer bliver slagtet hver dag for kødindtag?",
        imagePath: "cows.png",
        answers: [
            {text: '500.000', correct: false, explanation:'Du svarede desværre forkert...  Bag den daglige slagtning af 900.000 køer ligger en kompleks dynamik, der også påvirker skovområder rundt om i verden. En betydelig del af denne kødproduktion er forbundet med kvægopdræt, og det kræver store landområder til græsning og dyrkning af foder. Desværre er dette behov for land ofte en drivkraft bag skovrydning. For at imødekomme efterspørgslen efter kødprodukter bliver skovområder i visse regioner ofte ryddet for at skabe plads til kvæggræsning eller afgrøder til foder. Denne praksis, kendt som afgrødebaseret skovrydning, er en bekymrende faktor for biodiversitet og miljøets sundhed. Skovrydning ikke kun reducerer det naturlige habitat for mange arter, men det bidrager også til klimaforandringer, da træer spiller en afgørende rolle i at absorbere kuldioxid. Derfor er den massive skala, hvorpå køer bliver slagtet hver dag, indirekte knyttet til en stigende efterspørgsel efter landbrugsarealer, hvilket igen driver skovrydning og de deraf følgende miljømæssige udfordringer. For at håndtere denne komplekse problematik er der behov for øget bevidsthed omkring bæredygtige landbrugspraksisser og alternativer, der kan mindske presset på skovområder. Dette indebærer også overvejelser om vores forbrugsmønstre og den globale fødevaresystems påvirkning på miljøet.'},
            {text: '700.000', correct: false, explanation:'Du svarede desværre forkert... Bag den daglige slagtning af 900.000 køer ligger en kompleks dynamik, der også påvirker skovområder rundt om i verden. En betydelig del af denne kødproduktion er forbundet med kvægopdræt, og det kræver store landområder til græsning og dyrkning af foder. Desværre er dette behov for land ofte en drivkraft bag skovrydning. For at imødekomme efterspørgslen efter kødprodukter bliver skovområder i visse regioner ofte ryddet for at skabe plads til kvæggræsning eller afgrøder til foder. Denne praksis, kendt som afgrødebaseret skovrydning, er en bekymrende faktor for biodiversitet og miljøets sundhed. Skovrydning ikke kun reducerer det naturlige habitat for mange arter, men det bidrager også til klimaforandringer, da træer spiller en afgørende rolle i at absorbere kuldioxid. Derfor er den massive skala, hvorpå køer bliver slagtet hver dag, indirekte knyttet til en stigende efterspørgsel efter landbrugsarealer, hvilket igen driver skovrydning og de deraf følgende miljømæssige udfordringer. For at håndtere denne komplekse problematik er der behov for øget bevidsthed omkring bæredygtige landbrugspraksisser og alternativer, der kan mindske presset på skovområder. Dette indebærer også overvejelser om vores forbrugsmønstre og den globale fødevaresystems påvirkning på miljøet.'},
            {text: '900.000', correct: true, explanation: 'Det er helt rigtigt! Bag den daglige slagtning af 900.000 køer ligger en kompleks dynamik, der også påvirker skovområder rundt om i verden. En betydelig del af denne kødproduktion er forbundet med kvægopdræt, og det kræver store landområder til græsning og dyrkning af foder. Desværre er dette behov for land ofte en drivkraft bag skovrydning. For at imødekomme efterspørgslen efter kødprodukter bliver skovområder i visse regioner ofte ryddet for at skabe plads til kvæggræsning eller afgrøder til foder. Denne praksis, kendt som afgrødebaseret skovrydning, er en bekymrende faktor for biodiversitet og miljøets sundhed. Skovrydning ikke kun reducerer det naturlige habitat for mange arter, men det bidrager også til klimaforandringer, da træer spiller en afgørende rolle i at absorbere kuldioxid. Derfor er den massive skala, hvorpå køer bliver slagtet hver dag, indirekte knyttet til en stigende efterspørgsel efter landbrugsarealer, hvilket igen driver skovrydning og de deraf følgende miljømæssige udfordringer. For at håndtere denne komplekse problematik er der behov for øget bevidsthed omkring bæredygtige landbrugspraksisser og alternativer, der kan mindske presset på skovområder. Dette indebærer også overvejelser om vores forbrugsmønstre og den globale fødevaresystems påvirkning på miljøet.'},
        ]
    },
    {
        question: "Hvilken afgrøde er mest brugt i verden?",
        imagePath: "crop.png",
        answers: [
            {text: 'Hvede', correct: true, explanation:'Det er helt rigtigt! Selvom hvede ikke er direkte ansvarlig for skovrydning, spiller udvidelsen af ​​landbrugsarealer, herunder hvededyrkning, en rolle i nedbrydningen af verdens skove. Den stigende efterspørgsel efter landbrugsprodukter kan presse på for at frigøre nye arealer, og i nogle tilfælde fører dette desværre til skovrydning. Nogle regioner, hvor skovområder er rige på biodiversitet, står over for udfordringer, da landbrugsaktiviteter, herunder hvededyrkning, udvider sig. Fældning af skove for at skabe plads til landbrugsjord kan have alvorlige konsekvenser for økosystemet, med tab af levesteder og ødelæggelse af naturlige balance. Samtidig er det vigtigt at nævne, at bæredygtige landbrugspraksisser og teknologier kan hjælpe med at mindske presset på skove. Effektiv ressourceforvaltning, herunder brugen af avancerede landbrugsmetoder og bevarelse af eksisterende skovområder, er nødvendige for at sikre en balance mellem landbrugsproduktion og bevaring af vigtige økosystemer. Hvededyrkning og andre landbrugsaktiviteter bør derfor gennemføres med omhu og bæredygtighed for øje, for at bevare skove som afgørende aktiver for planetens sundhed og biodiversitet.'},
            {text: 'Majs', correct: false, explanation:'Du svarede desværre forkert... Selvom hvede ikke er direkte ansvarlig for skovrydning, spiller udvidelsen af ​​landbrugsarealer, herunder hvededyrkning, en rolle i nedbrydningen af verdens skove. Den stigende efterspørgsel efter landbrugsprodukter kan presse på for at frigøre nye arealer, og i nogle tilfælde fører dette desværre til skovrydning. Nogle regioner, hvor skovområder er rige på biodiversitet, står over for udfordringer, da landbrugsaktiviteter, herunder hvededyrkning, udvider sig. Fældning af skove for at skabe plads til landbrugsjord kan have alvorlige konsekvenser for økosystemet, med tab af levesteder og ødelæggelse af naturlige balance. Samtidig er det vigtigt at nævne, at bæredygtige landbrugspraksisser og teknologier kan hjælpe med at mindske presset på skove. Effektiv ressourceforvaltning, herunder brugen af avancerede landbrugsmetoder og bevarelse af eksisterende skovområder, er nødvendige for at sikre en balance mellem landbrugsproduktion og bevaring af vigtige økosystemer. Hvededyrkning og andre landbrugsaktiviteter bør derfor gennemføres med omhu og bæredygtighed for øje, for at bevare skove som afgørende aktiver for planetens sundhed og biodiversitet.'},
            {text: 'Ris', correct: false, explanation:'Du svarede desværre forkert... Selvom hvede ikke er direkte ansvarlig for skovrydning, spiller udvidelsen af ​​landbrugsarealer, herunder hvededyrkning, en rolle i nedbrydningen af verdens skove. Den stigende efterspørgsel efter landbrugsprodukter kan presse på for at frigøre nye arealer, og i nogle tilfælde fører dette desværre til skovrydning. Nogle regioner, hvor skovområder er rige på biodiversitet, står over for udfordringer, da landbrugsaktiviteter, herunder hvededyrkning, udvider sig. Fældning af skove for at skabe plads til landbrugsjord kan have alvorlige konsekvenser for økosystemet, med tab af levesteder og ødelæggelse af naturlige balance. Samtidig er det vigtigt at nævne, at bæredygtige landbrugspraksisser og teknologier kan hjælpe med at mindske presset på skove. Effektiv ressourceforvaltning, herunder brugen af avancerede landbrugsmetoder og bevarelse af eksisterende skovområder, er nødvendige for at sikre en balance mellem landbrugsproduktion og bevaring af vigtige økosystemer. Hvededyrkning og andre landbrugsaktiviteter bør derfor gennemføres med omhu og bæredygtighed for øje, for at bevare skove som afgørende aktiver for planetens sundhed og biodiversitet.'},
        ]
    },
    {
        question: "Hvis verdensbefolkningen spiste plantebaseret hvor meget af landbrugsjorden ville blive frigjort?  ",
        imagePath: "diets.png",
        answers: [
            {text: '45%', correct: false, explanation: 'Du svarede desværre forkert...  Hvis verdensbefolkningen skiftede til en plantebaseret kost, ville der potentielt blive frigivet 75% landbrugsjord. Dette skyldes, at plantebaserede diæter kræver mindre arealressourcer sammenlignet med kødbaserede diæter, da dyreopdræt kræver mere plads, vand og føde end planteproduktion. En betydelig del af den globale landbrugsjord anvendes i øjeblikket til dyrkning af afgrøder, der bruges som dyrefoder, samt græsningsområder til husdyr. Hvis disse arealer blev omfordelt til dyrkning af direkte menneskeføde, kunne vi se en markant frigivelse af landbrugsjord. Estimater varierer, men nogle studier antyder, at en overgang til en plantebaseret kost kunne reducere behovet for landbrugsjord med op til 75%, afhængigt af faktorer som ernæringsmønstre og landbrugspraksis. Dette ville have betydelige positive virkninger på bevarelsen af naturressourcer, biodiversitet og reduktion af skovrydning, da mindre areal ville være nødvendigt for at imødekomme fødevarebehovene for en plantebaseret befolkning. Denne omlægning af kostvaner og landbrugspraksisser er dog en kompleks udfordring og kræver overvejelser om adfærdsændringer, teknologiske innovationer og politiske tiltag. Ikke desto mindre peger mange eksperter på en plantebaseret kost som en bæredygtig løsning for at imødegå udfordringerne ved global fødevaresikkerhed og miljøpåvirkning.'},
            {text: '65%', correct: false, explanation: 'Du svarede desværre forkert...   Hvis verdensbefolkningen skiftede til en plantebaseret kost, ville der potentielt blive frigivet 75% landbrugsjord. Dette skyldes, at plantebaserede diæter kræver mindre arealressourcer sammenlignet med kødbaserede diæter, da dyreopdræt kræver mere plads, vand og føde end planteproduktion. En betydelig del af den globale landbrugsjord anvendes i øjeblikket til dyrkning af afgrøder, der bruges som dyrefoder, samt græsningsområder til husdyr. Hvis disse arealer blev omfordelt til dyrkning af direkte menneskeføde, kunne vi se en markant frigivelse af landbrugsjord. Estimater varierer, men nogle studier antyder, at en overgang til en plantebaseret kost kunne reducere behovet for landbrugsjord med op til 75%, afhængigt af faktorer som ernæringsmønstre og landbrugspraksis. Dette ville have betydelige positive virkninger på bevarelsen af naturressourcer, biodiversitet og reduktion af skovrydning, da mindre areal ville være nødvendigt for at imødekomme fødevarebehovene for en plantebaseret befolkning. Denne omlægning af kostvaner og landbrugspraksisser er dog en kompleks udfordring og kræver overvejelser om adfærdsændringer, teknologiske innovationer og politiske tiltag. Ikke desto mindre peger mange eksperter på en plantebaseret kost som en bæredygtig løsning for at imødegå udfordringerne ved global fødevaresikkerhed og miljøpåvirkning.'},
            {text: '75%', correct: true, explanation: 'Det er helt rigtigt!  Hvis verdensbefolkningen skiftede til en plantebaseret kost, ville der potentielt blive frigivet 75% landbrugsjord. Dette skyldes, at plantebaserede diæter kræver mindre arealressourcer sammenlignet med kødbaserede diæter, da dyreopdræt kræver mere plads, vand og føde end planteproduktion. En betydelig del af den globale landbrugsjord anvendes i øjeblikket til dyrkning af afgrøder, der bruges som dyrefoder, samt græsningsområder til husdyr. Hvis disse arealer blev omfordelt til dyrkning af direkte menneskeføde, kunne vi se en markant frigivelse af landbrugsjord. Estimater varierer, men nogle studier antyder, at en overgang til en plantebaseret kost kunne reducere behovet for landbrugsjord med op til 75%, afhængigt af faktorer som ernæringsmønstre og landbrugspraksis. Dette ville have betydelige positive virkninger på bevarelsen af naturressourcer, biodiversitet og reduktion af skovrydning, da mindre areal ville være nødvendigt for at imødekomme fødevarebehovene for en plantebaseret befolkning. Denne omlægning af kostvaner og landbrugspraksisser er dog en kompleks udfordring og kræver overvejelser om adfærdsændringer, teknologiske innovationer og politiske tiltag. Ikke desto mindre peger mange eksperter på en plantebaseret kost som en bæredygtig løsning for at imødegå udfordringerne ved global fødevaresikkerhed og miljøpåvirkning.'},
        ]
    }
];