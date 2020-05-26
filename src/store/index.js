import Vue from 'vue'

const state = Vue.observable({
    scoreTotal: 0
});

export const getters = {
  scoreTotal: () => state.scoreTotal
}

export const mutations = {
  setScoreTotal: val => state.scoreTotal += val
}

export const actions = {
  addScore: mutations.setScoreTotal
}