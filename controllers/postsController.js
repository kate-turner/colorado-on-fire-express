const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');
const Posts = require('../models/posts.js');

// Create index route
 router.get('/', async (req, res) => {
  console.log(req.session, ' i see everything')
     try  {
      const allPosts = await Posts.find();

      res.json({
        status: 200,
        data: allPosts
      })

    } catch (err){
      res.send(err)
    }
});

router.post('/', async (req, res) => {
  console.log("******************************")
  console.log(req.session, " this is req.session in the post route")
  console.log("******************************")

    try {
      console.log(req.body, ' this is req.body');
      const createdPosts = await Posts.create(req.body);
    
      res.json({
        status: 200,
        data: createdPosts
      });
    
    } catch(err){
      console.log(err);
      res.json({
        status: 500,
        data: err
      })
    }
    });

router.get('/:id', async (req, res) => {

     try  {
        const foundPosts = await Posts.findById(req.params.id);
        res.json({
          status: 200,
          data: foundPosts
        });

      } catch (err){
        res.send(err);
      }
});

router.put('/:id', async (req, res) => {

  try {
    console.log('trying to update a post')
    console.log(req.body)
    const updatedPosts = await Posts.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: 200,
      data: updatedPosts
    });
  } catch(err){
    console.log('problem with updating')
    res.send(err)
  }
});

// Delete route
router.delete('/:id', async (req, res) => {

  try {
     const deletedPosts = await Posts.findByIdAndRemove(req.params.id);
      res.json({
        status: 200,
        data: deletedPosts
      });
  } catch(err){
    res.send(err);
  }
});

module.exports = router;
