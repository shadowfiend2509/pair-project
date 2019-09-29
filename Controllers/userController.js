const User = require('../models').User;
const hash = require('../helper/password');
const Movie = require('../models').Movie


class UserController {
    static getRegister (req,res){
        User.findAll()
        .then(user=>{
            let pass=0;
            let employee = 0;
            if(req.session.employee) employee=1
            if(req.session.name) pass=1
            req.session.employee = {
                username : req.body.username
            }
            res.render('userView/register',{
                Pass:pass,
                employee:employee
            })
        })
    }
    static postRegister(req,res){
            User.create({
                username : req.body.username,
                password : req.body.password,
                email : req.body.email,
                phoneNumber : Number(req.body.phoneNumber),
                salt : req.body.salt,
                loginStatus : 1,
                createdAt : new Date(),
                updatedAt : new Date()
            })
            .then((success)=>{
                req.session.employee = {
                    username : req.body.username
                }
                res.redirect('/movies')
            })
    }
    static getLogin (req,res){
        let pass=0;
        let employee = 0;
        if(req.session.employee) pass=1
        User.findAll()
        .then(user=>{
            if(req.session.name) pass=1;
            res.render('userView/login',{
                Pass:pass,
                employee:employee,
                err:{
                    msg :null
                }
            })
        })
        .catch(err=>{
            res.send(err);
        })
    }
    static postLogin(req,res){
        let pass = 0;
        let employee = 0;
        if(req.session.employee) pass=1
        if(req.body.session) pass=1
        User.findOne({
            where :{
                username :req.body.username
            }
        }).then(data=>{
            if(req.body.username.length == 0 || req.body.password.length ==0 ){
                res.render('userView/login',{
                    Pass:pass,
                    employee:employee,
                    err : {
                        msg : 'username/password tidak boleh kosong'
                    }
                })
            }else {
                const hashPassword = hash.hashPasword(req.body.password,data.salt)
                if(hashPassword == data.password){
                    req.session.name = {
                        username : data.username
                    }
                    res.redirect('/movies')
                }else throw new Error()
            }
        })
        .catch(err=>{
            res.render('userView/login',{
                Pass:pass,
                employee:employee,
                err : {
                    msg : 'username/password salah'
                }
            })
        })
    }
    static getLogout(req,res){
        res.redirect('/movies')
        req.session.destroy(()=>{
        })
    }
}


module.exports = UserController;