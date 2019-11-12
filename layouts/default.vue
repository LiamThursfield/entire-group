<template>
  <div class="antialiased">

    <header-main />

    <nuxt />

    <footer-main />

  </div>
</template>

<script>
  import FooterMain from '~/components/core/footer/FooterMain';
  import HeaderMain from '~/components/core/header/HeaderMain';

  export default {
    name: 'LayoutDefault',
    components: {
      FooterMain,
      HeaderMain
    }
  }
</script>
