import mongoose from 'mongoose'

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        default: 1,    // 1- User 2-admin.
    },
})

var User = mongoose.model('User', userSchema)

export default User