let startButton = document.getElementById('start');
let quizDiv = document.getElementById('quiz');
let timer = document.getElementById('timer');
let quizQuestions = document.getElementById('quizQuestions');
let quizTime = 10;
let questionNumber = 0;
let questions = [{
    question: "Question 1",
    options: ["Option 1","Option 2","Option 3"],
    answer: "Option 1"
},{
    question: "Question 2",
    options: ["Option 4","Option 5","Option 6"],
    answer: "Option 6"
},{
    question: "Question 3",
    options: ["Option 7","Option 8","Option 9"],
    answer: "Option 8"
},{
    question: "Question 4",
    options: ["Option 10","Option 11","Option 12"],
    answer: "Option 10"
},{
    question: "Question 5",
    options: ["Option 13","Option 14","Option 15"],
    answer: "Option 14"
},
]

function startTimer (){
    let interval = setInterval(function(){
        if (quizTime > -1){
            document.getElementById('initialPage').innerHTML = "";
            timer.innerHTML="Time Left - " + quizTime + " sec";
            quizTime = quizTime - 1;       
        } else {
            clearInterval(interval);
            timer.innerHTML="Quiz Over!";
            quizQuestions.innerHTML="";
        }
    },1000)
}

function startQuiz (){
    let currentQuestion = questions[questionNumber]
    console.log(currentQuestion);
    let questionDiv = document.createElement('div');
    questionDiv.innerHTML= currentQuestion.question;
    console.log(questionDiv);
    let mainDiv = document.createElement('div');
    let options = currentQuestion.options;
    let nextButton = document.createElement('button');
        nextButton.innerHTML = "Next";
    for (let i=0; i<options.length; i++){
        let optionButton = document.createElement('button');
        optionButton.innerHTML = options[i];
        optionButton.addEventListener('click', function(event){
            event.preventDefault();
            console.log(event.target);
        })
        mainDiv.append(optionButton);
        mainDiv.append(nextButton);
    }
    console.log(mainDiv);
    quizQuestions.append(questionDiv,mainDiv);
}

function init(){
    document.getElementById('initialPage').innerHTML = "";
    // startTimer()
    startQuiz()
}
function nextT(){
    quizQuestions.innerHTML = questions[1];
}

startButton.addEventListener('click', init);
nextButton.addEventListener('click', nextT);


// ask tutor about this function below, specifically what preventDefault is, what event.target is, and what append questionDiv and mainDiv are
//  for (let i=0; i<options.length; i++){
//         let optionButton = document.createElement('button');
//         optionButton.innerHTML = options[i];
//         optionButton.addEventListener('click', function(event){
//             event.preventDefault();
//             console.log(event.target);
//         })
//         mainDiv.append(optionButton);
//     }
//     console.log(mainDiv);
//     quizQuestions.append(questionDiv,mainDiv);
// }
