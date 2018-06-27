var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
   res.render("index");
});
const publicIP = '34.203.34.86'
const privateIP = '172.31.25.246'
app.listen(3001, privateIP, () => {
	console.log(`Listening on ${publicIP}:3001`)
});