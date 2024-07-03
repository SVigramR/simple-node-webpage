const express = require("express")
const app = express()
const path = require('path')
const port = 3000

const options = {
    root: path.join(__dirname)
}

app.get('/', (req, res) => {
    res.sendFile('index.html', options)
})

app.get('/about.html', (req, res) => {
    res.sendFile('about.html', options)
})

app.get('/contact-me.html', (req, res) => {
    res.sendFile('contact-me.html', options)
})

app.listen(port, () => {
    console.log(`Listening in the port - ${port}`)
})