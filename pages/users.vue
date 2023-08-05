<template>
    <div class="mr-4">
        <CustomTable v-model="pagination" :items="users" :headers="headers" :pagination="pagination"
            @change-page="getUsers()">
            <div class="mr-4">
                <UsersFilterUser v-model="advancedFilter" @search="getUsersFilter()"></UsersFilterUser>
            </div>
        </CustomTable>
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()
console.log(utils.test())
import { useErpStore } from '~/stores/erpStore'
import userActions from "~/apis/apiUser"
const erp = useErpStore()
// VARIABLES
let users = ref([])
let filter = ref([])
let pagination = ref({
    total: 0,
    limit: 10,
    offset: 0,
    search: '',
    page: 1
})
let advancedFilter = ref({
    username: '',
    name: '',
    surname: '',
    tel: '',
    email: '',
    disabled: null
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

function setPaginate() {
    if (pagination.value?.search) {
        filter.value.push({ 'text': pagination.value.search })
    }
    filter.value.push({ limit: pagination.value.limit, offset: pagination.value.offset })
}
function setAdvancedFilter() {
    Object.keys(advancedFilter.value).forEach((clave) => {
        const valor = advancedFilter.value[clave];
        if (valor) {
            let find = filter.value.find((index, item) => index == clave)
            if (!find) {
                filter.value.push({ [clave]: valor, 'type': 'like' })

            }
        }
    });
}
async function getUsers() {
    filter.value = []
    setAdvancedFilter()
    setPaginate()
    await erp[userActions.GET_USERS.action](filter.value).then(response => {
        users.value = response.data.items
        pagination.value.total = response.data.total
        pagination.value.limit = response.data.limit
        pagination.value.offset = response.data.offset

    })
}
function getUsersFilter() {
    pagination.value.search = ''
    pagination.value.offset = 0
    pagination.value.page = 1
    getUsers()
}

// console.log(runtimeConfig.public.apiUrl);
// const { data: user, pending: loaduser, error: erroruser } = await useFetch(`${runtimeConfig.public.apiUrl}/user/1`)
onMounted(() => {
    filter.value = []
    filter.value.push({ limit: pagination.value.limit, offset: pagination.value.offset })
    getUsers()
})


</script>