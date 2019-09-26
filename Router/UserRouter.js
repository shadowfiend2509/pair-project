const Route = require('express').Router();
// const User = require('../models').User;
// const hash = require('../helper/password');
const UserController = require('../Controllers/userController');

// console.log(middleware())
Route.get('/register',UserController.getRegister);
Route.post('/register',UserController.postRegister);
Route.get('/login',UserController.getLogin);
Route.post('/login',UserController.postLogin);
Route.get('/logout',UserController.getLogout);

module.exports = Route;