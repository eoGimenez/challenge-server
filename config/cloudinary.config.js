const cloudinary = require('cloudinary').v2;
const { CloudinatyStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinatyStorage({
	cloudinary,
	params: {
		allowed_formats: ['svg', 'png', 'jpeg', 'jpg'],
		folder: 'image-uploader-challenge',
	},
});

module.exports = multer({ storage });
