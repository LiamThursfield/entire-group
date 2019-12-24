<template>
  <div>
    <!-- Jumbotron -->
    <container-centered
      class="relative"
    >
      <jumbotron-header
        background_image="https://images.unsplash.com/photo-1560574188-6a6774965120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&w=1250&h=500&q=80"
        background_overlay_rgba="5, 25, 78, 0.68"
        class="shadow-lg rounded"
      >
        <h1>
          Quality
          <br class="hidden md:inline">
          Policy
        </h1>
      </jumbotron-header>
    </container-centered>


    <!-- Section: Intro -->
    <section class="
      bg-entire-blue-900 -mt-32 pb-12 pt-32
      md:-mt-48 md:pt-48
    ">
      <container-centered
        class="max-w-2xl"
      >
        <p class="
          mt-10 text-center text-white
        ">
          We offer a single source solution to handle both the design and manufacturing of cast, turned,
          forged and milled products.
          Our fully integrated management team is capable of handling projects from design conception through manufacture
          and installation.
        </p>

        <p class="mt-6 text-center text-white">
          Our ISO Quality Management System insures that we monitor and document all critical processes.
          We work continuously with our customers to improve product quality and delivery.
        </p>

      </container-centered>
    </section>


    <!-- Section: Qualifications -->
    <section
      class="bg-white"
    >
      <container-centered
        class="p-12 text-center"
      >

        <div class="-mb-8 -mx-6">
          <img
            src="/image/qualifications/db-schenker.png"
            class="
              h-14 inline-block mb-8 mx-6
            "
            alt="DB Schenker Logo"
          >

          <img
            src="/image/qualifications/risqs.png"
            class="
              h-14 inline-block mb-8 mx-6
            "
            alt="RISQS Logo"
          >

          <img
            src="/image/qualifications/bsi.png"
            class="
              h-14 inline-block mb-8 mx-6
            "
            alt="BSI Logo"
          >
        </div>

      </container-centered>
    </section>


    <!-- Section: Contact -->
    <section
      class="bg-orange-600"
    >
      <container-centered
        class="max-w-2xl p-16"
      >
        <h1 class="
          font-semibold text-2xl text-center text-white
          md:text-4xl
        ">
          Want to get in touch?
        </h1>

        <div class=" mt-6 text-center">
          <nuxt-link
            to="/contact"
            class="
              border-2 border-white font-semibold inline-block mx-auto px-16 py-1 rounded text-white text-lg
              md:text-xl
              hover:bg-white hover:text-entire-blue-900
            "
          >
            Contact Us
          </nuxt-link>
        </div>
      </container-centered>
    </section>

  </div>
</template>

<script>
  import ContactForm from '~/components/forms/ContactForm';
  import ContainerCentered from '~/components/containers/ContainerCentered'
  import JumbotronHeader from '~/components/containers/JumbotronHeader';

  export default {
    name: 'Quality',
    components: {
      ContactForm,
      ContainerCentered,
      JumbotronHeader,
    },
    head: {
      title: 'Quality | Entire Group'
    }
  }
</script>
