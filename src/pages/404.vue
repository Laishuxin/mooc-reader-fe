<template>
  <section>
    <h2>404</h2>
    <div>
      <VanButton size="large" type="primary" @click="handleClick">返回首页</VanButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const handleClick = () => {
  router.back()
}
</script>

<style scoped></style>
