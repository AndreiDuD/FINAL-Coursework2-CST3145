var express = require("express");
var api = express.Router();

api.use(function(req,res) {
    res.send("API ROUTER HERE")
});

module.exports = api;