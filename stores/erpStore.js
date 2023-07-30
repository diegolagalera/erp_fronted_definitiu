import { defineStore } from "pinia";
import axios from "~/plugins/axios";
const $axios = axios().provide.axios;
import userActions from "~/apis/apiUser"

export const useErpStore = defineStore('erp', {
    state: () => ({
        msg: 'hello',
        language: null,
        user: {
            // id: 2
        }
    }),
    actions: {
        async [userActions.LOGGIN.name](form) {
            let data = new FormData()
            data.append('username', form.username)
            data.append('password', form.password)
            await $axios.post(userActions.LOGGIN.url, data).then(response => {
                // GUARDAMOS EL TOKEN EN LA SESSIOON LOCALSTORAGE
                localStorage.setItem('token', response.data.access_token)
                // CONFIGURAMOS AXIOS PARA QUE UTILIZE EL TOKEN LAS PROXIMAS LLAMADAS
                $axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                this[userActions.ME.name]()
            }).catch(error => {
                console.log(error);
            })
        },
        async [userActions.ME.name]() {
            this.user = null
            if ($axios.defaults.headers.common['Authorization']) {
                await $axios.get(userActions.ME.url).then(response => {
                    this.user = response.data
                })
            }

        },
        async [userActions.GET_USERS.name]() {
            this.users = []
            await $axios.post('/user', { 'params': [] }).then(response => {
                this.users = response.data
            })
        },
        logout() {
            this.user = null
            localStorage.removeItem('token')
            $axios.defaults.headers.common['Authorization'] = ''
        }

    },
    getters: {
        upper() {
            return this.msg.toUpperCase()
        }
    },
    persist: true
})