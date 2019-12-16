const express = require('express');
const User = require('../models/user')

const app = express();



app.get('/', (req, res) => {
  res.status(200).json({
    ok: true,
    msg: 'Users'
  });
})

app.post('/users', (req, res) => {
  let body = req.body;

  let user = new User({
    name: body.name,
    email: body.email,
    password: body.password,
    role: body.role,

  });

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok:false,
        err
      })
    }

    res.status(201).json({
      ok: true,
      user: userDB
    })
  })
})

app.put('/users', (req, res) => {
  res.send('put users');
})

app.delete('/users', (req, res) => {
  res.send('delete users');
})

module.exports = app