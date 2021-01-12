var express = require("express");
var app = express();

app.get("/lessons", function(request, response) {
    response.send("Welcome to lessons page!");
});
app.get("/user", function(request, response) {
    response.send("Welcome to users page!");
});
app.use(function(request, response) {
    response.status(404).send("Page not found!");
});

//Listen on port 3000 for local host server
app.listen(3000);