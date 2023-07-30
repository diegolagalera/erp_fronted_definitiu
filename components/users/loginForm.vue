<template>
    <div
        class="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 z-20">
        <form class="space-y-6" @submit.prevent="send()">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">{{ $t('LOGGIN.TITLE') }}</h5>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {{ $t('LOGGIN.USERNAME') }}
                </label>
                <input id="email" v-model="form.username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {{ $t('LOGGIN.PASSWORD') }}
                </label>
                <input type="password" id="password" v-model="form.password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <!-- TODO RECUPERAR CONTRASEÑA -->
            <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {{ $t('LOGGIN.BUTTON') }}
            </button>
        </form>
    </div>
</template>
<script setup>
const emit = defineEmits(['login'])

let form = ref({
    username: '',
    password: ''
})
function send() {
    emit("login", form.value)
}
</script>