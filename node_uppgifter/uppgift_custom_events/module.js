const readline = require("readline");
const {EventEmitter} = require("events")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = (questions, done) => {
    const answers = []; // Tom array som håller svaren
    const [firstQuestion] = questions; // Hämtar första frågan från questions

    const emitter = new EventEmitter(); // Skapar ett emitter objekt

    const questionAnswered = answer => {
        answers.push(answer); // Appendar/pushar svaret till arrayen
        emitter.emit("answer", answer); // Emitter svaret i emit objektet

        if (answers.length < questions.length) 
            rl.question(questions[answers.length], questionAnswered);
        else {
            emitter.emit("complete", answers);
            done(answers);
        }
    }

    rl.question(firstQuestion, questionAnswered)
    return emitter // Returnerar emitter objektet
};


