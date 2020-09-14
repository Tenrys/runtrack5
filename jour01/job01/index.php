<?php

$userController = require_once("controllers/Utilisateurs.php");

if (isset($_GET["page"]) && $_GET["page"] == "addUser") {
	$userController->addUser();
} else {
	$userController->getUsers();
}