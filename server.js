var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

var Sequelize=require('sequelize');

var sequelize=new Sequelize('mysql://root:123456@localhost:3306/MyWords');
//var Test=sequelize.define('test',{
//	firstName:{type:Sequelize.STRING,
//		field:'first_name'
//	},
//	lastName:{
//		type:Sequelize.STRING,
//		field:'last_name'
//	}
//},{freezeTableName:true});
//
//Test.findAll({where:{lastName:'liu'}}).then(function (obj,o2,o3) {
//	console.log('lastName: '+obj.dataValues.lastName);	
//});

//Test.sync({force:true}).then(function () {
//	return Test.create([{
//		firstName:'feifei',
//		lastName:'Liu'
//	},{
//		firstName:'xun',
//		lastName:'Liu'
//	}]);
//});



// configuration ===============================================================
//mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs');

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app,passport);

app.listen(port);
console.log('The magic happens on port:' + port);