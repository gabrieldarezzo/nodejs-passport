const mongoose = require('mongoose');
require('mongoose-type-email');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    username : {
        type: String,
        required: true,
    },
    email : {
        type: mongoose.SchemaTypes.Email,        
        required: true,
    },
    password : {
        type: String,
        required: true,
    }
}, {    
    timestamps: true,
});

UserSchema.methods.genHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null)
}

UserSchema.methods.validatePassword = (password, passwordUser, cb) => {
    return bcrypt.compare(password, passwordUser, cb);
}

module.exports = mongoose.model('users', UserSchema);