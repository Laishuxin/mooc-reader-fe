<template>
  <h1>is login: {{ accountStore.isLogin }}</h1>
</template>

<script lang="ts" setup>
import { useAccountStore } from '@/store'

const accountStore = useAccountStore()
</script>

<style lang="scss" scoped></style>
