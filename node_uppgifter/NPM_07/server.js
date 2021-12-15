const express = require('express');
const app = express();
const port = 8080;


app.get('/:name', (req, res) => {
    res.send(`<p>hello world ${req.params.name}<p>`);
})

app.get('/', (req, res) => {
    res.send(`<p>hello world<p> <br> <p>Testa skriv något efter localhost:8080/ i urln</p>`);
})

app.listen(port, () => {
    console.log(`listening on port ${port} on http://localhost:${port}`)
})