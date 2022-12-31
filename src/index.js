const fs = require('fs');
const express = require('express');
require('dotenv').config({path: __dirname + '/.env'});

const app = express();
const port = 3333;


app.get('/', (req, res) => {
  res.send(`${process.env['NAME']}}`);
});

 function readTxt() {

  const text =  fs.readFileSync(`myfamily/family.txt`, 'utf-8',(err, data) => {
    if(err) {
      console.error(err);
    }

    return data; 
  })

  return text;
}



app.get('/configmap',  (req, res) => {
  const text =  readTxt();
  return res.json({family: text});
})



app.listen(port, () => {
  console.log(`listen on ${port}`)
});
