var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.render("Hello World!");
});
const publicIP = '34.203.34.86'
const privateIP = '172.31.25.246'
app.listen(3000, privateIP, () => {
	console.log(`Listening on ${publicIP}:3000`)
});