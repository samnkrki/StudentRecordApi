import mongoose from 'mongoose'
import User from '../../auth/models/user.model';
var Schema = mongoose.Schema


var studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    image: {
        type: String,

    },
    dob: {
        type: String,

    },
    gender: {
        type: String,

    },
    roll: {
        type: String,

    },
    guardianName: {
        type: String,
        required: true
    },
    guardianNum: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }
}, {
    timestamps: true
})
export default mongoose.model('Student', studentSchema)