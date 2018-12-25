const debug = require('debug')('albab:ulul:pmijkt')
const Promise = require('bluebird')
const Http = require('http-scraper')
const assert = require('assert')
const urls = require('./urls')
const scraper = require('./scraper')

function Scraper(options = {}) {
  const type = 'adminPmi'
  const capture = true
  const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML,' +
  ' like Gecko) Chrome/51.0.2704.19 Safari/537.36';
  const {uri, host} = urls
  const defaults = {uri, host, type, capture}
  const setting = Object.assign({}, defaults, options)
  const settingImg = Object.assign({}, {
    type,
    capture,
    uri: 'http://dki-jakarta.pmi.or.id/',
    host: 'dki-jakarta.pmi.or.id',
  }, options)
  const http = Http(setting)
  const httpImg = Http(settingImg)
  const properties = {http, httpImg, setting}
  const prototypes = {
    postContent,
  }

  return Object.assign(Object.create(prototypes), properties)
}
module.exports = Scraper

function postContent(query) {
  return Promise.resolve()
    .tap(debug)
    .then(() => scraper.postContent(this.http, this.httpImg, query))
}
