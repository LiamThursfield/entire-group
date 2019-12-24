<template>
  <ul
    class="
      header-navigation-desktop
      flex-row font-semibold hidden items-center text-entire-blue-900 text-sm tracking-wider uppercase
      md:flex
    "
  >
    <li
      v-for="(navigation_link, key) in navigation_links"
      :key="'header-link-desktop-' + key"
      class="
        mx-2
        lg:mx-2
        hover:text-orange-600
      "
    >
      <nuxt-link :to="navigation_link.url">
        {{ navigation_link.label }}
      </nuxt-link>
    </li>

    <li
      class="
        ml-2 mr-0
        lg:ml-3
      "
    >
      <nuxt-link
        class="
          bg-orange-600 px-3 py-1 rounded text-white
          hover:bg-orange-500
        "
        to="/contact"
      >
        Contact
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
