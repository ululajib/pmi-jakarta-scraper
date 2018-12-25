const debug = require('debug')('jm:oplovers:scraper');
const Promise = require('bluebird');
const parser = require('./parser');
const urls = require('./urls');
const utils = require('./utils');
const fs = require('fs');
const FormData = require('form-data');

module.exports = {
 postContent,
};

function postContent(http, httpImg, options = {}) {
  const {contents} = options
  return Promise.mapSeries(contents, (content) =>
    Promise.resolve()
      .delay(3000)
      .then(() => {
        const {img} = content
        const options = {
          url: `http://dki-jakarta.pmi.or.id${img}`,
          encoding: null,
        }
        return httpImg.get(options)
          .get('body')
          .then(httpImg.saveImage('imageContent'))
      })
      .then((imageContent) => {
        const {img} = content
        const options = {
          url: urls.content,
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          formData: {
            'image': fs.createReadStream('capture/adminPmi/imageContent.jpg')
          }
        }
        utils.setRefererHeader(options, urls.uri)
        return http.post(options)
          .get('body')
          .tap(http.saveJson('responseAmin'))
          .then((result) => {
            return result
          })
      })
      .then((idImg) => {
        const {id_image} = JSON.parse(idImg)
        content.id_library = id_image
        const options = {
          url: `${urls.content_data}`,
          form: content
        }
        utils.setRefererHeader(options, urls.uri)
        return http.post(options)
          .get('body')
          .tap(http.saveJson('postContent'))
          .then((data) => data)
      })
  )
}
