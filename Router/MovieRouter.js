const Router = require('express').Router();
const Movie = require('../models').Movie;
const Category = require('../models').Category;

Router.get('/',(req,res)=>{
    Movie.findAll()
    .then(data=>{
        res.render('MovieView/list',{
            Data : data
        });
    })
    .catch(err=>{
        res.send(err);
    })
})
Router.get('/category',(req,res)=>{
    Category.findAll()
    .then(data=>{
        // res.send(data)
        res.render('MovieView/categoryView',{
            Data:data
        })
    })
    .catch(err=>{
        res.send(err);
    })
})
Router.get('/category/:id',(req,res)=>{
    Category.findByPk(req.params.id,{include:Movie})
    .then(data=>{
        // res.send(data)
        res.render('MovieView/movieByCategory',{
            Category :data
        })
    })
})

module.exports = Router;