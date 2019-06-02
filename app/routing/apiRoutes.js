var friends = require("../data/friends");

module.exports = function (app) {

  //Display all possible friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //Handles incoming survey results
  app.post("/api/friends", function (req, res) {
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };
    var scoreComparisionArray = [];
    for (var i = 0; i < friends.length; i++) {

      // Check each possible friend's scores 
      var currentComparison = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        console.log("New Friends Scores: " + newFriend.scores[j]);
        console.log("Friend Scores: " + friends[i].scores[j]);
        currentComparison += Math.abs(parseInt(newFriend.scores[j]) - friends[i].scores[j]);
      }
      scoreComparisionArray.push(currentComparison);
    }
    // Determine the best match 
    var bestMatchPosition = 0; 
    for (var i = 1; i < scoreComparisionArray.length; i++) {
      if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]) {
        bestMatchPosition = i;
      }

    }
    var bestFriendMatch = friends[bestMatchPosition];
    console.log(bestFriendMatch);


    // Reply with a JSON object of the best match
    res.json(bestFriendMatch);



    // Push the new friend to the friends data array for storage
    friends.push(newFriend);

  });

};//End Module.Exports