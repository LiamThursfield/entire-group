<template>
  <div>
    <!-- Jumbotron -->
    <container-centered
      class="relative"
    >
      <jumbotron-header
        background_image="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&w=1250&h=500&q=80"
        background_overlay_rgba="47, 2, 60, 0.6"
        class="shadow-lg rounded"
      >
        <h1>
          About the
          <br>
          Entire-Group
        </h1>
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

        <p class="
          mt-10 text-center text-white
        ">
          Entire Engineering Limited was formed in 2000 and focused on customer service and quality products.
          Because of this philosophy we have enjoyed sustained growth and development year on year.
        </p>

        <p class="
          mt-6 text-center text-white
        ">
          Since 2009 we have acquired a number of companies to form Entire Engineering Group Holdings Limited to further improve the range and levels of service for our clients.
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
            flex flex-wrap justify-between -mt-8
            md:-mt-12 md:-mx-3
          "
        >

          <company-card
            image_source="/image/companies/entire-engineering.png"
            image_alt="Entire Engineering Logo"
          >
            <p>
              As a single source manufacturer of component parts and assemblies, Entire Engineering clients have
              benefited from the companies expertise within; CNC Machining, Conventional Machining, Fabrication, CNC
              Laser Profiling & Folding, Overhaul & Assembly of Part, Castings in Ferrous & Non Ferrous Materials.
              Surface Finishing including Powder Coating, Zinc Plating, Phosphating etc. Forgings.
            </p>
          </company-card>

          <company-card
            image_source="/image/companies/matthews.png"
            image_alt="Matthews Engineering (Stoke) Logo"
          >
            <p>
              Matthews Engineering machining facility has supplied UK customers with a wide range of high quality milled
              and turned parts to individual designs. Specialising in small to medium sized parts in aluminium, steel,
              plastic, stainless steel, bronze, brass & cast iron, Surface Finishing including Anodising, Zinc Plating,
              Powder Coating, Chemical Black & Electroless Nickel, Matthews have built an enviable reputation for
              delivering quality parts and assemblies on time and to a high specification.
            </p>
          </company-card>

          <company-card
            image_source="/image/companies/ferropol.png"
            image_alt="Ferropol Engineering Logo"
          >
            <p>
              Ferropol are the Entire-Group's specialists in fabricated metal processes including forging, stamping,
              bending, forming, machining & polishing, as well as coded welding in MIG, TIG, MMA in multi metals
              including Stainless Steel & Aluminium, and assembly to a high standard.
            </p>
          </company-card>

          <company-card
            image_source="/image/companies/elite.png"
            image_alt="Elite Manufacturing Services Logo"
          >
            <p>
              As well as CNC machining Elite offer a complete fabrication service.
              Whether its Stainless Steel, Mild Steel, Aluminium or Plastic, we guarantee that we are truly focused on
              offering you a service in fabrication that is second to none. If you need that all important finishing
              operation, we can take care of that too, whether it’s Zinc Plating, Powder Coating or a Wet paint solution.
            </p>
          </company-card>

        </div>

        <div class="mt-12">
          <p class="max-w-3xl mx-auto text-center text-mono-600">
            Entire Engineering Limited, Elite Manufacturing Services Limited, Matthews Engineering (Stoke)
            Limited & Ferropol Engineering Limited are wholly owned subsidiaries of Entire Engineering Group Holdings
            Limited - The Entire-Group.
          </p>
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
          Need to get in touch?
        </h1>

        <div class=" mt-6 text-center">
          <nuxt-link
            to="/contact"
            class="
              border-2 border-white font-semibold inline-block mx-auto px-16 py-1 rounded text-white text-lg
              md:text-xl
              hover:bg-white hover:text-indigo-900
            "
          >
            Contact Us
          </nuxt-link>
        </div>
      </container-centered>
    </section>


    <!-- Section: Qualifications -->
    <section
      class="bg-white"
    >
      <container-centered
        class="p-12 text-center"
      >

        <div class="-mb-8 -mx-3">
          <img
            src="/image/qualifications/risqs.png"
            class="
              h-12 inline-block mb-8 mx-3
            "
            alt="RISQS Logo"
          >

          <img
            src="/image/qualifications/bsi-ukas.png"
            class="
              h-12 inline-block mb-8 mx-3
            "
            alt="BSI UKAS Logo"
          >

          <img
            src="/image/qualifications/rail-alliance.png"
            class="
              h-12 inline-block mb-8 mx-3
            "
            alt="Rail Alliance Logo"
          >
        </div>

      </container-centered>
    </section>
  </div>
</template>

<script>
  import CompanyCard from '~/components/cards/CompanyCard'
  import ContainerCentered from '~/components/containers/ContainerCentered'
  import JumbotronHeader from '~/components/containers/JumbotronHeader';

  export default {
    name: 'About',
    components: {
      CompanyCard,
      ContainerCentered,
      JumbotronHeader,
    },
    head: {
      title: 'About | Entire Group'
    }
  }
</script>
