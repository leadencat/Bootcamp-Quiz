
// page elements
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
// global variables
var time = 90;
var questionNumber = 0;
var timeVar;
var questionsCorrect = 0;
var userScore;
// Variables used to create new "pages"
var welcomeScreenEl = document.getElementById("welcomeScreen");
var questionScreenEl = document.getElementById("questionScreen");
//event listeners
startButton.addEventListener("click", startQuiz);


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

startButton.addEventListener('click', function() {
    var timer = setInterval(setTime, 1000);
    timeEl.textContent = seconds;
    startScreen.setAttribute('class', 'hidden');
    questionEl.removeAttribute('class');
    displayQ();
});

function setTime() {
    seconds--;
    timeEl.textContent = seconds;

    if (seconds <= 0) {
        endPage();
    }
}

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
function showQuestions(questions, quizContainer){

var output = [];
var answers;

for(var i=0; i<questions.length; i++){
    answers = [];

    for(letter in questions[i].answers){
        answers.push(
            '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
            + '</label>'
        );
    }
    output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	quizContainer.innerHTML = output.join('');
}
    }

function showResults(questions, quizContainer, resultsContainer) {
var answerContainers = quizContainer.querySelecterAll('.answers');
var userAnswer = '';
var numCorrect = 0;

for(var i=0; i<questions.length; i++){

userAnswer = (answerContainers[i].querySelecter('input[name.question'+i+']:checked')||{}).value;
if(userAnswer===questions[i].correctAnswer){
    numCorrect++;
    answerContainers[i].style.color = 'green';
}
else{
    answerContainers[i].style.color = 'red'
}
resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;
}

}
showQuestions(questions, quizContainer);


submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}

submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}