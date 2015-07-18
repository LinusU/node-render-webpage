/* eslint-env phantomjs */

var system = require('system')
var page = require('webpage').create()

page.paperSize = {
  format: 'A4',
  orientation: 'portrait',
  margin: '0.25in'
}

page.open(system.args[1], function (status) {
  if (status !== 'success') return phantom.exit(1)

  page.render(system.args[2])
  phantom.exit(0)
})
