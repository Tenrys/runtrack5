<main class="section">
	<div class="container">
		<div class="columns is-centered">
			<div class="column is-narrow">
				<table class="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Prénom</th>
							<th>Nom</th>
							<th>E-mail</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<?php foreach ($users as $user) { ?>
						<tr>
							<td><?= $user["id"] ?></td>
							<td><?= $user["firstname"] ?></td>
							<td><?= $user["lastname"] ?></td>
							<td><?= $user["email"] ?></td>
							<td>
								<form class="buttons" method="POST">
									<input class="tag tag-button is-info"
										formaction='<?= site_url("utilisateurs/update/{$user['id']}") ?>' type="submit"
										value="Modifier">
									<input class="tag tag-button is-danger"
										formaction='<?= site_url("utilisateurs/delete/{$user['id']}") ?>' type="submit"
										value="Supprimer"
										onclick="return confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')">
								</form>
							</td>
						</tr>
						<?php } ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</main>