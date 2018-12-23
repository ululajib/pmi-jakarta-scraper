module.exports = {
  setRefererHeader,
}

function setRefererHeader(options = {}, referer = '') {
  options.headers = options.headers || {};
  options.headers.Referer = referer;
  return options;
}
