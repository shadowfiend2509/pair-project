const Route = require('express').Router();
const Employee = require('../models').Employee;
const hash = require('../helper/password');
const Movie = require('../models').Movie;

const EmployeeController = require('../Controllers/employeeController');

const middleware = (req,res,next) => {
    if(req.session.employee){
        next()
    }else{
        res.redirect('/employees/login');
    }
}

Route.get('/',EmployeeController.home);
Route.get('/register',middleware,EmployeeController.getRegister);
Route.post('/register',EmployeeController.postRegister);
Route.get('/login',EmployeeController.getLogin);
Route.post('/login',EmployeeController.postLogin);
Route.get('/addMovie',EmployeeController.getAddMovie);
Route.post('/addMovie',EmployeeController.postAddMovie);
Route.get('/movies/listMovies',middleware,EmployeeController.getListMovie);
Route.get('/logout',EmployeeController.getLogout);
Route.get('/movies/edit/:id',middleware,EmployeeController.getEditMovie);
Route.post('/movies/edit/:id',EmployeeController.postEditMovie);
Route.get('/movies/delete/:id',middleware,EmployeeController.getDeleteMovie);
module.exports=Route;