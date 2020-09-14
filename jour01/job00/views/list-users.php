<?php

$title = "Liste d'utilisateurs"

?>

<html lang="en">

	<head>
		<?php include("head.php") ?>
		<title><?= $title ?></title>
	</head>

	<body>
		<?php include("header.php") ?>

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
								</tr>
							</thead>
							<tbody>
								<?php foreach ($users as $user) { ?>
								<tr>
									<td><?= $user["id"] ?></td>
									<td><?= $user["firstname"] ?></td>
									<td><?= $user["lastname"] ?></td>
									<td><?= $user["email"] ?></td>
								</tr>
								<?php } ?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>

		<?php include("footer.php") ?>
	</body>

</html>