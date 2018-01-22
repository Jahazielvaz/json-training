var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

// var person = {
//     name: "John",
//     job: "Ninja",
//     hobby: "Jump on buildings"
// };

var war = {"warriors":[
  {
  "Name" : "Tifa",
  "Type" : "Fists"
  },
  {
  "Name" : "Cloud",
  "Type" : "Sword"
  },
  {
  "Name" : "Saphiroth",
  "Type" : "Chaos"
  }
]}



var infoJas = require('./info.json');

var people = {"peeps":[{name: "Vincent", job: "Vampire", hobby: "Sucking blood"},{name: "Tifa", job: "Fighter", hobby: "Fighting"}]}

app.get('/', function(req, res){
  console.log(`Request has been made: ${req.url}`);
  res.send(war);
})

app.listen(4000, function(){
  console.log('Now listening to port 4000');
});
