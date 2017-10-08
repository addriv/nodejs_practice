const AuthenticationController = require('../controllers/users_controller');

const router = require('express').Router();

const protectedRoute = (req, res, next) => {
  res.send("Here's the secret!");
};

router.route('/protected')
  .get(protectedRoute);

router.route('/signup')
  .post(AuthenticationController.signup);
  
export default router;