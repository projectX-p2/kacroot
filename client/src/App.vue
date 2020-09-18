<template>
<div id='body'>
  <div id="app">
    <div id="nav">
      <router-link to="/"><h1>KACROOT APP</h1></router-link>
      <audio controls id="myVideo" autoplay loop>
      <source src="https://vgmdownloads.com/soundtracks/harvest-moon-back-to-nature/fnirnrfw/01-title.mp3" type="audio/mp3" autoplay>
      </audio>
    </div>
    <router-view/>
  </div>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
