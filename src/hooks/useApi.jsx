import axios from "axios";

const api = axios.create({
    baseUrl: process.env.VITE_API
})

export const useApi = () => ({
    validateToken: async(token) => {
       const response = await api.post('/validate', {token})
        return response.data 
    },
    signIn: async(email, password) => {
        const response = await api.post('/signin', {email, password})
        return response.data
    },
    logOut: async() => {
        const response = await api.post('/logout')
        return response.data
    }
})