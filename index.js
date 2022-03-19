var http = require("http");

http.createServer(function (request, response) {
	response.writeHead(200,{'Content-Type' : 'text/plain'});
	
	response.end('Hello World\n');
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => {
    console.log(`app is running on port ${ PORT }`);
});
})

console.log('Server running at http://127.0.0.1:8080/')

