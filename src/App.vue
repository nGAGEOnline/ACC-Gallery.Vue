<template>
  <NavHeader />
  <router-view></router-view>
  <Footer />
</template>

<script>
import NavHeader from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavHeader,
    Footer
  },
};
</script>
