<template>
  <div>
    <header class="bg-white relative z-10">

      <div
        class="
          container flex flex-row h-16 items-center justify-center mx-auto relative px-3 py-1
          md:items-baseline md:py-5 md:h-auto md:justify-between
        ">

        <logo />

        <nav
          class="
        absolute flex flex-col right-0 mr-3
        md:flex-row md:mr-0 md:relative
      "
        >

          <button
            class="
          cursor-pointer fill-current flex justify-center text-indigo-900
          focus:outline-none focus:text-orange-600
          hover:text-orange-600
          md:hidden
        "
            @click="toggleMobileNavVisible"
          >
          <span v-if="!is_mobile_nav_visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-6"
            >
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </span>

            <span v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-6"
            >
              <rect
                class="primary"
                width="18"
                height="18"
                x="3"
                y="3"
                rx="3"
              ></rect>
              <path
                class="text-white fill-current"
                d="M13.41 12l2.83 2.83a1 1 0 01-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 11-1.41-1.41L10.59 12 7.76 9.17a1 1 0 011.41-1.41L12 10.59l2.83-2.83a1 1 0 011.41 1.41L13.41 12z"
              ></path>
            </svg>
          </span>
          </button>

          <!-- Desktop Nav -->
          <ul
            class="
          header-navigation-desktop
          flex-row font-semibold hidden items-center text-indigo-900 tracking-wider uppercase
          md:flex
        "
          >
            <li
              v-for="(nav_link, key) in nav_links"
              :key="key"
              class="
              mx-3
              hover:text-orange-600
            "
            >
              <nuxt-link :to="nav_link.url">
                {{ nav_link.label }}
              </nuxt-link>
            </li>
          </ul>

        </nav>

      </div>

    </header>

    <!-- Mobile Nav -->
    <transition name="slide">
      <nav
        v-show="is_mobile_nav_visible"
        class="
        header-navigation-mobile
        absolute bg-indigo-900 inset-0 mt-16 w-full
        md:hidden
      "
      >
        <ul
          class="h-full overflow-auto"
        >
          <li
            @click="is_mobile_nav_visible = false"
          >
            <nuxt-link
              class="
                block p-4 text-l text-center text-white
                hover:bg-indigo-1000
              "
              to="/"
            >
              Home
            </nuxt-link>
          </li>

          <li
            v-for="(nav_link, key) in nav_links"
            :key="key"
            @click="is_mobile_nav_visible = false"
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
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
  import Logo from '~/components/core/Logo';

  export default {
    name: 'HeaderNavigation',
    components: {
      Logo
    },
    data() {
      return {
        is_mobile_nav_visible: false,
        nav_links: {
          about: {
            label: "About",
            url: '/about'
          },
          industries: {
            label: "Industries",
            url: '/industries'
          },
          services: {
            label: "Services",
            url: '/services'
          },
          quality: {
            label: "Quality",
            url: '/quality'
          }
        }
      }
    },
    methods: {
      setMobileNavVisible(is_visible) {
        this.is_mobile_nav_visible = is_visible;
      },
      toggleMobileNavVisible() {
        this.setMobileNavVisible(!this.is_mobile_nav_visible);
      }
    }
  }
</script>
