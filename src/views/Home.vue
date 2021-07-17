<template>
  <div class="home">
    <NavBar/>
    <Landing/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    Landing,
    NavBar
  }
}
</script>
