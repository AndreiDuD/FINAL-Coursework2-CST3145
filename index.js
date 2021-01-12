var express = require("express");
var app = express();
var path = require("path");

app.get("/lessons", function(request, response) {
    response.send("lessons page");
});
app.get("/user", function(request, response) {
    response.send("Welcome to users page!");
});

var apiRouter = require("./routes/api_routes");
app.use("./api", apiRouter);

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(request, response) {
    response.status(404).send("Page not found!");
});

//Listen on port 3000 for local host server
app.listen(3000);