<template>
	<div class="container">
		<h1 class="display-4 fw-bold lh-1">Upload</h1>
		<div class="container-fluid py-5 col-md-12 jumpbotron bg-secondary shadow-lg">
			<p class="col-md-12 fs-4 mb-5">Upload your greatest Assetto Corsa Competizione moments and share them with the community.</p>

			<div class="d-grid gap-2 d-md-flex justify-content-md-end">
				<button class="btn btn-primary" type="button" @click="openFileBrowser"><i class="bi bi-upload"></i>Upload Image</button>
			</div>

			<input type="file" ref="fileInput" style="display: none" @change="handleFileUpload" />
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
			let file = e.target.files[0];
			if (file) console.log("Pretended to upload file: " + file.name); // Handle file upload here
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
