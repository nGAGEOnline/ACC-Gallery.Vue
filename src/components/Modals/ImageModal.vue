<template>
	<div v-if="imageData" class="image-container">
		<h1>{{ imageData.name }}</h1>
		<a :href="imageData.url" download>
			<span class="bi bi-download download-icon"></span>
		</a>
		<img :src="imageData.url" :alt="imageData.name" class="w-100" />
		<p>{{ imageData.description }}</p>
	</div>
</template>

<script>
export default {
  name: "ImageModal",
  props: {
    url: String,
    name: String,
    description: String,
  },
  data() {
    return {
      imageData: {
        url: this.url,
        name: this.name,
        description: this.description
      },
    };
  },
}
</script>

<style scoped>
.download-icon {
  display: inline-block;
  position: absolute;
  font-size: 1.5em;
  top: 10px;
  right: 40px;
  height: 100%;
  text-align: right;
}
.image-container {
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.image-container img {
  box-shadow: 2px 4px 4px #05050580;
  border: 1px solid #0c131a;
  border-radius: 10px;
}
.image-container h1 {
  position: absolute;
  padding: 10px 20px 10px 20px;
  margin: 0;
  top: 0;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.8em;
  height: auto;
  width: 100%;
  color: #cde;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #101010e0;
  border-bottom: 1px solid #0c131a;
}
.image-container p {
  position: absolute;
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  padding: 10px 20px 20px 20px;
  bottom: 0;
  min-height: 80px;
  height: auto;
  width: 100%;
  text-align: justify;
  font-size: 1.2em;
  font-weight: 600;
  color: #678;
  background-color: #101010d0;
  border-top: 1px solid #0c131a;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.image-container a,
.image-container p,
.image-container h1,
.image-container div.previous-next-buttons {
  animation: fadeOut 2s ease-in 1s backwards;
  opacity: 0.25;
}
.image-container a {
  color: #16304b;
}
.image-container:hover a {
  color: white;
}
.image-container:hover a,
.image-container:hover p,
.image-container:hover h1,
.image-container:hover div.previous-next-buttons {
  animation: fadeIn ease-in-out 0.3s forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0.25;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.25;
  }
}</style>