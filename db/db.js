const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/hotLikeFire', { useNewUrlParser: true });

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/hotLikeFire';
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
  console.log('Mongoose is disconnected')
});
