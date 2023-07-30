<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script setup>
import userActions from "~/apis/apiUser"
const erpStore = useErpStore()
async function loggedMe(){
  await erpStore[userActions.ME.action]()
  console.log('sss');
}

onMounted(()=>{
  loggedMe()
})
</script>