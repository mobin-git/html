import {mainapi} from "../mainapi";

export const Todaysapi=(info,callback)=>{
    mainapi().post(`reports/todays/${localStorage.getItem("userid")}`,{
        "wantdate": info
    })
    .then(response => {
        const data = response.data
        callback(true,data);
    }).catch(error => {
        callback(false,error.response.data);
    })
}