const UsersController = require('../controllers/users_controller');
const passport = require('passport');
const passportService = require('./passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});
const router = require('express').Router();

// Auth Routes
// ---------------------------------------------------------------------
router.route('/signup')
.post(UsersController.signup);

router.route('/signin')
.post([requireSignin, UsersController.signin]);

// xxx Routes
// ---------------------------------------------------------------------

// router.route('/protected')
//   .get(requireAuth, protectedRoute);

module.exports =  router;