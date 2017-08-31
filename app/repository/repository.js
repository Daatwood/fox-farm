const repository = (db) => {
  const collection = db.collection('foxes')

  const getAllFoxes = () => {
    return new Promise((resolve, reject) => {
      const foxes = []
      const cursor = collection.find({}, {name: 1, id: 1})
      const addFox = (fox) => {
        foxes.push(fox)
      }
      const sendFoxes = (err) => {
        if (err) {
          reject(new Error('An error occured fetching all foxes, err:' + err))
        }
        resolve(foxes.slice())
      }
      cursor.forEach(addFox, sendFoxes)
    })
  }

  const getFoxById = (id) => {
    return new Promise((resolve, reject) => {
      const projection = {_id: 0, id: 1, name: 1}
      const sendFox = (err, fox) => {
        if (err) {
          reject(new Error(`An error occured fetching a fox with id: ${id}, err: ${err}`))
        }
        resolve(fox)
      }
      collection.findOne({id: id}, projection, sendFox)
    })
  }

  // const addFox = (fox) => {
  //   return new Promise((resolve, reject) => {
  //     const payload = {
  //       name: fox.name
  //     }
  //     collection.insertOne(payload, (err, result) => {
  //       if (err) {
  //         reject(new Error('An error occurred adding a fox, err:' + err))
  //       }
  //       resolve(payload)
  //     })
  //   })
  // }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getAllFoxes,
    getFoxById,
    disconnect
  })
}

const connect = (connection) => {
  console.log('repo connect..')
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('connection db not supplied!'))
    }
    resolve(repository(connection))
  })
}

module.exports = Object.assign({}, {connect})
