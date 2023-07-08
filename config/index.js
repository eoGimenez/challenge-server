const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
	app.set('trust proxy', 1);

	const FRONT_END_LOCAL = process.env.ORIGIN_LOCAL || 'http://localhost:3000';

	app.use(
		cors({
			credentials: true,
			origin: FRONT_END_LOCAL,
		})
	);

	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
};
