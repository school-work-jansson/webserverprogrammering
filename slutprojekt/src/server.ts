
import express from "express";

const server = express()


let info = {
  desc: "Det här projektet kommer att vara lite som trustpilot fast istället för att vara inriktad på företag i sig så kommer den att targeta recenssion av matprodukter från olika företag."
}

server.get('/', (req, res) => { 
    res.send(`<p>${info.desc}</p>`)
})


const port = 3000
server.listen(port, () => {
  console.log(`MetaGram http://localhost:${port}`)
})