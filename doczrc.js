const path = require('path')

const SRC = path.resolve(__dirname, 'src')

module.exports = {
  title: 'Docz theme',
  theme: `${SRC}/index`,
  propsParser: false,
}
