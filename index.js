let express = require('express')
let app = express()

//serve static files
app.use(express.static('static'))

//use ejs
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))



//get the array index from our url



app.use('/dinosaurs', require('./controllers/dinosaurs'))


app.listen(3000)