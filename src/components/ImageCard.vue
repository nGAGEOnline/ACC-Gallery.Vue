<template>
	<div class="col">
		<div class="card">
			<img
				:src="url"
				:alt="name"
				class="bd-placeholder-img card-img-top"
				width="100%"
				height="225"
				data-bs-toggle="modal"
				:data-bs-target="'#viewModal-' + id" />
			<title _mstTextHash="177515" _mstHash="14">{{ name }}</title>
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
				<div class="text-end">
					<small class="text-muted" _msttexthash="115934" _msthash="19" style="width: 100%; text-align: right; padding: 30px 0 0 0">
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
					<ImageModal :url="url" :name="name" :description="description" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ImageModal from "./ImageModal.vue";

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
			index: this.id, // Set the index of the image you want to display
		};
	},
	computed: {
		randomTimestamp() {
			const startOfYear = new Date(new Date().getFullYear(), 0, 1);
			const now = new Date();
			const randomTimestamp = new Date(startOfYear.getTime() + Math.random() * (now.getTime() - startOfYear.getTime()));
			return randomTimestamp.toLocaleDateString();
		},
	},
	created() {
		console.log("AlbumCard props:", this.url, this.name, this.description);
	},
	methods: {
		viewImage(index) {
			this.$router.push({ name: "ViewImage", params: { index } });
		},
	},
};
</script>

<style scoped>
.bi {
	padding-right: 0;
}

.card {
	animation: scaleBack 0.3s ease-in-out forwards;
	box-shadow: 2px 4px 4px #05050580;
}
.card:hover {
	animation: scaleUp 0.2s ease-in-out forwards;
	z-index: 100;
}
.card img:hover {
	cursor: pointer;
}
.card,
.card-body {
	border-color: #151515;
	border-radius: 10px;
}
.card-body {
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}
.card text,
.card-body {
	background-color: #105540;
}
.card text {
	background-color: #173028;
	border-bottom: 1px solid #0d221c;
	padding: 5px 0 5px 15px;
	font-weight: bold;
}

@keyframes scaleUp {
	from {
		transform: scale(1);
	}
	to {
		transform: scale(1.05);
	}
}
@keyframes scaleBack {
	from {
		transform: scale(1.05);
	}
	to {
		transform: scale(1);
	}
}
</style>
