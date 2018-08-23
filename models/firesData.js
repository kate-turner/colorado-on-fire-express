const mongoose = require('mongoose');


const firesDataSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  long: Number
});



module.exports = mongoose.model('FiresData', FiresDataSchema);
