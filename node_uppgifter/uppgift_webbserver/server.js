const express = require("express");
const app = express();


app.use(express.static('./static'))


const PORT = 8080
app.listen(8080, err => {
    if (err) throw err

    console.log(`Servern är igång på: http://localhost:${PORT}`)
});
