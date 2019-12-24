<template>
  <article
    class="
      mt-6 max-w-sm w-full
      sm:w-1/2
      md:w-1/3
      xl:w-1/4
    "
  >
    <div
      class="
        bg-white h-full  overflow-hidden rounded-lg shadow-lg
        sm:mx-2
      "
    >
      <img
        :src="industry.image"
        class="w-full"
        :alt="industry.title + ' Image'"
      >

      <div class="px-2 py-6">
        <h2 class="font-semibold text-center text-entire-blue-900 text-lg">
          {{ industry.title }}
        </h2>

        <ul class="flex flex-wrap justify-center mt-4 -mx-1">
          <li
            v-for="(service, key) in industry.service_list"
            :key="industry.title + '-service-' + key"
            class="
              bg-blue-200 block font-semibold m-1 px-2 py-1 rounded text-center text-entire-blue-900 text-xs
              hover:bg-entire-blue-900 hover:text-white
            "
          >
            {{ service }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: "IndustryCard",
    props: {
      industry: {
        required: true,
        type: Object
      }
    }
  }
</script>
