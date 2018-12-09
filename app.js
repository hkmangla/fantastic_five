const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      path = require('path'),
      eventsRouter = require('./routes/events.server.routes'),
      dbConfig = require('./config/db.config'),
      mongoose = require('mongoose'),
      session = require('express-session'),
      passport = require('passport'),
      LocalStrategy = require('passport-local').LocalStrategy;

var app = express();

const port = 8088;
mongoose.connect(dbConfig.url, {useNewUrlParser: true}).then(
    () => console.log("MongodB server is ready to use!"),
    (err) => console.log(err)
)

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({username: username}, (err, user) => {
            if (err) done(err);
            if (!user) return done(null, false, {message: "Incorrect username"});
            if (!user.validPassword(password)) {
                return done(null, false, {message: "Incorrect password"});
            }

            return done(null, user);
        });
    }
));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({secret: "userSecret"}));
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/events', eventsRouter);
app.get('/', (req, res) => {
    res.send("Home Page");
});


app.listen(port, () => {
    console.log("App started at port", port);
})