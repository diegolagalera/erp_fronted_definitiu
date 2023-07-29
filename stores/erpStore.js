// import { defineStore } from 'pinia'
import { defineStore } from "pinia";
import axios from "~/plugins/axios";
const $axios = axios().provide.axios;

export const useErpStore = defineStore('erp', {
    state: () => ({
        msg: 'hello',
        users: {
            id: null,
            name: '',
            email: '',
            roles: '',
            isLoggedIn: false
        }
    }),
    actions: {
        setMsg(newMessage) {
            console.log('ooooooo');
            this.msg = newMessage
        },
        async login(form) {
            let data = new FormData()
            data.append('username', form.username)
            data.append('password', form.password)
            await $axios.post('/auth/login', data).then(response => {
                localStorage.setItem('token', response.data.access_token)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

            }).catch(error=> {
                console.log(error.response.data.detail);
            })
        },
        async getUsers() {
            this.users = []
            await $axios.post('/user', { 'params': [] }).then(response => {
                this.users = response.data
            })
        }
    },
    getters: {
        upper() {
            return this.msg.toUpperCase()
        }
    },
    persist: true
})