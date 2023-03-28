<template>
	<div class="col">
		<div class="card" :class="{ 'first-load': firstLoad }" :style="firstLoad ? { animationDelay: `${delay}s` } : null">
			<img
				:src="url"
				:alt="name"
				class="bd-placeholder-img card-img-top"
				width="100%"
				height="200"
				data-bs-toggle="modal"
				:data-bs-target="'#viewModal-' + id" />

			<text x="50%" y="50%" fill="#eceeef" dy=".3em" _mstTextHash="134056" _mstHash="15">{{ name }}</text>

			<div class="card-body">
				<p class="card-text" _msttexthash="9192963" _msthash="16" style="direction: ltr; text-align: left">
					{{ description }}
				</p>
				<div class="btn-group" role="group" style="float: left">
					<a :href="url" type="button" download class="btn btn-primary">
						<span class="bi bi-download"></span>
					</a>
					<button type="button" class="btn btn-secondary" @click="viewImage(id)">View</button>
				</div>
				<div class="text-end mt-4">
					<small class="text-muted" _msttexthash="115934" _msthash="19">
						{{ randomTimestamp }}
					</small>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" :id="'viewModal-' + id" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-fullscreen">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="viewModalLabel">{{ name }}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>

				<div class="modal-body p-5 pt-5">
					<ImageModal :id="id" :url="url" :name="name" :description="description" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ImageModal from "./Modals/ImageModal.vue";

export default {
	components: {
		ImageModal,
	},
	name: "AlbumCard",
	props: {
		id: Number,
		url: String,
		name: String,
		description: String,
	},
	data() {
		return {
			firstLoad: true,
			afterLoad: false,
			delay: this.id * 0.12,
			index: this.id, // Set the index of the image you want to display
		};
	},
	mounted() {
		setTimeout(() => {
			this.firstLoad = false;
		}, 1800); // 3 second delay in milliseconds
	},
	computed: {
		randomTimestamp() {
			const startOfYear = new Date(new Date().getFullYear(), 0, 1);
			const now = new Date();
			const randomTimestamp = new Date(startOfYear.getTime() + Math.random() * (now.getTime() - startOfYear.getTime()));
			return randomTimestamp.toLocaleDateString();
		},
	},
	methods: {
		viewImage(id) {
			this.$router.push({ name: "ImageViewer", params: { id } });
		},
	},
};
</script>

<style scoped>

.first-load {
	opacity: 0; 
	animation: fadeInDown .33s ease-in forwards;
}
.card {
	border-color: #151515;
	border-radius: 10px;
	color: #81e4c6;
	box-shadow: 2px 4px 4px #05050580;
	transition: transform .2s;
}
.card:hover {
	transform: scale(1.05);
}
.card-body {
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	background-color: #105540;
}

.card img {
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	cursor: pointer;
}

.card text {
	color: #a6f0da;
	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	background-color: #173028;
	padding: 5px 0 5px 15px;
	font-weight: bold;
}

div small.text-muted {
	color: #22a77f !important;
}

@keyframes scaleUp {
	from {
		transform: scale(1);
	}
	to {
		transform: scale(1.05);
	}
}
@keyframes scaleDown {
	from {
		transform: scale(1.05);
	}
	to {
		transform: scale(1);
	}
}
</style>
