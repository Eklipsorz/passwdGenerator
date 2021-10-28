// load express and express-handlebars
const express = require('express')
const handlebarsModule = require('express-handlebars')

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


// define route
app.get('/', (req, res) => {
  res.render('index')
})


// start to listen

app.listen(port, () => {
  console.log(`The express server is running at port ${port}`)
})