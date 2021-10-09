const express = require('express');
const { port } = require('./config.json');
const data = require('./DummyData');

const app = express();
var bodyParser = require('body-parser')
const jsonParser = bodyParser.json();


app.get('/data', (req, res) => {
  res.json(data);
});

app.post('/data', jsonParser, (req, res) => {
  data.push(req.body);
  res.json({ message: "Item has beed aded", fullItems: data})
});

app.delete('/data/:id', (req, res) => {
  const result = data.filter(item => (item.id != req.params.id));
  res.json({ message: "Item deleted, this is updated data", data: result });
});

app.listen(port, () => console.log(`server is listening on: ${port}`));


