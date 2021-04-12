import React, { useState } from "react";
import Workbase from './workbase'

function Workpart(props) {
  const arr= props.worksend

  return <div style={{marginBottom:"4rem"}}>
    <div className={"datetitlebar"}>{props.title}</div>
    <div className={"divi"}>
      <div style={{width:"5%"}}></div>
      <div style={{width:"30%"}}>عنوان</div>
      <div style={{width:"30%"}}>توضیحات</div>
      <div style={{width:"25%"}}>زمان موردنیاز/تاریخ تحویل</div>
      <div style={{width:"10%",fontSize:"0.691rem"}}>تغییر/حذف/جزییات</div>
    </div>
    <div><Workbase names={arr} date={props.title} /></div>
  </div>
}

export default Workpart;