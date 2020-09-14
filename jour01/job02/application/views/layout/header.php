<nav class="navbar is-info is-spaced" role="navigation" aria-label="main navigation">
	<div class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item" href="<?= site_url('utilisateurs') ?>">
				Liste d'utilisateurs
			</a>

			<a class="navbar-item" href="<?= site_url('utilisateurs/create') ?>">
				Ajouter un utilisateur
			</a>
		</div>
	</div>
</nav>
<header class="hero is-small">
	<div class="hero-body">
		<div class="container">
			<h1 class="title"><?= $title ?></h1>
		</div>
	</div>
</header>