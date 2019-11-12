<template>
  <footer
    class="
      bg-mono-800 px-8 py-16 text-white
      md:px-3
    "
  >

    <div
      class="
        container mx-auto
        md:flex md:flex-row justify-between
      "
    >
      <footer-address />

      <footer-links />
    </div>

  </footer>
</template>

<script>
  import FooterAddress from '~/components/core/footer/FooterAddress';
  import FooterLinks from '~/components/core/footer/FooterLinks';

  export default {
    name: 'FooterMain',
    components: {
      FooterAddress,
      FooterLinks
    }
  }
</script>
