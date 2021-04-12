import React, { useState } from "react";
import axios from "axios";

import {EditDone} from "../api/Works/Worksapi"

import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';

function Workbase(props) {
  const arr = props.names

  function done(id){
    const info = {workid: id , done: "yes" }
    EditDone(info,(okness , data)=>{
      if(!okness) return alert(data);
      else{window.location.reload()} 
    });
  }

  function del(id){
    axios.delete(`http://localhost:2200/works/delete/${id}`)
    .then(response=>{
      const ok = response
      window.location.reload()
    }).catch(error=>{
      console.log(error);
    })
  }

  return <div>
    <div>{arr.map(item=>{return <div key={item.keys} className={"workbox"}>
      
      <div style={{width:"5%",display:"flex",justifyContent:"center"}}>
        <button type="submit" onClick={() => done(item.keys)} className={"ticbut"}>
          <img src={"/images/check.png"} style={{width:"1.2vw"}}/>
        </button>
      </div>
      <div className={"workbon"}>{item.worknames}</div>
      <div className={"workbto"}>{item.workabouts}</div>
      <div className={"workbzt"}>
        <div className={"workbza"}>{item.worktimes+" "+"ساعت"}</div>
        <div className={"workbta"}>{props.date}</div>
      </div>
      <div className={"workbbu"}>
        <button className={"boxicon"}><CreateIcon style={{color:" #00296b"}}/></button>
        <button onClick={()=>{del(item.keys)}} className={"boxicon"}><DeleteIcon style={{color:" #00296b"}} /></button>
        <button className={"boxicon"}><InfoIcon style={{color:" #00296b"}} /></button>
      </div>
      </div>})}</div>
  </div>
}

export default Workbase;