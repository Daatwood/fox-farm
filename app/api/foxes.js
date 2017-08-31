const status = require('http-status')

module.exports = (app, options) => {
  console.log('api handle..')
  const {repo} = options

  app.get('/foxes', (req, res, next) => {
    repo.getAllFoxes().then(foxes => {
      res.status(status.OK).json(foxes)
    }).catch(next)
  })

  app.get('/foxes/:id', (req, res, next) => {
    repo.getFoxById(req.params.id).then(fox => {
      res.status(status.OK).json(fox)
    }).catch(next)
  })
}
