const User = require('../models').User;
const hash = require('../helper/password');


class UserController {
    static getRegister (req,res){
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
    }
    static postRegister(req,res){
            User.create({
                username : req.body.username,
                password : req.body.password,
                email : req.body.email,
                phoneNumber : Number(req.body.phoneNumber),
                saldo : 0,
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
    }
    static postLogin(req,res){
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
                // data.update({
                //     loginStatus : 1
                // },{where:{id:data.id}})
                // .then(()=>{
                // })
                res.redirect('/movies/category')
                // res.redirect('/movies')
            }else throw new Error()
        })
        .catch(err=>{
            res.redirect('/users/login')
        })
    }
    static getLogout(req,res){
        req.session.destroy(()=>{
            res.redirect('/')
        })
        // User.findOne({
        //     where : {
        //         loginStatus:1
        //     }
        // })
        // .then(user=>{
        //     return User.update({
        //         loginStatus : 0
        //     },{returning :true,where:{id:user.id}})
        // })
        // .then(scc=>{
        //     res.redirect('/')
        // })
        // .catch(err=>{
        //     res.send(err);
        // })
    }
}


module.exports = UserController;