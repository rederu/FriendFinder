//Dependencies
var express = require("express");
var path = require("path");

//EXpress Configuration
var app = express();

//Set initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function(){
    console.log ("Listening on Port:  " + PORT);
});