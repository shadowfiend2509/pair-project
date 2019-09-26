const Movie = require('../models').Movie;
const Category = require('../models').Category;
const User = require('../models').User;
const TicketUser = require('../models').TicketUser;

class MovieController {
    static listMovie(req,res){
        let pass =0;
        User.findAll()
        .then(User=>{
            if(req.session.name) pass=1;
            return Movie.findAll()
        })
        .then(data=>{
            Category.findAll()
            .then(Category=>{
                res.render('MovieView/list',{
                    Data:data,
                    Pass:pass,
                    Category:Category
                })
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static viewCategory (req,res){
        // User.findAll()
        // .then(user=>{
        //     let pass=0;
        //     for(let i=0;i<user.length;i++){
        //         if(user[i].loginStatus==1) pass=1
        //     }
        //     if(pass==0)
        // })
        // Movie.findOne({
        //     where :{
        //         id : req.query.id
        //     }
        // })
        // .then(data=>{
        //     Category.findAll()
        //     .then(category=>{
        //         // res.send(category)
        //         res.render('MovieView/listByCategory',{
        //             Category:category,
        //             Movie:data
        //         })
        //     })
        // })
        // res.send(req.body)
        let pass = 0;
        User.findAll()
        .then(user=>{
            if(req.session.name) pass=1;
            return Category.findAll()
        })
        .then(data=>{
            res.render('MovieView/categoryView',{
                Data:data,
                Pass:pass
                })
            })
            .catch(err=>{
            res.send(err);
            })   
    }
    static movieByCategory (req,res){
        let pass = 0
        User.findAll()
        .then(user=>{
            if(req.session.name) pass=1;
            return Category.findByPk(req.params.id,{include:Movie})
        })
        .then(data=>{
            res.render('MovieView/movieByCategory',{
                Category :data,
                Pass:pass
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static getBuyTicket(req,res){
        let pass = 0
        User.findAll()
        .then(user=>{
            if(req.session.name) pass=1
            if(pass = 0) res.render('/users/login');
            else{
                return Movie.findOne({
                    where:{
                        name:req.params.name
                    }
                })
            }
        })
        .then(movie=>{
            res.render('MovieView/buy',{
                Pass:pass,
                Movie:movie
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static postBuyTicket (req,res){
        let nameMovie=req.body.nameMovie
        User.findAll()
        .then(data=>{
            let pass=0
            // res.send(req.session)
            if(req.session.name) pass=1
            if( pass == 0 ) res.redirect('/users/login');
            else {
                User.findOne({
                    where : {
                        username : req.session.name.username
                    }
                })
                .then(user=>{
                    // res.send("haiii")
                    Movie.findOne({
                        where :{
                            name : nameMovie
                        }
                    })
                    .then(movie=>{
                        // res.send(user)
                        let code = movie.name[0]+movie.name[1].toUpperCase()+'';
                        for( let i=0; i<5; i++){
                            let kata = 'r32rh3ipj3if0fh9heqji9jer032523t22';
                            let random = Math.round(Math.random() * kata.length);
                            code+= kata[random].toUpperCase()
                        }
                            TicketUser.create({
                                UserId : user.id,
                                MovieId : movie.id,
                                CodeBooking : code
                            })
                            .then(success=>{
                                // res.send(success)
                                // let newSeats = movie.seats-seats.length
                                // Movie.update({
                                //     seats : newSeats
                                // },{where:{id:movie.id}})
                                // .then(ssc=>{
                                    // res.send(ssc)
                                    let qty = req.body.qty;
                                    let seats = req.body.seats.split(',').sort();
                                    res.render('MovieView/successPurchase',{
                                        User :user,
                                        Movie :movie,
                                        qty : qty,
                                        seats : seats,
                                        Pass :pass,
                                        Code :code
                                    })
                                // })
                            })
                    })
                })
            }
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = MovieController;