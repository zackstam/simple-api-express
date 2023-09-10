
const express = require('express');
const router = express.Router();
const user = require('./user');

router.use('/user', user);
router.use('/', (req, res, next) => {
    return res.status(200).json({ message: 'success', data: 'Hello world' })
});

module.exports = router;