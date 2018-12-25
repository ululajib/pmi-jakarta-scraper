const host = '127.0.0.1:8000'
const uri = `http://${host}/`
const urls = {
  host,
  uri,
  content: `${uri}scraper/post_content`,
  content_data: `${uri}scraper/post_content_data`, 
}
module.exports = urls
