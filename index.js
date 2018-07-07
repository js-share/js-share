// environment variables
require('dotenv').config()
const express = require('express');

// require passport google oauth
require('./services/googlePassport');

// create server routes here
const app = express();
require('./routes/auth')(app);

// set up server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

