let startButton = document.getElementById('start');
let quizDiv = document.getElementById('quiz');
let timer = document.getElementById('timer');
let quizQuestions = document.getElementById('quizQuestions');
let quizTime = 30;
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
    questionDiv.innerHTML= "";
    console.log(questionDiv);
    let mainDiv = document.createElement('div');
    let options = currentQuestion.options;
    // let nextButton = document.createElement('button');
    //     nextButton.innerHTML = "Next";
    for (let i=0; i<options.length; i++){
        let optionButton = document.createElement('button');
        optionButton.innerHTML = options[i];
        // what do the two lines below mean?
        optionButton.addEventListener('click', function(event){
            event.preventDefault();
            // console.log(event.target);
        })
        mainDiv.append(optionButton);
        // mainDiv.append(nextButton);
    }
    console.log(mainDiv);

    // what is the line below doing? why are there 2 arguments being passed?
    quizQuestions.append(questionDiv,mainDiv);
}
function populateQuestion(){
    // since currentQuestion was created in the function startQuiz () should I not be able to call it in other functions without having to declare it again like below? Would I declare currentQuestions as a global variable outside all functions and then be able to call it whenever I want? Is it because I declared it as let instead of const above?
    const currentQuestion = questions[questionNumber];
    document.getElementById("question-title").innerHTML=currentQuestion.question;
    for (let i=0; i<3; i++) {
        // what is the long hand version of the line below?
        const optEl =  document.getElementById(`option${i+1}`)
        optEl.innerHTML=currentQuestion.options[i];
        // further explain what the shorthand is below, specifically ()=>. what is the long hand version?
        optEl.addEventListener('click',()=>{
            questionNumber++;
            populateQuestion();
        });

    }
}

// create event listener for user option selection
// do I need to declare variable for when user selections an option with the event listener? 
// do I need to write a function to run the if statement that deducts time if answer is wrong and does nothing when answer is correct? or stores answer?
optEl.addEventListener('click',ifF());
let userSelection = optEl;
if(userSelection !== questions.answer){
    quizTime = quizTime - 5;
    // run populateQuestion() again?
 } else {
    // run populateQuetion() again?
    // where can i store these selections
 };


function init(){
    document.getElementById('initialPage').innerHTML = "";
    // startTimer()
    populateQuestion()
}

startButton.addEventListener('click', init);



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
