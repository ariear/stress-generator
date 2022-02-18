<template>
  <Navbar />

  <div>
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/partials/Navbar.vue'
export default {
    components: { Navbar }
}
</script>