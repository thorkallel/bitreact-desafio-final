import axios from "axios";

const API_URL = "https://fakestoreapi.com/users";

export const getusers = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error al obtener el usuario", error);
    }
}