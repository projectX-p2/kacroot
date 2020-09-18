<template>
  <div>
    <div class="container">
      <h1>You have finished the quiz!</h1>
      <button class="btn btn-lg btn-primary" @click="returnHome()">Return to Home</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    returnHome () {
      this.$router.push('/')
    }
  }
}
</script>
