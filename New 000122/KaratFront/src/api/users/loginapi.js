import {mainapi} from "../mainapi";

export const loginapi=(user,callback)=>{
    if (user.input.length == 11 ){
      mainapi().post("users/loginwithphone",{
          "phone": user.input,
          "password": user.password
      })
      .then(response => {
        const data = response.data
        callback(true,data);
      }).catch(error => {
        callback(false,error.response.data);
      })
  }
  else{
    mainapi().post("users/loginwithemail",{
      "email": user.input,
      "password": user.password
    })
    .then(response=>{
      const data= response.data
      callback(true,data);
    }).catch(error=> {
      callback(false,error.response.data);
    });
  }
}