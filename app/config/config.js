const dbSettings = {
  db: process.env.DB || 'foxes',
  user: process.env.DB_USER || 'ryknzu',
  pass: process.env.DB_PASS || 'XWQToYoa6S5Bz53X',
  repl: process.env.DB_REPLS || 'Willow-shard-0',
  servers: (process.env.DB_SERVERS) ? process.env.DB_SERVERS.split(' ') : [
    'willow-shard-00-00-wprd1.mongodb.net:27017',
    'willow-shard-00-01-wprd1.mongodb.net:27017',
    'willow-shard-00-02-wprd1.mongodb.net:27017'
  ],
  dbParameters: () => ({
    w: 'majority',
    wtimeout: 10000,
    j: true,
    readPreference: 'ReadPreference.SECONDARY_PREFERRED',
    native_parser: false
  }),
  serverParameters: () => ({
    autoReconnect: true,
    poolSize: 10,
    socketoptions: {
      keepAlive: 300,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 30000
    }
  }),
  replsetParameters: (replset = 'Willow-shard-0') => ({
    replicaSet: replset,
    ha: true,
    haInterval: 10000,
    poolSize: 10,
    socketoptions: {
      keepAlive: 300,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 30000
    }
  })
}

const serverSettings = {
  port: process.env.PORT || 3000
}

module.exports = Object.assign({}, { dbSettings, serverSettings })
