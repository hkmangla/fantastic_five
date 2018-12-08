var express = require('express'),
    app = express();

const port = 8088;

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(port, () => {
    console.log("App started at port", port);
})