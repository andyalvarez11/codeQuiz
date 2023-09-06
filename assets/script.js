const questions = [
    {
        question: "What is HTML?",
        choices: ["Hyper Text Markup Language", "High-Level Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        correctAnswer: 0
    },
    {
        question: "What is CSS?",
        choices: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 2
    },
    {
        question: "What is Javascript?",
        choices: ["Type of coffee","Font style for coffee lovers","Programming language that allows you to implement complex features on web pages","A movie idea for coffee lovers"],
        correctAnswer: 2
    },
    // Add more questions if you'd like here
  ];
  
  let currentQuestionIndex = 0;
  let timeLeft = 60; // Initial time in seconds
  let score = 0;
  let timerInterval;
  
  const startButton = document.getElementById("start-button");
  const questionContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");
  const gameOverContainer = document.getElementById("game-over-container");
  const scoreSpan = document.getElementById("score");
  const initialsInput = document.getElementById("initials");
  const saveScoreButton = document.getElementById("save-score");
  
  // Event handler for when the startButton is clicked
  startButton.addEventListener("click", startQuiz);
  // Starts the quiz
  function startQuiz() {
    startButton.style.display = "none";
    timerInterval = setInterval(updateTimer, 1000);
    showNextQuestion();
  }
  // Populates the questions
  function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <h2>${question.question}</h2>
            <ul>
                ${question.choices.map((choice, index) => `
                    <li>
                        <button onclick="checkAnswer(${index})">${choice}</button>
                    </li>
                `).join("")}
            </ul>
        `;
    } else {
        endQuiz();
    }
  }
  
  // Checks to see if the user's answer is correct
  function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswer) {
        score += 10;
        resultContainer.textContent = "Correct!";
    } else {
        timeLeft -= 10;
        resultContainer.textContent = "Incorrect!";
    }
    currentQuestionIndex++;
    showNextQuestion();
  }
  
  // ends quiz if the timer runs out
  function updateTimer() {
    if (timeLeft <= 0) {
        endQuiz();
    } else {
        timeLeft--;
    }
  }
  // ends the quiz and displays the gameOverContainer
  function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.style.display = "none";
    resultContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    scoreSpan.textContent = score;
  }
  
  // event handler for when saveScoreButton is clicked
  saveScoreButton.addEventListener("click", saveScore);
  
  // uses localstorage to save scores
  function saveScore() {
      const initials = initialsInput.value.trim();
      if (initials !== "") {
          const scoreData = {
              initials: initials,
              score: score
          };
  
          // Check if there are existing scores in localStorage
          let savedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
          // Add the new score to the list
          savedScores.push(scoreData);
          // Sort the scores in descending order
          savedScores.sort((a, b) => b.score - a.score);
          // Save the updated scores back to localStorage
          localStorage.setItem("quizScores", JSON.stringify(savedScores));
          // Clear the initials input
          initialsInput.value = "";
          // Provide some feedback to the user (you can customize this)
          alert(`Score saved: ${initials} - ${score}`);
      } else {
          alert("Please enter your initials.");
      }
  }
  