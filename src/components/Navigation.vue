<template>
	<header class="text-bg-primary">
		<nav class="navbar navbar-expand-lg navbar-light bg-primary">
			<div class="container-fluid">
					<button
						class="navbar-toggler"
						style="float: right;"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="container collapse navbar-collapse" id="navbarNav">
					<router-link to="/" class="navbar-brand branding">
						<img src="/logo.png" width="30" height="30" />
						ACC
					</router-link>
					<ul class="navbar-nav col-8 mb-2 mb-lg-0">
							<li class="nav-item">
								<router-link to="/" class="nav-link" active-class="active" exact>Browse</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/upload" class="nav-link" active-class="active" exact>Upload</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/about" class="nav-link" active-class="active" exact>About</router-link>
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
									<a href="https://github.com/nGAGEOnline/vue-image-gallery-test" class="btn btn-secondary me-2 mt-2 bi bi-github" target="_blank" />
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
	</header>

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
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#twitter"></use>
							</svg>
							Login with Twitter
						</button>
						<button class="w-100 py-2 mb-2 btn btn-primary rounded-3" type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#facebook"></use>
							</svg>
							Login with Facebook
						</button>
						<button class="w-100 py-2 mb-2 btn btn-secondary rounded-3" type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#github"></use>
							</svg>
							Login with GitHub
						</button>
						<button class="w-100 py-2 mb-2 btn btn-light rounded-3" type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#microsoft"></use>
							</svg>
							Login with Microsoft
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="signupModalLabel">Sign up</h5>
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
						<button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
						<small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
						<hr class="my-4" />
						<h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
						<button class="w-100 py-2 mb-2 btn btn-info rounded-3" type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#twitter"></use>
							</svg>
							Sign up with Twitter
						</button>
						<button class="w-100 py-2 mb-2 btn btn-primary rounded-3" type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#facebook"></use>
							</svg>
							Sign up with Facebook
						</button>
						<button class="w-100 py-2 mb-2 btn btn-secondary rounded-3" type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#github"></use>
							</svg>
							Sign up with GitHub
						</button>
						<button class="w-100 py-2 mb-2 btn btn-light rounded-3" type="submit">
							<svg class="bi me-1" width="16" height="16">
								<use xlink:href="#microsoft"></use>
							</svg>
							Sign up with Microsoft
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavHeader",
};
</script>

<style scoped>
.signup,
.login {
	cursor: pointer;
	margin-right: 2px;
}
.signup:hover,
.login:hover {
}
.signup {
	
}

.shadow-lg {
	box-shadow: 4px 8px 8px #05050580 !important;
}
.navbar {
	box-shadow: 2px 4px 8px #05050580 !important;
	background-color: #151515!important;
	border-bottom: 2px solid #158f6a;
	padding: 0;
}
.container-fluid {
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
	color: #158f6a;
	line-height: 40px;
	padding: 10px 20px;
	min-width: 100px;
	text-align: center;
}
li.nav-item:hover a.active,
.nav-link:hover {
	background-color: #158f6a;
}
li.nav-item a.active {
	background-color: #1f634e;
	line-height: 40px;
	padding: 10px;
	margin: 0 4px;
}
.branding {
	color: white;
	display: inline-block;
}
.branding img {
	margin-right: 10px;
}
.branding::after {
	content: "Gallery";
}
.btn-primary {
	background-color: #158f6a!important;
}
.btn-secondary {
	background-color: #353535!important;
	border-color: #303030;
}
.btn-secondary:hover {
	background-color: #4cb191!important;
	color: #afc;
}

</style>
