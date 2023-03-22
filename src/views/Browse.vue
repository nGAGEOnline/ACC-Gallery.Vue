<template>
  <main>
    <div class="album py-3 bg-dark">
      <div class="container">
        <div class="row row-cols-xs-1 row-cols-lg-3 row-cols-sm-1 row-cols-md-2 g-3">
          <div class="col-4" v-for="image in images" :key="image.id">
            <ImageCard :id="image.id" :url="image.url" :name="image.name" :description="image.description" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ImageCard from '../components/ImageCard.vue';

export default {
	components: {
		ImageCard,
	},
	name: "BrowseImages",
  data() {
    return {
      images: [],
    };
  },
  async mounted() {
    const response = await fetch('/images/images.json');
    this.images = await response.json();
    console.log(this.images)
  },
};
</script>

<style scoped>

</style>
