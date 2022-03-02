<template>
  <button v-on:click="$emit(emitName)"
    :disabled="isDisabled"
    class="button-text"
    v-bind:class="getClass()">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
   buttonText: {
    type: String,
    required: false,
    default: 'Button'
   },
   hasEmphasis: {
     type: Boolean,
     required: false,
     default: false
   },
   isDisabled: {
     type: Boolean,
     required: false,
     default: false
   },
   emitName: {
     type: String,
     required: false,
     default: 'button-clicked'
   }
  },
  methods: {
    getClass() {
      return {
        'button-text-emphasis': this.hasEmphasis
      }
    }
  }
}
</script>

<style scoped>
.button-text {
  display: block;
  min-width: 5em;
  min-height: 3em;
  padding: .2em;
  text-align: center;
  margin: .2em;

  font-family: Base-Light;
  font-size: 1.1em;
  color: var(--primary-color);
  background-color: var(--transparent-color);
  border: none;
  outline: none;
  border-radius: 0em;
  box-shadow: none;
  transition: all 0.5s cubic-bezier(.25,.8,.25,1);
}
.button-text:hover {
  box-shadow: none;
  color: var(--secondary-color);
  cursor: pointer;
}
.button-text:active {
  color: var(--primary-color);
  box-shadow: none;
}

.button-text-emphasis {
  font-family: Base-Bold;
}
.button-text-emphasis:active {
  color: var(--primary-color);
}

.button-text:disabled {
  opacity: .3;
  pointer-events: none;
}
</style>
