import Student from './../models/student.model';
/**
 * Create a new record
 */

function createRecord(req, res, next) {
    let newStudent = new Student()
    newStudent.createdBy = req.user._id
    if (req.body.firstName) {
        newStudent.firstName = req.body.firstName
    }
    if (req.body.middleName) {
        newStudent.middleName = req.body.middleName
    }
    if (req.body.lastName) {
        newStudent.lastName = req.body.lastName
    }
    if (req.body.email) {
        newStudent.email = req.body.email
    }
    if (req.body.phone) {
        newStudent.phone = req.body.phone
    }
    if (req.body.image) {
        newStudent.image = req.body.image;
    }
    if (req.body.dob) {
        newStudent.dob = req.body.dob
    }
    if (req.body.gender) {
        newStudent.gender = req.body.gender
    }
    if (req.body.roll) {
        newStudent.roll = req.body.roll
    }
    if (req.body.guardianName) {
        newStudent.guardianName = req.body.guardianName
    }
    if (req.body.guardianNum) {
        newStudent.guardianNum = req.body.guardianNum
    }
    newStudent.save()
        .then(result => res.json(result))
        .catch(e => res.json(e))

}
/**
 * show all the existing records
 */
function showAllRecords(req, res, next) {
    Student.find({
            isDeleted: false
        })
        .sort({
            createdAt: 'descending'
        })
        .populate('createdBy')
        .then(result => {
            res.json(result)
        })
        .catch(e => res.json(e))

}


//show all records with input id for individual profile
function showProfile(req, res, next) {
    Student.find({
            _id: req.params.recordId
        })
        .populate('CreatedBy')
        .then(result => {
            res.json(result)
        })
        .catch(e => res.json(e))
}


//update records
function updateInfo(req, res, next) {
    Student.findById(req.params.recordId)
        .then(result => {
            if (req.body.firstName) {
                result.firstName = req.body.firstName
            }
            if (req.body.middleName) {
                result.middleName = req.body.middleName
            }
            if (req.body.lastName) {
                result.lastName = req.body.lastName
            }
            if (req.body.email) {
                result.email = req.body.email
            }
            if (req.body.phone) {
                result.phone = req.body.phone
            }
            if (req.body.image) {
                result.image = req.body.image
            }
            if (req.body.dob) {
                result.dob = req.body.dob
            }
            if (req.body.gender) {
                result.gender = req.body.gender
            }
            if (req.body.roll) {
                result.roll = req.body.roll
            }
            if (req.body.guardianName) {
                result.guardianName = req.body.guardianName
            }
            if (req.body.guardianNum) {
                result.guardianNum = req.body.guardianNum
            }
            return result.save();
        })
        .then(result => {
            res.json(result);
        })
        .catch(e => res.json(e))
}


//remove record
function deleteRecord(req, res, next) {

    Student.findById(req.params.recordId)
        .then(result => {
            result.isDeleted = true;
            return result.save();
        })
        .then(result => {
            res.json(result);
        })
        .catch(e => res.json(e))
}

export default {
    createRecord,
    showAllRecords,
    showProfile,
    updateInfo,
    deleteRecord,
}