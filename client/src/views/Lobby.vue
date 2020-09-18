<template>
<div>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Players</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
        </tr>
        <tr>
          <td>Jacob</td>
        </tr>
        <tr>
          <td>Larry</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'Lobby',
  data:{
    music:'./assets/lobu.mp3'
  },
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(music);
        audio.play();
      }
    }
  },
  created(){
    audio.play();
  }
}
</script>
