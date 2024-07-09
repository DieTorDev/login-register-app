const express = require('express');
const usersController = require('../controllers/users.controller');
const usersRoutes = express.Router();

usersRoutes.get('/', usersController.getUsers);
usersRoutes.delete('/:id', usersController.deleteUser);

module.exports = usersRoutes;
