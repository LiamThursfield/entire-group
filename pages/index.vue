<template>
  <div>
    <!-- Jumbotron -->
    <container-centered
      class="relative"
    >
      <jumbotron-header
        background_image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80"
        background_overlay_rgba="5, 25, 78, 0.68"
        class="shadow-lg rounded"
      >
          Welcome to the
          <br class="hidden md:inline" />
          Entire-Group
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
          The Entire-Group of companies offer our customers a broad and extensive range of services which are second to
          none. For years now, clients have trusted us as their specialist precision engineering supplier.
        </p>
      </container-centered>
    </section>


    <!-- Section: Page Cards -->
    <section
      class="bg-white"
    >
      <container-centered
        class="px-3 p-16"
      >
        <page-cards />
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
  import PageCards from '~/components/containers/PageCards';

  export default {
    name: 'Home',
    components: {
      ContactForm,
      ContainerCentered,
      JumbotronHeader,
      PageCards
    },
    head: {
      title: 'Home | Entire Group'
    }
  }
</script>
