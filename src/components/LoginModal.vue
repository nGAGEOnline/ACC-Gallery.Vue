<template>
	<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="loginModalLabel">Login</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>

				<div class="modal-body p-5 pt-5">
					<form class="" data-bitwarden-watching="1">
						<div class="form-floating mb-3">
							<input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
							<label for="floatingInput">Email address</label>
						</div>
						<div class="form-floating mb-3">
							<input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
							<label for="floatingPassword">Password</label>
						</div>
						<button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Login</button>

						<hr class="my-4" />
						<h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
						<button class="w-100 py-2 mb-2 btn btn-info rounded-3" type="submit">
							<span class="bi bi-twitter"></span> Login with Twitter
						</button>
						<button class="w-100 py-2 mb-2 btn btn-primary rounded-3" type="submit">
							<span class="bi bi-facebook"></span> Login with Facebook
						</button>
						<button class="w-100 py-2 mb-2 btn bg-github rounded-3" type="submit">
							<span class="bi bi-github"></span> Login with GitHub
						</button>
						<button class="w-100 py-2 mb-2 btn btn-light rounded-3" type="submit">
							<span class="bi bi-microsoft"></span> Login with Microsoft
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoginModal",
};
</script>
