const express = require('express');
const { port } = require('./config.json');
const data = require('./DummyData');

const app = express();

// app.get('/example', (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.json({ message: 'Hi, from the server' })
// });


app.get('/data', (req, res) => {
  res.json(data);
});

app.post('/:newItem', (req, res) => {
  //TODO add new item to the list
  //data.push(req.params.newItem);
  res.json({ message: 'Hi,post from the server' + req.params.newItem })
});


app.put('/', (req, res) => {
  res.json({ message: 'Hi,put from the server' })

});

app.delete('/data/:id', (req, res) => {
  const result = data.filter(item => (item.id != req.params.id));
  res.json({ message: "Item deleted, this is updated data", data: result });
});

app.listen(port, () => console.log(`server is listening on: ${port}`));

//Non relevant, amnon asked for us to filter on the client
// app.get('/data/:filterParam/', (req, res) => {
//   const companyName = req.params.filterParam;
//   const finalData = [];

//   for(key in data) {  
//      if (data[key].listedCompany == companyName) finalData.push(data[key]); 
//     }

//   res.json({ 
//     // message: data[0].listedCompany,
//     message: finalData,

//   })
// });
