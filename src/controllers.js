'use strict';

const User = require("./models");


async function createUser(req, res, next) {
try {
    const {name, email, age , isActive} = req.body
    const user = new User();
    res.status(201).send('User Created');
}
 catch (error) {
    next(error);
}
}

async function getUser(req, res, next) {
    try {
        const user = User.find
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}
module.exports = {createUser, getUser};