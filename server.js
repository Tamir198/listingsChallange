const express = require('express');
const { port } = require('./config.json');
const data = require('./DummyData');

var cors = require('cors')
const app = express();

app.use(cors());

var bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

app.post('/login/admin', jsonParser, (req, res) => {
  console.log(req.body);
  res.json({ isAdmin: req.body.name == "admin" && req.body.password == "123456" })
});

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


