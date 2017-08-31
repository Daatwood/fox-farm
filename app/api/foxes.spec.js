const request = require('supertest')
const server = require('../server/server')

describe('Foxes API', () => {
  let app = null
  let testFoxes = [{
    'id': '1',
    'name': 'Willow'
  }, {
    'id': '5',
    'name': 'Shark'
  }, {
    'id': '3',
    'name': 'Rogue'
  }]

  let testRepo = {
    getAllFoxes () {
      return Promise.resolve(testFoxes)
    },
    getFoxById (id) {
      return Promise.resolve(testFoxes.find(fox => fox.id === id))
    },
    addFox (name) {
      const newFox = {
        id: 999,
        name: name
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
          'name': 'Willow'
        })
      })
      .expect(200, done)
  })

  it('returns 200 for an known movie', (done) => {
    request(app)
      .get('/foxes/1')
      .expect((res) => {
        res.body.should.containEql({
          'id': '1',
          'name': 'Willow'
        })
      })
      .expect(200, done)
  })

})
