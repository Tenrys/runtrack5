<main class="section">
	<div class="container">
		<?php if (isset($success) && $success == false) { ?>
		<div class="content">
			<p class="has-text-danger">Erreur lors de l'ajout dans la base de données</p>
			<?= var_dump($error) ?>
		</div>
		<?php } ?>
		<div class="columns is-centered">
			<div class="column is-narrow">
				<form method="POST">
					<div class="columns">
						<div class="column">
							<div class="field">
								<div class="label">Prénom</div>
								<div class="control">
									<input class="input" type="text" name="firstname" required minlength="2"
										maxlength="255" value="<?= $firstname ?>">
								</div>
							</div>
						</div>
						<div class="column">
							<div class="field">
								<div class="label">Nom</div>
								<div class="control">
									<input class="input" type="text" name="lastname" required minlength="2"
										maxlength="255" value="<?= $lastname ?>">
								</div>
							</div>
						</div>
					</div>
					<div class="columns">
						<div class="column">
							<div class="field">
								<div class="label">E-mail</div>
								<div class="control">
									<input class="input" type="email" name="email" required minlength="2"
										maxlength="255" value="<?= $email ?>">
								</div>
							</div>
						</div>
					</div>
					<div class="buttons is-pulled-right">
						<input class="button is-success" type="submit" value="Envoyer">
					</div>
				</form>
			</div>
		</div>
	</div>
</main>