const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/card-controller');
const { getAllUsers, getUserById } = userControllers;

// index route
router.get('/', function (req, res) {
    res.send({
        message: 'index route'
    });
});

// get all users
router.get('/allusers', getAllUsers);



module.exports = router;