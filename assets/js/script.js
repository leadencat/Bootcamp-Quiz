
// page elements
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var questionEL = document.getElementById("question");
// global variables
var time = 90;
var questionNumber = 0;
var timeVar;
var questionsCorrect = 0;
var userScore;
// Variables used to create new "pages"
var welcomeScreenEl = document.getElementById("welcomeScreen");
var questionScreenEl = document.getElementById("questionScreen");
var scoreScreenEl = document.getElementById("scoreScreen");

//event listeners
startButton.addEventListener("click", startQuiz);


function startQuiz() {
    welcomeScreenEl.setAttribute("class", "hidden");
    returnHomeEl.removeAttribute("class");
    questionScreenEl.removeAttribute("class");
    timeVar = setInterval(timerCountdown, 1000);
    timeLeftEl.textContent = time;
    displayQuestion();
};

// timer countdown function
function timerCountdown() {
    time--;
    timeLeftEl.textContent = time;

    if (seconds <= 0) {
        scoreScreen();
    };

}
// writes out the question
function displayQuestion() {
    var questionInfo = questions[questionNumber];
    var questionEL = document.getElementById("question");
    questionEL.textContent = questionInfo.question;

    //erases previous question
optionsEL.innerHTML = '';

// gives you the question
for(var i=0; i<questions.length; i++){
    answers = [];
var option = questionInfo.options[i]; 
var optionButton = document.createElement("button");
optionButton.setAttribute("class", "option");
optionButton.setAttribute("value", option);

optionButton.textContent = i + 1 + ". " + option;

optionsEl.appendChild(optionButton);
};
};

function chooseOption(event) {
    var buttonEl = event.target;
    if (!buttonEl.matches(".option")) {
        return;
    };
    if (buttonEl.value !== questions[questionNumber].answer) {
        time -= 6;
        if (time <= 0) {
            time = 0;
        }
        responseEl.setAttribute("class", "incorrect");
        responseEl.textContent = "Incorrect!";
    }
 else {
        questionsCorrect++;

        responseEl.setAttribute("class", "correct");
        responseEl.textContent = "Correct!";
    };
    setTimeout(function () {
        responseEl.setAttribute("class", "hidden");
    }, 1000);
    questionNumber++;
    userScore = time * questionsCorrect;

userAnswer = (answerContainers[i].querySelecter('input[name.question'+i+']:checked')||{}).value;
if(time <= 0 || questionNumber === questions.length) {
scoreScreen();
    answerContainers[i].style.color = 'green';
}

else{
    displayQuestion();
    answerContainers[i].style.color = 'red'
}
};
function scoreScreen() {
    clearInterval(timeVar);
    questionScreenEl.setAttribute("class", "hidden");
    scoreScreenEl.removeAttribute("class");
    var scoreEL = document.getElementById("results");
}

submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}

var questions = [
    {
        question:'Which of the following elements is not an html element?', 
         answers:['span', 'div', 'h7', 'body'], 
         correctAnswer: 'h7'},

    {
        question:'Which of the following would you use to create an array?', 
        answers:['< >', '[ ]', '{ }', '( )'], 
        correctAnswer: '[ ]'},

    {
        question:'How many different header tags can you make?', 
         answers:['2', '3', '5', '6'], 
         correctAnswer: '6'},

    {
        question:'What is the correct term for true/false statements?', 
          answers:['boolean', 'string', 'numbers', 'span'], 
          correctAnswer: 'boolean'},

    {
        question:'What can you do if you dont understand this?', 
         answers:['Google', 'Tutor', 'Ask a peer', 'All of the Above'], 
         correctAnswer: 'All of the Above'}
];