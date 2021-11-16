
const express = require('express')
const server = express()
const process = require('process')

server.get('/', (req, res) => { 
    res.send("Goday'")
})


const port = 3000
server.listen(port, () => {
  console.log(`MetaGram http://localhost:${port}`)
})