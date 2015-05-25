var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:123456@localhost:3306/MyWords');
var Phrase = require('./phrase.model.js')(sequelize);

exports.getPhrase= function (req,res,next) {
    Phrase.find({where:{id:req.params.id}}).then(function (phrase) {
        res.json(phrase.dataValues);
    });
};

