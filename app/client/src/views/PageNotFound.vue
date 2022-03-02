<template>
	<div class="main-container">
    <TopNavigation :username="user.username" />
		<div style="margin-top:4em"></div>
		<h2>Oops. This page was not found.</h2>
	</div>
</template>

<script>
import TopNavigation from "../components/top-navigation.vue"

export default {
  data () {
    return {
			user: {}
    }
  },
  components: {
    TopNavigation
	}
}
</script>

