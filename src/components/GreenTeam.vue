<template>
  <div class="green-team">
    <h1>Green Team</h1>
    <div> 
      <h3> Score Total: {{scoreTotal}} </h3>  
    </div>
    <div> 
      <h3> Mi Score: {{ miScore }}</h3>  
    </div>
    <button @click="addScore"> 
      Add score + 3
    </button>
  </div>
</template>

<script>
import { getters, actions } from '@/store/index.js';

export default {
  name: 'GreenTeam',
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
       this.miScore += 3
       actions.addScore(3)
    }
  }
}
</script>

<style scoped>
  .green-team{
    background-color: #41B883;
    padding: 5px;
    margin-bottom: 10px;
  }
</style>