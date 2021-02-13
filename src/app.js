const express = require ('express');
const app = express();
const path = require ('path');
const indexRouter = require ('./routes/indexRouter');
const bodyParser= require('body-parser');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static (path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/', indexRouter);


// app.get ('/', function (req, res) {
//     res.render('index')
// })

app.listen (3000, function(){
    console.log("El servidor esta corriendo en el puerto 3000")
})