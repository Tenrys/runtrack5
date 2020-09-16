const { Router: ExpressRouter } = require("express");

class Router extends ExpressRouter {}
for (const method of ["get", "post", "put", "patch", "delete"]) {
	const superMethod = Router.__proto__[method];
	Router.__proto__[method] = function (path, controllerMethod) {
		superMethod.call(this, path, controllerMethod.bind(controllerMethod.controller));
	};
}

const fs = require("fs");
const path = require("path");

module.exports = app => {
	const main = new Router();

	const { UserController } = app.controllers;

	main.get("/", UserController.index);

	app.use("/", main);

	for (const item of fs.readdirSync(__dirname)) {
		const filePath = path.join(__dirname, item);
		const stats = fs.statSync(filePath);
		if (stats.isFile() && path.extname(filePath) == ".js" && __filename != filePath) {
			require(filePath)(app);
		}
	}

	return main;
};
module.exports.Router = Router;
