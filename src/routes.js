const express = require('express');
const createUser = require('./controllers');

const router = express.Router();

router.post('/users', createUser);
router.get('/Users', )