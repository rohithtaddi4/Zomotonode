const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');


const appRouter = require('./Router/index.js');

//const port = 2020;
const port = process.env.PORT || 2020;
//const host = 'localhost';
const host = '0.0.0.0';

const app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use('/', appRouter);

mongoose.connect('mongodb+srv://Rohith123:UoaS9OxKhEM1JkS0@cluster0.bpo65.mongodb.net/DB1?retryWrites=true&w=majority').then(
    app.listen(port, host, () => {
        console.log(`Server is running on ${host}: ${port}`);
    })
).catch(err => console.log(err));


