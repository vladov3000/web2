var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/source/templates/homepage.jade')
  , template1 = require('jade').compileFile(__dirname + '/source/templates/jquerygamespage.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/js'))
app.use(express.static(__dirname + '/alienSpites'))


app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/jquerygamespage', function (req, res, next) {
  try {
    var html = template1({ title: 'JQuery Games' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
