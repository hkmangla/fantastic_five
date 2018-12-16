const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      path = require('path'),
      dbConfig = require('./config/db.config'),
      mongoose = require('mongoose'),
      session = require('express-session'),
      passport = require('passport');

var app = express();

const port = 8088;

app.use(passport.initialize());
app.use(passport.session());


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({secret: "userSecret"}));


mongoose.connect(dbConfig.url, {useNewUrlParser: true}).then(
    () => console.log("MongodB server is ready to use!"),
    (err) => console.log(err)
)

app.get('/', (req, res) => {
    res.send("Home Page");
});

// models & routes
require('./models/user.server.model');
require('./config/passport');

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log("App started at port", port);
})