<template>
    <div>
        {{ erp.msg }}
        {{ erp.upper }}
        <button class="shadow-2xl" @click="erp.setMsg('jejejeje')">set new message button</button>

        <CustomTable></CustomTable>
        <!-- {{ user }} -->
        {{ erp.users }}
        <button @click="getuserss">refresh </button>
    </div>
</template>
<script setup>
// import { ref, onMounted ,computed} from 'vue'
const runtimeConfig = useRuntimeConfig()
console.log(utils.test())
import { useErpStore } from '~/stores/erpStore'
const erp = useErpStore()
definePageMeta({
    middleware: 'is-logged-out'
})
// const double = computed(() => count.value * 2)
// const users = ref([])
// const loadusers = ref(null)
// const errorusers = ref(null)

// const { data: users, pending: loaduser, error: errorusers, refresh: getuserss } = await useFetch(`${runtimeConfig.public.apiUrl}/user/`,
//     {
//         method: "POST",
//         body: { 'params': [] },
//         headers: {
//             Accept: 'application/json',
//             'Cache-Control': 'no-cache'
//         }
//     })

// const appConfig = useAppConfig()
// const route = useRoute()
console.log(runtimeConfig.public.apiUrl);
// const { data: user, pending: loaduser, error: erroruser } = await useFetch(`${runtimeConfig.public.apiUrl}/user/1`)
onMounted(() => {
    erp.getUsers()
    console.log('pepepep');
    // getUsers()
})


</script>