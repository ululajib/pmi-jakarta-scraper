const test = require('tape')
const ScraperPmi = require('../../src/modules/pmiJkt')
const optionsPmi = {}
const scraperPmi = ScraperPmi(optionsPmi)

test.only('integration pmi - getNewsPmijkt', (assert) => {
  const query = {
    link: [
      'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/pmi-dki-kirim-bantuan-untuk-gempa-dan-tsunami-palu-dan-donggala#.XBusf2UzbeQ',
    ],
  }
  scraperPmi.getNewsPmijkt(query)
    .then((data) => {
      console.log(data)
      assert.ok('testing lancarr')
    })
    .catch(assert.end)
})
