import uuidv4 from 'uuid/v4'

export const namespaced = true

export const state = {
  notifications: []
}

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: uuidv4()
    })
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  }
}
