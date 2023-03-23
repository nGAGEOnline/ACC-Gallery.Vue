<template>
	<div class="site-message">
		<div class="container">
			<p>This webiste is just a sample project made with VUE. There is no backend, so 'login', 'sign up' and 'upload' are just for show</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "SiteMessage",
};
</script>

<style scoped>
.site-message {
	background-color: #1f634e;
	background-image: linear-gradient(90deg, #114434 0%, #1f7a5f 50%, #114434 100%);
	color: #52c595;
}
.site-message p {
	text-align: center;
	font-size: 0.9em;
	letter-spacing: 0.1em;
	padding: 3px;
	margin: 0;
	line-height: 20px;
}
</style>
