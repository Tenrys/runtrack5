class Controller {
	constructor(app) {
		const { database } = app;
		const { models } = database;
		this.app = app;
		this.database = database;
		this.models = models;
	}
}

const path = require("path");
const fs = require("fs");

module.exports = app => {
	app.controllers = {};
	for (const item of fs.readdirSync(__dirname)) {
		const filePath = path.join(__dirname, item);
		const stats = fs.statSync(filePath);
		if (stats.isFile() && path.extname(filePath) == ".js" && __filename !== filePath) {
			const Controller = require(filePath);
			const controller = new Controller(app);
			for (const property of Object.getOwnPropertyNames(Controller.prototype)) {
				if (property === "constructor") continue;
				controller[property].controller = controller;
			}
			app.controllers[Controller.name] = controller;
		}
	}
};
module.exports.Controller = Controller;
