const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const option = require('../../config/options');
const moment = require('moment');

const includeAccessToken = (user) => {
    const payload = {id: user.id, username: user.username};
    let userObject = user.toJSON();
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
    userObject['token'] = token;

    return userObject;
};

class UserController {

    constructor(model) {
        this.model = User;
    }

    // this will find a single record based on username and return it.
    auth(options) {
        return this.model.findOne({mobileNumber: options.mobileNumber})
            .exec()
            .then((user) => {

                if (!user) {
                    return new Error('Invalid login credentials.');
                }

                if (bcrypt.compareSync(options.password, user.password)) {
                    return includeAccessToken(user);
                } else {
                    return new Error('Invalid login credentials.');
                }

            }).catch(error => {
                return error;
            });

    }

    // this will find all the records in database and return it
    index() {
        return this.model.find()
            .sort('createdAt')
            .exec()
            .then(records => {
                return records;
            })
            .catch(error => {
                return error;
            });
    }

    // this will find a single record based on id and return it.
    single(options) {
        return this.model.findOne({_id: options.id})
            .exec()
            .then(record => {
                return record;
            })
            .catch(error => {
                return error;
            });
    }

    // this will insert a new record in database
    create(data) {
        const record = new this.model(data);
        return record.save()
            .then((user) => {

                var otp = option.generateOtp();

                user.mobileVerificationOTP = otp;
                var todayDate = new Date();
                todayDate.setDate(todayDate.getDate() + 1); // OTP expiry 1 day
                user.mobileVerificationExpires = todayDate;

                var message = user.mobileVerificationOTP + " is the OTP for your new account";

                return user.save()
                    .then(updated => {
                        return includeAccessToken(updated);
                    })
                    .catch((error) => {
                        return error;
                    });


            })
            .catch((error) => {
                return error;
            });
    }

    // this will update existing record in database
    update(user, data) {
        return this.model.findOne({_id: user.id})
            .exec()
            .then((record) => {
                let mobileNumberModified = false;
                Object.keys(data).map(field => {
                    if (field == 'mobileNumber' && data[field] != user.mobileNumber) {
                        mobileNumberModified = true;
                    }

                    if (field == 'picture' && (!data[field] || data[field] == '' || data[field] == null ) ) {
                        data[field] = record.picture;
                    }
                    record[field] = data[field];
                });

                return record.save()
                    .then(user => {

                        if (mobileNumberModified) {
                            // Send OTP if mobileNumber changed
                            var otp = option.generateOtp();

                            user.mobileVerificationOTP = otp;
                            var todayDate = new Date();
                            todayDate.setDate(todayDate.getDate() + 1); // OTP expiry 1 day
                            user.mobileVerificationExpires = todayDate;

                            const message = user.mobileVerificationOTP + " is the OTP for your mobile number";

                            return user.save()
                                .then(updated => {
                                    return updated;
                                })
                                .catch((error) => {
                                    return error;
                                });
                        } else {
                            return user;
                        }
                    })
                    .catch((error) => {
                        return error;
                    });

            })
            .catch((error) => {
                return error;
            });
    }

    // this will insert a new record in database
    createAddress(user, data) {

        return this.model.findById(user.id)
            .exec()
            .then((record) => {

                if (!record) {
                    return new Error('Invalid request user does\'t exist.');
                }

                const address = record.address.create(data);
                record.address.push(address);

                return record.save()
                    .then((updated) => {
                        return address;
                    })
                    .catch((error) => {
                        return error;
                    });

            }).catch(error => {
                return error;
            });

    }


    // this will update existing record in database
    updateAddress(user, data) {

        return this.model.findOne({_id: user.id})
            .exec()
            .then((user) => {

               let address = user.address.id(data.id);

               if(!address) throw new Error("Address not found");

               delete data.id;
                Object.keys(data).map(field => {
                    address[field] = data[field];
                });

                return user.save()
                    .then(user => {
                        return address;
                    })
                    .catch((error) => {
                        return error;
                    });

            })
            .catch((error) => {
                return error;
            });
    }


    // this will delete the user address
    deleteAddress(user, data) {

        return this.model.findOne({_id: user.id})
            .exec()
            .then((user) => {

                user.address.pull(data.id)
                return user.save()
                    .then(user => {
                        return {message: "Address deleted successfully!"};
                    })
                    .catch((error) => {
                        return error;
                    });

            })
            .catch((error) => {
                return error;
            });
    }



}
;

const user_controller = new UserController();
module.exports = user_controller;
