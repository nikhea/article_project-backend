const http = require('http');
app = require('./app');
server = http.createServer(app);
PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.log(`server has started on Port ${PORT}`);
});
