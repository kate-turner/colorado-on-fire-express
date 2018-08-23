const mongoose = require('mongoose');


const PostsSchema = new mongoose.Schema({
  title: String,
  body: String
});

module.exports = mongoose.model('Posts', PostsSchema);
