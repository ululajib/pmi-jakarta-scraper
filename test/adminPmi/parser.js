const test = require('tape')
const parserPmi = require('../../src/modules/pmiJkt/parser')
const {getHTML} = require('./test-utils');

test.only('Parser content - pmi jkt', (asset) => {
  const html = getHTML('newsHtml1')
  const data = parserPmi.getNewsPmijkt(html)
  console.log(data)
  asset.ok(Boolean(data), 'result data parser')
  asset.end()
})
