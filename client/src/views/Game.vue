<template>
<div id="nav">
<div class="page-wrapper">
<div class="container">
  <div class="row">
    <div class="col-3">
      <span><h3> {{ $route.params.username }}, </h3></span>
      <span><h3> Your score is {{ point }} </h3></span>
    </div>
    <div class="jumbotron question-body" style="min-height:200px">
      <h1 id="question"> {{ questions[index].question }}</h1>
    </div>
  </div>
  <div class="row">
    <a href="" @click.prevent="compareAnswer(questions[index].choice[0], questions[index].answer)" class="col-sm-12 col-md-6 bg-primary text-center text-white" style="padding:50px">
      <h4>{{ questions[index].choice[0] }}</h4>
    </a>
    <a href="" @click.prevent="compareAnswer(questions[index].choice[1], questions[index].answer)" class="col-sm-12 col-md-6 bg-warning text-center text-white" style="padding:50px">
      <h4>{{ questions[index].choice[1] }}</h4>
    </a>
    <a href="" @click.prevent="compareAnswer(questions[index].choice[2], questions[index].answer)" class="col-sm-12 col-md-6 bg-danger text-center text-white" style="padding:50px">
      <h4>{{ questions[index].choice[2] }}</h4>
    </a>
    <a href="" @click.prevent="compareAnswer(questions[index].choice[3], questions[index].answer)" class="col-sm-12 col-md-6 bg-success text-center text-white" style="padding:50px">
      <h4>{{ questions[index].choice[3] }}</h4>
    </a>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Game',
  data () {
    return {
      index: 0,
      questions: [],
      point: 0,
      players: [],
      username: ''
    }
  },
  methods: {
    getQuestion () {
      this.$socket.emit('getQuestion')
      // localStorage.clear()
    },
    nextQuestion () {
      if (this.index === this.questions.length - 1) {
        const payload = {
          username: this.username,
          score: this.point
        }
        this.$socket.emit('sendScore', payload)
        this.$router.push('/finish')
      } else {
        this.index++
      }
    },
    compareAnswer (choice, answer) {
      if (choice === answer) {
        this.point += 5
      }
      this.nextQuestion()
    }
  },
  sockets: {
    saveQuestions (payload) {
      console.log('savequestions')
      this.questions = payload
    }
  },
  created () {
    this.index = 0
    this.getQuestion()
    this.username = this.$route.params.username
  }
}
</script>

<style scoped>
  .page-wrapper {
    background-color: rgb(243, 239, 234);
    height: 100vh;
    margin: auto;
  }
  .question-body {
    background-color: rgb(139, 131, 131);
    color: white;
    width: 100%;
    text-align: center;
    /* height: 80%; */
    margin: 25px 10px 30px 10px;
  }
</style>
