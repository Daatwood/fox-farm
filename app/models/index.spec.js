const assert = require('assert')
const {validate} = require('./')

console.log(Object.getPrototypeOf(validate))

describe('Schema Validation', () => {
  it('can validate a fox object', (done) => {
    const foxSchema = {
      id: '1ab23cd',
      name: 'Willow',
      age: 5
    }

    validate(foxSchema, 'fox')
      .then(value => {
        assert.ok(value)
        console.log(value)
        done()
      })
      .catch(err => {
        console.log(err)
        done()
      })
  })
})
