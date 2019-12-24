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
          Industries
          <br>
          we service
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
          As more companies look to outsource engineering services, they are demanding providers have experience in
          their industry and have the proven expertise to meet their unique needs. Entire-Group builds value for clients
          through our deep industry expertise in a broad range of industries.
        </p>

        <p class="mt-6 text-center text-white">
          This expertise is honed from a more than a 16-year legacy of innovation and service excellence, and allows us
          to step into an array of engineering requirements and quickly improve quality, efficiency and lower costs –
          we don’t have to waste time learning the specialized environments of a particular industry.
        </p>

        <p class="mt-6 text-center text-white">
          Our ability to understand the unique operational, safety and regulatory framework that can impact various
          industry-specific facility requirements reduces your risk and gives you peace of mind when it comes to
          outsourcing your critical functions.
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

          <industry-card
            v-for="industry in industries"
            :key="industry.title"
            :industry="industry"
          />

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
  import IndustryCard from '~/components/cards/IndustryCard';
  import JumbotronHeader from '~/components/containers/JumbotronHeader';

  export default {
    name: 'Industries',
    components: {
      ContainerCentered,
      IndustryCard,
      JumbotronHeader,
    },
    head: {
      title: 'Industries | Entire Group'
    },
    data() {
      return {
        industries: {
          'rail_freight': {
            title: "Rail - Freight",
            image: "/image/industries/rail-freight.jpg",
            service_list: [
              "Bogie Pins & Bushes", "Centre Pivot Liners", "Sidebearer Liners", "Brakework", "Drawgear Parts",
              "Suspension Springs", "Friction Damping Parts", "Pneumatics", "Castings", "Wagon Conversion Parts",
              "Manganese Wear Plates", "Forgings"
            ]
          },
          'rail_passenger': {
            title: "Rail - Passenger",
            image: "/image/industries/rail-passenger.jpg",
            service_list: [
              "Draught Screens", "Grab Handles", "Magazine Racks Coat Hooks", "Pelmets", "TV Surrounds", "Footsteps",
              "Carpet Edging Strips", "Luggage Racks"
            ]
          },
          'rail_track': {
            title: "Rail - Track Fittings",
            image: "/image/industries/rail-track.jpg",
            service_list: [
              "Crank Bases", "Cable Retainer Assemblies", "Shims/Packing Pieces", "Relay Panels"
            ]
          },
          'road_transport': {
            title: "Road Transport",
            image: "/image/industries/road-transport.jpg",
            service_list: [
              "Spiral Lock Lifting Decks", "Sliding NoseBox Assemblies", "Ratchet Lock Lifting Decks", "Lifting Deck Pulleys"
            ]
          },
          'renewable_power': {
            title: "Renewable Power",
            image: "/image/industries/renewable-power.jpg",
            service_list: [
              "Plinths", "Cubicle Trolleys", "Gantrys", "Lifting Angles"
            ]
          },
          'power_generation': {
            title: "Power Generation",
            image: "/image/industries/power-generation.jpg",
            service_list: [
              "Hydraulic Ram Seals", "Ball Mill Loading Cylinders"
            ]
          },
          'pharmaceuticals': {
            title: "Pharmaceuticals",
            image: "/image/industries/pharmaceuticals.jpg",
            service_list: [
              "Medical / Laboratory", "Probes", "Strand Dies & Die Nozzles ", "Manifold and Port Blocks",
              "Pelletiser and Outlet Shutes", "Air Knife Nozzles"
            ]
          },
          'waste_water': {
            title: "Waste Water",
            image: "/image/industries/waste-water.jpg",
            service_list: [
              "Pump Pistons", "Conrod and Big End Shells", "Seal Clamping Rings", "Pump Housings/Bodies"
            ]
          },
          'gas': {
            title: "Gas",
            image: "/image/industries/gas.jpg",
            service_list: [
              "Gas Analyser Probes", "Bug Traps", "Heat Transfer Mount", "Gas Sensor Housings"
            ]
          },
          'construction': {
            title: "Construction",
            image: "/image/industries/construction.jpg",
            service_list: [
              "Toilet Cubicle Systems"
            ]
          }
        }
      }
    }
  }
</script>
