<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Project;

class MyEntrepriseController extends AbstractController {
    /**
     * @Route("/", name="home")
     */
    public function home() {
        return $this->render('myEntreprise/home.html.twig');
    }

    /**
     * @Route("/myEntreprise", name="myEntreprise")
     */
    public function index() {
        return $this->render('myEntreprise/index.html.twig', [
            "projects" => $this->getDoctrine()->getRepository(Project::class)->findAll()
        ]);
    }

    /**
     * @Route("/myEntreprise/project/{id}", name="project_page")
     */
    public function projectPage($id) {
        return $this->render('myEntreprise/projectPage.html.twig', [
            "project" => $this->getDoctrine()->getRepository(Project::class)->find($id)
        ]);
    }
}