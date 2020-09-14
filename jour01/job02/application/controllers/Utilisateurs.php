<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Utilisateurs extends CI_Controller {
	public function __construct() {
		parent::__construct();
		$this->load->model('Utilisateurs_model');
		$this->load->helper('url');
	}
	public function index() {
		$this->load->view('layout', [
			"title" => "Liste d'utilisateurs",
			"view" => $this->load->view('users/request', [
				"users" => $this->Utilisateurs_model->request()
			], true)
		]);
	}
	public function create() {
		if ($data = array_filter($this->input->post(["firstname", "lastname", "email"]))) {
			$this->Utilisateurs_model->create($data);
			return redirect("utilisateurs");
		}

		$this->load->view('layout', [
			"title" => "Ajouter un utilisateur",
			"view" => $this->load->view('users/create', null, true)
		]);
	}
	public function update($id) {
		if ($data = array_filter($this->input->post(["firstname", "lastname", "email"]))) {
			var_dump($data);
			$this->Utilisateurs_model->update($data + ["id" => $id]);
			return redirect("utilisateurs");
		}

		$this->load->view('layout', [
			"title" => "Modifier un utilisateur",
			"view" => $this->load->view('users/update', $this->Utilisateurs_model->request($id), true)
		]);
	}
	public function delete($id) {
		if ($this->input->method(true) == "POST") {
			$this->Utilisateurs_model->delete($id);
		}
		return redirect("utilisateurs");
	}
}