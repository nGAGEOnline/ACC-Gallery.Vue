<template>

  <div class="container">
    <h1 class="display-4 fw-bold lh-1">Upload Images</h1>
    <div class="container-fluid py-5 col-md-12 jumpbotron bg-secondary shadow-lg">
      <p class="col-md-12 fs-4 mb-5">Upload your greatest Assetto Corsa Competizione moments and share them with the community.</p>
      <button class="btn btn-primary btn-lg" type="button" @click="openFileBrowser"><i class="bi bi-upload"></i>Upload Image</button>

      <input type="file" ref="fileInput" style="display: none;" @change="handleFileUpload" />
    </div>
  </div>
    
</template>

<script>
export default {
  name: "UploadImages",
    methods: {
  openFileBrowser() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(e) {
      console.log(e) // Handle file upload here
    },
  },
};
</script>

<style scoped>
.jumpbotron {
  border-radius: 25px;
  padding: 20px 40px;
  margin: 40px auto;
}
.bi-upload {
  padding-right: 10px;
}
</style>
