// load express and express-handlebars
const express = require('express')
const handlebarsModule = require('express-handlebars')
const getPassword = require('./getPassword')

// create a app object

const app = express()

// define the port and data
const port = 3500


// create a express-handles instance and its engine settings

const handlebars = handlebarsModule.create({
  layoutsDir: "views/layouts",
  defaultLayout: "main",
  extname: "handlebars"
})


// load express-handles engine into this project
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

// views directory
app.set('views', process.cwd() + '/views')


// static file directory
app.use('/', express.static('public'))


// set body parser for url encoded
app.use('/', express.urlencoded({ extended: true }))

// define get route
app.get('/', (req, res) => {
  res.render('index')
})

// define post route
app.post('/', (req, res) => {
  console.log('random password is: ', getPassword(req.body))

  const password = getPassword(req.body)
  res.render('index', { password: password })
})

// start to listen

app.listen(port, () => {
  console.log(`The express server is running at port ${port}`)
})