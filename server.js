const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles")
const Article = require('./models/article')
const app = express();

mongoose.connect('mongodb://localhost/Bharat-intern-Blog-website')
app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.render('index');
})
app.use('/articles',articleRouter)

app.listen(3000);