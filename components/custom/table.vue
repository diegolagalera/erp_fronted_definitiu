<template>
    <div>
        <div class="relative overflow-x-auto shadow-md rounded-lg">
            <div class="flex justify-between py-4 dark:bg-gray-800 px-4 bg-white">
                <div v-if="!advancetFilter">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" v-model="search"
                            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for users">
                    </div>
                </div>
                <div v-else class="w-full">
                    <slot></slot>
                </div>
                <div class="h-full">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-blue-600
                     dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        :class="advancetFilter ? '!bg-red-500' : ''" @click="advancetFilter = !advancetFilter">{{
                            advancetFilter ? "x" : 'Filtro avanzado' }}</button>

                    <!-- <button class="" @click="advancetFilter = !advancetFilter">FILTRO</button> -->

                </div>

            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 w-full">
                    <tr class="">
                        <th v-for="head in headers" :key="head" class="w-40 p-4"
                            :class="head.col == 'actions' ? 'text-end pr-10' : '', head.col === 'id' ? '!w-4' : ''">
                            <span>
                                {{ head.name }}
                            </span>


                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item" class="bg-white border-b hover:bg-gray-200 h-12">
                        <td v-for="head in headers" :key="head" class="px-4"
                            :class="head.col == 'actions' ? 'text-end pr-10' : ''">
                            <span v-if="head.col == 'actions'">
                                <Icon name="material-symbols:edit"></Icon>
                            </span>
                            <span v-else>
                                {{ item[head.col] }}

                            </span>

                        </td>
                    </tr>

                </tbody>
            </table>
            <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
                        class="font-semibold text-gray-900 dark:text-white">
                        {{ pagination.offset }}-{{ pagination.limit + pagination.offset }}
                    </span>
                    of
                    <span class="font-semibold text-gray-900 dark:text-white">{{ pagination.total }}</span></span>
                <div class="flex text-sm h-10 mr-8">
                    <button class="mb-1 mr-4" v-if="currentPage !== 1" @click="currentPage--">
                        <Icon name="material-symbols:skip-previous">

                        </Icon>
                    </button>
                    <div class="mt-2 mr-4">
                        Pagina {{ currentPage }} de {{ pages }}
                    </div>

                    <button class="mb-1" v-if="currentPage !== pages" @click="nextPage()">
                        <Icon name="material-symbols:skip-next">

                        </Icon>
                    </button>
                </div>

            </nav>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['changePage', 'search'])

let currentPage = ref(1)
let search = ref('')
let advancetFilter = ref(false)
let searchTimer = ref(null)

const props = defineProps({
    items: { type: Array, default: [] },
    headers: { type: Array, required: true },
    pagination: { type: Object, default: null }
})
let pages = computed(() => {
    if (props.pagination) {
        return Math.ceil(props.pagination.total / props.pagination.limit)
    }
    else
        return 0
})
function nextPage() {
    console.log(currentPage.value);
    currentPage.value++
}
watch(currentPage, async (newValue, oldValue) => {
    if (newValue !== oldValue) {
        let newPagination = props.pagination
        newPagination.offset = newPagination.limit * (newValue - 1)
        emit('changePage', newPagination)
    }
})
watch(search, async (newValue, oldValue) => {
    if (newValue !== oldValue) {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            let newPagination = props.pagination
            newPagination.offset = 0
            currentPage.value = 1
            newPagination.search = search.value
            emit('changePage', newPagination)
        }, 500);
    }
})
</script>