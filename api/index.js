

const server =require('./src/app.js')

const {conn} =require('./src/db.js')


conn.sync({force:true}).then(() => {
	server.listen(server.get('port'), () => {
		console.log("server is running on port " + server.get('port'));
	});
});
