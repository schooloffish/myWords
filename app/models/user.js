var mySql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');

module.exports = function (sequelize) {
	var User = sequelize.define('User',
		{
			userId: { type: Sequelize.BIGINT, field: 'UserId', autoIncrement: true },
			username: { type: Sequelize.STRING, field: 'Username' },
			password: { type: Sequelize.STRING, field: 'Password' }
		}, { 
			classMethods: {}, 
			instanceMethods: {
				generateHash:function (password) {
					return bcrypt.hashSync(password,bcrypt.getSaltSync(8),null);
				},
				validPassword:function (password) {
					return bcrypt.compareSync(password,this.password);
				}
			}, freezeTableName: true });

	return User;
};