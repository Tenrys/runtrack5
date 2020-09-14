<?php

$model = require_once(__DIR__ . "/../models/Utilisateurs.php");

class Utilisateurs {
	public $model;

	public function __construct($model) {
		$this->model = $model;
	}

	public function getUsers() {
		$users = $this->model->getUsers();

		require(__DIR__ . "/../views/list-users.php");
	}

	public function addUser() {
		if (!empty($_POST)) {
			$firstname = $_POST["firstname"];
			$lastname = $_POST["lastname"];
			$email = $_POST["email"];;

			[$success, $error] = $this->model->addUser($firstname, $lastname, $email);

			if ($success) {
				header("Location: index.php?page=getUsers");
				return;
			}
		}

		require(__DIR__ . "/../views/add-user.php");
	}
}

return new Utilisateurs($model);