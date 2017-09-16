var friends = require("../data/friends.js");

// JSON all friend objects
var getFriends = function(app){
    app.get("/api/friends", function(req, res) {
      res.send(friends);
  });
}

// Create New Characters - takes in JSON input
var enterPerson = function(app){
	app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var person = req.body;

    console.log(person);
    var bestMatch;
    var bestScore;
    for(let i = 0; i  < friends.length; i ++){
      var difference = getScore(person,friends[i]);
      if (i === 0){
        bestMatch = friends[i];
        bestScore = difference;
      }else if (difference < bestScore){
        bestMatch = friends[i];
        bestScore = difference;
      }
    }
  
    // We then display the JSON to the users
    res.json(bestMatch);
    });
}

function getScore(person1, person2){
  var difference = 0;
  for (let i = 0; i < person1.scores.length; i++){
    difference += Math.abs(person1.scores[i] - person2.scores[i]);
  }
  return difference;
}

module.exports.getFriends = getFriends;

module.exports.enterPerson = enterPerson;