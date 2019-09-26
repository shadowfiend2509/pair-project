const express = require('express');
const app = express();
const PORT = 3000;
const Userr = require('./models').User;
const Movie = require('./Router/MovieRouter');
const User = require('./Router/UserRouter');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.listen(PORT,()=> console.log(`Linstening on PORT ${PORT}`));

app.get('/',(req,res)=>{
    Userr.findAll()
    .then(user=>{
        let pass=0;
        for(let i=0;i<user.length;i++){
            if(user[i].loginStatus==1) pass=1
        }
        res.render('index',{
            Pass:pass
        })
    })
})
// app.get('/',(req,res)=>{
//     Userr.findAll()
//     .then(user=>{
//         let pass=0;
//         for(let i=0;i<user.length;i++){
//             if(user[i].loginStatus==1) pass=1
//         }
//         res.render('MovieView/test',{
//             Pass:pass
//         })
//     })
// })
app.use('/movies',Movie);
app.use('/users',User);

