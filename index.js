// importing express
import express from 'express'

// create an express app

const app = express()

// create port
const port = +process.env.PORT || 4000

// use the   Router, this is to retrieve information.
app.get('/', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: "Homepage"
    })
})

app.get('./about', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: 'About Page'
    })
})

app.all('*', (req, res) => {
    res.json({
        status: 404,
        msg: '404 Error'
    })
})
app.listen(port)
