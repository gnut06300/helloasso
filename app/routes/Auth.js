const express = require('express');
const router = express.Router();
const Auth = require('../Middlewares/Auth');

router.post('/login', Auth.getToken);
router.get('/dashboard', Auth.isAuth, (req, res) => {
    res.send('Welcome to the dashboard');
}
);