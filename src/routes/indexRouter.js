const express = require ('express');
const indexController = require('../controllers/indexController');
const router = express.Router();
const intexController = require ('../controllers/indexController');

router.get ('/', indexController.index);
router.post ('/', indexController.create);



module.exports = router;