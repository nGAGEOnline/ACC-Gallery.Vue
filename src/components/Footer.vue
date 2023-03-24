<template>
	<footer>
		<footer class="container-fluid bg-footer footer">
			<div class="container">
				Copyright <span>nGAGEOnline</span> © {{ getYear }}
				<!-- copyright content goes here -->
			</div>
		</footer>
	</footer>
</template>

<script>
export default {
    name: "FooterComponent",
    props: {
        year: String
    },
    computed: {
        getYear() {
            const currentYear = new Date(new Date().getFullYear(), 0, 1);
            return currentYear.getFullYear().toString();
        }
    }
}
</script>

<style scoped>
.bg-footer {
	background-color: #151515;
	/* background-image: linear-gradient(90deg, #114434 0%, #1f7a5f 50%, #114434 100%); */
	/* background-image: linear-gradient(90deg, #10101080 0%, #20202080 50%, #10101080 100%); */
	color: #353535;
	border-top: 2px solid #1f7a5f;
	box-shadow: -2px -4px 8px #05050580;
	padding: 0;

	opacity: 0;
	animation: slideInUp 2.5s ease 1s forwards;
}

.footer {
	position: fixed;
	text-align: center;
	line-height: 25px;
	min-height: 30px;
	font-size: 1em;
	left: 0;
	bottom: 0;
	width: 100%;
    z-index: 1000;
}

.footer .container {
	opacity: 0;
	animation: fadeIn 2s ease 1.5s forwards;
}
.footer span {
	color: #3ca383;
    font-weight: bold;
}
</style>
