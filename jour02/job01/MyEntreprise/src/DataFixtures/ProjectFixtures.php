<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Project;
use \Datetime;

class ProjectFixtures extends Fixture {
    public function load(ObjectManager $manager) {
        for ($i = 0; $i < 10; $i++) {
            $project = new Project();
            $project->setTitle("Article n°" . strval($i + 1));
            $project->setContent("<p>Un paragraphe random</p>");
            $project->setImage("http://placehold.it/350x150");
            $project->setCreatedAt(new DateTime());
            $manager->persist($project);
        }

        $manager->flush();
    }
}