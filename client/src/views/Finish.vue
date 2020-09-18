<template>
  <div class="page-wrapper">
    <div id="nav" style="color: transparent;"></div>
    <div class="container">
      <div class="bg-img">
        <img id="bg-img" style="height: 20vh; max-width: 100%" src="../assets/1600px-MarvelLogo.svg.png" alt="">
      <h1>You have finished the quiz!</h1>
      </div>
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

<style scoped>
  .page-wrapper {
  /* background-color: rgb(243, 239, 234); */
  background-image: url("../assets/bg-regis.jpg");
  background-size: cover;
  min-height: 100vh;
  color: white;
  font-size: 30px;
  }
   .bg-img {
    /* font-weight: 900; */
    color: white;
    margin: 100px 0 40px 0;
  }
  #nav {
    background: rgba(0,0,0,0.5);
  }
</style>
