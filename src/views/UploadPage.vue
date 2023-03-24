<template>
	<teleport to="title">Upload</teleport>
	<div class="container">
		<h1 class="display-4 fw-bold lh-1">Upload</h1>
		<div class="container-fluid py-5 col-md-10 jumpbotron bg-secondary shadow-lg p-0 p-sm-3 p-lg-5 text-center">
			<!-- <object data="/images/ACC-logo-black.svg" type="image/svg+xml" class="acc-logo"></object> -->
			<img src="/images/ACC-logo-black.png" alt="ACC Logo" class="acc-logo" />

			<p class="lead mb-5 mt-3">
				Upload your greatest Assetto Corsa Competizione moments and share them with the community.
			</p>

			<div class="d-grid gap-2 d-md-flex mt-5 justify-content-md-center">
				<button class="btn btn-lg btn-primary" type="button" @click="openFileBrowser"><i class="bi bi-upload"></i>Upload Image</button>
			</div>

			<input type="file" ref="fileInput" style="display: none" @change="handleFileUpload" />
		</div>
	</div>
</template>

<script>

export default {
	name: "UploadPage",
	metaInfo: {
		title: "Upload",
	},
	methods: {
		getPageTitle() {
			return this.pageTitle;
		},
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
.acc-logo {
	opacity: 0;
	animation: fadeInDown 3s ease forwards;
	width: 100%;
	height: auto;
	padding: 5px 20px;
	margin-bottom: 20px;
	background-color: #29d19f90;
	border-top: 4px solid #252525;
	border-bottom: 4px solid #252525;
}
@media (min-width: 840px) {
	.acc-logo {
		padding: 10px 100px;
		margin-bottom: 20px;
		background-color: #29d19f90;
		border-top: 4px solid #252525;
		border-bottom: 4px solid #252525;
	}
}
@media (min-width: 1080px) {
	.acc-logo {
		padding: 30px 200px;
		margin-bottom: 20px;
		background-color: #29d19f90;
		border-top: 4px solid #252525;
		border-bottom: 4px solid #252525;
	}
}

.container {
    animation: fadeInDown .3s ease-in forwards;
}
.jumpbotron {
	border-radius: 25px;
	padding: 20px 40px;
	margin: 40px auto;
}
.bi-upload {
	padding-right: 10px;
}
</style>
