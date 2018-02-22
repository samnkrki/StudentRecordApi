import express from 'express';
import expressJwt from 'express-jwt'
import UserController from './controllers/user.controller';
import config from '../../config/config';

var guard = require('express-jwt-permissions')()

const router = express.Router();

router.route('/')
    .get(expressJwt({
        secret: config.jwtSecret
    }), guard.check('admin'), UserController.listUsers);

router.route('/:id')

    /** PUT /api/change user type(for admin only)use permissions */
    .put(expressJwt({
        secret: config.jwtSecret
    }), guard.check('admin'), UserController.update);


export default router;