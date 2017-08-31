const MongoClient = require('mongodb')

const getMongoURL = (options) => {
  const url = options.servers
    .reduce((prev, cur) => prev + cur + ',', 'mongodb://')

  return `${url.substr(0, url.length - 1)}/${options.db}`
}

const connect = (options, mediator) => {
  mediator.once('boot.ready', () => {
    MongoClient.connect('mongodb://ryknzu:XWQToYoa6S5Bz53X@willow-shard-00-00-wprd1.mongodb.net:27017,willow-shard-00-01-wprd1.mongodb.net:27017,willow-shard-00-02-wprd1.mongodb.net:27017/test?ssl=true&replicaSet=Willow-shard-0&authSource=admin',
      (err, db) => {
        if (err){
          mediator.emit('db.error', err)
        }

        mediator.emit('db.ready', db)
      })

    // MongoClient.connect(
    //   getMongoURL('mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@willow-shard-00-00-wprd1.mongodb.net:27017,willow-shard-00-01-wprd1.mongodb.net:27017,willow-shard-00-02-wprd1.mongodb.net:27017/test?ssl=true&replicaSet=Willow-shard-0&authSource=admin'), {
    //     db: options.dbParameters(),
    //     server: options.serverParameters(),
    //     replset: options.replsetParameters(options.repl)
    //   }, (err, db) => {
    //     if (err) {
    //       mediator.emit('db.error', err)
    //     }
    //
    //     db.admin().authenticate(options.user, options.pass, (err, result) => {
    //       if (err) {
    //         mediator.emit('db.error', err)
    //       }
    //       mediator.emit('db.ready', db)
    //     })
    //   })
  })
}

module.exports = Object.assign({}, {connect})
