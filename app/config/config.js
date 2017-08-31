const dbSettings = {
  db: process.env.DB || 'foxes',
  user: process.env.DB_USER || 'ryknzu',
  pass: process.env.DB_PASS || 'XWQToYoa6S5Bz53X',
  server_string: process.env.DB_SERVERS || 'willow-shard-00-00-wprd1.mongodb.net:27017,willow-shard-00-01-wprd1.mongodb.net:27017,willow-shard-00-02-wprd1.mongodb.net:27017/test?ssl=true&replicaSet=Willow-shard-0&authSource=admin'
}

const serverSettings = {
  port: process.env.PORT || 3000
}

module.exports = Object.assign({}, { dbSettings, serverSettings })
