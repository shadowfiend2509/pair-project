const Route = require('express').Router();
const UserController = require('../Controllers/userController');

Route.get('/register',UserController.getRegister);
Route.post('/register',UserController.postRegister);
Route.get('/login',UserController.getLogin);
Route.post('/login',UserController.postLogin);
Route.get('/logout',UserController.getLogout);

module.exports = Route;