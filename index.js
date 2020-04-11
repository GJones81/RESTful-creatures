let express = require('express')
let app = express()
let methodOverride = require('method-override')

//serve static files
app.use(express.static('static'))

//use ejs
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))



//get the array index from our url



app.use('/dinosaurs', require('./controllers/dinosaurs'))


app.listen(3000)
