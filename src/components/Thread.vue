<template lang="pug">
.ui.card
  .image
    img(v-bind:src="imglink")
  .content
    .description {{ description }}

  .extra.content
    i.comment.icon


</template>

<script>
  export default {
    name: 'thread',
    props: ['threadId', 'img', 'description'],
    beforeMount () {
      this.imglink = 'https://t.4cdn.org/b/' + this.img
    },
    data () {
      return {
        imglink: ''
      }
    }
  }
</script>
