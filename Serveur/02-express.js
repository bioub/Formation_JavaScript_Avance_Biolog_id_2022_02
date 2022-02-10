const express = require('express')
const morgan = require('morgan');
const cors = require('cors');

const app = express()
const port = 3000

const todos = [{id: 1, title: 'ABC', completed: false}];

app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); // parser le json du body de la requete
// seulement si Content-type: application/json
// et fourni le resultat dans req.body

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.json(todos);
})

// Exercice
// traiter le POST de /todos
// recupérer la todo dans req.body
// la stocker dans le tableau en lui générant un id
// retourner en JSON la todo avec le nouvel id

// app.post('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
