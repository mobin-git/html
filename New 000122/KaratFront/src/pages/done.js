import React, { useEffect, useState } from "react";
import _ ,{contains,sortBy} from "underscore";

import {GetWorks} from "../api/Works/Worksapi"

import Workpartdone from "../components/workpartdone";

function Done() {

  const [dbd , setdbd] = useState([])

  useEffect(()=>{
    GetWorks("done",(okness , data)=>{
      if(!okness) return console.log(data.message);
      else setdbd(data);
    });
  },[]);

  const datesun = []
  
  for(let i = 0 ; i < dbd.length ; i++){
    const date = dbd[i].date
    const test = _.contains(datesun , date);
    if (test === false){datesun.push(date)}
  }

  const dates =  _.sortBy(datesun, function(num){ return num });

  function Finderwork(get){
    const works = dbd.filter(item=>{return item.date == get });
    return works.map(item=>{return {worknames: item.workname , keys: item._id , worktimes: item.time , workabouts: item.about}});
  }

  function tit(){
    if(dbd == ""){return <div className={"maintxtformat"}>فعلا که نداری :)</div>}
    else{return (dates.map(item=>{return <Workpartdone key={item} title={item} worksend={Finderwork(item)} />}))}
  }


  return (
    <div>
      <div className={"titlepage"}>
        <div className={"titlepagetxt"}>انجام شده</div>
        <input className={"searchbox"} placeholder={"جستجو..."}/>
      </div>
      <div>
      {tit()}
      </div>        
    </div>
    )
}

export default Done;