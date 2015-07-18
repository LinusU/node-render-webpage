/* eslint-env mocha */

var fs = require('fs')
var path = require('path')
var temp = require('fs-temp')
var assert = require('assert')
var renderWebpage = require('../')

describe('renderWebpage()', function () {
  var out

  beforeEach(function () {
    out = temp.template('%s.pdf').writeFileSync('')
  })

  afterEach(function () {
    fs.unlinkSync(out)
  })

  it('should render a webpage', function (done) {
    var input = path.join(__dirname, '_test.html')

    renderWebpage(input, out, function (err) {
      assert.ifError(err)
      assert.equal(fs.readFileSync(out).toString('ascii', 0, 4), '%PDF')
      done()
    })
  })
})
