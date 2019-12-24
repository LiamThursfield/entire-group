<template>
  <div>
    <!-- Jumbotron -->
    <container-centered
      class="relative"
    >
      <jumbotron-header
        background_image="/image/headers/industries-header.jpg"
        background_overlay_rgba="47, 2, 60, 0.6"
        class="shadow-lg rounded"
      >
        <h1>
          Services
          <br>
          we offer
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

        <p class="mt-10 text-center text-white">
          Entire is one of the area’s leading supplier of machined and fabricated parts, specialising in a
          whole range of materials.
        </p>

        <p class="mt-6 text-center text-white">
          Our level of or quality and expertise is highly regarded throughout the industry. As a result, we continue to
          supply a range of business sectors, including rail, road haulage, food, pharmaceuticals, waste water and power.
          We have a dedicated sales team, all with many years experience in the industry, offering a personal service
          to all our customers.
        </p>

        <p class="mt-6 text-center text-white">
          In addition, our time-served workshop engineers enable us to offer a service that is second to none.
          Our experience and product knowledge from shop floor to management ensures that we can really
          understand customer requirements and deliver the best results possible.
        </p>
      </container-centered>
    </section>

    <!-- Section: Companies -->
    <section
      class="bg-mono-100"
    >
      <container-centered
        class="px-3 p-16"
      >
        <div
          class="
            flex flex-wrap justify-center -mt-6
            sm:-mx-2
          "
        >

          <article
            v-for="service in services"
            :key="service.title"
            class="
              mt-6 max-w-sm w-full
              sm:w-1/2
              md:w-1/3
              xl:w-1/4
            "
          >
            <service-card
              :service="service"
            />

          </article>

        </div>

      </container-centered>
    </section>


    <!-- Section: Capacity List -->
    <section
      class="bg-white"
    >
      <container-centered
        class="max-w-4xl p-16"
      >
        <h1 class="
          font-semibold text-2xl text-center text-entire-blue-900
          md:text-4xl
        ">
          Capacity List
        </h1>

        <div class="mt-12">
          <service-capacity-list />
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
  import ContainerCentered from '~/components/containers/ContainerCentered';
  import JumbotronHeader from '~/components/containers/JumbotronHeader';
  import ServiceCard from '~/components/cards/ServiceCard'
  import ServiceCapacityList from '~/components/containers/ServiceCapacityList'

  export default {
    name: 'Services',
    components: {
      ContainerCentered,
      JumbotronHeader,
      ServiceCapacityList,
      ServiceCard,
    },
    head: {
      title: 'Services | Entire Group'
    },
    data() {
      return {
        services: {
          "precision_machining": {
            title: "Precision Machining",
            image: "/image/services/precision-machining.jpg"
          },
          "fabrication": {
            title: "Fabrication - MIG, TIG & MMA",
            image: "/image/services/fabrication.jpg"
          },
          "assemblies": {
            title: "Assemblies",
            image: "/image/services/assemblies.jpg"
          },
          "castings": {
            title: "Castings: Ferrous & Non-Ferrous",
            image: "/image/services/castings.jpg"
          },
          "forging": {
            title: "Forging",
            image: "/image/services/forging.jpg"
          },
          "surface_finishing": {
            title: "Surface Finishing",
            image: "/image/services/surface-finishing.jpg"
          },
          "refurbishment": {
            title: "Overhaul & Refurbishment",
            image: "/image/services/refurbishment.jpg"
          },
          "laser_cutting": {
            title: "Laser Cutting",
            image: "/image/services/laser-cutting.jpg"
          }
        }
      }
    }
  }
</script>
