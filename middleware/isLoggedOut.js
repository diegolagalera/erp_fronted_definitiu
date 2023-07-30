import { useErpStore } from '~~/stores/erpStore'

export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useErpStore()
    
    if (!userStore.user?.id) {
        return navigateTo('/login')
    }
})