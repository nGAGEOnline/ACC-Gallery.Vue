<template>
	<main>
		<div class="container">
			<h1 class="display-4 fw-bold lh-1">Browse Images</h1>
			<div class="row row-cols-1 row-cols-lg-3 row-cols-sm-1 row-cols-md-2 g-3">
				<div class="col-12" v-for="image in images" :key="image.id">
					<ImageCard :id="image.id" :url="image.url" :name="image.name" :description="image.description" class="cards" />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ImageCard from "../components/ImageCard.vue";

export default {
	components: {
		ImageCard,
	},
	name: "BrowsePage",
	data() {
		return {
			images: [],
		};
	},
	async mounted() {
		const response = await fetch("/images/images.json");
		this.images = await response.json();
	},
};
</script>

<style scoped>

</style>