const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const validateEmail = email => {
  return (/\S+@S+\.\S+/).test(email);
};

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: 'Email address is requird',
    validate: [validateEmail, 'Please enter a valid email']
  },
  password: {
    type: String
  }
});

export default mongoose.model('user', userSchema);