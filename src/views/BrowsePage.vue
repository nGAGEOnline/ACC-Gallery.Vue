<template>
	<teleport to="title"> Browse</teleport>
	<main>
		<div class="container pb-4">
			<h1 class="display-4 fw-bold lh-1 mx-auto col-md-10">Browse Images</h1>
			<div class="row mx-auto col-md-11 row-cols-1 row-cols-lg-3 row-cols-sm-1 row-cols-md-2 g-3">
				<div v-for="image in images" :key="image.id">
					<ImageCard :id="image.id" :url="image.url" :name="image.name" :description="image.description" />
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ImageCard from "../components/ImageCard.vue";

export default {
	name: "BrowsePage",
	metaInfo: {
		title: "Browsing",
	},
	components: {
		ImageCard,
	},
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