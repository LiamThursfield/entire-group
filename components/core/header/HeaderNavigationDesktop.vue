<template>
  <ul
    class="
      header-navigation-desktop
      flex-row font-semibold hidden items-center text-indigo-900 tracking-wider uppercase
      md:flex
    "
  >
    <li
      v-for="(navigation_link, key, index) in navigation_links"
      :key="key"
      class="
        mx-3
        hover:text-orange-600
      "
      :class="{ 'mr-0': isLastLink(index) }"
    >
      <nuxt-link :to="navigation_link.url">
        {{ navigation_link.label }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "HeaderNavigationDesktop",
    props: {
      navigation_links: {
        required: true,
        type: Object
      },

    },
    methods: {
      isLastLink(index) {
        let length = Object.keys(this.navigation_links).length;

        return index === length - 1;
      }
    }
  }
</script>
