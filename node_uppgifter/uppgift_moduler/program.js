const collectAnswers = require("./module")

const questions = [
    "Vad är ditt startkapital?",
    "Hur mycket tror du att du kommer att investera varje månad?",
    "Förväntad utveckling per månad? (%)"
];

collectAnswers(questions, answers => {
    const[start, invest, raise] = answers;
    let total = start + invest * (Math.pow(( 1+ (raise / 100)), 12*10))

    console.log("Tack för dina svar")
    console.log(`Ditt förväntade utveckling för ${new Date().getFullYear() + 10} är: ${total}`)

    process.exit()
})