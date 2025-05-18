let questions = [
    "Can you tell me a little about yourself?",
    "Why do you want to work for this company?",
    "What are your strengths and weaknesses?",
    "Where do you see yourself in five years?",
    "Why are you leaving your current job?"
];

let currentQuestion = 0;
let score = 0;

document.getElementById("submitAnswer").addEventListener("click", checkAnswer);

function checkAnswer() {
    let answer = document.getElementById("answer").value.trim();
    if (answer.length > 50) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById("question").textContent = questions[currentQuestion];
        document.getElementById("answer").value = "";
    } else {
        let modalEl = document.getElementById('interviewModal');
        let modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();

        document.getElementById("results").style.display = "block";
        document.getElementById("score").textContent = `You scored ${score} out of ${questions.length}`;
        document.getElementById("feedback").textContent =
            score >= questions.length / 2
                ? "Great job! You answered most of the questions well."
                : "Keep practicing! You can improve your answers.";
    }
}

document.getElementById("interviewModal").addEventListener("shown.bs.modal", function () {
    document.getElementById("question").textContent = questions[currentQuestion];
});
