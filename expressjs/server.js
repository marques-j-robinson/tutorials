import express from 'express'

const port = process.env.PORT || 5656
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
