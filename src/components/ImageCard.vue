<template>
  <div class="col">
    <div class="card">
      <img @click="viewImage(id)" :src="url" :alt="name" class="bd-placeholder-img card-img-top" width="100%" height="225" />
      <title _mstTextHash="177515" _mstHash="14">Placeholder</title>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em" _mstTextHash="134056" _mstHash="15">{{ name }}</text>
      <div class="card-body" @click="viewImage(id)">
        <p class="card-text" _msttexthash="9192963" _msthash="16" style="direction: ltr; text-align: left" >
          {{ description }}
        </p>
        <div class="d-flex ">
          <!-- <div class="btn-group">
            <button type="button" class="btn btn-sm btn-secondary" _msttexthash="63401" _msthash="17" style="direction: ltr">
              width
            </button>
            <button type="button" class="btn btn-sm btn-primary" _msttexthash="162188" _msthash="18" style="direction: ltr">
              <router-link :to="{
                name: 'ViewImage',
                params: {
                  index: index
                }
              }">View</router-link>
            </button>
          </div> -->
          <small class="text-muted" _msttexthash="115934" _msthash="19" style="width: 100%; text-align: right">
            {{ randomTimestamp }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    }
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
    console.log('AlbumCard props:', this.url, this.name, this.description);
  },
  methods: {
    viewImage(index) {
      this.$router.push({ name: 'ViewImage', params: { index } });
    }
  }
};
</script>

<style scoped>
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

.card {
  animation: scaleBack .3s ease-in-out forwards;
 box-shadow: 2px 4px 4px #05050580;
}
.card:hover {
  animation: scaleUp .2s ease-in-out forwards;
  z-index: 100;
  cursor: pointer;
}
.card,
.card-body {
  border-color:#101922;
  border-radius: 10px;
}
.card-body {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.card text,
.card-body {
  background-color: #203040;
}
.card text {
  background-color: #101922;
  border-bottom: 1px solid #0c131a;
  padding: 5px 0 5px 15px;
  font-weight: bold;
}
</style>
