<template>
	<div class="container my-4">
		<h1 class="display-4 fw-bold lh-1">Assetto Corsa Competizione</h1>
		<div class="row p-4 pb-0 pe-lg-0 pt-lg-3 align-items-center rounded-4 shadow-lg bg-secondary">
			<div class="col-lg-7 p-3 p-lg-5 pt-lg-2">
				<h3>The ultimate racing game</h3>
				<br />
				<p class="lead">Assetto Corsa Competizione (ACC) is a realistic racing simulation video game developed by Kunos Simulazioni and published by 505 Games in 2019. As the official game of the GT World Challenge (formerly Blancpain GT Series), it offers players an immersive racing experience with authentic GT3 and GT4 cars, real-world tracks, and advanced driving physics. With a variety of game modes such as Career, Championship, and Multiplayer, ACC has earned praise for its realism, graphics, and attention to detail, making it a popular choice among sim racing enthusiasts.</p>
				<div class="d-grid gap-2 d-md-flex justify-content-md-start mb-2 mt-5 mb-lg-1">
					<router-link to="/browse" class="btn btn-primary btn-lg px-4 me-sm-3 fw-bold">Browse Images</router-link>
					<a href="https://www.assettocorsa.it/competizione/" target="_blank" type="button" class="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Visit Website</a>
				</div>
			</div>
			<div class="col-lg-4 offset-lg-1 overflow-hidden">
				<img class="rounded-lg-3" src="/images/acc.jpg" alt="ACC" width="900">
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: "HomePage",
	metaInfo: {
		title: "Home",
	},
}
</script>

<style scoped>
.container.my-4 {
    animation: fadeInDown .3s ease-in forwards;
}
img.rounded-lg-3 {
	opacity: 0;
    margin-bottom: 18px;
	box-shadow: 4px 8px 8px #05050580 !important;
	animation: slideInLeft 2.5s ease forwards;
}
</style>