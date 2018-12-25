const test = require('tape')
const AdminPmi = require('../../src/modules/adminPmi')
const optionsPmi = {}
const adminPmi = AdminPmi(optionsPmi)
const contents = require('./json/json-1.json')

test.only('integration pmi - getNewsPmijkt', (assert) => {
  const query = {contents};

  adminPmi.postContent(query)
    .then((data) => {
      console.log(data)
      assert.ok(Boolean(data), 'testing lancarr')
      assert.end()
    })
    .catch(assert.end)
})
