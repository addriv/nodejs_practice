const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

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

userSchema.pre('save', next => {
  const user = this;
  if (user.isNew || user.isModified('paswword')){
    bcrypt.genSalt(10, (error, salt) => {
      if (error) {return next(error);}
      bcrypt.hash(user.password, salt, null, (error2, hash) => {
        if (error) {return next(error2);}
        user.password = hash;
        next();
      });
    });
  }
});

export default mongoose.model('user', userSchema);