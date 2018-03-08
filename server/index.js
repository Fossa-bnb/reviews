const express = require('express');
const cors = require('cors');
const reviews = require('./reviews');
require('dotenv').config();

const port = Number(process.env.PORT);

const app = express();

app.use(cors());

app.use(express.static(__dirname.concat('/../client')));
app.use('/rooms', reviews);

app.listen(port, () => console.log(`Reviews server running on port ${port}`));
