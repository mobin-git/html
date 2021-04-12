import Axios from "axios";
import {mainapi} from "../mainapi";

export const GetWorks=(info,callback)=>{
    const userid= localStorage.getItem("userid")
    mainapi().get(`works/${info}/${userid}`)
    .then(response => {
      const data = response.data
      callback(true,data);
    }).catch(error => {
      callback(false,error.response.data);
    })
}

export const MakeWork=(work,callback)=>{
  const userid = localStorage.getItem("userid")
  mainapi().post("works",{
    "workname": work.workname ,
    "about": work.about ,
    "time": work.time ,
    "importance": work.importance ,
    "date": work.date ,
    "writer": userid
  })
  .then(response => {
    const data = "ok"
    callback(true,data);
  }).catch(error => {
    callback(false,error.response.data);
  })
}

export const EditDone=(info,callback)=>{
  mainapi().put(`works/edit/done/${info.workid}`,{
    "done": info.done ,
  })
  .then(response => {
    const data = "ok"
    callback(true,data);
  }).catch(error => {
    callback(false,error.response.data);
  })
}