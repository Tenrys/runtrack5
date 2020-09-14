<?php

require_once(__DIR__ . "/../config/db.php");

class Utilisateurs_model {
    public $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getUsers() {
        $stmt = $this->db->prepare("SELECT * FROM utilisateurs;");
        $stmt->execute();
        $users = $stmt->fetchAll();
        return $users;
    }

    public function addUser($firstname, $lastname, $email) {
        $stmt = $this->db->prepare("INSERT INTO utilisateurs (firstname, lastname, email) VALUES (?, ?, ?)");
        $success = $stmt->execute([$firstname, $lastname, $email]);
        return [$success, $stmt->errorInfo()];
    }
}

return new Utilisateurs_model($db);