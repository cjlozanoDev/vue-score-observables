<template>
  <div class="red-team">
    <h1>Red Team</h1>
    <div> 
      <h3> Score Total: {{ scoreTotal }}</h3>  
    </div>
    <div> 
      <h3> Mi Score: {{ miScore }}</h3>  
    </div>
    <button @click="addScore"> 
      Add score +1 
    </button>
  </div>
</template>
<script>
import { getters, actions } from '@/store/index.js';

export default {
  name: 'RedTeam',
  data: () =>({
    miScore: 0
  }),
  computed: {
    scoreTotal() {
      return getters.scoreTotal()
    }
  },
  methods: {
    addScore() {
     this.miScore += 1
     actions.addScore(1)
    } 
  }
}
</script>
<style scoped>
  .red-team {
    background-color: #DD0331;
    padding: 5px;
    color: white
  }
</style>