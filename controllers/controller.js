var express = require('express');
var router = express();
var burgers = require('../models/burger');

router.get('/', function (req, res) {
    res.redirect('/index');
});

router.get('/index', function (req, res) {
    burgers.selectAll(function (data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

router.post('/burger/create', function (req, res) {
    burgers.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});

router.post('/burger/eat/:id', function (req, res) {
    burgers.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

module.exports = router;