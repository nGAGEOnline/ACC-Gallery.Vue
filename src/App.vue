<template>
  <NavHeader />
  <router-view></router-view>
</template>

<script>
import NavHeader from './components/Navigation.vue';

export default {
  components: {
    NavHeader,
  },
};
</script>
