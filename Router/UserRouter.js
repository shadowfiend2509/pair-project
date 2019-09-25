const Route = require('express').Router();
const User = require('../models').User;
const hash = require('../helper/password');

Route.get('/register',(req,res)=>{
    User.findAll()
    .then(user=>{
        let pass=0;
        for(let i=0;i<user.length;i++){
            if(user[i].loginStatus==1) pass=1
        }
        res.render('userView/register',{
            Pass:pass
        })
    })
})
Route.post('/register',(req,res)=>{
    // User.findAll()
    // .then(user=>{
    //     let pass=0;
    //     for(let i=0;i<user.length; i++){
    //         if(user[i].loginStatus==1) pass=1;
    //     }
        User.create({
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            phoneNumber : Number(req.body.phoneNumber),
            saldo : 0,
            salt : req.body.salt,
            loginStatus : 0,
            createdAt : new Date(),
            updatedAt : new Date()
        })
        .then((success)=>{
                res.redirect('/movies',{
                    Pass:pass
                })
        })
    //     .catch(err=>{
    //         res.send(err);
    //     })
    // })
    .catch(err=>{
        res.send(err)
    })
})

Route.get('/login',(req,res)=>{
    User.findAll()
    .then(user=>{
        let pass=0;
        for(let i=0;i<user.lenght; i++ ){
            if(user[i].loginStatus == 1) pass=1;
        }
        res.render('userView/login',{
            Pass:pass
        })
    })
    .catch(err=>{
        res.send(err)
    })
})
Route.post('/login',(req,res)=>{
    User.findOne({
        where :{
            username :req.body.username
        }
    }).then(data=>{
        const hashPassword = hash.hashPasword(req.body.password,data.salt)
        if(hashPassword == data.password){
            // res.send(data)
            return data.update({
                loginStatus : 1
            },{where:{id:data.id}})
        }else throw new Error()
    })
    .then(()=>{
        res.redirect('/movies')
    })
    .catch(err=>{
        res.redirect('/users/login')
    })
})
Route.get('/logout',(req,res)=>{
    User.findOne({
        where : {
            loginStatus:1
        }
    })
    .then(user=>{
        User.update({
            loginStatus : 0
        },{where:{id:user.id}})
        .then(scc=>{
            res.redirect('/')
        })
        .catch(err=>{
            res.send(err);
        })
    })
    .catch(err=>{
        res.send(err)
    })
})
module.exports = Route;