var friends = require("../data/friends");

module.exports = function (app) {

    //Display all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //Handles incoming survey results
    app.post("/api/friends", function (req, res) {
        
        });

};//End Module.Exports