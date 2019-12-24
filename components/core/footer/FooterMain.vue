<template>
  <footer
    class="
      bg-entire-blue-1000 px-8 py-16 text-white
      md:px-3
    "
  >

    <div
      class="
        container mx-auto
        md:flex md:flex-row justify-between
      "
    >
      <footer-address class="md:mr-4"/>

      <footer-links class="md:ml-4" />
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
