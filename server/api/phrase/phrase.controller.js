
var Phrase = require('./phrase.model.js');

exports.getPhrase= function (req,res,next) {
    Phrase.find({where:{id:req.id}}).then(function (phrase) {
        res.json(phrase.dataValues);
    });
};

