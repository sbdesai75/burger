var express = require("express");

var router = express.Router();

// Import the model (diets.js) to use its database functions.
var burgers = require("../models/burgers_controller.js");

app.get("/items", function(req, res){
    db.Items.findAll({ 
        where: 
        { name: req.params.categories }
    })
    .then
    (function(dbDiets) {
    
    console.log(dbDiets)
  });
});