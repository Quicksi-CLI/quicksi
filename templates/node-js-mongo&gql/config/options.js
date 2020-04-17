var _ = require('lodash');

var options = {
    appVersion: '0.0.1',
    mobileNumberLocale: 'en-IN',
    minPasswordLength: 6,
    devicePlatforms: {
        ANDROID: 'android',
        IOS: 'ios'
    },
    user: {
        status: {
            ACTIVE: 'active',
            DISABLED: 'disabled'
        }
    },
    generateOtp: () => {
        return Math.floor(1000 + Math.random() * 9000);
    }
};
module.exports = options;