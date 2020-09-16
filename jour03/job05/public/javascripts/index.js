const app = new Vue({
	el: "#app",
	data() {
		return {
			navbarActive: false,
		};
	},
	methods: {
		async userDelete(id) {
			if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
				await fetch(`/users/delete/${id}`, {
					method: "DELETE",
				})
					.then(() => location.reload())
					.catch(console.error);
			}
		},
		async userUpdate(id, { target: form }) {
			if (form.checkValidity()) {
				await fetch(`/users/update/${id}`, {
					method: "PUT",
					body: new URLSearchParams(new FormData(form)),
				})
					.then(() => (location.pathname = "/"))
					.catch(console.error);
			} else {
				form.reportValidity();
			}
		},
	},
});
