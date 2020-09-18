<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="bg-img">
        <img id="bg-img" style="height: 20vh; max-width: 100%" src="../assets/1600px-MarvelLogo.svg.png" alt="">
        <b><p>Welcome to Marvel Quiz!</p></b>

      </div>
      <form class="form-box" @submit.prevent="submitUser()">
        <div class="form-group">
          <label id="inputUsername" for="inputUsername">Player name</label>
          <input type="text" class="form-control" style="" id="inputUsername" v-model="username" placeholder="Enter your name" />
          <br>
          <button type="submit" class="btn btn-primary">Let's Play</button>
        </div>
      </form>

      <table class="table table-body1" v-if="player">
        <thead class="thead-dark">
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
      sortedHighScore: [],
      player: ''
    }
  },
  methods: {
    submitUser () {
      this.$socket.emit('participantRegistration', { username: this.username })
      // this.$store.dispatch()
      localStorage.setItem('name', this.username)
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
      // console.log(payload)
      this.highScore = payload
      this.sortHighScore()
      this.player = localStorage.name
    }
  },
  created () {
    this.getHighScore()
  }
}
</script>

<style scoped>
  .page-wrapper {
    /* background-color: rgb(243, 239, 234); */
    background-image: url("../assets/bg-regis.jpg");
    min-height: 100vh;
    color: white;
    font-size: 30px;
  }
  #bg-img {
    /* font-weight: 900; */
    color: white;
    margin: 100px 0 40px 0;
  }
  #inputUsername {
    width: 30vh;
    margin: auto;
    text-align: center;
    font-size: 20px;
  }

  .table-body1 {
    font-size: 20px;
    color: white;
  }

</style>
