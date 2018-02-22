import express from 'express';
import AuthController from './controllers/auth.controller';
import expressJwt from 'express-jwt'
import config from '../../config/config';

const router = express.Router();

router.route('/register')
    .post(AuthController.register);

router.route('/login')
    .post(AuthController.login);


export default router;