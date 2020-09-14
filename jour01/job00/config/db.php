<?php

$host = "localhost";
$dbname = "runtrack5";
$user = "root";
$pass = "";

$db = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);