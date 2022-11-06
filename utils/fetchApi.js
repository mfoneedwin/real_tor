import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
     const { data } = await axios.get((url), {
          headers: {
               'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
               'X-RapidAPI-Key': '30fb34d9d3msh9309adc78401e93p15bde6jsn4c498f1c0084'
             }
     })

     return data; // return
}