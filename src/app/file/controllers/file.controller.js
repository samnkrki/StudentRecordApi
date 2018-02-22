import multer from 'multer';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var dir = './uploads';
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

function uploadImage(req, res, next) {
    let upload = multer({
        storage,
    }).single('file');

    upload(req, res, function (err) {
        if (err) {
            next(err);
        }
        else {
            res.json(req.file);    
        }       
    })
}
export default {
    uploadImage
}