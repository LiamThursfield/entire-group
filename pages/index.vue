<template>
  <div class="container mx-auto px-3">

    <jumbotron
      background_image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80"
      background_overlay_rgba="30,30,30,0.75"
    >
      <h1 class="
        font-black  pb-12 pt-32 px-12 text-4xl text-white
        md:leading-tight md:text-6xl md:pb-16 md:pt-40 md:px-16
      ">
        Sample Header
        <br>
        Text Here
      </h1>
    </jumbotron>


  </div>
</template>

<script>
  import Jumbotron from '~/components/containers/Jumbotron';
  export default {
    name: 'Home',
    components: {
      Jumbotron
    }
  }
</script>
