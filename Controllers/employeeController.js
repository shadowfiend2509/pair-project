const Employee = require('../models').Employee;
const hash = require('../helper/password');
const Movie = require('../models').Movie;

class EmployeeController {
    static home(req,res){
        res.redirect('/')
    }
    static getRegister(req,res){
        let pass= 0;
        let employee = 0;
        if(req.session.employee) employee=1
        if(req.session.name) pass=1
        res.render('employeeView/register',{
            Pass:pass,
            employee:employee
        })
    }
    static postRegister(req,res){
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
        res.redirect('/movies')
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static getLogin(req,res){
        let pass =0;
        let employee = 0;
        if(req.session.employee) employee=1
        if(req.session.name) pass=1;
        res.render('employeeView/formLogin',{
            Pass:pass,
            employee:employee
        })
    }
    static postLogin(req,res){
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
    }
    static getAddMovie(req,res){
        let pass=0;
        let employee = 0;
        if(req.session.employee) employee=1;
        if(req.session.name) pass=1
        res.render('employeeView/addMovie',{
            Pass:pass,
            employee:employee
        })
    }
    static postAddMovie(req,res){
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
    }
    static getListMovie(req,res){
        let pass=0;
        let employee = 0;
        if(req.session.employee) employee=1
        if(req.session.name) pass=1
        Movie.findAll()
        .then(movie=>{
            res.render('employeeView/listMovie',{
                Data:movie,
                Pass:pass,
                employee:employee
            })
        })
    }
    static getLogout(req,res){
        req.session.destroy(()=>{
            res.redirect('/employees/login')
        })
    }
    static getEditMovie(req,res){
        let pass=0;
        let employee=0;
        if(req.session.employee) employee = 1;
        if(req.session.name) pass =1;
        Movie.findByPk(req.params.id)
        .then(movie=>{
            res.render('employeeView/editMovie',{
                Pass:pass,
                employee:employee,
                Data : movie
            })
        })
    }
    static postEditMovie(req,res){
        Movie.update({
            name : req.body.movieName,
            seats : Number(req.body.seats),
            description : req.body.description,
            updateAt : new Date()
        },{where:{id : req.body.id}})
        .then(scc=>{
            return Movie.findByPk(req.body.id)
        })
        .then(movie=>{
            res.redirect('/employees/movies/listMovies')
        })
    }
    static getDeleteMovie(req,res){
        Movie.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(success=>{
            res.redirect('/movies')
        })
    }
}

module.exports = EmployeeController;