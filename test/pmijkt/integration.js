const test = require('tape')
const ScraperPmi = require('../../src/modules/pmiJkt')
const optionsPmi = {}
const scraperPmi = ScraperPmi(optionsPmi)

test.only('integration pmi - getNewsPmijkt', (assert) => {
  const query = {
    links: [
        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/indonesia-indonesia-red-cross-disaster-response-team-from-dki-jakarta-chapter-makes-26-hour-journey-to-palu-to-begin-initial-disaster-response-activities',

        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/pmi-dki-kirim-bantuan-untuk-gempa-dan-tsunami-palu-dan-donggala',

        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/bca-donasikan-4-set-blood-scale-mixer-kepada-pmi-dki-jakarta',

        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/menteri-sosial-agus-gumiwang-kartasasmita-membuka-acara-temu-karya-relawan-pmi-tingkat-nasional-vi-di-waduk-jatiluhur-purwakarta',

        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/anies-rasyid-baswedan-kukuhkan-panitia-bulan-dana-pmi-dki-jakarta-tahun-2018-di-balai-kota',

        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/memperingati-hut-ke-27-tupperware-gelar-donor-darah-serentak-se-indonesia',

        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/pmi-dki-jakarta-menggelar-acara-halal-bi-halal',

        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/pmi-dki-jakarta-terima-bantuan-2-unit-motor-ambulance-dari-pt-axa-mandiri',

        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/pmi-dki-adakan-buka-puasa-bersama-dengan-anak-yatim',

        'http://dki-jakarta.pmi.or.id/berita-dan-peristiwa/bakti-sosial-ramadhan-pmi-kota-jakarta-timur'

    ],
  }
  scraperPmi.getNewsPmijkt(query)
    .then((data) => {
      console.log(data)
      assert.ok(Boolean(data), 'testing lancarr')
      assert.end()
    })
    .catch(assert.end)
})
