<template>
	<div class="container content">
		<h1>Welcome to the Image Gallery</h1>
		<router-link to="/browse-images" class="btn btn-primary">Browse Images</router-link>
	</div>
</template>
  
<script>
export default {
	name: 'FrontPage',
};
</script>

<style scoped>
.front-page {
	text-align: center;
}
.content {
	background: #25252550;
}
</style>
  