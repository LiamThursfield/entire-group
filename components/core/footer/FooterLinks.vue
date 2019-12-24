<template>
  <div class="
    mt-8 pt-8 border-t border-white
    md:border-t-0 md:mt-0 md:pt-0
  "
  >
    <h2 class="font-semibold">
      Site Links
    </h2>

    <ul class="flex flex-row flex-wrap">
      <li
        v-for="(link, key) in navigation_links"
        :key="'footer-link-' + link"
        class="block mt-3 w-1/2"
      >
        <nuxt-link
          :to="link.url"
          class="
            text-lg
            hover:text-orange-500
          "
        >
          {{ link.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'FooterLinks',
    data() {
      return {
        navigation_links: {
          home: {
            label: "Home",
            url: '/'
          },
          about: {
            label: 'About',
            url: '/about'
          },
          industries: {
            label: 'Industries',
            url: '/industries'
          },
          services: {
            label: 'Services',
            url: '/services'
          },
          quality: {
            label: 'Quality',
            url: '/quality'
          },
          contact: {
            label: 'Contact',
            url: '/contact'
          }
        }
      }
    }
  }
</script>
