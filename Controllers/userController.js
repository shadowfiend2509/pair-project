const User = require('../models').User;
const hash = require('../helper/password');


class UserController {
    static getRegister (req,res){
        User.findAll()
        .then(user=>{
            let pass=0;
            let employee = 0;
            if(req.session.employee) employee=1
            if(req.session.name) pass=1
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
                employee:employee
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
            const hashPassword = hash.hashPasword(req.body.password,data.salt)
            if(hashPassword == data.password){
                req.session.name = {
                    username : data.username
                }
                res.redirect('/movies')
            }else res.send('username/password salah')
        })
        .catch(err=>{
            res.render('userView/login',{
                Pass:pass,
                employee:employee
            })
        })
    }
    static getLogout(req,res){
        req.session.destroy(()=>{
            res.redirect('/')
        })
    }
}


module.exports = UserController;