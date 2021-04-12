import React, { useState } from 'react';

import {useStyles} from "./styles";
import {registerapi} from "../../api/users/registerapi";

import VisibilityIcon from '@material-ui/icons/Visibility';

function register() {
    const style = useStyles()

    const [name,setname]= useState(); 
    const [family,setfamily]= useState();   
    const [email,setemail]= useState();
    const [phone,setphone]= useState();    
    const [password,setpassword]= useState();
    const [passwordcon , setpasswordcon]= useState();

    const clickhandler=()=>{
        if (!name || !family || !password || !passwordcon)return alert(`تمامی چیزی هایی رو که خواستیم وارد کن بی زحمت !!`)
        if (!phone){
            if (!email) return alert("رفیق باید حتما ایمیل یا تلفن همراهت  رو وارد کنی")
        }
        if (phone){
            if(phone.length !== 11) return alert("شماره تلفنت اشتباهه رفیق!")
        }
        if(passwordcon !== password) return alert("یه بار دیگه رمزت رو وارد کن ، تطبیق نداره ...")
        const user = {name: name, family: family,email: email,phone: phone,password: password}
        
        registerapi(user,(okness , data)=>{
            if(!okness) return alert(data);
            else{
                localStorage.setItem("something" , data.tokenium );
                localStorage.setItem("name" , data.name );
                localStorage.setItem("family", data.family)
                localStorage.setItem("userid", data.userid)
                window.location.reload();
            } 
        });
    }

    return(
        <div className={style.container}>
        <div className={style.box}>
            <div className={style.loginpart}>
                <div style={{display:"flex", flexDirection:"column" , alignItems:"center"}}>
                    <p className={style.notic}>حساب کاربری داری ؟! پس آماده ورود به کارات هستی !!</p>
                    <a className={style.loginbutton} href="/login"><div>ورود</div></a>
                </div>
                <div style={{display:"flex", flexDirection:"column" , alignItems:"center" , width:"70%"}}>
                    <h1 className={style.title}>صفحه ثبت نام</h1>
                    <div className={style.form}>
                        <p className={style.label}>اسم شما</p>
                        <input onChange={(e)=>setname(e.target.value)} type="text" className={style.input} style={{direction:"rtl"}} />
                    </div>
                    <div className={style.form}>
                        <p className={style.label}>فامیلی شما</p>
                        <input onChange={(e)=>setfamily(e.target.value)} type="text" className={style.input} style={{direction:"rtl"}} />
                    </div>
                    <div className={style.form}>
                        <p className={style.label}>ایمیل شما</p>
                        <input onChange={(e)=>setemail(e.target.value)} type="email" className={style.input} />
                    </div>
                    <div className={style.form}>
                        <p className={style.label}>تلفن همراه شما</p>
                        <input onChange={(e)=>setphone(e.target.value)} type="phone" className={style.input} />
                    </div>
                    <div className={style.form}>
                        <p className={style.label}>رمز عبور</p>
                        <input onChange={(e)=>setpassword(e.target.value)} type="password" className={style.input} />
                    </div>
                    <div className={style.form}>
                        <p className={style.label}>تکرار رمز عبور</p>
                        <input onChange={(e)=>setpasswordcon(e.target.value)} type="password" className={style.input} />
                    </div>
                    <div style={{display:"flex", flexDirection:"column" , alignItems:"center", width:"100%"}}>
                        <button onClick={clickhandler} className={style.registerbutton}>ثبت نام !</button>
                    </div>
                </div>
            </div>
                <img className={style.img} src="images/register.png"/>
        </div>
    </div>
)}

export default register;
