var express = require('express');
var router = express.Router();

const Pharmacie = require('../models/Pharmacie');

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

router.get('/:pharmacie', function(req, res) {
    console.log(req.params)
   const pharmacie = req.params.pharmacie;
    Pharmacie.find({nom:pharmacie}, (err, pharmacies) => {
        if (err) throw err;
        res.send(pharmacies);
    })
});

/* liste pharmacie  */
router.get('/', function(req, res) {
    Pharmacie.find({}, (err, pharmacies) => {
        if (err) throw err;
        res.send(pharmacies);
    })
});

module.exports = router;