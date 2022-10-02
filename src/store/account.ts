import { isDef } from '@/utils'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
  state: () => {
    return { user: null }
  },
  actions: {},
  getters: {
    isLogin(state) {
      return isDef(state.user)
    },
  },
})
