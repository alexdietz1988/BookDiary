const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    username: {
        type: String,
        required: [true, 'Username cannot be empty'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email cannot be empty!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password cannot be empty!']
    },
    avatar: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;