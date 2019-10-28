<template>
  <div class="container mx-auto px-3">

    <jumbotron-header
      background_image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1250&q=80"
      background_overlay_rgba="30,30,30,0.75"
    >
        Sample Header
        <br class="hidden md:inline">
        Text Here
    </jumbotron-header>


  </div>
</template>

<script>
  import JumbotronHeader from '~/components/containers/JumbotronHeader';

  export default {
    name: 'Home',
    components: {
      JumbotronHeader
    }
  }
</script>
