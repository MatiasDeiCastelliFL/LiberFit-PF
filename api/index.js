const server =require('./src/app.js')

const {conn} =require('./src/db.js')

server.listen(server.get('port'), () => {
	console.log("server is running on port " + server.get('port'));
});
conn.sync({ force:false }).then(() => {
	console.log("db is conect");
});
 