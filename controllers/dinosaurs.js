//create express router
let router = require('express').Router()
let fs = require('fs')


//routes


router.get('/', function(req, res) {
	let dinosaurs = fs.readFileSync('./dinosaurs.json')
	let dinoData = JSON.parse(dinosaurs)
	res.render('index', {dinoData})
})

router.post('/', function(req, res) {
	let dinosaurs = fs.readFileSync('./dinosaurs.json')
	let dinoData = JSON.parse(dinosaurs)

	dinoData.push(req.body)

	fs.writeFileSync('dinosaurs.json', JSON.stringify(dinoData))

	res.redirect('/dinosaurs')
})

router.get('/new', (req, res) => {
	res.render('new.ejs')
})

router.delete('/:idx', (req, res) => {
	let dinosaurs = fs.readFileSync('./dinosaurs.json')
	let dinoData = JSON.parse(dinosaurs)

	dinoData.splice(req.params.idx, 1)

	fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
	res.redirect('/dinosaurs')
})

router.get('/:id', function(req, res) {
	let dinosaurs = fs.readFileSync('./dinosaurs.json')
	let dinoData = JSON.parse(dinosaurs)

let dinoIndex = parseInt(req.params.id)

res.send(dinoData[dinoIndex])
})


//export the router
module.exports = router
