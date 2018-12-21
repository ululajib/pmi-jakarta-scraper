const debug = require('debug')('albab:ulul:pmijkt')
const Promise = require('bluebird')
const Http = require('http-scraper')
const assert = require('assert')
const urls = require('./urls')

function Scraper(options = {}) {
  const type = 'pmijkt'
  const capture = true
  const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML,' +
  ' like Gecko) Chrome/51.0.2704.19 Safari/537.36';
  const {uri, host} = urls
  const defaults = {uri, host, type, capture}
  const setting = Object.assign({}, defaults, options)
  const http = Http(setting)
  const properties = {http, setting}
  const prototypes = {
    getNewsPmijkt,
  }

  return Object.assign(Object.create(prototypes), properties)
}

module.exports = Scraper

function getNewsPmijkt(query) {
  console.log(query);
  exit()
  return Promise.resolve()
    .tap(debug)
    .then(() => )
}
