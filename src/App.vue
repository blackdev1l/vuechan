<template lang="pug">
  .app
    .ui.sidebar.inverted.vertical.menu
      a.item(v-for="menu in menus") {{menu.board}}
    .ui.fixed.inverted.menu
        a.header.item(v-on:click="showBar") VueChan
    .pusher
      <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  beforeMount () {
    var axios = require('axios')
    axios.get('https://cors-anywhere.herokuapp.com/https://a.4cdn.org/boards.json')
      .then(response => {
        response.data.boards.forEach(e => {
          this.menus.push({
            title: e.title,
            board: e.board
          })
        })
      })
  },
  data () {
    return {
      menus: []
    }
  },
  methods: {
    showBar: function () {
      var jQuery = require('jquery')
      jQuery('.sidebar').sidebar('toggle')
    }
  }
}
</script>

<style>

</style>
