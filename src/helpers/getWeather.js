import axios from "axios"; //para hacer consultas http y consumir api aqui obtengo la data
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-13.6339&longitude=-72.8814&current=temperature_2m&timezone=auto';

export const getTemperatura = async () =>{
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.current.temperature_2m;
    return nuevaTemperatura
};