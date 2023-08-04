<template>
    <div>
        <CustomTable :items="users" :headers="headers" :pagination="pagination" @change-page="paginate($event)">
            <div class="">
               pon el filtro
            </div>
        </CustomTable>
        <!-- {{ user }} -->
        <!-- {{ users }} -->
        <!-- <button @click="getuserss">refresh </button> -->
    </div>
</template>
<script setup>
// import { ref, onMounted ,computed} from 'vue'
const runtimeConfig = useRuntimeConfig()
console.log(utils.test())
import { useErpStore } from '~/stores/erpStore'
import userActions from "~/apis/apiUser"
const erp = useErpStore()
let users = ref([])
let filter = ref([])
let pagination = ref({
    total: 0,
    limit: 5,
    offset: 0,
    search: ''
})
let headers = [
    { col: 'id', name: 'ID' },
    { col: 'username', name: 'usuario' },
    { col: 'tel', name: 'Telefono' },
    { col: 'email', name: 'Correo' },
    { col: 'disabled', name: 'Activo' },
    { col: 'created', name: 'Creado' },
    { col: 'actions', name: 'Acciones' }
]
definePageMeta({
    middleware: 'is-logged-out'
})
function paginate(newPagination) {
    filter.value = []
    console.log(newPagination.limit);
    console.log(newPagination.offset);
    pagination.value.limit = newPagination.limit
    pagination.value.offset = newPagination.offset
    if (newPagination?.search) {
        filter.value.push({ 'text': newPagination.search })
    }
    console.log(pagination.value);

    filter.value.push({ limit: pagination.value.limit, offset: pagination.value.offset })
    getUsers(filter)
    // getUsers()
}
async function getUsers(filter) {
    console.log(pagination);
    console.log(pagination.value);

    await erp[userActions.GET_USERS.action](filter.value).then(response => {
        users.value = response.data.items
        pagination.value.total = response.data.total
        pagination.value.limit = response.data.limit
        pagination.value.offset = response.data.offset

    })
}

console.log(runtimeConfig.public.apiUrl);
// const { data: user, pending: loaduser, error: erroruser } = await useFetch(`${runtimeConfig.public.apiUrl}/user/1`)
onMounted(() => {
    filter.value = []
    filter.value.push({ limit: pagination.value.limit, offset: pagination.value.offset })
    getUsers(filter)
})


</script>