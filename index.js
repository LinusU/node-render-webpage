var path = require('path')
var spawn = require('child_process').spawn
var phantomjs = require('phantomjs2').path

var renderer = path.join(__dirname, 'renderer.js')

function renderWebpage (source, target, cb) {
  var args = [renderer, source, target]
  var child = spawn(phantomjs, args, { stdio: 'ignore' })

  child.on('error', cb)
  child.on('exit', function (code) {
    if (code !== 0) return cb(new Error('Bad exit code: ' + code))

    cb(null)
  })
}

module.exports = renderWebpage
