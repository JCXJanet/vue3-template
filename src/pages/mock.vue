<template>
  <h3>测试</h3>
  <div>{{ info }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import userApi from "@/api/user";

const info = ref<any>([]);

onMounted(() => {
  userApi.getDict().then((res) => {
    console.log('test info:', res);
    info.value = res.data;
  })
})
</script>

<style scoped>
</style>