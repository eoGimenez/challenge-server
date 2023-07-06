const app = require('./app');
const PORT = process.env.PORT;

app.listem(PORT, () => {
	console.log(`Server listening PORT: ${PORT}`);
});
