/**
 * Created by liuxun on 5/25/2015.
 */
var express = require('express');

var router = express.Router();
var controller = require('./phrase.controller');

router.get('/:id', controller.getPhrase);

module.exports = router;