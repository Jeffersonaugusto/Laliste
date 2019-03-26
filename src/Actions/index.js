import axios from 'axios'
export const fetchCategorias =() =>{
    //requisção http
     const request = axios.get('http://192.168.1.105:3000/ ')
 
    return{
        type:'FETCH_CATEGORIAS',
        payload: request,
    };
};

