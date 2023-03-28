<template>
	<teleport to="title"> 404 - Not Found</teleport>
	<div class="container my-4">
		<h1 class="display-4 fw-bold lh-1 mx-auto col-md-10">Oops</h1>
		<div class="row mt-5">
			<div class="col-md-11 pb-5 mx-auto rounded-4 shadow-lg bg-secondary">
				<div class="text-center">
					<h1 class="notfound">404</h1>
					<p class="lead">Page not found.</p>
					<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
					<router-link to="/" class="btn btn-lg btn-secondary">Go back to home</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NotFoundPage",
	metaInfo: {
		title: "404 Not Found",
	},
};
</script>

<style scoped>
h1.notfound {
	border-bottom: 4px solid #252525;
	font-weight: bold;
	font-family: "Roboto Condensed", "Source Sans Pro";
	font-size: 8em !important;
	color: #dae6df;
	margin-top: 10px;

	background: linear-gradient(90deg, #353535, #121212);
	background: -webkit-linear-gradient(90deg, #353535, #121212);
	background: -moz-linear-gradient(90deg, #353535, #121212);

	background-clip: text;
	text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
    border-bottom: 4px solid #20634e;
}
p.lead {
	color: #b8e6cc;
	font-size: 2em;
	font-weight: bold;
}
p {
	color: #70ad99;
	font-size: 1.3em;
	padding-bottom: 20px;
}
.container.my-4 {
	animation: fadeInDown 0.3s ease-in forwards;
}
</style>
