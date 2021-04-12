import React, { useState } from "react";
import axios from "axios";
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';

function Workbasedone(props) {
  const arr = props.names

  const [refresher , setrefresh] = useState("")

  function done(id){  
    axios.put(`http://localhost:2200/works/edit/done/${id}`, {
      "done": "no"
    })
    .then(response => {
      setrefresh(response)
    }).catch(error => {
      console.log(error);
    })
  }

  function del(id){
    axios.delete(`http://localhost:2200/works/delete/${id}`)
    .then(response=>{
      setrefresh(response)
    }).catch(error=>{
      console.log(error);
    })
  }

  return <div>
    <div>{arr.map(item=>{return <div key={item.keys} className={"workboxd"}>
      <div style={{width:"5%",display:"flex",justifyContent:"center"}}>
        <form>
        <button type="submit" onClick={() =>{done(item.keys)}} style={{opacity:"1"}} className={"ticbut"}>
          <img src={"/images/check.png"} style={{width:"1.2vw"}}/>
        </button>
        </form>
      </div>
      <div className={"workbon"}>{item.worknames}</div>
      <div className={"workbto"}>{item.workabouts}</div>
      <div className={"workbzt"}>
        <div className={"workbza"}>{item.worktimes+" "+"ساعت"}</div>
        <div className={"workbta"}>{props.date}</div>
      </div>
      <form className={"workbbu"}>
        <button className={"boxicon"}><CreateIcon/></button>
        <button onClick={()=>{del(item.keys)}} className={"boxicon"}><DeleteIcon/></button>
        <button className={"boxicon"}><InfoIcon/></button>
      </form>
      </div>})}</div>
  </div>
}

export default Workbasedone;