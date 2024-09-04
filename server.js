const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles")
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    res.render('index');
})
app.use('/articles',articleRouter)

app.listen(3000);