const express = require('express');
const cors = require('cors');
const reviews = require('./reviews');

const app = express();

app.use(cors());

app.use(express.static(__dirname.concat('/../client')));
app.use('/rooms', reviews);

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3001, () => console.log('Reviews server running on port 3001'));
