var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');
var mongoosePaginate = require('mongoose-paginate');

var addressSchema = new mongoose.Schema({
    street: [{type: String}],
    city: String,
    countryId: String,
    locality: String,
    landmark: String,
    addressType: {type: String, default: "home"},
    postcode: String
}, {timestamps: true});

var userSchema = new mongoose.Schema({
    email: {type: String, default: ''},
    isEmailVerified: Boolean,

    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,

    mobileNumber: {type: String, unique: true},
    mobileVerificationOTP: String,
    mobileVerificationExpires: Date,
    isMobileVerified: Boolean,

    deviceTokens: [{fcm: String, platform: String}],

    name: {type: String, default: ''},
    gender: {type: String, default: ''},
    dob: {type: Date},
    picture: {type: String, default: ''},

    status: {type: String, default: "active"},

    address: [addressSchema],

}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

/**
 * Password hash middleware.
 */
userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.plugin(mongoosePaginate);

var User = mongoose.model('User', userSchema);


module.exports = User;
