const express = require('express');

const router = express.Router();

router.use(require('./UserRouter'));
router.use(require('./AuthRouter'));

module.exports = router;
