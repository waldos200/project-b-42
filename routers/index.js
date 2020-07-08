const express = require('express');

const router = express.Router();
const { verifyToken } = require('../middlewares');

// Public
router.use(require('./UserRouter'));
router.use(require('./AuthRouter'));

// Private
router.use(verifyToken);
router.use(require('./PostRouter'));

module.exports = router;
