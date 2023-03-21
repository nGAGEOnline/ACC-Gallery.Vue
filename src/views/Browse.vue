<template>
  <main>
    <section class="py-3 text-center container">
      <div class="row py-lg-3">
        <div class="col-lg-10 col-md-10 mx-auto">
          <h1 class="fw-light" _msttexthash="205153" _msthash="9" style="direction: ltr">
            Assetto Corsa Competizione
          </h1>
          <p class="lead text-muted" _msttexthash="12710594" _msthash="10" style="direction: ltr">
            Assetto Corsa Competizione (ACC) is a realistic racing simulation video game developed by Kunos Simulazioni and published by 505 Games in 2019. As the official game of the GT World Challenge (formerly Blancpain GT Series), it offers players an immersive racing experience with authentic GT3 and GT4 cars, real-world tracks, and advanced driving physics. With a variety of game modes such as Career, Championship, and Multiplayer, ACC has earned praise for its realism, graphics, and attention to detail, making it a popular choice among sim racing enthusiasts.
          </p>
        </div>
      </div>
    </section>

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
