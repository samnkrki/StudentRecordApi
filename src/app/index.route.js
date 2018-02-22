import express from 'express'
import AuthRoute from './auth/auth.route'
import StudentRoute from './student/student.route'
import FileRoute from './file/file.route'
import UserRoute from './auth/user.route'
const router = express.Router()

router.route('/status-check')
    /** GET check the status of our api. */
    .get((req, res, next) => {
        res.json({
            message: 'all good!'
        })
    })
router.use('/auth', AuthRoute)
router.use('/user', UserRoute)
router.use('/student', StudentRoute)
router.use('/file', FileRoute)

export default router