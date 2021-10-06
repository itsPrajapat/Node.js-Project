const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// public static path
// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));

// to add external css 
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

const template_path = path.join(__dirname, "../templates/views");
app.set('views', template_path)

const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
hbs.registerPartials(partials_path);

// routing
app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/weather', (req, res)=>{
    res.render('weather');
});

app.get('*', (req, res)=>{
    res.render('404error', {
        errorMsg: 'Oops! Page Not Found'
    });
});


app.listen(port, ()=>{
    console.log(`listening to the port no. ${port}`)
});