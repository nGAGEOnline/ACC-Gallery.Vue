<template>
	<header class="text-bg-primary">
		<nav class="navbar navbar-expand-lg navbar-light bg-primary">
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					style="float: right"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="container collapse navbar-collapse" id="navbarNav">
					<RouterLink to="/" class="navbar-brand branding">
						<img src="/logo.png" width="30" height="30" />
						ACC
					</RouterLink>
					<ul class="navbar-nav col-sm-12 col-lg-8 mb-2 mb-lg-0">
						<li class="nav-item">
							<RouterLink to="/" class="nav-link" active-class="active" exact>Home</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/browse" class="nav-link" active-class="active" exact>Browse</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/upload" class="nav-link" active-class="active" exact>Upload</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/about" class="nav-link" active-class="active" exact>About</RouterLink>
						</li>
						<li class="nav-item">
							<router-link to="/not-found" class="nav-link" active-class="active" exact>Not Found</router-link>
						</li>
						<li class="nav-item d-lg-none">
							<a href="https://github.com/nGAGEOnline/vue-image-gallery-test" class="nav-link" target="_blank">Github</a>
						</li>
						<li class="nav-item d-lg-none">
							<span class="nav-link login" data-bs-toggle="modal" data-bs-target="#loginModal">Login</span>
						</li>
						<li class="nav-item d-lg-none">
							<span class="nav-link signup" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</span>
						</li>
					</ul>
					<div class="col-4 col-lg-auto text-end">
						<ul class="navbar-nav ms-auto d-none d-lg-flex">
							<li class="nav-item">
								<a
									href="https://github.com/nGAGEOnline/vue-image-gallery-test"
									class="btn btn-secondary me-2 mt-2 bi bi-github"
									target="_blank" />
							</li>
							<li class="nav-item">
								<button class="btn btn-outline-success me-2 mt-2 login" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
							</li>
							<li class="nav-item">
								<button class="btn btn-success me-2 mt-2 signup" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
		<SiteMessage />
	</header>

	<LoginModal />
	<SignupModal />
</template>

<script>
import LoginModal from "./Modals/LoginModal.vue";
import SignupModal from "./Modals/SignupModal.vue";
import SiteMessage from "./SiteMessage.vue";

export default {
	components: {
		LoginModal,
		SignupModal,
		SiteMessage,
	},
	name: "NavHeader",
};
</script>

<style scoped>
.branding::after {
	content: "Gallery";
}

header {
	border-bottom: 2px solid #1f7a5f !important;
	box-shadow: 2px 4px 8px #05050580 !important;
}
a.branding {
	font-family: "Roboto Condensed", sans-serif;
	color: white;
}
.branding img {
	margin-right: 10px;
}
.navbar-toggler {
	background-color: #158f6a;
	color: #158f6a;
	padding: 10px;
	margin: 20px;
}
span.navbar-toggler-icon {
}
.container-fluid {
	padding: 0;
}

.navbar {
	font-family: "Roboto Condensed", sans-serif;
	background-color: #151515 !important;
	border-bottom: 2px solid #1f7a5f;
	padding: 0;
}
.navbar-brand {
	background-color: #151515;
	color: #7799cc;
	font-weight: bold;
	padding: 10px 30px;
	margin: 0;
	line-height: 40px;
}

.nav-link {
	color: #1f7a5f;
	line-height: 40px;
	margin: 0 4px;
	padding: 10px 20px;
	min-width: 100px;
	text-align: center;
}
.nav-link:hover,
li.nav-item:hover a.active {
	color: #8be2c7;
	background-color: #158f6a;
}
li.nav-item a.active {
	background-color: #1f634e;
	line-height: 40px;
	padding: 10px;
}

.signup,
.login {
	cursor: pointer;
	margin-right: 2px;
}
</style>
