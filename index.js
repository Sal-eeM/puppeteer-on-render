const express = require('express');
const {scrapeLogic} = require('./scrapeLogic');

const app = express();

const PORT = process.env.PORT || 4000;



app.get('/api/quotes', (req, res) => {
    scrapeLogic(res);
});


app.get('/', (req, res) => {
    res.send("Puppeteer server is up and running");
})


app.listen(4000, () => {

    console.log(`Listening on port ${PORT}`)

})