<?php

class Utilisateurs_model extends CI_Model {
	public function __construct() {
		$this->load->database();
	}

	public function request($id = null) {
		if (isset($id)) {
			return $this->db->get_where("utilisateurs", ["id" => $id])->row_array();
		}

		return $this->db->get("utilisateurs")->result_array();
	}

	public function create($data) {
		$required = ["firstname", "lastname", "email"];
		$present = array_keys($data);
		if (count(array_intersect($present, $required)) < count($required)) {
			throw new Exception("Missing form fields: " . implode(", ", array_diff($required, $present)));
		}

		return $this->db->insert("utilisateurs", $data);
	}

	public function update($data) {
		$required = ["id", "firstname", "lastname", "email"];
		$present = array_keys($data);
		var_dump($required);
		var_dump($present);
		if (count(array_intersect($present, $required)) < count($required)) {
			throw new Exception("Missing form fields: " . implode(", ", array_diff($required, $present)));
		}

		return $this->db->replace("utilisateurs", $data);
	}

	public function delete($id) {
		return $this->db->delete("utilisateurs", [
			"id" => $id,
		]);
	}
}