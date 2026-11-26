const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0;
let currentQuestion = 1;
const totalQuestions = 5;
const operators = ['+', '-', '*'];

console.log("=== Math Quiz Game ===");
console.log(`Aapko ${totalQuestions} sawaalon ke sahi jawaab dene hain.\n`);

function askQuestion() {
    if (currentQuestion > totalQuestions) {
        console.log(`Game Over! Aapka final score: ${score}/${totalQuestions}`);
        rl.close();
        return;
    }

    const num1 = Math.floor(Math.random() * 15) + 1;
    const num2 = Math.floor(Math.random() * 15) + 1;
    const op = operators[Math.floor(Math.random() * operators.length)];

    let correctAnswer;
    if (op === '+') correctAnswer = num1 + num2;
    else if (op === '-') correctAnswer = num1 - num2;
    else correctAnswer = num1 * num2;

    rl.question(`Sawaal ${currentQuestion}: ${num1} ${op} ${num2} = `, (input) => {
        const userAnswer = parseInt(input);
        if (userAnswer === correctAnswer) {
            console.log("Sahi jawaab!\n");
            score++;
        } else {
            console.log(`Galat! Sahi jawaab ${correctAnswer} hai.\n`);
        }
        currentQuestion++;
        askQuestion();
    });
}

askQuestion();