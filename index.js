// environment variables
require('dotenv').config()
const express = require('express');
const app = express();

const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

// set up postgres pool
const {Pool} = require('pg');
const pool = new Pool({connectionString: process.env.pgURI});

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days, converted to milliseconds
    keys: [process.env.cookieKey] // encryption for cookie
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./services/googlePassport')(pool);

// create server routes here
require('./routes/auth')(app);
require('./routes/hello')(app);
require('./routes/documents')(app, pool);

// set up server
const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));

// set up sockets
const io = require('socket.io')(server);
require('./socketRooms/defineSockets')(io);


