const { Router } = require("./");

module.exports = app => {
	const { UserController } = app.controllers;

	const users = new Router();

	users.get("/", UserController.index);
	users.get("/get", UserController.index);

	users.get("/add", UserController.createForm);
	users.post("/add", UserController.create);

	users.get("/update/:id", UserController.updateForm);
	users.put("/update/:id", UserController.update);

	users.delete("/delete/:id", UserController.delete);

	app.use("/users", users);

	return users;
};
