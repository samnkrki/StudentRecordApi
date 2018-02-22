import express from 'express'
import expressJwt from 'express-jwt'
var guard = require('express-jwt-permissions')()

import config from './../../config/config'
import StudentController from './controllers/student.controller'

const router = express.Router()

router.route('/')
    .post(expressJwt({ secret: config.jwtSecret }), guard.check('admin'), StudentController.createRecord)
    .get(expressJwt({ secret: config.jwtSecret }),StudentController.showAllRecords)

router.route('/:recordId')
    .put(expressJwt({ secret: config.jwtSecret }), guard.check('admin'), StudentController.updateInfo)
    .delete(expressJwt({ secret: config.jwtSecret }), guard.check('admin'), StudentController.deleteRecord)
    .get(expressJwt({ secret: config.jwtSecret }),StudentController.showProfile)


export default router