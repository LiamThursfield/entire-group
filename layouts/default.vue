<template>
  <div class="antialiased">

    <header-navigation />

    <nuxt />
  </div>
</template>

<script>
  import HeaderNavigation from '~/components/core/HeaderNavigation';

  export default {
    name: 'LayoutDefault',
    components: {
      HeaderNavigation,
    }
  }
</script>
