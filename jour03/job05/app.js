const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sassMiddleware = require("node-sass-middleware");

module.exports = async () => {
	const app = express();

	// view engine setup
	app.set("views", path.join(__dirname, "views"));
	app.set("view engine", "pug");

	app.use(logger("dev"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser());
	app.use(
		sassMiddleware({
			src: path.join(__dirname, "public"),
			dest: path.join(__dirname, "public"),
			includePaths: [path.join(__dirname), "node_modules"],
			indentedSyntax: false, // true = .sass and false = .scss
			sourceMap: true,
		})
	);
	app.use(express.static(path.join(__dirname, "public")));

	// functionality
	await require("./database")(app);
	require("./controllers")(app);
	require("./routes")(app);

	// catch 404 and forward to error handler
	app.use(function (req, res, next) {
		next(createError(404));
	});

	// error handler
	app.use(function (err, req, res, next) {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get("env") === "development" ? err : {};

		// render the error page
		res.status(err.status || 500);
		res.render("error");
	});

	return app;
};
