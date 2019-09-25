const express = require('express');
const app = express();
const PORT = 3000;
const Movie = require('./Router/MovieRouter');
// const Login = require('./Router/LoginRouter');
app.set('view engine', 'ejs');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(PORT,()=> console.log(`Linstening on PORT ${PORT}`));

app.get('/',(req,res)=>{
    res.render('index')
})

app.use('/movies',Movie);
// app.use('/login',Login);