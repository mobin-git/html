import React, { useEffect, useState } from "react";
import Workpart from "../components/workpart"
import _ ,{contains,sortBy} from "underscore"
import * as axios from "axios";
import SearchIcon from '@material-ui/icons/Search';
import Form from "../components/Form/form"
import { GetWorks } from "../api/Works/Worksapi";

function Works() {

  const [db , setdb] = useState([])
  const datesun = []

  useEffect(()=>{
    GetWorks("undone",(okness , data)=>{
      if(!okness) return console.log(data.message);
      else setdb(data);
    });
  },[]);

  
  for(let i = 0 ; i < db.length ; i++){const date = db[i].date;
    const test = _.contains(datesun , date);
    if (test === false){datesun.push(date)}
  }

  const dates =  _.sortBy(datesun, function(num){ return num });

  function Finderwork(get){
    const works = db.filter(item=>{return item.date == get });
    return works.map(item=>{return {worknames: item.workname , keys: item._id, worktimes: item.time , workabouts: item.about}});
  }

  return (
    <div>
      <div className={"titlepage"}>
        <div className={"titlepagetxt"}>وظایف</div>
        <div style={{display:"flex",alignContent:"center"}}><SearchIcon/><input className={"searchbox"} placeholder={"جستجو..."}/></div>
      </div>
      <Form/>
      <div>{dates.map(item=>{return <Workpart key={item} title={item} worksend={Finderwork(item)} /> })}</div>        
    </div>
  )
}

export default Works;