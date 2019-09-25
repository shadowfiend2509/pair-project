const Route = require('express').Router();
const Movie = require('../models').Movie;
const Category = require('../models').Category;
const User = require('../models').User;
Route.get('/',(req,res)=>{
    User.findAll()
    .then(User=>{
        Movie.findAll()
        .then(data=>{
            // res.send(User)
            let pass = 0;
            for(let i=0; i<User.length; i++ ) {
                if(User[i].loginStatus==1) pass=1;
            }
            res.render('MovieView/list',{
                Data:data,
                Pass:pass
            })
        })
        .catch(err=>{
            res.send(err)
        })
    })
})
Route.get('/category',(req,res)=>{
    User.findAll()
    .then(user=>{
        Category.findAll()
        .then(data=>{
        // res.send(data)
        let pass=0;
        for( let i=0; i<user.length; i++ ) {
            if(user[i].loginStatus == 1) pass=1;
        }
        res.render('MovieView/categoryView',{
            Data:data,
            Pass:pass
            })
        })
        .catch(err=>{
        res.send(err);
        })
    })
    
})
Route.get('/category/:id',(req,res)=>{
    User.findAll()
    .then(user=>{
        Category.findByPk(req.params.id,{include:Movie})
        .then(data=>{
            // res.send(data)
            let pass=0;
            for(let i=0;i<user.length; i++){
                if(user[i].loginStatus==1) pass=1;
            }
            res.render('MovieView/movieByCategory',{
                Category :data,
                Pass:pass
            })
        })
    })
})
Route.get('/buy/:name',(req,res)=>{
    User.findAll()
    .then(user=>{
        let pass=0;
        for(let i=0;i<user.length;i++){
            if(user[i].loginStatus==1) pass=1
        }
        Movie.findOne({
            where:{
                name:req.params.name
            }
        })
        .then(movie=>{
            res.render('MovieView/buy',{
                Pass:pass,
                Movie:movie
            })
        })
    })
})

module.exports = Route;