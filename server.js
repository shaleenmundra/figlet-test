/*var express = require('express');
var express = require('helmet');
var app = express();*/
var port = process.env.PORT || 8080;

var figlet = require('figlet');
/*var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

app.use(helmet({
	frameguard: {
		action: 'deny'
	}
}))

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.set('view engine', 'ejs');*/

figlet('hello world!', function(err,data){
	if(err){
		console.log('something went wrong..');
		console.dir(err);
		return;
	}
	console.log(data)
});
// app.use('/', function(req, res){
// 	res.send('Our First Express program!');
// 	console.log(req.cookies);
// 	console.log('================');
// 	console.log(req.session);
// });

//require('./app/routes.js')(app);

//app.listen(port);
console.log('Server running on port: ' + port);