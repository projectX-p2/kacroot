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
      music: 'https://vgmdownloads.com/soundtracks/harvest-moon-back-to-nature/fnirnrfw/01-title.mp3'
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
    playSound () {
      var audio = new Audio('https://vgmdownloads.com/soundtracks/harvest-moon-back-to-nature/fnirnrfw/01-title.mp3')
      audio.play()
    }
  },
  sockets: {
    init (payload) {
      console.log(payload)
    },
    sendHighScore (payload) {
      this.highScore = payload
    }
  },
  created () {
    this.getHighScore()
    this.playSound()
  }
}
</script>
