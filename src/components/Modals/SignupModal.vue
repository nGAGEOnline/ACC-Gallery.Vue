<template>
	<div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="signupModalLabel">Sign up</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>

				<SiteMessage />

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

						<button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
						<small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>

						<hr class="my-4" />
						<h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
						
						<ThirdPartyLogin :color="'btn-info'" :text="'Login with Twitter'" :icon="'bi-twitter'" />
						<ThirdPartyLogin :color="'btn-primary'" :text="'Login with Facebook'" :icon="'bi-facebook'" />
						<ThirdPartyLogin :color="'btn-github'" :text="'Login with GitHub'" :icon="'bi-github'" />
						<ThirdPartyLogin :color="'btn-light'" :text="'Login with Microsoft'" :icon="'bi-microsoft'" />
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SiteMessage from "../SiteMessage.vue";
import ThirdPartyLogin from "../ThirdPartyLoginButton.vue";

export default {
	components: {
		ThirdPartyLogin,
		SiteMessage,
	},

	name: "SignupModal",
};
</script>
