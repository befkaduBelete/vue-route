<template>
  <div>
    <NavBar />
    <RouterView></RouterView>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>
