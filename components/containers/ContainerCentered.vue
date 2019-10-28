<template>
  <container
    :centered="true">
    <slot></slot>
  </container>
</template>

<script>
  import Container from '~/components/containers/Container';

  export default {
    name: "ContainerCentered",
    components: {
      Container
    }
  }
</script>
