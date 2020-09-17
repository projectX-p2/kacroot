<template>
  <div>
    <div class="container">
      <form @submit.prevent="submitUser()">
        <div class="form-group">
          <label for="inputUsername">Enter your Username</label>
          <input type="text" class="form-control" id="inputUsername" v-model="username" />
          <br>
          <button type="submit" class="btn btn-primary">Let's Play</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    submitUser () {}
  },
  sockets: {
    init (payload) {
      console.log(payload)
    }
  }
}
</script>
