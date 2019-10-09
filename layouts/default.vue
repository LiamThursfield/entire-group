<template>
  <div class="antialiased">

    <header-main />

    <nuxt />
  </div>
</template>

<script>
  import HeaderMain from '~/components/core/header/HeaderMain';

  export default {
    name: 'LayoutDefault',
    components: {
      HeaderMain,
    }
  }
</script>
