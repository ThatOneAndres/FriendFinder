app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/survey", function(req, res){
	res.send("This is a survey page.");''
});