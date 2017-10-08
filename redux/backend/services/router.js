const UsersController = require('../controllers/users_controller');
const passport = require('passport');
const passportService = require('./passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const router = require('express').Router();

const protectedRoute = (req, res, next) => {
  res.send("Here's the secret!");
};

router.route('/protected')
  .get(requireAuth, protectedRoute);

router.route('/signup')
  .post(UsersController.signup);

router.route('/signin')
  .post(UsersController.signin);
  
module.exports =  router;