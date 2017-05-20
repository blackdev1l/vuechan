<template lang="pug">
  .ui.container
    .ui.four.column.grid
      .column(v-for='thread in threads')
        thread(:description="thread.description", :id="thread.id", :img="thread.img")

</template>

<script>
import Thread from './Thread.vue'
import axios from 'axios'

export default {
  name: 'Catalog',
  beforeMount () {
    console.log('beforeMount')
    axios.get('https://cors-anywhere.herokuapp.com/https://a.4cdn.org/' + this.board + '/catalog.json')
      .then((response) => {
        response.data[0].threads.forEach(e => {
          this.threads.push({
            id: e.no,
            description: e.com,
            img: e.tim + e.ext
          })
        })
      })
  },
  data () {
    return {
      threads: []
    }
  },
  components: {
    Thread
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-top:5%;
  }
</style>
