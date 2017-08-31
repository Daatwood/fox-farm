const status = require('http-status')

module.exports = (app, options) => {
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

  // app.post('/foxes', (req, res, next) => {
  //   console.log(req)
  //   const {validate} = req.container
  //
  //   repo.addFox()
  //
  //   validate(req.body.payload, 'fox')
  //     .then(ok => {
  //       res.status(status.OK).json({msg: 'ok'})
  //     }).catch(next)
  // })
}
