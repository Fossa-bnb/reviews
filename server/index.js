const express = require('express');
const reviews = require('./reviews');

const app = express();

app.use(express.static(__dirname.concat('/../client/dist')));
app.use('/', reviews);

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Reviews server running on port 3000'));
