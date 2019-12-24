<template>
  <div>
    <!-- Jumbotron -->
    <container-centered
      class="relative"
    >
      <jumbotron-header
        background_image="https://images.unsplash.com/photo-1533563616515-72bcab793e92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&crop=focalpoint&w=1250&h=500&q=80"
        background_overlay_rgba="5, 25, 78, 0.68"
        class="shadow-lg rounded"
      >
        <h1>
          Contact the
          <br>
          Entire-Group
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
        <address class="
          mt-10 not-italic text-center text-white
        ">
          <h2
            class="font-semibold text-lg"
          >
            Entire Engineering Group Holdings Limited
          </h2>

          <p class="mt-4 text-sm">
            Units D & E, Great Fenton Business Park
            <br>
            Grove Road, Fenton, Stoke-on-Trent, Staffordshire ST4 4LZ
          </p>

          <div class="mt-4 text-md">
            <a
              href="mailto:sales@entire-group.co.uk"
              class="hover:text-orange-500"
            >
              sales@entire-group.co.uk
            </a>
          </div>

          <div class="mt-4">
            Tel:
            <a
              href="tel:01782 744444"
              class="hover:text-orange-500"
            >
              (01782) 744444
            </a>
          </div>

          <div>
            Fax: (01782) 744364
          </div>
        </address>
      </container-centered>
    </section>


    <!-- Section: Contact -->
    <section
      class="bg-mono-800 relative shadow-md z-10"
    >
      <container-centered
        class="max-w-2xl p-16"
      >
        <contact-form
          class="bg-white p-8 rounded-lg shadow-md border border-mono-100 hover:shadow-lg"
          form_name="contact"
          form_title="Send us a Message"
        />
      </container-centered>
    </section>


    <!-- Section: Companies -->
    <section
      class="bg-mono-100 relative z-0"
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

          <company-contact-card
            image_source="/image/companies/entire-engineering.png"
            image_alt="Entire Engineering Logo"
          >
            <p class="font-semibold">
              Tel:
              <a
                href="tel:01782 744444"
                class="hover:text-orange-600"
              >
                01782 744444
              </a>
              <br>
              Fax: 01782 744364
            </p>
          </company-contact-card>

          <company-contact-card
            image_source="/image/companies/matthews.png"
            image_alt="Matthews Engineering (Stoke) Logo"
          >
            <p class="font-semibold">
              Tel:
              <a
                href="tel:01782 849534"
                class="hover:text-orange-600"
              >
                01782 849534
              </a>
              <br>
              Fax: 01782 744364
            </p>
          </company-contact-card>

          <company-contact-card
            image_source="/image/companies/ferropol.png"
            image_alt="Ferropol Engineering Logo"
          >
            <p class="font-semibold">
              Tel:
              <a
                href="tel:01782 848688"
                class="hover:text-orange-600"
              >
                01782 848688
              </a>
              <br>
              Fax: 01782 848688
            </p>
          </company-contact-card>

          <company-contact-card
            image_source="/image/companies/elite.png"
            image_alt="Elite Manufacturing Services Logo"
          >
            <p class="font-semibold">
              Tel:
              <a
                href="tel:01782 747136"
                class="hover:text-orange-600"
              >
                01782 747136
              </a>
              <br>
              Fax: 01782 744364
            </p>
          </company-contact-card>

        </div>
      </container-centered>
    </section>

  </div>
</template>

<script>
  import CompanyContactCard from '~/components/cards/CompanyContactCard';
  import ContactForm from '~/components/forms/ContactForm';
  import ContainerCentered from '~/components/containers/ContainerCentered';
  import JumbotronHeader from '~/components/containers/JumbotronHeader';

  export default {
    name: 'Contact',
    components: {
      CompanyContactCard,
      ContactForm,
      ContainerCentered,
      JumbotronHeader,
    },
    head: {
      title: 'Contact | Entire Group'
    }
  }
</script>
