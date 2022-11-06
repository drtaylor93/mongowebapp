const express = require('express')
const app = express()
const info = require('./')

app.use(express.json())
app.set('views', 'templates');
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    res.render('form')
})

app.listen(3000, ()=> {
    console.log('Server running on port 3000')
})

document.getElementById('aboutme')