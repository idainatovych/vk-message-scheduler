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
  return {
    id: this._id,
    title: this.title,
    recipient: this.recipient,
    date: this.date,
    repeatEveryDay: this.repeatEveryDay,
    repeatEveryWeek: this.repeatEveryWeek
  }
};

module.exports = mongoose.model('Task', taskSchema);
