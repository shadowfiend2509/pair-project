const Route = require('express').Router();
const MovieController = require('../Controllers/movieController');
const middleware = (req,res,next) => {
    if(req.session.name){
        next()
    }else{
        res.redirect('/users/login');
    }
}

Route.get('/',MovieController.listMovie);
Route.get('/category/',MovieController.viewCategory);
Route.get('/category/:id',MovieController.movieByCategory);
Route.get('/buy/:name',middleware,MovieController.getBuyTicket);
Route.post('/buy/:name',middleware,MovieController.postBuyTicket);

module.exports = Route;