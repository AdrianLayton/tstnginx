var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.render("Hello World!");
});
const privateIP = '172.31.25.246'
app.listen(3000, privateIP, () = > {
	console.log(`Listening on ${privateIP}:3000`)
});