const debug = require('debug')('ulul:parser:html')
const cheerio = require('cheerio')
var moment = require('moment')

module.exports = {
  getNewsPmijkt,
}

function getNewsPmijkt(html) {
  const $ = cheerio.load(html)
  const title = getTitle()
  const img = $('#container .news-img img').attr('src')
  const datePublish = getDatePublish()
  const content = getContent()
  const description = getDescription()

  return Object.assign({}, {title, img, datePublish, description, content});

  function getTitle() {
    const title = $('#news-title').text()
    return title;
  }

  function getContent() {
    const container = $('#container').find('p')
    const data = []
    const $content = container.map((index) => {
      data.push(`<p> ${$('#container').find('p').eq(index).html()} </p>`)
    })
    return data.join(' ');
  }

  function getDescription() {
    const text = $(`<div> ${content} </div>`).text()
    return text.substr(0, 200)
  }

  function getDatePublish() {
    const date = $('#news-date li').text().replace('WIB', '')
    const datePublish = moment(date.trim(), 'D MMMM YYYY HH:mm', 'id').toDate()
    return datePublish
  }
}
