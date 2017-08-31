const request = require('supertest')
const server = require('../server/server')

describe('Foxes API', () => {
  let app = null
  let testFoxes = [{
    'id': '1',
    'name': 'Willow',
    'age': '5'
  }, {
    'id': '5',
    'name': 'Shark',
    'age': '9'
  }, {
    'id': '3',
    'name': 'Rogue',
    'age': '26'
  }]

  let testRepo = {
    getAllFoxes () {
      return Promise.resolve(testFoxes)
    },
    getFoxById (id) {
      return Promise.resolve(testFoxes.find(fox => fox.id === id))
    },
    addFox (name, age) {
      const newFox = {
        id: 999,
        name: name,
        age: age
      }
      return Promise.resolve(newFox)
    }
  }

  beforeEach(() => {
    return server.start({
      port: 3000,
      repo: testRepo
    }).then(serv => {
      app = serv
    })
  })

  afterEach(() => {
    app.close()
    app = null
  })

  it('can return all foxes', (done) => {
    request(app)
      .get('/foxes')
      .expect((res) => {
        res.body.should.containEql({
          'id': '1',
          'name': 'Willow',
          'age': '5'
        })
      })
      .expect(200, done)
  })

  it('returns 200 for an known fox', (done) => {
    request(app)
      .get('/foxes/1')
      .expect((res) => {
        res.body.should.containEql({
          'id': '1',
          'name': 'Willow',
          'age': '5'
        })
      })
      .expect(200, done)
  })

  it('has link on root', (done) => {
    request(app)
      .get('/')
      .expect((res) => {
        res.text.should.match(/\/foxes/)
      })
      .expect(200, done)
  })

})
