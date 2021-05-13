var express = require('express');
const path=require('path')
const expbs=require("express-handlebars")
const port=2000
var app = express();

const publicpath=path.join(__dirname,'../public')

app.use(express.static(publicpath))
const hbs =expbs.create({
    defaultLayout:'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    }, 
    
})
app.engine('handlebars',hbs.engine)
app.set('view engine', 'handlebars')
app.get('/',(req,res)=>{res.render('start')})
app.get('/quiz',(req,res)=>{res.render('quiz')})
app.get('/end',(req,res)=>{res.render('end')})
app.listen(port, () => {
    console.log('Server is up on port '+port)
})