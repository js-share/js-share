// environment variables
require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
// connect to mongodb
mongoose.connect(process.env.mongodbUrl);

const app = express();
const port = process.env.PORT || 5000;
// create server routes here
router(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));
