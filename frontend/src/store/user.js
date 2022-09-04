import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import router from '../router'

export const useUserStore = defineStore('user', () => {
    const user = ref({})
    const isLoggedIn = ref(false)
    const token = ref('')

    const submitLogin = (username, password) => {
        let data_sending = {
            username: username,
            password: password
        }
        axios.post('/auth/login', data_sending).then(
            (res) => {
                console.log(res)
                let dataUser = res.data.data.user
                let username = dataUser.name

                localStorage.setItem('user', JSON.stringify(dataUser))
                localStorage.setItem('token', res.data.data.access_token)

                isLoggedIn.value = true

                alert(`Selamat Datang ${username}`)


                router.push('/')
            }
        ).catch(err => {
            console.log(err)
            alert('Username atau password salah')
        })
    }

    return {
        user,
        isLoggedIn,
        token,
        submitLogin
    }
})