const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      path = require('path'),
      eventsRouter = require('./routes/events.server.routes');

var app = express();

const port = 8088;

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/events', eventsRouter);
app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(port, () => {
    console.log("App started at port", port);
})