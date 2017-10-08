const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;

const User = require('../models/user');
const config = require('./config');

const jwtOptions = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
};

const jwtStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (error, user) => {
    if (error) {return done(error, false);}
    if (user){
      done(null, user);
    } else {
      done(null, false);
    };
  });
});

passport.use(jwtStrategy);