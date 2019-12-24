<template>
  <article
    class="
      mt-8
      md:mt-12 md:w-1/2
    "
  >
    <div
      class="
        bg-white border-t-4 border-entire-blue-900 h-full p-8 rounded-lg shadow-lg text-center
        md:border-t-8 md:mx-3
      "
    >
      <img
        :src="image_source"
        class="
          h-12 mx-auto object-contain w-auto
          md:h-16
        "
        :alt="image_alt"
      >

      <div class="mt-6">
        <slot/>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: "CompanyCard",
    props: {
      image_alt: {
        required: true,
        type: String
      },
      image_source: {
        required: true,
        type: String
      },
    }
  }
</script>
