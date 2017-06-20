
const loremIpsum = require('lorem-ipsum')
const express = require('express')

let app = express()

app.get('/', function (request, response) {
  response.send('<a href="/lorem">Lorem Generator</a>');
})

app.get('/lorem', function(req, res) {
    res.send(loremIpsum({
      count: 3,
      units: 'paragraphs',
      format: 'html'
    }))
})



app.listen(3000);




