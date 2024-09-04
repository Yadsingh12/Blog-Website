const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles")
const Article = require('./models/article')
const app = express();

mongoose.connect('mongodb://localhost/Bharat-intern-Blog-website')
app.set('view engine', 'ejs');

app.get('/', async(req, res) => {
    const articles =await Article.find().sort({ createdAt:'desc'})
    res.render('articles/index', { articles: articles })
})
app.use('/articles',articleRouter)

app.listen(3000);