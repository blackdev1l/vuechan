<template lang="pug">
  .app
    .ui.sidebar.inverted.vertical.menu
      router-link.item(v-for="menu in menus" :key="menu.board" :to="{name: 'Catalog' ,params: { board: menu.board}}") {{menu.title}}
    .ui.fixed.inverted.menu
        a.header.item(v-on:click="showBar") VueChan
    .pusher
      <router-view></router-view>
</template>

<script>
import axios from 'axios'
import jquery from 'jquery'
export default {
  name: 'app',
  beforeMount () {
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
      jquery('.sidebar').sidebar('toggle')
    }
  }
}
</script>

<style>

</style>
