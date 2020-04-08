var express = require('express');
var router = express.Router();

const Pharmacie = require('../models/Pharmacie');

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

/* liste pharmacie  */
router.get('/', function(req, res) {
    Pharmacie.find({}, (err, pharmacies) => {
        if (err) throw err;
        res.send(pharmacies);
    })
});

module.exports = router;