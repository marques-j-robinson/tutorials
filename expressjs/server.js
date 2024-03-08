import express from 'express'

const port = process.env.PORT || 5656
const app = express()

app.set('view engine', 'pug')

app.get('/charles', (req, res) => {
    res.render('index')
})

app.get('/marilyn', (req, res) => {
    res.render('index')
})

app.get('/jean', (req, res) => {
    res.render('index')
})

app.get('/', (req, res) => {
    res.redirect('/charles')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
