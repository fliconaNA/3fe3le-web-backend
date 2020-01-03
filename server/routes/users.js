const express = require('express');
const User = require('../models/user')
const bc = require('bcrypt');
const _ = require('underscore')
const fkr = require('faker')
const app = express();



app.get('/users', (req, res) => {

  User.find({})
    .exec( (err, users)=>{
      if (err) {
        return res.status(400).json({
          ok:false,
          err
        });
      }

      res.status(200).json({
        ok: true,
        users
      });
    })

  
})

app.post('/users', (req, res) => {

  // let  name= fkr.name.findName();
  // let  email= fkr.internet.email() ;
  // let  password= bc.hashSync(fkr.internet.password(),10) ;
  // let  role= 'USER_ROLE';

  let body = req.body;
  let user = new User({
    name: body.name,
    email: body.email,
    password: bc.hashSync(body.password,10) ,
    role: body.role

    // name,
    // email,
    // password,
    // role
  
  });
  // console.log('faker user',user);

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok:false,
        err
      })
    }

    res.status(201).json({
      ok: true,
      userDB
    })
  })
})

app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name','email','img','role','status']) ;

  
  User.findByIdAndUpdate( id, body, {new: true, runValidators:true}, (err, userDB) =>{

    if (err) {
      return res.status(400).json({
        ok:false,
        err
      })
    }
    
    res.json({
      ok: true,
      userDB
    });
  })
})

app.delete('/users/:id', (req, res) => {
  res.send('delete users');
})

module.exports = app