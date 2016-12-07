const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/SCHEDULER_APP');

// Use native promises instead of deprecated `mpromise`
mongoose.Promise = global.Promise;

module.exports = mongoose;
