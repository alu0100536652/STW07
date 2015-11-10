var express = require('express'),
    router = express.Router(),
    indexControllerModule = require('../controllers/indexController');

router.get('/', indexControllerModule.index);
router.get('/question', indexControllerModule.question);
router.post('/question', indexControllerModule.result);
router.post('/question', indexControllerModule.result);

module.exports = router;
