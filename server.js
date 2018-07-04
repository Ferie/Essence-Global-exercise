const express = require('express');
const app = express();
// const data = require('./data/data.json');

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    // res.send(data);
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3000, () => {
    console.log('\x1b[36m%s\x1b[0m', 'Essence FE test server running on', 'http://localhost:3000');
});