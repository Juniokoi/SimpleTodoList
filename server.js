import express from 'express'
import bodyParser from 'body-parser'
import todayDate from './public/components/dateGenerator.js'

const app = express()
const PORT = 3333

const items = []
const workItems = []

app.use(bodyParser.urlencoded({ extended: true })) // Allow getting data from forms
app.use(express.static('public')) // Allow using static files from .EJS
app.set('view engine', 'ejs') // set the main index as .ejs files

// Main directory path
app.get('/', (req, res) => {
  res.render('list', { listTitle: todayDate, items })
})

app.post('/', (req, res) => {
  const item = req.body.newItem
  items.push(item)
  res.redirect('/')
})

// Work directory path
app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work List', items: workItems })
})

app.post('/work', function (req, res) {
  const item = req.body.newItem // get user input from the list file
  workItems.push(item) // add it to a array
  res.redirect('/work') // redirect to the same page the user is located
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})
