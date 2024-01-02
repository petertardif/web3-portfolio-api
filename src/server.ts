import app from './app';

// Start the server
const port: number = parseInt(process.env.PORT || '3000', 10);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
