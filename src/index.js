const express = require('express');

const app = express();

app.get("/", (req, res) => {
    return response.send("testando")
})

// local da porta 3331
//app.listen(3333);
