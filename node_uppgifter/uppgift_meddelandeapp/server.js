const express = require("express");

const bodyParser = require('body-parser');
const app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static('./static'))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let messsages = []

io.on("connection", (socket) => {
    console.log("Ny connection på socketen")
})

app.get("/meddelanden", (req, res) => {
    res.send(messsages)
})

app.post("/send_message", (req, res) => {
    let message = {name: req.body.name, message: req.body.message}
    messsages.push(message)
    console.log(messsages)
    res.sendStatus(200)
    io.emit("message", message)
})

const PORT = 8080
http.listen(PORT, err => {
    if (err) throw err

    console.log(`Servern är igång på: http://localhost:${PORT}`)
});