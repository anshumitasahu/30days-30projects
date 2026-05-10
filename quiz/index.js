const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: "false" },
            { text: "Mars", correct: "true" },
            { text: "Jupiter", correct: "false" },
            { text: "Venus", correct: "false" }
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: "London", correct: "false" },
            { text: "Rome", correct: "false" },
            { text: "Paris", correct: "true" },
            { text: "Berlin", correct: "false" }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: "false" },
            { text: "Australia", correct: "true" },
            { text: "Europe", correct: "false" },
            { text: "Africa", correct: "false" }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: "false" },
            { text: "Iron", correct: "false" },
            { text: "Diamond", correct: "true" },
            { text: "Stone", correct: "false" }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
        answers: [
            { text: "Oxygen", correct: "false" },
            { text: "Carbon Dioxide", correct: "true" },
            { text: "Nitrogen", correct: "false" },
            { text: "Hydrogen", correct: "false" }
        ]
    },
    {
        question: "How many bones are there in an adult human body?",
        answers: [
            { text: "106", correct: "false" },
            { text: "206", correct: "true" },
            { text: "306", correct: "false" },
            { text: "406", correct: "false" }
        ]
    },
    {
        question: "Which ocean is the largest on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: "false" },
            { text: "Indian Ocean", correct: "false" },
            { text: "Arctic Ocean", correct: "false" },
            { text: "Pacific Ocean", correct: "true" }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: "false" },
            { text: "Pablo Picasso", correct: "false" },
            { text: "Leonardo da Vinci", correct: "true" },
            { text: "Claude Monet", correct: "false" }
        ]
    }
];

const questionElem = document.getElementById("question");
const answerBtn = document.getElementById("answer-button");
const nxtBtn = document.getElementById("nxt-btn");

console.log(answerBtn.firstChild)


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nxtBtn.innerHTML = "Next";
    showQuestion();
};

function resetState() {
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
};



function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElem.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (answer.correct === "true") {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
   Array.from(answerBtn.children).forEach(btn => {
    if(btn.dataset.correct === "true") {
        btn.classList.add("correct");
    }
    btn.disabled = true;
});
}

function showScore() {
    resetState();
    questionElem.innerHTML = `You scored ${score} out of ${questions.length}`;
    nxtBtn.innerHTML = "Play Again"
}

function handleNxtBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nxtBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNxtBtn();
    }
    else {
        startQuiz()
    }
})
startQuiz()

