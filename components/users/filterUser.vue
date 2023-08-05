<template>
    <div class="shadow-lg rounded-md border">
        <div class="grid grid-cols-3 gap-x-6 px-4 py-4">
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    alias</label>
                <input type="text" id="small-input" v-model="props.modelValue.username"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    nombre</label>
                <input type="text" id="small-input" v-model="props.modelValue.name"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    apellido</label>
                <input type="text" id="small-input" v-model="props.modelValue.surname"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
        </div>
        <div class="grid grid-cols-3 gap-x-6 px-4 py-4">
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    telefono</label>
                <input type="text" id="small-input" v-model="props.modelValue.tel"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    email </label>
                <input type="text" id="small-input" v-model="props.modelValue.email"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    activo</label>
                <input type="checkbox" v-model="props.modelValue.disabled">
            </div>
        </div>
        <div class="text-center py-4">
            <button type="button" @click="search()"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Icon name="material-symbols:search" size="20"></Icon>
                Buscar
            </button>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['search'])

let props = defineProps({
    modelValue: {
        type: Object, default: {
            username: '',
            name: '',
            surname: '',
            tel: '',
            email: '',
            disabled: null
        }
    }
})
function search() {
    emit('search')
}
onUnmounted(() => {
    Object.keys(props.modelValue).forEach((clave) => {
        props.modelValue[clave] = ''
    });
    emit('search')
})

</script>