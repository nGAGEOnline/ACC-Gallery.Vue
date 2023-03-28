<template>
	<teleport to="title"> Home</teleport>
	<div class="container my-4">
		<h1 class="display-4 fw-bold lh-1 mx-auto col-md-10">Assetto Corsa Competizione</h1>
		<div class="row mx-auto col-md-11 p-4 pb-0 pe-lg-0 pt-lg-3 align-items-center rounded-4 shadow-lg bg-secondary">
			<div class="col-lg-9 p-3 p-lg-5 pt-lg-2">
				<img src="/images/ACC-logo-black.png" alt="ACC Logo" class="acc-logo" />
				<h3>The ultimate racing game</h3>
				<br />
				<p class="lead">Assetto Corsa Competizione (ACC) is a realistic racing simulation video game developed by Kunos Simulazioni and published by 505 Games in 2019. As the official game of the GT World Challenge (formerly Blancpain GT Series), it offers players an immersive racing experience with authentic GT3 and GT4 cars, real-world tracks, and advanced driving physics. With a variety of game modes such as Career, Championship, and Multiplayer, ACC has earned praise for its realism, graphics, and attention to detail, making it a popular choice among sim racing enthusiasts.</p>
				<div class="d-grid gap-2 d-md-flex justify-content-md-start mb-2 mt-5 mb-lg-1">
					<router-link to="/browse" class="btn btn-primary btn-lg px-4 me-sm-2 fw-bold">Browse Images</router-link>
					<a href="https://www.assettocorsa.it/competizione/" target="_blank" type="button" class="btn btn-danger btn-lg px-4 me-sm-2 fw-bold">Visit Website</a>
				</div>
			</div>
			<div class="col-lg-3 col-offset-1 overflow-hidden">
				<img class="rounded-lg-3" src="/images/acc.jpg" alt="ACC Image" height="600">
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
.acc-logo {
	opacity: 0;
	animation: fadeInDown 3s ease forwards;
	width: 100%;
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

img.rounded-lg-3 {
	opacity: 0;
	padding-left: 0;
    margin-bottom: 18px;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
	box-shadow: 4px 8px 8px #05050580 !important;
	animation: fadeInLeft 5s ease-in-out -2.75s forwards;
}
</style>