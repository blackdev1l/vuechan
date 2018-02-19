<template lang="pug">
  .ui.container
    .ui.four.column.grid.stackable.cards
      .column(v-for='thread in threads')
        threadPreview(
          :id="thread.id",
          :description="thread.description",
          :img="thread.img",
          :board="board",
          :replies="thread.replies"
        )

</template>

<script>
import ThreadPreview from './ThreadPreview.vue'
import axios from 'axios'

export default {
  name: 'catalog',
  data () {
    return {
      threads: [],
      board: ''
    }
  },
  components: {
    ThreadPreview
  },
  watch: {
    '$route' (data) {
      this.board = data.path
      this.threads = []
      axios.get('https://cors-anywhere.herokuapp.com/https://a.4cdn.org' + this.board + '/catalog.json')
      .then((response) => {
        response.data.forEach(f => {
          f.threads.forEach(e => {
            this.threads.push({
            id: e.no,
            description: e.com.substr(0, 150),
            img: e.tim + e.ext,
            replies: e.replies
            })
          })
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-top:5%;
  }
</style>
