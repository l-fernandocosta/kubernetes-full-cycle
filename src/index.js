const express = require('express');

const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.send("<h1>HELLO FULLCYCLE !!!! THIS IS THE V3</h1>");
});

app.listen(port, () => {
  console.log(`listen on ${port}`)
});