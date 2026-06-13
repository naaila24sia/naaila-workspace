import axios from 'axios';

const SUPABASE_URL = "https://uhvmxridbfiycckhflxr.supabase.co/rest/v1/users";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodm14cmlkYmZpeWNja2hmbHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyNzA4ODMsImV4cCI6MjA5Njg0Njg4M30.1OIhpUvsKwgYvfcoJ36sydFx5wWjYm50v9kPdg1xBOo";

export const api = axios.create({
    baseURL: SUPABASE_URL,
    headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation" 
    }
});