const fs = require('fs');
const express = require('express');
const date_fns =  require('date-fns');
require('dotenv').config({path: __dirname + '/.env'});

const app = express();
const port = 3333;




function readTxt() {

  const text =  fs.readFileSync(`myfamily/family.txt`, 'utf-8',(err, data) => {
    if(err) {
      console.error(err);
    }

    return data; 
  })

  return text;
}

let startedAt =  new Date();

function Healthz() {
  
}
app.get('/', (req, res) => {
  res.send(`${process.env['NAME']}}`);
});

app.get('/configmap',  (req, res) => {
  const text =  readTxt();
  return res.json({family: text});
})

app.get('/secret',  (req, res) => {
  const user =  process.env['USER'];
  const password = process.env['PASSWORD'];

  return res.send(`Hey, i'm ${user} and my secret password is ${password}, thanks fsociety, for keep my safe..  `)
})

app.listen(port, () => {
  console.log(`listen on ${port}`)
});
