const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const config = require('./config');

const localOptions = {
  usernameField: 'email'
};

const localStrategy = new LocalStrategy(localOptions, (email, password, done) => {
  //Verify this username and password
  User.findOne({email}, (error, user) => {
    if (error) {return done(error);}
    if (!user) {return done(null, false);}
    user.comparePassword(password, (error2, isMatch) => {
      if (error2) { return done(error2); }
      if (!isMatch) { return done(null, false); }      
      return done(null, user);
    });
  });
});

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
    }
  });
});

passport.use(jwtStrategy);
passport.use(localStrategy);