var express = require("express");
var app = express();

var port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Helloooo!! via Heroku Local Web haha try Githubbbb");
});

app.listen(port, () => {
   console.log("application is listening on:", port);
});