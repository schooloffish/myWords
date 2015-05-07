var mySql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:123456@localhost:3306/MyWords');
var User = sequelize.define('User',
    {
        username: {type: Sequelize.STRING, field: 'Username'},
        password: {type: Sequelize.STRING, field: 'Password'}
    }, {
        timestamps: false,
        classMethods: {
            generateHash: function (password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            }
        },
        instanceMethods: {
            validPassword: function (password) {
                return bcrypt.compareSync(password, this.password);
            }
        }, freezeTableName: true
    });

module.exports = User;