import userActions from "~~/apis/apiUser"

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: { 
            apiUser: userActions
        },
    }
})