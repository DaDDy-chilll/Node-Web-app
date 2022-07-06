require('dotenv').config();
const express = require('express');
const ejs = require('ejs')
const bdparser = require('body-parser');
const app = express();

app.set('view engine','ejs');
app.use(bdparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.route('/')
.get((req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is running on PORT:${process.env.PORT}`);
})