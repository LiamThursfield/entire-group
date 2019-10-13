<template>
  <section
    class="bg-cover bg-center bg-top overflow-hidden"
    :style="main_style"
  >
    <slot></slot>
  </section>
</template>
<script>
  export default {
    name: "Jumbotron",
    props: {
      background_image: {
        default: '',
        type: String
      },
      background_overlay_rgba: {
        default: '',
        type: String
      }
    },
    computed: {
      main_style() {
        let gradient = '';
        if (this.background_overlay_rgba && this.background_overlay_rgba !== '') {
          gradient += 'linear-gradient(';
          gradient += 'rgba(' + this.background_overlay_rgba + '), ';
          gradient += 'rgba(' + this.background_overlay_rgba + '))';
        }

        let image = '';
        if (this.background_image && this.background_image !== '') {
          image = 'url("' + this.background_image + '")';
        }

        if (gradient === '' && image === '') {
          return ''
        }

        let style = 'background-image: ';
        if (gradient !== '') {
          style += gradient;
        }
        if (gradient !== '' && image !== '') {
          style += ', ';
        }
        if (image !== '') {
          style += image;
        }
        style += ';';

        return style;
      }
    }
  }
</script>
