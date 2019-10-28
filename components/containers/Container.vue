<template>
  <div
    class="container px-3"
    :class="{'mx-auto': centered}"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Container",
    props: {
      centered: {
        default: false,
        type: Boolean
      }
    }
  }
</script>
