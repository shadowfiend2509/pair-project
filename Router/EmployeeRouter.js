const Route = require('express').Router();
const Employee = require('../models').Employee;
const hash = require('../helper/password');
const Movie = require('../models').Movie;

Route.get('/',(req,res)=>{
    res.redirect('/')
})
Route.get('/register',(req,res) => {
    let pass= 0;
    let employee = 0;
    if(req.session.employee) employee=1
    if(req.session.name) pass=1
    res.render('employeeView/register',{
        Pass:pass
    })
})
Route.post('/register',(req,res)=>{
    let pass =0;
    let employee = 0;
    if(req.session.employee) employee=1
    if(req.session.name) pass=1
        Employee.create({
            userName : req.body.username,
            pasword : req.body.password,
            role : req.body.role,
            salt : '',
            loginStatus : 0,
            createdAt : new Date(),
            updatedAt : new Date()
        })
        .then(ssc=>{
            // res.send(ssc)
            res.redirect('/')
        })
        .catch(err=>{
            res.send(err)
        })
})

Route.get('/login',(req,res)=>{
    let pass =0;
    let employee = 0;
    if(req.session.employee) employee=1
    if(req.session.name) pass=1;
    res.render('employeeView/formLogin',{
        Pass:pass,
        employee:employee
    })
})
Route.post('/login',(req,res)=>{
    let pass=0;
    let employee = 0;
    if(req.session.employee) employee=1
    if(req.session.name) pass=1;
    Employee.findOne({
        where :{
            userName : req.body.username
        }
    })
    .then(employee=>{
        let hashpassword = hash.hashPasword(req.body.password,employee.salt)
        if(employee.pasword == hashpassword){
            req.session.employee = {
                username : employee.username
            }
            res.redirect('/movies')
        }else res.send('username/password salah')
    })
    .catch(err=>{
        res.render('employeeView/formLogin',{
            Pass:pass,
            employee:employee
        })
    })
})
Route.get('/addMovie',(req,res)=>{
    let pass=0;
    let employee = 0;
    if(req.session.employee) employee=1;
    if(req.session.name) pass=1
    res.render('employeeView/addMovie',{
        Pass:pass,
        employee:employee
    })
})
Route.post('/addMovie',(req,res)=>{
    let pass=0;
    let employee = 0;
    if(req.session.employee) empoloyee=1
    if(req.session.name) pass=1
    Movie.create({
        name:req.body.movieName,
        seats:req.body.seats,
        description:req.body.description,
        createdAt : new Date(),
        updatedAt : new Date()
    }).then(scc=>{
        res.redirect('/employees/movies/listMovies')
    }).catch(err=>{
        res.send(err);
    })
})
Route.get('/movies/listMovies',(req,res)=>{
    let pass=0;
    let employee = 0;
    if(req.session.employee) empoloyee=1
    if(req.session.name) pass=1
    Movie.findAll()
    .then(movie=>{
        res.render('employeeView/listMovie',{
            Data:movie,
            Pass:pass,
            employee:employee
        })
    })
})

module.exports=Route;