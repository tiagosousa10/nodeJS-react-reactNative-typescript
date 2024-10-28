import axios from "axios";

//Base da URL =  https://api.themoviedb.org/3/
//url da API =  https://api.themoviedb.org/3/movie/11?api_key=4918b57fe5bca39d62d74a18826d997d

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api
