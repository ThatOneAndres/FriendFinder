// JSON all friend objects
var getFriends = function(app){app.get("/api/friends", function(req, res) {
  var chosen = req.params.characters;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
    return res.json(false);
  }
  return res.json(characters);
});
}

// Create New Characters - takes in JSON input
var enterPerson = function(app){
	app.post("/api/friends", function(req, res) {
	// req.body hosts is equal to the JSON post sent from the user
	var newcharacter = req.body;

	console.log(newcharacter);

	// We then add the json the user sent to the character array
	characters.push(newcharacter);

	// We then display the JSON to the users
	res.json(newcharacter);
	});
}