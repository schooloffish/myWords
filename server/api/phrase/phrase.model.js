var mySql = require('mysql');
var bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize) {
    var Phrase = sequelize.define('Phrase',
        {
            phrase: {type: sequelize.constructor.STRING, field: 'Phrase'},
            definition: {type: sequelize.constructor.STRING, field: 'Definition'},
            sentence: {type: sequelize.constructor.STRING, field: 'Sentence'},
            note: {type: sequelize.constructor.STRING, field: 'Note'}
        }, {
            timestamps: false,
            classMethods: {},
            instanceMethods: {}, freezeTableName: true
        });

    return Phrase;
};