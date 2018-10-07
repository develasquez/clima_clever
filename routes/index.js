var express = require('express');
var router = express.Router();
var servicios = require('../models/_servicios');
var galeria = require('../models/_galeria');
/* GET home page. */
router.get('/', function(req, res, next) {
    servicios.list([], 0, function(r, f) {
        galeria.list([], 0, function(rg, fg) {

            try {
                r = _idToString(r);
                rg = _idToString(rg);
                if (req.params.format != "json") {
                    res.render('index', {
                        title: 'Clima Clever -  Aire acondicionado - Gasfitería - Calefacción Centralizada',
                        servicios: r,
                        galeria: rg
                    });
                } else {
                    res.send({
                        data: r
                    })
                }
            } catch (ex) {}
        });
    })

});

module.exports = router;