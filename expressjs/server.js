import express from 'express'

const port = process.env.PORT || 5656
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
