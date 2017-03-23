var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    minlength: 7,
    trim: true
  },
  password: {
    type: String,
    default: 'Admin@123'
  }
});


module.exports = {
  Users
};