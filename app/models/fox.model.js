const foxSchema = (joi) => ({
  objectId: joi.string(),
  name: joi.string(),
})

module.exports = foxSchema
