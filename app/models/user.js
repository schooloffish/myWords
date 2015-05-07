var mySql = require('mysql');
var bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize) {
    var User = sequelize.define('User',
        {
            username: {type: sequelize.constructor.STRING, field: 'Username'},
            password: {type: sequelize.constructor.STRING, field: 'Password'}
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
    return User;
};