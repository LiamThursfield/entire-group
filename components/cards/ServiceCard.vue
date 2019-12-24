<template>
  <div
    class="
      service-card
      bg-white h-full overflow-hidden relative rounded-lg shadow-lg
      sm:mx-2
    "
  >
    <img
      :src="service.image"
      class="w-full"
      :alt="service.title + ' Image'"
    >
    <div
      class="
        service-card-overlay
        absolute bottom-0 flex items-end left-0 right-0 top-0
      "
    >
      <h2 class="block font-semibold p-3 text-white text-lg">
        {{ service.title }}
      </h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ServiceCard",
    props: {
      service: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style scoped>
  .service-card:hover .service-card-overlay {
    opacity: 0;
  }

  .service-card-overlay {
    background: rgba(5, 25, 78, 0.8);
    transition: opacity 450ms ease-in-out;
  }
</style>
