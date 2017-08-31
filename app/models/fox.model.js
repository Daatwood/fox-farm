const foxSchema = (joi) => ({
  id: joi.string(),
  name: joi.string(),
  age: joi.number()
})

module.exports = foxSchema
