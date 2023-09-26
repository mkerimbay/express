const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const subreddit_data = require('./data.json')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Serving static files
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views/partials')));





app.get('/', (req, res) => {
    res.render('home.ejs')
});


// generate random number and pass param to ejs
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('rand', {num})
})

app.get('/loop', (req, res) => {
    const array = ['cat1', 'cat2', 'cat3', 'cat4']
    res.render('loop', {array})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = subreddit_data[subreddit]
    if (data){
        res.render('subreddit', {...data})
    } else {
        res.render('notfound.ejs', {subreddit})
    }
    
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})