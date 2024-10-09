import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        reuired: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['seeker', 'recruiter'],
        reuired: true
    },
    profile: {
        bio: {type: String},
        skills: [{type: String}],
        resume: {type: String}, // URL to resume file
        resumeOriginalName: {type: String},
        company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
        profilePhoto: {
            type: String,
            default: ""
        }
    },
},
{timestamps: true}
)

export const User = mongoose.model('User', userSchema)