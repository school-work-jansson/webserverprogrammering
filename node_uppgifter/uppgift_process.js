const questions = [
    "Vad är ditt startkapital?",
    "Hur mycket tror du att du kommer att investera varje månad?",
    "Förväntad utveckling per månad? (%)"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n${questions[i]}`)
    process.stdout.write(">")
}

const awnsers = [];


ask();



process.stdin.on('data', data => {
    awnsers.push(parseInt(data));

    (awnsers.length < questions.length) ? ask(awnsers.length) : process.exit();
});


process.on('exit', () => {
    const[start, invest, raise] = awnsers;
    let total = start + invest * (Math.pow(( 1+ (raise / 100)), 12*10))
    
    console.log(`Tack för dina svar.. Ditt förväntade utveckling för ${new Date().getFullYear() + 10} är: ${total}`)
});