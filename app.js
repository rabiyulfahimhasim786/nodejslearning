// imports
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/video', express.static(__dirname + 'public/video'))

app.set('views', './views')
app.set('view engine', 'ejs')

// app.get('/app', (req, res) => {
//     res.send('index', {text:'This is EJS'})
// })
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/courses', (req, res) => res.send([1,2,3]))
app.get('/app', (req, res) => {res.render('index', {text:'This is EJS'})})
app.get('/about', (req, res) => {res.render('about', {text: 'This about page'})})
app.get('/image', (req, res) => {res.render('image', {text:'This is an image'})})
app.get('/videotest', function(req,res){
    res.sendFile(__dirname + '/public/video/video.mp4');
});
// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))