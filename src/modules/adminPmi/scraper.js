const debug = require('debug')('jm:oplovers:scraper');
const Promise = require('bluebird');
const parser = require('./parser');
const urls = require('./urls');
const utils = require('./utils');

module.exports = {
 getNewsPmijkt,
};

function getNewsPmijkt(http, options = {}) {
  const {links} = options
  return Promise.mapSeries(links, (link) =>
      Promise.resolve()
        .then(() => {
          const options = {
            url: urls.uri
          }
          utils.setRefererHeader(options, urls.uri)
          return http.get(options)
            .get('body')
            .tap(http.saveHtml('newsHtml0'))
        })
        .delay(3000)
        .then(() => {
          const options = {
            url: link
          }
          utils.setRefererHeader(options, urls.uri)
          return http.get(options)
            .get('body')
            .tap(http.saveHtml('newsHtml1'))
            .then(parser.getNewsPmijkt)
        })
    )
    .tap(http.saveJson('getNewsPmijkt'))

    function returnData(data) {
      return data
    }
}
