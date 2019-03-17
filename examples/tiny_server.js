const express = require('express')

const app = express()

app.get('/books', (req, res) => {
  console.log(req)
  res.send('Book')
})

app.listen(4741, () => console.log('Example app listening on port 4741!'))
