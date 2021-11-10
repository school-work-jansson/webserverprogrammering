
const express = require('express')
const server = express()
const process = require('process')

server.get('/', (req, res) => { 
    res.send("Goday'")
    console.log(process.env.PWD)
})


const port = 3000
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})