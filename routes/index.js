var express = require('express'),
    router = express.Router(),
    indexControllerModule = require('../controllers/indexController');

router.get('/', indexControllerModule.index);
router.get('/question', indexControllerModule.question);
router.post('/question', indexControllerModule.check);

module.exports = router;
