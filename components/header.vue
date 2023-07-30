<template>
    <div class="max-w-screen flex flex-row items-center justify-between mx-auto p-4">
        <div>
        </div>
        <div>
            <div class="relative hidden md:block">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar"
                    class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search...">
            </div>
        </div>
        <div class=" flex flex-col" id="user-menu">
            <button type="button" @click="showProfile = !showProfile"
                class="h-12 w-12 px-1 overflow-hidden border-black border-solid border-[1px] flex mr-3 text-sm bg-emerald-200 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 self-end"
                id="user-menu-button" aria-expanded="false">
                <span class="sr-only">Open user menu</span>
                <!-- <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"> -->
                <Icon name="twemoji:person-pouting-light-skin-tone" size="60"></Icon>
            </button>
            <!-- Dropdown menu -->
            <div v-show="showProfile"
                class="absolute z-50 mt-14 -ml-32 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-4 py-3">
                    <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                    <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <button href="#"
                            class="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">button</button>
                    </li>
                    <li>
                        <button href="#" @click="logout()"
                            class="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{{
                                $t('LOGGIN.SINGOUT') }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const erpStore = useErpStore()
const router = useRouter()
var showProfile = ref(false)
function logout() {
    try {
        erpStore.logout()
        router.push('/login')
    } catch (error) {
        console.log(error);
    }
}

const clickOutsideMenuProfile = (event) => {
    const modal = document.getElementById('user-menu');
    if (!modal.contains(event.target) && showProfile) {
        showProfile.value = false
    }
}
// MOUNTED
onMounted(() => {
    window.document.addEventListener('click', clickOutsideMenuProfile);
})
// UNMOUNTED
onBeforeUnmount(() => {
    window.document.removeEventListener('click', clickOutsideMenuProfile);
})
</script>