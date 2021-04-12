import {mainapi} from "../mainapi";

export const registerapi=(user,callback)=>{
    if(!user.phone){
        mainapi().post("users/register",{
            "name": user.name ,
            "family": user.family ,
            "email": user.email ,
            "password": user.password
        })
        .then(response => {
            const data = response.data
            callback(true,data);
        }).catch(error => {
            callback(false,error.response.data);
        })
    }
    else if (!user.email){
        mainapi().post("users/register",{
            "name": user.name ,
            "family": user.family ,
            "phone": user.phone ,
            "password": user.password
        })
        .then(response => {
            const data = response.data
            callback(true,data);
        }).catch(error => {
            callback(false,error.response.data);
        })
    } else {
        mainapi().post("users/register",{
            "name": user.name ,
            "family": user.family ,
            "email": user.email ,
            "phone": user.phone ,
            "password": user.password
        })
        .then(response => {
            const data = response.data
            callback(true,data);
        }).catch(error => {
            callback(false,error.response.data);
        })       
    }
}