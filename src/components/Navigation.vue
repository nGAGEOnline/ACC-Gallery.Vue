<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark nav-background">
			<div class="container-fluid">
				<router-link to="/" class="navbar-brand branding">
					<img src="/logo.png" width="30" height="30" />
					ACC
				</router-link>
				<div class="container">
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<router-link to="/" class="nav-link" active-class="active" exact>About</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/browse" class="nav-link" active-class="active" exact>Browses</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/upload" class="nav-link" active-class="active" exact>Upload</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: "NavHeader",
};
</script>

<style>
.shadow-lg {
	box-shadow: 4px 8px 8px #05050580!important;
}
.navbar {
 padding: 0
}
.nav-background {
	background-color: #101922; 
}
.container-fluid {
	padding: 0;
}
.navbar-brand {
	background-color: #305377; 
	color: #7799CC;
	font-weight: bold;
	padding: 10px 30px; 
	margin: 0;
	line-height: 40px;
}

.nav-link {
	line-height: 40px;
	padding: 10px 20px;
	min-width: 100px;
	text-align: center;
}
li.nav-item a.active {
	background-color: #203040;
	line-height: 40px;
	padding: 10px;
	margin: 0 4px;
}
.branding {
	color: white;
}
.branding img {
	margin-right: 10px;
}
.branding::after {
	content: 'Gallery'
}
</style>