const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const apartmentsRouter = require('./routes/apartments');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://roee030:$A207186449@cluster0-yf7pj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.use('/users', usersRouter);
app.use('/apartments', apartmentsRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});