<template>
  <div class="home-container">
    <TopNavigation/>		
  </div>
</template>

<script>
import TopNavigation from "../components/top-navigation.vue"

export default {
  components: {
    TopNavigation
  },
  data () {
    return {
    }
  },
  methods: {
		
  }
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  margin: 0rem;
}
</style>