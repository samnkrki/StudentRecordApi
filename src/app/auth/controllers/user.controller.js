import User from './../models/user.model';

//list all the users in the system(for admin)
function listUsers(req, res, next) {
    User.find({})
        .then(result => {
            res.json(result)
        })
        .catch(e => next(e))
}

//update user type
function update(req, res, next) {

    User.findById(req.params.id)
        .then(user => {
            if (req.body.userType)
                user.userType = req.body.userType

            return user.save();

        })
        .then(user => res.json(user))
        .catch(e => next(e));
}


export default {
    listUsers,
    update
}