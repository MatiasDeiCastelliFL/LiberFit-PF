import server from './src/app.js'
import dotenv from 'dotenv'
dotenv.config()
const { PORT } = process.env


server.listen(PORT, () => {
	console.log("server is running on port " + PORT);
});



