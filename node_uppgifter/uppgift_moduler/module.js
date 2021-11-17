const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = (questions, done) => {
    const answers = [];

    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);

        (answers.length < questions.length) 
            ? rl.question(questions[answers.length], questionAnswered)
            : done(answers);
    }

    rl.question(firstQuestion, questionAnswered)
}


