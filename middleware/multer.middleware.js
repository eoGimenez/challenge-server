const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: './files/images',
	imagename: (req, file, cb) => {
		cb(null, `${Date.now()} - ${file.originalname}`);
	},
});

const upload = multer({
	storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: (req, file, cb) => {
		const typeAcceptes = /svg|png|jpeg|jpg/;
		const fileExt = path.extname(file.originalname).toLocaleLowerCase();
		if (typeAcceptes.test(fileExt)) {
			cd(null, true);
		} else {
			cd(new Error('File type doesnt supported, please use: .svg, .png, .jpeg, .jpg'));
		}
	},
});

module.exports = upload;
