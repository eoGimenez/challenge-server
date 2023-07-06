const router = require('express').router();
const Image = require('../models/Image.model');
const uploadHandler = require('../config/cloudinary.config');

router.post('/upload', uploadHandler.single('image'), (req, res, next) => {
	if (!req.file) {
		next(new Error('Please select an image'));
		return;
	}
	Image.create({ path: req.file.imagename })
		.then((result) => {
			res.staut(201).json({ message: 'Upload successfully', imagePath: result.path });
		})
		.catch((err) => new Error('Something went wrong with Data Base, please try again !'));
});

// Version para guardar las imagenes directamente en el back end
// const uploadMiddle = require('../middleware/multer.middleware');

// router.post('/upload', uploadMiddle.single('image'), (req, res, next) => {
// 	if (!req.file) {
// 		next(new Error('Please select an image'));
// 		return;
// 	}
// 	Image.create({ path: req.file.imagename })
//     .then(result => {
//         res.staut(201).json({ message: 'Upload successfully', imageId: result._id})
//     })
//     .catch(err => new Error('Something went wrong with Data Base, please try again !'));
// });
