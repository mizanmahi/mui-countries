import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/'; // local

//@ creating a axios instance with some basic configuration
export const axiosInstance = axios.create({
   baseURL,
});
