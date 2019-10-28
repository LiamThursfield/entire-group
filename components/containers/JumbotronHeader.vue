<template>
  <jumbotron
    :background_image="background_image"
    :background_overlay_rgba="background_overlay_rgba"
  >
    <h1 class="
      font-black px-12 py-16 text-center text-4xl text-white
      md:leading-tight md:text-6xl md:pb-16 md:pt-40 md:px-16 md:text-left
    ">
      <slot></slot>
    </h1>
  </jumbotron>
</template>
<script>
  import Jumbotron from '~/components/containers/Jumbotron';

  export default {
    name: "JumbotronHeader",
    components: {
      Jumbotron
    },
    props: {
      background_image: {
        default: '',
        type: String
      },
      background_overlay_rgba: {
        default: '',
        type: String
      }
    }
  }
</script>
