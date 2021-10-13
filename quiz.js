const quizForm = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit-button");
const message = document.querySelector("#output-msg");


const rightAnswers = ["90°", "right angled", "A geometric figure", "3", "Equilateral", "2", "Scalene"];


function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === rightAnswers[index]) {
            score = score + 1;
          
        }
        index = index + 1;
    }
    message.style.color = 'white';
    message.innerText = `Your score is ${score}`;
    if (score === 0 ) {
        message.innerText = `All wrong answers`;

    }
}

submit.addEventListener("click", calculateScore);