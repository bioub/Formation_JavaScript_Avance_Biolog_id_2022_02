const express = require('express')
const morgan = require('morgan');
const cors = require('cors');

const app = express()
const port = 3000

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.json([{id: 1, title: 'ABC', completed: false}]);
})

// app.post('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
