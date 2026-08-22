const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000;


// Adds headers: Access-Control-Allow-Origin
app.use(cors())
app.use(express.json());


let todos = [
 { id: 1, text: "Learn Express", completed: false },
 { id: 2, text: "Build a REST API", completed: false }
];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => { 
   const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };

  todos.push(newTodo);
  res.send(todos)
}); 

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});