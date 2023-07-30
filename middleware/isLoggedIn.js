import { useErpStore } from '~/stores/erpStore'

export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useErpStore()
    
    if (to.fullPath === '/login' && userStore.user?.id) {
        return navigateTo('/')
    }

    if (to.fullPath === '/register' && userStore.user?.id) {
        return navigateTo('/')
    }
})