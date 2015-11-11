var express = require('express'),
    router = express.Router(),
    questionControllerModule = require('../controllers/questionController');

router.get('/', questionControllerModule.questions);
router.get('/:id');

module.exports = router;
