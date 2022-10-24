import axios from 'axios';

const URL_API = 'https://workshop4-back-production.up.railway.app';

export const getDestinations = async () => {
    try {
        const { data } = await axios.get(`${URL_API}/destinations`)
        return data;
    } catch (error) {
        return []
    }
}

export const getCrew = async () => {
    try {
        const { data } = await axios.get(`${URL_API}/crew`)
        return data
    } catch (error) {
        return []
    }
}