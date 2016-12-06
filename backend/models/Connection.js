const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  vkId: {
    type: String,
    required: true
  }
});

connectionSchema.methods.toGraphQL = function () {
  const {
    _id,
    vkId,
    firstName,
    lastName
  } = this;

  return {
    id: _id,
    vkId,
    firstName,
    lastName
  }
};

module.exports = mongoose.model('Connection', connectionSchema);
