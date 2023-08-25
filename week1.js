var question = document.querySelector("#question");
 var answerA = document.querySelector("#answerA");
  var answerB = document.querySelector("#answerB");
   var answerC = document.querySelector("#answerC");
    var answerD = document.querySelector("#answerD");
     var resultText = document.querySelector("#score"); 
     var containerHome = document.querySelector("#home");
      var containerGame = document.querySelector("#quiz"); 
      var containerEnd = document.querySelector("#end"); 
      var timerEl = document.querySelector("#timerEl");
var progressText = document.querySelector("#progressText");
var userAnswer = document.querySelector(".choice-text"); var secondsLeft = 60;
var finalScore = document.querySelector("#finalScore"); var timer;
var answerArr = [answerA, answerB, answerC, answerD];
// This is an index of questions, and multiple choice answers that will be logged var questionIndex = 0;
var questions = [
{
question:
"The famous football player Maradona belongs to which among the following countries?",
choices: ["Brazil", "Chile", "Argentina", "Italy"], answer: "Argentina",
},
{
question:
"Who was the “player of the series” in the 2011 Cricket World Cup, in whichIndia won its second world cup champion title?",
choices: ["Tillakaratne Dilshan", "Sachin Tendulkar", "Kumar Sangakkara", "Yuvraj Singh"],
answer: "Yuvraj Singh",
},
{
question: "Which country was the champion of the Second Cricket World Cup of 1979?",
choices: ["New Zealand", "Australia", "England", "West Indies"], answer: "West Indies",
},
{
question: "In which cricket world cup, Australia won its first “Cricket World Cup Champion” title?",
choices: [
"1984 Cricket World Cup", "1985 Cricket World Cup", "1986 Cricket World Cup", "1987 Cricket World Cup",
],
answer: "1987 Cricket World Cup",
},
{
question: "Who is the only boxer (male or female) to win eight World Championship medals?",
choices: [ "Christy Martin",
 
" Mary Kom", "Lucia Rijker", "Ann Wolfe",
],
answer: "Mary Kom",
},
];
// function to display question and choices on game and change to next question when an answer is chosen
function showQuestion() {
question.textContent = questions[questionIndex].question; for (var i = 0; i < answerArr.length; i++) {
answerArr[i].textContent = questions[questionIndex].choices[i]; answerArr[i].onclick = function () {
if (questions[questionIndex].answer !== this.textContent) { secondsLeft = secondsLeft - 15;
}
questionIndex++;
if (questionIndex >= questions.length) { endQuiz();
} else if (secondsLeft <= 0) { endQuiz();
} else { showQuestion();
progressText.textContent =
questionIndex + 1 + " of " + questions.length;
}
};
}
}
// Sets the timer at 60 seconds and will START decrementing to 0 function setTime() {
timer = setInterval(function () { secondsLeft--;
timerEl.textContent = "0:" + secondsLeft; if (secondsLeft <= 0) {
clearInterval(timer); endQuiz();
}
if (secondsLeft < 10) {
timerEl.textContent = "0:0" + secondsLeft;
}
}, 1000);
function endQuiz() {
    clearInterval(timer); if (secondsLeft < 0) {
    }
    localStorage.setItem("score", JSON.stringify(secondsLeft)); containerGame.classList.add("hidden"); containerEnd.classList.remove("hidden"); finalScore.textContent = localStorage.getItem("score");
    }
    // when START quiz button is clicked, the initial screen and title of quiz disappears
    document.querySelector("#START").onclick = function () { secondsLeft = 60;
    questionIndex = 0; containerHome.classList.add("hidden"); containerGame.classList.remove("hidden"); showQuestion();
    setTime();
    progressText.textContent = questionIndex + 1 + " of " + questions.length;
    };
    // Allows user to retake quiz
    document.querySelector("#retake-quiz").onclick = function (event) { event.preventDefault();
    secondsLeft = 60;
    questionIndex = 0; containerEnd.classList.add("hidden"); containerHome.classList.add("hidden"); containerGame.classList.remove("hidden"); showQuestion();
    setTime();
    progressText.textContent = questionIndex + 1 + " of " + questions.length;
    };
    

