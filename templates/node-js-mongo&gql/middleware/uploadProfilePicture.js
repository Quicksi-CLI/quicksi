const multer = require('multer')
const multerS3 = require('multer-s3')

const path = require('path');
const mime = require('mime');
const crypto = require('crypto');
const sanitize = require('sanitize-filename');

const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_S3_REGION
});

const s3 = new AWS.S3();


// Profile Pic upload
const profilePictureCloudStorage = multerS3({
    s3: s3,
    bucket: process.env.AWS_PROFILE_IMAGE_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (request, file, ab_callback) {
        ab_callback(null, {fieldname: file.fieldname});
    },
    key: function (request, file, ab_callback) {

        // add hash to sanitized file name
        const filename = `${Date.now()}_${sanitize(
            file.originalname.replace(
                /[`~!@#$%^&*()_|+\-=÷¿?;:'",<>{}[]\\\/]/gi,
                '',
            ),
        )}`;

        var newFileName = Date.now() + "-" + filename;
        var fullPath = 'users/profile/' + newFileName;
        ab_callback(null, fullPath);
    },
});

const multerS3ProfilePictureUpload = multer({
    storage: profilePictureCloudStorage
}).single('picture');


const profilePictureUpload = (req, res, next) => {
    multerS3ProfilePictureUpload(req, res, () => {

        const file = req.file;

        if (!file || file.length === 0 || !file.key) {
            next()
            return
        }

        req.context['picture'] = file.location || '';
        next();
    })
}

module.exports  = profilePictureUpload;