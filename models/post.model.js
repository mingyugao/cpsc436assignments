const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  edited: {
    type: Boolean
  },
  upvotes: {
    type: Number
  }
}, {
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  }
});

module.exports = mongoose.model('Post', Post);
