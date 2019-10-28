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
      bg-indigo-900 -mt-32 pb-8 pt-32
      md:-mt-48 md:pt-48
    ">
      <container-centered
        class="max-w-2xl"
      >
        <h1 class="
          font-semibold mt-6 text-2xl text-center text-white
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
  </div>
</template>

<script>
  import ContainerCentered from '~/components/containers/ContainerCentered'
  import JumbotronHeader from '~/components/containers/JumbotronHeader';

  export default {
    name: 'Home',
    components: {
      ContainerCentered,
      JumbotronHeader
    }
  }
</script>
