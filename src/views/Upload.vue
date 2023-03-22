<template>

  <div class="container">
    <div class="container-fluid py-5 col-md-10 jumpbotron bg-secondary">
      <h1 class="display-5 fw-bold">Upload</h1>
      <p class="col-md-12 fs-4">Upload your greatest Assetto Corsa Competizione moments here.</p>
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

<style>
.bg-secondary {
	background-color: #101922!important;
}
.jumpbotron {
  border-radius: 25px;
  border: 1px solid #151515;
  padding: 20px 40px;
  margin: 40px auto;
  box-shadow: 2px 4px 4px #05050580;
}
.bi-upload {
  padding-right: 10px;
}
</style>
