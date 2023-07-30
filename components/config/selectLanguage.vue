<template>
    <div id="dropdown-language">
        <button @click="showSelectLanguage = !showSelectLanguage" type="button" class="inline-flex px-4 py-2 w-28 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200
         hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800
          dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <Icon :name="localeIcon" size="18" class="mr-4"></Icon>
            {{ locale }}
        </button>
        <div v-if="showSelectLanguage"
            class="absolute z-50 my-2 w-28 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
                <li v-for="(item, key) in lang" :key="key">
                    <button type="button" @click="saveLang(item.name)"
                        class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <div class="inline-flex items-center">
                            <Icon :name="item.icon" size="18" class="mr-4"></Icon>
                            {{ item.name }}
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { useErpStore } from '~/stores/erpStore'
// VARIABLES
const erp = useErpStore()
const { locale } = useI18n()
let showSelectLanguage = ref(false)
let lang = [
    { 'id': 1, 'name': 'es', 'icon': 'circle-flags:es-variant' },
    { 'id': 2, 'name': 'en', 'icon': 'circle-flags:en' }
]
if (erp.language) {
    locale.value = erp.language
}
// FUNCTIONS
function saveLang(langName) {
    locale.value = langName
    erp.language = langName
    showSelectLanguage.value = false
}
// COMPUTED
let localeIcon = computed(() => {
    let langCopy = utils.copy(lang);
    let find = langCopy.find(item => item.name == locale.value)
    return find.icon
})
const clickOutside = (event) => {
    const modal = document.getElementById('dropdown-language');
    if (!modal.contains(event.target) && showSelectLanguage.value) {
        showSelectLanguage.value = false
    }
}
// MOUNTED
onMounted(() => {
    window.document.addEventListener('click', clickOutside)
})
// UNMOUNTED
onBeforeUnmount(() => {
    window.document.removeEventListener('click', clickOutside);
})


</script>