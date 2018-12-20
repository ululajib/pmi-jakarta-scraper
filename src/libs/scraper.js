const pmiJkt = require('../modules/pmiJkt');
const kittens = {
  pmiJkt,
};
module.exports = Scrapers;
function Scrapers(...args) {
 const [options = {}] = args;
 const {web} = options;
 const Scraper = kittens[web];
 return Scraper(...args);
};
