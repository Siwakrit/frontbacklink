const express = require('express');
const Quotes = require('inspirational-quotes');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get('/', (req, res) => {
    res.send(Quotes.getQuote());
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});