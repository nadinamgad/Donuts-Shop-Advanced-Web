const mongoose = require('mongoose');
const {isValidPhoneNumber}= require('libphonenumber-js');
const userSchema = new mongoose.Schema({
   firstName: {
        type: String,
        required: true,
      },
   lastName: {
        type: String,
        required: true,
    },
   phoneNumber:{
      type: String,
      required:true,
      validate: {
        validator: function(value) {
          return isValidPhoneNumber(value, 'EG'); 
        },
        message: 'Please enter a valid Egyptian phone number',
      },
    },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
        validator: function(value) {
          // Custom validation logic
          return value.length >= 6; // Return true if the value has at least 6 characters
        },
        message: 'Password must have at least 6 characters'
      }
  },

  role:
  {
    type:Number,
    default:0,
  },
 
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;