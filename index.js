var express = require('express')
var path = require('path')
var app = express()

app.use('/', express.static(path.join(__dirname, 'dist')))

app.get('/', function(request, response) {
    response.redirect('/')
})

app.listen(process.env.PORT || 4200)

module.exports = app