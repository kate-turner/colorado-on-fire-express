const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');

router.post('/login', async (req, res) => {
  console.log(req.session, ' this is session')


  try {
    const createdPosts = await Users.create(req.body); //validation that user is logged in if they want to make a comment
    //this is a query
    req.session.logged = true;
    req.session.username = req.body.username;


    res.json({
      status: 200,
      data: 'login win'
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
