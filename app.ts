
const morgan = require('morgan');

const express = require('express');
const app = express()
const cors = require('cors');
const route = require('./routes/index')

const port = 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true }));
app.use('/softoo/api/v1', route);


app.listen(port, () => {
    console.log(`Succesful Server Start onn ${port}`)
})