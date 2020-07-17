import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Greetings from Hammad!");
});

app.listen(4545, err => {
    if (err) console.error(err);
});