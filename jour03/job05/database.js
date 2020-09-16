const { Model } = require("objection");
const Knex = require("knex");
const path = require("path");
const fs = require("fs");

module.exports = async app => {
	// Init database connection
	const database = Knex({
		client: "mysql",
		useNullAsDefault: true,
		connection: {
			host: "127.0.0.1",
			user: "root",
			password: "",
			database: "runtrack5",
		},
	});

	// Load models
	database.models = {};
	const modelsPath = path.join(__dirname, "models");
	for (const item of fs.readdirSync(modelsPath)) {
		const filePath = path.join(modelsPath, item);
		const stats = fs.statSync(filePath);
		if (stats.isFile() && path.extname(filePath) == ".js") {
			const model = require(filePath);
			database.models[model.name] = model;
		}
	}

	// Link all models to database
	Model.knex(database);

	// Initialize database if it doesn't exist
	if (!(await database.schema.hasTable("utilisateurs"))) {
		// I should use knex migration files
		// to do this. I create it here for simplicity.
		await database.schema.createTable("utilisateurs", table => {
			table.increments("id").primary();
			table.string("firstname");
			table.string("lastname");
			table.string("email");
		});
	}

	app.database = database;
};
