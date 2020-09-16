const http = require("http");
const fs = require("fs");
const path = require("path");

const paths = { "/": "index.html", "/listusers": "list-users.html", "/adduser": "add-user.html" };

const server = http.createServer((req, res) => {
	if ((filePath = paths[req.url])) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(fs.readFileSync(path.join(__dirname, filePath)));
		res.end();
	} else {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(fs.readFileSync(path.join(__dirname, "404.html")));
		res.end();
	}
});

server.listen(3000, () => {
	console.log(`Server listening at http://127.0.0.1:3000`);
});
