//require related modules in the project
const express = require('express')
const exphds = require('express-handlebars')
const hdsHepler = require('./handlebars_helper')
const bodyParser = require('body-parser')
const generateSentence = require('./generate_sentence.js')
const app = express()
const port = 3000

//set template engine
app.engine('handlebars', exphds({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//set router
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const sentence = generateSentence(option)
  res.render('index', { sentence, option })
})

app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`)
})