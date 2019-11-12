<template>
  <transition name="slide-left">
    <nav
      v-show="is_visible"
      class="
          header-navigation-mobile
          absolute bg-indigo-900 inset-0 mt-16 z-10 w-full
          md:hidden
        "
    >
      <ul
        class="h-full overflow-auto"
      >
        <li
          v-for="(nav_link, key) in all_links"
          :key="'header-link-mobile-' + key"
          @click="linkSelected"
        >
          <nuxt-link
            class="
                block p-4 text-l text-center text-white
                hover:bg-indigo-1000
              "
            :to="nav_link.url"
          >
            {{ nav_link.label }}
          </nuxt-link>
        </li>

        <li
          @click="linkSelected"
        >
          <nuxt-link
            class="
                block p-4 text-l text-center text-white
                hover:bg-indigo-1000
              "
            to="/contact"
          >
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </transition>
</template>
<script>
  import _ from 'lodash';

  export default {
    name: "HeaderNavigationMobile",
    props: {
      is_visible: {
        required: true,
        type: Boolean
      },
      navigation_links: {
        required: true,
        type: Object
      },
      show_home: {
        default: false,
        type: Boolean
      }
    },
    computed: {
      all_links() {
        if (this.show_home) {
          let links = {};

          links['home'] = {
            label: "Home",
              url: '/'
          }

          return _.merge(links, this.navigation_links);
        } else {
          return this.navigation_links;
        }
      }
    },
    methods: {
      linkSelected() {
        this.$emit('link-selected', true);
      }
    }
  }
</script>
