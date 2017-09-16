
var goHome = function(app,path){
  app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname + "/../public/home.html"));
  });
}

var goSurvey = function(app,path){
  app.get("/survey", function(req, res){
  	res.sendFile(path.resolve(__dirname + "/../public/survey.html"));
  });
}

module.exports.goHome = goHome;

module.exports.goSurvey = goSurvey;