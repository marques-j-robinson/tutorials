import express from 'express'

const app = express()
const port = process.env.PORT || 5656

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
