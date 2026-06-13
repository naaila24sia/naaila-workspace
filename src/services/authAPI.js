import axios from 'axios'

const API_URL = "https://uhvmxridbfiycckhflxr.supabase.co/rest/v1/users"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodm14cmlkYmZpeWNja2hmbHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyNzA4ODMsImV4cCI6MjA5Njg0Njg4M30.1OIhpUvsKwgYvfcoJ36sydFx5wWjYm50v9kPdg1xBOo"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation" 
}

export const authAPI = {
    async fetchUsers() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async registerUsers(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteUsers(id) {
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        return response.data
    },

    async loginUsers(email, password) {
        const response = await axios.get(`${API_URL}?email=eq.${email}&password=eq.${password}`, { headers })
        return response.data 
    },
    
    async fetchUserById(id) {
        const response = await axios.get(`${API_URL}?id=eq.${id}`, { headers })
        return response.data[0] 
    },

    async updateUser(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers })
        return response.data[0]
    }
}