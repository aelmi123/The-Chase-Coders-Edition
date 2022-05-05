const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users');

router.get('/leaderboard', usersControllers.getAllUsers);
router.post('/leaderboard', usersControllers.createUsers);

module.exports = router;
