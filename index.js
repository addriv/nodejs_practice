const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:testMongo/testMongo');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: {type: String},
  todos: [
    {
      text: {type: String}
    }
  ]
});

userSchema.pre('save', next => {
  console.log('About to save!');
  const user = this;
  user.password = uuid.v4;
  next();
});

const User = mongoose.model('user', userSchema);
const email = 'test@test.com';
// const user = new User({
//   email
// });

const saveCb = err => {
  if (err) {
    console.log(err);
  }
  else {
    return console.log('User was saved!');
  }
};

// user.save(saveCb);

const text = 'This is a todo';

User.findOne({email}, (err, user) => {
  if (err) {
    return console.log(err);
  }
  if (!user) {
    console.log("Couldn't find user.");
  }
  const count = user.todos.push({text});

  user.save(saveCb);
});


