import Axios from 'axios';

export const mainapi=()=>{
    return Axios.create({
        baseURL: "http://localhost:2200/",
    })
}