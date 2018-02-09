var express = require('express')
var path = require('path')
var app = express()

app.use('/', express.static(path.join(__dirname, '')))

app.get('/', function(request, response) {
    response.redirect('/')
})

app.listen(8000)

module.exports = app