const Movie = require('../models').Movie;
const Category = require('../models').Category;
const User = require('../models').User;
const TicketUser = require('../models').TicketUser;

class MovieController {
    static listMovie(req,res){
        let pass =0;
        let employee = 0;
        if(req.session.employee) employee = 1
        let movies = [];
        if(req.session.name) pass=1;
        Movie.findAll()
        .then(data=>{
            data.forEach(movie=>{
                movies.push(movie);
            })
            return Category.findAll()
        })
        .then(Category=>{
            res.render('MovieView/list',{
                Data:movies,
                Pass:pass,
                Category:Category,
                employee:employee
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static viewCategory (req,res){
        let pass = 0;
        let employee = 0;
        if(req.session.employee) employee = 1
        if(req.session.name) pass=1;
        Category.findAll()
        .then(data=>{
            res.render('MovieView/categoryView',{
                Data:data,
                Pass:pass,
                employee:employee
                })
            })
            .catch(err=>{
                res.send(err);
            })   
    }
    static movieByCategory (req,res){
        let pass = 0
        let employee = 0;
        if(req.session.employee) employee = 1
        if(req.session.name) pass=1;
        Category.findByPk(req.params.id,{include:Movie})
        .then(data=>{
            res.render('MovieView/movieByCategory',{
                Category :data,
                Pass:pass,
                employee:employee
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static getBuyTicket(req,res){
        let pass = 0
        let employee = 0;
        if(req.session.employee) employee = 1
        if(req.session.name) pass=1
        if(pass = 0) res.render('/users/login');
        else{
            Movie.findOne({
                where:{
                    name:req.params.name
                }
            })
            .then(movie=>{
                res.render('MovieView/buy',{
                    Pass:pass,
                    Movie:movie,
                    Booking:req.session.code,
                    employee:employee
                })
            })
            .catch(err=>{
                res.send(err)
            })
        }
    }
    static postBuyTicket (req,res){
        let nameMovie=req.body.nameMovie
        let pass=0
        let employee = 0;
        if(req.session.employee) employee = 1
        let code = nameMovie[0]+nameMovie[1].toUpperCase()+'';
        for( let i=0; i<5; i++){
            let kata = 'r32rh3ipj3if0fh9heqji9jer032523t22';
            let random = Math.round(Math.random() * kata.length);
            code+= kata[random].toUpperCase()
        }
        let getMovie = []
        if(req.session.name) pass=1
        if( pass == 0 ) res.redirect('/users/login');
        else {
            let getUser = [];
            User.findOne({
                where : {
                    username : req.session.name.username
                }
            })
            .then(user=>{
                getUser.push(user)
                return Movie.findOne({
                    where :{
                        name : nameMovie
                    }
                })
            })
            .then(movie=>{
                getMovie.push(movie)
                return TicketUser.create({
                    UserId : getUser[0].id,
                    MovieId : movie.id,
                    CodeBooking : code
                })
            })
            .then(success=>{
                let qty = req.body.qty;
                let seats = req.body.seats.split(',').sort();
                req.session.code = {
                    seats : [seats]
                }
                res.render('MovieView/successPurchase',{
                    User :getUser[0],
                    Movie :getMovie[0],
                    qty : qty,
                    seats : seats,
                    Pass :pass,
                    Code :code,
                    employee:employee
                })
            })
            .catch(err=>{
                res.send(err)
            })
        }
    }
}

module.exports = MovieController;