const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write(fs.readFileSync("index.html"));
	res.end();
});

server.listen(3000, () => {
	console.log(`Server listening at http://127.0.0.1:3000`);
});
