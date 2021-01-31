require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const songsRouter = require('./routes/songs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/songs', songsRouter);

// db connection
mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to DB'))
    .catch((err) => console.log(err));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));