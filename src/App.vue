<template>
  <div id="app">
    <NavHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from './components/Navigation.vue';

export default {
  components: {
    NavHeader,
  },
};
</script>
