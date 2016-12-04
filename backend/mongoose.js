const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SCHEDULER_APP');

module.exports = mongoose;
