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
  return {
    id: this._id,
    vkId: this.vkId,
    firstName: this.firstName,
    lastName: this.lastName
  }
};

module.exports = mongoose.model('Connection', connectionSchema);
