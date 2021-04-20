// TODO: review https://expressjs.com/
const uri = "mongodb+srv://emma:6tsy2c3UDm2DgZR@wbdvfurong.be9te.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// process.env.MONGODB_URI;
const express = require('express')
const app = express()
//
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))

const mongoose = require('mongoose');
mongoose.connect(
    // protocol :port
    // 'mongodb://localhost:27017/whiteboard-02',
    uri,
    {useNewUrlParser: true, useUnifiedTopology: true});

// configure CORS
app.use(function (req, res, next) {
    // comma separated
    // The problem is here?
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// const demos = require('./controllers/demo-controller');
// demos(app);

// const quizzesController = require("./controllers/quizzes-controller")
// quizzesController(app)

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require('./controllers/users-controller')(app)
require('./controllers/quiz-attempts-controller')(app)


app.get("/", (req, res) => {
    res.send("Welcome, please use /api/xxx to access data")
})

app.listen(process.env.PORT || 4000)
// app.listen(4000)