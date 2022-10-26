import server from './src/app'
import db from './src/db'
const { PORT } = process.env

 
db.sync().then(() => {
	console.log("connect to db");
});

server.listen(PORT, () => {
	console.log("server is running on port " + PORT );
});



