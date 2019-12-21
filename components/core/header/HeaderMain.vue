<template>
  <div>
    <header class="bg-white relative z-10">

      <div
        class="
          container flex flex-row h-16 items-center justify-center mx-auto relative px-3 py-1
          md:items-baseline md:py-5 md:h-auto md:justify-between
        "
      >

        <logo />

        <nav
          class="
            absolute flex flex-col right-0 mr-3
            md:flex-row md:mr-0 md:relative
          "
        >

          <hamburger-button
            :show_close_icon="is_mobile_nav_visible"
            @menu-toggled="setMobileNavVisible"
          />

          <header-navigation-desktop
            :navigation_links="navigation_links"
          />

        </nav>

      </div>

    </header>

    <header-navigation-mobile
      :is_visible="is_mobile_nav_visible"
      :navigation_links="navigation_links"
      @link-selected="setMobileNavVisible(false)"
    />

  </div>
</template>

<script>
  import HamburgerButton from '~/components/buttons/HamburgerButton';
  import HeaderNavigationDesktop from '~/components/core/header/HeaderNavigationDesktop'
  import HeaderNavigationMobile from '~/components/core/header/HeaderNavigationMobile'
  import Logo from '~/components/core/Logo';

  export default {
    name: 'Header',
    components: {
      HamburgerButton,
      HeaderNavigationDesktop,
      HeaderNavigationMobile,
      Logo
    },
    data() {
      return {
        is_mobile_nav_visible: false,
        mobile_nav_scroll_class: 'mobile-hide-scroll',
        navigation_links: {
          home: {
            label: "Home",
            url: '/'
          },
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
        if (is_visible) {
          document.body.classList.add(this.mobile_nav_scroll_class);
        } else {
          document.body.classList.remove(this.mobile_nav_scroll_class);
        }
      },
    }
  }
</script>
