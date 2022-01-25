'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const port = 10014

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('It works!')
})

app.listen(port, () => {
    console.log(`Server listening on port port::${port}`)
})