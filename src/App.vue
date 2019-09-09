<template>
  <div
    id="app"
  >

    <site-header></site-header>

    <router-view />
  </div>
</template>

<script>
import Header from './components/header/Header.vue';

export default {
  name: 'app',
  components: {
    'site-header': Header,
  },
};
</script>
