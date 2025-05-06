const express = require('express');
const app = express();
const port = 6969;
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const path = require('path');

app.use(bodyParser.urlencoded());

app.engine('hbs',engine({extname: '.hbs',defaultLayout:false}))

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','login.html'))
});

app.post('/login',(req,res)=>{
    console.log(req.body)
    res.render('user',{
        docTitle: 'Main Page'
    })
});

app.listen(port,()=>{
    console.log('Server is running...');
    
})