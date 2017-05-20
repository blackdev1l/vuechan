<template lang="pug">
.ui.card
  .image
    img(v-bind:src="imglink")
  .content
    .description {{ description }}

  .extra.content
    i.comment.icon {{replies}}


</template>

<script>
  export default {
    name: 'threadPreview',
    props: ['img', 'description', 'board', 'replies'],
    beforeMount () {
      this.imglink = 'https://t.4cdn.org' + '/' + this.board + '/' + this.img
    },
    data () {
      return {
        imglink: ''
      }
    }
  }
</script>
