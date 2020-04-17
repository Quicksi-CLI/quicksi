import { Router } from 'express';
import { getProfile, login, signUp } from '../controllers/auth.controller';
import { Validators } from '../../utils/validators';
import { isAuthenticated } from '../middlewares/auth.middleware';
import { controllerContainer } from '../../containers/controller.container';

export const router: Router = Router();

router.get('/', (req, res) => {
    res.json('Auth working!')
});

// @METHOD: POST
// @PATH: /api/auth/register
// @DESC: create new user to database
// @ACCESS: public
router.post('/register', Validators.getSignUpValidators(), controllerContainer(signUp));

// @METHOD: POST
// @PATH: /api/auth/login
// @DESC: login the user
// @ACCESS: public
router.post('/login', Validators.getLoginValidators(), controllerContainer(login));

// @METHOD: GET
// @PATH: /api/auth/me
// @DESC: fetching the user profile
// @ACCESS: private
router.get('/me', isAuthenticated, getProfile);