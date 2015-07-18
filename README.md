# `render-webpage`

Render a webpage into a pdf or png.

## Installation

```bash
npm install --save render-webpage
```

## Usage

```javascript
var renderWebpage = require('render-webpage')

renderWebpage('http://google.se', 'google.pdf', function (err) {
  if (err) throw err

  console.log('Success!')
})
```

## API

### `renderWebpage(source, target, cb)`

Render a webpage at `source` to the file `target`. `cb` will be called with a
potential error `err`.

## License

MIT
