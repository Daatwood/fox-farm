
### Stack
Simple NodeJS RESTful api with a MongoDB for backend.
- NodeJS 7.5.0
- MongoDB 3.4.2

### Setup

Install packages
`npm install`

Run tests
`npm test`

Run app
```
npm start
open http://127.0.0.1:3000/foxes
```


### Lifecycle
- Start in `index.js`
- Load repository in `repository/repository.js`
- Wait for DB connection.
- Start `server/server.js` and `api/foxes.js`
