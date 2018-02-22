import express from 'express';
import FileController from './controllers/file.controller';

const router = express.Router();


router.route('/profileImage')

    /** POST /api/file/profileImage */
    .post(FileController.uploadImage);


export default router;