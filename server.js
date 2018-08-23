const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); //allows other servers to talk to our server
const session = require('express-session');
const port = process.env.PORT || 7000;

require('./db/db');
app.use(session({
  secret: 'i can keep secrets',
  resave: false,
  saveUninitialized: false
}));

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'https://colorado-on-fire.herokuapp.com', //this is Kate's server
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// Require the controller after the middleware
const authController = require('./controllers/authController');
const postsController  = require('./controllers/postsController');

app.use('/auth', authController);
app.use('/posts', postsController);

app.listen(7000, () => {
    console.log(`Server is running on port: ${port}`);
});