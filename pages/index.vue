<template>
  <div>
    <!-- Jumbotron -->
    <container-centered
      class="relative"
    >
      <jumbotron-header
        background_image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80"
        background_overlay_rgba="95,15,117,0.20"
        class="shadow-lg rounded"
      >
        Sample Header
        <br class="hidden md:inline">
        Text Here
      </jumbotron-header>
    </container-centered>

    <!-- Section: Intro -->
    <section class="
      bg-indigo-900 -mt-32 pb-12 pt-32
      md:-mt-48 md:pt-48
    ">
      <container-centered
        class="max-w-2xl"
      >
        <h1 class="
          font-semibold mt-10 text-2xl text-center text-white
          md:text-4xl
        ">
          Welcome to the Entire-Group
        </h1>

        <p class="
          mt-3 text-center text-white
        ">
          The Entire-Group of companies offer our customers a broad and extensive range of services which are second to
          none. For years now, clients have trusted us as their specialist precision engineering supplier.
        </p>
      </container-centered>
    </section>


    <!-- Section: TBC -->
    <section
      class="bg-white"
    >
      <container-centered
        class="max-w-2xl p-16"
      >
        <h1 class="
          font-semibold text-2xl text-center text-mono-900
          md:text-4xl
        ">
          TBC Header
        </h1>

        <p class="
          mt-3 text-center text-mono-900
        ">
          Text coming soon
        </p>
      </container-centered>
    </section>


    <!-- Section: Services -->
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
          Services Header
        </h1>

        <div class=" mt-3 text-center">
          <nuxt-link
            to="/services"
            class="
              border-2 border-white font-semibold inline-block mx-auto px-8 py-1 rounded text-white
              hover:bg-white hover:text-indigo-900
            "
          >
            View All Services
          </nuxt-link>
        </div>
      </container-centered>
    </section>


    <!-- Section: Contact -->
    <section
      class="bg-mono-100"
    >
      <container-centered
        class="max-w-2xl p-16"
      >
        <contact-form
          form_name="contact_home"
        />
      </container-centered>
    </section>

  </div>
</template>

<script>
  import ContactForm from '~/components/forms/ContactForm';
  import ContainerCentered from '~/components/containers/ContainerCentered'
  import JumbotronHeader from '~/components/containers/JumbotronHeader';

  export default {
    name: 'Home',
    components: {
      ContactForm,
      ContainerCentered,
      JumbotronHeader
    },
    head: {
      title: 'Home | Entire Group'
    }
  }
</script>
