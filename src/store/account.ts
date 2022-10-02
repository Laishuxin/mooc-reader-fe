import { defineStore } from 'pinia'
import { isDef } from '@/utils'

export const useAccountStore = defineStore('account', {
  state: () => {
    return { user: null }
  },
  actions: {},
  getters: {
    isLogin(state) {
      return isDef(state.user)
    }
  }
})
