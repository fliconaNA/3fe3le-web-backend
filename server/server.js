require('./config/config');

const express = require('express');

const app = express();

const bp = require('body-parser');

app.use(bp.urlencoded({extended:false}));

app.use(bp.json());

app.get('/', (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'All fine'
  });
})

app.post('/products', (req, res) => {
  let body = req.body;
  if ( body.name === undefined ) {
    res.status(400).json({
      ok:false
    }) 
  }else {
    res.status(201).json({
      ok:true,      
    });
  }
  })

app.put('/products', (req, res) => {
  res.send('put products');
})

app.delete('/products', (req, res) => {
  res.send('delete products');
})

app.listen(process.env.PORT, () => {
  console.log('Listen port 3000');
})