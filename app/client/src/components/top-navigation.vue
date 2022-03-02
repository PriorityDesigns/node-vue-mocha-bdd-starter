<template>
  <div class="container">
    <div class="container-row">
      <router-link to="/" class="container-home">
        <img src="../assets/prioritydesigns_logo_website.svg" class="pd-logo"/>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  props: {
   username: {
    type: String,
    required: false,
    default: ''
   }
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
.container {
  position: absolute;
  width: 100%;
  height: 4rem;
  background-color: var(--primary-bg-color);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.container-row {
  position: relative;
  display: flex;
  flex-flow: row;
  height: 100%;
  margin-left: 1rem;
}

.container-home {
	position: relative;
  display: flex;
  flex-flow: row;
  justify-content: center;
  font-size: 1.2rem;
  font-family: Base-Regular;
  color: white;
}
.container-home:hover {
	color: var(--secondary-color);
}

.pd-logo {
  height: auto;
  width: 12rem;
  vertical-align: middle;
}

</style>
