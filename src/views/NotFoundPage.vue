<template>
	<div class="container my-4">
		<div class="row mt-5">
			<div class="col-md-8 pb-5 mx-auto rounded-4 shadow-lg bg-secondary">
				<div class="text-center">
					<h1>404</h1>
					<p class="lead">Oops! Page not found.</p>
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
h1 {
	border-bottom: 4px solid #252525;
	font-weight: bold;
	font-family: "Roboto Condensed", "Source Sans Pro";
	font-size: 5em !important;
	color: #dae6df;
	margin-top: 10px;
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
