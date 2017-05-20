<template lang="pug">
  .app
    <sidebar></sidebar>
    .pusher
      <router-view></router-view>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Sidebar
  },
  events: {
    'changeBoard': function (data) {
      this.$broadcast('changeBoard', data)
    }
  }
}
</script>
