require('./config/config');

const express = require('express');
const mg = require('mongoose');

const app = express();

const bp = require('body-parser');

app.use(bp.urlencoded({extended:false}));

app.use(bp.json());

app.use(require('./routes/users'))

mg.connect(process.env.URLDB,{ useNewUrlParser: true,useUnifiedTopology: true }, (err, res) =>{
  if(err) throw err;
  console.log('Data base is ONLINE');
})

app.listen(process.env.PORT, () => {
  console.log('Listen port 3000');
})