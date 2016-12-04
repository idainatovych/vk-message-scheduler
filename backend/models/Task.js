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

module.exports = mongoose.model('Task', taskSchema);
