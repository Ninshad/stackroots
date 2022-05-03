const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    hash_password: {
        type: String,
        required: true,
        min: 8,
        max: 20
    }

},{timestamps: true});

userSchema.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`
});

// compare password

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password)
    }
}


module.exports = mongoose.model('User', userSchema);