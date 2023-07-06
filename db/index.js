const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://127.0.0.1:27017/image-upload-challenge';

mongoose
	.connect(MONGO_URI)
	.then((response) => {
		const dbName = response.connections[0].name;
		console.log(`Connected to DB: ${dbName}`);
	})
	.catch((err) => {
		console.error(`Error connecting to Mongo: ${err}`);
	});
