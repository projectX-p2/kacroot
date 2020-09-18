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
  methods : {
    playSound(){
      var sound = new Audio('assets/logu.mp3')
    }
  }
}
</script>
