const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: { type: String, required: true }, 
  lastName: { type: String, required: true }, 
  username: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 }, 
  retweets: { type: Number, default: 0 },
  comments: [{ 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }] 
});

module.exports = mongoose.model('Tweet', tweetSchema);
