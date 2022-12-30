const express = require('express');

const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send("<h1>HELLO FULLCYCLE !!!! HERE WE'ARE</h1>");
});

app.listen(port, () => {
  console.log(`listen on ${port}`)
});