<template>
	<div class="container my-5">
		<div class="row p-4 pb-0 pe-lg-0 pt-lg-3 align-items-center rounded-4 border shadow-lg">
			<div class="col-lg-7 p-3 p-lg-5 pt-lg-2">
			<h1 class="display-4 fw-bold lh-1">Assetto Corsa Competizione</h1>
			<p class="lead">Assetto Corsa Competizione (ACC) is a realistic racing simulation video game developed by Kunos Simulazioni and published by 505 Games in 2019. As the official game of the GT World Challenge (formerly Blancpain GT Series), it offers players an immersive racing experience with authentic GT3 and GT4 cars, real-world tracks, and advanced driving physics. With a variety of game modes such as Career, Championship, and Multiplayer, ACC has earned praise for its realism, graphics, and attention to detail, making it a popular choice among sim racing enthusiasts.</p>
			<div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
				<router-link to="/browse" class="btn btn-danger btn-lg px-4 me-sm-3 fw-bold">Browse Images</router-link>
				<a href="https://www.assettocorsa.it/competizione/" target="_blank" type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Visit Website</a>
				<button type="button" class="btn btn-secondary btn-lg px-4">Default</button>
			</div>
			</div>
			<div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
				<img class="rounded-lg-3" src="/images/acc.jpg" alt="" width="720">
			</div>
		</div>
	</div>
</template>
  
<script>
export default {
	name: 'FrontPage',
};
</script>

<style scoped>
.shadow-lg {
	box-shadow: 4px 8px 8px #05050580!important;
}
.border {
	border-color: #101922!important;
}
.feature-img {
	overflow: visible;
	width: 100%; 
	padding-top: 20px; 
	margin: 10px auto; 
	/* position: absolute; 
	bottom: 0; 
	left: 0; 
	right: 0; */
}
img.bottom-img {
	width: 100%;
	box-shadow: 4px 8px 8px #05050580!important;
	border: 1px solid #101922;
	border-radius: 10px;
}
.front-page {
	text-align: center;
}
.content {
	background: #25252550;
}
.container.my-5 .row {
	margin: 0 auto;
	width: 90%;
}
</style>
  