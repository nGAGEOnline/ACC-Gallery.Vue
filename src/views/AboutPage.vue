<template>
	<div class="container my-4">
		<h1 class="display-4 fw-bold lh-1">About This Site</h1>
		<div class="row p-4 pb-0 pe-lg-0 pt-lg-3 align-items-center rounded-4 shadow-lg bg-secondary">
			<h3>Welcome to my first attempt at working with Vue,...</h3>
			<p>
				Vue is a popular JavaScript framework for building web applications. I created this website as part of a "Bee-Ideas IT Bootcamp" objective for
				showcasing HTML/CSS. The objective was to create an image gallery, and I decided to use Assetto Corsa Competizione screenshots and wallpapers
				for the content and build the site and theme around that.
			</p>
			<p>
				Since the objective limited me from creating anything that requires complicated hosting or setup, I've chosen to use a SPA (Single Page
				Application) system so I could upload it to my limited webhosting service.
			</p>
			<p>
				I picked Vue as I had never tried it yet and was interested in learning how it works. Vue made it easy for me to create a simple, yet functional
				image gallery that looks great and is easy to use. It was extremely easy to get up and running and the structure seems very straightforward so
				far. There's still much to learn, but I've enjoyed my time with Vue and intend to use it on a more regular basis.
			</p>
			<p>
				Because of the limitations of the project, I'm only using a simple JSON file for image data instead of a database. The upload, sign-up, and
				login features are just for show and don't actually function. The objective for the web-project explicitly stated that I can't do anything
				backend related and should just showcase functional HTML/CSS and design.
			</p>
			<p>
				Overall, I've learned a lot from this project and I'm excited to continue exploring Vue and other web development technologies in the future. I
				hope you enjoy using this website and checking out some of the amazing Assetto Corsa Competizione screenshots and wallpapers!
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "AboutPage",
	metaInfo: {
		title: "About",
	},
};
</script>

<style scoped>
.container.my-4 {
	animation: fadeInDown 0.3s ease-in forwards;
	font-size: 1.1em;
}
a {
	color: #488a75;
}
.row {
	padding-right: 15px;
}
h3 {
	padding: 15px 30px;
	border-bottom: 4px solid #252525;
}
p {
	color: #9dd4c3;
	padding: 5px 40px 5px 30px;
}
p:last-child {
	padding-bottom: 30px;
}

.col-lg-4.offset-lg-1.p-0.overflow-hidden.shadow-lg,
img.rounded-lg-3 {
	opacity: 0;
	animation: fadeIn 3s ease 1.5s forwards;
}
</style>
