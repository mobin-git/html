import React, { useEffect, useState } from "react";
import axios from "axios";
import {useStyles} from "./styles"

import { MakeWork } from "../../api/Works/Worksapi"

const Form = () => {

    const style = useStyles()

    const[gwtitle,setgwtitle]= useState("")
    const[gwdate,setgwdate]= useState("")
    const[gwtime,setgwtime]= useState("")
    const[gwim,setgwim]= useState("")
    const[gwsub,setgwsub]= useState("")
    
    function butthandler(){
        if(!gwtitle)return alert("رفیق حتما باید یه عنوان بنویسی !");

        const getwork= {
            workname: gwtitle ,
            about: gwsub,
            time: gwtime,
            importance: gwim,
            date: gwdate
        }
        
        MakeWork(getwork,(okness , data)=>{
            if(!okness) return alert(data);
            else{
                window.location.reload();
            } 
        });
    }

    return ( 
        <div>
            <form className={style.mainform}>
                <div className={style.formpart1}>
                    <input autoFocus  onChange={(e)=>{setgwtitle(e.target.value)}} style={{width:"40%"}} className={style.inputs} placeholder={"عنوان"}/>
                    <input onChange={(e)=>{setgwdate(e.target.value)}} style={{width: "20%"}} className={style.inputs} placeholder={"تاریخ تحویل"}/>
                    <input onChange={(e)=>{setgwtime(e.target.value)}} style={{width: "20%"}} className={style.inputs} placeholder={"زمان مورد نیاز"}/>
                    <select onChange={(e)=>{setgwim(e.target.value)}} style={{width:"15%",color:"gray"}} className={style.inputs} >
                        <option>درجه اهمیت</option>
                        <option>بی اهمیت</option>
                        <option>اهمیت متوسط</option>
                        <option>اهمیت زیاد</option>
                    </select>
                </div>
                <div className={style.formpart2}>
                    <textarea onChange={(e)=>{setgwsub(e.target.value)}} placeholder={"توضیحات"} style={{resize:"none", height: "6rem", width:"100%"}} className={style.inputs} />
                    <button onClick={butthandler} type={"submit"} className={style.addbut}>افزودن</button>
                </div>
            </form>
        </div>
     );
}
 
export default Form;
