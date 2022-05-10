const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const port = 3700

app.use(express.static(path.join(__dirname, 'public')))



app.engine('hbs', exphbs.engine({extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views/'))


app.get('/', (req, res) => {
  res.render('home')
})
app.get('/info', (req, res) => {
  res.render('info')
})
app.get('/chart', (req, res) => {
  res.render('chart')
})
app.get('/setting_manager', (req, res) => {
  res.render('setting__manager')
})
app.get('/target', (req, res) => {
  res.render('target')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})