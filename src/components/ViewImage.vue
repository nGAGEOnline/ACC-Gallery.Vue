<template>
  <div class="container">
    <div v-if="imageData" class="h-100 p-5 image-container">
      <div class="text-bg-dark p-3 image-heading" style="background-color: rgba(0, 0, 0, 0.5)">
        <h1>{{ imageData.name }}</h1>
      </div>
      <img :src="imageData.url" :alt="imageData.name" class="rounded-3 w-100" />
      <div class="text-bg-dark p-3 image-description">
        <p>{{ imageData.description }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ViewImage",
  props: {
    url: String,
    name: String,
    description: String,
  },
  data() {
    return {
      imageData: null,
    };
  },
  async mounted() {
    const index = this.$route.params.index;
    console.log(index);
    try {
      const response = await fetch('/images/images.json');
      const data = await response.json();
      this.imageData = data[index];
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  }
}
</script>

<style>
img.rounded-3 {
  box-shadow: 2px 4px 4px #05050580;
}
.image-container {
  position: relative;
  background: white;
}
.image-heading {
  top: 0;
  left: 0;
  right: 0;
  background: #05050580;
}
.image-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #50505050;
}
</style>