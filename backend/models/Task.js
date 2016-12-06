const mongoose = require('../mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: 'Connection',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  repeatEveryDay: Boolean,
  repeatEveryWeek: Boolean
});

taskSchema.methods.toGraphQL = function () {
  const {
    _id,
    title,
    recipient,
    date,
    repeatEveryDay,
    repeatEveryWeek
  } = this;

  return {
    id: _id,
    title,
    recipient,
    date,
    repeatEveryDay,
    repeatEveryWeek
  }
};

module.exports = mongoose.model('Task', taskSchema);
