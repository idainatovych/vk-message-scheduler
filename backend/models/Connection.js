const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: trueß
  }
});

module.exports = mongoose.model('Connection', connectionSchema);
