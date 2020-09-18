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

      <table class="table" v-if="highScore">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user,id) in highScore" :key="id">
            <td>{{ user.username }}</td>
            <td>{{ user.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      highScore: [],
      sortedHighScore: []
    }
  },
  methods: {
    submitUser () {
      this.$socket.emit('participantRegistration', { username: this.username })
      // this.$store.dispatch()
      this.$router.push({ name: 'Game', params: { username: this.username } })
    },
    getHighScore () {
      this.$socket.emit('getHighScore')
    },
    sortHighScore () {
      this.highScore.sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
    }
  },
  sockets: {
    init (payload) {
      console.log(payload)
    },
    sendHighScore (payload) {
      this.highScore = payload
      this.sortHighScore()
    }
  },
  created () {
    this.getHighScore()
  }
}
</script>
