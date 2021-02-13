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
            res.redirect('/')
        })
        .catch(function(e){
            res.send(e)
        })
    },
    detail: function (req, res) {
        db.Nota.findByPk (req.params.id)
        .then (function(detail){
            res.render('detail', {detail:detail})
        })
        .catch(function(e) {
            res.send (e)
        })
    },
    update: function (req, res) {
        // let detail = db.Nota.findByPk (req.params.id)
        // .then (function(detail){
        // })
        // .catch(function(e) {
        //     res.send (e)
        // })

        db.Nota.update ({
            titulo: req.body.title,
            texto: req.body.text
        },{
            where: {
                id : req.params.id
            }
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(e){
            res.send(e)
        })
    },
    delete: function (req, res) {
        db.Nota.destroy ({
            where: {
                id: req.params.id
            }
        })
        .then(function(data){
            res.redirect('/')
        })
        .catch(function(e){
            res.send(e)
        })
    }
}