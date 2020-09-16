const { Controller } = require("./");

class UserController extends Controller {
	constructor(app) {
		super(app);
		this.User = this.models.User;
	}

	async index(req, res) {
		res.render("users/index", { title: "Accueil", users: await this.User.query() });
	}

	async create(req, res) {
		const { firstname, lastname, email } = req.body;

		await this.User.query().insert({
			firstname,
			lastname,
			email,
		});

		res.redirect("/");
	}

	async update(req, res) {
		const { id } = req.params;
		const { firstname, lastname, email } = req.body;

		await this.User.query().findById(id).patch({
			firstname,
			lastname,
			email,
		});

		res.sendStatus(200).end();
	}

	async delete(req, res) {
		const { id } = req.params;

		await this.User.query().deleteById(id);

		res.sendStatus(200).end();
	}

	createForm(req, res) {
		res.render("users/create", { title: "Ajouter un utilisateur" });
	}

	async updateForm(req, res) {
		const { id } = req.params;

		res.render("users/update", {
			title: "Modifier un utilisateur",
			user: await this.User.query().findById(id),
		});
	}
}

module.exports = UserController;
