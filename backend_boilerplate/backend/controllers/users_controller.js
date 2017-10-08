const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../services/config');

console.log(config);
console.log(config.secret);

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    iat: timestamp
  }, config.secret);
};

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password){
    return res.status(422).send({error: 'Error. Must have email and password'});
  }

  User.findOne({email}, (error, existingUser) => {
    if (error) {return next(error);}
    if (existingUser) {return res.status(422).json({error: 'Email Taken'});}
    const user = new User({
      email: email,
      password: password
    });
    user.save(error2 => {
      if (error2) {return next(error2);}
      res.json({user_id: user.id, token: tokenForUser(user)});
    });
  }); 

};

exports.signin = (req, res, next) => {
  const user = req.user;
  res.send({token: tokenForUser(user), user_id: user._id});
};
