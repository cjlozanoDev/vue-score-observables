<template>
  <div id="app">
    <GreenTeam/>
    <RedTeam/>
  </div>
</template>

<script>

import GreenTeam from '@/components/GreenTeam'
import RedTeam from '@/components/RedTeam'

export default {
  name: 'App',
  components: {
    GreenTeam,
    RedTeam
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
