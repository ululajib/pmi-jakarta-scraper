const path = require('path');
const debug = require('debug')('jm:blank:scraper:oplover:utils');
const {writeFile, readFileSync} = require('fs');
const {resolve} = require('path');
module.exports = {
  getHTML,
}
function getHTML(file) {
  const options = {
    dir: 'html',
    ext: 'html',
  };
  return getFile(file, options);
}
function getFile(file, options) {
  const {
    dir = '',
    ext = 'txt',
    transform,
    encoding = 'utf8',
  } = options;
  const filepath = path.resolve(__dirname, dir, `${file}.${ext}`);
  const result = readFileSync(filepath, encoding);
  if (transform) {
    return transform(result);
  }
  return result;
}
