<template>
  <nav class="flex justify-between container mx-auto items-center py-10">
      <p class="text-4xl font-pupy hidden md:block">Stress Generator.</p>
      <p class="text-3xl font-pupy ml-8 block md:hidden">SG.</p>

      
      <div class="hidden md:flex font-pupy text-xl">
      <router-link to="/" class="mr-7">Home</router-link>
      <router-link to="/about" class="mr-7">About</router-link>
      <router-link to="/contact" class="mr-7">Contact</router-link>
      </div>

      <div class="block md:hidden" @click="menu">
        <img src="menu.png" width="40" class="mr-8" alt="menu">
      </div>

      <div class="font-pupy text-xl fixed z-20 top-0 right-0 overflow-hidden h-screen bg-white flex flex-col justify-center items-center md:hidden transition-all" :class="isopen ? 'w-[85vw]' : 'w-0'">
        <router-link to="/" >Home</router-link>
        <router-link to="/about" class="mt-7">About</router-link>
        <router-link to="/contact" class="mt-7">Contact</router-link>
      </div>
      <div class="fixed top-0 left-0 w-screen h-screen bg-[#0000007c] md:hidden " :class="isopen ? 'block' : 'hidden' "  @click="isopen = false"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isopen: false
    }
  },
  methods: {
    menu(){
      this.isopen = true
    }
  },
}
</script>