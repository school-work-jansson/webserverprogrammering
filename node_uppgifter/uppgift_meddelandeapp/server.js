const express = require("express");

const bodyParser = require('body-parser');
const app = express();


app.use(express.static('./static'))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let messsages = []

app.get("/meddelanden", (req, res) => {
    res.send(messsages)
})

app.post("/send_message", (req, res) => {
    messsages.push({name: req.body.name, message: req.body.message})
    console.log(messsages)
    res.sendStatus(200)
})

const PORT = 8080
app.listen(8080, err => {
    if (err) throw err

    console.log(`Servern är igång på: http://localhost:${PORT}`)
});