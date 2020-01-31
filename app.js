const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const ORACLE_API = require('../config/keys')

// app.use(express.static('public'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  })
}

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/search', (req, res) => {
  fetch(`https://oracleofbacon.org/cgi-bin/json?enc=utf-8&p=${ORACLE_API}&a=Kevin+Bacon&b=${req.query.string}&u=1&rt=1&sy=1850&ey=2050&gm=0xef3ef7f&dir=0&co=`)
    .then(res => {
      return res.text()
    })
    .then(body => {
      // let results = JSON.parse(body)
      // console.log(body)
      res.send(body)
    })
})

// create route to get single book by its isbn
// app.get('/books/:isbn', (request, response) => {
//   // make api call using fetch
//   fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${request.params.isbn}&format=json&jscmd=data`)
//   .then((response) => {
//       return response.text();
//   }).then((body) => {
//       let results = JSON.parse(body)
//       console.log(results)   // logs to server
//       response.send(results) // sends to frontend
//     });
// });

// // create a search route
// app.get('/search', (request, response) => {
//   fetch(`http://openlibrary.org/search.json?q=${request.query.string}`)
//   .then((response) => {
//       return response.text();
//   }).then((body) => {
//       let results = JSON.parse(body)
//       console.log(results)
//       response.send(results)
//     });
// });

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
