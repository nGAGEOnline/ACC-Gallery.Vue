<template>
  <main>
    <section class="py-3 text-center container">
      <div class="row py-lg-3">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light" _msttexthash="205153" _msthash="9" style="direction: ltr">
            Browse Images
          </h1>
          <p
            class="lead text-muted"
            _msttexthash="12710594"
            _msthash="10"
            style="direction: ltr"
          >
            A short description about the album below (its contents, origin, etc.). Keep
            it short and cute, but not too short so people don't skip this album
            altogether.
          </p>
        </div>
      </div>
    </section>

    <div class="album py-3 bg-dark">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
			<AlbumCard />
          </div>
          <div class="col">
			<AlbumCard />

          </div>
          <div class="col">
			<AlbumCard />

          </div>

          <div class="col">
			<AlbumCard />
          </div>
          <div class="col">
			<AlbumCard />
          </div>
          <div class="col">
			<AlbumCard />
          </div>

          <div class="col">
			<AlbumCard />
          </div>
          <div class="col">
			<AlbumCard />
          </div>
          <div class="col">
			<AlbumCard />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AlbumCard from './AlbumCard.vue';

export default {
	components: {
		AlbumCard,
	},
	name: "BrowseImages",
};
</script>

<style scoped>

</style>
