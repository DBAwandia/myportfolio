import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://nodemailer-chi.vercel.app/api"
})