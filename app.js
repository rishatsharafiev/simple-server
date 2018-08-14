var 
	express = require('express'),
	bodyParser = require('body-parser'),
	fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname)); 

app.all('*', function (req, res) {
	var message = `${req.originalUrl}: ${JSON.stringify(req.body)}`;
	console.log(message);
	res.send('OK');    
});

app.listen(3000, function () {
 	console.log('Example app listening on port 3000!');
});