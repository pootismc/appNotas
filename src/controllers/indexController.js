const db = require('../database/models')

module.exports = {
    index: function (req, res) {
        db.Nota.findAll ()
        .then (function (notas){
            res.render('index', {notas:notas})
        })
    },
    create: function(req, res) {
        db.Nota.create({
            titulo: req.body.title,
            texto: req.body.text
        }) 
        .then(function(data){
            res.send(data)
        })
        .catch(function(e){
            res.send(e)
        })
    },
    
}