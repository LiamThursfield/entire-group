<template>
  <div
    class="
      flex flex-wrap justify-center
      md:-mx-6 md:flex-no-wrap
    "
  >

    <article
      class="
        flex flex-col mx-0 text-center
        md:mx-6 md:w-1/3
      "
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mx-auto w-12">
        <path class="fill-current text-orange-600" d="M21 21H3a1 1 0 0 1-1-1.06l1-16A1 1 0 0 1 4 3h2a1 1 0 0 1 1 .94l.39 6.26 2.9-2.9A1 1 0 0 1 12 8v2.59l3.3-3.3A1 1 0 0 1 17 8v2.59l3.3-3.3A1 1 0 0 1 22 8v12a1 1 0 0 1-1 1z"></path>
        <path class="fill-current text-white" d="M7 13h3v2H7v-2zm5 0h3v2h-3v-2zm5 0h3v2h-3v-2zM7 17h3v2H7v-2zm5 0h3v2h-3v-2zm5 0h3v2h-3v-2z"></path>
      </svg>

      <h2 class="font-semibold mt-1 text-entire-blue-900 text-2xl tracking-wider">
        Industries
      </h2>

      <p class="flex-1 max-w-md mt-3 mx-auto">
        Entire-Group builds value for clients through our deep industry expertise in a broad range of industries.
      </p>

      <nuxt-link
        to="/industries"
        class="
          border-2 border-entire-blue-900 font-semibold inline-block mx-auto mt-6 px-8 py-1 rounded text-entire-blue-900
          hover:bg-entire-blue-900 hover:text-white
        "
      >
        Learn More
      </nuxt-link>
    </article>

    <article
      class="
        flex flex-col mt-12 mx-0 text-center
        md:mt-0 md:mx-6 md:w-1/3
      "
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mx-auto w-12">
        <path class="fill-current text-orange-600" d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
        <circle cx="12" cy="12" r="2" class="fill-current text-orange-900"></circle>
      </svg>

      <h2 class="font-semibold mt-1 text-entire-blue-900 text-2xl tracking-wider">
        Services
      </h2>

      <p class="flex-1 max-w-md mt-3 mx-auto">
        Entire is one of the area’s leading supplier of machined and fabricated parts, specialising in a whole range of materials.
      </p>

      <nuxt-link
        to="/services"
        class="
          border-2 border-entire-blue-900 font-semibold inline-block mx-auto mt-6 px-8 py-1 rounded text-entire-blue-900
          hover:bg-entire-blue-900 hover:text-white
        "
      >
        Learn More
      </nuxt-link>
    </article>

    <article
      class="
        flex flex-col mt-12 mx-0 text-center
        md:mt-0 md:mx-6 md:w-1/3
      "
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mx-auto w-12">
        <path class="fill-current text-orange-600" d="M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm16 12V7a2 2 0 0 1-2-2H6a2 2 0 0 1-2 2v8a2 2 0 0 1 2 2h12c0-1.1.9-2 2-2zM8 7h8a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2z"></path>
        <path class="fill-current text-orange-900" d="M11.65 18.23a4 4 0 1 1 4.7 0l2.5 3.44-2.23-.18-1.48 1.68-.59-4.2a4.04 4.04 0 0 1-1.1 0l-.6 4.2-1.47-1.68-2.23.18 2.5-3.44zM14 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
      </svg>

      <h2 class="font-semibold mt-1 text-entire-blue-900 text-2xl tracking-wider">
        Quality
      </h2>

      <p class="flex-1 max-w-md mt-3 mx-auto">
        Our ISO Quality Management System ensures that we monitor and document all critical processes.
      </p>

      <nuxt-link
        to="/quality"
        class="
          border-2 border-entire-blue-900 font-semibold inline-block mx-auto mt-6 px-8 py-1 rounded text-entire-blue-900
          hover:bg-entire-blue-900 hover:text-white
        "
      >
        Learn More
      </nuxt-link>
    </article>


  </div>
</template>

<script>
  export default {
    name: "PageCards"
  }
</script>
