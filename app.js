var express = require('express'),
    app = express();

const port = 8088;
app.listen(port, () => {
    console.log("App started at port", port);
})