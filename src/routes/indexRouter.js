const express = require ('express');
const indexController = require('../controllers/indexController');
const router = express.Router();
const intexController = require ('../controllers/indexController');

router.get ('/', indexController.index);
router.post ('/', indexController.create);
router.get('/detail/:id', indexController.detail);
router.put('/detail/:id', indexController.update);
router.delete('/delete/:id', indexController.delete);



module.exports = router;